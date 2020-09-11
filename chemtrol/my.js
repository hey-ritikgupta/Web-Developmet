document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
        .from('.section_1_bg', 4, {
            y: 70,
            x: 200,
            ease: Power3.easeInOut
        })
        .from('.section_1_01', 4, {
                y: 40,
                x: 100,
                ease: Power3.easeInOut
            },
            '-=4')
        .from('.section_1_01-1', 4, {
            y: 40,
            x: 100,
            ease: Power3.easeInOut
        }, '-=4')

    .from('.section_1_02', 4, {
            y: -10,
            x: -10,

            ease: Power3.easeInOut
        }, '-=4')
        .from('.section_1_03', 4, {
            y: -25,
            x: -60,
            ease: Power3.easeInOut
        }, '-=4')
        .from('.section_1_04', 4, {
            y: -55,
            x: -120,
            ease: Power3.easeInOut
        }, '-=4')
        .from('.section_1_05', 4, {
            y: -80,
            x: -170,
            ease: Power3.easeInOut
        }, '-=4')
        .from('.section_1_06', 4, {
            y: -70,
            x: -190,
            ease: Power3.easeInOut
        }, '-=4')
        .from('.section_1_07', 4, {
            y: -110,
            x: -250,
            ease: Power3.easeInOut
        }, '-=4')
        .from('.section_1_07-1', 4, {
            y: -120,
            x: -280,
            ease: Power3.easeInOut
        }, '-=4')
        .from('.section_1_08', 4, {
            y: -140,
            x: -310,
            ease: Power3.easeInOut
        }, '-=4')
        .from('.section_1_09', 4, {
            y: -140,
            x: -330,
            ease: Power3.easeInOut
        }, '-=4')
        .from('.section_1_10', 4, {
            y: -170,
            x: -410,
            ease: Power3.easeInOut
        }, '-=4')
        .from('.section_1_11', 4, {
            y: -190,
            x: -460,
            ease: Power3.easeInOut
        }, '-=4')
        .from('.section_1_12', 4, {
            y: -200,
            x: -480,
            ease: Power3.easeInOut
        }, '-=4')

    let scene = new ScrollMagic.Scene({
            triggerElement: '.first-section',
            duration: '100%',
            triggerHook: 0,
            offset: '0'
        })
        .setTween(timeline)
        .setPin('.first-section')
        .addTo(controller);
})