import { useEffect, useRef } from "react";

export default function CustomCursor({ dark }) {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const trailRef = useRef([]);
  const rafRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return; // Disable on mobile

    let mouseX = 0;
    let mouseY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      if (cursorRef.current && ringRef.current) {
        cursorRef.current.style.transform =
          `translate3d(${mouseX - 6}px, ${mouseY - 6}px, 0)`;

        ringRef.current.style.transform =
          `translate3d(${mouseX - 20}px, ${mouseY - 20}px, 0)`;
      }

      trailRef.current.forEach((dot, index) => {
        if (dot) {
          dot.style.transform =
            `translate3d(${mouseX}px, ${mouseY}px, 0)`;
          dot.style.opacity = 0.5 - index * 0.08;
        }
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (window.innerWidth < 768) return null;

  return (
    <>
      {/* TRAIL DOTS */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRef.current[i] = el)}
          className="fixed w-2 h-2 rounded-full pointer-events-none z-[9997]"
          style={{
            background: dark
              ? "rgba(163,230,53,0.4)"
              : "rgba(0,0,0,0.3)",
            transition: "transform 0.2s ease-out"
          }}
        />
      ))}

      {/* OUTER RING */}
      <div
        ref={ringRef}
        className="fixed w-10 h-10 rounded-full pointer-events-none z-[9998]"
        style={{
          border: dark
            ? "1.5px solid rgba(163,230,53,0.7)"
            : "1.5px solid rgba(0,0,0,0.6)",
          boxShadow: dark
            ? "0 0 15px rgba(163,230,53,0.5)"
            : "0 0 10px rgba(0,0,0,0.2)",
          transition: "width 0.2s ease, height 0.2s ease"
        }}
      />

      {/* INNER DOT */}
      <div
        ref={cursorRef}
        className="fixed w-3 h-3 rounded-full pointer-events-none z-[9999]"
        style={{
          background: dark ? "#a3e635" : "#111111",
          boxShadow: dark
            ? "0 0 20px rgba(163,230,53,0.8)"
            : "0 0 8px rgba(0,0,0,0.4)"
        }}
      />
    </>
  );
}