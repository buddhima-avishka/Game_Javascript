var start = new Date().getTime();

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function shapeAppear(){
  var top = Math.random() * 550;
  var left = Math.random() * 450;
  var width = Math.random() * 150;

  if(Math.random() > 0.5){
    document.getElementById("d").style.borderRadius = "50%";
  }else{
    document.getElementById("d").style.borderRadius = "0%";
  }

  document.getElementById("d").style.top = top + "px";
  document.getElementById("d").style.left = left + "px";

  document.getElementById("d").style.width = width + "px";
  document.getElementById("d").style.height = width + "px";

  document.getElementById("d").style.backgroundColor = getRandomColor();

  document.getElementById("d").style.display = "block";
  start = new Date().getTime();
}

function shapeAppearDelay(){
  setTimeout(shapeAppear, Math.random() * 1500);
}

function disappear(){
  document.getElementById("d").style.display = "none";
  var end = new Date().getTime();
  var time = (end - start) / 1000;
  document.getElementById("time").innerHTML = time + " seconds";
  shapeAppearDelay();
}

shapeAppearDelay();

document.getElementById("d").onclick = disappear;