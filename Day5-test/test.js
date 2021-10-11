//1) 
{
    let basestr = 'Dragneil Daedalus';
let arrstr1 = basestr.split('');
let arrstr2 =[];
for ( let i of arrstr1){
    arrstr2.unshift(i);
}
let outstr = '';
for( let i of arrstr2){
    outstr = outstr + i;
}
console.log(outstr)
}

//2)
{
    const str = 'my name is dragneil daedalus';
    const arr = str.split(' ');
    for ( let i = 0 ; i<arr.length ; i++){
        if (arr[i] === 'is' || arr[i] === 'are' || arr[i] === 'am'){
            arr[i] = arr[i].charAt(0).toLowerCase() + arr[i].slice(1); 
        } else {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
    }
    console.log(...arr);

    const str1 = 'hello world';
    const arr1 = str1.split(' ');
    for ( let i = 0 ; i<arr1.length ; i++){
        if (arr1[i] === 'is' || arr1[i] === 'are' || arr1[i] === 'am'){
            arr1[i] = arr1[i].charAt(0).toLowerCase() + arr1[i].slice(1); 
        } else {
            arr1[i] = arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1);
        }
    }
    console.log(...arr1);
}

//3) 
{
    const arr = [8,5,5,5,9,4,3,1,2,6,0,7,1,1,0,5,9,9,6,0,3,2,0];
    const newarr = [...new Set(arr)] 
    console.log(newarr);

}


//4) 
{
    const employees = [
        {
            Name : 'Dragneil Daedalus',
            Age : 24,
            Position : 'Leader',
            Salary : 7000000,
        },
        {
            Name : 'Allen Walker',
            Age : 25, 
            Positon : 'Staff',
            Salary : 6000000,
        },
        {
            Name : 'Guiler Toro',
            Age : 33,
            Position : 'Manager',
            Salary : 15000000,
        },
    ];
    let options = [ 'R' , 'C' , 'U' , 'D'];
    let command = prompt('Please enter your command:');
    while (true){
        while (!options.includes(command)){
            alert('This command is not supported!');
            command = prompt('Please re-enter your command:');
        }
         if (command == 'C'){
            let newemployee = {};
            newemployee.Name = prompt(`Please enter the new employee's name:`);
            newemployee.Age = prompt(`Please enter the new employee's age:`);
            newemployee.Position = prompt(`Please enter the new employee's position:`);
            newemployee.Salary = prompt(`Please enter the new employee's salary:`);     
            employees.push(newemployee);
            alert('Done!');
            command = prompt('Please re-enter your command');
        } else if(command == 'R'){
            console.log('The employees list are:');  
            for(let i =0 ; i < employees.length ; i++){
                for (let j =0 ; j < Object.keys(employees[i]).length ; j++){
                    let sth = Object.keys(employees[i])[j];
                    console.log(`${sth} : ${employees[i][sth]}`)
                }
                console.log('\n');
            }
            break;
    } else if (command == 'D'){
        let order = Number(prompt('Please enter the position of the employee you want to remove'));
        while(!order){
            alert('Not an ordinal!');
            order = prompt('Please re-enter the ordinal:');
        }
        while(order > employees.length){
            alert('There is no employee in this ordinal!');
            order = prompt('Please re-enter the ordinal');
        }
        employees.splice(order,1);
        alert('Done!');
        command = prompt('Please re-enter your command:');
    } else if (command == 'U') {
            let newemployee= {};
            newemployee.Name = prompt(`Please enter the new employee's name:`);
            newemployee.Age = prompt(`Please enter the new employee's age:`);
            newemployee.Position = prompt(`Please enter the new employee's position:`);
            newemployee.Salary = prompt(`Please enter the new employee's salary:`); 
            let ordinal = prompt('Please enter the ordinal you want to update');
            employees[ordinal] = newemployee;
            alert('Done');
            command = prompt('Please re-enter your command:');
        
    }
}
}
