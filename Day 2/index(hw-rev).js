// 3.a) print 0-6

/*
    for (let i=0; i<7; i++){
    console.log(i);
} 
*/

//3.b) print out 0-n. n is input

/*
{
    let n = prompt('enter the number');
    for(let i=0; i<n ; i++){
        console.log(i);
    }
}
*/

//3.c) print out 3-n. n is input

/*
{
    let i=3;
    let n= prompt('Enter the number');
    for(; i<n ; i++){
        console.log(i);
    }
}
*/

// 3.d) print out n-c, n & c are input
 
/*
{
    let n = prompt('Enter the first number');
    let c = prompt('Enter the second number');
    let i=n
    for(; i<c; i++){
        console.log(i);
    }
}
*/

//3.e) print out n-c(stepping by 3), n & c are input

/*
{
    let n= Number(prompt('Enter the first number'));
    let c= Number(prompt('Enter the second number'));
    let i = n;
    for(; i<c; i+=3){
        console.log(i);
    }
}
*/

//3.f) Print out n-c(stepping by s), all three are input

/*
{
    let n=Number(prompt('Enter the first number'));
    let c=Number(prompt('Enter the second number'));
    let s=Number(prompt('Enter the first number'));
    for(;n<c;n+=s){
        console.log(n);
    }
}
*/

//4) calculate the factorial from 1-n, n is input

/*
{
    let fact=1;
    let i=1;
    let limit= Number(prompt('Enter the factorial number'));
    for (; i<=limit; i++){
        fact*=i;
    }
    alert(`The factorial of ${limit} is ${fact}`);
}
*/

//5) Viewing 14y/o kids to adult contents

/*
{
let age = Number(prompt('Enter your age'));
if (age<0){
    alert('Invalid age!');
    age = Number(prompt('Enter your age'));
}
if (age>14){
    alert(`You're old enough to view this content!`);
}else{
    alert(`You're not old enough for this!`);
}
}
*/


//6)

