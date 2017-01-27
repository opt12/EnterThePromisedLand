//code and illustration taken from 
//https://developers.google.com/web/
//  fundamentals/getting-started/primers/promises


asyncThing1()
    .then(asyncThing2)

    .then(asyncThing3)

    .catch(asyncRecovery1)

    .then(asyncThing4(), asyncRecovery2)

    .catch(err => 
       console.log("Don't worry about it"))
    .then(res => 
       console.log("All done!"));
})
