var i = 0;
var txt = '"Once';
var speed = 80;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("introType").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
var myVar = setInterval(typeWriter, 3000);
