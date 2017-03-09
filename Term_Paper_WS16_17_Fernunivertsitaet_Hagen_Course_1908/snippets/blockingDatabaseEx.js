//Example: Blocking database query
//taken from http://stackoverflow.com/q/16336367/2682209

var result = database.query("SELECT * FROM hugetable");
printQueryResult(result);

console.log("Hello World"); //has to wait for database query

//[result data printed out]
//Hello, world