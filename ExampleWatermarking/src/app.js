/////////////////////////////////////////////////////////
// install with: npm install
// run it with:  npm run develop
//
// inspired by the cool video at
// https://www.youtube.com/watch?v=2d7s3spWAzo
// https://github.com/mpj/fpjs8
/////////////////////////////////////////////////////////

import {
    loadImage, loadImageCallback, addImg, errorMessage, watermarkHelper, watermarkCallback, resizeHelper
}
from './helper.js';
import {
    asyncRunner
}
from './generatorExamples.js';

var co = require('co');

const logoName = 'images/HannoverJs.png'
//const logoName = 'images/UniHagen.png'



//uncomment whatever option you would like to try out:
/////////////////////////////////////////////////////////
watermarkSeq([logoName, 'images/mediumcat1.jpg']);
//watermarkConc([logoName, 'images/mediumcat1.jpg']);
//watermarkProm([logoName, 'images/mediumcat1.jpg']);
//watermarkRunner([logoName, 'images/mediumcat1.jpg']);
//watermarkRunnerWithUtility([logoName, 'images/mediumcat1.jpg']);
//watermarkAsync([logoName, 'images/mediumcat1.jpg']);

/////////////////////////////////////////////////////////
function watermarkSeq([logo, cat]) {
    loadImageCallback(logo, function (err, logoImg) {
        if (err) return errorMessage(err);
        loadImageCallback(cat, function (err, catImg) {
            if (err) return errorMessage(err);
            watermarkCallback([catImg, logoImg], function (err, image) {
                if (err) return errorMessage(err);
                addImg(image);
            });
        });
    });
    console.log('watermarkSeq() finished');
}

function watermarkConc([logo, cat]) {
    let logoImg, catImg;
    
    loadImageCallback(logo, function (err, img) {
        if (err) return errorMessage(err);
        logoImg = img;
        if (catImg) { //both are ready
            console.log('cat was first');
            watermarkCallback([catImg, logoImg], function (err, image) {
                if (err) return errorMessage(err);
                addImg(image);
            });
        }
    });

    loadImageCallback(cat, function (err, img) {
        if (err) return errorMessage(err);
        catImg = img;
        if (logoImg) { //both are ready
            console.log('logo was first');
            watermarkCallback([catImg, logoImg], function (err, image) {
                if (err) return errorMessage(err);
                addImg(image);
            });
        }
    });
    console.log('watermarkConc() function finished');
};

function watermarkProm([logo, cat]) {
    let logoP = loadImage(logo);
    let catP = loadImage(cat);

    Promise.all([catP, logoP])
        .then(watermarkHelper)
        .then(addImg)
        .catch(errorMessage)
    
    console.log('watermarkProm() function finished');
}

function* watermarkGen([logo, cat]) {

    let logoPromise = loadImage(logo);
    let catPromise = loadImage(cat);

    try {
        let logoImage = yield logoPromise; //1
        let catImage = yield catPromise; //2
        let watermarkedImg = yield watermarkHelper([catImage, logoImage]); //3
        addImg(watermarkedImg); //4
    } catch (e) {
        console.log("error occured inside Generator: ", e);
        errorMessage(e);
    } finally {
        console.log('Generator finished');
    }
}

function watermarkRunner() {
    let it = watermarkGen([logoName, 'images/mediumcat1.jpg'])

    it.next().value                                          //1
        .then(p => {console.log(p);return it.next(p).value}) //2
        .then(p => {console.log(p);return it.next(p).value}) //3
        .then(p => {console.log(p);return it.next(p).value}) //4
        .catch(p => {console.log(p);return it.throw(p)})
    console.log('watermarkRunner() function finished');
}

function watermarkRunnerWithUtility(args) {
    return asyncRunner(watermarkGen)(args);
}

async function watermarkAsync([logo, cat]) {
    try {
        let logoP = loadImage(logo);
        let catP = loadImage(cat);
        
        let catImg = await catP;
        let logoImg = await logoP;
        
        let watermarkedImg = await watermarkHelper([catImg,logoImg]);
        addImg(watermarkedImg);
    } catch (e) {
        console.log("error occured inside Generator: ", e);
        errorMessage(e);
    } finally {
        console.log('Async function finally');
    }
    console.log('watermarkAsync() function finished');
}















//asyncRunner(watermarkGen)([logoName, 'images/mediumcat1.jpg']);
//co.wrap(watermarkGen)([logoName, ['images/mediumcat1.jpg', "I'm no image", 'images/bigcat3.jpg', 'images/smallcat2.jpg']])

//function* watermarkGen([logo, cats]) {
//    cats = (cats.constructor === Array) ? cats : [cats];
//
//    let logoPromise = loadImage(logo);
//    let catPromises = cats.map(loadImage);
//
//    console.log("catPromises", catPromises)
//    let logoImage, catImage;
//    
//    for (let catP of catPromises) {
//        try {
//            logoImage = yield logoPromise;
//            logoImage = yield resizeHelper(logoImage, 100, 100);
//            catImage = yield catP;
//            catImage = yield resizeHelper(catImage, 640, 480);
//            let watermarkedImg = yield watermarkHelper([catImage, logoImage]);
//            yield addImg(watermarkedImg);
//        } catch (e) {
//            console.log("error occured inside Generator: ", e);
//            errorMessage(e);
//        }
//    }
//}
