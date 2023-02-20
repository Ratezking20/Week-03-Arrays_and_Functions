var name
var number

function pluralize ( name , number){
    if ( number === 1){
        return name
    }else {
        return name + "s"
    }
   
}
console.log(pluralize ("apple", 3))