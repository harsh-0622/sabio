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
            320: {
                items: 2
            },
            767: {
                items: 3
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
            320: {
                items: 2
            },
            767: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

    var owl2 = $('.owl-carousel#owl-carousel-webOne');
    owl2.owlCarousel({
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
            320: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

    var owl3 = $('.owl-carousel#owl-carousel-webTwo');
    owl3.owlCarousel({
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
            320: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

    var owl4 = $('.owl-carousel#owl-carousel-webThree');
    owl4.owlCarousel({
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
            320: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

    var count = 0;

    $('.menu img').on('click', function () {
        if ($('div.sidenav').position().left === -250) {
            $('html, body').css({'overflow': 'hidden'});
            $('div.sidenav').animate({
                'left': 0
            }, 200);
            $('.overflow-wrapper').animate({
                'left': 250
            }, 200);
            $('.overflow-wrapper .overflow-wrapper-overlay').removeClass('d-hidden');
            if (count === 0) {
                $('.overflow-wrapper .overflow-wrapper-overlay').css('z-index', '99');
                count += 1;
            }
            $('.overflow-wrapper .overflow-wrapper-overlay').on('click', function () {
                $('div.sidenav').animate({
                    'left': -250
                }, 200);
                $('.overflow-wrapper').animate({
                    'left': 0
                }, 200);
                setTimeout(function () {
                    $('.overflow-wrapper .overflow-wrapper-overlay').addClass('d-hidden');
                    $('html, body').css({'overflow': 'unset'});
                }, 200);

            })
        }
    });


    var owl_our_team = $('.owl-carousel#owl_our_team');
    var owlCarouselTimeout = 2500;
    owl_our_team.owlCarousel({
        loop: true,
        margin: 25,
        autoplay: true,
        autoplayTimeout: owlCarouselTimeout,
        autoplayHoverPause: true,
        nav: true,
        navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
        moveSlides: 1,
        dots: true,
        responsive: {
            320: {
                items: 1
            }
        }
    });
    owl_our_team.on('mouseleave', function () {
        owl_our_team.trigger('stop.owl.autoplay'); //this is main line to fix it
        owl_our_team.trigger('play.owl.autoplay', [owlCarouselTimeout]);
    })


    // var carousel_el_count = 0;
    //
    // $('.our_team_page .custom-carousel .carousel-overflow-wrapper ul li').each(function () {
    //     carousel_el_count += 1;
    // });
    // $('.indicator').width($('.indicator-rail').width());
    // $('.our_team_page .custom-carousel .custom-indicators .fa.fa-arrow-right').on('click', function () {
    //     $('.our_team_page .custom-carousel .carousel-overflow-wrapper ul li').last()
    // })

});
