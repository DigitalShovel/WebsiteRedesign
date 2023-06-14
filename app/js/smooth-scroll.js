if (window.matchMedia("(min-width: 769px)").matches) {
  // Execute code for non-mobile devices
  // console.log("This code will run on non-mobile devices.");

  /*------------------------------
  Register plugins
  ------------------------------*/
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  /*------------------------------
  Init ScrollSmoother
  ------------------------------*/

  ScrollTrigger.normalizeScroll(true);

  // create the scrollSmoother before your scrollTriggers
  ScrollSmoother.create({
    smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true, // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    normalizeScroll: true, // force the scroll target to always be a positive number
  });
}