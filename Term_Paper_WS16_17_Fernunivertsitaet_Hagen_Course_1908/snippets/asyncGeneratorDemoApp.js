//Example of async sequence using a Generator

var startTime = new Date();

function timestamp() {
    return new Date() - startTime;
} //just to demonstrate the timings

runAsync = require("./asyncRunner.js");

function asyncFoo(name, delay) {
    return new Promise(function (resolve, reject) {
        console.log(timestamp() + ":\t asyncFoo(" + name + ", " + delay + ") just started async processing.");
        setTimeout(function (name) {
            resolve("async " + name + " just resolved.");
        }, delay, name);
    });
}

function* generator(withError) {
    try {
        var first = yield asyncFoo("One", 500);
        console.log(timestamp() + ": " + first);

        var promiseA = asyncFoo("Two A", 1000);
        var promiseB = asyncFoo("Two B", 500);

        var secondA = yield promiseA;
        console.log(timestamp() + ": " + secondA);

        // to demonstrate the error handling capabilities
        if (withError) throw (timestamp() + ": " + "Ooops");

        var secondB = yield promiseB;
        console.log(timestamp() + ": " + secondB);
        var third = yield asyncFoo("Three", 1000);
        console.log(timestamp() + ": " + third);

        return "All async Tasks finished successfully";
    } catch (error) {
        throw error;
    } finally {
        console.log(timestamp() + ": " + "*** Generator cleanup. ***")
    }
}

runAsync(generator)(false)
    .then(result => console.log(timestamp() + ": " + "final Result: " + result))
    .catch(err => console.log(timestamp() + ": " + "Ooops, error occured: " + err))

console.log(timestamp() + ": " + "main program finished execution. The rest is async.")