// Old Calc Using Module old way Pattern

var oldCalc = (function () {

  // Keep this variable and Methods private inside this closure scope
    
    var sum = function(a,b) {
      
      return a+b;
    };
  
    var mult = function(a,b) {
      return a*b;
    };

  // Explicitly reveal public pointers to the private functions 
  // that we want to reveal publicly

  return {
    sum: sum,
    mult: mult
  }
  
})();