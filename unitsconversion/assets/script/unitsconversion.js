function calculate() {
    
    /* Make sure that the form is valid */
    if ($( "#myform" ).valid()) {
        
        /* get the operands from the form */
        var FromValue = document.getElementById("FromValue").value;
        
        /* figure out which from unit was checked and place the value in operator */
        var fromunit;
        if (document.getElementById("fromcentimeter").checked) {
            fromunit = document.getElementById("fromcentimeter").value;
        }
        if (document.getElementById("frommeter").checked) {
            fromunit = document.getElementById("frommeter").value;
        }
        if (document.getElementById("fromkilometer").checked) {
            fromunit = document.getElementById("fromkilometer").value;
        }
        if (document.getElementById("frominch").checked) {
            fromunit = document.getElementById("frominch").value;
        }
        if (document.getElementById("fromfeet").checked) {
            fromunit = document.getElementById("fromfeet").value;
        }
        if (document.getElementById("fromyard").checked) {
            fromunit = document.getElementById("fromyard").value;
        }
        if (document.getElementById("frommile").checked) {
            fromunit = document.getElementById("frommile").value;
        }

        var tounit;
        if (document.getElementById("tocentimeter").checked) {
            tounit = document.getElementById("tocentimeter").value;
        }
        if (document.getElementById("tometer").checked) {
            tounit = document.getElementById("tometer").value;
        }
        if (document.getElementById("tokilometer").checked) {
            tounit = document.getElementById("tokilometer").value;
        }
        if (document.getElementById("toinch").checked) {
            tounit = document.getElementById("toinch").value;
        }
        if (document.getElementById("tofeet").checked) {
            tounit = document.getElementById("tofeet").value;
        }
        if (document.getElementById("toyard").checked) {
            tounit = document.getElementById("toyard").value;
        }
        if (document.getElementById("tomile").checked) {
            tounit = document.getElementById("tomile").value;
        }

        CalculateResult(FromValue, fromunit, tounit)

  
    }
}

async function CalculateResult(FromValue, fromunit, tounit) {
        
    // URL and method used with AJAX Call
    var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";

    /* AJAX calculator requires Operand1, Operator, and Operand2 */
    myURL = myURL + "?FromValue=" + encodeURIComponent(FromValue) + "&FromUnit=" + encodeURIComponent(fromunit) + "&ToUnit=" + encodeURIComponent(tounit);

    /* fetch the results */
    let myCalcObject = await fetch(myURL);
    let myResult = await myCalcObject.text();
    
    document.getElementById("ToValue").innerHTML = myResult.toString();
}

function clearform() {
    
    document.getElementById("FromValue").value = "";
    document.getElementById("FromValueMsg").innerHTML = "";
    document.getElementById("fromcentimeter").checked = false;
    document.getElementById("frommeter").checked = false;
    document.getElementById("fromkilometer").checked = false;
    document.getElementById("frominch").checked = false;
    document.getElementById("fromfeet").checked = false;
    document.getElementById("fromyard").checked = false;
    document.getElementById("frommile").checked = false;
    document.getElementById("tocentimeter").checked = false;
    document.getElementById("tometer").checked = false;
    document.getElementById("tokilometer").checked = false;
    document.getElementById("toinch").checked = false;
    document.getElementById("tofeet").checked = false;
    document.getElementById("toyard").checked = false;
    document.getElementById("tomile").checked = false;
    document.getElementById("ToUnitMsg").innerHTML = "";
    document.getElementById("FromUnitMsg").innerHTML = "";
    document.getElementById("ToValue").innerHTML = "";
}

/* Form Validation */
$( "#myform" ).validate({

});