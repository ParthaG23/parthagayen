import { useEffect } from "react";

export default function ParticleBurst({ dark }) {
  useEffect(() => {
    if (window.innerWidth < 768) return; // Disable on mobile

    const handleClick = (e) => {
      const particleCount = 12; // Reduced from 22

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("span");
        document.body.appendChild(particle);

        particle.style.position = "fixed";
        particle.style.left = e.clientX + "px";
        particle.style.top = e.clientY + "px";
        particle.style.width = "6px";   // Smaller
        particle.style.height = "6px";
        particle.style.borderRadius = "50%";
        particle.style.pointerEvents = "none";
        particle.style.zIndex = "9999";
        particle.style.opacity = "1";

        // 🎨 Optimized Premium Colors
        if (dark) {
          particle.style.background =
            "radial-gradient(circle, #a3e635, #65a30d)";
          particle.style.boxShadow =
            "0 0 10px rgba(163,230,53,0.6)";
        } else {
          particle.style.background =
            "radial-gradient(circle, #6366f1, #1f2937)";
          particle.style.boxShadow =
            "0 0 8px rgba(99,102,241,0.5)";
        }

        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 90; // Reduced from 140

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        particle.animate(
          [
            { transform: "translate3d(0,0,0) scale(1)", opacity: 1 },
            {
              transform: `translate3d(${x}px, ${y}px, 0) scale(0.2)`,
              opacity: 0,
            },
          ],
          {
            duration: 600, // Reduced from 900
            easing: "cubic-bezier(.22,1,.36,1)",
          }
        );

        setTimeout(() => particle.remove(), 600);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [dark]);

  return null;
}