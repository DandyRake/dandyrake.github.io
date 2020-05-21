//const myHeading = document.querySelector('h1');
//myHeading.textContent = 'Welcome to the Weird Suitcase!';
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to Weird Suitcase, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to Weird Suitcase, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/tomjeryrryyrry.jpg') {
      myImage.setAttribute ('src','images/suitcase.png');
    } else {
      myImage.setAttribute ('src','images/tomjeryrryyrry.jpg');
    }
}
