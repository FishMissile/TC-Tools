const first = 0.304
const second = 0.1574 
function PPh(width, guage, rpm){ 
var width = document.getElementById("width").value; 
var guage = document.getElementById("guage").value; 
var rpm = document.getElementById("rpm").value; 
var result = rpm * first * width * guage * second
var resultRounded = Math.round(result * 100) / 100 

document.getElementById("pphresult").innerHTML = resultRounded }