module.exports = function fromWhere(num){
  "use strict"
    if(num.includes("CY")){
    return "Bellville"
    }
    
     else if(num.includes("CJ")){
     return "Paarl"
     }
    
     else if(num.includes("CA")){
       return "Cape Town"
     }
    
     else{
     return "Some other place!"}
  }