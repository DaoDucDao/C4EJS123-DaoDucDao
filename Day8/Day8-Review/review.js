// 8-10)
function namewish (name, wish){
    console.log(`My name is ${name}`);
    console.log(`My wish in the next year is ${wish}`);
}
namewish('Dragneil', 'Dropping out of TEDI');


// 11) 
const nameinput = document.getElementById('name');
const upperbuton = document.getElementById('upper');
const result = document.getElementById('result');
console.log(upperbuton)
console.log(nameinput)
console.log(result)
function clicked (){
    console.log('Upper just clicked!');
    upperbuton.addEventListener("click",(event) => {
        // highlight the mouseenter target
        event.target.style.backgroundColor = "cyan"; // Or you can just upperbutton.style. etc
      
        // reset the color after a short delay
        setTimeout(function() {
          event.target.style.backgroundColor = ""; //Or you can just upperbutton.style. etc
        }, 100);
      }, false);
      console.log(` User's name is:${nameinput.value}`);
      console.log(` User's name uppercase is:${nameinput.value.toUpperCase()}`);
      result.textContent = ' The user name is:' + nameinput.value;
}
upperbuton.addEventListener('click',clicked);
