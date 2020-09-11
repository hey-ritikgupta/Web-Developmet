/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

    "use strict";

    var Itsource = {
        init: function() {
            this.Basic.init();
        },

        Basic: {
            init: function() {

                this.preloader();
                this.Pointer();
                this.Animation();
                this.StickeyHeader();
                this.MobileMenu();
                this.MianSlider();
                this.bannerStyle();
                this.BackgroundImage();
                this.searchPopUp();
                this.SideInner();
                this.cartArea();
                this.counterUp();
                this.scrollTop();
                this.videoBox();
                this.blogSlider();
                this.FeatureSlider();
                this.CirleProgress();
                this.portfolioSlide();
                this.testiSlider();
                this.ProjectFilter();
                this.faqShadow();
                this.ContactForm();

            },
            preloader: function() {
                jQuery(window).on('load', function() {
                    jQuery('#preloader').fadeOut('slow', function() { jQuery(this).remove(); });
                });
            },
            Animation: function() {
                if ($('.wow').length) {
                    var wow = new WOW({
                        boxClass: 'wow',
                        animateClass: 'animated',
                        offset: 0,
                        mobile: true,
                        live: true
                    });
                    wow.init();
                }
            },
            StickeyHeader: function() {
                jQuery(window).on('scroll', function() {
                    if (jQuery(window).scrollTop() > 100) {
                        jQuery('.it-header-area').addClass('sticky-header-overlay')
                    } else {
                        jQuery('.it-header-area').removeClass('sticky-header-overlay')
                    }
                })
            },
            MobileMenu: function() {
                $('.open_mobile_menu').on("click", function() {
                    $('.mobile_menu_wrap').toggleClass("mobile_menu_on");
                });
                $('.open_mobile_menu').on('click', function() {
                    $('body').toggleClass('mobile_menu_overlay_on');
                });
                if ($('.mobile_menu-dropdown li.dropdown ul').length) {
                    $('.mobile_menu-dropdown li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
                    $('.mobile_menu-dropdown li.dropdown .dropdown-btn').on('click', function() {
                        $(this).prev('ul').slideToggle(500);
                    });
                }
                $(".dropdown-btn").on("click", function() {
                    $(this).toggleClass("toggle-open");
                });
            },
            MianSlider: function() {
                jQuery('#slider-id').owlCarousel({
                    items: 1,
                    margin: 0,
                    loop: true,
                    nav: true,
                    dots: false,
                    navSpeed: 800,
                    autoplay: true,
                    navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
                    smartSpeed: 2000,
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
                });
            },
            bannerStyle: function() {
                var win = jQuery(window),
                    foo = jQuery('#typer');
                foo.typer(['It Services', 'It Solution', 'Support']);
                win.resize(function() {
                    var fontSize = Math.max(Math.min(win.width() / (1 * 5), parseFloat(Number.POSITIVE_INFINITY)), parseFloat(Number.NEGATIVE_INFINITY));

                }).resize();

            },
            BackgroundImage: function() {
                $('[data-background]').each(function() {
                    $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
                });
            },
            searchPopUp: function() {
                $('.search-btn').on('click', function() {
                    $('.search-body').toggleClass('search-open');
                });
            },
            cartArea: function() {
                $('.cart-open-btn').on('click', function() {
                    $('.shopping-cart').toggleClass('cart-show');
                });
            },
            SideInner: function() {
                $('.open_side_area').on("click", function() {
                    $('.wide_side_inner').toggleClass("wide_side_on");
                });
                $('.open_side_area').on('click', function() {
                    $('body').toggleClass('body_overlay_on');
                });
            },
            scrollTop: function() {
                $(window).on("scroll", function() {
                    if ($(this).scrollTop() > 200) {
                        $('.scrollup').fadeIn();
                    } else {
                        $('.scrollup').fadeOut();
                    }
                });

                $('.scrollup').on("click", function() {
                    $("html, body").animate({
                        scrollTop: 0
                    }, 800);
                    return false;
                });
            },
            Pointer: function() {
                if ($('#cursor').length) {
                    var follower, init, mouseX, mouseY, positionElement, timer;
                    follower = document.getElementById('cursor');
                    mouseX = (event) => {
                        return event.clientX;
                    };
                    mouseY = (event) => {
                        return event.clientY;
                    };
                    positionElement = (event) => {
                        var mouse;
                        mouse = {
                            x: mouseX(event),
                            y: mouseY(event)
                        };
                        follower.style.top = mouse.y + 'px';
                        return follower.style.left = mouse.x + 'px';
                    };
                    timer = false;
                    window.onmousemove = init = (event) => {
                        var _event;
                        _event = event;
                        return timer = setTimeout(() => {
                            return positionElement(_event);
                        }, 0);
                    };
                    $("html").easeScroll();
                };
            },
            counterUp: function() {
                if ($('.counter').length) {
                    jQuery('.counter').counterUp({
                        delay: 50,
                        time: 2000,
                    });
                };
            },
            FeatureSlider: function() {
                jQuery('#feature-slide').owlCarousel({
                    items: 1,
                    loop: true,
                    nav: false,
                    dots: true,
                    autoplay: true,
                    navSpeed: 800,
                    smartSpeed: 1000,
                });
            },
            videoBox: function() {
                jQuery('.video_box').magnificPopup({
                    disableOn: 200,
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: false,
                });
            },
            blogSlider: function() {
                jQuery('#blod_slide').owlCarousel({
                    items: 1,
                    loop: true,
                    nav: true,
                    dots: false,
                    autoplay: false,
                    navSpeed: 800,
                    smartSpeed: 1000,
                    animateOut: 'fadeOut',
                    navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
                });
            },
            CirleProgress: function() {
                if ($('.progress_area').length) {;
                    (function() {
                        var proto = $.circleProgress.defaults,
                            originalDrawEmptyArc = proto.drawEmptyArc;

                        proto.emptyThickness = 5;
                        proto.drawEmptyArc = function(v) {
                            var oldGetThickness = this.getThickness,
                                oldThickness = this.getThickness(),
                                emptyThickness = this.emptyThickness || _oldThickness.call(this),
                                oldRadius = this.radius,
                                delta = (oldThickness - emptyThickness) / 2;

                            this.getThickness = function() {
                                return emptyThickness;
                            };

                            this.radius = oldRadius - delta;
                            this.ctx.save();
                            this.ctx.translate(delta, delta);

                            originalDrawEmptyArc.call(this, v);

                            this.ctx.restore();
                            this.getThickness = oldGetThickness;
                            this.radius = oldRadius;
                        };
                    })();
                    $('.progress_area').circleProgress({
                        emptyThickness: 2,
                        size: 130,
                        thickness: 5,
                        lineCap: 'round',
                        fill: {
                            gradient: ['#B3B3B3', ['#B3B3B3', 0.7]],
                            gradientAngle: Math.PI * -0.3
                        }
                    });

                    $('.first.progress_area').circleProgress({
                        value: .65,
                        thickness: 6,
                        emptyFill: '#ffffff38',
                    }).on('circle-animation-progress', function(event, progress) {
                        $(this).find('strong').html(Math.round(65 * progress) + '<span>%</span>');
                    });
                    $('.secound.progress_area').circleProgress({
                        value: .5,
                        thickness: 6,
                        emptyFill: '#ffffff38',
                    }).on('circle-animation-progress', function(event, progress) {
                        $(this).find('strong').html(Math.round(50 * progress) + '<span>%</span>');
                    });
                    var el = $('.progress_area'),
                        inited = false;
                    el.appear({ force_process: true });

                    el.on('appear', function() {
                        if (!inited) {
                            el.circleProgress();
                            inited = true;
                        }
                    });
                };
            },
            portfolioSlide: function() {
                $(window).on('load', function() {
                    $('#portfolio-slide').owlCarousel({
                        margin: 30,
                        responsiveClass: true,
                        nav: true,
                        dots: false,
                        loop: true,
                        center: true,
                        lazyLoad: true,
                        autoplay: false,
                        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
                        smartSpeed: 1000,
                        responsive: {
                            0: {
                                items: 1,
                            },
                            400: {
                                items: 1,
                            },
                            600: {
                                items: 1,
                            },
                            700: {
                                items: 2,
                            },
                            1000: {
                                items: 2,

                            },
                            1300: {
                                items: 3,

                            },
                            1900: {
                                items: 4,

                            },
                        },
                    })
                });
            },
            testiSlider: function() {
                jQuery('#testimonial-slide').owlCarousel({
                    items: 1,
                    nav: false,
                    dots: true,
                    loop: true,
                    margin: 30,
                    autoplay: false,
                    smartSpeed: 1000,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true,
                    animateIn: 'lightSpeedIn'
                });
            },
            ProjectFilter: function() {
                var $grid = $('.grid').imagesLoaded(function() {
                    $grid.masonry({
                        percentPosition: true,
                        itemSelector: '.grid-item',
                        columnWidth: '.grid-sizer'
                    });
                });
                var $grid = $(".grid").isotope({
                    itemSelector: ".grid-item",
                    layoutMode: "fitRows"
                });
                var filterFns = {
                    numberGreaterThan50: function() {
                        var number = $(this)
                            .find(".number")
                            .text();
                        return parseInt(number, 10) > 50;
                    },
                    ium: function() {
                        var name = $(this)
                            .find(".name")
                            .text();
                        return name.match(/ium$/);
                    }
                };
                $(".button-group").on("click", "button", function() {
                    var filterValue = $(this).attr("data-filter");
                    filterValue = filterFns[filterValue] || filterValue;
                    $grid.isotope({ filter: filterValue });
                });

                $(".button-group").each(function(i, buttonGroup) {
                    var $buttonGroup = $(buttonGroup);
                    $buttonGroup.on("click", "button", function() {
                        $buttonGroup.find(".is-checked").removeClass("is-checked");
                        $(this).addClass("is-checked");
                    });
                });
            },
            faqShadow: function() {
                $(".faq_area1").on('click', function() {
                    $(".faq_area1").removeClass("active");
                    $(this).addClass("active");
                });
                $(".faq_area2").on('click', function() {
                    $(".faq_area2").removeClass("active");
                    $(this).addClass("active");
                });
            },
            ContactForm: function() {
                if ($('#contact_form').length) {
                    $('#contact_form').validate({
                        rules: {
                            name: {
                                required: true
                            },
                            email: {
                                required: true,
                            },
                            phone: {
                                required: true
                            },
                            subject: {
                                required: true
                            },
                            message: {
                                required: true
                            }
                        }
                    });
                }
            },
        }
    }
    jQuery(document).ready(function() {
        Itsource.init();
    });

})();