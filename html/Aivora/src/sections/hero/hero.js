import { gsap } from "gsap";


export function initHeroAnimation() {


  const tl = gsap.timeline({
    defaults:{
      duration:1,
      ease:"power3.out"
    }
  });


  tl.from(".hero-typing-pill",{
    y:-30,
    opacity:0
  })


  .from(".hero-typing-title",{
    y:60,
    opacity:0
  },"-=0.6")


  .from(".hero-typing-sub",{
    y:40,
    opacity:0
  },"-=0.5")


  .from(".hero-typing-actions",{
    y:30,
    opacity:0,
    scale:.95
  },"-=0.4")


  .from(".hero-typing-meta",{
    y:20,
    opacity:0
  },"-=0.4");

}

export function initHeroScroll(){


  gsap.to(".hero-typing",{

    scale:.92,
    borderRadius:"32px",

    scrollTrigger:{

      trigger:".hero-typing",

      start:"top top",

      end:"bottom top",

      scrub:true

    }

  });



}