$(document).ready(function () {
  // $('h1').click(function(){
  //     $(this).css('background-color', 'red');

  // })

  //   Sticky Navigation
  $(".js--section-feature").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px",
    }
  );

  // Scroll on buttons
  $(".js--scroll-to-plans").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });

  $(".js--scroll-to-start").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-feature").offset().top },
      1000
    );
  });

  // Scroll to navigation

  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  // ADD Animations
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animated fadeInDown");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animated fadeInUp");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animated fadeInLeft");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass("animated fadeInUp");
    },
    {
      offset: "50%",
    }
  );


//   mobile-navigation\


//   $(".js--nav-icon").click(function () {
//     var nav = $('.js--main-nav');
//     var icon = $(".js--nav-icon .hambuger");

//     nav.slideToggle(200);
//     if (icon.hasClass("menu-icon")) {
//       icon.addClass("");
//       icon.removeClass("");
//     } else {
//       icon.addClass("");
//       icon.removeClass("");
//     }
//   })

//   var waypoints = $('#handler-first').waypoint(function(direction) {
//       notify(this.element.id + ' hit 25% from top of window')
//     }, {
//       offset: '25%'
//     })
// });

$(document).ready(
  function() {
  $(".js--nav-icon").click(
    function (event) {
      event.preventDefault(); // Prevent the default action (page refresh)

      var nav = $('.js--mobile-nav');
      nav.slideToggle(200); // Toggle the mobile navigation menu
  })
}
)})
