/*------------------------------
Register plugins
------------------------------*/
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/*------------------------------
Init ScrollSmoother
------------------------------*/

ScrollTrigger.normalizeScroll(true);

// create the scrollSmoother before your scrollTriggers
const scrollerSmoother = ScrollSmoother.create({
  smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});

document.querySelector(".scroll__home").addEventListener("click", () => {
  // scroll to the spot where the bundle section is in the viewport.
  // parameters: element, smooth, position
  scrollerSmoother.scrollTo("#bundle", true, "top 50px");
});

// creates a ScrollTrigger that will fade-in and out the minipod illustrations
gsap.fromTo(
  "#minipod-front",
  2,
  { x: -200, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    ease: Power4.easeOut,
    scrollTrigger: {
      trigger: ".scroll__home",
      start: "top center",
      scrub: 2,
    },
  }
);

gsap.fromTo(
  "#minipod-back",
  2,
  { x: 200, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    ease: Power4.easeOut,
    scrollTrigger: {
      trigger: ".scroll__home",
      start: "top center",
      // markers: "true",
      scrub: 2,
    },
  }
);

gsap.from(".app__mockup", 2, {
  y: 400,
  opacity: 1,
  ease: Power4.easeOut,
  scrollTrigger: {
    trigger: ".app",
    start: "top center",
    // markers: "true",
    scrub: 2,
  },
});

gsap.to(".list-item__heading", 2, {
  y: -20,
  ease: Power4.easeOut,
  scrollTrigger: {
    trigger: ".testimonials__list",
    start: "top center",
    // markers: "true",
    scrub: 2,
  },
});

gsap.to(".list-item__subheading", 2, {
  y: 30,
  ease: Power4.easeOut,
  scrollTrigger: {
    trigger: ".testimonials__list",
    start: "top center",
    // markers: "true",
    scrub: 2,
  },
});
