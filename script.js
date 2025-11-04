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
container1.addEventListener("mousemove", function(detail){
  let rectt = container1.getBoundingClientRect()
  gsap.to("#box-cursor",{
    x: detail.clientX - rectt.left,
    y: detail.clientY - rectt.top
  })
})
container1.addEventListener("mouseenter", function(){
  gsap.to("#box-cursor, #box-cursor h5", {
    scale: 1,
    opacity: 1
  });
});
container1.addEventListener("mouseleave", function(){
  gsap.to("#box-cursor, #box-cursor h5", {
    scale: 0,
    opacity: 0
  });
});
gsap.to("#box-cursor",{
  scale: 1,
  x:"5rem",
  y:"10rem",
  opacity: 1,
  scrollTrigger:{
    trigger:".container1",
    scroller:"#main",
    start:"top 30%",
    end:"bottom 0%",
    toggleActions: "play reverse play reverse"
  }
})
}

boxcursorAnimation()

function box2cursorAnimation(){
  let imgLeft = document.querySelector("#img-left")
imgLeft.addEventListener("mousemove", function(Detail){
  let recT = imgLeft.getBoundingClientRect()
  gsap.to("#box2-cursor",{
    x: Detail.clientX - recT.left,
    y: Detail.clientY - recT.top
  })
})
imgLeft.addEventListener("mouseenter", function(){
  gsap.to("#box2-cursor, #box2-cursor h5", {
    scale: 1,
    opacity: 1
  });

});
imgLeft.addEventListener("mouseleave", function(){
  gsap.to("#box2-cursor, #box2-cursor h5", {
    scale: 0,
    opacity: 0
  });
});
gsap.to("#box2-cursor",{
  scale: 1,
  x:"5rem",
  y:"10rem",
  opacity: 1,
  scrollTrigger:{
    trigger:"#img-left",
    scroller:"#main",
    start:"top 30%",
    end:"bottom 0%",
    toggleActions: "play reverse play reverse"
  }
})

}

box2cursorAnimation()


function box3cursorAnimation(){
  let imgRight = document.querySelector("#img-right")
imgRight.addEventListener("mousemove", function(Detail){
  let recT = imgRight.getBoundingClientRect()
  gsap.to("#box3-cursor",{
    x: Detail.clientX - recT.left,
    y: Detail.clientY - recT.top
  })
})
imgRight.addEventListener("mouseenter", function(){
  gsap.to("#box3-cursor, #box3-cursor h5", {
    scale: 1,
    opacity: 1
  });
});
imgRight.addEventListener("mouseleave", function(){
  gsap.to("#box3-cursor, #box3-cursor h5", {
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

  gsap.to(page6cont,{
    scale: 1,
    duration: 10,
    ease: "power4.inout",
    scrollTrigger:{
      trigger:".page6 .page6-cont",
      scroller: "#main",
      start: "top 80%",
      end: "top 20%",
      scrub:true
    }
  })
}

page6Animation()

function page7Animation(){
  let page7center = document.querySelector(".page7-center");
let page7h2 = document.querySelector(".page7-center h2");
let page7h3 = document.querySelector(".page7-center h3");

page7center.addEventListener("mouseenter", function () {
  page7h3.style.borderBottom = "1px solid #000";
  page7h2.style.borderBottom = "none";

  gsap.to(".page7-center h2, .page7-center h3", {
    y: "-10vh",
    duration: 0.5,
  });
});

page7center.addEventListener("mouseleave", function () {
  page7h3.style.borderBottom = "none";
  page7h2.style.borderBottom = "1px solid #000";

  gsap.to(".page7-center h2, .page7-center h3", {
    y: "0vh",
    duration: 0.5,
  });
});
}

page7Animation()

function page8Animation(){
  let page8h1 = document.querySelector(".page8-bottom h1");

let page8 = document.querySelector(".page8")

let splith1 =  page8h1.textContent.split("")

let clutt = ""

let splitttt = splith1.forEach(function(dett){
  clutt += `<span>${dett}</span>`
})

page8h1.innerHTML = clutt

  gsap.from(".page8-bottom h1 span",{
    y: -100,
    duration: .5,
    opacity: 0,
    stagger: .14,
    scrollTrigger: {
      trigger: ".page8",
      scroller: "#main",
      start: "top 70%",
      end: "top 75%"
    }
  })
}

page8Animation()

function navAnimation(){
  gsap.to("nav", {
  color: "black",
  scrollTrigger: {
    trigger: ".page5",
    scroller: "#main",
    start: "top 5%",
    endTrigger: ".page7", 
    end: "bottom 5%",
    scrub: true,           
  }
});

gsap.to("nav", {
  color: "white",
  scrollTrigger: {
    trigger: ".page8",
    scroller: "#main",
    start: "top 5%",
    end: "bottom 5%",
    scrub: true,
  }
});


gsap.to(".nav-txt h2, .nav-txt h3",{
  transform:`translateY(-100%)`,
  scrollTrigger:{
    trigger:".page1",
    scroller:"#main",
    start: "top -50%",
    end: "top -55%",
    scrub:.9,
  }
})
}

navAnimation()

function videoAnimation(){
  let cursorh5 = document.querySelector(".page2")
let playvideo = document.querySelector(".play-video")

let cursorr = document.querySelector("#cursorr")
let videodiv = document.querySelector(".video-div")

videodiv.addEventListener("mousemove", function(des){
    let rectts = videodiv.getBoundingClientRect();

    gsap.to(cursorr, {
        x: des.clientX - rectts.left,
        y: des.clientY - rectts.top
    });
});

cursorh5.addEventListener("click", function(){
  gsap.to(".video-div", {
    rotate: 0,
    scale: 1,
    duration: .6,
    display: "block",
  })
   
  playvideo.play()
})

cursorr.addEventListener("click", function(){
  gsap.to(".video-div", {
    scale: 0,
    duration: .6,
    display: "none"
  })
  playvideo.pause()
})
}

videoAnimation()
