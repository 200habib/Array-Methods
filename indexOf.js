const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

let new2 ='bison'

for (let i = 0; i < beasts.length; i++) {
    const element = beasts[i];
        if (element == new2) {
            console.log(i); // Expected output: 1
            return
        }
}

