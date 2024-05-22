const greeting = '  Hello world!        ';
var stringa='';
let rr = 0
function val_min() {
    for (let i = greeting.length-1; i > 0; i--) {
        const element = greeting[i];
        if (element !== " ") {
            console.log(i);
            return i
        }
    }
    
}

console.log(val_min() +1); 
let new2 = ""

for (let j = 0; j < val_min() +1; j++) {
    const element = greeting[j];
    new2 += " +"+element+ " +"
}
console.log(new2); // output '  Hello world!'