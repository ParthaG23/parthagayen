// src/hooks/useGlass.js
// Returns glass style only on desktop — backdrop-filter kills mobile scroll perf

import { useMemo } from "react";

export function useGlass(dark) {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return useMemo(() => {
    if (isMobile) {
      // On mobile: solid semi-transparent bg, NO backdrop-filter
      return {
        background: dark ? "rgba(5,10,2,0.82)" : "rgba(240,247,232,0.88)",
      };
    }
    // Desktop: full glass
    return {
      background: dark ? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.25)",
      backdropFilter: "blur(2px)",
      WebkitBackdropFilter: "blur(2px)",
    };
  }, [dark, isMobile]);
}
