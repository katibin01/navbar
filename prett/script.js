// DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // Code to be executed when the DOM is fully loaded
  
    // Get references to elements
    var navLinks = document.querySelectorAll('nav ul li a');
  
    // Add event listener to navigation links
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        // Get the target section ID from the href attribute
        var target = link.getAttribute('href');
  
        // Scroll to the target section
        smoothScroll(target);
      });
    });
  
    // Function for smooth scrolling
    function smoothScroll(target) {
      var targetElement = document.querySelector(target);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  });
  