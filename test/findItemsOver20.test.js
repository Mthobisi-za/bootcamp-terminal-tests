"use strict"
var findItemsOver20 =  require("../my_modules/findItemsOver20");
var assert = require("assert")

var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var itemLis = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 13},
    {name : 'bananas', qty : 3},
    {name : 'apples', qty : 3},
];
var itemLi = [];
describe('findItemsOver20', () => {
    it("should return all the products that have a quantity higher than 20", ()=>{
        assert.deepEqual(findItemsOver20(itemList), [{"name":"pears","qty":37},{"name":"bananas","qty":27}]);
    });
    it("should return empty array", ()=>{
        assert.deepEqual(findItemsOver20(itemLis), []);
    });
     it("should return 0", ()=>{
        assert.deepEqual(findItemsOver20(itemLi), 0);
    });
});