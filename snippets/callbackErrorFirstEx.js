//Example for trailing anonymous callback with error-first protocol

asyncCall("http://someurl.com", secondPar, thirdPar, function (err, result) {
    // error?
    if (err) {
        console.error(err);
    }
    // otherwise, assume success
    else {
        console.log(result);
    }
});