//todo --> 3. Write a function to:
//*    a. Reverse a string without using built-in methods like split(), reverse(), or join().


const reverseTheString = (str) => {
    let revStr = "";
    for(let i = str.length - 1 ; i >= 0 ; i--) {
        revStr += str[i];
    } 
    return revStr;
}


let str = "CAR";
console.log(reverseTheString(str));