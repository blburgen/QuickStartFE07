console.log("Section 1");
let ages = [3,9,23,64,2,8,28,93]; //initial array given

console.log("1. Programmatically subtract the value of the first element in the array from the value in the last element of the array. Do not use numbers to reference the last element, find it programmatically.");
// function created to determine the difference between the first and last age.
function differenceAge(ages){
    console.log(ages); //prints array to the console
    console.log("The difference between the first and last element in the array is:");
    console.log(ages[ages.length-1]- ages[0]);//prints the last minus the first age to the console.
}
differenceAge(ages);//calls the function differenceAge

console.log("2. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).");
ages.push(50);//adds 50 to the end of the array ages
differenceAge(ages);//calls the function differenceAge again

console.log("3. Use a loop to iterate through the array and calculate the average age.")
let averageAge = 0;// set averageAge to 0
//A loop to add all the ages in ages to averageAge
for(let i=0; i< ages.length; i++){
    averageAge += ages[i];
}
averageAge = averageAge/ages.length; // divides the total ages by the number of ages to get the average
console.log(averageAge);//prints averageAge to the console

console.log("Section 2");
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log ("Starting with an array called names:");
console.log(names);

console.log("1. Use a loop to iterate through the array and calculate the average number of letters per name.");
let averageNameLength = 0;
for(nameIn of names){
    averageNameLength += nameIn.length;
}
averageNameLength = averageNameLength/names.length;
console.log(averageNameLength);

console.log("2. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.");
let nameString = "";
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

console.log("3. How do you access the last element of any array?");
console.log("");

console.log("4. How do you access the first element of any array?");
console.log("");

console.log("5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.");

console.log("6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.");

console.log("7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').");

console.log("8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.");

console.log("9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.");

console.log("10. Write a function that takes an array of numbers and returns the average of all the elements in the array.");

console.log("11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.");

console.log("12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.");

console.log("13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.");