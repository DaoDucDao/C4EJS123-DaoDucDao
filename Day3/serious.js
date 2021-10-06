// 5) Sum an array which the elements are input

/*
// let arr = prompt('Please enter your number:').split(','); 
// We put a comma here so the the array wont take COMMA as an element
// But this only return us a string array, we need an array of numbers
// let input = prompt ('Pls enter your numbers'); (1)
// let arr = input.split(',').map(Number); (2)
let arr = prompt ('Please enter your numbers:').split(',').map(Number);
// This is how to turn a string array into a number array
// We just combine the (1) & (2) to shorten the code
let sum = 0;
for (let i = 0 ; i < arr.length ; i++){
    sum += arr[i];
}
// console.log(sum);
console.log(sum);
*/

//6) Find the smallest number in an array, the elements are iput

/*
let arr = prompt('Please enter your number').split(',').map(Number);
// As performed above 
alert('The smallest number is ' + Math.min(...arr));
// This '...' is called destructuring an assignment, which helps us extract data from arrays or objects into distinct variables
*/

//7) Create an array, elements are input, check whether another input number is in the array

/*
let arr = prompt('Please enter your array:').split(',').map(Number);
while (arr.length<5){
    alert('The array must contains at least 5 elements!');
    arr = prompt('Please enter at least 5 elements:').split(',').map(Number);
}
console.log(arr);

let check = Number(prompt('Enter a random number:'));
while (!check){
    alert('Not a number!');
    check = Number(prompt('Please enter a number!'));
}
if (!arr.includes(check)){
    alert(`${check} is Not found in the array!`);
}else{
    alert(`${check} is FOUND in the array at index ${arr.indexOf(check)}`);
}
// indexOf() allows us to find the position of an element in the array
// if we enter a number that is not in the array inside bracket, we will get -1 as a result
// There are fromIndex() & lastIndexOf() that are similiar usage to indexOf()
*/



