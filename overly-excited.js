//added empty quotation marks to beginning of array so the for loop won't add character to first word
let sentence = ["","The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

//replace exclamation marks from previous exercise to '@' symbol; made it a global variable
let character = "@"

//add new variable to function as an argument
//rewrite function using fat arrow
addExcitement = (theWordArray, character) => {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {

        //if the current value of 'i' divided by 3 has no remainder,
        //add an exclamation point to the end of the word
        //and then concatenate it to 'buildMeUp'.
        //included new 'character' argument

        if (i % 3 === 0 && i !== 0) {
            buildMeUp = `${buildMeUp} ${theWordArray[i]} ${character}`
        }

        //Otherwise, just concatenate the word itself

        else {
            buildMeUp = `${buildMeUp} ${theWordArray[i]}`
        }

        // Print buildMeUp to the console
        console.log(buildMeUp)
    }
    return theWordArray;
}

// Invoke the function and pass in the array

addExcitement(sentence, character)