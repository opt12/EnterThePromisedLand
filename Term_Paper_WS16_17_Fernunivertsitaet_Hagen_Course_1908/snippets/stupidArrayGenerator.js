//Example of a really stupid generator function
function* generate() {
    var i = 0;
    yield i += 1;
    yield i += 1;
    yield i += 1;

    return;
}

var it = generate();

for (element of it) {
    console.log("Element: ", element);
}
console.log(it.next()); //another next() always fails
//Element:  1
//Element:  2
//Element:  3
//{ value: undefined, done: true }