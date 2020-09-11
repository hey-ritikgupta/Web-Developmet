// ------------------------------------------------
// Project Name: Crispio Coming Soon & Landing Page Template for Agencies and Freelansers
// Project Description: Crispio - trendy coming soon & landing page template to kick-start your project
// Tags: crispio, coming soon, under construction, template, coming soon page, landing page, one page, html5, css3
// Version: 1.0.0
// Build Date: April 2019
// Last Update: April 2019
// This product is available exclusively on Themeforest
// Author: mix_design
// Author URI: http://mixdesign.club
// File name: crispio-custom.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. Loader
//  2. Main Section Loading Animation
//  3. Swiper Slider Settings
//  4. Custom Scrollbar Settings
//  5. Skillbar Settings
//  6. YTPlayer Settings
//  7. Vegas Settings
//  8. KBW-Countdown Settings
//  9. Mailchimp Notify Form
//  10. Write a Line Form
//  11. ParticlesJS Backgrounds
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(window).on("load", function() {

  "use strict";

  // --------------------------------------------- //
  // Loader Start
  // --------------------------------------------- //
  setTimeout(function(){
    $(".loader-logo").removeClass('animate-in').addClass('animate-out');
  },800);

  setTimeout(function(){
    $('body').removeClass('overflow-hidden');
    $(".loader").addClass('fade loaded');
  },1600);
  // --------------------------------------------- //
  // Loader End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Main Section Loading Animation Start
  // --------------------------------------------- //
  setTimeout(function(){
    $('body').addClass('loaded');
  },1600);
  // --------------------------------------------- //
  // Main Section Loading Animation End
  // --------------------------------------------- //

});

$(function() {

  "use strict";

  // --------------------------------------------- //
  // Swiper Slider Settings Start
  // --------------------------------------------- //
  var slider = $('.media-slider');

  if (slider.length) {
    var swiper = new Swiper('.swiper-container', {
      grabCursor: true,
      speed: 800,
      autoplay: {
        delay: 8000,
      },
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  };
  // --------------------------------------------- //
  // Swiper Slider Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Custom Scrollbar Settings Start
  // --------------------------------------------- //
  $(window).on("load",function(){
    $(".content-section__info, .writealine__content").mCustomScrollbar({
      autoHideScrollbar: false
    });
  });
  // --------------------------------------------- //
  // Custom Scrollbar Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Skillbar Settings Start
  // --------------------------------------------- //
  $('.skillbar').skillBars({
    from: 0,
    speed: 4000,
    interval: 100,
  });
  // --------------------------------------------- //
  // Skillbar Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // YTPlayer Start
  // --------------------------------------------- //
  var bgndVideo = $("#bgndVideo"),
      bgndVideoControls = $("#bgndVideoControls");

  if(bgndVideo.length){
    bgndVideo.mb_YTPlayer({
      mute: true,
      containment: '#video-wrapper',
      showControls:false,
      autoPlay:true,
      loop:true,
      startAt:0,
      quality:'default'
    });
  };
  // --------------------------------------------- //
  // YTPlayer End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Vegas Kenburns Start
  // --------------------------------------------- //
  var bgndKenburns1 = $('#bgndKenburns-1');
  if(bgndKenburns1.length){
    bgndKenburns1.vegas({
      timer: false,
      delay: 10000,
      transition: 'fade2',
      transitionDuration: 2000,
      slides: [
        { src: "img/backgrounds/bg-main-3.jpg" },
        { src: "img/backgrounds/bg-main-4.jpg" },
        { src: "img/backgrounds/bg-main-5.jpg" }
      ],
      animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
    });
  };

  var bgndKenburns2 = $('#bgndKenburns-2');
  if(bgndKenburns2.length){
    bgndKenburns2.vegas({
      timer: false,
      delay: 10000,
      transition: 'fade2',
      transitionDuration: 2000,
      slides: [
        { src: "img/backgrounds/bg-main-9.jpg" },
        { src: "img/backgrounds/bg-main-10.jpg" },
        { src: "img/backgrounds/bg-main-11.jpg" }
      ],
      animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
    });
  };
  // --------------------------------------------- //
  // Vegas Kenburns End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // KBW-Countdown Start
  // --------------------------------------------- //
  $('#countdown').countdown({until: $.countdown.UTCDate(+10, 2020, 9, 20), format: 'D'});
  // --------------------------------------------- //
  // KBW-Countdown End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Mailchimp Notify Form Start
  // --------------------------------------------- //
  $('.notify-form').ajaxChimp({
    callback: mailchimpCallback,
    url: 'https://besaba.us10.list-manage.com/subscribe/post?u=e8d650c0df90e716c22ae4778&amp;id=044a9e439d'
  });

  function mailchimpCallback(resp) {
    if(resp.result === 'success') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-ok').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.notify').find('.subscription-ok').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    } else if(resp.result === 'error') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-error').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.notify').find('.subscription-error').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    }
  };
  // --------------------------------------------- //
  // Mailchimp Notify Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Write a Line Form Start
  // --------------------------------------------- //
  $("#writealine-form").submit(function() { //Change
   var th = $(this);
   $.ajax({
     type: "POST",
     url: "mail.php", //Change
     data: th.serialize()
   }).done(function() {
      $('.writealine').find('.form').addClass('is-hidden');
      $('.writealine').find('.reply-group').addClass('is-visible');
     setTimeout(function() {
       // Done Functions
        $('.writealine').find('.reply-group').removeClass('is-visible');
        $('.writealine').find('.form').delay(300).removeClass('is-hidden');
       th.trigger("reset");
     }, 5000);
   });
   return false;
  });
  // --------------------------------------------- //
  // Write a Line Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // ParticlesJS Backgrounds Start
  // --------------------------------------------- //
  $(window).on("load", function() {

    // Sparkles BG - particlesJS
    var bgndSparkles = $('#sparkles-js');
    if (bgndSparkles.length) {
      particlesJS('sparkles-js', {
        "particles": {
          "number": {
            "value": 500,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.3,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 2,
              "opacity_min": 0.05,
              "sync": false
            }
          },
          "size": {
            "value": 2,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 2,
              "size_min": 1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 0.2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": true,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
    };

    // Particles BG - particlesJS
    var bgndParticles = $('#particles-js');
    if (bgndParticles.length) {
      particlesJS('particles-js', {
          "particles": {
            "number": {
              "value": 80,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 1,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.3,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 80,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 180,
              "color": "#ffffff",
              "opacity": 0.7,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 3,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              },
              "onclick": {
                "enable": false,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 800,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 800,
                "size": 80,
                "duration": 2,
                "opacity": 0.8,
                "speed": 3
              },
              "repulse": {
                "distance": 100,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        });
    };

  });
  // --------------------------------------------- //
  // ParticlesJS Backgrounds End
  // --------------------------------------------- //

});
