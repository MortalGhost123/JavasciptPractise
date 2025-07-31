"use strict"; 
let score = false;

// console.log(typeof score)
// console.log(typeof (score))

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber)
// console.log(valueInNumber);

/*
    "33" => 33
    "33abds" => NaN
    true => 1 ; false => 0
*/

let isThere = undefined;

let booleanIsThere = Boolean(isThere);

// console.log(booleanIsThere);

/*
    1 => true ; 0 => false
    "" => false
    "swapnil" => true
*/

let no = 33
let stringNumeber = String(no);
// console.log(stringNumeber)
// console.log(typeof stringNumeber)

let value = 3
let negValue = -value

// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**4)

let str1 = "hello"
let str2 = " world"

let str3 =  str1 + str2
// console.log(str3)

// console.log(1 + "2");
// console.log("1" + 2);
// console.log(1+3);
// console.log(1+2+"3");
// console.log("1"+2+5);

// console.log(+true);
// console.log(+"");
// The unary plus (+) tries to convert its operand into a number.

let gameCounter = 1;
gameCounter++;
// console.log(gameCounter);


let x2 = 3n;
const y2 = x2++;
console.log("x2:", x2);      // Should show 4n
console.log("y2:", y2);      // Should show 3n
console.log(typeof x2);      // 'bigint'
console.log(typeof y2);      // 'bigint'




