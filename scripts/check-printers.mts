import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { a11yDataAttrs, parseA11yPrefs } from "../lib/a11y-prefs.ts";
import {
  brandsInCategory,
  filterMachines,
  getMachine,
  isGuideKind,
  machineGuideLinks,
  machineNameWords,
  machines,
  normalizeSearch,
  readyGuide,
} from "../data/printers.ts";
import { counterWhatsappText, whatsappHref } from "../data/site.ts";

assert.equal(normalizeSearch(" SP-100 "), "sp100");
assert.equal(normalizeSearch("Copy 10"), "copy10");

assert.equal(filterMachines(machines, "sp 100").length, 0);
assert.equal(filterMachines(machines, "SP-100").length, 0);
assert.equal(filterMachines(machines, "דוגמה").length, 0);
assert.equal(getMachine(machines, "sample-sp-100"), undefined);
assert.equal(getMachine(machines, "sample-sp-200"), undefined);
assert.equal(getMachine(machines, "sample-copy-10"), undefined);

assert.equal(filterMachines(machines, "epson").length, 0);
assert.equal(filterMachines(machines, "   ").length, 1);

const printersOnly = filterMachines(machines, "  ", "printer");
assert.deepEqual(
  printersOnly.map((item) => item.id),
  ["canon-mf655cdw"],
);
assert.ok(printersOnly.every((item) => item.category === "printer"));

assert.deepEqual(
  filterMachines(machines, "", "copier").map((item) => item.id),
  [],
);
assert.deepEqual(brandsInCategory(machines, "printer"), ["Canon"]);
assert.deepEqual(brandsInCategory(machines, "copier"), []);

const searchIgnoresCategory = filterMachines(machines, "mf655", "copier");
assert.equal(searchIgnoresCategory.length, 1);
assert.equal(searchIgnoresCategory[0]?.category, "printer");

assert.equal(isGuideKind("counter"), true);
assert.equal(isGuideKind("meter"), true);
assert.equal(isGuideKind("installation"), false);
assert.deepEqual(machineNameWords("Canon", "i-SENSYS MF655Cdw"), ["Canon", "i-SENSYS", "MF655Cdw"]);

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
