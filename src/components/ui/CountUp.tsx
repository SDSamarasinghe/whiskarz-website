import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface CountUpProps {
  end: number;
  duration?: number; // seconds
  suffix?: string;
  prefix?: string;
  decimals?: number; // number of decimal places if end has decimals
  className?: string;
  once?: boolean; // animate only first time in view
}

/**
 * CountUp component: Animates a number from 0 to `end` when it enters the viewport.
 */
export const CountUp = ({
  end,
  duration = 1.8,
  suffix = '',
  prefix = '',
  decimals,
  className,
  once = true,
}: CountUpProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer: IntersectionObserver | null = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!hasAnimated || !once)) {
            const start = performance.now();
            const animate = (time: number) => {
              const progress = Math.min((time - start) / (duration * 1000), 1);
              const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
              const value = end * eased;
              setDisplay(value);
              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setDisplay(end);
                setHasAnimated(true);
              }
            };
            requestAnimationFrame(animate);
            if (observer) observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(target);
    return () => observer && observer.disconnect();
  }, [end, duration, once, hasAnimated]);

  const formatted = (() => {
    const dec = decimals !== undefined ? decimals : (end % 1 !== 0 ? 1 : 0);
    return dec === 0 ? Math.round(display).toString() : display.toFixed(dec);
  })();

  return (
    <motion.span ref={ref} className={className} aria-live="polite">
      {prefix}
      {formatted}
      {suffix}
    </motion.span>
  );
};

export default CountUp;
