// Navbar
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll >= 50){
        $('.fixed-top').addClass('bg_white');
        $('.nv-l').addClass('color');
        $('.fa-shopping-cart').addClass('r');
        $('.fa-user-circle').addClass('r');
        $('.lg').addClass('r');
        $('.rg').addClass('r');
    } else{
        $('.fixed-top').removeClass('bg_white');
        $('.nv-l').removeClass('color');
        $('.fa-shopping-cart').removeClass('r');
        $('.fa-user-circle').removeClass('r');
        $('.lg').removeClass('r');
        $('.rg').removeClass('r');
    }
  });
  
  // Carousel
  
  $(".carousel").owlCarousel({
    margin: 10,
    loop: false,
    autoplay: false,
    // autoplayTimeout: 2000,
    // autoplayHoverPause:true,
    navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    responsive: {
      0:{
        items: 1,
        nav: false
      },
      600:{
        items: 1,
        nav: false
      },
      1000:{
        items: 3,
        nav: false
      }
    }
  })
  
  // Plus and Minus Button
  
  function incrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
  
    if (!isNaN(currentVal)) {
      parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
      parent.find('input[name=' + fieldName + ']').val(0);
    }
  }
  
  function decrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
  
    if (!isNaN(currentVal) && currentVal > 0) {
      parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
      parent.find('input[name=' + fieldName + ']').val(0);
    }
  }
  
  $('.input-group').on('click', '.button-plus', function(e) {
    incrementValue(e);
  });
  
  $('.input-group').on('click', '.button-minus', function(e) {
    decrementValue(e);
  });