import * as fs from "node:fs";
import * as path from "node:path";

const entry =
  "The deadline was in my context window. Then you asked one more question and it fell out.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), entry, "utf8");

// Gate check: the entry must be one line of 1-200 characters.
if (entry.length < 1 || entry.length > 200 || entry.includes("\n")) {
  throw new Error(`entry out of gate: ${entry.length} chars`);
}
console.log(`entry ok: ${entry.length} chars`);
