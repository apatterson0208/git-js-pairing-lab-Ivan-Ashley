//Code your solutions in this file
function fiveToOneHundred(){
    for (let i = 5; i <= 100; i++) {
        console.log(i);
    }
}
// fiveToOneHundred();

function multiplesOfThree(){
    for (let i = 3; i <= 100; i += 3) {
        console.log(i);
    }
}
// multiplesOfThree();

function mutliplesOfThreeOrFive(){
    for (let i = 1; i <= 100; i++) {
        if(i % 3 === 0){
            console.log(i);
        }else if(i % 5 === 0){
            console.log(i);
        }
    }
}
//mutliplesOfThreeOrFive();

function untilNum(int){
    for (let i = 1; i <= int; i++) {
        console.log(i);
    }
}
untilNum(10);