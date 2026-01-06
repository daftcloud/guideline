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

const baseURL = "https://just-the-docs.github.io/guideline/"; 
const outputPath = path.join(__dirname, "assets", "pdf", "guideline.pdf");

(async () => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
  const page = await browser.newPage();

  const pdfBuffers = [];

  for (const p of pages) {
    console.log("Processing:", baseURL + p);
    await page.goto(baseURL + p, { waitUntil: "networkidle0" });

    // Génère le PDF pour chaque page
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "2cm", bottom: "2cm", left: "2cm", right: "2cm" }
    });

    pdfBuffers.push(pdfBuffer);
  }

  // Concatène les pages dans un PDF global
  const finalBuffer = Buffer.concat(pdfBuffers);
  fs.writeFileSync(outputPath, finalBuffer);

  await browser.close();
  console.log("PDF généré:", outputPath);
})();