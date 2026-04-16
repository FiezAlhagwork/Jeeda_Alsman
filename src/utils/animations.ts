import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (
  target: string | HTMLElement | HTMLElement[],
  animationProps: gsap.TweenVars,
  scrollProps?: ScrollTrigger.Vars
): void => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      // toggleActions: "restart reverse restart reverse",
      ...scrollProps,
    },
  });
};
export const animateWithGsapForm = (
  target: string | HTMLElement | HTMLElement[] | [],
  animationProps: gsap.TweenVars,
  scrollProps?: ScrollTrigger.Vars
): void => {
  gsap.from(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      ...scrollProps,
    },
  });
};


export const animateFromToWithGsap = (
  target: string | HTMLElement | HTMLElement[],
  fromProps: gsap.TweenVars,
  toProps: gsap.TweenVars,
  scrollProps?: ScrollTrigger.Vars
): void => {
  gsap.fromTo(
    target,
    {
      ...fromProps,
    },
    {
      ...toProps,
      scrollTrigger: {
        trigger: Array.isArray(target) ? target[0] : target,
        // toggleActions: "restart reverse restart reverse",
        once: true, // ✅ يشتغل مرة وحدة فقط
        start: "top 80%",
        ...scrollProps,
      },
    }
  );
};