import 'babelify/polyfill'

function loadImageCallback(url, cb) {
    let image = new Image()

    image.onload = function () {
        cb(null, image);
    }

    image.onerror = function () {
        let message =
            'Could not load image at ' + url
        cb(new Error(message))
    }

    image.src = url

};

export default loadImageCallback
