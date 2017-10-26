// main file to run Old way with OldCalc

// selection the tag elements

var sum = document.querySelector("button#soma");
var mult = document.querySelector("button#multi");
var res = document.querySelector("div#res");

// the event listeners of two buttons to do the operations

sum.addEventListener("click", 
                      function(){

  // getting values from the inputs and converting to integer                    	
  var a = parseInt(document.querySelector("#a").value, 10); 
  var b = parseInt(document.querySelector("#b").value, 10);
  
  // clean element with the result value
  res.innerHTML ="";

  //make the sum operation from the module and update the element with the result
  res.innerHTML = oldCalc.sum(a,b);

});

mult.addEventListener("click", 
                      function(){

  // getting values from the inputs and converting to integer                    	
  var a = parseInt(document.querySelector("#a").value, 10); 
  var b = parseInt(document.querySelector("#b").value, 10);
  
  // clean element with the result value
  res.innerHTML ="";

  //make the sum operation from the module and update the element with the result
  res.innerHTML = oldCalc.mult(a,b);

});
