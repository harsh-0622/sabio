$(function () {
    var owl = $('.owl-carousel.owl-carousel-clients-xs');
    owl.owlCarousel({
        loop: false,
        margin: 40,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        nav: true,
        navText: [""],
        slideBy: 'page',
        dots: false,
        autoplaySpeed: 450,
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

    //Play/Pause button toggle script

    var btn = $(".button");
    btn.click(function() {
        btn.toggleClass("paused");
        return false;
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
        navText: ["<img src='img/team/Arrow_back.svg' width='20px'>", "<img src='img/team/Arrow_forward.svg' width='20px'>"],
        moveSlides: 1,
        dots: true,
        responsive: {
            320: {
                items: 1
            }
        }
    });
    owl_our_team.on('changed.owl.carousel', function (event) {
        page_no = event.page && event.page.index ? event.page.index + 1 : 1;
        $('.our_team_page .owl-parent .owl-page-count .current-page-count').html('0' + page_no).siblings('.total-page-count').html('/ 0' + event.page.count);
        //parent.find('div:nth-child(1)').addClass('active').siblings().removeClass('active');
        /*
        * var parent = $(div);
        * parent.find('div')
        * */

    });
    owl_our_team.on('mouseleave', function () {
        owl_our_team.trigger('stop.owl.autoplay'); //this is main line to resume auto-play
        owl_our_team.trigger('play.owl.autoplay', [owlCarouselTimeout]);
    });

    var owl_our_services = $('.owl-carousel#sync1');
    owl_our_services.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: owlCarouselTimeout,
        autoplayHoverPause: true,
        nav: false,
        navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
        moveSlides: 1,
        dots: true,
        responsive: {
            320: {
                items: 1
            }
        }
    });

    var owl_our_services_rightside = $('.owl-carousel#sync2');
    owl_our_services_rightside.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: owlCarouselTimeout,
        autoplayHoverPause: true,
        nav: false,
        navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
        moveSlides: 1,
        dots: true,
        responsive: {
            320: {
                items: 1
            }
        }
    });

    /*********** Play/Pause button toggle script ****************/

    $('.position-play-button .play-button-container .button').on('click', function () {
        var video = $('#video').get(0);
        video.play();
        if ( video.paused ) {
            $(".play").hide();
            $(".pause").show();
        } else {
            $('.sabio-video img').animate({
                'opacity': 0
            });
            $(this).closest('.position-play-button .play-button-container').animate({
                'opacity': 0
            });
            $(this).css('pointer-events', 'none');
        }
    });

    $('#video').on('ended', function () {
        $('.sabio-video img').animate({
            'opacity': 1
        });
        $('.position-play-button .play-button-container').animate({
            'opacity': 1
        });
        $('.position-play-button .play-button-container .button').removeClass('paused');
        $('.position-play-button .play-button-container .button').css('pointer-events', 'unset');
    });
});
