'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let raf = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = `${mx}px`;
      dot.style.top = `${my}px`;
    };

    const loop = () => {
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      raf = requestAnimationFrame(loop);
    };

    const handleMouseLeave = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    };

    const grow = () => {
      dot.style.width = '12px';
      dot.style.height = '12px';
      ring.style.width = '50px';
      ring.style.height = '50px';
      ring.style.opacity = '0.5';
    };

    const shrink = () => {
      dot.style.width = '7px';
      dot.style.height = '7px';
      ring.style.width = '32px';
      ring.style.height = '32px';
      ring.style.opacity = '1';
    };

    const handleOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('a')) grow();
    };
    const handleOut = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('a')) shrink();
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);
    raf = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        id="cur"
        ref={dotRef}
        className="fixed z-[9999] h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold pointer-events-none transition-[width,height] duration-[250ms] mix-blend-normal"
      />
      <div
        id="cur-r"
        ref={ringRef}
        className="fixed z-[9998] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/40 pointer-events-none transition-[width,height,opacity] duration-[250ms] mix-blend-normal"
      />
    </>
  );
}
