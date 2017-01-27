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