//Example of async call from within a generator
//taken from Simpson, Kyle, Async & performance, p. 97

function foo(x, y) {
    //request() is some async function returning a promise
    return request("http://some.url.1/?x=" + x + "&y=" + y);
}

function* main() {
    try {
        var text = yield foo(11, 31);
        console.log(text);
    } catch (err) {
        console.error(err);
    }
}

var it = main(); //get the iterator object
var p = it.next().value; //get out the first yielded value

// wait for the `p` promise to resolve 
p.then(
    function (text) { //fulfillment handler
        it.next(text); //resume generator with promise value
    },
    function (err) { //rejection handler
        it.throw(err); //throw the error coming from async foo into generator
    }
);