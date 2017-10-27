# es2015-native-module-loader

Showing how to use es2015+ Modules Loader in Browsers without the need to use babel or traceur or SystemJS tool

status of newCalc Branch (second Branch): Finished the Demonstration how add attribut module to script tag in index page as well as using import / export syntax

### HOW /  Demonstration


I use a simple example like a calculator with features such as sum and multiplication

Master branch - use as template or start kit with few files

first branch ( oldCalc) - using module Pattern (old way / oldCalc) without module loader

second branch (newCalc) - using module loader browser and with simple functions and es2015+ syntax ( import / export)

third branch (calcClass) - using module loader Browser and Class way (using es2015 Class syntax sugar)


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
