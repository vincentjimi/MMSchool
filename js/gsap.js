const timeline = gsap.timeline();

timeline
    .from('.bounce', {
        duration: 0.5,
        opacity: 0,
        x: -100,
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
    }, "-=2");
    

    const boxp = gsap.utils.toArray('.col-md-4:not(.f-line), .col-12:not(.line)');
boxp.forEach(box => {
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