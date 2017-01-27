function* watermarkGen([logo, cat]) {
    let logoPromise = loadImage(logo);
    let catPromise = loadImage(cat);

    try {
        let logoImage = yield logoPromise; //1
        let catImage = yield catPromise; //2
        let wmImg = yield watermarkHelper([catImage, logoImage]); //3
        addImg(wmImg); //4
    } catch (e) {
        console.log("error occured inside Generator: ", e);
        errorMessage(e);
    } finally {
        console.log('Generator finished');
    }
}

function watermarkRunnerWithUtility(args) {
    return asyncRunner(watermarkGen)(args);
}