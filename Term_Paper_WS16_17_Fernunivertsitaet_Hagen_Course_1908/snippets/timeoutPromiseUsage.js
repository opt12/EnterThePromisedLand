var timeoutPromise = require('./timeoutPromise.js');

//simulated long lasting async function
var asyncDelay = function (delay) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Promise resolved after " + delay + " ms.");
        }, delay);
    });
}

var p100 = timeoutPromise(asyncDelay(100), 200);
var p500 = timeoutPromise(asyncDelay(500), 200);
var p1500 = timeoutPromise(asyncDelay(1500), 200, "Default Value");

p100.then(console.log, console.error);
p500.then(console.log, console.error);
p1500.then(console.log, console.error);

//Promise resolved after 100 ms.
//Error: Promise timed out
//    at Timeout._onTimeout (xxxxx\snippets\timeoutPromise.js:6:29)
//    at ontimeout (timers.js:365:14)
//    at tryOnTimeout (timers.js:237:5)
//    at Timer.listOnTimeout (timers.js:207:5)
//Default Value