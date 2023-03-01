// Preloader
$(window).on('load', function(){
    setTimeout(() => {
        $(".preloader").fadeOut('slow');
    }, 600);
});


$(document).ready(function(){

    'use strict';


    var $projects = $('.gallery');

    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('ul.filters > li').on('click', function(e){

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');

        $projects.isotope({filter: filter});

    });

    //Scrollspy
    $('body').scrollspy({target: ".navbar-nav", offset:67});

    // Add smooth scrolling to all links
    $(".navbar-nav a").on('click', function(event) {

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
            // Hide navbar on mobile
        $(".navbar-collapse").collapse("hide");
        } // End if
    });

     // Testimonial Carousel
     $('#testi-carousel').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: false,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
            0: {
            items: 1
            },
            768: {
            items: 2
            },
            1170: {
            items: 3
            }
        }
    });
    // Blog Carousel
    $('#blog-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:false,
        smartSpeed:1000,
        responsive:{
            300: {
                items: 1,
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1170: {
                items: 3,
            },
        }
    });
              
/*====================================
			ityped
======================================*/
ityped.init(document.querySelector(".ityped"), {
    showCursor: true,
    strings: ['Aromas', 'Styles', 'Places']
  })

/*====================================
			Header Fixed
======================================*/
window.onscroll=function(){
    const docScrollTop=document.documentElement.scrollTop;

    if(window.innerWidth>991){
        if(docScrollTop>100){
            document.querySelector("header").classList.add("fixed")
        }
        else {
            document.querySelector("header").classList.remove("fixed")
        }
    }
}

});
