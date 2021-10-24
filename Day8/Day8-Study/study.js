
/*
1) 
1.d
2.a
3.c
4.b
*/

// 2. Using setInterval
const time = setInterval(() => {
  console.log('Dragneil Daedalus');
}, (1000));

//3) 
// a) A variable declared by let won't exist after the function finish running
// b) A variable declared by var still exist after the function finish running

// 4) getElementsByTagName
let x = document.getElementsByTagName('li');
for(let i=0 ; i < x.length ; i++){
  console.log(x[i]);
}
// 5) getElementsByClass (Đề bài này em nghĩ là hướng dẫn bị sai, sooooo . . . .)
let y = document.getElementsByClassName('singer');
for(let i=0 ; i < y.length ; i++){
  console.log(y[i]);
}
// 7) 
let sth1 = document.getElementById('button1');
let sth2 = document.getElementById('button2');
sth1.addEventListener('click', (event) => {sth1.style.background = 'cyan'});
sth2.addEventListener('click', (event) => {sth2.style.background = 'magenta'});
// 7.1) The target is <button id="button1"> Click </button> and <button id="button2"> Click </button>  
// 7.2) The key is button1 and button2 