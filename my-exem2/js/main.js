$(document).ready(function () {

  // add active class to clicked nav item
  $(".header__menu a").click(function (event) {
    event.preventDefault();
    $(".header__menu a").removeClass('active');
    $(this).addClass('active');
  });


  // Slow scroll from nav item to current section
  $(".header__menu a, .hello__btn, .lets-talk__btn").click(function (event) {
    event.preventDefault();
    let id = $(this).attr("href");
    let top = $(id).offset().top;
    let headerHeight = $('.header').height();
    let isHeaderSticky = $('.header').hasClass('header--sticky');
    let scrollTop = isHeaderSticky ? top - headerHeight : top - headerHeight + 50;
    $("body, html").animate({ scrollTop }, 700);
  }
  );
});

// sticky header
if ($('.header').length) {
  let renderHeader = function () {
      const HEADER = $('.header');
      let headerHeight = HEADER.height();
      let scrollTop = $(window).scrollTop();
      if (scrollTop > headerHeight) {
          HEADER.addClass("header--sticky");
      } else {
          HEADER.removeClass("header--sticky");
      }
  }
  renderHeader();
  $(window).scroll(function () {
      renderHeader();
  })
}

 // Removes focus-effect under the "All works" button after clicking another filter-buttons
 $(".filter-button").click(function (event) {
  $(".all-button").removeClass('is-checked');
});

//adds underlining under filter-buttons after the click
$(".filter-button").click(function (event) {
  event.preventDefault();
    $(".filter-button").removeClass('focus');
    $(this).addClass('focus');
});


$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  // do not use .grid-sizer in layout
  percentPosition: true,
  horizontalOrder: true,
  transitionDuration: '0.2s'
});


// init Isotope
var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on('click', 'button', function () {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});


//Functions for team and testimonials slider
(function($){
  "use strict";

// simple-scroll
/*  var el = document.querySelector('.item__text');
  SimpleScrollbar.initEl(el);*/
    $(".item__text").niceScroll({

        cursorwidth:6,
        cursoropacitymin:0.4,
        cursorcolor:"#19bd9a",
        cursorborder:'none',
        cursorborderradius:4,
        autohidemode:'leave',
        background:"none"

    });

   /* $(".item__text").niceScroll({});*/


// 1st slider
  $( function(){
    $('.team__slider').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      fade: true
    });
  })

// 2st slider
  $( function(){
    $('.testimonials__slider').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      fade: true
    });
  })
})(jQuery);
