$(window).load(function () {

        "use strict";

    var cfg = {     
        defAnimation   : "fadeInUp",    // default css animation        
        scrollDuration : 2000,           // smoothscroll duration
        mailChimpURL   : 'http://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e65110b38d'
    },  

    $WIN = $(window);


    // preloader
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(550).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(550).css({
        'overflow': 'visible'
    });


    //  isotope
    var $container = $('.portfolio_container');
    $container.isotope({
        filter: '*',
    });

    $('.portfolio_filter a').click(function () {
        $('.portfolio_filter .active').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 500,
                animationEngine: "jquery"
            }
        });
        return false;
    });

    // back to top
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function () {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });

    // input
    $(".input-contact input, .textarea-contact textarea").focus(function () {
        $(this).next("span").addClass("active");
    });
    $(".input-contact input, .textarea-contact textarea").blur(function () {
        if ($(this).val() === "") {
            $(this).next("span").removeClass("active");
        }
    });






var $lg = $('#portfolio');
 
$lg.lightGallery(
            {selector: ".portfolio_item"  ,
            counter : true,
            vertical:true,
            thumbnail: false,
          }
            ); 

  // This is a functions that scrolls to #{blah}link
function goToByScroll(id){
      // Remove "link" from the ID
    id = id.replace("link", "");
      // Scroll
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top},
        scroll_top_duration);
}

    $("#menu-intro").click(function(e) { 
          // Prevent a page reload when a link is pressed
        e.preventDefault(); 
          // Call the scroll function
        goToByScroll('intro');           
    });
    $("#menu-about").click(function(e) { 
          // Prevent a page reload when a link is pressed
        e.preventDefault(); 
          // Call the scroll function
        goToByScroll('about');           
    });
    $("#menu-whatwedo").click(function(e) { 
          // Prevent a page reload when a link is pressed
        e.preventDefault(); 
          // Call the scroll function
        goToByScroll('whatwedo');           
    });
    $("#menu-portfolio").click(function(e) { 
          // Prevent a page reload when a link is pressed
        e.preventDefault(); 
          // Call the scroll function
        goToByScroll('portfolio');           
    });
    $("#menu-contactus").click(function(e) { 
          // Prevent a page reload when a link is pressed
        e.preventDefault(); 
          // Call the scroll function
        goToByScroll('contactus');           
    });  
    $("#menu-breathingpharma").click(function(e) { 
          // Prevent a page reload when a link is pressed
        e.preventDefault(); 
          // Call the scroll function
        goToByScroll('breathingpharma');           
    });    



    $('.box-primary-nav a').click(function(e){
        $('.box-primary-nav').removeClass('is-visible');
        $('.box-primary-nav-trigger .box-menu-icon').removeClass('is-clicked');
    });

    $('section').click(function(e){
        $('.box-primary-nav').removeClass('is-visible');
        $('.box-primary-nav-trigger .box-menu-icon').removeClass('is-clicked');
    });    




  /* Animations
    * ------------------------------------------------------- */

        if (!$("html").hasClass('no-cssanimations')) {
            $('.animate-this').waypoint({
                handler: function(direction) {
                    console.log("here");

                    var defAnimationEfx = cfg.defAnimation;

                    if ( direction === 'down' && !$(this.element).hasClass('animated')) {
                        $(this.element).addClass('item-animate');

                        setTimeout(function() {
                            $('body .animate-this.item-animate').each(function(ctr) {
                                var el       = $(this),
                                animationEfx = el.data('animate') || null;  

                        if (!animationEfx) {
                                animationEfx = defAnimationEfx;                     
                           }

                            setTimeout( function () {
                                    el.addClass(animationEfx + ' animated');
                                    el.removeClass('item-animate');
                                }, ctr * 30);

                            });                             
                        }, 100);
                    }

                    // trigger once only
                this.destroy(); 
                }, 
                offset: '95%'
            }); 
        }
    

//https://www.cssscript.com/responsive-animated-timeline-javascript-css3/
//Timeline

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);







});