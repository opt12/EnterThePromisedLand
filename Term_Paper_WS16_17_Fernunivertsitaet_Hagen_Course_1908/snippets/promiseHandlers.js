//Example for evaluating Promise values

function returnEventuallyRejectedPromise() {
    return new Promise(function resolver(resolve, reject) {
        setTimeout(
            reject, 666, new Error('rejected'));
    });
}

function returnEventuallyFulfilledPromise() {
    return new Promise(function resolver(resolve, reject) {
        setTimeout(
            resolve, 1000, 'I keep my Promise');
    });
}


function f(res) {
    console.log('promise fulfilled with value: ', res);
}

function r(e) {
    console.log('promise rejected with reason: ' + e);
}

var pR = returnEventuallyRejectedPromise();
var pF = returnEventuallyFulfilledPromise();

pR.then(f, r);
pF.then(f, r);

pF.then(null, r);
pR.then(null, r);

pR.then(f);
pF.then(f);

//promise rejected with reason: Error: rejected
//promise rejected with reason: Error: rejected
//promise fulfilled with value:  I keep my Promise
//promise fulfilled with value:  I keep my Promise