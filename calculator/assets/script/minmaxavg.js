function calculate() {
    
    /* Make sure that the form is valid */
    if ($( "#myform" ).valid()) {
        
        /* get the operands from the form */
        var operand1 = document.getElementById("Operand1").value;
        

        /* convert the operands from string to floating point */
        var operand1fp = parseFloat (operand1);
        
        
        /* figure out which operator was checked and place the value in operator */
        var operator;
        if (document.getElementById("AddOperator").checked) {
            operator = document.getElementById("AddOperator").value;
        }
        if (document.getElementById("SubtractOperator").checked) {
            operator = document.getElementById("SubtractOperator").value;
        }
        if (document.getElementById("MultiplyOperator").checked) {
            operator = document.getElementById("MultiplyOperator").value;
        }
        if (document.getElementById("DivideOperator").checked) {
            operator = document.getElementById("DivideOperator").value;
        }

        var operand2 = document.getElementById("Operand2").value;

        var operand2fp = parseFloat (operand2);

        if (operator == "+") {
            result = operand1fp + operand2fp
        }

        if (operator == "-") {
            result = operand1fp - operand2fp
        }

        if (operator == "*") {
            result = operand1fp * operand2fp
        }

        if (operator == "/") {
            result = operand1fp / operand2fp
        }
        document.getElementById("Result").innerHTML = result.toString();
    }
}

function clearform() {
    
    document.getElementById("Operand1").value = "";
    document.getElementById("Operand1Msg").innerHTML = "";
    document.getElementById("AddOperator").checked = false;
    document.getElementById("SubtractOperator").checked = false;
    document.getElementById("MultiplyOperator").checked = false;
    document.getElementById("DivideOperator").checked = false;
    document.getElementById("OperatorMsg").innerHTML = "";
    document.getElementById("Operand2").value = "";
    document.getElementById("Operand2Msg").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

/* Form Validation */
$( "#myform" ).validate({

});