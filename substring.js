const str = 'Mozilla';

function val_min(min, max) {
    let newstr = "";

    // str.substring(2) if I have only one value
    if (max == undefined) {
        for (let i = min; i < str.length; i++) {
            const element = str[i];
            newstr += element;
        }
        return newstr; // console.log(str.substring(2));
    }
    
    // if I have only two value
    for (let i = min; i < max; i++) {
        const element = str[i];
        newstr += element;
    }
    return newstr;
}

const result = val_min(2, );
console.log(result); // Expected output: "oz"
