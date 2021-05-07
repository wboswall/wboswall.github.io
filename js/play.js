//Single line comment
/*
multiline comment
*/
/*
  * Formal comment
  * for official documentation
*/
document.getElementById("demo").innerHTML = 5 + 6;
//document.write(5 + 6);
//window.alert(5 + 6);
console.log(5 + 6);
window.print()
var x,y,z;
x=5;
y=6;
z=x+y;
document.getElementbyId("demo").innerHTML="Hello Dolly."
var a,b,c; a=5; b=6; c=a+b;
var person="Hege";
var x = y + z;
document.getElementById("demo").innerHTML = 
  "Hello Dolly!";
function myFunction() {
    document.getElementnById("demo1").innerHTML = "Hello Dolly!";
    document.getElementById("demo2").innerHTML = "How are you?";
}
var string1, string2
string1="John Doe"; string2='John Doe';
var num1, num2;
num1=10.50; num2=1001;
//(5+6)*10
//5/6
//5-1
var lastname, lastName;
lastName="Doe";
lastname="Peterson";
/*
 * The code below will change
 * the heading with id ="myH"
 * and the paragraph with id ="myP"
 * in my web page:
 */
document.getElementById("myH").innerHTML ="My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
//use let for variables inside functions and var for global variables
let x; x=1;
const =NUM1; NUM1=1;
var price1, price2, total; price=5; price2=6; total=price1 +price2;
x--;
x++;
var pi, person, answer; pi=3.14; person="John Doe"; answer='Yes I am!';
var carName; carName="Volvo"; document.getElementByID("demo".innerHTML =carName;
var x=5+2=3;
var $myString; $myString="String";
// code here can NOT use carName
function myFunction() {
  var carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName 
{
  var x = 2;
}
// x CAN be used here 
{
  let x = 2;
}
// x can NOT be used here 
 var x = 10;
// Here x is 10
{
  var x = 2;
  // Here x is 2
}
// Here x is 2 
 var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10 
 var i = 5;
for (var i = 0; i < 10; i++) {
  // some statements
}
// Here i is 10 
 let i = 5;
for (let i = 0; i < 10; i++) {
  // some statements
}
// Here i is 5 
function myFunction() {
  var carName = "Volvo";   // Function Scope
}
function myFunction() {
  let carName = "Volvo";   // Function Scope
}
var x = 2;       // Global scope
let x = 2;       // Global scope
 var carName = "Volvo";
// code here can use window.carName 
 let carName = "Volvo";
// code here cannot use window.carName 
 var x = 2;
// Now x is 2
 var x = 3;
// Now x is 3 
var x = 2;       // Allowed
let x = 3;       // Not allowed

{
  var x = 4;   // Allowed
  let x = 5   // Not allowed
}
carName = "Volvo";
alert(carName);
var carName; // is called hoisting
 const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error 
var x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10 
