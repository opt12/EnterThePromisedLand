//single Rejection Handler at the end of a Promise chain
//the called functions are promise returning asynch functions

var p = foo();

p.then(result => {
    return bar(result);
}).then(result => {
    return baz(result);
}).then(result => {
    return booze(result);
}).then(result => {
    console.log("Chain ended with success: ", result)
}).catch(e => {
    console.log("chain got stuck with error:", e);
})