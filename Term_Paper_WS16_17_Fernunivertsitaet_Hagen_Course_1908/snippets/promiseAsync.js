//Example of loading an image asynchronously using Promises
//from Parker, Daniel, Javascript with promises, p. 69

loadImage('thesis_defense.png')
    .then(function (img) {
        document.body.appendChild(img);
    }).catch(function (e) {
        console.log('Error occurred while loading image');
        console.log(e);
    });