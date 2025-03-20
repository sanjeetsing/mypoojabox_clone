$(document).ready(function () {
  // Hero Slider Initialization
  $(".hero-slider .slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  // Product Sliders Initialization
  $(".products-slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  // Testimonials Slider Initialization
  $(".testimonials-slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // Mobile Menu Toggle
  $(".mobile-menu-toggle").click(function () {
    $(".nav-menu").toggleClass("active");
  });

  // Mobile Dropdown Toggle
  $(".nav-menu .dropdown > a").click(function (e) {
    // Only on mobile view
    if ($(window).width() < 768) {
      e.preventDefault();
      $(this).parent().toggleClass("active");
      $(this).parent().siblings().removeClass("active");
    }
  });

  // Back to Top Button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").addClass("active");
    } else {
      $(".back-to-top").removeClass("active");
    }
  });

  $(".back-to-top").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 800);
  });

  // Product Wishlist Button
  $(".wishlist-button").click(function () {
    $(this).find("i").toggleClass("far fas");
  });

  // Add to Cart Button
  $(".add-to-cart").click(function () {
    // Get current cart count
    let currentCount = parseInt($(".cart-count").text());

    // Update cart count
    $(".cart-count").text(currentCount + 1);

    // Show notification (can be improved with a toast notification)
    alert("Product added to cart!");
  });

  // Newsletter Form Submission
  $(".newsletter-form").submit(function (e) {
    e.preventDefault();
    let email = $(this).find('input[type="email"]').val();

    if (email) {
      // Here you would normally send this to a server
      // For demo purposes we'll just show an alert
      alert("Thank you for subscribing with " + email + "!");
      $(this).find('input[type="email"]').val("");
    } else {
      alert("Please enter a valid email address");
    }
  });

  // Handle window resize
  $(window).resize(function () {
    if ($(window).width() >= 768) {
      $(".nav-menu").removeClass("active");
      $(".nav-menu .dropdown").removeClass("active");
    }
  });

  // Initialize tooltips if using Bootstrap (optional)
  if (typeof $().tooltip === "function") {
    $('[data-toggle="tooltip"]').tooltip();
  }

  // Sticky header on scroll
  let headerHeight = $(".main-header").outerHeight();

  $(window).scroll(function () {
    if ($(this).scrollTop() > headerHeight) {
      $(".main-nav").addClass("sticky");
      $("body").css("padding-top", $(".main-nav").outerHeight());
    } else {
      $(".main-nav").removeClass("sticky");
      $("body").css("padding-top", 0);
    }
  });

  // Add sticky class styles
  $(
    "<style>.main-nav.sticky { position: fixed; top: 0; left: 0; width: 100%; z-index: 1000; box-shadow: 0 2px 5px rgba(0,0,0,0.1); animation: fadeInDown 0.3s; } @keyframes fadeInDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }</style>"
  ).appendTo("head");
});
