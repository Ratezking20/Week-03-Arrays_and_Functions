function promptForList (message){
    let responseList = []
    let promptMessage = "\n\nEnter 'done' when you're done."
    let userResponse = null
    
    while( userResponse != "done"){
    userResponse = prompt(promptMessage)
    if (userResponse != "done"){
     responseList.splice(userResponse)
    }
    return responseList
    }
    
    }
    
    console.log(promptForList)


function countsPets (petTypeToCount){
    let count = 0
    let allPets = promptForList
    prompt("What are the types of all your pets?")

}