"use client";

import { useEffect, useState, memo } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ScrollAnimations() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Inicializar Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time: number) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // Animaciones de entrada
    const serviceArticles = document.querySelectorAll(".animation-scroll");
    serviceArticles.forEach((article) => {
      const elementsToAnimate = article.querySelectorAll(".animate-on-scroll");

      elementsToAnimate.forEach((el, index) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20, scale: 0.7 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            delay: index * 0.15,
            immediateRender: false,
            scrollTrigger: {
              trigger: article,
              start: "top 70%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.ticker.remove((time: number) => lenis.raf(time * 1000));
    };
  }, [mounted]);

  return null;
}

function ScrollFixedImage() {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".banner-section",
      start: "top top",
      end: "bottom top",
      pin: ".banner-image",
      scrub: true,
    });
  }, []);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".cro-section",
      start: "top top",
      end: "bottom top",
      pin: ".cro-image",
      scrub: true,
    });
  }, []);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".blessing-section",
      start: "top top",
      end: "bottom top",
      pin: ".blessing-image",
      scrub: true,
    });
  }, []);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".goodParents-section",
      start: "top top",
      end: "bottom top",
      pin: ".goodParents-image",
      scrub: true,
    });
  }, []);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".itinerary-section",
      start: "top top",
      end: "bottom top",
      pin: ".itinerary-image",
      scrub: true,
    });
  }, []);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".gitTable-section",
      start: "top top",
      end: "bottom top",
      pin: ".gitTable-image",
      scrub: true,
    });
  }, []);

  return null;
}

// ✅ Exporta ambos componentes memorizados
export const MemoScrollAnimations = memo(ScrollAnimations);
export const MemoScrollFixedImage = memo(ScrollFixedImage);
