let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to(".Layer1",3,{y: -600})
    .to(".Layer2",3,{y: -300}, "-=3")
    .to(".Layer3",3,{y: -150}, "-=3")
    .to(".content",3,{top:"0%"}, "-=3")


let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "100%",
    triggerHook: 0,

})
    .setTween(timeline)
    .setPin("section")
    .addTo(controller)

let title = document.getElementById('main-title')
window.addEventListener('scroll', function(){
    let value = this.window.scrollY;
    title.style.marginRight = value*4 + 'px';

})

