'use strict';

const bookings = [];

// no skipping parameters allowed, could set as undefined though
// const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
//     // ES5
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;
//
//
//
//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking);
// }
//
// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', undefined, 800);
//
//
//

// const oneWord = function(str) {
//     return str.replaceAll(" ", "").toLowerCase();
// }
//
// const upperFirstWord = function(str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }
//
// const transformer = function(str, fn) {
//     console.log(`Transformed string: ${fn(str)}`);
//
//     console.log(`Transformed by: ${fn.name}`);
// }
//
// transformer('Javascript is the best', upperFirstWord);


// console.log(oneWord(' i hope this wORKS'));



const luft = {
    airline: 'luft',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
        this.bookings.push({flight: `${this.iataCode} ${flightNum}`, name});
    }
};

luft.book(777, 'Sean Shea')
console.log(luft);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: []
};

const book = luft.book;

// CALL METHOD --> direct the 'this' keyword to a specific object
book.call(eurowings, 23, 'bob jones');
console.log(eurowings);

// APPLY METHOD --> takes an array

const flightData = [583, 'george cooper'];
book.apply(eurowings, flightData);
console.log(eurowings);

// Newer technique is to use spread operator instead of APPLY
book.call(eurowings, ...flightData);

// BIND METHOD
// bind this keyword to a specific object
const bookEW = book.bind(eurowings);
bookEW(23, 'steven williams');

// bind to object but also bind certain paramter(s)
const boobEW23 = book.bind(eurowings, 23);

// With Event Listeners

luft.planes = 300;
luft.buyPlane = function() {
    console.log(this);

    this.planes++;
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', luft.buyPlane.bind(luft));

// Partial application

const addTax = (rate, value) => value + value * rate;
// makes addVat the same as add tax but the rate is always .23, the null replace the argument that would specify the object bind applies to
const addVat = addTax.bind(null, 0.23)
