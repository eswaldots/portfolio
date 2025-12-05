// CustomScroll.jsx

import { useLenis } from "lenis/react";
import { useScroll } from "motion/react";
import { useLayoutEffect } from "react";

export const useCustomScroll = () => {
  const lenis = useLenis();

  // Create Framer Motion's scroll motion values
  const { scrollYProgress, scrollY } = useScroll();

  // 4. Update Framer Motion's internal scroll position whenever Lenis scrolls
  useLayoutEffect(() => {
    if (lenis) {
      const unsubscribe = lenis.on("scroll", ({ scroll, limit }) => {
        // Manually update the Framer Motion scroll motion values
        scrollY.set(scroll);
        scrollYProgress.set(scroll / limit);
      });

      return () => {
        // Note: Lenis doesn't expose a direct 'off' method for event listeners,
        // but `lenis.on()` returns a function to unsubscribe in newer versions.
        // If not, you might need a different approach to manage the subscription.
      };
    }
  }, [lenis, scrollY, scrollYProgress]);

  return { scrollY, scrollYProgress };
};
