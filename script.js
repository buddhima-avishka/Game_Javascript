var start = new Date().getTime();

function disappear(){
  document.getElementById("d").style.display="none";
  var end = new Date().getTime();
  var time = (end - start) / 1000;
  alert(time + " seconds");
}

document.getElementById("d").onclick = disappear;