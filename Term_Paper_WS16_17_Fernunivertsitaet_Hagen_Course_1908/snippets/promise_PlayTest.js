function resloveIt() {
    //    return Promise.resolve(42);
    return p = new Promise(function resolver(resolve, reject) {
        setTimeout(
            resolve, 1000, 42);
    });
}

var res = resloveIt();

console.log(typeof (res), res);

function logPromise() {
    console.log(res)
}

setTimeout(logPromise, 500);
setTimeout(logPromise, 1000);
setTimeout(logPromise, 1500);

res.then(res => console.log("with then: " + res));

var unhandledReject = Promise.reject(new Error("handle me"));