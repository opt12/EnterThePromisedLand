function watermarkConc() {
    let logo, cat;

    loadImageCallback(logoName, function (err, img) {
        if (err) return errorMessage(err);
        logo = img;
        if (cat) { //both are ready
            watermarkCallback([cat, logo], function (err, image) {
                if (err) return errorMessage(err);
                addImg(image);
            });
        }
    });

    loadImageCallback('images/mediumcat1.jpg', function (err, img) {
        if (err) return errorMessage(err);
        cat = img;
        if (logo) { //both are ready
            watermarkCallback([cat, logo], function (err, image) {
                if (err) return errorMessage(err);
                addImg(image);
            });
        }
    });
};