// main file to run newCalc with es 2015+ syntax

// get classCalc module

//Note: don't forget the extension file ( .js), whithout the module will not load 

// import {sum,mult} from './newCalc.js'; or

// import * as Calc from './newCalc.js'; // with an alias

// load as a class with default import

import Calc from './calcClass.js';

/*selection the tag elements and change name o var sum and mult
because of import methods of module
*/

var btnSum = document.querySelector("button#soma");
var btnMult = document.querySelector("button#multi");
var res = document.querySelector("div#res");

// create object of type Calc
const myCalc = new Calc();

// the event listeners of two buttons to do the operations

btnSum.addEventListener("click",
                      function(){

  // getting values from the inputs and converting to integer
  const a = parseInt(document.querySelector("#a").value, 10);
  const b = parseInt(document.querySelector("#b").value, 10);

  // clean element with the result value
  res.innerHTML ="";

  //make the sum operation from the module and update the element with the result
  // calling method sum of the object
  res.innerHTML = myCalc.sum(a,b);

});

btnMult.addEventListener("click",
                      function(){

  // getting values from the inputs and converting to integer
  const a = parseInt(document.querySelector("#a").value, 10);
  const b = parseInt(document.querySelector("#b").value, 10);

  // clean element with the result value
  res.innerHTML ="";

  //make the mult operation from the module and update the element with the result
  // calling method mult of the object
  res.innerHTML = myCalc.mult(a,b);

});
