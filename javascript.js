console.log("Section 1");
let ages = [3,9,23,64,2,8,28,93]; //initial array given

console.log("1. An array called ages starts with a set array.  Find the difference between the first and last element programmatically.");
// function created to determine the difference between the first and last age.
function differenceAge(ages){
    console.log(ages); //prints array to the console
    console.log("The difference between the first and last element in the array is:");
    console.log(ages[ages.length-1]- ages[0]);//prints the last minus the first age to the console.
}
differenceAge(ages);//calls the function differenceAge

console.log("2. Add a new age to the end of the array and repeat.");
ages.push(50);//adds 50 to the end of the array ages
differenceAge(ages);//calls the function differenceAge again

console.log("3. Use a loop to iterated through the array to find the average age.")
let averageAge = 0;// set averageAge to 0
//A loop to add all the ages in ages to averageAge
for(let i=0; i< ages.length; i++){
    averageAge += ages[i];
}
averageAge = averageAge/ages.length; // divides the total ages by the number of ages to get the average
console.log(averageAge);//prints averageAge to the console

