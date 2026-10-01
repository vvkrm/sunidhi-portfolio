// Decodes base64 image sources (public/images/*.b64) into real image files.
// Lets the repo stay fully reproducible without committing binary blobs.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join, basename } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dir = join(root, "public", "images");

const pairs = [
  ["sunidhi.jpg.b64", "sunidhi.jpg"],
  ["bts-plushie.webp.b64", "bts-plushie.webp"],
];

for (const [srcName, dstName] of pairs) {
  const src = join(dir, srcName);
  const dst = join(dir, dstName);
  if (!existsSync(src)) {
    console.warn(`[decode-images] missing ${srcName}, skipping`);
    continue;
  }
  const decoded = Buffer.from(
    readFileSync(src, "utf8").replace(/\s+/g, ""),
    "base64"
  );
  if (existsSync(dst)) {
    const current = readFileSync(dst);
    if (createHash("sha1").update(current).digest("hex") ===
        createHash("sha1").update(decoded).digest("hex")) {
      console.log(`[decode-images] ${dstName} already up to date`);
      continue;
    }
  }
  writeFileSync(dst, decoded);
  console.log(`[decode-images] wrote ${dstName} (${decoded.length} bytes)`);
}
