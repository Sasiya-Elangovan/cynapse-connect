import { useEffect, useRef } from 'react';

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const animationId = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Smooth lerp for fluid movement
      const lerp = 0.08;
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * lerp;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * lerp;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px) translate(-50%, -50%)`;
      }

      animationId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 pointer-events-none z-50 w-[400px] h-[400px] rounded-full opacity-30 mix-blend-screen will-change-transform"
      style={{
        background: 'radial-gradient(circle, hsl(330 100% 60% / 0.15) 0%, hsl(280 100% 65% / 0.08) 40%, transparent 70%)',
      }}
    />
  );
};

export default CursorGlow;
