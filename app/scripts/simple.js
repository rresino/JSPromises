/**
 * Created by rresino on 24/10/2016.
 */
'use strict';

function simple() {

  printAndLog("simple-console","simple start");
  let promise =  new Promise((resolve, reject) => {
    waitForMe(1, "simple-console", "simple()");
    sayHello("Pepe");
  });

  promise.then(()=> printAndLog("simple-console","End promise"));
  printAndLog("simple-console","simple end");
}

function sayHello(msg) {
  setTimeout(function () {
    printAndLog("simple-console","Hello " + msg);
  },2000);
}

function printErr() {
  printAndLog("simple-console","Error!!");
}

function waitForMe(seconds, elementId, msg) {
  setTimeout(() => printAndLog(elementId,`Waiting for: ${msg}`), seconds*1000);
}

function printAndLog(elementId, msg) {
  console.log(msg);
  document.getElementById(elementId).innerHTML += msg + "<br>";
}
