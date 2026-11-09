import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
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
import { learningCompare, learningPhotos } from "../data/learning-spaces.ts";
import { absoluteUrl, counterWhatsappText, learningSpacesWhatsappText, site, whatsappHref } from "../data/site.ts";
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
assert.equal(layout.includes("VERCEL_URL"), false);
assert.ok(layout.includes("ogImage"));
assert.ok(readFileSync(join(root, "data", "site.ts"), "utf8").includes("og-image.jpg"));
assert.ok(layout.includes("metadataBase"));
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
assert.equal(site.hours.includes("17:00"), false);
assert.equal(site.instagram, "yair_smart_office");
assert.equal(site.learningSpacesPath, "/solutions/learning-spaces");
assert.equal(site.regNo, "516121720");
assert.equal(site.email, "office@smartcopy.co.il");
assert.equal(site.contactPerson, "זיו סרויה");
assert.equal(site.whatsappDisplay, "058-555-4901");
assert.equal(absoluteUrl("/"), "https://www.yso.co.il");
assert.equal(absoluteUrl("/guides"), "https://www.yso.co.il/guides");
assert.equal(absoluteUrl(site.learningSpacesPath), "https://www.yso.co.il/solutions/learning-spaces");
assert.ok(learningSpacesWhatsappText.includes("מרחבי הלמידה"));

for (const photo of [...learningPhotos, learningCompare.before, learningCompare.after]) {
  assert.equal(existsSync(join(root, "public", photo.src.slice(1))), true, photo.src);
  assert.ok(photo.alt.length > 8, photo.src);
  assert.ok(photo.width > 0 && photo.height > 0);
}
assert.equal(existsSync(join(root, "public", "og-image.jpg")), true);

const sitemap = readFileSync(join(root, "app", "sitemap.ts"), "utf8");
assert.ok(sitemap.includes("absoluteUrl"));
assert.equal(sitemap.includes('url: path'), false);
const robots = readFileSync(join(root, "app", "robots.ts"), "utf8");
assert.ok(robots.includes("sitemap"));
const nextConfig = readFileSync(join(root, "next.config.ts"), "utf8");
assert.ok(nextConfig.includes("Permissions-Policy"));
assert.ok(nextConfig.includes("camera=()"));
assert.ok(nextConfig.includes("Content-Security-Policy"));
assert.ok(nextConfig.includes("Cross-Origin-Opener-Policy"));

const llms = readFileSync(join(root, "public", "llms.txt"), "utf8");
assert.ok(llms.includes("https://www.yso.co.il/solutions/learning-spaces"));
assert.ok(llms.includes("09:00-16:00"));
assert.equal(llms.includes("17:00"), false);
assert.equal(llms.includes("5.0"), false);
assert.equal(llms.includes("40+"), false);
assert.equal(llms.includes("Clarity"), false);

function filesUnder(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (name === "node_modules" || name === ".next") return [];
    return statSync(path).isDirectory() ? filesUnder(path) : [path];
  });
}
for (const dir of ["app", "components", "data"]) {
  for (const file of filesUnder(join(root, dir))) {
    if (!/\.(ts|tsx)$/.test(file)) continue;
    if (file.endsWith(`${join("data", "site.ts")}`)) continue;
    const text = readFileSync(file, "utf8");
    assert.equal(text.includes("yso.co.il"), false, file);
    assert.equal(text.includes("לאתר מרחבי הלמידה"), false, file);
    assert.equal(text.includes("learningSpacesHref"), false, file);
  }
}

console.log("printer checks passed");
