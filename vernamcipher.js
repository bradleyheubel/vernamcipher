const mod = (x, n) => (x % n + n) % n // Modulo function

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; // Our alphabet, where the index in the array is the number representation. e.g. a = 0, b = 1, etc
const randomNumbers = [76, 48, 16, 82, 44, 3, 58, 11, 60, 5, 48, 88, 90, 11, 12, 45] // Random number series provided as an array

function letterToAlpha(text){
    const textLetters = [...text] // Spread, used to make letters individual elements in array, e.g. ["h", "e", "l", "l", "o"]

    let lettersToAlphas = []; // Array to store the number representation of each letter

    // Loop over the textLetters array
    textLetters.forEach(letter => {
         // Convert each letter from the textLetters array to a number representing
        for (let i = 0; i < alphabet.length; i++){
            if (alphabet[i] === letter) {
                lettersToAlphas.push(i); // Add the index value of the alphabet array to the lettersToAlphas array, which is our number representation for the given letter
            }
        };
    });

    return lettersToAlphas; // Return the array of numbers
}

function returnText(letterSum){
    let modSum = []; // Array to store the modulo value
    letterSum.forEach(sum => {
        let modVal = mod(sum, 26) // Mod 26 each value in the letterSum array

        modSum.push(modVal); // Add the new modulo value to the modSum array
    });

    let plaintextLetters = []; // Store the value 
    modSum.forEach(plainLetterNum => {
        plaintextLetters.push(alphabet[plainLetterNum]); // Store the letter represenation of each number in the modSum array
    })

    let plaintext = plaintextLetters.join("") // Put together the letters in the plaintextLetters array so its one string/value that can be returned

    return plaintext // Return the value
}

//Encrypting method
function encrypt(plaintext) {
    const alphaLetters = letterToAlpha(plaintext) // Run the letterToAlpha function, which will return an array of numbers representing each letter from the text provided (plaintext variable)
    
    let letterSum = []; // Array to store the new values
    for (let i = 0; i < alphaLetters.length; i++){
        let sum = (alphaLetters[i] + randomNumbers[i]) // Add the number representation of each letter from the cipher text with the number to the random number series at the same position in the array

        letterSum.push(sum); // Add each new value to the letterSum array
    };

    let ciphertext = returnText(letterSum) // Run the returnText function to return the text from the number representation of each letter we have provided

    console.log(`Encrypted plain text: ${ciphertext}`) // Output the result to the console
}

// Decrypting method
function decrypt() {
    const ciphertext = "ILIKECRYTOGRAPHY".toLowerCase() // Our given ciphertext, which has been put into lower case (due to our alphabet array being in lower case)
    
    const alphaLetters = letterToAlpha(ciphertext) // Run the letterToAlpha function, which will return an array of numbers representing each letter

    let letterSum = []; // Array to store the new values
    for (let i = 0; i < alphaLetters.length; i++){
        let sum = (alphaLetters[i] - randomNumbers[i]) // Subtract the number representation of each letter from the cipher text with the number from the random number seriesat the same position in the array

        letterSum.push(sum); // Add each new value to the letterSum array
    };

    let plaintext = returnText(letterSum) // Run the returnText function to return the text from the number representation of each letter we have provided
    
    console.log(`Decrypted cipher: ${plaintext}`) // Output the result to the console
    
    encrypt(plaintext) // Passing to the encrypt function to show that it will work both ways, as we can also encrypt the value again and get the same ciphertext
}

decrypt() // Call our decrypt function to start the program