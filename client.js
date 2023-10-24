gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
  x: 700,
  duration: 3,
  scrollTrigger: {
    trigger: ".square",
    start: "top 60%",
    end: "top 40%",
    toggleAction:"restart reverse                none none",
  
    markers: {
      startColor: "purple",
      endColor: "fuchsia",
      fontSize: "1rem",
    },

  }
})