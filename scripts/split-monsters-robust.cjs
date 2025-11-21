// Splits monsterSRD.ts into individual files per monster, robustly handling nested structures.
// This likely won't need to be retained, but I'm keeping it around just in case.
const fs = require("fs");
const path = require("path");
const { camelCase } = require("lodash");

const root = path.resolve(__dirname, "..");
const srcDir = path.join(root, "src", "monster-srd");
const file = path.join(srcDir, "monsterSRD.ts");
const outDir = path.join(srcDir, "monsters-2014");

if (!fs.existsSync(file)) {
  console.error("monsterSRD.ts not found at", file);
  process.exit(1);
}

const text = fs.readFileSync(file, "utf8");

const arrStartToken = "export const MONSTER_SRD";
const arrPos = text.indexOf(arrStartToken);
if (arrPos === -1) {
  console.error("MONSTER_SRD declaration not found");
  process.exit(1);
}

// find the array literal start after the '=' sign
const eqPos = text.indexOf("=", arrPos);
if (eqPos === -1) {
  console.error("= not found after MONSTER_SRD");
  process.exit(1);
}
const bracketPos = text.indexOf("[", eqPos);
if (bracketPos === -1) {
  console.error("Opening [ for array not found");
  process.exit(1);
}

let i = bracketPos + 1;
let arrayDepth = 1;
let objs = [];

let inString = false;
let stringChar = null;
let escaped = false;
let braceDepth = 0;
let objStart = -1;

for (; i < text.length; i++) {
  const ch = text[i];

  if (inString) {
    if (escaped) {
      escaped = false;
      continue;
    }
    if (ch === "\\") {
      escaped = true;
      continue;
    }
    if (ch === stringChar) {
      inString = false;
      stringChar = null;
      continue;
    }
    continue;
  }

  if (ch === '"' || ch === "'" || ch === "`") {
    inString = true;
    stringChar = ch;
    escaped = false;
    continue;
  }

  if (ch === "[") {
    arrayDepth++;
    continue;
  }
  if (ch === "]") {
    arrayDepth--;
    if (arrayDepth === 0) break;
    continue;
  }

  if (ch === "{") {
    if (arrayDepth === 1 && braceDepth === 0) {
      // start of a top-level object
      objStart = i;
    }
    braceDepth++;
    continue;
  }
  if (ch === "}") {
    braceDepth--;
    if (arrayDepth === 1 && braceDepth === 0 && objStart !== -1) {
      const objText = text.slice(objStart, i + 1);
      objs.push(objText);
      objStart = -1;
    }
    continue;
  }
}

console.log("Found", objs.length, "monster objects");

if (objs.length === 0) {
  console.error("No objects found; aborting to avoid data loss");
  process.exit(1);
}

const header = text.slice(0, arrPos);

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const fileNames = [];
for (let k = 0; k < objs.length; k++) {
  const obj = objs[k];
  // Prefer top-level name (indented 4 spaces), fallback to any name
  const nameMatch = obj.match(/\n\s{4}name:\s*"([^"]+)"/);
  let name = nameMatch
    ? nameMatch[1]
    : (obj.match(/\n\s*name:\s*"([^"]+)"/) || [])[1] || `monster-${k}`;
  const fileNameSafeBase = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^[-]+|[-]+$/g, "");
  const fileNameSafe = `${fileNameSafeBase || "monster-" + k}`;
  const outFile = path.join(outDir, `${fileNameSafe}.ts`);
  const fileContent = `${header}\n\nexport default ${obj};\n`;
  fs.writeFileSync(outFile, fileContent, "utf8");
  fileNames.push(path.basename(outFile, ".ts"));
}

// Backup original only once
const backup = file + ".bak2";
if (!fs.existsSync(backup)) {
  fs.copyFileSync(file, backup);
  console.log("Backed up original to", backup);
}

const imports = fileNames
  .map((n) => `import ${camelCase(n)}2014 from './monsters-2014/${n}';`)
  .join("\n");
const exportArray = `export const MONSTER_SRD = [\n${fileNames.map((n) => `  ${camelCase(n)}2014`).join(",\n")}\n];\n`;
const newFile = `${header}\n${imports}\n\n${exportArray}`;
fs.writeFileSync(file, newFile, "utf8");
console.log("Wrote new monsterSRD.ts with", fileNames.length, "imports");
console.log("Done.");
