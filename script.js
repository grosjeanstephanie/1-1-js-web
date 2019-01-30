
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/
let redBut = document.getElementById('redButton');
let blueBut = document.getElementById('blueButton');
let greenBut = document.getElementById('greenButton');

redBut.addEventListener('click', ()=>{
  square.style.backgroundColor = 'red';
});

blueBut.addEventListener('click', ()=>{
  square.style.backgroundColor = 'blue';
});

greenBut.addEventListener('click', ()=>{
  square.style.backgroundColor = 'green';
});

let square = document.getElementById('square');
