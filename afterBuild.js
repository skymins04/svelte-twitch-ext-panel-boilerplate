import { resolve } from "path";
import fs from "fs";
const __dirname = resolve();
const distDir = resolve(__dirname, "dist");

const fileNames = fs.readdirSync(distDir).filter(fileName => fileName.endsWith(".html"));

for (const fileName of fileNames) {
  const fileDir = resolve(distDir, fileName);
  const fileContent = fs.readFileSync(fileDir, "utf-8");
  fs.writeFileSync(fileDir, fileContent.replace(/\/assets/g, "assets"), "utf-8");
}
