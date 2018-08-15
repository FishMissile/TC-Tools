function Remaining() {

    var date = new Date()    //get current date
    var min = date.getMinutes() //pull current minute
    var hour = date.getHours()  //pull current hour

    //get input values
    poundsLeft = document.getElementById("poundsLeft").value;
    pph = document.getElementById("pph").value;
    //get total run hours
    hours = poundsLeft / pph
    roundedhours = Math.floor(hours)

    minutes = hours * 60
    for (i = minutes; i >= 60; i -= 60) { }
    minuteRemainder = Math.floor(i)

    date.setMinutes(date.getMinutes() + minutes)
        if(!poundsLeft){
            alert("Remaining pounds required.")
        }
        if(!pph){
            alert("PPH field required")
        }
    //draw results
    document.getElementById("Runtime1").innerHTML = "Finish Date: " + date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear()
    document.getElementById("Runtime2").innerHTML = "Finish Time: " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
    document.getElementById("Runtime3").innerHTML = "Total Run Time: " + ("0" + roundedhours).slice(-2) + ":" + ("0" + minuteRemainder).slice(-2)
}

function GetPoundsLeft(){
    var orderTotal = document.getElementById("orderTotal").value;
    var poundsRan = document.getElementById("poundsRan").value;
    document.getElementById("poundsLeft").value = orderTotal - poundsRan;
}
