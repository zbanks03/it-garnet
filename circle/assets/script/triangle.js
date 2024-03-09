/* The following should be a file in your js or script folder */

$( "#CircleForm" ).validate({

});

function displayCircle() {
    // if the form is valid, then make the calculations
    if ($("#CircleForm").valid()) {
        
         document.getElementById("diameter").innerHTML = "";

         var radius; // string representation of the radius
         var radiusfp; // floating point value of radius
         var diameter;  // floating point diameter
         var result; // displayable result

         // read in the legs as a string
         radius = document.getElementById("radius").value;
        

         // Convert numbers from strings to Floating Point
         radiusfp = parseFloat( radius ); 
         

         // calculate the hypotenuse
         diameter = calcDiameter(radiusfp);

         // display the hypotenuse
         document.getElementById("diameter").innerHTML = diameter.toString();

         circumference = calcCircumference(radiusfp)
         document.getElementById("circumference").innerHTML = circumference.toString();
    }
}

  function calcDiameter (radiusvalue)
  // returns diameter of a right triangle
  // square root of radius
  {
      return 2*radiusvalue
  }

  function calcCircumference(radiusvalue)
  {
        return 2 * Math.PI * radiusvalue
  }
  
  function clearForm()
{
    document.getElementById("radius").value = "";
    document.getElementById("radiuserror").innerHTML = "";
    document.getElementById("diameter").innerHTML = "";
}
