module.exports = function countAllFromTown(firStr, secStr){
    "use strict"
       var splitted = firStr.split(',')
       var empty = []
       for(var i = 0; i < splitted.length; i++){
         var con = splitted[i].trim()
         if(con.startsWith(secStr)){
             empty.push(con)
         }
       }
     return   empty.length
   }