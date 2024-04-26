function DefaultDate() {
    if (document.getElementById("curiosity").checked {
        document.getElementById("PictureDate").value = "2012-08-6";
    }
    if (document.getElementById("opportunity").checked {
        document.getElementById("PictureDate").value = "2004-01-26";
    }
    if (document.getElementById("spirit").checked {
        document.getElementById("PictureDate").value = "2004-01-05";
    }
}

    async function search() {
    
    /* Make sure that the form is valid */
    if ($( "#myform" ).valid()) {
        
        var apiKey = "F3BDMV4amDdKf1Ced9MnfENpYkpe480WeRD2fMLM"
        var PictureDate = document.getElementById("PictureDate").value;

        /* figure out which from unit was checked and place the value in operator */
       
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


        var myURL1 = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + Rover + "/photos?earth_date=" + PictureDate + "&page=1&api_key=" + apiKey;
        
        var msg1Object = await fetch(myURL1);
        /* Check the status */
                    
         var msg1JSONText = await msg1Object.text();
            // Parse the JSON string into an object
           
         var msg1 = JSON.parse(msg1JSONText);

         var x = msg1.photos.length;

         for (i = 0; i < 25; i++) {
            // Note how we construct the name for image1, image2, etc...this sets the image source
            document.getElementById("image" + i).style.display = "inline";            
            document.getElementById("image" + i).src = msg1.photos[i].img_src;
            document.getElementById("image" + i).title = msg1.photos[i].camera.full_name
            document.getElementById("click" + i).href = msg1.photos[i].img_src;
            //do something to set the tool tip = msg1.photos[i].camera.full_name;
        }
    }
}



function clearform() {
    
    document.getElementById("Rover").value = "";
    document.getElementById("RoverMsg").innerHTML = "";
    document.getElementById("curiosity").checked = false;
    document.getElementById("opportunity").checked = false;
    document.getElementById("spirit").checked = false;
    document.getElementById("PictureDateError").innerHTML = "";
   
}

/* Form Validation */
$( "#myform" ).validate({

});