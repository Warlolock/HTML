$(document).ready(function() {
  
  $(window).scroll(function () {
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 500) {
      $('#nav_bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 510) {
      $('#nav_bar').removeClass('navbar-fixed');
    }
  });
});

window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById("myP").className = "test";
    } else {
        document.getElementById("myP").className = "";
    }
}

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});





