let names = ['Brittany','Ashlee', 'Deandre', 'Nou']

// Use the map() method to create an array that has -
// - the lengths of each of the stings

let lengths = names.map(function(element) {
    return element.length;
});
console.log(lengths);

let sum = lengths.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});
console.log(sum)

names.forEach(function(element){
    console.log(element);
})

let evens = names.filter(function(element){
    return element.length % 2 == 0;
})
console.log(evens);

let removedElement = names.splice(2, 2);
console.log(removedElement);