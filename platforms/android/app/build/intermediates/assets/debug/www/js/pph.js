const first = 0.304
const second = 0.1574 
function PPh(pphwidth, pphguage, rpm){ 
var pphwidth = document.getElementById("pphwidth").value; 
var pphguage = document.getElementById("pphguage").value; 
var rpm = document.getElementById("rpm").value; 
var result = rpm * first * pphwidth * pphguage * second
var resultRounded = Math.round(result * 100) / 100 

document.getElementById("pphresult").innerHTML = resultRounded +" PPH"
if(!pphwidth || !pphguage || !rpm){
    alert("All fields are required")
}
}