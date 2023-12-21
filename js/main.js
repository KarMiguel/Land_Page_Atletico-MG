$(document).ready(function() {
    $(".thumbnails").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoPlay: true,
        autoplayTimeout: 3000,
        animateOut: 'slideOutLeft',
        animateIn: 'slideInRight',
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        },
        onInitialized: function() {
            $(".thumbnails").find('.owl-stage').on('touchstart', function(e) {
                if (e.type === 'touchstart') {
                    e.preventDefault();
                }
            }, { passive: false });
        }
    });
   
    $("#btn-bars").on("click", function() {
        $("header").toggleClass("open-menu");
    });

    $("#btnClose").on("click", function() {
        $("header").removeClass("open-menu");
    });
    
    
    
});

$(".thumbnails").owlCarousel({
    items:4,
    autoPlay: 5000,
    singleItem: false
});

let owl = $(".thumbnails").data('owlCarousel');

$("#btn-news-prev").on("click",function(){
    owl.prev();
});

$("#btn-news-next").on("click",function(){
    owl.next();
});


