/**
 * Created by rresino on 24/10/2016.
 */
'use strict';

function returnVal() {

  printAndLog("returnVal-console","returnVal start");
  let promise =  new Promise((resolve, reject) => {
    waitForMe(2, "returnVal-console", "returnVal()");
    resolve("Hello Pepe");
  });

  promise.then((msg) => {
    printAndLog("returnVal-console","End promise: "+msg);
  });
  printAndLog("returnVal-console","returnVal end");
}


