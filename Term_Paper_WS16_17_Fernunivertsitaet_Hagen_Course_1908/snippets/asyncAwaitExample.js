//Example of using the upcoming async-await syntax
//runs on node 7.1 and later using the --harmony flag

function asyncFoo(name, delay) {
    return new Promise(function (resolve, reject) {
        console.log("\t asyncFoo('" + name + "', " + delay + ") just started async processing.");
        setTimeout(function (name) {
            resolve(name.toUpperCase());
        }, delay, name);
    });
}

async function sequence() { //direct declaration of async function, no runner needed
    try {
        var first = await asyncFoo("This ", 500);

        //two async functions starting concurrently
        var promiseB = asyncFoo("really ", 500);
        var promiseA = asyncFoo("is ", 1000);

        var secondA = await promiseA;
        var secondB = await promiseB;
        var third = await asyncFoo("async!", 1000);

        return ([first, secondA, secondB, third]);
    } catch (error) {
        throw error;
    } finally {
        console.log("*** Async Sequence Cleanup. ***")
    }
}

sequence() //direct call of async function returning a promise
    .then(result => console.log("Generator finished successfully: " + result))
    .catch(err => console.log("Ooops, error occured: " + err))

console.log("Main program finished. The rest is async.")