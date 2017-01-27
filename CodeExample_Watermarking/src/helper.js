//import 'babelify/polyfill'
import watermark from './watermark.js';

function resizeHelper(img, x, y) {

    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var MAX_WIDTH = 400;
    var MAX_HEIGHT = 400;
    var width = img.width;
    var height = img.height;

    if (width > height) {
        if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
        }
    } else {
        if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
        }
    }
    canvas.width = x;
    canvas.height = y;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, x, y);

    var dataurl = canvas.toDataURL("image/png");
    return loadImage(dataurl);
}


// scales the image by (float) scale < 1
// returns a canvas containing the scaled image.
function downScaleImage(img, scale) {
    var imgCV = document.createElement('canvas');
    imgCV.width = img.width;
    imgCV.height = img.height;
    var imgCtx = imgCV.getContext('2d');
    imgCtx.drawImage(img, 0, 0);
    return downScaleCanvas(imgCV, scale);
}

function watermarkHelper(images) {
    return watermark(images).image(watermark.image.upperLeft(0.7));
}

function watermarkCallback(images, cb) {
    watermark(images).image(watermark.image.upperLeft(0.7))
        .then(image => cb(null, image))
        .catch(err => cb(err))
}

function loadImage(url) {
    let promise = new Promise((resolve, reject) => {
        let image = new Image();

        image.onload = function () {
            resolve(image);
        }

        image.onerror = function () {
            let message =
                'Could not load image at ' + url
            reject(new Error(message));
        }

        setTimeout(function () {
            image.src = url
        }, 1500);
    })
    return promise;
};

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

    setTimeout(function () {
        image.src = url
    }, 1500);
};

function addImg(image) {
    let imgElement =
        document.createElement("img")
    imgElement.src = image.src
    document.body.appendChild(imgElement)
};

function errorMessage(err) {
    var newDiv = document.createElement("h1");
    var newContent = document.createTextNode(err);
    newDiv.appendChild(newContent); // füge den Textknoten zum neu erstellten div hinzu.
    document.body.appendChild(newDiv)
}


module.exports = {
    loadImage: loadImage,
    loadImageCallback: loadImageCallback,
    addImg: addImg,
    errorMessage: errorMessage,
    watermarkHelper: watermarkHelper,
    watermarkCallback: watermarkCallback,
    resizeHelper: resizeHelper
}