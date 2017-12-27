# es2015-native-module-loader

Showing how to use es2015+ Modules Loader in Browsers without the need to use babel or traceur or SystemJS tool

status of newCalc Branch (second Branch): Finished the Demonstration how add attribute module to script tag in index page as well as using import / export syntax

### HOW /  Demonstration


I use a simple example like a calculator with features such as sum and multiplication

Master branch - use as template or start kit with few files

first branch ( oldCalc) - using module Pattern (old way / oldCalc) without module loader

second branch (newCalc) - using module loader browser and with simple functions and es2015+ syntax ( import / export)

third branch (calcClass) - using module loader Browser and Class way (using es2015 Class syntax sugar)

Inside of OldCalc file ( see more by open the respetive file)

### What is the content

inside of newCalc Fle

``` JavaScript

// methods with export key word are public

export function sum(a,b) {

  return a+b;
}

export function mult(a,b) {

  return a*b;
}

```

Inside of main.js File

```  JavaScript

// get newCalc module

// import {sum,mult} from './newCalc.js'; or

import * as Calc from './newCalc.js'; // with an alias


// omited some

btnSum.addEventListener("click",
                      function(){

  // omited some code

  // clean element with the result value
  res.innerHTML ="";

  //make the sum operation from the module and update the element with the result
  //res.innerHTML = sum(a,b); -> without an alias
  res.innerHTML = Calc.sum(a,b);

});

// omited some code, open the file to see all code

```

Insde of index.html file

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

-> https://jakearchibald.com/2017/es-modules-in-browsers/

-> https://ponyfoo.com/articles/es6-modules-in-depth

-> https://developers.google.com/web/updates/2017/09/nic61

-> https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/
