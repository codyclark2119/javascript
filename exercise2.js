//Complete the following problems:

/************************************************************* */
// Problem 1: Refactor the for() loop to be a while loop.
//

// for(let i=0; i<10; i++) {
//     console.log(" the value of i in the loop is : " + i);
// }

//your code...
console.log('Problem 1: ')
//Setting an inital variable to incriment
let i = 0;
//Keeps looping the process till i equals 10
while (i < 10) {
    console.log(" the value of i in the loop is : " + i);
    i++;
}
console.log('--------------------------------------------')

/************************************************************* */
// Problem 2:
// multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
//use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

//your code... 
console.log('Problem 2: ')
//Returns 32
function add(){
    return 30 + 2
}
//Takes a parameter and multiplies it by 20
function mult(ans){
    return ans * 20
}
//Takes a parameter and divides it by 10 to the power of 2
function div(ans){
    return ans / Math.pow(10, 2)
}
//I call add at the center to provide a base parameter for mult which provides one to div and returns the full answer
console.log(div(mult(add())))

console.log('--------------------------------------------')

/************************************************************* */
//Problem 3:
//Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation.
// values : 
console.log('Problem 3: ')

console.log(`20 is truthy because it is greater than zero`)
console.log(`0 is falsy because it has no value`)
console.log(`"zero" is truthy because it is a string with text`);
console.log(`const zero = 20 is truthy because it is delcaring a value to the word zero thats greater than zero`);
console.log(`null is falsy because it lacks a value`)
console.log(`"0" is truthy because it is a string with text`)
console.log(`!"" is falsy because there is no value in the string`)
console.log(`{} is truthy because even though its empty it still has inherent value as an object`)
console.log(`() => {console.log("hello TEKcamp!") is truthy because the function has value`);
console.log(`125 is truthy because it is a number value`)
console.log(`undefined is falsy because undefined has no value assigned to it`)
console.log(`"" is falsy because it has no value inside of it`)


console.log('--------------------------------------------')

/************************************************************* */
// Problem 4:
// Refactor the following code using a switch statement:
console.log('Problem 4: ')

const day = "friday";

// if (day === "monday") {
//     console.log("we got a long week ahead of us...");
// } else if (day === "tuesday") {
//     console.log("tuesday's are still beterr than mondays, but LONG way to go still");
// } else if (day === "wednesday") {
//     console.log("We are smack dab in the middle of the week");
// } else if (day === "thursday") {
//     console.log("Thursday night... the mood is right");
// } else if (day === "friday") {
//     console.log("TGIF.  Friday truly is the best day of the week!")
// } else {
//     console.log("It's a weekend!")
// }

//Day becomes the checked value so based on what it is itll choose the case that matches or default if none match
switch (day) {
    case "monday":
        console.log("we got a long week ahead of us...");
        break;
    case "tuesday":
        console.log("tuesday's are still better than mondays, but LONG way to go still");
        break;
    case "wednesday":
        console.log("We are smack dab in the middle of the week");
        break;
    case "thursday":
        console.log("Thursday night... the mood is right");
        break;
    case "friday":
        console.log("TGIF.  Friday truly is the best day of the week!")
        break;
    default:
        console.log("It's a weekend!")
        break;
}


console.log('--------------------------------------------')

/************************************************************* */
// Problem 5: Refactor the following functions to use a ternary expression:
console.log('Problem 5: ')

const age = 10;
// if (age > 21) console.log("adult"); else {
//     console.log("minor");
// }

//If age is greater than 21 it logs adult otherwise it logs minor
age > 21 ? console.log("adult") : console.log("minor");

// if (age > 13 && age < 19) console.log('teen'); else {
//     console.log("not a teenager");
// };

//If age is greater than 13 but less than 19 it logs teen otherwise it logs not a teenager
age > 13 && age < 19 ? console.log('teen') : console.log("not a teenager")

// if (age > 65) console.log("retired"); else {
//     console.log("still working...");
// }

//If age is greater than 65 it logs retired otherwise it logs still working...
age > 65 ? console.log("retired") : console.log("still working...")

console.log('--------------------------------------------')

/************************************************************* */
// Problem 6: Create an object literal that represents yourself.  set it to a variable that appropriately describes the object.  Include the following properties:
/*
-name
-age
-gender
-hobbies
-profession
-education

-add a method on your object, named learn. the learn method should print the value of the name property using the 'this' keyword.

-add another method on your object of any action you want to perform, using some property that exists on your object, making sure to utilize the 'this' keyword.
*/

//your code...
console.log('Problem 6: ')

const student = {
    name: "Cody Clark",
    age: 26,
    gender: "Male",
    hobbies: ["Gaming", "Watching TV", "Painting", "Playing Guitar/bass", "Playing with my dogs"],
    profession: "Full-Stack Web Developer",
    education: "Trilogy Full-Stack Web Developer Bootcamp",
    //A method that displays the name property of the object
    learn: function () { console.log(this.name) },
    //A method that lists out the array of hobbies
    showHobbies: function () {
        console.log('My hobbies are: ');
        this.hobbies.forEach(hobby => console.log(hobby))
    }
};

student.learn()
student.showHobbies()

console.log('--------------------------------------------')

/************************************************************* */
// Problem 6: Create an object literal that represents any object in the real world that you like.  Try to come up with a realistic set of properties and methods that would accurately describe that object.  In at least one of your methods, use the this keyword to refer back to one of the properties you defined on this object literal.  

//your code...
console.log('Problem 6 Pt2: ')

const system = {
    name: "Switch",
    developer: "Nintendo",
    releaseDate: "March 3rd 2017",
    memory: "4 GB LPDDR4",
    baseStorage: "32 GB",
    generation: 8,
    price: "299.99$",
    bestSellingGames: [{ name: "Mario Kart 8 Deluxe", sold: "22.77 Million" }, { name: "Super Smash Bros. Ultimate", sold: "18.84 Million" }, { name: "The Legend of Zelda: Breath of the Wild", sold: "17.41 Million" }, { name: "Animal Crossing:New Horizons", sold: "11.77 Million" }],
    //A method that logs a message showing all the system specs and price
    listSystemSpecs: function () {
        console.log(`${this.developer} ${this.name}, released: ${this.releaseDate} as part of the ${this.generation}th generation of consoles. Its base RAM is ${this.memory} with ${this.baseStorage} interal storage. The current cost of this console is ${this.price}!`);
    },
    //A method that lists out the best selling games and how much they sold
    listGames: function () {
        console.log(`Best selling games for the ${this.developer} ${this.name}:`)
        this.bestSellingGames.forEach(game => {
            console.log(`${game.name}, Copies sold: ${game.sold}`)
        })
    }
}
system.listSystemSpecs();
system.listGames();

console.log('--------------------------------------------')

/************************************************************* */
//Problem 7: create a function that outputs your 3 favorite data types, with a message explaining why you like that data type.

//your code...
console.log('Problem 7: ')

function listDataTypes(){
    console.log(`Objects are cool because of how much you can structure and store within them`);
    console.log(`Booleans are fun because they make instant checks for values really easy with truthy falsy`);
    console.log(`And strings are fun especially with template literals because you can do js inside them.`);
}

listDataTypes();

console.log('--------------------------------------------')

/************************************************************* */
//Bonus assignments:

//1. Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that takes another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

//your code...
console.log('Bonus 1: ')

//Function multiple takes in a parameter
function multiple(x){
    //Function fn takes in a parameter and multiplies it by its parameter and function multiples paramter
    function fn(y){
        return (x * y)
    }
    //This calls function fn and passes the paramter to it so that it doubles the number passed to function multiple
    return fn(x);
}

console.log(multiple(5))

console.log('--------------------------------------------')

// 2. Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

// Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

//your code...
console.log('Bonus 2: ')
//FutureValue holds function stock gain so that you can pass the basis and years to it
const futureValue = function stockGain(basis, yrs){
    let message = " is how much the stock has increased.";
    //Takes in years as a parameter
    function inner(yrs){
        //Growth rate variable
        let r = .05;
        //Takes the basis and multiplies it by the years by rate value to get the total value increased and logs the message with the value
        console.log((basis * (yrs * r) + message));
        return;
    }
    return inner(yrs);
}
futureValue(1000, 5)