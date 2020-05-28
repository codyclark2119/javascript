//Complete the following problems: 

/************************************************************* */

// Problem 1:
// Write a JavaScript function that determines whether a string is empty. If the string is empty, the output should be true, otherwise it should return false. 

//your code...
console.log('Problem 1: ')

function strCheck(string) {
    return string.trim().length === 0 ? true : false;
}

console.log(strCheck("    "));
console.log(strCheck("111"));

console.log('--------------------------------------------');

/************************************************************* */

// Problem 2:
// Declare a variable that holds a string (e.g., ‘Learning JavaScript is fun!’). Replace a word so that the output uses the new word instead (e.g., ‘Learning JavaScript is cool!). 

//your code...
console.log('Problem 2: ')

let string = "Learning javascript is cool!";

function wordReplace(newWord, numReplace) {
    var newString = string.split(' ');
    newString[numReplace] = newWord;
    return newString.join(' ')
}

console.log(wordReplace("difficult", 3))
console.log('--------------------------------------------')

/************************************************************* */
// Problem 3:
// Write a function that declares an array of numbers from one to five and returns another array with the squared value of each number from the first array. Use an arrow function and one of the built-in array methods. 

//your code...
console.log('Problem 3: ')

const initArr = [1, 2, 3, 4, 5];
const arrSquared = (arr) => {
    return arr.map(num => Math.pow(num, 2))
}

console.log(arrSquared(initArr))
console.log('--------------------------------------------')

/************************************************************* */
// Problem 4:
// Now declare another array of numbers that has the following numbers: 1, 3, 5, 7, 9, 1, 3, 5. Write a JavaScript program that returns an array of the numbers that are greater than 3. Use an arrow function and one of the built-in array methods.

//your code...
console.log('Problem 4: ')

const pr4Arr = [1, 3, 5, 7, 9, 1, 3, 5];
const arrFilter = (arr) => {
    return arr.filter(num => num > 3)
}

console.log(arrFilter(pr4Arr))
console.log('--------------------------------------------')

/************************************************************* */
// Problem 5:
// Now declare another array of numbers that has any 5 numbers. Write a JavaScript program that returns the sum of those numbers. Use an arrow function and one of the built-in array methods. 

//your code...
console.log('Problem 5: ')

const sumArr = [];

for (let i = 0; i < 5; i++) {
    sumArr.push(Math.floor(Math.random() * 99) + 1);
}
console.log(sumArr)
const total = (arr) => { return arr.reduce((a, b) => a + b, 0) };
console.log(total(sumArr))

console.log('--------------------------------------------')

/************************************************************* */
// Problem 6:
// DNA is made up of base pairs where every G is paired with a C and every T is paired with an A. 

// Write a function that takes in a DNA string as a parameter and returns an array with the complementary strand. For example, a string of "GCTA" would return an array of ["C", "G", "A", "T"].  

//your code...
console.log('Problem 6: ')
const dnaString = "GCTAATTCGTAGCCAT";
function dnaOrganizer(dna) {
    let dnaArr = dna.split('');
    const solved = [];
    while (dnaArr.length > 0) {
        dnaArr.forEach(char => {
            switch (char) {
                case "C":
                    solved.push(char)
                    dnaArr.splice(dnaArr.indexOf("C"), 1)
                    if (dnaArr.indexOf("G") !== -1) {
                        solved.push("G");
                        dnaArr.splice((dnaArr.indexOf("G")), 1)
                    }
                    break;
                case "A":
                    solved.push(char)
                    dnaArr.splice(dnaArr.indexOf("A"), 1)
                    if (dnaArr.indexOf("T") !== -1) {
                        solved.push("T");
                        dnaArr.splice((dnaArr.indexOf("T")), 1)
                    }
                    break;
                case "T":
                    dnaArr.splice(dnaArr.indexOf("T"), 1)
                    if (dnaArr.indexOf("A") !== -1) {
                        solved.push("A", char);
                        dnaArr.splice((dnaArr.indexOf("A")), 1)
                    }
                    else { solved.push(char) }
                    break;
                case "G":
                    dnaArr.splice(dnaArr.indexOf("G"), 1)
                    if (dnaArr.indexOf("C") !== -1) {
                        solved.push("C", char);
                        dnaArr.splice((dnaArr.indexOf("C")), 1)
                    }
                    else { solved.push(char) }
                    break;
            }
        })
    }
    console.log(solved);
}

dnaOrganizer(dnaString)

console.log('--------------------------------------------')

/************************************************************* */
// Problem 7:

// 7.a - Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
console.log('Problem 7a: ')

const numbers = [2, 23, 1, 2, 1, 1, 1, 2, 2.5, 20, 200, 2000, , { k: 1 }, 20000, 19999, 1878, 140, 23, 4, "sk", true, true, "true-dat", "nice", "one", "two", "three", "3", "tea", []];

function maxNumber(numbers) {
    //your code...
    const numChk = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    const numArr = [];
    numbers.forEach(num => {
        switch (typeof num) {
            case 'number':
                numArr.push(num)
            case 'string':
                if (numChk.includes(num)) {
                    numArr.push(num)
                }
                else if (parseInt(num)) {
                    numArr.push(parseInt(num))
                }
                break;
            default:
                break;
        }
    })
    return numArr.sort((a, b) => b - a).shift()
}
console.log(maxNumber(numbers))
console.log('--------------------------------------------')

// 7.b -Write a function that sorts the given numbers array.  Allow the function to sort the array in descending order
console.log('Problem 7b: ')

function sortNums(numbers, desc = false) {
    //your code...
    return numbers.sort((a, b) => b - a)
};

console.log(sortNums(numbers))

console.log('--------------------------------------------')

/************************************************************* */
// Problem 8:
//add an example of at least 5 JavaScript data types to the given mapObj.  The key is the example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.
console.log('Problem 8: ')
const exObj = { company: "TEKsystems" };
const mapObj = new Map([[[1, 3, 5, 7, 9, 1, 3, 5], "array"], [false, "boolean"], [5, "number"], ["hello", "string"]]);
mapObj.set(exObj, "object");

console.log(mapObj)
console.log(mapObj.has(exObj));
//The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code on line 106, so you can successfully check to see if {company : "TEKsystems"} exists in the mapObj.

//your code...
console.log("The original code fails because it is read as two different objects, but if you save it under a variable refrence it easily can see that they are the same object.");


//loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']
const p8Arr = [];
mapObj.forEach(item => { p8Arr.push(item) })
console.log(p8Arr)

console.log('--------------------------------------------')

/************************************************************* */
//Problem 11:
console.log('Problem 11: ')

let ones = [1, 11, 111, 1111, 11111, 111111, 1111111, 11111111, 111111111, 1111111111];
//reverse the array, without modifying the ones array.
let newArr = ones;
console.log(newArr.reverse());

console.log('--------------------------------------------')

/************************************************************* */
//Problem 12:
//create a function called performer(cb) that takes in a callback function and runs that callback function.  It should return the output of the callback function.
console.log('Problem 12: ')

function performer(cb) {
    //code goes here
    const name = "Cody";
    return cb(name);
}

function greeting(txt) {
    console.log(txt)
}

performer(greeting)

console.log('--------------------------------------------')

/************************************************************* */
//Bonus assignment:
//research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.
console.log('Bonus: ')
console.log('Destructuring assignments are when you have an object and instead of assigning the values to individual variables seperately you can set them all at once!');
console.log(`Original way:
    var body = req.body, // body has username and password
    username = body.username,
    password = body.password `);
console.log(`Destrucuturing:
    var {username, password} = req.body`)