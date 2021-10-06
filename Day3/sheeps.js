// /*
//8) The sheeps thingy
//1) Enter the sheep size
let sheeps = prompt('Enter the sheep size').split(',').map(Number);
console.log('Hello, my name is Dragneil Daedalus and this is my sheep sizes:');
console.log(...sheeps);
console.log('\n');
//2) Find the biggest one and shave it

console.log(`Now the biggest sheep has size of ${Math.max(...sheeps)}, let shave it`);
console.log('\n');

//3) After shaving, return that sheep to default size, which is 8

sheeps[sheeps.indexOf(Math.max(...sheeps))]= 8;
console.log ('After sheering, now this is my flock:');
console.log(...sheeps);
console.log('\n');

//4) & 5) The sheeps have gained 50 size in a month, and let's do it for about 4 months

for(i = 1 ; i<5 ; i++){

    console.log('MONTH '+i );
    console.log('A month has passed, my sheeps have grown, here is their sizes:');
    for(let j =0 ; j<sheeps.length ; j++){
        sheeps[j] += 50;
    }
    console.log(...sheeps);
    console.log('\n');

    console.log(`Now the biggest sheep has size of ${Math.max(...sheeps)}, let shave it!`);
    console.log('\n');

    sheeps[sheeps.indexOf(Math.max(...sheeps))]=8;
    console.log('After sheering, now this is my flock:');
    console.log(...sheeps);
    console.log('\n');
}

//6) Now you're bored, you want to sell the sheeps and travel. Calculate the money you might get from selling the sheeps

const sum = sheeps.reduce((acc, cur) =>{
    return acc + cur;
},0);
console.log(`My flock has a total size of: ${sum}`);
console.log(`I would get ${sum}*2$ = ${sum*2}`);
// */