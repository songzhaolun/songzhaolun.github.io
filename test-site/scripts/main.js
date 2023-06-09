let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/chihuo.png') {
      myImage.setAttribute('src', 'images/chihuo2.png');
    } else {
      myImage.setAttribute('src', 'images/chihuo.png');
    }
}

let mySSP = document.querySelector('h1');
mySSP.onclick = function() {
    let myColor = getComputedStyle(mySSP,null).color;
    if(myColor === 'rgb(0, 0, 255)') {
      mySSP.style.color = "red";
    } else {
      mySSP.style.color = "blue";
    }
}
