// Hamburger menu button functionality
function menuButton() {
  document.getElementById("navbarLinks").classList.toggle("open");
}

// Contact form validation
function validateForm() {
  let a = document.forms["contactForm"]["fName"].value;
  let b = document.forms["contactForm"]["sName"].value;
  let c = document.forms["contactForm"]["email"].value;
  let d = document.forms["contactForm"]["phone"].value;

  // check that required fields are filled
  if ((a == "") || (b == "") || (c = "")) {
    alert("Please ensure your name and email address are entered.");
    return false;
  }

  // check phone number is entered as an 11-digit number starting with 0 IF the field is filled
  if ((d != "") && (!/^0\d{10}$/.test(d))) {
    alert("Please ensure your phone number is entered correctly.");
    return false;
  }
}

// Banner text animation
function banner() {
  const elem = document.getElementById("bannerAnimation");
  let opacity = 0;
  elem.style.opacity = opacity;
  const id = setInterval(frame, 25);

  function frame() {
    if (opacity >= 1) {
      clearInterval(id);
    } else {
      opacity += 0.02;
      elem.style.opacity = opacity;
    }
  }
}
document.addEventListener("DOMContentLoaded", banner);

// Day/night switch
const toggle = document.getElementById("toggle");
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    document.documentElement.setAttribute("data-theme", "night");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
});
