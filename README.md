# es2015-native-module-loader

Showing how to use es2015+ Modules Loader in Browsers without the need to use babel or traceur or SystemJS tool

status of OldCalc Branch: Finished -> add code events with the respetive operation  from oldCalc module (pattern)

### HOW /  Demonstration

I use a simple example like a calculator with features such as sum and multiplication

Master branch - use as template or start kit with few files

first branch ( oldCalc) - using module Pattern (old way / oldCalc) without module loader

second branch (newCalc) - using module loader browser and with simple functions and es2015+ syntax ( import / export)

third branch (calcClass) - using module loader Browser and Class way (using es2015 Class syntax sugar)

### What is the content

Inside of OldCalc file ( see more by open the respetive file)

``` JavaScript

// Module Pattern  - the old way

var oldCalc = (function(){

    // definitions of Methods or properties


    return {
        // selected which Methods  are public
    }

})();

```

Inside of Main.js ( file where are call respetive Methods of the module)

``` JavaScript

// omited some code  
// (...)

sum.addEventListener("click",
                      function(){

  // omited some code  
  // (...)                      
  // clean element with the result value
  res.innerHTML ="";

//make the sum operation from the module and update the element with the result
  res.innerHTML = oldCalc.sum(a,b);

});

// the operation mult is ommited, see the respetive file

```

The last thing that is required, add a script tag to HTML with location of the file ( in index.html file)

``` HTML

<!-- some code omited -->


<!-- Load Scripts or Modules -->
<script src="oldCalc.js"></script>
<script src="main.js"></script>

</body>    
</html>
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

-> https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc

-> https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript
