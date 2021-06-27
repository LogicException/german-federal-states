import {expect} from "chai";
import {describe, it} from "mocha";
import {CapitalCities} from "../src/capitalCities";

describe("can use capital cities", () => {
    it("should can use capital cities", () => {
        expect(CapitalCities).not.to.be.null;
        expect(CapitalCities).to.be.an("object").and.to.have.property("SN");
        expect(CapitalCities.SN).to.be.an("object").and.to.have.property("de");
        expect(CapitalCities.SN.de).to.eq("Dresden");
    });
});