const sentence = 'The quick brown fox jumps over the lazy dog.';

const maiuscole = {
    'a': 'A',
    'b': 'B',
    'c': 'C',
    'd': 'D',
    'e': 'E',
    'f': 'F',
    'g': 'G',
    'h': 'H',
    'i': 'I',
    'j': 'J',
    'k': 'K',
    'l': 'L',
    'm': 'M',
    'n': 'N',
    'o': 'O',
    'p': 'P',
    'q': 'Q',
    'r': 'R',
    's': 'S',
    't': 'T',
    'u': 'U',
    'v': 'V',
    'w': 'W',
    'x': 'X',
    'y': 'Y',
    'z': 'Z'
};



let new2=""

for (let i = 0; i < sentence.length; i++) {
    const element = sentence[i];
    if (maiuscole[element] !== undefined) {
        new2 += maiuscole[element];
    } else {
        new2 += element;
    }
}

console.log(new2); 



