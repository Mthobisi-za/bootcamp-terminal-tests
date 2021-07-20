module.exports = function findItemsOver20(str){
  "use strict"
    var cap = str
    if(cap.length == 0){
      return 0
    }
    var product =[];
    for(let value of cap){
      var qu = value
      if(qu.qty > 20){
          product.push({name:qu.name, qty: qu.qty})
        }
    }
    console.log(product + " !")
      return product
    }