// Primitive (By Value)

// 7 Types: string, number, boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.5
const isThere = false
const temprature = null
let temp;
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);

const bigNumber = 3333333333333332222222222222222n



// Non Primitive (By Reference)

// Array, Objects, Functions

const rivers = ['Ganga', 'Yamuna', 'Narmada']

let myObj = {
    name: "Swapnil",
    age: 43,
    scores: [40,44,88]
}

const myFunction = function(){
    console.log("Swapnil");
}

console.log(typeof myFunction);

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


// =============== STACK AND HEAP MEMORY =========

//  Stack (Primitve) 

let name1 = "Swapnil"
name1 = "Zyne"
console.log(name1);

let name2 = name1
name2 = "Angela"

console.log(name1);
console.log(name2);


//  Heap (Non Primitive)

let user1 = {
    name: "user1",
    age: 30
}

let user2 = user1

user2.age= 44

console.log(user1);
console.log(user2);


