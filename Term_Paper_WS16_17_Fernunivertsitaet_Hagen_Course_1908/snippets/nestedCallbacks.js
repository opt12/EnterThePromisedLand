//Example of nested Callbacks (own example)
//Example is over simplified regarding proper error handling and closing the database connection

//definition of retrieval function
function retrieveData(dbName, dbRow, dbQuery, finalCallback) {
    openDBConnection(dbName, function (err, connection) {
        if (err) return finalErrorHandler(err);
        connection.retrieveData(dbRow, dbQuery, function (err, data) {
            if (err) return finalErrorHandler(err);
            return finalCallback(null, data);
        })
    })
}

//invocation of retireval function
retrieveData(fooDB, "name", "name='Mueller'", function (err, data) {
    if (err) return console.error(err);
    console.log("finally retrieved: " + data);
})