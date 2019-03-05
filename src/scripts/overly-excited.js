let sentence = ["The ","walrus ","danced ","through ","the ","trees ","in ","the ","light ","of ","the ","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
const addExcitement = (theWordArray, puncuation, numberOfTimes) => {

    let buildMeUp = " "
    let wordCounter = 1
// Each time the for loop executes, you're going to add one more word to this string
    for (let i = 0; i < theWordArray.length; i++) {
        if (wordCounter % 3 === 0 ){
            // Concatenate the new word onto buildMeUp
        buildMeUp += `${theWordArray[i]}${puncuation.repeat(numberOfTimes)} `
        
    }
    else {
       // Otherwise, just concatenate the word itself.
        buildMeUp += `${theWordArray[i]}`
    } 
        wordCounter++
        // Print buildMeUp to the console
        console.log(buildMeUp)
    }

}

//Invoke the function and pass in the array
<<<<<<< HEAD
addExcitement(sentence, "")
=======
>>>>>>> 8182865a9bc6c67bd5c71b2548192b1b84473a50
addExcitement(sentence, "!", 1)
addExcitement(sentence, "? ", 1)
addExcitement(sentence, "* ", 4)
