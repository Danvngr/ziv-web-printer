import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { a11yDataAttrs, parseA11yPrefs } from "../lib/a11y-prefs.ts";
import {
  filterMachines,
  getMachine,
  isGuideKind,
  machineGuideLinks,
  machines,
  normalizeSearch,
  readyGuide,
} from "../data/printers.ts";
import { counterWhatsappText, whatsappHref } from "../data/site.ts";

assert.equal(normalizeSearch(" SP-100 "), "sp100");
assert.equal(normalizeSearch("Copy 10"), "copy10");

const byAlias = filterMachines(machines, "sp 100");
assert.equal(byAlias.length, 1);
assert.equal(byAlias[0]?.id, "sample-sp-100");

const byHyphen = filterMachines(machines, "SP-100");
assert.equal(byHyphen[0]?.id, "sample-sp-100");

const byBrand = filterMachines(machines, "דוגמה");
assert.equal(byBrand.length, 2);

assert.equal(filterMachines(machines, "epson").length, 0);
assert.equal(filterMachines(machines, "   ").length, machines.length);

const printersOnly = filterMachines(machines, "  ", "printer");
assert.deepEqual(
  printersOnly.map((item) => item.id),
  ["sample-sp-100", "sample-sp-200", "canon-mf655cdw"],
);
assert.ok(printersOnly.every((item) => item.category === "printer"));

const copiersOnly = filterMachines(machines, "", "copier");
assert.deepEqual(
  copiersOnly.map((item) => item.id),
  ["sample-copy-10"],
);

const searchIgnoresCategory = filterMachines(machines, "copy", "printer");
assert.equal(searchIgnoresCategory.length, 1);
assert.equal(searchIgnoresCategory[0]?.category, "copier");

const sample = getMachine(machines, "sample-sp-100");
assert.equal(sample?.sample, true);
assert.ok(readyGuide(sample!, "counter"));
assert.ok(readyGuide(sample!, "toner"));

const partial = getMachine(machines, "sample-sp-200");
assert.equal(readyGuide(partial!, "counter"), undefined);
assert.ok(readyGuide(partial!, "toner"));

const empty = getMachine(machines, "sample-copy-10");
assert.equal(empty?.image, undefined);
assert.equal(readyGuide(empty!, "counter"), undefined);
assert.equal(readyGuide(empty!, "toner"), undefined);

assert.equal(isGuideKind("counter"), true);
assert.equal(isGuideKind("meter"), true);
assert.equal(isGuideKind("installation"), false);
assert.deepEqual(machineGuideLinks(sample!), ["counter", "toner"]);

const canon = getMachine(machines, "canon-mf655cdw");
assert.equal(canon?.sample, false);
assert.equal(canon?.category, "printer");
assert.equal(canon?.model, "i-SENSYS MF655Cdw");
assert.deepEqual(machineGuideLinks(canon!), ["meter", "toner"]);
assert.equal(filterMachines(machines, "mf655")[0]?.id, "canon-mf655cdw");
const meter = readyGuide(canon!, "meter");
assert.equal(meter?.steps.length, 5);
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
assert.equal(existsSync(join(root, "public", canon!.image!.slice(1))), true);
for (const step of meter!.steps) {
  assert.equal(existsSync(join(root, "public", step.image.slice(1))), true, step.image);
  assert.ok(step.alt.length > 0);
}
assert.equal(getMachine(machines, "no-such"), undefined);

const counterLink = whatsappHref(counterWhatsappText);
assert.ok(counterLink?.startsWith("https://wa.me/"));
assert.ok(counterLink?.includes(encodeURIComponent("מספר מכונה פנימי")));
assert.equal(whatsappHref(), "https://wa.me/972585554901");

const parsed = parseA11yPrefs(
  '{"text":"125","contrast":true,"grayscale":true,"links":false,"font":"yes"}',
);
assert.equal(parsed.text, "125");
assert.equal(parsed.contrast, true);
assert.equal(parsed.grayscale, true);
assert.equal(parsed.links, false);
assert.equal(parsed.font, false);
assert.deepEqual(a11yDataAttrs(parsed), {
  "data-a11y-text": "125",
  "data-a11y-contrast": "on",
  "data-a11y-grayscale": "on",
});
assert.equal(parseA11yPrefs("nope").text, "normal");
assert.equal(parseA11yPrefs(null).motion, false);
assert.equal(parseA11yPrefs('{"text":"200"}').text, "normal");

console.log("printer checks passed");
