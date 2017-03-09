//Example inspired and mainly taken from
//http://dapperdeveloper.com/2015/06/09/
//  clean-promise-chains-using-a-pipeline/

var Pipeline = require("./promisePipeline.js")

var tasks = [
    _multiplyBy5,
    _add.bind(null, 50),
    _wait.bind(null, 666),
    _convertToString,
    _addCurrentDate
]

new Pipeline(tasks).go(10)
    .then(function (result) {
        console.log("Success! " + result);
    })
    .catch(function (err) {
        console.error(err);
    });

function _multiplyBy5(number) {
    return number * 5;
}

function _add(summand1, summand2) {
    return summand1 + summand2;
}

function _convertToString(number) {
    return Promise.resolve(number.toString());
}

function _addCurrentDate(string) {
    return new Date().toString() + ": " + string;
}

function _wait(time, string) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(string);
        }, time);
    });
}

//Success! Thu Dec 29 2016 16:32:45 GMT+0100 (Mitteleuropaische Zeit): 100
