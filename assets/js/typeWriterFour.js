var iFour = 0;
var txtFour = '– Albert Einstein';
var speedFour = 80;

function typeWriterFour() {
  if (iFour < txtFour.length) {
    document.getElementById("introTypeFour").innerHTML += txtFour.charAt(iFour);
    iFour++;
    setTimeout(typeWriterFour, speedFour);
  }
}
var myVarFour = setInterval(typeWriterFour, 8500);
