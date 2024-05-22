const array = [5, 12, 8, 130, 44];

let index = 2;
let count = 0
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (count == index) {
        console.log(element);
        // Expected output: "An index of 2 returns 8"
    }
   count ++ 
}








