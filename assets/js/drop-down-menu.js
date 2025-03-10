/* Desktop hover drop down menu */
function menuFunction() {
  var x = document.getElementById("menuLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}