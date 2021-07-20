"use strict"
var fromWhere = require("../my modules/fromWhere");
var assert = require("assert")

describe('fromWhere', () => {
    it("should return from Bellville ",()=>{
        assert.equal(fromWhere("CY"), "Bellville");
    });
    it("should return from Paarl ",()=>{
        assert.equal(fromWhere("CJ"), "Paarl");
    });
    it("should return from Cape Town ",()=>{
        assert.equal(fromWhere("CA"), "Cape Town");
    });
     it("should return from Some other place! ",()=>{
        assert.equal(fromWhere("CK"), "Some other place!");
    });
});