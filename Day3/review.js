//4) Stimulating a clothes shop

/*
let options = ['R', 'C', 'U', 'D'];
let command = prompt('Hi there, welcome to shop admin panel, what do you want (C, R, U, D)?');
let items = ['Jeans' , 'T-shirt' , 'Socks'];

while(true){
    while(!options.includes(command)){
    alert('This command is not supported!');
    command = prompt('Please re enter your command');
}
    if (command == 'C'){
        let newitem = prompt('Enter the new item:');
        items.push(newitem);
        alert('Done!');
        command = prompt('Please re-enter your command:');
    }else if(command == 'U'){
        let newitem = prompt('Enter the update item:');
        let order = prompt('Enter the position you want to update:')
        items[order]= newitem;
        alert('Done!')
        command = prompt('Please re-enter your command');
    }else if(command == 'D'){
        let order = prompt('Please enter the position you want to remove:');
        items.splice(order,1);
        alert('Done!');
        command = prompt ('Please re-enter your command:');
    } else if(command == 'R'){
        console.log('The items list are:');
        for (let i=0; i< items.length ; i++){
            console.log(`${i+1}. ${items[i]}`);
    }
    break;
    }
}
*/
    