//Complete the following problems: 

// Problem 1:
// Part 1: Write a JavaScript function that converts the current temperature from Fahrenheit to Celsius. Declare a variable for the current temperature then store the Celsius temperature into a variable. Console log the variable.
// Part 2: Write another funciton that converts the Celsius temperature back to Fahrenheit. 
//your code...

//Part 1
//Inital values
let currentTemp = 77;
let celsius;
let fahrenheit;
//Passes in temp value as parameter and converts it to celsius and saves it to a variable to display.
function fahrtocel(temp) {
    celsius = (temp - 32) * (5 / 9)
    console.log("Celsius: " + celsius);
}
fahrtocel(currentTemp)

// Part 2
//Passes in temp value as parameter and converts it to Fahrenheit and saves it to a variable to display.
function celtofahr(temp) {
    fahrenheit = 32 + (temp * (9 / 5))
    console.log("Fahrenheit: " + fahrenheit)
}
celtofahr(25)

/************************************************************* */
// Problem 2:
// Write a JavaScript function to determine if someone is old enough to vote. Declare a variable for age and write a conditional statement for whether that age is old enough to vote. Console log "yes" or "no"

//your code...
//Inital Value
let personAge = 19;
//Pass in age as a parameter then check that parameter to see if its equal to or greater than 18
function ageChecker(age) {
    if (age >= 18) {
        console.log("Yes you are old enough");
    }
    else {
        console.log("No you aren't old enough");
    }
}
ageChecker(personAge)

/************************************************************* */
// Problem 3:
// Write a JavaScript function that converts a string to an array. Declare a string variable with "The five boxing wizards jump quickly." Use the split() method to turn the string into an array of strings. (Be sure you separate the string into words, not characters.) After you have finished, use the join() method to change the array back into a string.

//your code...
//Inital string
let string = "The five boxing wizards jump quickly.";
//Splits the string into an array
let stringArr = string.split(' ')
console.log(stringArr);
//Joins the array to become a normal sentence
let newString = stringArr.join(' ');
console.log(newString);

/************************************************************* */
// Problem 4:
// Write a JavaScript function with a function that reverses your telephone number. Use the split() and join() methods from the previous problem as well as the toString() method to convert a number into a string and reverse() method to reverse an array in place.

//your code...
//Inital values
let phoneNumber = 9035768;
//Pulls in number as a parameter
function numReverse(num) {
    //Turns the value to a string 
    let stringNum = num.toString();
    //Splits the string to an array
    let tempArr = stringNum.split('');
    //reverses the array and joints it to make a single string
    console.log(tempArr.reverse().join(''))
}
numReverse(phoneNumber)
/************************************************************* */
// Problem 5:
// Write a JavaScript function that creates a car object using information about your car. Include the make, model, year, and color. Write a function to get the year, color, make, and model in that order.

//your code...
//Pulls in the values as parameters
function carCreator(make, model, year, color) {
    //builds the object out of the parameters
    let carObj = {
        make, model, year, color,
        //Prints the car information to the console
        printStats: function () {
            console.log(`${this.year} ${this.color} ${this.make} ${this.model}`)
        }
    }
    //returns the object
    return carObj;
}

const myCar = carCreator('ford', 'mustang', '2001', 'white');
myCar.printStats()
/************************************************************* */
// Problem 6:
// Write a JavaScript function with a loop that will iterate from 0 to 15. Each iteration, the for loop will check if the current number is odd or even and display the output.

//your code...
//For loop loops through the code 16 times 
for (let i = 0; i <= 15; i++) {
    //Checks if there is a remander when divided by two
    //If not its even
    if (i % 2 === 0) {
        console.log(i + ' ' + 'is even')
    }
    //If there is a remander it is odd
    else {
        console.log(i + ' ' + 'is odd')
    }
}
/************************************************************* */
// Problem 7:
// Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

//your code...
for (let i = 1; i <= 100; i++) {
    //Checks for if its divideable by both
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + ' ' + 'TEKcamp')
    }
    //Otherwise checks if dividable by 3
    else if (i % 3 === 0) {
        console.log(i + ' ' + 'TEK')
    }
    //Otherwise checks if dividable by 5
    else if (i % 5 === 0) {
        console.log(i + ' ' + 'camp')
    }
}


/************************************************************* */
// Problem 8:
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Write a "for" loop that console.log()'s the first
// value in the nums array, and every 3rd number, i.e. 0, 3, 6,
// and 9: the zeroth, third, sixth, and ninth values.

//your code...
//Loops through the entire array
for (let i = 0; i < nums.length; i++) {
    //Checks if dividable by three with no remainder
    if (nums[i] % 3 === 0) {
        console.log(nums[i])
    }
}


// Problem 9:
const foodArray = ['potatoes', 'tamales', 'lemon', 'strawberries', 'chocolate', 'pudding', { school: 'TEKcamp' }];
//access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.

const adjectiveArray = ['salty', 'spicy', 'sour', 'sweet', 'rich', 'creamy', 'amazing'];
// Using both the foodArray and the adjectiveArray, make a
// "for" loop that console.log()'s a sentence for each
// corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  "Potatoes are salty", "Lemon is sour".

//Grabs out final value of the array and gets the value assigned to school
let school = foodArray[foodArray.length - 1].school;
console.log(school)

for (let i = 0; i < foodArray.length; i++) {
    //Checks for a type of string to run the letter check on singular values
    if ((typeof foodArray[i]) === 'string') {
        //Converts the array value to a string 
        let food = foodArray[i].toString();
        //Grabs the last letter of the food being checked to see if it is an s
        if (food.slice(food.length - 1) === 's') {
            //If there is an 's' so we make the middle word 'are' to be gramatically correct for the pluralization
            console.log(`${food} are ${adjectiveArray[i]}`)
        }
        else {
            //Otherwise we use 'is' for singualar values
            console.log(`${food} is ${adjectiveArray[i]}`)
        }
    }
    else {
        //The object at the end of the array is handled
        console.log(`${foodArray[i].school} is ${adjectiveArray[i]}`)
    }

}
/************************************************************* */
// Bonus Assignment: Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly does one of the 4 operations whenever it is run.  the doMath() function should print out what mathetmatical function was carried out.  The doMath() function should return the computed value of any operation performed.

//Inital operations
const operations = ['2 + 2', '5 - 1', '6 * 7', '9 / 3'];
//Pulls in the array as a parameter
function doMath(arr) {
    //Grabs a random problem from the array
    let mathArr = arr[Math.floor(Math.random() * arr.length)].split(' ')
    //Pulls out the values from the problems
    //Converts the string number to a integer so we can preform math on it
    let num1 = parseInt(mathArr[0]);
    let num2 = parseInt(mathArr[2]);
    //Holds the operator as a checkable value for the switch
    let operator = mathArr[1];
    //Final value
    let result;
    //Checks which operator got pulled out of the problem and uses the correct case based on it.
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    //Console logs the problem with the result so the user can see it
    console.log(`${num1} ${operator} ${num2} = ${result}`)
    //Returns the result as instructed
    return result;
};

doMath(operations)