import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { a11yDataAttrs, parseA11yPrefs } from "../lib/a11y-prefs.ts";
import {
  brandsInCategory,
  filterMachines,
  getMachine,
  isGuideKind,
  guideLabel,
  machineGuideLinks,
  machineNameWords,
  machines,
  normalizeSearch,
  readyGuide,
} from "../data/printers.ts";
import { domains, getDomain } from "../data/domains.ts";
import { counterWhatsappText, site, whatsappHref } from "../data/site.ts";
import { shouldSkipSplash } from "../lib/splash-skip.ts";

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
assert.equal(meter?.intro, "");
assert.equal(guideLabel("meter").title, "מדריך להוצאת מונה");
assert.equal(guideLabel("toner").card, "מדריך להחלפת טונר");
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
assert.equal(existsSync(join(root, "public", canon!.image!.slice(1))), true);
for (const step of meter!.steps) {
  assert.equal(existsSync(join(root, "public", step.image.slice(1))), true, step.image);
  assert.ok(step.alt.length > 0);
}
assert.equal(getMachine(machines, "no-such"), undefined);

const counterLink = whatsappHref(counterWhatsappText);
assert.ok(counterLink?.startsWith("https://wa.me/"));
assert.equal(counterWhatsappText, "שם מוסד:\nמספר מכונה:\n*נא לצרף תמונה של המונה*");
assert.ok(counterLink?.includes(encodeURIComponent("שם מוסד:")));
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

assert.equal(existsSync(join(root, "public", "logo.png")), true);
assert.equal(shouldSkipSplash({ seen: null, reduce: false, motionStop: false }), false);
assert.equal(shouldSkipSplash({ seen: "1", reduce: false, motionStop: false }), true);
assert.equal(shouldSkipSplash({ seen: null, reduce: true, motionStop: false }), true);
assert.equal(shouldSkipSplash({ seen: null, reduce: false, motionStop: true }), true);
const layout = readFileSync(join(root, "app", "layout.tsx"), "utf8");
assert.ok(layout.includes('sessionStorage.getItem("yair-splash")'));
assert.ok(layout.includes("prefers-reduced-motion"));
assert.ok(layout.includes("Rubik"));
const guide = readFileSync(join(root, "app", "printers", "[id]", "[guideId]", "page.tsx"), "utf8");
assert.ok(guide.includes("wa-action"));
assert.ok(guide.includes("פתיחת וואטסאפ לשליחת מונה"));

assert.equal(domains.length, 8);
assert.equal(new Set(domains.map((domain) => domain.slug)).size, 8);
const domainBlob = JSON.stringify(domains);
assert.equal(/\b(?:\d{1,3}\.){3}\d{1,3}\b/.test(domainBlob), false);
assert.equal(/סיסמ|password/i.test(domainBlob), false);
for (const domain of domains) {
  assert.ok(domain.capabilities.length >= 4 && domain.capabilities.length <= 8, domain.slug);
  assert.ok(domain.faqs.length >= 2, domain.slug);
  for (const related of domain.related) assert.ok(getDomain(related), related);
}
assert.equal(site.address, "הבנאים 9 אשדוד");
assert.equal(site.hours, "ימים א׳–ה׳ 09:00–16:00");
assert.equal(site.instagram, "yair_smart_office");
assert.equal(site.learningSpacesHref, "https://www.yso.co.il/");
assert.equal(site.whatsappDisplay, "058-555-4901");

console.log("printer checks passed");
