var testParticipants = [
    {
        participantName: "testParticipant0",
        participantEmail: "testParticipant0@mail.com"
    },
    {
        participantName: "testParticipant1",
        participantEmail: "testParticipant1@mail.com"
    },
    {
        participantName: "testParticipant2",
        participantEmail: "mail2@mail.com"
    },
    {
        participantName: "testParticipant3",
        participantEmail: "testParticipant3@mail.com"
    },
    {
        participantName: "testParticipant4",
        participantEmail: "testParticipant4@mail.com"
    },
    {
        participantName: "testParticipant5",
        participantEmail: "testParticipant5@mail.com"
    }
];

function addParticipantPost(param){
    console.log("Called with participant: "+param.participant+", returnCode: "+param.returnCode);
    return new Promise(function(resolve, reject){
        if(param.returnCode == 200)
            resolve(param.returnCode);
        else
            resolve(param.returnCode);
    });
}

module.exports = {
    testParticipants: testParticipants,
    addParticipantPost: addParticipantPost
};