import { useEffect, useRef, useState, type RefObject } from 'react';

/**
 * Tracks which feature card is closest to the viewport center.
 * Works seamlessly for both scroll-down and scroll-up directions.
 */
export function useActiveFeatureScroll(count: number) {
  const [activeFeature, setActiveFeature] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const manualOverride = useRef(false);

  useEffect(() => {
    let rafId: number;

    const update = () => {
      if (manualOverride.current) return;
      const center = window.innerHeight * 0.45;
      let closest = 0;
      let minDist = Infinity;

      featureRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const dist = Math.abs(elCenter - center);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });

      setActiveFeature(closest);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [count]);

  const setManual = (index: number) => {
    manualOverride.current = true;
    setActiveFeature(index);
    // Release override after a short delay so scroll can take over again
    setTimeout(() => { manualOverride.current = false; }, 600);
  };

  return { activeFeature, featureRefs, setActiveFeature: setManual };
}
