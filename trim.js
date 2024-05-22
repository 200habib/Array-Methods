const greeting = '   Hello world!   ';

let NewGreeting = ''

for (let i = 0; i < greeting.length; i++) {
    const element = greeting[i];
    if (element !== " ") {
        NewGreeting += element
    }  
}
console.log(NewGreeting);