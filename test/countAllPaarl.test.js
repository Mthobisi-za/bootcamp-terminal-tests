"use strict"
var countAllPaarl = require("../my_modules/countAllPaarl")
var assert = require("assert")
describe('countAllPaarl', () => {
    it('should Count registration numbers from paarl and return 3', () => {
        assert.equal(countAllPaarl("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"), 3);
    });
    it('should Count registration numbers from paarl and return 1', () => {
        assert.equal(countAllPaarl("CJ 2345, CL 123-546, CK 345"), 1);
    });
    it('should Count registration numbers from paarl and return 2', () => {
        assert.equal(countAllPaarl("CJ 2345, CJ 2345, CL 123-546, CK 345"), 2);
    });
});