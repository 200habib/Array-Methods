const greeting = '  Hello world!   ';
var stringa='';

function val_min() {
    for (let i = 0; i < greeting.length; i++) {
        const element = greeting[i];
        if (element !== ' ') {
            
            return stringa
        }
        stringa = i 
        
    }
    
}
// console.log(val_min() +1); 
let new2 = ""

for (let i = val_min() +1; i < greeting.length; i++) {
    const element = greeting[i];
    new2 +=element
    
}
console.log(new2); // output 'Hello world!   '