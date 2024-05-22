const array = ['one', 'two', 'three'];

let Newarray = []
let rr = 0
for (let i = array.length-1; i >= 0; i--) {
    const element = array[i];
    Newarray[rr] = element
    rr++ 
} 
   console.log(Newarray);