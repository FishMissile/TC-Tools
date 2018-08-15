var monthArray = {
    0: "January",
    1: "Februaru",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
}
var weekArray = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
}

function DayOff() {

    var inputDate = document.getElementById("inputDate").value;
    if(!inputDate){
        alert("Date field is required")
    }
    
    var dateArray = inputDate.split("/");
    var month = dateArray[0];
    var day = dateArray[1];
    var year = dateArray[2];
    var calendar = new Date();
    var setInput = new Date();
    setInput.setDate(day);          // day as a number (1-31)
    setInput.setFullYear(year)
    setInput.setMonth(month - 1); // month 0-11
    var workWeek = [false, true, true, false, false, false, true, true, false, false, true, true, true, false]
    var distance = setInput - calendar;
    var days = Math.floor(distance / (24 * 60 * 60 * 1000));
    var zeroDate = new Date("2018-07-17");
    var distFromZero = setInput - zeroDate;
    var daysFromZero = Math.floor(distFromZero / (24 * 60 * 60 * 1000))
    var d = 0
    for (i = 0; i < daysFromZero; i++) {
        workDay = workWeek[d]
        d++
        if (d >= 14) {
            d = 0
        }
        zeroDate.setDate(zeroDate.getDate() + 1)
    }
    if (distance < 1) {
        alert("Input must be after today's date.")
    } else if (workDay == true) {
        document.getElementById("workdays1").innerHTML = "In " + days + " days from now A shift will be working.";

    } else if (workDay == false) {
        document.getElementById("workdays1").innerHTML = "In " + days + " days from now B shift will be working.";
    }
    console.log("DayOFF")
    document.getElementById("workdays2").innerHTML = monthArray[setInput.getMonth()] + " " + setInput.getDate() + ", Is a " + weekArray[setInput.getDay()];
}

var isShift = false;
var seperator = "/";
window.onload = function () {
    //Reference the Table.
    var tblForm = document.getElementById("tblForm");

    //Reference all INPUT elements in the Table.
    var inputs = document.getElementsByTagName("input");

    //Loop through all INPUT elements.
    for (var i = 0; i < inputs.length; i++) {
        //Check whether the INPUT element is TextBox.
        if (inputs[i].type == "text") {
            //Check whether Date Format Validation is required.
            if (inputs[i].className.indexOf("date-format") != 1) {

                //Set Max Length.
                inputs[i].setAttribute("maxlength", 10);

                //Only allow Numeric Keys.
                inputs[i].onkeydown = function (e) {
                    return IsNumeric(this, e.keyCode);
                };

                //Validate Date as User types.
                inputs[i].onkeyup = function (e) {
                    ValidateDateFormat(this, e.keyCode);
                };
            }
        }
    }
};

function IsNumeric(input, keyCode) {
    if (keyCode == 16) {
        isShift = true;
    }
    //Allow only Numeric Keys.
    if (((keyCode >= 48 && keyCode <= 57) || keyCode == 8 || keyCode <= 37 || keyCode <= 39 || (keyCode >= 96 && keyCode <= 105)) && isShift == false) {
        if ((input.value.length == 2 || input.value.length == 5) && keyCode != 8) {
            input.value += seperator;
        }

        return true;
    }
    else {
        return false;
    }
};

function ValidateDateFormat(input, keyCode) {
    var dateString = input.value;
    if (keyCode == 16) {
        isShift = false;
    }
    var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

    //Check whether valid dd/MM/yyyy Date Format.
    if (regex.test(dateString) || dateString.length == 0) {
        ShowHideError(input, "none");
    } else {
        ShowHideError(input, "block");
    }
};

function ShowHideError(textbox, display) {
    var row = textbox.parentNode.parentNode;
    var errorMsg = row.getElementsByTagName("span")[0];
    if (errorMsg != null) {
        errorMsg.style.display = display;
    }
};
