const timeline2021 = gsap.timeline();

timeline2021
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
}, "-=.5")
.from('.video-row img', {
    duration: 1,
    y:100,
    opacity: 0,
    ease: "power2.out"
},"-=2");
    


gsap.registerPlugin(ScrollTrigger);
function init() {

// triggering multiple sections

const boxesp = gsap.utils.toArray('.col-md-4:not(.f-info), .col-12:not(.line)');
boxesp.forEach(box => {
gsap.from(box, {

y: 100,
opacity:0,
scrollTrigger: {
    trigger: box,
    start: 'top bottom-=100',
            end: 'top center',
scrub: true,
}
})
});

}// init

ScrollTrigger.refresh(true);
window.addEventListener('load', function(){
init();
});

const boxes = gsap.utils.toArray('.slide-left');
boxes.forEach(box => {
gsap.from(box, { 
x: 100,
scrollTrigger: {
trigger: box,
scrub: true,
}
})
});

// css: { '-webkit-filter': 'brightness(1.21)' },
const boxes2 = gsap.utils.toArray('.slide-right');
boxes2.forEach(box => {
gsap.from(box, {
x:-100,
scrollTrigger: {
trigger: box,
start: 'top bottom',
end: 'top center',
scrub: true,
}
})
});

