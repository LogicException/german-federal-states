import {expect} from "chai";
import {describe, it} from "mocha";
import {FederalState, FederalStates} from "../src/federalStates";

describe("can use federal states", () => {
    it("should can use type federal state for saxonia", () => {
        const federalStateSaxonia: FederalState = "SN";
        expect(federalStateSaxonia).not.to.be.null;
        expect(federalStateSaxonia).to.be.an("string");
        expect(federalStateSaxonia).to.eq("SN");
    });
    it("should can get federal state of saxonia", () => {
        expect(FederalStates).not.to.be.null;
        expect(FederalStates).to.be.an("object").and.to.have.property("SN");
        expect(FederalStates.SN).to.be.an("object").and.to.have.property("de");
        expect(FederalStates.SN.de).to.eq("Sachsen");
    });
});