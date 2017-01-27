async function watermarkAsync([logo, cat]) {
    try {
        let logoImage = await loadImage(logo);
        let catImage = await loadImage(cat);
        let watermarkedImg = await watermarkHelper([catImage, logoImage]);
        addImg(watermarkedImg);
    } catch (e) {
        console.log("error occured inside Generator: ", e);
        errorMessage(e);
    } finally {
        console.log('Async function finally');
    }
    console.log('watermarkAsync() function finished');
}
