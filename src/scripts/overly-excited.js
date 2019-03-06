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

//Create an addExcitement function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console.
addExcitement(sentence, "")
//Add logic to addExcitement that places an exclamation point (!) after every third word. Read the following English statement and write the equivalent in JavaSript code to make it work.
addExcitement(sentence, "!", 1)
//Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.
addExcitement(sentence, "?", 1)
//Add a new argument to the function so that a developer can specify how many times the special character should be added.
addExcitement(sentence, "*", 4)
