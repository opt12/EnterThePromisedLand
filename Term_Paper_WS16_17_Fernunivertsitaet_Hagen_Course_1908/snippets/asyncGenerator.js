//Example of async sequence using a Generator

runAsync = require("./asyncRunner.js");

function asyncFoo(name, delay) {
    return new Promise(function (resolve, reject) {
        console.log("\t asyncFoo('" + name + "', " + delay + ") just started async processing.");
        setTimeout(function (name) {
            resolve(name.toUpperCase());
        }, delay, name);
    });
}

function* generator() {
    try {
        var first = yield asyncFoo("This ", 500);

        //two async functions starting concurrently
        var promiseB = asyncFoo("really ", 500);
        var promiseA = asyncFoo("is ", 1000);

        var secondA = yield promiseA;
        var secondB = yield promiseB;
        var third = yield asyncFoo("cool!", 1000);

        return ([first, secondA, secondB, third]);
    } catch (error) {
        throw error;
    } finally {
        console.log("*** Generator cleanup. ***")
    }
}

runAsync(generator)()
    .then(result => console.log("Generator finished successfully: " + result))
    .catch(err => console.log("Ooops, error occured: " + err))

console.log("Main program finished. The rest is async.")