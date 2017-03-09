//Example of an increment generator with variable steps

function* increment() {
    let count = 1;
    let step = 1;

    while (true) { //generate forever 
        step = (yield count) || step; //yield the count and adjust the step if new step provided
        count += step;
        console.log("\tgenLog: count: ", count, " step: ", step);
    }
}

var it1 = increment(); //get the iterator
console.log("first value: ", it1.next());
console.log("value: ", it1.next(4));
console.log("value: ", it1.next(-2));
console.log("last value:", it1.return(42));
console.log("another it1.next(): ", it1.next());
//first value:  { value: 2, done: false }
//	genLog: count:  5  step:  3
//value:  { value: 5, done: false }
//	genLog: count:  9  step:  4
//value:  { value: 9, done: false }
//	genLog: count:  8  step:  -1
//value:  { value: 8, done: false }
//	genLog: count:  9  step:  1
//value:  { value: 9, done: false }
//	genLog: count:  10  step:  1
//value:  { value: 10, done: false }
//last value: { value: 42, done: true }
//another it1.next():  { value: undefined, done: true }

it2 = increment(1, 1); //initial value is 2, initial step is 3
try {
    console.log("value: ", it2.next());
    it2.throw(new Error("something's wrong here"));
} catch (error) {
    console.log("Generator threw: ", error.message);
}
//another it1.next():  { value: undefined, done: true }
//value:  { value: 1, done: false }
//Generator threw:  something's wrong here