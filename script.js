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
let boxh5 = document.querySelector("#box-cursor h5")

container1.addEventListener("mousemove", function(detail){
  let rectt = container1.getBoundingClientRect()
  gsap.to(boxCursor,{
    x: detail.clientX - rectt.left,
    y: detail.clientY - rectt.top
  })

  gsap.to(boxh5,{
    x: detail.clientX - rectt.left - "0vw",
    y: detail.clientY - rectt.top -  "0vw"
  })
})

container1.addEventListener("mouseenter", function(){
  gsap.to(boxCursor, {
    scale: 1,
    opacity: 1
  });

  gsap.to(boxh5, {
    scale: 1,
    opacity: 1
  });
});

container1.addEventListener("mouseleave", function(){
  gsap.to(boxCursor, {
    scale: 0,
    opacity: 0
  });

  gsap.to(boxh5, {
    scale: 0,
    opacity: 0
  });
});
}

boxcursorAnimation()

function box2cursorAnimation(){
  let imgLeft = document.querySelector("#img-left")
let box2Cursor = document.querySelector("#box2-cursor")
let box2h5 = document.querySelector("#box2-cursor h5")

imgLeft.addEventListener("mousemove", function(Detail){
  let recT = imgLeft.getBoundingClientRect()
  gsap.to(box2Cursor,{
    x: Detail.clientX - recT.left,
    y: Detail.clientY - recT.top
  })

  gsap.to(box2h5,{
    x: Detail.clientX - recT.left - "0vw",
    y: Detail.clientY - recT.top -  "0vw"
  })
})

imgLeft.addEventListener("mouseenter", function(){
  gsap.to(box2Cursor, {
    scale: 1,
    opacity: 1
  });

  gsap.to(box2h5, {
    scale: 1,
    opacity: 1
  });
});

imgLeft.addEventListener("mouseleave", function(){
  gsap.to(box2Cursor, {
    scale: 0,
    opacity: 0
  });

  gsap.to(box2h5, {
    scale: 0,
    opacity: 0
  });
});
}

box2cursorAnimation()


function box3cursorAnimation(){
  let imgRight = document.querySelector("#img-right")
let box3Cursor = document.querySelector("#box3-cursor")
let box3h5 = document.querySelector("#box3-cursor h5")

imgRight.addEventListener("mousemove", function(Detail){
  let recT = imgRight.getBoundingClientRect()
  gsap.to(box3Cursor,{
    x: Detail.clientX - recT.left,
    y: Detail.clientY - recT.top
  })

  gsap.to(box3h5,{
    x: Detail.clientX - recT.left - "0vw",
    y: Detail.clientY - recT.top -  "0vw"
  })
})

imgRight.addEventListener("mouseenter", function(){
  gsap.to(box3Cursor, {
    scale: 1,
    opacity: 1
  });

  gsap.to(box3h5, {
    scale: 1,
    opacity: 1
  });
});

imgRight.addEventListener("mouseleave", function(){
  gsap.to(box3Cursor, {
    scale: 0,
    opacity: 0
  });

  gsap.to(box3h5, {
    scale: 0,
    opacity: 0
  });
});
}

box3cursorAnimation()

function swiperAnimation(){
  var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed:20000,
  autoplay: {
    delay: 500,
    disableOnInteraction: true,
  },
});
}

swiperAnimation()

function page6Animation(){
  
  let page6 = document.querySelector(".page6")
let page6cont = document.querySelector(".page6-cont")

page6.addEventListener("mouseenter", function(){
  gsap.to(page6cont,{
    scale: 1,
    duration: 10,
    ease: "power4.inout",
    scrollTrigger:{
      trigger:".page6 .page6-cont",
      scroller: "#main",
      // markers:true,
      start: "top 80%",
      end: "top 20%",
      scrub:true
    }
  })
})
}

page6Animation()
