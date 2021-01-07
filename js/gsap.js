const timeline = gsap.timeline();
const timeline2020 = gsap.timeline();

timeline
    .from('.bounce', {
        duration: 1,
        opacity: 0,
        y: -100,
        height: 0,
        ease: "power2.out",
        stagger: 0.2,
    
    })
    .from(['#scene', '#scene2', '#scene3', '#scene4', '#scene5', '#scene6', '#scene7', '#scene8'], {
        duration: 5,
        y: -1000,
        ease: "bounce",
        stagger: 0.2
    
    }, "-=3")
    .from('.navbar-index', {
        duration: 1,
        y: -100,
        ease: "power2.out"
    },"-=2")
    

timeline2020
    .from('.video-row video', {
        duration: 2,
        opacity: 0,
        y: -1000,
        ease: "power2.out",
        stagger: 0.2
    
    })
    .from('.navbar2020', {
        duration: 1,
        y: -100,
        ease: "power2.out"
    })
    .from('.video-row img', {
        duration: 1,
        y:100,
        opacity: 0,
        ease: "power2.out"
    },"-=2");
        


    gsap.registerPlugin(ScrollTrigger);
function init() {
    
    // triggering multiple sections

    const projects = document.querySelectorAll('.container');
    projects.forEach((project) => {

        gsap.from(project, {
            opacity: 0,
            yPercent: 50,
            stagger:0.5,
            scrollTrigger: {
                trigger: project.querySelector('.header-h1'),
                start: 'top bottom-=100',
                end: 'top center',
                toggleActions: 'play none none reverse',
                markers: true
            }// end of scroll trigger
        });// end of from
    }); // end of forEach project

}// init

ScrollTrigger.refresh(true);
window.addEventListener('load', function(){
    init();
});

const boxes = gsap.utils.toArray('.slide-left');
boxes.forEach(box => {
gsap.from(box, { 
    x: 300,
    scrollTrigger: {
    trigger: box,
    scrub: true,
    }
})
});

// css: { '-webkit-filter': 'brightness(1.21)' },
const boxes2 = gsap.utils.toArray('.slide-right');
boxes2.forEach(box => {
    gsap.fromTo(box, {
        x: -150
    }, {
        x:30,
    scrollTrigger: {
        trigger: box,
        start: 'top bottom',
        end: 'top center',
        scrub: true,
    }
})
});