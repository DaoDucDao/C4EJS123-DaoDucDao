//1)
/*
const arr = ['to' , 'be', 'that', 'of' , 'elon' , 'to', 'this' ,  'now', 'back' , 'cool' , 'hey' , 'love' , 'of' , 'life' , 'that' , 'rain' , 'summer', 'colour' , 'now' , 'that', 'of', 'hat','late', 'sorry','my','team'];
let count = {};
for (let word of arr){
    if (count.hasOwnProperty(word)){         //or simplified it by count[word], but i like this hasOwnProperty thingy
        count[word]++;
    } else {
        count[word]= 1
    }
} 

for (let i = 0 ; i < Object.keys(count).length ; i++){
    console.log (`${Object.keys(count)[i]} : ${count[Object.keys(count)[i]]}`)
}
*/
//2)
const inventory = [
    {
        name: 'HP Envy 13aq',
        price: 21000,
        brand: 'HP',
        quantity: 5,
    },
    {
        name: 'Dell XPS 9370',
        price: 30000,
        brand: 'Dell',
        quantity: 1,
    },
    {
        name: 'Dell Inspiron 3567',
        price: 9300,
        brand: 'Dell',
        quantity: 12,
    },
    {
        name: 'Dell Latitude E5450',
        price: 8600,
        brand: 'Dell',
        quantity: 2,
    },
    {
        name: 'Asus Zenbook',
        brand: 'Asus',
        price: 20000,
        quantity: 4,
    },
    {
        name: 'HP Pavilion',
        brand: 'HP',
        price: 14000,
        quantity: 7,
    },
];
//3)
const invenbybrand = {
    HP : [],
    Dell : [],
    Asus : [],
};

for (let i = 0; i < inventory.length; i++) {
    let brandname = inventory[i].brand;
    invenbybrand[brandname].push(inventory[i]);
}
console.log(invenbybrand);

//4)
let altstr = '';
let option = prompt('Which brand?');
altstr += 'There are ' + invenbybrand[option].length + ' generations of ' + option + ' in the inventory: \n' ;
alert(altstr)
