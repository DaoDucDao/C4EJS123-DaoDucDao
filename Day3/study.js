// 1) Swap variables

/*
// There is something called destructuring assignment in javascript, one of its facilities is swapping variables, this is how we do it:

let a = 2;
let b = 1;
console.log(a,b);   //This is where a is still 2, and b is still 1
[a,b] = [b,a];      //Here we swap the variables values by destructuring arrays-
console.log(a,b);   //And here we got a is 1, and b is 2
*/

//2) Split string into an array

/*
let string = "Dragneil Daedalus is the most handsome person in the world!";
let arr = string.split(' ');
console.log(arr);
//If we dont type split(''), the array that we got will be like this:
// [D,r,a,g,n,e,i,l, ,d,a,...........]
*/

//3) Spread operator
//Spread operator is a alternative to loops
/*
const arr = [8,5,5,5];
console.log(...arr);
*/
