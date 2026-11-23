// One-Line Roast: The Gadget You Use Every Day — make.fun entry.
//
// Writes one roast line to /output/entry.txt.
// Pure Node standard library; deterministic; no network, no input.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ROAST =
  "My phone's autocorrect has never fixed a typo, but it has ruined three apologies and one job application.";

if (ROAST.length < 1 || ROAST.length > 200) {
  throw new Error("roast must be 1-200 characters");
}
if (!ROAST.trim()) {
  throw new Error("roast must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");

// Read back what was written: the gate rejects anything that is not
// exactly one line of 1-200 characters, so fail loudly here instead.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ROAST) {
  throw new Error("entry.txt does not match the roast");
}
