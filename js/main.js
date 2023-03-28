// if else + switch

let iceCream = prompt("Ice cream???");

if (iceCream === 'chocolate') {
  console.log("Wow, that's my favourite!")
} else if (iceCream === 'vanilla') {
  console.log("Well, I don't like it!")
} else {
  console.log('Seems like no ice cream here...')
}

switch (iceCream) {
  case 'chocolate':
    console.log("Wow, that's my favourite!")
    break;

  case 'vanilla':
    console.log("Well, I don't like it!")
    break;

  default:
    console.log("Seems like no ice cream here...")
    break;
}

// Function

let number1 = prompt('Input first number');
let number2 = prompt('Input second number');

function multiply(num1, num2) {
  alert(num1 * num2);
}

multiply(number1, number2);

const test = () => {
  alert(num1 * num2);
}

test();

// What is DOM + Selectors
const body = document.querySelector('body');

const customBtn = document.createElement('button');

body.appendChild(customBtn);

customBtn.innerText = 'MY BUTTON';
customBtn.style.marginTop = '20px';
customBtn.style.borderRadius = '8px';
customBtn.style.padding = '8px 16px';
customBtn.style.background = 'black';
customBtn.style.color = 'white';
customBtn.style.border = 'none';

const myImg = document.querySelector('img');

function changePicture() {
  const mySrc = myImg.getAttribute('src');

  if (mySrc === 'images/firefox-icon.png') {
    myImg.setAttribute('src', "https://cdn-icons-png.flaticon.com/512/5968/5968292.png")
  } else {
    myImg.setAttribute('src', "images/firefox-icon.png")
  }
}

myImg.addEventListener("click", changePicture);

// Local Storage

function nameCheck() {
  const name = prompt('What is your name?')
  localStorage.setItem("name", name);
  const header = document.querySelector('h1');
  header.textContent = `Hey, ${name}`;
}

nameCheck();
