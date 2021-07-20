"use strict"
var isFromBellville = require("../my_modules/isFromBellville");
var assert = require("assert");
describe("isFromBellville",()=>{
    it("should Return True for CY registration.", ()=>{
        assert.equal(isFromBellville("CY 123"), true);
    });
    it("should Return false for CJ registration", ()=>{
        assert.equal(isFromBellville("Cj 123"), false);
    });
});