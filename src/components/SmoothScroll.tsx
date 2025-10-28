'use client';

import React, { useEffect, useRef, ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  animationDuration?: number;
  delay?: number;
  scrollStart?: string;
  scrollEnd?: string;
  fromDirection?: 'top' | 'bottom' | 'left' | 'right' | 'fade';
  distance?: number;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  animationDuration = 0.8,
  delay = 0,
  scrollStart = 'top bottom-=100px',
  scrollEnd = 'bottom top',
  fromDirection = 'bottom',
  distance = 50
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    const fromVars: { [key: string]: number | string } = {
      opacity: 0,
      ease: 'power2.out'
    };

    const toVars: { [key: string]: number | string } = {
      opacity: 1,
      duration: animationDuration,
      delay: delay,
      ease: 'power2.out'
    };

    // Set animation direction
    switch (fromDirection) {
      case 'top':
        fromVars.y = -distance;
        toVars.y = 0;
        break;
      case 'bottom':
        fromVars.y = distance;
        toVars.y = 0;
        break;
      case 'left':
        fromVars.x = -distance;
        toVars.x = 0;
        break;
      case 'right':
        fromVars.x = distance;
        toVars.x = 0;
        break;
      case 'fade':
        // Only opacity animation
        break;
    }

    gsap.fromTo(el, fromVars, {
      ...toVars,
      scrollTrigger: {
        trigger: el,
        scroller,
        start: scrollStart,
        end: scrollEnd,
        toggleActions: 'play none none reverse'
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === el) {
          trigger.kill();
        }
      });
    };
  }, [scrollContainerRef, animationDuration, delay, scrollStart, scrollEnd, fromDirection, distance]);

  return (
    <div ref={elementRef} className={`smooth-scroll-wrapper ${containerClassName}`}>
      {children}
    </div>
  );
};

export default SmoothScroll;