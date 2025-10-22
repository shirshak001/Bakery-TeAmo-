'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 0.05,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  tag = 'p',
  onLetterAnimationComplete
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Custom split function
  const splitText = (element: HTMLElement, type: 'chars' | 'words') => {
    const textContent = element.textContent || '';
    element.innerHTML = '';
    
    if (type === 'chars') {
      return textContent.split('').map((char) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.className = 'split-char';
        span.style.display = 'inline-block';
        element.appendChild(span);
        return span;
      });
    } else {
      return textContent.split(' ').map((word) => {
        const span = document.createElement('span');
        span.textContent = word;
        span.className = 'split-word';
        span.style.display = 'inline-block';
        span.style.marginRight = '0.25em';
        element.appendChild(span);
        return span;
      });
    }
  };

  useGSAP(() => {
    if (!ref.current || !text) return;
    
    const elements = splitText(ref.current, splitType);
    
    gsap.set(elements, { 
      opacity: 0, 
      y: 40,
      rotationX: 90
    });

    gsap.fromTo(elements, 
      { 
        opacity: 0, 
        y: 40,
        rotationX: 90 
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration,
        ease,
        stagger: delay,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          once: true,
        },
        onComplete: onLetterAnimationComplete,
      }
    );
  }, { scope: ref });

  return (
    <div ref={ref} className={`split-parent ${className}`} data-tag={tag}>
      {text}
    </div>
  );
};

export default SplitText;