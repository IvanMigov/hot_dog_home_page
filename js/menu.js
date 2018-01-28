function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar-list") {
     x.className += " navbar-list-responsive";
  } else {
     x.className = "navbar-list";
  }
};
