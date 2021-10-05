//4) Stimulating a clothes shop

let options = ['R', 'C', 'U', 'D'];
let command = prompt('Hi there, welcome to shop admin panel, what do you want? (R, C, U, D)');
let items = ['1. Jeans' , '2. T-shirt' , ' 3. Socks'];
while (command!== options[0] && command!== options[1] && command!== options[2] && command!== options[3]){
    alert('This command is not supported!');
    command = prompt('Please re-enter your command!');
} 

// while (!options.includes(command)){
//         alert('This command is not supported!');
//         command = prompt('Hi there, welcome to shop admin panel, what do you want? (R, C, U, D)');
//     } 

while(command == 'C'){
    let newitem = prompt('Enter the new item:');
    options.push(newitem);
    alert('Done!');
    command = prompt('Please re-enter your command!');
    // return items.push(newitem);
}


if(command == 'R'){
    for (let i=0; i<items.length ; i++){
      alert(`The items list are: \n ${items[i]}`);
    }
}
