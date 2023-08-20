document.querySelector(".ri-menu-3-fill").addEventListener("click", function(){
    document.querySelector("#nav-menu").style.top = "0%";
    document.querySelector(".ri-close-line").style.display = "initial";
    document.querySelector(".ri-menu-3-fill").style.display = "none";
});

document.querySelector(".ri-close-line").addEventListener("click", function(){
    document.querySelector("#nav-menu").style.top = "-120%";
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

