// 1.)Created an array called ages with 8 elements

let ages =  [3,9,23,64,2,8,28,93]

//Programmatically subtracted the first value in array by the last value

ages[0] - ages[ages.length -1] // took the first element in the ages array and subtracted by the las element in the array

console.log(ages[0] - ages[ages.length -1])

//added a new age to the array

ages.push(38) //used .push method to add age 38 to the ages array

//repeated steps above to make sure code works for arrays of different lengths
let ticketsSold = [ 94, 61,75, 49,23]
console.log(ticketsSold[0] - ticketsSold[ticketsSold.length -1])

//Used loop to iterate thru ages array and 
//calculated the average age

let averageAge = 0;

function findAverageAge(ages){
    
    for(let i = 0; i < ages.length; i++){ //created a for loop that iterates less than the the length of ages array and increases the index by one
        let currentNumber = ages[i]; //created a variable within block scope so that I can add whatever it is to 
        averageAge += currentNumber;

    }
averageAge = averageAge / ages.length ;
return averageAge;
}

findAverageAge([3,9,23,64,2,8,28,93]);
console.log(averageAge)

// 2.)Created an array called names

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
console.log(names.length)

//Used a loop to iterate thru names array; calculate the average number of letters per name

let total = 0;
for(let i = 0; i < names.length; i++){
    total+=names[i].length;
}
let average = total/names.length;

console.log(average)

//Use a loop to iterate thru names array again and
//concatenate all the names together, separated by spaces

let myString =''

for(let i = 0; i < names.length; i++){
    myString += names[i] + " "
    console.log(myString)
   
}
//console.log(myString)
// 3.) How do you access the last element of any array?

console.log(names.reverse()[0])

// 4.) How do you access the first element of an array

console.log(names.reverse()[0])
console.log(names[0])

// 5.)  Create a new array called nameLengths. 
//Write a loop to iterate over the previously created names array and 
//add the length of each name to the nameLengths array.

const nameLengths = []

for(let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length)
    console.log(names[i]);
    console.log(nameLengths)
}
// 6.)  Write a loop to iterate over the nameLengths array and 
//calculate the sum of all the elements in the array. 

let totalNames = 0;
for(let i = 0; i < nameLengths.length; i++){
    totalNames+=nameLengths[i]
    //console.log(names(i))
    console.log("Running Total",totalNames)
}
// 7.)  Write a function that takes two parameters, word and n, 
// and returns the word concatenated to itself n number of times.
// (i.e. if I pass in ‘Hello’ and 3, I would expect 
// the function to return ‘HelloHelloHello’).

let word = ""
let n = 0

function repeatWord (word, n){
   return word.repeat(n)

}
console.log(repeatWord("And1",6))

// 8.)  Write a function that takes two parameters, firstName and lastName,
// and returns a full name.  The full name should be the first and the 
// last name separated by a space.
var firstName = ""
var lastName = ""
var fullName = firstName + " " + lastName;

function findName (firstName , lastName){
    
    return firstName.concat(" " + lastName);
}

console.log(findName("Big", "Player"))

// 9.)  Write a function that takes an array of numbers and returns true
// if the sum of all the numbers in the array is greater than 100.

var points = [42,26,21,12,16]
var sumOfAll = 0

function countGame (points){
    for (let i = 0 ; i < points.length ; i++){
        sumOfAll += points[i];
        console.log(sumOfAll)
    }
    
    if(sumOfAll > 100){
        return true 
    }
}

console.log(countGame(points));

// 10.  Write a function that takes an array of numbers and 
// returns the average of all the elements in the array.
let scores = [42,26,21,12,16];
let scores2 = [452,266,21,122,16];

function findAverage (numbers){
    let sumOfScore = 0;
    for (let i = 0; i < numbers.length; i++){
        
       
        sumOfScore += numbers[i];
       
        
        
    }
   return sumOfScore / numbers.length;
}
console.log(findAverage (scores))
console.log(findAverage (scores2))

// 11.)  Write a function that takes two arrays of numbers and 
//returns true if the average of the elements in the first array 
//is greater than the average of the elements in the second array.

function averageIsGreater (numbers, numbers2){
    if (findAverage(numbers > findAverage(numbers2))){
        
        return true
    }else{
        
        return false
    }
}
console.log(averageIsGreater (scores, scores2));

// 12.  Write a function called willBuyDrink that takes a boolean isHotOutside,
// and a number moneyInPocket, and returns true if it is hot outside and 
// if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside === true && moneyInPocket > 10.50){
        console.log("I will buy a couple drinks")
        return true
    }else{
        console.log("Don't buy any drinks")
    }
}
console.log(willBuyDrink(false, 89));

// 13.  Create a function of your own that solves a problem. 
// In comments, write what the function does and why you created it.

function canWashClothes(isWasherEmpty, laundrySoap){
    if(isWasherEmpty === true && laundrySoap > 4){
        console.log("Wash your dirty clothes NOW!")
        return true
    } else{
        console.log("Sorry you will have to wait.")
    }
}
console.log(canWashClothes(true, 6))