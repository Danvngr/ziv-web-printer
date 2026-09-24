import assert from "node:assert/strict";
import { a11yDataAttrs, parseA11yPrefs } from "../lib/a11y-prefs.ts";
import { filterPrinters, getGuide, getPrinter, printers } from "../data/printers.ts";

const byBrand = filterPrinters(printers, "cAnOn");
assert.equal(byBrand.length, 1);
assert.equal(byBrand[0]?.id, "canon-pixma-tr4520");

const byModel = filterPrinters(printers, "laser tr4520");
assert.equal(byModel.length, 1);
assert.equal(byModel[0]?.id, "laser-tr4520");

assert.equal(filterPrinters(printers, "epson").length, 0);

const inkjet = getPrinter(printers, "inkjet-pixma-tr4520");
assert.equal(inkjet?.brand, "Inkjet");
assert.equal(inkjet?.guides.length, 2);

const install = inkjet && getGuide(inkjet, "installation");
assert.equal(install?.title, "התקנה ראשונית");
assert.equal(getGuide(inkjet!, "no-such-guide"), undefined);
assert.equal(getPrinter(printers, "no-such-printer"), undefined);

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
