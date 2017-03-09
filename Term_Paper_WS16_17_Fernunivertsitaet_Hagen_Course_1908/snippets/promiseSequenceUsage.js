//example of using the generic sequence to perform module tests on 
//the promise returning addParticipantPost() function

var sequence = require('./promiseSequence.js');
var utils = require("./promiseSequenceData.js")


//define the parameters to apply in sequence
var ops = [
    {participant: utils.testParticipants[0], returnCode: 200},
    {participant: utils.testParticipants[1], returnCode: 200},
    {participant: utils.testParticipants[1], returnCode: 409},
    {participant: utils.testParticipants[2], returnCode: 200},
    {participant: utils.testParticipants[2], returnCode: 409},
    {participant: utils.testParticipants[3], returnCode: 200},
    {participant: utils.testParticipants[4], returnCode: 200}
];

//perform the sequence with different parameters
sequence(ops, utils.addParticipantPost)
    .then(function (result) {
        console.log(result);
        console.log("Success!"); 
        done(); //everything is OK and the test is passed
    })
    .catch(function (err) {
        console.error(err);  
        done(err); //an error occured and is propagated to the testing framework
    });

//Called with participant: [object Object], returnCode: 200
//Called with participant: [object Object], returnCode: 200
//Called with participant: [object Object], returnCode: 409
//Called with participant: [object Object], returnCode: 200
//Called with participant: [object Object], returnCode: 409
//Called with participant: [object Object], returnCode: 200
//Called with participant: [object Object], returnCode: 200
//[ 200, 200, 409, 200, 409, 200, 200 ]
//Success!