let array = [33, 2, 90, 10, 3];
let NewArray = [];

for (let i = 0; i < array.length*2; i++) {

    NewArray[i] = array[i + 1]; 

    if (NewArray[i] == undefined) {
    NewArray[i] = array[0];
}    
}
console.log(NewArray); // [ 2, 90, 10, 3, 33 ]