console.log("Section 1");
let ages = [3,9,23,64,2,8,28,93]; //initial array given

console.log("\n1. Programmatically subtract the value of the first element in the array from the value in the last element of the array. Do not use numbers to reference the last element, find it programmatically.");
// function created to determine the difference between the first and last age.
function differenceAge(ages){
    console.log(ages); //prints array to the console
    console.log("The difference between the first and last element in the array is:");
    console.log(ages[ages.length-1]- ages[0]);//prints the last minus the first age to the console.
}
differenceAge(ages);//calls the function differenceAge

console.log("\n2. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).");
ages.push(50);//adds 50 to the end of the array ages
differenceAge(ages);//calls the function differenceAge again

console.log("\n3. Use a loop to iterate through the array and calculate the average age.")
let averageAge = 0;// set averageAge to 0
//A loop to add all the ages in ages to averageAge
for(let i=0; i< ages.length; i++){
    averageAge += ages[i];
}
averageAge = averageAge/ages.length; // divides the total ages by the number of ages to get the average
console.log(averageAge);//prints averageAge to the console

console.log("\nSection 2");
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log ("Starting with an array called names:");
console.log(names);

console.log("\n1. Use a loop to iterate through the array and calculate the average number of letters per name.");
let averageNameLength = 0; // assigns averageNameLength to 0
// loops through names and adds the lengths of each element together
for(nameIn of names){ 
    averageNameLength += nameIn.length;
}
averageNameLength = averageNameLength/names.length; // makes the total into an average by dividing by number of elements 
console.log(averageNameLength);

console.log("\n2. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.");
let nameString = "";// creates an empty string
// loops through names and concatenates it to nameString
for(let i=0; i< names.length; i++){
    nameString += names[i];
    if(i < names.length-1){
        nameString += " ";
    }
}
console.log(nameString);
//or using join do the same thing
console.log("using join()")
nameString = names.join(" ");
console.log(nameString);

console.log("\n3. How do you access the last element of any array?");
console.log("the last element of an array can be accessed by array[array.length-1] because arrays start at 0");

console.log("\n4. How do you access the first element of any array?");
console.log("array[0]");

console.log("\n5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.");
let nameLengths = []; // creates an empty array
//loops through names and adds the length of each element to the nameLengths array
for(nameIn of names){
    nameLengths.push(nameIn.length);
}
console.log(nameLengths);

console.log("\n6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.");
let sumTotal = 0; // creates sumTotal to 0
// loops through nameLengths to add the number together to get a total
for(num of nameLengths){
    sumTotal += num;
}
console.log(sumTotal);

console.log("\n7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').");
function wordNumberTimes(word, n){
    let returnedWord = ""; // creates an empty string
    // loops until n is reached and adds the word to returnedWord for each time it loops
    for(let i = 1; i <= n; i++){
        returnedWord += word;
    }
    return returnedWord;
}
console.log(wordNumberTimes('Hello', 3));

console.log("\n8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.");
function fullName(firstName, lastName){
    return firstName + " " + lastName;
}
console.log(fullName("Brady", "Burgener"));

console.log("\n9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.");
function sumOfNumbersGreaterThan100(array){
    let sumTotal = 0;// initiates sumTotal
    // loops through array and adds each element together
    for(num of array){
        sumTotal += num;
    }
    if(sumTotal > 100 ){
        return true;
    } else {
        return false;
    }
}
console.log(nameLengths);
console.log(sumOfNumbersGreaterThan100(nameLengths));
let largeNumArray = [20,60,3,4,8,2,6,8];
console.log(largeNumArray);
console.log(sumOfNumbersGreaterThan100(largeNumArray));

console.log("\n10. Write a function that takes an array of numbers and returns the average of all the elements in the array.");
function averageArrayNumber(array){
    let sumTotal = 0;
    // loops through array and adds each element together
    for(num of array){
        sumTotal += num;
    }
    let averageNumber = sumTotal/array.length; // total divided by total elements
    return averageNumber;
}
console.log(nameLengths);
console.log(averageArrayNumber(nameLengths));
console.log(largeNumArray);
console.log(averageArrayNumber(largeNumArray));

console.log("\n11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.");
function firstArrayAverageBigger(array1, array2){
    // uses averageArrayNumber function to do a comparison to determine if the first array average is bigger
    if(averageArrayNumber(array1) > averageArrayNumber(array2)){
        return true;
    } else {
        return false;
    }
}
console.log(nameLengths);
console.log(largeNumArray);
console.log(firstArrayAverageBigger(nameLengths,largeNumArray));
console.log(largeNumArray);
console.log(nameLengths);
console.log(firstArrayAverageBigger(largeNumArray,nameLengths));

console.log("\n12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.");
function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside && moneyInPocket > 10.5){
        return true;
    } else {
        return false;
    }
}
console.log(willBuyDrink(true, 1));
console.log(willBuyDrink(true, 11));
console.log(willBuyDrink(false, 1));
console.log(willBuyDrink(false, 11));

console.log("\n13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.");
// this function give me encouragement to continue if I am not tired.
function shouldIDoAnotherFunction(isTired){
    if(isTired){
        console.log("You are tired. You are done with this assignment.");
    } else {
        console.log("You have the energy to do another function.");
    }
}
shouldIDoAnotherFunction(true);
shouldIDoAnotherFunction(false);