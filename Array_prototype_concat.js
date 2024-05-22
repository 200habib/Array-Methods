const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
let new2 = []
let  newstr  =array1 +","+ array2
let count = 0
for (let i = 0; i < newstr.length; i++) {
    const element = newstr[i];
    if (element !== ",") {
        new2[count] = element
        count ++
    }
}
console.log(new2); // Expected output: Array ["a", "b", "c", "d", "e", "f"]