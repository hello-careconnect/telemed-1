import { useEffect, useRef, useState } from 'react';

export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    if ('ontouchstart' in window) return;

    const pos = { x: 0, y: 0 };
    const ringPos = { x: 0, y: 0 };
    let animId: number;

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (!visible) setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x - 5}px, ${pos.y - 5}px)`;
      }
    };

    const animate = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.15;
      ringPos.y += (pos.y - ringPos.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.x - 18}px, ${ringPos.y - 18}px)`;
      }
      animId = requestAnimationFrame(animate);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const tag = target.tagName.toLowerCase();
      const isInteractive = tag === 'a' || tag === 'button' || target.closest('a, button, [role="button"], input, select, textarea, label');
      setIsHovering(!!isInteractive);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    animId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(animId);
    };
  }, [visible]);

  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: isText ? 2 : 10,
          height: isText ? 18 : 10,
          borderRadius: isText ? 1 : '50%',
          backgroundColor: '#0A9E8A',
          transition: 'width 0.15s, height 0.15s, border-radius 0.15s',
          transform: `scale(${isHovering ? 1.4 : 1})`,
          opacity: visible ? 1 : 0,
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          width: isHovering ? 48 : 36,
          height: isHovering ? 48 : 36,
          borderRadius: '50%',
          border: '1.5px solid #0A9E8A',
          opacity: visible ? (isText ? 0 : 0.5) : 0,
          backgroundColor: isHovering ? 'rgba(10,158,138,0.08)' : 'transparent',
          transition: 'width 0.2s, height 0.2s, opacity 0.2s, background-color 0.2s',
          marginLeft: isHovering ? -6 : 0,
          marginTop: isHovering ? -6 : 0,
        }}
      />
    </>
  );
};
