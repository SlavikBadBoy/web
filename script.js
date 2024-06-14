"use strict";
// const addNumber = function (a, b) {
//   const result = a + b;
//   return result;
// };
// console.log(addNumber())
// const count = function (countFrom, step, countTo) {
//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// };
// count(1,4,20);
// const addNumber = function () {
//   let result = 0;
//   for (let argument of arguments) result += argument;
//   return result;
// };
// console.log(addNumber(1, 2, 3, 4, 5, 12, 12, 45, 76));
// const addNumber = function (...args) {
//   console.log(arguments);
//   const args = Array.from(arguments)
// console.log(args);
// };
// addNumber(2, 2, 3, 4, 5, "3");
// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }
// function findMaxNumber(arrayOfNumbers) {
//   let max = arrayOfNumbers[0];
//   for (let i = 1; i < arrayOfNumbers.length; i++) {
//     if (arrayOfNumbers[i] > max) {
//       max = arrayOfNumbers[i];
//     }
//   }

//   return max;
// }

// let arrayOfNumbers = [1, 3, 2, 5, 4];
// let max = findMaxNumber(arrayOfNumbers);
// console.log(max); // 5]\
// function factorial(number) {
//   let result = 1;
//   for (let i = 2; i <= number; i += 1) {
//     result = result * i;
//   }
//   return result;
// }
// console.log(factorial(10)); // 120
// const hello1 = function () {
//   return "Привіт JavaScript";
// };
// const hello2 = function (name) {
//   const welcome = `Привіт, ${name}`;

//   return welcome;
// };
// hello2("Andrew");
// console.log(hello2("Andrew"));
// let func = function( ) {

//c
// const sum = (...args) => {
//   console.log(args);
// };

// console.log(sum(2, 2, 3, 5, "hello", 25));
// const sayMessage = function (message) {
//   console.log(message);
// };
// const greetting = function () {
//   const greettingMessage = "Добрий день!";
//   callback(greettingMessage);
// };
// const farewell = function (callback) {
//   const farewellMessage = "До побачення!";
//   callback(farewellMessage);
// };
// greetting(sayMessage);
//
// const num = (number) => {
//   return number + 5;
// };
// const square = (number) => {
//   return number * number;
// };
// const counter = (n, action) => {
//   for (let i = 1; i <= n; i++) {
//     console.log(action(i));
//   }
// };
// counter(15, (number) => number + 5);
// // i + 5
// const dog = {
//   breed: "Deutsch Shepherd",
//   sex: "Female",
//   color: "Black",
//   character: "Kind",
// };
// console.log(dog["breed"]);
// console.log(dog.breed);
// const model = "iPhone 11";
// const key = "color";
// const phone = {
//   model,
//   storage: "128 GB",
//   price: 999,
//   color: "grey",
//   greeting() {
//     console.log(`Привіт, я твій ${this.model}`);
//   },
//   applyDiscount(discount) {
//     let sumOfDiscount = this.price * (discount / 100);
//     this.price -= sumOfDiscount;
//     return this.price;
//   },
//   showDiscountPrice(discount) {
//     let sumOfDiscount = this.price * (discount / 100);
//     return this.price - sumOfDiscount;
//   },
// };
// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };
// // for (let key in hotel) {
// //   console.log(hotel[key])
// // }
// const keys = Object.keys(hotel);
// for (key of keys) {
//   console.log(key);
// }
// const sum = (...args) => {
//   let sum = 0;

// }
// const maxNumber = Math.max(...numbers);
// const oldPhones = [
//   "Iphone3G",
//   "Iphone4",
//   "Iphone4s",
//   "Iphone5",
//   "Iphone8+",
//   "Iphone3G",
// ];
// const newPhones = [
//   "Iphone 14",
//   "Iphone 14",
//   "Iphone 14",
//   "Iphone 14",
//   "Iphone 14",
//   "Iphone 14",
//   "Iphone 14",
//   "Iphone 14",
//   "Iphone 14",
// ];
// const phone = {
//   name: "iphone",
//   price: 250,
// };
// const phone2 = phone;
// phone2.price = 500;
// phone2.name = "Samsung";
// console.log(phone.price, phone.name);
// Object.assign(phone2, phone);
// console.log(phone === phone2);

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,s
// };
// const newGoods = {};
// Object.assign(newGoods, goods);
// console.log(newGoods);
// console.log(goods);
// console.log(goods === newGoods);
// const phone = {
//   name: "iPhone 12",
//   price: 850,
//   color: "gray",
// };
// const box = {
//   ecomaterials: true,
// };
// const newPhone = { ...phone, storage: "512 GB", ...box };
// console.log(newPhone);
const lion = { hasTail: true, legs: 4 };
const eagle = { canFly: true };
const chimera = { ...lion, ...eagle };
console.log(chimera);
const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: false },
];
// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

const findFriendsByName = function (friends, friendsName) {
  for (let friend of friends) {
    if (friendsName === friend.name) {
      return friend;
    }
  }
};
const getAllNames = (friends) => {
  const allNames = [];
  for (let friend of friends) {
    allNames.push(friend.name);
  }
  return allNames;
};

console.log(getAllNames(friends));
