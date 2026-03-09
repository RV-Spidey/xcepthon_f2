import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(
    () => window.innerWidth >= 768,
  );

  useEffect(() => {
    const onResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!isLargeScreen) return;

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let ring = { x: mouse.x, y: mouse.y };
    let raf;

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Snap the dot instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.x}px, ${mouse.y}px) translate(-50%, -50%)`;
      }

      // Check if hovering something clickable
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const cur = el ? window.getComputedStyle(el).cursor : "default";
      setIsPointer(cur === "pointer");
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    // Smooth lag trail for the ring
    const animate = () => {
      ring.x += (mouse.x - ring.x) * 0.14;
      ring.y += (mouse.y - ring.y) * 0.14;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
    };
  }, [isLargeScreen]);

  if (!isLargeScreen) return null;

  return (
    <>
      {/* Outer ring (lagged trail) */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
        style={{
          width: isPointer ? 44 : 36,
          height: isPointer ? 44 : 36,
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.9)",
          boxShadow:
            "0 0 14px rgba(255,255,255,0.8), 0 0 28px rgba(255,255,255,0.4)",
          transition:
            "width 0.2s, height 0.2s, border-color 0.2s, box-shadow 0.2s",
          transform: "translate(-50%, -50%)",
          backgroundColor: isClicking
            ? "rgba(255,255,255,0.15)"
            : "transparent",
        }}
      />

      {/* Inner energy dot (instant) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
        style={{
          width: isClicking ? 10 : isPointer ? 8 : 6,
          height: isClicking ? 10 : isPointer ? 8 : 6,
          borderRadius: "50%",
          background: "radial-gradient(circle, #ffffff, #e5e5e5)",
          boxShadow:
            "0 0 10px rgba(255,255,255,1), 0 0 20px rgba(255,255,255,0.7)",
          transform: "translate(-50%, -50%)",
          transition:
            "width 0.15s, height 0.15s, background 0.2s, box-shadow 0.2s",
        }}
      />
    </>
  );
};

export default CustomCursor;
