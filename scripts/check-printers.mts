import assert from "node:assert/strict";
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

console.log("printer checks passed");
