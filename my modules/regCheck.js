
module.exports =function regCheck(plate, conf){
  "use strict"
  if(plate.endsWith(conf)){
     return true
    }
     
  else{
     return false
     }
}