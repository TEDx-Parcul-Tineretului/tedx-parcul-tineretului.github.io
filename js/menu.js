
function menuDown() {
  var btn = document.getElementById("btn-1");
  if(btn.classList.contains("active")){
    btn.classList.remove("active");
  }else{
    btn.classList.add("active");
  }
  var x = document.getElementById("dim");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
