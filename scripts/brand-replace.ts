/* Run: npx ts-node scripts/brand-replace.ts
   - Make sure: npm i -D ts-node
   - Adjust REPLACEMENTS below before running.
*/
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

// 1) Put your OLD → NEW text/image replacements here.
const REPLACEMENTS: Array<{ find: RegExp; replace: string; note?: string }> = [
  // Names / Taglines
  { find: /\bUni Hero\b/g, replace: "UniHero", note: "Normalize name spacing" },
  { find: /\bUnihero\b/g, replace: "UniHero" },
  { find: /Resources for students\./g, replace: "Resources and tools for students" },

  // Old asset paths → new brand assets
  { find: /\/images\/logo\.svg/g, replace: "/brand/logo.svg" },
  { find: /\/images\/logo-dark\.svg/g, replace: "/brand/logo-dark.svg" },
  { find: /\/images\/og\.png/g, replace: "/brand/og.png" },
  { find: /\/hero\/.*?\.(png|jpg|jpeg|webp)/g, replace: "/brand/hero.jpg" },

  // Example prompts (adjust/remove):
  { find: /Get started now!/g, replace: "Get Started" },
  { find: /Learn more about us/g, replace: "Learn More" },
];

// 2) Which file extensions to touch
const EXTENSIONS = new Set([".ts", ".tsx", ".md", ".json", ".css", ".mjs", ".cjs"]);

// 3) Folders to ignore
const IGNORE = new Set(["node_modules", ".next", ".git", "dist", "build"]);

function walk(dir: string, files: string[] = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (IGNORE.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (EXTENSIONS.has(path.extname(entry.name))) files.push(full);
  }
  return files;
}

function applyReplacements(file: string) {
  let content = fs.readFileSync(file, "utf8");
  let changed = false;

  for (const { find, replace } of REPLACEMENTS) {
    const next = content.replace(find, replace);
    if (next !== content) {
      changed = true;
      content = next;
    }
  }
  if (changed) {
    fs.writeFileSync(file, content, "utf8");
    console.log("Updated:", file);
  }
}

function main() {
  const files = walk(ROOT);
  console.log(`Scanning ${files.length} files...`);
  files.forEach(applyReplacements);
  console.log("Done.");
}

main();
