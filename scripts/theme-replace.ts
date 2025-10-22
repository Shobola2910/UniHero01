/* Run:
   npm i -D ts-node
   npx ts-node scripts/theme-replace.ts
*/
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const EXT = new Set([".ts", ".tsx", ".css", ".md", ".json", ".mjs", ".cjs"]);
const IGN = new Set(["node_modules", ".next", ".git", "dist", "build"]);

const REPL = [
  // Old sample colors → New palette (add your old hexes here if different)
  { find: /#0A1F44/gi, replace: "#021024" }, // deep navy
  { find: /#1C3C78/gi, replace: "#052659" }, // navy
  { find: /#007BFF/gi, replace: "#5483B3" }, // accent → steel blue
  { find: /#EAF2FD/gi, replace: "#C1E8FF" }, // surface → powder blue
  { find: /#7DA0CA/gi, replace: "#7DA0CA" },  // keep (for idempotence)
  { find: /#5483B3/gi, replace: "#5483B3" },
  // Gradients (old → new)
  {
    find: /linear-gradient\(135deg,\s*#0A1F44.*?\)/gi,
    replace: "linear-gradient(135deg, #021024 0%, #052659 45%, #5483B3 100%)",
  },
  // Brand text normalization
  { find: /For Students, By Students/gi, replace: "For Students, By Students" },
  { find: /Uni Hero/gi, replace: "UniHero" },
  // Tailwind class quick wins (optional, safe ones only)
  { find: /\bbg-white\b/g, replace: "bg-brand-950" },
  { find: /\btext-zinc-900\b/g, replace: "text-white" },
  { find: /\btext-zinc-100\b/g, replace: "text-brand-100" },
];

function walk(dir: string, out: string[] = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (IGN.has(e.name)) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, out);
    else if (EXT.has(path.extname(e.name))) out.push(full);
  }
  return out;
}

function apply(file: string) {
  let s = fs.readFileSync(file, "utf8");
  let changed = false;
  for (const r of REPL) {
    const next = s.replace(r.find, r.replace);
    if (next !== s) { s = next; changed = true; }
  }
  if (changed) {
    fs.writeFileSync(file, s, "utf8");
    console.log("Updated:", file);
  }
}

const files = walk(ROOT);
console.log(`Scanning ${files.length} files...`);
files.forEach(apply);
console.log("Done.");
