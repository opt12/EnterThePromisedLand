async = require('./asyncRunner');
fetch = require('node-fetch');

function ajax(par, cb) {
    setTimeout(cb, 1000, null, "return Text")
}

function foo(x, y) {
    console.log("starting foo");
    return new Promise(function (resolve, reject) {
        ajax(
            "http://some.url.1/?x=" + x + "&y=" + y,
            function (err, data) {
                if (err) {
                    // throw an error into `*main()`
                    console.log("ajax callback with error; throwing back to main*");
                    reject(err);
                } else {
                    // resume `*main()` with received `data`
                    console.log("ajax callback getting back to main*");
                    resolve(data);
                }
            }
        )
    });
    //    return "finished foo, but waiting for ajax callback";
}

function* main() {
    try {
        console.log("starting up main till first yield");
        var text = yield foo(11, 31);
        console.log(text);

        let response = yield fetch('http://www.omdbapi.com/?t=batman&r=json');
        let movies = yield response.json();

        return movies;

    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        console.log("Now executing the final cleanup, Generator finsihed!!!");
    }
}

//var it = main();
//
//// start it all up!
//console.log("first it.next():", it.next());
//
//console.log("Main Program finished");

async(main)()
.then(res => console.log("generator yielded: ", res))
    .catch(err => console.log("generator yielded: ", err));