const firstv = 39.325
const secondv = 16.387


function gramWeight(width, guage, density){
    var width = document.getElementById("widthv").value;
    var guage = document.getElementById("guagev").value;
    var density = document.getElementById("densityv").value;
    var result = firstv * width * guage * secondv * density * 2 / 1000
    var resultRounded = Math.round(result * 100) / 100
    document.getElementById("gramweight").innerHTML = resultRounded

    if(!width || !guage || !density){
        alert("All fields are required.")
    }
}
