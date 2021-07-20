module.exports = function findItemsOver(str, sec){
  "use strict"
    var cap = str
    var product =[];
    for(let value of cap){
      var qu = value
      if(qu.qty > sec){
          product.push({name:qu.name, qty: qu.qty})
        }
    }
      return product
    }