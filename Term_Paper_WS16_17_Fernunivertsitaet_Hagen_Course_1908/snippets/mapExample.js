//Beispiel: Funktion als Parameter

function square(x) {
    return x * x;
};
var list = [1, 2, 3, 4, 5];

var squareList = list.map(square)

console.log(squareList); //[1, 4, 9, 16, 25]