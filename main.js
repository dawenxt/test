document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const menu = document.querySelector('header ul');
  
    hamburgerBtn.addEventListener('click', function() {
      menu.classList.toggle('show-menu');
    });
  
    window.addEventListener('resize', function() {
      if (window.innerWidth > 767) {
        menu.classList.remove('show-menu');
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var headerVideo = document.getElementById("headerVideo");
    var header = document.getElementById("header");
  
    headerVideo.addEventListener("playing", function() {
      header.classList.add("header-transparent");
    });
  
    headerVideo.addEventListener("pause", function() {
      header.classList.remove("header-transparent");
    });
  });
  
  
  document.addEventListener("DOMContentLoaded", function() {
    // Show the "OUTBLIND" text when the website is loaded
    document.querySelector(".clothingname").style.opacity = 1;
  
    window.addEventListener("scroll", function() {
      var scrollPosition = window.scrollY;
  
      // Define the threshold where you want the transition to happen
      var transitionThreshold = 200; // Adjust this value as needed
  
      if (scrollPosition > transitionThreshold) {
        document.getElementById("header").classList.add("header-transparent");
        document.getElementById("outblindImage").style.opacity = 1; // Show image
        document.querySelector(".clothingname").style.opacity = 0; // Hide text
      } else {
        document.getElementById("header").classList.remove("header-transparent");
        document.getElementById("outblindImage").style.opacity = 0; // Hide image
        document.querySelector(".clothingname").style.opacity = 1; // Show text
      }
    });
  });
  
