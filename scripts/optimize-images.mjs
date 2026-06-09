import sharp from "sharp";
import { readFileSync, writeFileSync, statSync } from "fs";
import { resolve } from "path";

const publicDir = "public";

const kb = (bytes) => (bytes / 1024).toFixed(1) + " KB";

// Convert clientes.png to WebP
async function convertPng() {
  const input = resolve(publicDir, "clientes.png");
  const output = resolve(publicDir, "clientes.webp");
  const info = await sharp(input).webp({ quality: 80 }).toFile(output);
  const before = statSync(input).size;
  console.log(`clientes.png  ${kb(before)} → clientes.webp ${kb(info.size)} (saved ${kb(before - info.size)})`);
}

// Extract base64 PNG from SVG and convert to WebP
async function convertSvg(name) {
  const input = resolve(publicDir, `${name}.svg`);
  const svgContent = readFileSync(input, "utf8");

  const match = svgContent.match(/data:image\/png;base64,([A-Za-z0-9+/=]+)/);
  if (!match) {
    console.log(`${name}.svg: no embedded PNG found, skipping`);
    return false;
  }

  const pngBuffer = Buffer.from(match[1], "base64");
  const output = resolve(publicDir, `${name}.webp`);
  const info = await sharp(pngBuffer).webp({ quality: 82 }).toFile(output);
  const before = statSync(input).size;
  console.log(`${name}.svg  ${kb(before)} → ${name}.webp ${kb(info.size)} (saved ${kb(before - info.size)})`);
  return true;
}

const svgs = ["mascotefeliz", "mascotepensando", "mascoteapontando", "mascoteraio", "bemvindo"];

await convertPng();
for (const name of svgs) {
  await convertSvg(name);
}

console.log("\nDone. Update component imports: change .svg → .webp for mascotes, clientes.png → clientes.webp");
