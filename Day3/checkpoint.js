//INIT)

/*
let movies = [ 'Inglorious Basterds' , 'Pulp Fiction' , 'Django Unchained' , 'The Hateful Eight'];
*/

//CREATE)

/*
let newmovie = prompt('Please enter the movie:');
*/

//READ)

/*
let i = prompt('Please enter the position');
console.log(movies[i]);
*/

//UPDATE)
//1)

/*
let movieTitle = prompt('Please enter the movie name');
movies[0]= movieTitle;
console.log(movies);
*/

//2)

/*
let movieTitle = prompt('Please enter the movie name');
let i = prompt('Please enter the position');
movies[i]=movieTitle;
console.log(movies);
*/

//DELETE)
//1)

/*
let i = prompt('Please enter the item position');
movies.splice(i,1);
console.log(movies);
*/

//2)

/*
let i = prompt('Please enter the item position');
let n = prompt('Please enter the number of items');
movies.splice(i,n);
console.log(movies);
*/

//READ ALL)
//1)
/*
console.log(...movies);
*/

//2)
/*
for(let i = 0; i<movies.length/2 ; i++){
    console.log(movies[i]);
}
*/

//3)
/*
for (let i=0; i <movies.length ; i++){
    console.log(`${i+1}. ${movies[i]}`);
}
*/

// UPDATE ALL)

/*
for (let i=0 ; i<movies.length; i++){
    console.log(movies[i].toLowerCase());
}
*/

// PURPOSE OF WHILE)
//1)
/*
let input = prompt('Register username:');
while(input.length >15){
    alert('The username is too long!');
    input = prompt('Please re-enter another username');
}
alert('Good username!');
*/

//2)
/*
let choices = ['None' , '4 legs' , '8 legs' , '12 legs'];
alert(`How many legs does a spider have?
1. ${choices[0]}
2. ${choices[1]}
3. ${choices[2]}
4. ${choices[3]}`);
let answer = prompt('Please enter your answer:');
let num = ['1','2','3','4'];
while (!num.includes(answer)){
    alert('Invalid answer!');
    answer=prompt('Please re-enter your answer:');
}

if(answer == num[2]){
    alert('Your answer is correct!');
}else{
    alert('Good luck next time!');
}
*/

//BTAP NANG CAO)
//a)
/*
let arr = prompt('Please enter the numbers:').split(',').map(Number);
let length = arr.length;
let arr1 =[];
for(let i = 0 ; i<length ; i++){
    arr1.push(Math.min(...arr));
    arr.splice(arr.indexOf(Math.min(...arr)),1);
}
console.log(arr1);
*/

//b)
/*
let arr = prompt('Please enter the numbers:').split(',').map(Number);
let arrOdd=[];
let arrEven=[];
for (let i=0 ; i<arr.length ; i++){
    if (arr[i] %2 == 0){
        arrEven.push(arr[i]);
    }else{
        arrOdd.push(arr[i]);
    }
}

console.log(arrEven);
console.log(arrOdd);
// */


