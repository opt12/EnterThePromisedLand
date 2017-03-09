//Example of loading an image asynchronously using a Generator and Promises
//from Parker, Daniel, Javascript with promises, p. 70


async(function* () {
    try {
        var img = yield loadImage('thesis_defense.png');
        document.body.appendChild(img);
    } catch (err) {
        console.log('Error occurred while loading image');
        console.log(err);
    }
})();