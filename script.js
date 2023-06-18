 var currentURL = window.location.href;
    
    // Get all the navigation links
    var navLinks = document.querySelectorAll("nav ul li a");
    
    // Loop through each link and check if the href matches the current URL
    for (var i = 0; i < navLinks.length; i++) {
      if (navLinks[i].href === currentURL) {
        navLinks[i].classList.add("active");
        break; // Exit the loop if a match is found
      }
    }

