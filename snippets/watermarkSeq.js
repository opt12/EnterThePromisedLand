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
}