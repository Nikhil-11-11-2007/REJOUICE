function locomotiveAnimation(){
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
locomotiveAnimation()

function cursorAnimation(){
let cursor = document.querySelector("#cursor")
let page2 = document.querySelector(".page2")

page2.addEventListener("mousemove", function(dets){
    let rect = page2.getBoundingClientRect();

    gsap.to(cursor, {
        x: dets.clientX - rect.left,
        y: dets.clientY - rect.top
    });
});

page2.addEventListener("mouseenter", function(){
    gsap.to(cursor, {
        scale: 1,
        opacity: 1
    });
});

page2.addEventListener("mouseleave", function(){
    gsap.to(cursor, {
        scale: 0,
        opacity: 0
    });
});

}
cursorAnimation()

function paragraphAnimation(){
  let page3 = document.querySelectorAll(".page3 p");

page3.forEach((ptag) => {
  let words = ptag.textContent.split(".");
  let clutter = "";

  words.forEach(function(e, i) {
    clutter += `<span class="word${i}"><p>${e}</p></span>`;
  });

  ptag.innerHTML = clutter;
});

gsap.from(".page3 span p ", {
  y: 120,
  stagger: .5,
  duration: 7,
  scrollTrigger: {
    trigger: ".page3",
    scroller: "#main",
    // markers: true,
    start: "top 55%",
    end: "top 45%",
    scrub: 2
  }
});

}
paragraphAnimation()

function stunningWords(){
  let h1 = document.querySelector(".page1-content>h1")

let h1text = h1.textContent

let splitted = h1text.split("")

let clutr = ""

splitted.forEach(function(el){
  clutr += `<span>${el}</span>`
})

h1.innerHTML = clutr

gsap.from("h1 span", {
  y:-60,
  duration: .5,
  opacity: 0,
  stagger: .1
})
}

stunningWords()

function boxcursorAnimation(){
  let container1 = document.querySelector(".container1")
let boxCursor = document.querySelector("#box-cursor")

container1.addEventListener("mousemove", function(detail){
  let rectt = container1.getBoundingClientRect()
  gsap.to(boxCursor,{
    x: detail.clientX - rectt.left,
    y: detail.clientY - rectt.top
  })
})

container1.addEventListener("mouseenter", function(){
  gsap.to(boxCursor, {
    scale: 1,
    opacity: 1
  });
});

container1.addEventListener("mouseleave", function(){
  gsap.to(boxCursor, {
    scale: 0,
    opacity: 0
  });
});
}

boxcursorAnimation()