var i = 0;
var txt = 'Minecraft server hosting!';
var speed = 75;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("h1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;