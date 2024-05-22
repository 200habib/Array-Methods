const findLast = [5, 12, 8, 130, 44];
let count1 = 0
let newstr = ""
for (let index = 0; index < findLast.length; index++) {
    const element = findLast[index];
    
    if (element > 13) {
        newstr = count1
        break
    }
    count1 ++
}
console.log(newstr);
// Expected output: 3



