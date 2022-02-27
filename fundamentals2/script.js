'use strict';

// CHALLENGE 1
// const koala1 = 23;
// const koala2 = 34;
// const koala3 = 27;
//
// const dolphin1 = 85;
// const doplpin2 = 54;
// const dolphin3 = 41;
//
// const calcAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;
//
// const koalaAvg = calcAvg(koala3, koala1, koala2);
// const dolphinAvg = calcAvg(doplpin2, dolphin1, dolphin3);
//
// function checkWinner(avgKoala, avgDolphin) {
//     if (avgKoala >= (avgDolphin * 2)){
//         console.log(`Koalas win ${avgKoala} to ${avgDolphin}`);
//     } else if (avgDolphin >= (avgKoala * 2)) {
//         console.log(`Dolphions win ${avgDolphin} to ${avgKoala}`);
//     } else {
//         console.log('There is no winner!');
//     }
// }
//
// checkWinner(koalaAvg, dolphinAvg);

// CHALLENGE 2
// const ternary_tip = function(bill) {
//     return (bill >= 50 && bill <= 300) ? bill * .2 : bill * .15;
// }
// console.log(ternary_tip(500));
//
//
// function calcTip(bill) {
//     let tip;
//     if (bill <= 50 && bill <= 300){
//         tip = bill * .15
//     } else {
//         tip = bill * .2
//     }
//     return tip
// }
//
// const bills = [125, 555, 44]
// console.log(bills)
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// console.log(tips)
//
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
//
// console.log(totals)

//CHALLENGE 3

// const mark = {
//     fullName : 'Mark Miller',
//     mass:  78,
//     height: 1.69,
//     calcBMI: function(){
//         this.BMI = this.mass / (this.height * this.height);
//         return this.BMI;
//     }
// };
//
// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function(){
//         this.BMI = this.mass / (this.height * this.height);
//         return this.BMI;
//     }
// }
//
// console.log(mark.calcBMI() > john.calcBMI() ? `${mark.fullName}'s BMI (${mark.calcBMI()}) is greater than ${john.fullName}'s (${john.calcBMI()})` : `${john.fullName}'s BMI (${john.calcBMI()}) is greater than ${mark.fullName}'s (${mark.calcBMI()})`);

// CHALLENGE 4

function calcTip(bill) {
    let tip;
    if (bill <= 50 && bill <= 300){
        tip = bill * .15;
    } else {
        tip = bill * .2;
    }
    return tip;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
    console.log(`Bill is ${bills[i]}`);
    tips.push(calcTip(bills[i]));
    console.log(`Tip is ${calcTip(bills[i])}`);
    totals.push(calcTip(bills[i]) + bills[i]);
    console.log(`Total is ${calcTip(bills[i]) + bills[i]}`);
}

const calcAvg = function(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}

console.log(calcAvg(bills));
console.log(calcAvg(bills));