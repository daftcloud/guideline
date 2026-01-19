const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const url = `file://${path.join(process.cwd(), "_site", "print.html")}`;

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
    }
  });

  await browser.close();
  console.log("PDF généré :", outputPath);
})();
