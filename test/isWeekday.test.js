"use strict"
var isWeekday = require("../my modules/isWeekday")
var assert = require("assert")

describe('isWeekday', () => {
    it("should Return true for Monday",()=>{
        assert.equal(isWeekday("Monday"), true);
    });
    it("should Return true for weekday Tuesday",()=>{
        assert.equal(isWeekday("Tuesday"), true);
    });
    it("should Return false for Sunday",()=>{
        assert.equal(isWeekday("Sunday"), false);
    });
});