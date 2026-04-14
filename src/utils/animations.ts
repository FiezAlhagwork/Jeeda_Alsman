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
  target: string | HTMLElement | HTMLElement[],
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