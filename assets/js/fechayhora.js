// date

let now = new Date();

console.log(now);

// let Jan01_1970 = new Date(0);
// console.log(Jan01_1970);
// let Jan01_1970_col = new Date(5 * 60 * 60 * 1000);
// console.log(Jan01_1970_col);
// let Jan02_1970_col = new Date (29 * 3600 * 1000);
// console.log(Jan02_1970_col);

// let Jul20_2000 = new Date("2000-07-20");
// console.log(Jul20_2000);

// Jul20_2000 = new Date(2000, 7, 20, 0, 0, 0, 0);
// Jul20_2000 = new Date(2000, 6, 20);
// console.log(Jul20_2000);
// let sep11_2001 = new Date(2001, 8, 11, 9, 7);
// console.log(sep11_2001);

// console.log(now.getFullYear());
// console.log(now.getMonth() + 1);
// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());
// console.log(now.getTime());

let ayer = new Date(2023,6,32);

let today = new Date();
console.log(today);
console.log(today.getDate() + 1);
today.setDate(today.getDate() + 1);
console.log(today);
today.setMonth(today.getMonth() + 1);
console.log(today);