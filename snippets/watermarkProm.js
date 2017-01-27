function watermarkProm([logo, cat]) {
    let logoP = loadImage(logo);
    let catP = loadImage(cat);

    Promise.all([catP, logoP])
        .then(watermarkHelper)
        .then(addImg)
        .catch(errorMessage)
}