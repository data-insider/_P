var iTwo = 0;
var txtTwo ='we accept our limits,';
var speedTwo = 80;

function typeWriterTwo() {
  if (iTwo < txtTwo.length) {
    document.getElementById("introTypeTwo").innerHTML += txtTwo.charAt(iTwo);
    iTwo++;
    setTimeout(typeWriterTwo, speedTwo);
  }
}
var myVarTwo = setInterval(typeWriterTwo, 4000);
