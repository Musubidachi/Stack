var prompt = require('prompt-sync')();

var MyClass = {};
MyClass.arr= [];
var play = true;
var selection;
while(play){
    selection = getChoice();
    performAction(selection);
    play = decideToPlay();
}

//gets the choice
function getChoice(){
    var userChoice;
    while(true){
        userChoice = prompt('Add(1), remove(2), view(3)');
        userChoice = Number.parseInt(userChoice);
        if(userChoice >= 1 && userChoice <=3){
            break;
        }
    }
    return userChoice;
}

function performAction (action){
    if(action === 1){
        MyClass.arr[MyClass.arr.length] = prompt('Value to add? ');
    }else if(action === 2){
        if(MyClass.arr.length == 0){
            console.log('Nothing to pop.');
        }else{
            console.log('Popping ' + MyClass.arr[MyClass.arr.length-1]);
            MyClass.arr.pop();
        }
    }else{
         if(MyClass.arr.length == 0){
            console.log('Nothing to view.');
        }else{
            console.log('Viewing ' + MyClass.arr[MyClass.arr.length-1]);
        }
    }
}

function decideToPlay(){
    var userSelection;
    while(true){
        userSelection = prompt('Continue?');
        if(userSelection.toUpperCase() === 'YES' || 
        userSelection.toUpperCase() === 'NO'){
            break;
        }
    }
    if(userSelection.toUpperCase() === 'YES'){
        return true;
    }else{
        return false;
    }
}