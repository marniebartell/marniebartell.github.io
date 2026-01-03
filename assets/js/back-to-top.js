// Back to top button
let backbutton = document.getElementById("back-to-top");

// Show button when scrolling 350px down
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    backbutton.style.display = "block";
  } else {
    backbutton.style.display = "none";
  }
}

// Scroll to the top when button clicked
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Update year
  document.getElementById("currentYear").innerText = new Date().getFullYear();
