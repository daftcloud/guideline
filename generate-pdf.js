const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const { PDFDocument } = require("pdf-lib");

const rootDir = process.cwd();
const outputDir = path.join(rootDir, "assets", "pdf");
const outputPath = path.join(outputDir, "guideline.pdf");
const coverPath = path.join(outputDir, "cover_page.pdf");
const tempPdfPath = path.join(outputDir, "temp_guideline.pdf");

const url = `file://${path.join(rootDir, "_site", "print.html")}`;

(async () => {
  
  fs.mkdirSync(outputDir, { recursive: true });

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
    
  });

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle0" });


  await page.pdf({
    path: outputPath,
    format: "A4",
    printBackground: true,
    margin: {
      top: "2cm",
      bottom: "2cm",
      left: "2cm",
      right: "2cm"
    },
});

  await browser.close();

  // On fusionne cover_page.pdf et le PDF généré

  const coverBytes = fs.readFileSync(coverPath);
  const mainBytes = fs.readFileSync(tempPdfPath);

  const coverPdf = await PDFDocument.load(coverBytes);
  const mainPdf = await PDFDocument.load(mainBytes);

  const mergedPdf = await PDFDocument.create();

  const [coverPage] = await mergedPdf.copyPages(coverPdf, [0]);
  mergedPdf.addPage(coverPage);

  const mainPages = await mergedPdf.copyPages(mainPdf, mainPdf.getPageIndices());
  mainPages.forEach(page => mergedPdf.addPage(page));

  const mergedBytes = await mergedPdf.save();
  fs.writeFileSync(outputPath, mergedBytes);

  fs.unlinkSync(tempPdfPath);

  console.log("PDF généré :", outputPath);
})();
