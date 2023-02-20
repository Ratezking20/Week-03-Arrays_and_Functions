// 1.)Created an array called ages with 8 elements
var ages =  [3,9,23,64,2,8,28,93]
//Programmatically subtracted the first value in array by the last value
ages[0] - ages[ages.length -1]

console.log(ages[0] - ages[ages.length -1])
//added a new age to the array
ages.push(38)
//repeated steps above to make sure code works for arrays of different lengths
console.log(ages[0] - ages[ages.length -1])
//Used loop to iterate thru ages array and 
//calculated the average age
var averageAge = 0;
function findAverageAge(ages){
    
    for(let i = 0; i < ages.length; i++){
        let currentNumber = ages[i];
        averageAge += currentNumber;

    }
averageAge = averageAge / ages.length ;
return averageAge;
}

findAverageAge([3,9,23,64,2,8,28,93]);
console.log(averageAge)

// 2.)Created an array called names
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
console.log(names.length)
//     }
//Used a loop to iterate thru names array; calculate the average number of letters per name

var total = 0;
for(var i = 0; i < names.length; i++){
    total+=names[i].length;
}
var average = total/names.length;


console.log(average)

//Use a loop to iterate thru names array again and
//concatenate all the names together, separated by spaces

for(let i = 0; i <= names.length; i++){
    console.log(['Sam '  + 'Tommy ' + 'Tim '+ 'Sally '+ 'Buck '+ 'Bob'])
}

// 3.) How do you access the last element of any array?

console.log(names.reverse()[0])

// 4.) How do you access the first element of an array

console.log(names.reverse()[0])
console.log(names[0])

// 5.)  Create a new array called nameLengths. 
//Write a loop to iterate over the previously created names array and 
//add the length of each name to the nameLengths array.

var nameLengths = [3,5,3,5,4,3]


names.forEach(names[0]); {
    let newSum = names.length + nameLengths
    console.log(newSum)
}
; 

console.log(names.length)

// 6.)  Write a loop to iterate over the nameLengths array and 
//calculate the sum of all the elements in the array. 

var totalNames = 0;
for(var i = 0; i < namesLengths; i++){
    totalNames+=names[i].length;
    console.log(names)
}
var sum = totalNames + names.length;


console.log(sum)
