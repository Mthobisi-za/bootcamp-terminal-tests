module.exports = function mostProfitableDepartment(data){
  "use strict"
    var emptyMap = {}
   for(var i = 0; i < data.length; i++){
      var depart = data[i];
     emptyMap[depart.department] = 0 ;
    
   }
    for(var i = 0; i < data.length; i++){
      var depart = data[i];
     var current = emptyMap[depart.department] 
     current += depart.sales
      emptyMap[depart.department] = current
   }
    var now = 0
    var text = ""
    for(const dep in emptyMap){
      const c = emptyMap[dep]
      if(c>now){
          now = c;
        text = dep;
        
      }  
    }
    console.log(text)
      return text
  }