// single line comment

/*
multy line comment
*/

// <<<<<<<<<<<<<<<< DATA TYPES >>>>>>>>>>>>>>>>>>>>

var myName = 'lasha';
myName = 8;

let ourName = 'city';

//let only be used in scope

const pi = 3.14

// const can not be changed


// <<<<<<<<<<<<<<<< ASSIGMENT OPERATOR >>>>>>>>>>>>>>>>>>>>

var a; //declare 
var b = 2; // declare and assign
a = 7; //assign
b = a; // assign content of a to b

// null -> assigned nothing, undefined --> not assigned


// <<<<<<<<<<<<<<<< OPERATIONS >>>>>>>>>>>>>>>>>>>>

var sum = 10 + 4;
var dif = 10 - 4;
var multi = 10 * 4;
var div = 10 / 2;

sum++; // sum = sum + 1
sum--; // sum = sum - 1
a += 12; // a = a + 12
b -= 2; // b = b - 2
a *= 2;
a /= 2;


var dec = 0.009;
var prod = 2.0 * 2.5; // 5
var decDiv = 4.4 / 2.0; // 2.

var remainder;
remainder = 11 % 3; // 2 


// <<<<<<<<<<<<<<<< STRINGS >>>>>>>>>>>>>>>>>>>>

var firstName = "George";
var difFirstName = 'Joel';
var geJo = firstName + ' ' + difFirstName; // or +=

var withQuote = " singe ' quote ' ";
var withDoubleQuote = "  double \" quote \" ";
// or 
var doubleInSingle = ' double "quotes" ';

/*
\'
\"
\\
\n new line
\r carriage return
\t tab
\b backspace
\f form feed
*/

var stringLength = firstName.length;
var secondLetterInWord = firstName[1]; // e

// strings are immutable. it means you can not firstName[2] = 'M';

var lastLetter = firstName[stringLength - 1];

// <<<<<<<<<<<<<<<< ARRAYS >>>>>>>>>>>>>>>>>>>>

var ourArray = ["Skrrra", 24];
var skra = ourArray[0];

var nested = [
    ['insideSkra', 22],
    ['secondSkra', 19]
];
var secondSkra = nested[1][0];

nested.push(['fird sKrra', 41]); // add to array
nested.pop(); // remove last element from  array
nested.shift(); // remove first element
nested.unshift(['NewFirstSkra', 2049]); // add element to 0 index

var toSplice = [1, 2, 3];
const index = toSplice.indexOf(2);
toSplice.splice(index, 1); // remove only one element from index

// JSON.stringify(array) output array as string


// <<<<<<<<<<<<<<<< FUNCTIONS >>>>>>>>>>>>>>>>>>>>

function println(variable) {
    console.log(variable + '\n');
}

function sumFun(a, b) {

    return a + b;
}

// global scope 

// local variables are not visible outside of function

var globalScope = 22;

function localFun() {
    var localScope = 5; // if you remove var it becomes GLOBAL
}

function fun() {
    var output = "";

    if (typeof globalScope != "undefined") { // check if it has defined
        output += "My Global :" + globalScope;
    }

    if (typeof localScope != "undefined") {
        output += " localScope: " + localScope;
    }

    console.log(output);
}

// local variables override global variables

// undefined return 
function addThree() {
    sum = 0;
    sum += 3;
}

// anonimus function

const magic = () => Date();

const myConcat = (arr1, arr2) => arr1.concat(arr2);

const realNumbers = [4, 5.6, -9.7, 2.15, 5, -8];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num =>
        Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};

// console.log(squareList(realNumbers)); 16 25

const increment = (
    function () {
        return function increment(number, value = 1) {
            return number + value;
        };
    }
)();

// console.log(increment(5, 7)) 13
// console.log(increment(5)) 6

// pass as many arguments as you want

const sumNums = (function () {
    return function sumNums(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();

arr1 = [1, 2, 3, 4, 5];
let arr2;

arr2 = arr1;
arr1[0] = 11; // will change arr2 as well because they are "same"


arr2 = [...arr1];
arr1[0] = 11; // now arr2 won't change because variables are spread


const stats = {
    max: 22,
    div: 32,
    mode: 221,
    min: 12
}

// filter what you request from object

const half = (function () {
    return function half({
        min,
        max
    }) {
        return 'ans: ' + (max + min) / 2;
    };
})();



// <<<<<<<<<<<<<<<< LOGICAL OPERATIONS >>>>>>>>>>>>>>>>>>>>


function isTrue(variable) {
    if (variable) {
        console.log("yeah it is true");
    } else {
        console.log("It ain't true");
    }
}

// == type conversion,  === correct comparison
/*
for example :
10 == '10' TRUE
10 === '10' FALSE

!=  NOT EQUAL

10 != '10' FALSE
10 !== '10' TRUE

more operators: 
>  >= < <= !> !>= !< !<=

 ---- LOGICAL OR -----  

  if(num > 10 || num < 20)

 ---- LOGICAL AND -----

  if(num > 0 && num < 100)

*/


function equalsTwo(number) {

    if (number === 2) {
        console.log("TRUE");
    } else {
        console.log("WRONG");
    }
}

function ifElse(variable) {

    if (variable < 10) {
        return 'low';
    } else if (variable < 50) {
        return 'normal';
    } else {
        return 'good';
    }
}

// switch statement

function switcher(number) {

    var answer = "";

    switch (number) {
        case 1:
            answer = 'Alpha';
            break;
        case 2:
            answer = 'Beta';
            break;
        case 3:
            answer = 'Gamma';
            break;
        case 4:
            answer = 'Delta';
            break;
        default:
            answer = 'Wrong number';
            break;
    }
    return answer;
}

// identical cases

function switcher2(number) {

    var answer = "";

    switch (number) {
        case 1:
        case 2:
        case 3:
            answer = 'ALPHA';
            break;
        case 4:
        case 5:
        case 6:
            answer = 'BETA';
            break;
        default:
            answer = 'Wrong number';
            break;
    }
    return answer;
}

// returning early patterns from functions

function adTest(a, b) {

    if (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}


// <<<<<<<<<<<<<<<<  OBJECTS >>>>>>>>>>>>>>>>>>>>

var car = {
    type: "Fiat",
    model: "500",
    color: "white",
    owners: ["maily", "Torvald"]
};


/* access properties

objectName.propertyName
or
objectName["propertyName"]

*/

car.color = "black";

// add property object

car.seats = 4;
delete car.seats;

var lookup = {
    table: "TABLE",
    chair: "CHAIR",
    skrrra: "SKRRRA TA TA"
};

console.log();

// checking if has property 

function checkObj(prop) {
    if (lookup.hasOwnProperty(prop)) {
        return lookup[prop];
    } else {
        return "not found";
    }
}


// manipulate complex objects

var myMusic = [

    {
        "artist": "Big Shaq",
        "title": "Piano man",
        "release_year": 20902,
        "formats": [
            "CD",
            "PNG",
            "USA"
        ],
        "gold": true
    },
    {
        "artist": "Rasnu",
        "title": "Piano woman",
        "release_year": 1,
        "formats": [
            "AK-47",
            "JPEG",
            "RUSSIA"
        ],
        "gold": false
    },
];

// access nested array

var pianoWomanFormats = JSON.stringify(myMusic[1].formats);

// access nested objects


var storage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "oassenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBox = storage.car.inside["glove box"];

// record collection task

var collection = {

    "2548": {
        "album": "random album 1",
        "artist": "artist 1",
        "tracks": [
            "track 1",
            "track 2",
            "track 3"
        ]
    },


    "2511": {
        "album": "random album 2",
        "artist": "artist 3",
        "tracks": [
            "track 1",
            "track 2",
            "track 3"
        ]
    },


    "2522": {
        "album": "random album 3",
        "artist": "artist 3",
        "tracks": []
    },

    "2122": {
        "album": "random album 3"
    },

};

function updateRecord(id, prop, value) {

    //delete if value is empty
    if (value === "") {
        delete collection[id][prop];
    }

    // if tracks add 
    else if (prop === "tracks") {
        // if exists leave it as it is, 
        //or create empty array of tracks
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else collection[id][prop] = value;

}

updateRecord("2511", "artist", "Thanos");
updateRecord("2511", "tracks", "new Track");
updateRecord("2122", "tracks", "created track array");

// <<<<<<<<<<<<<<<<  DESTRUCTURING >>>>>>>>>>>>>>>>>>>>

var voxels = {
    x: 3.6,
    y: 2.3,
    z: 6.32
};

const {
    x: aa,
    y: bb,
    z: cc
} = voxels; // copy values from voxels to 
// aa = 3.6  bb = 2.3 cc = 6.32

console.log(aa);

const AVG_TEMPS = {
    today: 332,
    tomorrow: 12
};

function getTodayTemp(tempData) {
    const {
        today: todaysTemp
    } = tempData; // get todayField and assign to todayTemp

    return todaysTemp;
}


const LOCAL_FORECAST = {

    today: {
        min: 72,
        nax: 83
    },
    tomorrow: {
        min: 23,
        max: 90
    }
};

function getMaxOfTmr(forecast) {

    const {
        tomorrow: {
            max: maxOfTmr
        }
    } = forecast;

    return maxOfTmr;
}

const [x, y, , z] = [1, 2, 3, 4, 5];
console.log(x, y, z);

let fi = 5,
    fa = 3;
(() => {
    [fi, fa] = [fa, fi]
})();
console.log(fa);

// destructuing with rest operator 


const source = [1, 2, 3, 4, 5, 6, 7];

function removeFirstTwo(list) {
    const [, , ...arr] = list; // do nothing for first and second element
    return arr;
}

console.log(removeFirstTwo(source));



// <<<<<<<<<<<<<<<<  LOOPS >>>>>>>>>>>>>>>>>>>>

// while checks condition before it runs
// do while runs at least once

// while 

var array = [];
var i = 0;
while (i < 5) {
    array.push(i);
    i++;
}

// for

function elementPrinter(array) {
    for (var z = 0; z < array.length; z++) {
        console.log(array[z]);
    }
}

function elementPrinterOdds(array) {
    for (var z = 1; z < array.length; z += 2) {
        console.log(array[z]);
    }
}

function elementPrinterBackwards(array) {
    for (var z = array.length - 1; z > 0; z--) {
        console.log(array[z]);
    }
}

// nested for loop

var nestedArray2 = [
    [2, 3],
    [4, 5]
];

function nestedFor(nestedArray) {

    var answer = "";

    for (var i = 0; i < nestedArray.length; i++) {
        var product = 1;
        for (var j = 0; j < nestedArray[i].length; j++) {
            product *= nestedArray[i][j];
        }
        answer += "\nProduct of index " + i + " is: " + product;
    }

    return answer;
}


// <<<<<<<<<<<<<<<<  MATH  >>>>>>>>>>>>>>>>>>>>

function randomFraction() {
    return Math.random;
}

function randomWhole() {

    return Math.floor(Math.random * 10);
}

function randomInRange(min, max) {
    return Math.floor(Math.random * (max - min + 1)) + min;
}

function converToInteger(str) {
    return parseInt(str);
}

//binary
function converToIntSomeBase(str) {
    return parseInt(str, 2);
}


// <<<<<<<<<<<<<<<<  TERNARY  >>>>>>>>>>>>>>>>>>>>


2 < 1 ? console.log("TRUE") : console.log("FALSE");

var num = 10;

//nested condition

num > 0 ? 'positive' : num < 0 ? 'negative' : '0';



// <<<<<<<<<<<<<<<<  VAR vs LET vs CONST >>>>>>>>>>>>>>>>>>>>

// let does not let you decline twise 

// let is more strict to block or function scope 

// const is let but read only. you can not change it
// const usually is uppercase :   const NUM = 8

// you can mutate const array tho

const s = [1, 2, 3];
s[0] = 22;

// prevent mutation

Object.freeze(s);


// <<<<<<<<<<<<<<<<  MIX >>>>>>>>>>>>>>>>>>>>


// < create string using template literals > 

const person = {
    name: 'Hasbo',
    age: 56
}

const greeting = `hello, my name is ${person.name}! 
I am ${person.age} years old.`;

console.log(greeting);

const result = {
    success: ["max", "min", "var", "let"],
    failure: ["vax", "shaq", "faz"]
}

function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li> `)
    }

    return resultDisplayArray;
}

/*
0: "<li class="text-warning">vax</li> "
1: "<li class="text-warning">shaq</li> "
2: "<li class="text-warning">faz</li> "
*/

// give function name age and gender and return those values

const person1 = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
};

console.log(person1("Hazbo", 56, "male"));

// simplified

const person2 = (name, age, gender) => ({
    name,
    age,
    gender
});
console.log(person2("Hazbo", 56, "male"));


const bicycle = {

    gear: 2,

    setGear(newGear) { // you dont need setGear: function(newGear)
        this.gear = newGear;
    }
};

// <<<<<<<<<<<<<<<<  CLASS >>>>>>>>>>>>>>>>>>>>


// constructor

function makeClass() {
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }
    return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);


// getters setters

class Book {

    constructor(author) {
        this.author = author;
    }

    get writer() {
        return this._author;
    }

    set writer(newAuthor) {
        this._author = newAuthor;
    }
}

const harryPotter = new Book('J.K rowling');
console.log(harryPotter.author);

harryPotter.author = 'Zviadi';
console.log(harryPotter.author);

// ._ means private variable

// <<<<<<<<<<<<<<<<  IMPORT vs REQUIRE >>>>>>>>>>>>>>>>>>>>

import {
    capitalizeString
} from "forImport"

const capit = capitalizeString('i am batman');
console.log(capit);

// import default

import sub from "forImport"