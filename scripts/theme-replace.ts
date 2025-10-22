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
  // Old → new palette (zarur bo'lsa ko'paytiring)
  { find: /#0A1F44/gi, replace: "#021024" },
  { find: /#1C3C78/gi, replace: "#052659" },
  { find: /#007BFF/gi, replace: "#5483B3" },
  { find: /#EAF2FD/gi, replace: "#C1E8FF" },
  // Gradients to our bg
  {
    find: /linear-gradient\(135deg,[^)]+\)/gi,
    replace: "linear-gradient(135deg, #052659 0%, #021024 60%)",
  },
  // Headline normalization
  { find: /— Talabalar uchun, Talabalar tomonidan/gi, replace: "— For Students, By Students" },
  { find: /Uni Hero/gi, replace: "UniHero" },
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
  if (changed) { fs.writeFileSync(file, s, "utf8"); console.log("Updated:", file); }
}

const files = walk(ROOT);
console.log(`Scanning ${files.length} files...`);
files.forEach(apply);
console.log("Done.");
