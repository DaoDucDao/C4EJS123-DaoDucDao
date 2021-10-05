//4) Stimulating a clothes shop

 /*
let options = ['R', 'C', 'U', 'D'];
let command = prompt('Hi there, welcome to shop admin panel, what do you want? (R, C, U, D)');
let items = ['Jeans' , 'T-shirt' , 'Socks'];
// while (command!== options[0] && command!== options[1] && command!== options[2] && command!== options[3]){
//     alert('This command is not supported!');
//     command = prompt('Please re-enter your command!');
// } 

while (!options.includes(command)){
        alert('This command is not supported!');
        command = prompt('Hi there, welcome to shop admin panel, what do you want? (R, C, U, D)');
    } 

while(command == 'C'){
    let newitem = prompt('Enter the new item:');
    items.push(newitem);
    alert('Done!');
    command = prompt('Please re-enter your command:');
}

if (command == 'U'){
    let newitem = prompt('Enter the update item:');
    let order = prompt('Enter the position you want to update:')
    items[order]= newitem;
    alert('Done!')
    command = prompt('Please re-enter your command');
}

if (command == 'D'){
    let order = prompt('Please enter the position you want to remove:');
    items.splice(order,1);
    alert('Done!');
    command = prompt ('Please re-enter your value:');
}

if(command == 'R'){
    // for (let i=0; i<items.length ; i++){
    //   alert(`The items list are: \n ${items[i]}`);
    console.log('The items list are:');
    // console.log(items.join());
    for (let i=0; i< items.length ; i++){
        console.log(items[i]);
    }
}
*/