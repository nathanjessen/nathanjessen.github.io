/***************** Smooth Scrolling ******************/

$(function() {

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

});


/***************** Overlays ******************/

$(document).ready(function(){
    // handle the mouseenter functionality
    $(".img").mouseenter(function(){
      $(this).addClass("hover");
    })
    // handle the mouseleave functionality
    .mouseleave(function(){
      $(this).removeClass("hover");
    });
});
