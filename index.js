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
//untilNum(10);

function multiply(intOne, intTwo){
    return intOne*intTwo;
}
//console.log(multiply(5,4));

function add(intOne, intTwo){
    if (intOne === intTwo){
        return intOne * 3;
    }
     else {
        return intOne+intTwo;
     }
}
//console.log(add(5,5));

function isNegative(int){
    if (int < 0){
        return true;
    } else {
        return false;
    }
}
//console.log(isNegative(3));
function triangleArea(height, base){
    let area = (1/2 * (height * base));
    return area; 
}
//console.log(triangleArea(5,7));

function betweenTwentyAndFourty(int){
    if (int >= 20 && int <= 40){
        return true;
    } else {
        return false;
    }
}
//console.log(betweenTwentyAndFourty(4));

function largest(intOne, intTwo, intThree){
    return Math.max(intOne, intTwo, intThree);
}
//console.log(largest(4, 6, 8));

function printTime(){
    console.log(new Date().toLocaleTimeString('en-US'));
}
//printTime();

function isLeapYear(year){
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isLeapYear(2020))