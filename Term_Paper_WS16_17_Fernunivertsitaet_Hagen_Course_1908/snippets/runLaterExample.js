//Beispiel zum Einreihen einer Funktion in die Task-Queue

function runLater(x) {
    console.log("Don't wake me up rudely, I was sleeping for min " + x + " msec");
}

setTimeout(runLater, 999, 999)
setTimeout(runLater, 666, 666)

console.log("What comes first?");
//What comes first?
//Don't wake me up rudely, I was sleeping for min 666 msec
//Don't wake me up rudely, I was sleeping for min 999 msec