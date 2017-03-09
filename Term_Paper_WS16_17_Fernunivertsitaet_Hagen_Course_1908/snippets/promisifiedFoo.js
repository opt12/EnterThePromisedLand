//Example inspired by 
//Simpson, Kyle, Async & performance, p. 76ff

//async function with callback API
function foo(x, y, cb) {
    ajax("http://some.url.1/?x=" + x + "&y=" + y, cb);
}

//using foo() with callback API
foo(11, 31, function (err, text) {
    if (err) {
        console.error(err);
    } else {
        console.log(text);
    }
});

//promisification of foo
var fooPromise = Promise.wrap(foo);
//using fooPromise() with promise API
fooPromise(11, 31)
    .then(text => console.log(text))
    .catch(error => console.error(err))