const arr = [ 'Backpack' , 'MiBand watch' , 'Ring'];
console.log(arr);
const list = document.getElementById('item');
console.log(list);
const addbutton = document.getElementById('added_button');
console.log(addbutton);
let inputItem = document.getElementById('add_item');

arr.forEach((item)=>{
    let li = document.createElement('li');
    li.innerText = item;
    list.append(li);
    var removeButton = document.createElement("button");
    removeButton.append(document.createTextNode("Remove"));
    li.append(removeButton);
    removeButton.onclick = () => {
    console.log('clicked');     //How to remove the item that pair with the button
  };
});
console.log(list)

function add (){
    addbutton.addEventListener('click', ()=>{
        addbutton.style.background = 'cyan'
    });
    setTimeout(() => {
        addbutton.style.background = '';
    },150);
    let li = document.createElement('li');
    li.innerText = inputItem.value;
    arr.push(inputItem.value);
    list.append(li);
    inputItem.value='';
    // How to add remove button for the new item?
};

console.log(arr)
addbutton.addEventListener('click',add);
//12.14 12.15 12.16 undone