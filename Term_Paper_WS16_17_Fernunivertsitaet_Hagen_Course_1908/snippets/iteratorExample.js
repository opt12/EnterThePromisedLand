//Example of an iteration over Array using an Iterator

var array = [1, 2, 3];

var it = array[Symbol.iterator](); //get the iterator

while ((element = it.next()).done != true) {
    console.log("Element: ", element.value);
}
console.log(it.next()); //another next() always fails
//Element:  1
//Element:  2
//Element:  3
//{ value: undefined, done: true }