$(function () {
    var owl = $('.owl-carousel#owl-carousel-clients');
    owl.owlCarousel({
        loop: true,
        margin: 40,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        nav: true,
        navText: [""],
        moveSlides: 4,
        dots: false,
        responsive: {
            320:{
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 4
            }
        }
    });


    var owl1 = $('.owl-carousel#owl-carousel-partners');
    owl1.owlCarousel({
        loop: true,
        margin: 40,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        nav: true,
        navText: [""],
        moveSlides: 1,
        dots: false,
        responsive: {
            320:{
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 4
            }
        }
    });

    var original_html_vh = $('html').height();
    var original_html_vw = $('html').width();
    var original_body_vh = $('body').height();
    var original_body_vw = $('body').width();

    $('.menu img').on('click', function () {
        if ($('div.sidenav').offset().left == -250) {
            $('html, body').css({'overflow':'hidden'});
            $('div.sidenav').css({'transform':'translateX(250px)'});
            var width_final = $('.landing-page').width();
            $('.landing-page').css({'transform':'translateX(250px)'});
            $('.landing-page .landing-page-overlay').removeClass('d-hidden');
            $('.landing-page .landing-page-overlay').css('z-index', '99999999');
            $('.landing-page .landing-page-overlay').on('click', function () {
                $('div.sidenav').css({'transform':'translateX(0px)'});
                $('.landing-page').css({'transform':'translateX(0px)'});
                $('.landing-page .landing-page-overlay').addClass('d-hidden');
                $('html, body').css({'overflow':'unset'});
                // $('html').width(original_html_vw).height(original_html_vh);
                // $('body').width(original_body_vw).height(original_body_vh);
            })
        }
    });

    var stickyHeaderTop = $('.header').offset().top;

    // $(window).scroll(function(){
    //
    //         $('.header').css({position: 'fixed', top: '0px'});
    //         // $('.landing-page').css({'margin-top':'70px'})
    //         // $('#stickyalias').css('display', 'block');
    //
    // });
});
