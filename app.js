/*
document.querySelector('input')
<input type=​"text">​
document.querySelector('input').textContent 
""
document.querySelector('input').textContent = "jlj"
"jlj"
document.querySelector('input').value = '50'
"50
 */
/* dom API
1.Search , querySelector
2. Object with property can manipulation, need to change textContent or value(span.textContent = sum)
3.event handling
use 
*/

var num1 = document.querySelector(".number1");
var num2 = document.querySelector(".number2");
var span = document.querySelector("span");
var submitBtn = document.querySelector(".submit-btn");
//Event handler
var handleClick = function() {
  var result = Number(num1.value) + Number(num2.value);
  //input when print is a string ,need to convert using Number
  span.textContent = result;
};

submitBtn.addEventListener("click", handleClick);

var handleToogle = function() {
  document.body.classList.toogle("dark");
  if (modeBtn.textContent === "dark mode") {
    modeBtn.textContent = "light mode";
  } else {
  }
};

/* DOM-document object model -application programming interface
all method &properties - DOM API - built in library in the browser
built in library -software (originally in the browser, no need to download, library is all method and function)
3rd party library

DOM api to access to the elements
//document.querySelector("css selector")
//document.querySelectorAll("css selector")
//element.addEventListener()
//element.style
//element.textContent
//element.value

//element.classList
window.document



// document.body.className = "blah"
// return "blah"
document.body.className = "blah dark"
return "blah dark"
document.body.classList 
return DOMTokenList(2)['blah','dark',value:'blah dark']
document.body.classList.remove('dark')
call again document.body.classList 
return DOMTokenList(1)['blah',value:'blah']
document.body.classList.toggle('dark')     //toggle means to add and remove
false

 */
