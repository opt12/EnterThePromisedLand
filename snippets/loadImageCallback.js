function loadImageCallback(url, cb) {
    let image = new Image();

    image.onload = function () {
        cb(null, image);
    }
    image.onerror = function () {
        let message = 'Could not load image at ' + url;
        cb(new Error(message));
    }
    image.src = url;
};

loadImageCallback(logoName, function (err, logo) {
    if (err) return errorMessage(err);
    else processImage(logo);
});
console.log('main program finished');