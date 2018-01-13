# es2015-native-module-loader

Showing how to use es2015+ Modules Loader in Browsers without the need to use babel or traceur or SystemJS tool

status of calcClass Branch ( third Branch): Finished the Demonstration how add attribute module to script tag in index page as well as using Class syntax

### HOW /  Demonstration


I use a simple example like a calculator with features such as sum and multiplication

One branch using module Pattern (old way / oldCalc) without module loader

second branch using module loader browser and with simple functions

third branch using module loader Browser and Class way (using es2015 Class syntax sugar)

### What is the content

inside of calcClass File


``` JavaScript

// define module with es2015 class syntax

// all methods and properties are public

export default class Calc {
  constructor() {

  }

  sum (a,b) {
    return a+b;
  }

  mult (a,b) {
    return a*b;
  }
}

```

inside of main.js File

Note: don't forget the extension file ( .js), whithout it will not load the module

``` JavaScript

// get calcClass module

// load as a class with default import

import Calc from './calcClass.js';

// omited some code

// create object of type Calc
const myCalc = new Calc();

// the event listeners of two buttons to do the operations

btnSum.addEventListener("click",
                      function(){

  // omited some Code


  // clean element with the result value
  res.innerHTML ="";

  //make the sum operation from the module and update the element with the result
  // calling method sum of the object
  res.innerHTML = myCalc.sum(a,b);

});

// omited more code, open the file to see all code

```

inside index.html

``` HTML

<!-- omited some code -->
<!--  Loading as type module -->
<script type="module" src="main.js"></script>

```


### Run the examples


-> Install NodeJs ( and npm)

-> Clone one of Branches

-> Open a terminal ( on MacOS or Linux) or CommandLine / PowerShell ( on Windows)

-> PUT the command: npm i or npm install

-> PUT the command: npm run s (to run the server and open the file on Browser)


### Browser Support

At the moment what browser support native loader :

-> Safari: since 10.1 version

-> Chrome: since 61 version (Chrome Canary 60 – behind the Experimental Web Platform flag in chrome:flags )

-> Opera: since 48  version

-> Firefox: since 54 version, behind the dom.moduleScripts.enabled setting in about:config.

-> Edge: since 15 version, behind the Experimental JavaScript Features setting in about:flags


### Docs / Links

-> https://developer.mozilla.org/pt-PT/docs/Web/JavaScript/Reference/Classes
