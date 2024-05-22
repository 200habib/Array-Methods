const elements = ['Fire', 'Air', 'Water'];

let new2 = ""

for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (i+1 <elements.length) {
        new2 += elements[i] + ","
    } else {
        new2 += elements[i]
    }
    
}
console.log(rr);
// Expected output: "Fire,Air,Water"