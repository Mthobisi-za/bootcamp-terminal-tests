module.exports = function countAllPaarl(reg){
    "use strict"
    var fg = reg.split(",")
        let num = 0
        for(var i = 0; i < fg.length; i++){
            var word = fg[i].trim()
            if(word.startsWith("CJ")){
                num = num + 1
            }
        }
      return num
    }