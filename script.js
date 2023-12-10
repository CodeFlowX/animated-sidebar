$(".menu > ul > li").click(function (e) {
  //remove the class that is already active
  $(this).siblings().removeClass("active");
  //add active to clicked class
  $(this).toggleClass("active");
  // open the sub-menu class
  $(this).find("ul").slideToggle();
  //close other sub-menu when a new one opens
  $(this).siblings().find("ul").slideUp();
  //remove active class of sub-menu items
   $(this).siblings().find("ul").find("li").removeClass();
});

$(".menu-btn").click(function () {
  $(".sidebar").toggleClass("active");
});

var icon = document.getElementById("icon");

icon.onclick = function() {
  document.body.classList.toggle("dark-theme");
  
  if (document.body.classList.contains("dark-theme")) {
   icon.src = "images/sun.png";
   icon.style.filter = "brightness(0) invert(1)";
  } else {
   icon.src = "images/moon.png";
   icon.style.filter = "none";
  }
};
