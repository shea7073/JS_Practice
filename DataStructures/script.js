'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
const openingHours = {
  //ES6 Allows
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

  // Allowed by ES6
  openingHours,

  // ES6 allows this function
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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}