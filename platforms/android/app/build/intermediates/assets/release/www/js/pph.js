const first = 0.304
const second = 0.1574 
function PPh(pphwidth, pphguage, rpm){ 
var width = document.getElementById("pphwidth").value; 
var guage = document.getElementById("pphguage").value; 
var rpm = document.getElementById("rpm").value; 
var result = rpm * first * width * guage * second
var resultRounded = Math.round(result * 100) / 100 

document.getElementById("pphresult").innerHTML = resultRounded 
if(!pphwidth || !pphguage || !rpm){
    alert("All fields are required.")
}
}