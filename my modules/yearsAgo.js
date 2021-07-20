module.exports = function yearsAgo(year_1){
    "use strict"
    var newYear = new Date()
    var fullYear = newYear.getFullYear()
    var differentYear = fullYear - year_1
    
    return differentYear
    }