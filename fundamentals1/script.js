// const markHeight = 1.69;
// const markWeight = 78;
// const johnHeight = 1.95;
// const johnWeight = 92;
//
// const markBMI = markWeight / (markHeight ** 2);
// const johnBMI = johnWeight / (johnHeight ** 2);
//
// const markHigherBMI = markBMI > johnBMI;
//
// /*
// console.log(markBMI);
// console.log(johnBMI);
// console.log(markHigherBMI);
// */
//
// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI}`)
// } else {
//     console.log(`John's BMI (${johnBMI} is higher than Mark's (${markBMI})`)
// }

// CHALLENGE 3 PART 1
// const dolphins1 = 96;
// const dolphins2 = 108;
// const dolphins3 = 89;
//
// const koalas1 = 88;
// const koalas2 = 91;
// const koalas3 = 110;
//
// const avgDolphin = (dolphins1 + dolphins2 + dolphins3) / 3;
// const avgKoala = (koalas1 + koalas2 + koalas3) / 3;
//
// if (avgDolphin > avgKoala) {
//     console.log('Dolphins have the high score!')
// } else if (avgKoala > avgDolphin) {
//     console.log('Koalas have the high score!')
// } else {
//     console.log("It's a tie")
// }

// CHALLENGE 3 BONUS 1
//
// const dolphins1 = 97;
// const dolphins2 = 112;
// const dolphins3 = 101;
//
// const koalas1 = 109;
// const koalas2 = 95;
// const koalas3 = 123;
//
// const avgDolphin = (dolphins1 + dolphins2 + dolphins3) / 3;
// const avgKoala = (koalas1 + koalas2 + koalas3) / 3;
//
// if (avgDolphin > avgKoala && avgDolphin >= 100) {
//     console.log('Dolphins have the high score!')
// } else if (avgKoala > avgDolphin && avgKoala >= 100) {
//     console.log('Koalas have the high score!')
// } else if (avgKoala < 100 && avgDolphin < 100) {
//     console.log("No Winner")
// } else if (avgKoala === avgDolphin) {
//     console.log("It's a tie")
// } else {
//     console.log('ERROR')
// }

// CHALLENGE BONUS 2

//
// const dolphins1 = 97;
// const dolphins2 = 112;
// const dolphins3 = 101;
//
// const koalas1 = 109;
// const koalas2 = 95;
// const koalas3 = 106;
//
// const avgDolphin = (dolphins1 + dolphins2 + dolphins3) / 3;
// const avgKoala = (koalas1 + koalas2 + koalas3) / 3;
//
// if (avgDolphin > avgKoala && avgDolphin >= 100) {
//     console.log('Dolphins have the high score!');
// } else if (avgKoala > avgDolphin && avgKoala >= 100) {
//     console.log('Koalas have the high score!');
// } else if (avgKoala < 100 && avgDolphin < 100) {
//     console.log("No Winner");
// } else if (avgKoala === avgDolphin) {
//     console.log("It's a tie" + avgDolphin + avgDolphin);
// } else {
//     console.log('ERROR');
// }

// CHALLENGE 4

const bill = 300;

const tip = bill > 50 && bill < 300 ? bill * .15 : bill *.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total was ${bill + tip}`);