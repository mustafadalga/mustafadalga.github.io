$('#year').text(new Date().getFullYear());

// Init ScrollSpy
$('body').scrollspy({ target: '#main-nav' });

// Add smooth scrolling
$('#main-nav a').on('click', function (e) {
  // Check for a hash value
  if (this.hash !== '') {
    // Prevent default behavior
    e.preventDefault();
    const hash = this.hash;

    //Animate  smoooth scrool
    $('html,body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      900,
      function () {
        // Add hash to URL after scroll
        window.location.hash = hash;
      }
    );
  }
});