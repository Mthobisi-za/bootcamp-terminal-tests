"use strict"
const yearsAgo = require('../my_modules/yearsAgo');
const assert = require('assert');
describe('yearsAgo', () => {
    it("Must return the different of 6", ()=>{
        assert.equal(yearsAgo(2015), 6);
    });
    it("Must return the different of 10", ()=>{
        assert.equal(yearsAgo(2011), 10);
    });
    it("Must return the different of 0", ()=>{
        assert.equal(yearsAgo(2021), 0);
    });
});