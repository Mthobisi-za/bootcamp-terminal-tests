"use strict"
var regCheck = require("../my modules/regCheck");
var assert = require("assert")
describe('regCheck', () => {
    it("Check for Gp registrations and return true if passed arguments are from GP",()=>{
        assert.equal(regCheck("DC 55 YU GP", "GP"), true);
    });
    it("Check for GP return false if passed argument is not from Gp",()=>{
        assert.equal(regCheck("DC 55 YU GP", "G"), false);
    });
});
