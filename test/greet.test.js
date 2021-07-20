"use strict"
var greet = require("../my_modules/greet");
var assert = require("assert");
describe("Greet", ()=>{
    it("The function should be able to greet Jane", ()=>{
        assert.equal(greet("Jane"), "Hello, Jane");  
    });
    it("The function should be able to greet Mtho", ()=>{
        assert.equal(greet("Mtho"), "Hello, Mtho");
    });
    it("The function should be able to greet John", ()=>{
        assert.equal(greet("John"), "Hello, John");
    });
})