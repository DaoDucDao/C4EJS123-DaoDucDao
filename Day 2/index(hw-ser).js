<<<<<<< HEAD
//6) Test if the number is lower half or higher half of 9, the number is input

/*
{
    let num=Number(prompt('Enter your number'));
    if( num>0 && num<9){
    if ( num<9/2 ){
        alert('The number is lowwer-half of 9!');
    }else if( num<9 ){
        alert('The number is higher-half of 9!');
    }   
    }else{
        alert('The number is not inside of 9 range!')
    }
}
*/

//7) Test if x is lower-half or higher half of n, x & n are input

/*
{
    let n = Number(prompt('Enter the comparation number'));
    let x = Number(prompt('Enter the checking number'));
    if (x>0 && x<n){
    if (x<n/2){
        alert(`${x} is in the lower-half of ${n}`)
    }else{
        alert(`${x} is in the higher-half of ${n}`)
    }
    }else{
        alert(`${x} is out of ${n} range`)
    }
    }
*/

//8) Test if the number is divisible

/*
{
    let num = Number(prompt('Enter the number'));
    if (num %2==0){
        alert(`${num} is an even number`);
    }else{
        alert(`${num} is an odd number`);
    }
}
*/

//9.a) Print out 6 L's and H's

/*
{
    for (let i = 0; i <6 ; i++){
        if (i<3){
            console.log('H');
        }else{
            console.log('L');
        }
    }
}
*/

//9.b) Print out number L's and H's, number is input

/*
{
    let num = Number(prompt('Enter the number'));
    for(let i=0; i <num ; i++){
        if (i<num/2){
            console.log('L');
        }else{
            console.log('H');
        }
    }
}
*/

//9.c) Print out 8 0's, 1's consecutively

/*
{
    for ( i=0 ; i<8 ; i++ ){
        if ( i%2 == 0){
            console.log(0)
        }else{
            console.log(1)
        }
    }
}
*/

//9.d) Print out number number 0's, 1's consecutively, number is input

/*
{
    let num = Number(prompt("Enter the number"));
    for ( i=0 ; i < num ; i++){
        if ( i%2== 0){
            console.log(0);
        }else{
            console.log(1);
        }
    }
}
*/

//10) Calculate the BMI

/*
{
    
    let w = Number(prompt('Enter your weight in kilogram:'));
    
    while (w<0){
        alert('Invalid weight!');
        w = Number(prompt('Enter your weight in kilogram:'));
    }
    let h = Number(prompt('Enter your height in centimeter:'));
    while (h<0){
        alert('Invalid height!');
        h= Number(prompt('Enter your height in centimeter:'));
    }
    let h1 = h/100;
    let bmi =w/(h1**2);
    bmi = bmi.toFixed(2);
    alert(`Your BMI is ${bmi}`);
    if( bmi<16 ){
        alert(`You're severely underweight!`);
    }else if( bmi<18.5){
        alert(`You're underweight!`);
    }else if( bmi<25 ){
        alert(`You're normal!`);
    }else if( bmi<30 ){
        alert(`You're overweight!`);
    }else{
        alert(`You're Obese!`)
    }
}
*/
=======
//6) Test if the number is lower half or higher half of 9, the number is input

/*
{
    let num=Number(prompt('Enter your number'));
    if( num>0 && num<9){
    if ( num<9/2 ){
        alert('The number is lowwer-half of 9!');
    }else if( num<9 ){
        alert('The number is higher-half of 9!');
    }   
    }else{
        alert('The number is not inside of 9 range!')
    }
}
*/

//7) Test if x is lower-half or higher half of n, x & n are input

/*
{
    let n = Number(prompt('Enter the comparation number'));
    let x = Number(prompt('Enter the checking number'));
    if (x>0 && x<n){
    if (x<n/2){
        alert(`${x} is in the lower-half of ${n}`)
    }else{
        alert(`${x} is in the higher-half of ${n}`)
    }
    }else{
        alert(`${x} is out of ${n} range`)
    }
    }
*/

//8) Test if the number is divisible

/*
{
    let num = Number(prompt('Enter the number'));
    if (num %2==0){
        alert(`${num} is an even number`);
    }else{
        alert(`${num} is an odd number`);
    }
}
*/

//9.a) Print out 6 L's and H's

/*
{
    for (let i = 0; i <6 ; i++){
        if (i<3){
            console.log('H');
        }else{
            console.log('L');
        }
    }
}
*/

//9.b) Print out number L's and H's, number is input

/*
{
    let num = Number(prompt('Enter the number'));
    for(let i=0; i <num ; i++){
        if (i<num/2){
            console.log('L');
        }else{
            console.log('H');
        }
    }
}
*/

//9.c) Print out 8 0's, 1's consecutively

/*
{
    for ( i=0 ; i<8 ; i++ ){
        if ( i%2 == 0){
            console.log(0)
        }else{
            console.log(1)
        }
    }
}
*/

//9.d) Print out number number 0's, 1's consecutively, number is input

/*
{
    let num = Number(prompt("Enter the number"));
    for ( i=0 ; i < num ; i++){
        if ( i%2== 0){
            console.log(0);
        }else{
            console.log(1);
        }
    }
}
*/

//10) Calculate the BMI

/*
{
    
    let w = Number(prompt('Enter your weight in kilogram:'));
    
    while (w<0){
        alert('Invalid weight!');
        w = Number(prompt('Enter your weight in kilogram:'));
    }
    let h = Number(prompt('Enter your height in centimeter:'));
    while (h<0){
        alert('Invalid height!');
        h= Number(prompt('Enter your height in centimeter:'));
    }
    let h1 = h/100;
    let bmi =w/(h1**2);
    bmi = bmi.toFixed(2);
    alert(`Your BMI is ${bmi}`);
    if( bmi<16 ){
        alert(`You're severely underweight!`);
    }else if( bmi<18.5){
        alert(`You're underweight!`);
    }else if( bmi<25 ){
        alert(`You're normal!`);
    }else if( bmi<30 ){
        alert(`You're overweight!`);
    }else{
        alert(`You're Obese!`)
    }
}
*/
>>>>>>> 60360bd676ca6f3e701012cd62ab6a9d7025a9cd
