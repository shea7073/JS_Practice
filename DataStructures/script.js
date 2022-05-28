'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];


const openingHours = {
  // Allowed by ES6
  [weekdays[3]]: {
    open: 12,
        close: 22,
  },
  fri: {
    open: 11,
        close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
        close: 24,
  },
};


// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 Enhanced Object Literals
  openingHours,

  // ES6 New Method Notation
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function({starerIndex = 1, mainIndex = 0, time = 20, address}) {
    console.log(`Order received! ${this.starterMenu[starerIndex]} and ${this.mainMenu[mainIndex]} at ${address} at ${time}`);
  },

  orderPizza: function(mainIngredient, ...otherIndgredients) {
    console.log(mainIngredient);
    console.log(otherIndgredients);
    },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your order of ${ing1}, ${ing2}, ${ing3}`);
  },

};

// DESTRUCTURING ARRAYS
// let [main, ,secondary] = restaurant.categories; // assigning from array, can skip with empty ,,
// console.log(main, secondary);
//
// [main, secondary] = [secondary, main]; //change index of variables
//
// const [starter, main] = restaurant.order(2, 0); // unpack result of function into 2 variables
//
// const nested = [2, 4, [5, 6]];
// const [i, ,[j, k]] = nested; //destructuring nested arrays
//
// // using default values
// const [p=1, q=1, r=1] = [8, 9];

// DESTRUCTURING OBJECTS
// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);
// // can specify different variable names
// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant
// console.log(restaurantName, hours, tags);
//
// // setting defaults for destructured objects
// const {menu = [], starterMenu: starters = []} = restaurant;
//
// // mutating variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};
//
// ({a, b} = obj);
// console.log(a, b);
//
// // nested object destructuring
// const {fri: {open: o, close: c}} = openingHours;
// console.log(o, c);
//
// // passing an object to a method
// // Object names need to be exactly as specified by method parameters
// // order does not matter because its an object
// // can have defaults
//
// restaurant.orderDelivery({address: '94 Nautical Way', starterIndex: 2})

// SPREAD OPERATOR

// const arr = [7, 8 ,9];
// const newArr = [1, 2, ...arr]; // merges the 2 arrays
//
// console.log(...newArr); // prints the array value by value
//
// const newMenu = [...restaurant.mainMenu, 'Gnocci']; // goes into object, fetches main menu and merges in this new array
// // note new variables are not created, just pointers
//
// const mainMenuCopy = [...restaurant.mainMenu]; // shallow copy of array
//
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);
//
// // Works on all iterables
// // Iterable: arrays, strings, maps, sets. NOT OBJECTS
//
// const str = 'Sean';
// const letters = [...str, ' ', 'S.'];
//
// //const ingredients = [prompt('Lets make pasta! Ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3?')];
// //restaurant.orderPasta(...ingredients);
//
// // Copying an object
// const newRestaurant = {...restaurant, foundedIn: 1995, founder: 'Sheady'};
// console.log(newRestaurant);
//
// const restaurantCopy = {...restaurant};
//

// // REST because on left side of the = sign
// const [a, b, ...others] = [1, 2, 3, 4, 5]; // assigns a and b and rest go into others array
//
// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
//
// // REST in objects
//
// const {sat, ...weekdays} = restaurant.openingHours; // puts saturday in sat and the rest in weekdays
//
// // rest parameters
// const add = function(...numbers) {
//   let sum = 0;
//   for(let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
// }
// const x = [7, 8, 9, 10];
// add(...x);
//
// restaurant.orderPizza('mushroom', 'onion', 'olive', 'spinach');

//SHORT CIRCUITING WITH && AND ||
// With || if first value is truthy it will return that value, otherwise it returns second
// If multiple || are chained together, first truthy will be returned

// if restaurant has a numGuests field and it has more that 0 (making it truthy) then set variable to numGuests
// Otherwise set it to ten
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// const guests2 = restaurant.numGuests || 10;
//
// // &&
// // With && if first value is falsey it will return that value, otherwise it returns second
// // If multiple && are chained together, first falsey will be returned
//
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'ronis');
// }
//
// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'ronis');

//  NULLISH COALESCING OPERATOR
//
// restaurant.numGuests = 0;
// // const guests = restaurant.numGuests || 10;
// // Nullish values are null or undefined
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);
//
//
// const rest1 = {
//   name: 'Capri',
//   numGuests: 20
// }
//
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni'
// }
// // using ||=
// // this runs into problem if numguests is set to zero becuse zero is falsey and will be replaced by 10
// rest2.numGuests = rest2.numGuests || 10;
// rest2.numGuests ||= 10; // like the above, just shorthand (assignment operator)
// // better to use below (nullish assignment operator)
// rest2.numGuests ??= 10;
//
// // using &&=
// // if no owner (falsey) returns no owner
// // if owner (truthy) sets owner to second value
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// // assign a value if current value is truthy
// rest2.owner &&= '<ANONYMOUS>';

// Coding Challenge #1

/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
*/
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   printGoals: function(...names) {
//     console.log(...names, names.length, 'Goals');
//   }
// };
// // Part 1
// const [players1, players2] = game.players;
// //console.log(players1, players2);
//
// //Part 2
// const [gk, ...fieldPlayers] = players1
// //console.log(gk, fieldPlayers);
//
// // Part 3
// //const allPlayers = [...game.players[0], ...game.players[1]];
// const allPlayers = [...players1, ...players2];
// //console.log(allPlayers);
//
// // Part 4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
// //console.log(players1Final)
//
// // Part 5
// const {team1, x: draw, team2} = game.odds;
// //console.log(team1, draw, team2);
//
// // Part 6
// game.printGoals(...game.scored);
//
// // Part 7
// team1 < team2 && console.log('Team 1 wins');
// team1 < team2 || console.log('Team 2 wins');


// "FOR OF" looping thru arrays (like python)
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//
// for (const item of menu) console.log(item);
//
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// OPTIONAL CHAINING

// if opening hours exists and has a monday attribute, log the opening hours
// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }
//  // if monday doesn't exist AKA is undefined we will get undefined
// // if monday does exist and it DOES have an open we will get opening hours
// // CHAINING OPERATOR CHECKS IF ELEMENT ON LEFT EXISTS
// console.log(restaurant.openingHours.mon?.open);
//
// // Can also be used in series
// console.log(restaurant.openingHours?.mon?.open)
//
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day} we open at ${open}`);
// }
//
// // Optional chaining for METHODS
// // If order method is not nullish (AKA it exists) call it, else print string
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
//
// // Optional chaining on ARRAYS
// const users = [{name: 'sean', email: 'shea7073@gmail.com'}];
// console.log(users[0]?.name ?? 'User array empty');

// LOOPING OBJECTS

// For property NAMES (keys)
// const properties = Object.keys(openingHours);
// //console.log(properties);
//
// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}`;
// }
//
// // For property VALUES
// const values = Object.values(openingHours);
// //console.log(values);
//
// // Entire object (keys and values)
// const entries = Object.entries(openingHours);
// console.log(entries);
//
// for (const [key, {open, close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }


// CODING CHALLENGE #2

/*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   printGoals: function(...names) {
//     console.log(...names, names.length, 'Goals');
//   }
// };
//
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1} by ${player}`);
// }
//
// let sum = 0;
// for (const odd of Object.values(game.odds)) {
//   sum += odd;
// }
// const avg = sum / Object.values(game.odds).length;
// console.log(avg)
//
//
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = game[team] ? `victory ${game[team]}` : 'draw'
//   console.log(`Odd of ${teamStr} ${odd}`)
//   //console.log(team, odd);
// }
//
// const scorers = {}
//
// for (const scorer of game.scored){
//   scorers[scorer] ? scorers[scorer]++ : scorers[scorer] = 1;
//
// }
//
// console.log(scorers);

// SETS (No Duplicates)

// const ordersSet = new Set(['Pasta', 'Pizza', 'Pasta', 'Risotto', 'Pizza'])
// console.log(ordersSet)
//
// // can create a set from a string
// const strSet = new Set('Sean');
// // num of elements
// console.log(ordersSet.size);
// // check if element exists
// console.log(ordersSet.has('Pizza'));
// // add to set
// ordersSet.add('Garlic Bread');
// // delete
// ordersSet.delete('Risotto');
// // delete everything in set
// // ordersSet.clear();
//
// for (const order of ordersSet) {
//   console.log(order)
// }
//
// // example
// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
//
//

// MAPS

// const rest = new Map();
// rest.set('name', 'classico italiano');
// rest.set(1, 'Firenze');
// // set actually also returns the map
// console.log(rest.set(2, 'lisbon'));
//
// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23);
// rest.set(true, 'we are open').set(false, 'we are closed');
// // reading from maps
// console.log(rest.get('name'));
//
// const time = 21;
//
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
//
// // check if map has element
// console.log(rest.has('categories'));
// rest.delete(2);
// //rest.size;
// //rest.clear();
//
// // can use array as key but it has to be the same array in memory (so save the array in a variable first)
// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest.get(arr));
// // objects too!
// console.log(document.querySelector('h1'), 'Heading');
//
// // map iteration
// // looks a lot like Object.entries
// const question = new Map([
//     ['question', 'what is the best programming language?'],
//     [1, 'C'],
//     [2, 'Java'],
//     [3, 'Javascript'],
//     ['correct', 3],
//     [true, 'correct'],
//     [false, 'try again']
//     ]);
//
// // convert object to map
// const hoursMap = new Map(Object.entries(openingHours));
//
// // quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`answer ${key}: ${value}`);
//   }
// }
// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);
//
// console.log(question.get(answer === question.get('correct')));
//
// // convert map to array
// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// Coding Challenge #3

/*
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//     [17, '⚽️ GOAL'],
//     [36, '🔁 Substitution'],
//     [47, '⚽️ GOAL'],
//     [61, '🔁 Substitution'],
//     [64, '🔶 Yellow card'],
//     [69, '🔴 Red card'],
//     [70, '🔁 Substitution'],
//     [72, '🔁 Substitution'],
//     [76, '⚽️ GOAL'],
//     [80, '⚽️ GOAL'],
//     [92, '🔶 Yellow card'],
// ]);
//
// // 1.
//
// const events = [...new Set(gameEvents.values())];
// console.log(gameEvents.values());
// console.log(events);
//
// // 2.
//
// gameEvents.delete(64);
// console.log(gameEvents);
//
// // 3.
//
// console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);
//
// // 4.
//
// for (const [key, value] of gameEvents) {
//     const half = (key > 45) ? "SECOND HALF" : "FIRST HALF";
//     console.log(`[${half}] ${key}: ${value}`);
// }

// WORKING WITH STRINGS

// methods (indexOf, lastIndexOf) can use for characters or whole words
// properties (length)

// const airline = 'TAP Air Portugal';
// // const plane = 'A320';
//
// console.log(airline.slice(4)); // does not alter the string since they are immutable
//
// console.log(airline.slice(4, 7)); // start at 4 and end at 7 non inclusive
//
// console.log(airline.slice(0, airline.indexOf(' ')));
//
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
//
// console.log(airline.slice(-2));
//
// console.log(airline.slice(1, -1));
//
// const checkMiddleSeat = function(seat) {
//     // B and E are middle seats
//     const s = seat.slice(-1);
//     return s === 'B' || s === 'E';
// }
//
// console.log(checkMiddleSeat('11B'));
// console.log(checkMiddleSeat('23C'));
//
// console.log(airline.toUpperCase());
// console.log(airline.toLowerCase());
//
// const passenger = 'jOnAs';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);
//
// // comparing emails
//
// const email = 'hello@jonas.io';
// const loginEmail = ' Hello@Jonas.Io \n';
//
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
//
// const priceGB = '288,97£'
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
//
// console.log(priceUS);
//
// const announcement = `All passengers come to boarding door 23, thats boarding door 23!`;
// console.log(announcement.replaceAll('door', 'gate'));
// // could also use regex
//
// const plane = 'Airbus A320neo'
// console.log(plane.includes('A320'));
// console.log(plane.startsWith('A'));
//
// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//     console.log('Part of new airbus family');
// }
//
// // practice
//
// const checkBaggage = function(items) {
//     const baggage = items.toLowerCase();
//     if (baggage.includes('knife') || baggage.includes('gun') {
//         console.log('you are not allowed onboard!')
//     }
//     else {
//         console.log('Welcome aboard!');
//     }
// }

// PART 3 WORKING WITH STRINGS

// console.log('a+very+nice+string'.split('+'));
//
// const [firstName, lastName] = 'Sean Shea'.split(' ');
// console.log(firstName, lastName);
//
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);
//
// const capitalizeName = function(name) {
//     const names = name.split(' ');
//
//     const namesUpper = [];
//
//     for (const n of names) {
//         // one way >> namesUpper.push(n[0].toUpperCase() + n.slice(1));
//
//         namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//     }
//     console.log(namesUpper.join(' '));
// }
//
// capitalizeName('jessica ann smith davis');
//
// // padding
//
// const message = 'go to gate 23!'
// console.log(message.padStart(25, '+').padEnd(35, '+'));
//
// const maskCreditCard = function(number) {
//     const str = number + '';
//     const last = str.slice(-4);
//     return last.padStart(str.length, '*')
// }
//
// console.log(maskCreditCard(343434565654));
//
// // repeat
//
// const message2 = 'Bad weather... All departures delayed... ';
// console.log(message2.repeat(5));
//
// const planesInLine = function (n) {
//     console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
// }
//
// planesInLine(10);


// Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

//
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
//
// // should have used the trim method to remove white space instead of replaceAll
// document.querySelector('button').addEventListener('click', function () {
//     const text = document.querySelector('textarea').value;
//     const split_data = text.split('\n');
//     for (let i = 0; i < split_data.length; i++) {
//         const trimmedLine = split_data[i].replaceAll(' ', '').toLowerCase();
//         const [first, second] = trimmedLine.split('_');
//         const second_upper = second[0].toUpperCase() + second.slice(1);
//         let padded = (first + second_upper).padEnd(20, ' ');
//         padded += '✅'.repeat(i + 1);
//         console.log(padded);
//     }
// });
//
//

const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

