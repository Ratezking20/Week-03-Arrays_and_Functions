function promptForList (message){
let responseList = []
let promptMessage = "\n\nEnter 'done' when you're done."
let userResponse = null

while( userResponse !== "done"){
userResponse = prompt(promptMessage)
if (userResponse !== "done"){
 responseList.splice(userResponse)
}
return responseList
}

}

console.log(promptForList.promptForList("some message"))