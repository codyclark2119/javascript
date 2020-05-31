//Complete the following problems: 

/************************************************************* */

// Problem 1:
// Write a JavaScript function that determines whether a string is empty. If the string is empty, the output should be true, otherwise it should return false. 

//your code...
console.log('Problem 1: ')

function strCheck(string) {
    //Checks the parameter for any value after trimming out any spaces.
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
//Takes in two parameters, the new word and a number of which word you would like to replace
function wordReplace(newWord, numReplace) {
    //Splits the string into an array, seperating the at the spaces
    var newString = string.split(' ');
    //Goes through that array to the word specified and replaces the value with the new word
    newString[numReplace - 1] = newWord;
    //Changes the array back into a string with spaces and returns it
    return newString.join(' ')
}

console.log(wordReplace("difficult", 4))
console.log('--------------------------------------------')

/************************************************************* */
// Problem 3:
// Write a function that declares an array of numbers from one to five and returns another array with the squared value of each number from the first array. Use an arrow function and one of the built-in array methods. 

//your code...
console.log('Problem 3: ')

const initArr = [1, 2, 3, 4, 5];
const arrSquared = (arr) => {
    //Takes in an array as a parameter and raises each number to the second power and pushes it to a new array to return
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
    //Takes an array as a parameter then checks each value to see if it passes num > 3 and returns the ones that do to a new array
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
//A fun for loop for generating 5 random numbers 1-99 to pass to the function to make sure it always works
for (let i = 0; i < 5; i++) {
    sumArr.push(Math.floor(Math.random() * 99) + 1);
}
console.log(sumArr)
//Takes in an array as a parameter and adds each value together, starting with a base value of zero.
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
//Takes in a dna string as a parameter
function dnaOrganizer(dna) {
    //Splits it to an array by each character
    let dnaArr = dna.split('');
    const solved = [];
    //Helps constantly loop through the new array to double check for any missed characters
    while (dnaArr.length > 0) {
        //Also looping through but as some characters are removed during the process can end early which is why its within the while loop
        dnaArr.forEach(char => {
            switch (char) {
                //For cases C and A it make sure to push them first as they're the parent letters, and then removes it from the original array to avoid reusage
                //then searches for their corresponding following letter, pushes it behind the parent and removes it from the original array as well
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
                //For the following letters it checks if there is still a parent letter left in the original array and if there is it pushes it in front of the folowing letter and removes them both from the original array
                //otherwise it just pushes it to the array as theres nothing to pair with
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
    return(solved);
}

console.log(dnaOrganizer(dnaString))

console.log('--------------------------------------------')

/************************************************************* */
// Problem 7:

// 7.a - Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
console.log('Problem 7a: ')

const numbers = [2, 23, 1, 2, 1, 1, 1, 2, 2.5, 20, 200, 2000, , { k: 1 }, 20000, 19999, 1878, 140, 23, 4, "sk", true, true, "true-dat", "nice", "one", "two", "three", "3", "tea", []];

function maxNumber(numbers) {
    //your code...
    //An array of word numbers to check against
    const numChk = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    const numArr = [];
    numbers.forEach(num => {
        //Checks the type to quickly organize what is an isnt a number by pushing to another array if it is along with the word numbers
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
    //Sorts it decending and returns the first value as it is the largest
    return numArr.sort((a, b) => b - a).shift()
}
console.log(maxNumber(numbers))
console.log('--------------------------------------------')

// 7.b -Write a function that sorts the given numbers array.  Allow the function to sort the array in descending order
console.log('Problem 7b: ')

function sortNums(numbers, desc = false) {
    //your code...
    //Sorts the array passed decending
    return numbers.sort((a, b) => b - a)
};

console.log(sortNums(numbers))

console.log('--------------------------------------------')

/************************************************************* */
// Problem 8:
//add an example of at least 5 JavaScript data types to the given mapObj.  The key is the example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.
console.log('Problem 8: ')
//Setting a refrence variable for the object so it can be checked with the .has function
const exObj = { company: "TEKsystems" };
//Easily setting the other 4 datatypes within map with an array of key value pairs
const mapObj = new Map([[[1, 3, 5, 7, 9, 1, 3, 5], "array"], [false, "boolean"], [5, "number"], ["hello", "string"]]);
//Setting the object
mapObj.set(exObj, "object");

console.log(mapObj)
console.log(mapObj.has(exObj));
//The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code on line 106, so you can successfully check to see if {company : "TEKsystems"} exists in the mapObj.

//your code...
console.log("The original code fails because it is read as two different objects, but if you save it under a variable refrence it easily can see that they are the same object.");

//loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']

//Declares a new array to push the values to and pushes them.
const p8Arr = [];
mapObj.forEach(item => { p8Arr.push(item) })
console.log(p8Arr)

console.log('--------------------------------------------')

/************************************************************* */
//Problem 11:
console.log('Problem 11: ')

let ones = [1, 11, 111, 1111, 11111, 111111, 1111111, 11111111, 111111111, 1111111111];
//reverse the array, without modifying the ones array.

//Sets a new refrence variable to modify so it doesnt effect the original then reverses that one
let newArr = [];
ones.forEach(num => newArr.push(num))
console.log(newArr.reverse());
console.log(ones)

console.log('--------------------------------------------')

/************************************************************* */
//Problem 12:
//create a function called performer(cb) that takes in a callback function and runs that callback function.  It should return the output of the callback function.
console.log('Problem 12: ')

function performer(cb) {
    //code goes here

    //Creating a variable and passing it to the call back to log
    const name = "Cody";
    return cb(name);
}

//Takes in a parameter and console logs it
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