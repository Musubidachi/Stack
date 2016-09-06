var prompt = require('prompt-sync')();
var arr = [];
var playDecision = true;
//runs the program until the user decides to stop playing
while (playDecision) {
    //gets and validates the user input
    var userSelection = validate();
    userSelection = Number.parseInt(userSelection);
    //executes the corresponding command based on what they inputted
    if (userSelection === 1) {
        arr.push(getValueToPush());
    } else if (userSelection === 2) {
        if(arr.length == 0){
            //no value
            console.log("Nothing to show!");
        }else{
            console.log("current last value in stack " + arr[arr.length - 1]);
        }
    } else {
        if (arr.length == 0) {
            console.log('No value to pop! Try adding a value first!');
        } else {
            console.log("removing " + arr[arr.length - 1]);
            arr.pop();
        }
    }
    //Determines if the user wants to continue playing.
    playDecision = getPlayDecision();
}
function getValueToPush(){
    return prompt('Value?');
}
//logic for playing
function getPlayDecision() {
    while (true) {
        userValue = prompt('Continue?');
        //toUpper needed () - fix
        if ('YES' == userValue.toUpperCase() || 'NO' == userValue.toUpperCase()) {
            break;
        }
        console.log('Please enter a valid value (YES or NO)');
    }
    if (userValue.toUpperCase() == 'YES') {
        return true;
    } else {
        return false;
    }
}

//logic for getting and validating a user input
function validate() {

    while (true) {

        var userValue = prompt('Add (1) , View(2), Remove (3)');

        if (!isNaN(userValue) && userValue >= 1 && userValue <= 3) {
            break;
        }
        console.log('Please enter a valid value');
    }
    return userValue;

}
