"use strict"
const transportFee = require('../my modules/transportFee');
const assert = require('assert');
//---------undeclraded functions---///

describe('transportFee', () => {
    it("Function must return R20 for Morning",()=>{
        assert.equal(transportFee("morning"), "R20");
    });
    it("Function must return R10 for afternoon",()=>{
        assert.equal(transportFee("afternoon"), "R10");
    });
    it("Function must return Free for nightshift",()=>{
        assert.equal(transportFee("nightshift"), "free");
    });
});