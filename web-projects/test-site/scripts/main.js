let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === '/home/roque/Documents/prg/web-projects/test-site/images/foto-ficus1.jpg') {
      myImage.setAttribute('src','/home/roque/Documents/prg/web-projects/test-site/images/foto-ficus2.jpg');
    } else {
      myImage.setAttribute('src','/home/roque/Documents/prg/web-projects/test-site/images/foto-ficus1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
  }
  myButton.onclick = function() {
    setUserName();
  }  