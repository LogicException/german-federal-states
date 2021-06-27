import {expect} from "chai";
import {describe, it} from "mocha";
import {LanguageIndexedString} from "../src/languageIndexedString";

describe("can use language indexed string", () => {
    it("should can create german indexed string", () => {
        const germanString: LanguageIndexedString = {
            "de": "Hallo Welt"
        };
        expect(germanString).not.to.be.null;
        expect(germanString).to.be.an("object").and.to.have.property("de");
        expect(germanString.de).to.eq("Hallo Welt");
    });
});