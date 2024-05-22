const str = 'The quick brown fox jumps over the lazy dog.';

let words = [];
let currentWord = "";
let count = 0;

for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element !== " ") {
        currentWord += element;
    } 
    else {
            words[count] = currentWord;
            count++;
            currentWord = "";
            }
            if (i+1 == str.length) {
                words[count] = currentWord;
            }
}

console.log(words); // Expected output: ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']
