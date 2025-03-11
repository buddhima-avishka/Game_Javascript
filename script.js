var start = new Date().getTime();

function shapeAppear(){
  document.getElementById("d").style.display = "block";
  var start = new Date().getTime();
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