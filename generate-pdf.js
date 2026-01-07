const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const pages = [
  "1_presentation.html",
  "2_FRBR.html",
  "3_autorite.html",
  "4_index.html",
  "5_remarques.html",
  "6_conclusion.html",
  "7_index.html"
];

const baseURL = "https://daftcloud.github.io/guideline/";

const rootDir = process.cwd();
const outputDir = path.join(rootDir, "assets", "pdf");
const outputPath = path.join(outputDir, "guideline.pdf");

(async () => {
  
  fs.mkdirSync(outputDir, { recursive: true });

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const page = await browser.newPage();
  const pdfBuffers = [];

  for (const p of pages) {
    console.log("Processing:", baseURL + p);
    await page.goto(baseURL + p, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "2cm",
        bottom: "2cm",
        left: "2cm",
        right: "2cm"
      }
    });

    pdfBuffers.push(pdfBuffer);
  }

  const finalBuffer = Buffer.concat(pdfBuffers);
  fs.writeFileSync(outputPath, finalBuffer);

  await browser.close();
  console.log("PDF généré :", outputPath);
})();
