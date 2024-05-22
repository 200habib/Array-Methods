const minuscole = {
    'A': 'a',
    'B': 'b',
    'C': 'c',
    'D': 'd',
    'E': 'e',
    'F': 'f',
    'G': 'g',
    'H': 'h',
    'I': 'i',
    'J': 'j',
    'K': 'k',
    'L': 'l',
    'M': 'm',
    'N': 'n',
    'O': 'o',
    'P': 'p',
    'Q': 'q',
    'R': 'r',
    'S': 's',
    'T': 't',
    'U': 'u',
    'V': 'v',
    'W': 'w',
    'X': 'x',
    'Y': 'y',
    'Z': 'z'
};

const sentence = "The QUICK brown FOX jumps over THE lazy DOG.";
let new2 = "";

for (let i = 0; i < sentence.length; i++) {
    const element = sentence[i];
    if (minuscole[element] !== undefined) {
        new2 += minuscole[element];
    } else {
        new2 += element;
    }
}

console.log(new2); // Output: the quick brown fox jumps over the lazy dog.
