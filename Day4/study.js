//1) For and object
//1.a) 
/*
const product = {
    name: ‘Xiaomi rice cooker’,
    price: 1700,
    brand: ‘Xiaomi’,
    color: ‘white’
};
for (let x in product) {
    console.log(x);
*/
// - x receives property in product

// 1.b) print out an object with property and value
/*
const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    colour: 'black',
};
let value;
for (let property in product){
    value = product[property];
    console.log(`${property} : ${value}`)
}
*/

//2) Destructuring an object to obtain subject, dueDate and assignTo
/*
const task = {
    subject: 'Implement login feature',
    createdBy: 'Hoang Ngoc Duc',
    assignTo: 'Nguyen Phuong Nam',
    dueDate: '2019-10-08T18:00:24+0000',
    expectedHours: 0.5,
};
let subject, assignTo, dueDate;
({subject, assignTo, dueDate} = task);
console.log(subject);
console.log(assignTo);
console.log(dueDate);
*/

