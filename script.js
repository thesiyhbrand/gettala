function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()


document.querySelector(".ri-menu-3-fill").addEventListener("click", function(){
    document.querySelector("#nav-menu").style.top = "0%";
    document.querySelector(".ri-close-line").style.display = "initial";
    document.querySelector(".ri-menu-3-fill").style.display = "none";
});

document.querySelector(".ri-close-line").addEventListener("click", function(){
    document.querySelector("#nav-menu").style.top = "-150%";
    document.querySelector(".ri-close-line").style.display = "none";
    document.querySelector(".ri-menu-3-fill").style.display = "initial";
});


// gsap ---

var tl = gsap.timeline();

tl.from("nav",{
    duration: 1,
    opacity: 0,
})
.from(".part-1-top h1",{
    y: 100,
    opacity: 0,
})
.from(".part-1-lft",{
    y: 100,
    opacity: 0,
}, 'a')
.from(".part-1-rght",{
    y: 100,
    opacity: 0,
}, 'a')
.from(".part-2",{
    y: 100,
    opacity: 0,
})


var part2 = gsap.timeline({scrollTrigger:{
    trigger: ".part-2",
    start : "10% 90%",
    end:"50% 80%",
    scrub: true,
    // markers: true,
    duration: 1,
}});

part2.to(".part-2-img-container",{
    width: "100%",
})


var part3 = gsap.timeline({scrollTrigger:{
    trigger: ".part-3",
    start : "50% 90%",
    end:"80% 80%",
    scrub: true,
    duration: 1,
    // markers: true,
}})

part3.from(".part-3 h1",{
    y: 100,
    opacity: 0,
})

var part4 = gsap.timeline({scrollTrigger:{
    trigger: ".part-4",
    start : "10% 90%",
    end:"30% 90%",
    scrub: true,
    duration: 1,
    // markers: true,
}})
part4.from(".line",{
    width: "0%",
    opacity: 0,
})
part4.from(".item1",{
    y: 100,
    opacity: 0,
})
part4.from(".item2",{
    y: 100,
    opacity: 0,
})
part4.from(".item3",{
    y: 100,
    opacity: 0,
})

var partf4 = gsap.timeline({scrollTrigger:{
    trigger: ".part-4",
    start : "50% 90%",
    end:"70% 90%",
    scrub: true,
    duration: 1,
    // markers: true,
}})
partf4.from(".tagline",{
    y: 100,
    opacity: 0,
})


var parts4 = gsap.timeline({scrollTrigger:{
    trigger: ".part-4",
    start : "80% 90%",
    end:"100% 90%",
    scrub: true,
    duration: 1,
    // markers: true,
}})
parts4.from(".tagline2",{
    y: 100,
    opacity: 0,
})

var part7 = gsap.timeline({scrollTrigger:{
    trigger: ".part-7",
    start : "50% 90%",
    end:"200% 90%",
    scrub: true,
    duration: 1,
    // markers: true,
}})
part7.to(".strip-r",{
    x: "-30vw",
}, 'strip')
part7.to(".strip-l",{
    x: "30vw",
}, 'strip')



document.querySelector(".item1").addEventListener("mousemove", function(){
    document.querySelector("#packone").style.display = "initial";
})
document.querySelector(".item1").addEventListener("mouseleave", function(){
    document.querySelector("#packone").style.display = "none";
})

document.querySelector(".item2").addEventListener("mousemove", function(){
    document.querySelector("#packtwo").style.display = "initial";
})
document.querySelector(".item2").addEventListener("mouseleave", function(){
    document.querySelector("#packtwo").style.display = "none";
})

document.querySelector(".item3").addEventListener("mousemove", function(){
    document.querySelector("#packthree").style.display = "initial";
})
document.querySelector(".item3").addEventListener("mouseleave", function(){
    document.querySelector("#packthree").style.display = "none";
})

var float = document.querySelector(".items-p");
var swing = 0;
var diffswing = 0;

float.addEventListener("mousemove", function(dets){
    diffswing = dets.clientX - swing;
    swing = dets.clientX;
    gsap.to(".pack", {
        ease: Power1,
        top: dets.clientY,
        left: dets.clientX,
        xPercent: -60,
        yPercent: -130,
        rotate: gsap.utils.clamp(-100, 100, diffswing*0.3),
    });
})

