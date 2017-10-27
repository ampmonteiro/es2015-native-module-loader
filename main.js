// main file to run newCalc with es 2015+ syntax

// get newCalc module

// import {sum,mult} from './newCalc.js'; or

import * as Calc from './newCalc.js'; // with an alias

/*selection the tag elements and change name o var sum and mult
because of import methods of module
*/

var btnSum = document.querySelector("button#soma");
var btnMult = document.querySelector("button#multi");
var res = document.querySelector("div#res");

// the event listeners of two buttons to do the operations

btnSum.addEventListener("click",
                      function(){

  // getting values from the inputs and converting to integer
  const a = parseInt(document.querySelector("#a").value, 10);
  const b = parseInt(document.querySelector("#b").value, 10);

  // clean element with the result value
  res.innerHTML ="";

  //make the sum operation from the module and update the element with the result
  //res.innerHTML = sum(a,b); -> withou an alias
  res.innerHTML = Calc.sum(a,b);

});

btnMult.addEventListener("click",
                      function(){

  // getting values from the inputs and converting to integer
  const a = parseInt(document.querySelector("#a").value, 10);
  const b = parseInt(document.querySelector("#b").value, 10);

  // clean element with the result value
  res.innerHTML ="";

  //make the mult operation from the module and update the element with the result
  //res.innerHTML = Calc.mult(a,b); -> without an alias
  res.innerHTML = Calc.mult(a,b);

});
