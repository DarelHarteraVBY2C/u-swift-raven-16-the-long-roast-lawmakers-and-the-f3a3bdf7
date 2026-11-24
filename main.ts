// The Long Roast: Lawmakers and the File They Cannot Convert
// Writes exactly one satirical sentence (<=320 chars) to
// $MAKEFUN_OUTPUT_DIR/entry.txt. Node 22, stdlib only, no network,
// fully deterministic.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast: setup (lawmakers writing 400 pages of law over AI, crypto
// and the internet) then the undercut (they cannot work out which button
// turns a Word file into a PDF), with the punch on the last few words.
// One sentence, aimed at power and competence, not random abuse.
const ROAST =
  "They passed a 400-page law telling AI, crypto, and the entire internet how to behave, then emailed their assistant a screenshot of the Save As menu asking which button turns a Word file into a PDF.";

const MAX_CHARS = 320;

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// Gate: one sentence, 1..320 characters, not only whitespace.
if (ROAST.length === 0 || ROAST.length > MAX_CHARS) {
  fail(`roast is ${ROAST.length} characters, must be 1..${MAX_CHARS}`);
}
if (ROAST.trim().length === 0) fail("roast is only whitespace");
if (ROAST.includes("\n") || ROAST.includes("\r")) {
  fail("roast must be a single sentence on one line");
}
// Exactly one sentence: a single full stop, at the very end.
const stops = ROAST.split("").filter((c) => c === ".").length;
if (stops !== 1 || !ROAST.endsWith(".")) {
  fail("roast must be exactly one sentence ending with a full stop");
}
// The roast must read clean in one pass: no leading or trailing
// whitespace, and no double spaces left over from drafting.
if (ROAST !== ROAST.trim()) fail("roast has leading or trailing whitespace");
if (ROAST.includes("  ")) fail("roast contains a double space");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ROAST, "utf8");
// Verify the round trip: what the judge will read must be byte-identical
// to the validated roast, with no trailing newline added by the write.
const written = readFileSync(outPath, "utf8");
if (written !== ROAST) fail("written entry.txt does not match the roast");
console.log(`wrote entry.txt (${ROAST.length} chars)`);
