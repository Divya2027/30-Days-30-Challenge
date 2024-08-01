// Array Method (Intermediate)

// task 7

const number = [2, 5, 1, 6, 9];

//The map method creates a new array with the results of calling a provided function on every element in the original array.
const doubleNumber = number.map(number => number*5);

console.log(doubleNumber);

// task 8

const Arr = [2, 5, 1, 6, 9];

//The filter method creates a new array with elements that pass a specified test function.
const doubleNumbers = Arr.filter(Arr => Arr % 3 === 0);

console.log(doubleNumbers);

// task 9

const Arr2 = [2, 5, 1, 6, 9];

//The reduce method executes a reducer function on each element of the array, resulting in a single cumulative value.
const initialValue = 0;
const sumWithInitial = Arr2.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);

