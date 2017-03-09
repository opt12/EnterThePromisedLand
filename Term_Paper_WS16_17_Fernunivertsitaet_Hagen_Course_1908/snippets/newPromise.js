//Example of using the new Promise() constructor
//from Parker, Daniel, Javascript with promises, p. 13

function loadImage(url) {
    var promise = new Promise(
        function resolver(resolve, reject) {
            var img = new Image();
            img.src = url;
            img.onload = function () {
                resolve(img);
            };
            img.onerror = function (e) {
                reject(e);
            };
        });
    return promise;
}