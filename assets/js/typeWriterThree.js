var iThree = 0;
var txtThree = 'we go beyond them."';
var speedThree = 80;

function typeWriterThree() {
  if (iThree < txtThree.length) {
    document.getElementById("introTypeThree").innerHTML += txtThree.charAt(iThree);
    iThree++;
    setTimeout(typeWriterThree, speedThree);
  }
}
var myVarThree = setInterval(typeWriterThree, 6200);
