// const arr = [ 'Backpack' , 'MiBand watch' , 'Ring'   ];

const arr = [];
console.log(arr);
const list = document.getElementById('item');
console.log(list);
const addbutton = document.getElementById('added_button');
console.log(addbutton);
let inputItem = document.getElementById('add_item');

arr.forEach((item) => {
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

function add() {
    if (inputItem.value) {
        addbutton.addEventListener('click', () => {
            addbutton.style.background = 'cyan'
        });
        setTimeout(() => {
            addbutton.style.background = '';
        }, 150);
        let li = document.createElement('li');
        const newBtn = document.createElement('button')
        newBtn.classList.add('remove-btn');
        newBtn.innerText = 'remove';
        li.innerText = inputItem.value;
        li.appendChild(newBtn)
        arr.push(inputItem.value);
        list.append(li);
        inputItem.value = '';
        newBtn.addEventListener('click', (e) => {
            // const removeButtons = document.getElementsByClassName('remove-btn');
            // console.log(e);
            const idx = arr.length - 1
            console.log(idx, arr);
            arr.splice(idx, 1) // data array
            console.log(list.childNodes);
            const child = list.childNodes[idx];
            console.log(child);
            list.removeChild(child)
        });
    }
    // const removeButtons = document.getElementsByClassName('remove-btn');
    // for (let i = 0; i < removeButtons.length; i++) {
    //     const element = removeButtons[i];
    //     element.addEventListener('click', (e) => {
    //         arr.slice(i, 1) // data array
    //         console.log(i, arr);
    //         const child = list.childNodes[i]; 
    //         list.removeChild(child)
    //     });
    // }
    // How to add remove button for the new item?
};

addbutton.addEventListener('click', add);
//12.14 12.15 12.16 undone