'use client';

import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';

const useMedia = (queries: string[], values: number[], defaultValue: number): number => {
  const [value, setValue] = useState<number>(defaultValue);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    const getMatch = () => {
      const index = queries.findIndex(q => window.matchMedia(q).matches);
      return values[index] ?? defaultValue;
    };

    // Set initial value
    setValue(getMatch());

    const handler = () => setValue(getMatch());
    
    queries.forEach(q => window.matchMedia(q).addEventListener('change', handler));
    return () => queries.forEach(q => window.matchMedia(q).removeEventListener('change', handler));
  }, [queries, values, defaultValue]);

  return value;
};

const useMeasure = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size] as const;
};

const preloadImages = async (urls: string[]): Promise<void> => {
  await Promise.all(
    urls.map(
      src =>
        new Promise<void>(resolve => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

interface Item {
  id: string;
  img: string;
  url: string;
  height: number;
}

interface GridItem extends Item {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface MasonryProps {
  items: Item[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: 'bottom' | 'top' | 'left' | 'right' | 'center' | 'random';
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;
}

const Masonry: React.FC<MasonryProps> = ({
  items,
  ease = 'power3.out',
  duration = 0.6,
  stagger = 0.05,
  animateFrom = 'bottom',
  scaleOnHover = true,
  hoverScale = 1.05,
  blurToFocus = true,
  colorShiftOnHover = false
}) => {
  const columns = useMedia(
    ['(min-width:1200px)', '(min-width:768px)', '(min-width:480px)'],
    [4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure<HTMLDivElement>();
  const [imagesReady, setImagesReady] = useState(false);

  useEffect(() => {
    preloadImages(items.map(i => i.img)).then(() => setImagesReady(true));
  }, [items]);

  const grid = useMemo<GridItem[]>(() => {
    if (!width) return [];
    const colHeights = new Array(columns).fill(0);
    const gap = 20;
    const totalGaps = (columns - 1) * gap;
    const columnWidth = (width - totalGaps) / columns;

    return items.map(child => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = col * (columnWidth + gap);
      const height = child.height / 2;
      const y = colHeights[col];

      colHeights[col] += height + gap;
      return { ...child, x, y, w: columnWidth, h: height };
    });
  }, [columns, items, width]);

  const hasMounted = useRef(false);

  const getInitialPositionCallback = React.useCallback((item: GridItem) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    // Check if window is available (client-side)
    if (typeof window === 'undefined') return { x: item.x, y: item.y };

    let direction = animateFrom;
    if (animateFrom === 'random') {
      const dirs = ['top', 'bottom', 'left', 'right'];
      direction = dirs[Math.floor(Math.random() * dirs.length)] as typeof animateFrom;
    }

    switch (direction) {
      case 'top':
        return { x: item.x, y: -200 };
      case 'bottom':
        return { x: item.x, y: window.innerHeight + 200 };
      case 'left':
        return { x: -200, y: item.y };
      case 'right':
        return { x: window.innerWidth + 200, y: item.y };
      case 'center':
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2
        };
      default:
        return { x: item.x, y: item.y + 100 };
    }
  }, [animateFrom, containerRef]);

  useLayoutEffect(() => {
    if (!imagesReady) return;

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const element = document.querySelector(selector) as HTMLElement;
      const innerElement = element?.querySelector('.masonry-item-inner') as HTMLElement;
      
      if (!element || !innerElement) return;

      // Apply positioning and dimensions
      element.style.left = `${item.x}px`;
      element.style.top = `${item.y}px`;
      element.style.width = `${item.w}px`;
      element.style.height = `${item.h}px`;

      // Apply background image
      innerElement.style.backgroundImage = `url(${item.img})`;

      const animProps = { x: item.x, y: item.y, width: item.w, height: item.h };

      if (!hasMounted.current) {
        const start = getInitialPositionCallback(item);
        gsap.fromTo(
          selector,
          {
            opacity: 0,
            x: start.x,
            y: start.y,
            width: item.w,
            height: item.h,
            ...(blurToFocus && { filter: 'blur(10px)' })
          },
          {
            opacity: 1,
            ...animProps,
            ...(blurToFocus && { filter: 'blur(0px)' }),
            duration: 0.8,
            ease: 'power3.out',
            delay: index * stagger
          }
        );
      } else {
        gsap.to(selector, {
          ...animProps,
          duration,
          ease,
          overwrite: 'auto'
        });
      }
    });

    hasMounted.current = true;
  }, [grid, imagesReady, stagger, blurToFocus, duration, ease, getInitialPositionCallback]);

  const handleMouseEnter = (id: string) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"] .masonry-item-inner`, {
        scale: hoverScale,
        duration: 0.4,
        ease: 'power2.out'
      });
    }
    if (colorShiftOnHover) {
      gsap.to(`[data-key="${id}"] .color-overlay`, { 
        opacity: 0.3, 
        duration: 0.3 
      });
    }
  };

  const handleMouseLeave = (id: string) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"] .masonry-item-inner`, {
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      });
    }
    if (colorShiftOnHover) {
      gsap.to(`[data-key="${id}"] .color-overlay`, { 
        opacity: 0, 
        duration: 0.3 
      });
    }
  };

  return (
    <div ref={containerRef} className="masonry-wrapper">
      {grid.map(item => (
        <div
          key={item.id}
          data-key={item.id}
          className="masonry-item"
          onClick={() => window.open(item.url, '_blank', 'noopener')}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={() => handleMouseLeave(item.id)}
        >
          <div className="masonry-item-inner">
            {colorShiftOnHover && (
              <div className="color-overlay" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Masonry;
