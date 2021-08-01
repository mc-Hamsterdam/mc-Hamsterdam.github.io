/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


function selectMode(mode) {
 
 var color = "#C0C0C0";
 var image = "https://cdn.pixabay.com/photo/2017/10/05/10/59/background-2819026__340.jpg";
 var label = "Accent Lighting";
 
 if (mode === "dark") {
  color = "#004381";
  image = "https://cdn.pixabay.com/photo/2017/04/12/07/46/tea-lights-2223898__340.jpg";
  label = "Dark Mode";
  
 } else if (mode === "light") {
  color = "#FFF0F5";
  image = "https://cdn.pixabay.com/photo/2016/10/20/19/52/tee-1756497__340.jpg";
  label = "Light Mode";
  
 } else {
  color = "#EEEEEE";
  image = "https://cdn.pixabay.com/photo/2016/09/04/19/29/light-bulb-1644993__340.jpg";
  label = "Neutral Mode";
 }
 
 console.log(label);
 
 
 document.getElementById("icon").src = image;
 document.getElementById("theme").style
  .backgroundColor = color;
 document.getElementById("label").innerHTML =
  label;
 
}