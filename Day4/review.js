//4)Write a dictionary


const dict ={
    debug: 'The process of figuring out why your program  has a cer tain error and how to fix it',
    done : 'When your task is complete, the only thing you have do do is to wait for users to use it (no additional codes or actions needed',
    defect: `The formal word for 'error' `,
    pm : 'The short version of Project Manager, the person in charge of the final result of a project',
    'ui/ux' : 'UI means User Interface, UX mea User Experience, are the process to difine how your products looks and feels',
};

//4.1) Write a script to stimulate the lookup of the dictionary

{
    let word = prompt('Hi there, this is dev dictionary');
    if (dict.hasOwnProperty(word)){
        alert(dict[word]);
    } else {
        alert(`We could not find your word: ${word}`);
    }
}


//4.2) Write a script to let user update the new word


{
    while (true){
        let word = prompt('Hi there, this is dev dictionary');
        if (dict.hasOwnProperty(word)){
            alert(dict[word]);
            break;
        } else {
            let explain = prompt (`We could not find your word: ${word}, leave your explanation:`);
            dict[word] = explain;
        }
    }
}


//5) Initialize a variable named products
const product = [
  {
    Name : 'Xiaomi portable charger 20000mah',
    Brand : ' Xiaomi ',
    Price : 428, 
    Colour: 'White',
    Category : 'Charger',
  },
  {
    Name : 'VSmart Active 1',
    Brand : 'VSmart',
    Price : 5487,
    Colour : 'Black' , 
    Category : 'Phone',
    },
    {
    Name : 'IPhone X',
    Brand : 'Apple',
    Price : 21490 , 
    Colour : 'Gray',
    Category : 'Phone',
    },
    {
    Name : 'Samsung Galaxy A9',
    Brand : 'Samsung',
    Price : 8490,
    Colour : 'Blue',
    Category : 'Phone',
    } ,
];
 //5.1) Printing name and price of the product

//  /*
 {
 for (let i = 0 ; i<product.length ; i++){
        console.log(`${Object.keys(product[i])[0]} : ${product[i].Name}`);
        console.log(`${Object.keys(product[i])[2]} : ${product[i].Price}`);
        console.log('\n');
 }
}
//  */
//5.2) Printing out the product with the number, then printing out the details of the product with the position entered

// /*
{
for (let i = 0 ; i < product.length ; i++){
    console.log(`#${i+1} ${product[i].Name}`);
    console.log(`${Object.keys(product[i])[2]} : ${product[i].Price}`)
};
let position = Number(prompt('Enter product position'));
while(position > product.length){
    alert('There is no product at this position!');
    position = prompt('Please re-enter your position!');
}
let post1 = position - 1;
for(let i = 0 ; i < Object.keys(product[post1]).length ; i++){
    let sth = Object.keys(product[post1])[i];
   console.log(`${sth} : ${product[post1][sth]}`);
}
}
// */

//5.3) Write a script to print out a product base on the Category
// /*
{
const catarr = [];
for (let i = 0 ; i < product.length ; i++ ){
    let sth = product[i][Object.keys(product[i])[4]];
    catarr.push(sth);
}


let cat = prompt('Enter your category:');
while(!catarr.includes(cat)){
    alert('There is no product in this category, please choose again!');
    cat = prompt('Please re-enter the category:')
}
for (let x of product){
    if (x.Category === cat){   
        console.log(`${Object.keys(product[0])[0]} : ${x.Name}`);
        console.log(`${Object.keys(product[0])[2]} : ${x.Price}`)
        console.log('\n');
}
}
}
// */

//5.4) Update another property 
// /*
function update( index , property, value){
    if(value === ''){
        delete product[index][property];
    } else if(index > product.length){
        delete product[index][property][value];
    } else if (property === 'Providers'){
        product [index][property] = product[index][property] || [];
        product [index][property].push(value);
    }else{
        product[index][property] = value;
    }
    return product;
}
update( 0 , 'Providers' , 'Phukienzero');
update( 0 , 'Providers' , 'Dientuccc');
update( 1 , 'Providers' , 'TGGD');
update( 1 , 'Providers' , 'DDGHN');
update( 1, 'Providers' , 'VNStore');
update( 2 , 'Providers' , 'TGDD');
update( 3 , 'Providers' , 'TGDD');
console.log(product);
// */

//5.5) Search the product based on the wanted provider erntered by users

const provarr = [];
for (let i = 0 ; i < product.length ; i++){
    let sth = product[i][Object.keys(product[i])[5]];
    provarr.push(sth);
}
console.log(provarr);

// let prov = prompt('Enter provider');
// while (!provarr.includes(prov)){
//     alert('There is no product provided by this provider, please chooese again!');
//     prov = prompt('Please re-enter provider');
// }
// console.log(product[0]['Providers'])
