//multiple Rejection Handlers within the Promise chain
//the called functions are promise returning asynch functions


var p = foo();

p.then(result => {
    return bar(result);
}).catch(e => {
    console.log("error in bar: ", e);
    return defaultBarValue; //gently return a default value
}).then(result => {
    return baz(result);
}).catch(e => {
    console.log("error in baz: ", e);
    unBaz(); //do some cleanup for failed baz()
    throw e; //rethrow error to end chain
}).then(result => {
    return booze(result);
}).then(result => {
    console.log("Chain ended with success: ", result)
}).catch(e => {
    //will only get called when baz or booze caused the error
    //failing bar gently returned a default value to continue
    console.log("chain got stuck with error:", e);
})