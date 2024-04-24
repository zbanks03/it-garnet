function calculate() {
    
    /* Make sure that the form is valid */
    if ($( "#myform" ).valid()) {
        
        var apiKey = "F3BDMV4amDdKf1Ced9MnfENpYkpe480WeRD2fMLM"
        var PictureDate = document.getElementById("PictureDate").value;

        /* figure out which from unit was checked and place the value in operator */
        var myURL1 = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + Rover + "/photos?earth_date=" + PictureDate + "&api_key=" + apiKey;
       
        var Rover;
        if (document.getElementById("curiosity").checked) {
            Rover = document.getElementById("curiosity").value;
        }
        if (document.getElementById("opportunity").checked) {
            Rover = document.getElementById("opportunity").value;
        }
        if (document.getElementById("spirit").checked) {
            Rover = document.getElementById("spirit").value;
        }

        

        CalculateResult(FromValue, fromunit, tounit)

  
    }
}



function clearform() {
    
    document.getElementById("Rover").value = "";
    document.getElementById("RoverMsg").innerHTML = "";
    document.getElementById("curiosity").checked = false;
    document.getElementById("opportunity").checked = false;
    document.getElementById("spirit").checked = false;
    document.getElementById("PictureDateMsg").innerHTML = "";
    document.getElementById("PictureDate").innerHTML = "";
}

/* Form Validation */
$( "#myform" ).validate({

});