//XMLHttpRequest Async Example
//taken from [Daniel Parker: Javascript with Promises, p. 9]
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; //for node.js

//Make an async HTTP request
var async = true;
var xhr = new XMLHttpRequest();
xhr.open('get', 'data.json', async);
xhr.send();

//create a three second delay (don't do this in real life)
console.log("don't do this in real life");
var timestamp = Date.now() + 3000;
while (Date.now() < timestamp);
console.log("really, don't do it");

//Now that three seconds have passed,
//add a listener to the xhr.load and xhr.error events
function listener() {
    console.log("greetings from your listener");
}
xhr.addEventListener('load', listener);
xhr.addEventListener('error', listener);
//don't do this in real life//really, don't do it
//greetings from your listener