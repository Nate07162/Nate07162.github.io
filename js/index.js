$(document).ready(() => {
  const animateSelf = (selector, trigger, animation) => {
    $(selector).on(trigger, (event) => {
      $(event.currentTarget)
        .addClass("animated " + animation)
        .one("animationend", () => {
          $(selector).removeClass("animated " + animation);
        });
    });
  };

  const navDisplay = () => {
    const screenWidth = $(window).innerWidth();
    if (screenWidth > 927) {
      $(".main-navigation").show();
      $(".nav-button").hide();
      $(".nav-close").hide();
    } else {
      $(".main-navigation").hide();
      $(".nav-button").show();
      $(".nav-close").hide();
    }
  };

  navDisplay();

  const resizeNavDisplay = () => {
    const screenWidth = $(window).width();
    $(window).on("resize", () => {
      navDisplay();
      return $(window).width();
    });
  };

  resizeNavDisplay();

  const navToggle = () => {
    $(".nav-button").on("click", () => {
      $(".nav-button").hide();
      $(".nav-close").fadeIn(1200);
      $(".main-navigation").fadeIn(600);
    });
  };

  navToggle();

  const navClose = () => {
    $(".nav-close").on("click", () => {
      $(".nav-close").hide();
      $(".nav-button").fadeIn(1200);
      $(".main-navigation").fadeOut(600);
    });
  };

  navClose();

  const startedCard = () => {
    $(".started-card").hide();
    $(".started-button").on("click", () => {
      $(".started-card").slideDown(700);
      $(".get-started").addClass("fade");
    });
    $(".started-close").on("click", () => {
      $(".started-card").fadeOut(600);
      $(".get-started").removeClass("fade");
    });
    $(".started-card").on("mouseleave", () => {
      $(".started-card").fadeOut(600);
      $(".get-started").removeClass("fade");
    });
  };

  startedCard();

  let top = () => {
    $(".started-card").hide();
    if ($(".sec6").offset({ top: 0 })) {
      $(".started-card").show();
    } else {
      $(".started-card").hide();
    }
  };

  //top();
});
