//Example: Non-Blocking database query
//taken from http://stackoverflow.com/q/16336367/2682209
database.query("SELECT * FROM hugetable", function (rows) {
    var result = rows;
    printQueryResult(result);
});

console.log("Hello World"); //runs immediately

//Hello, world
//[result data printed out]