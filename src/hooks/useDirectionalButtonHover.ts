import { useEffect, useRef } from 'react';

/**
 * Custom hook for directional button hover effect.
 * Creates a circle that follows the mouse position on hover.
 */
export function useDirectionalButtonHover() {
  const buttonRef = useRef<HTMLElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const circle = circleRef.current;

    if (!button || !circle) return;

    const updateCirclePosition = (
      event: MouseEvent,
      btn: HTMLElement,
      c: HTMLDivElement
    ) => {
      const rect = btn.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const centerX = rect.left + w / 2;
      const offsetXFromLeft = ((event.clientX - rect.left) / w) * 100;
      const offsetYFromTop = ((event.clientY - rect.top) / h) * 100;
      let offsetXFromCenter = ((event.clientX - centerX) / (w / 2)) * 50;
      offsetXFromCenter = Math.abs(offsetXFromCenter);
      const circleSize = 115 + offsetXFromCenter * 2;
      c.style.left = `${offsetXFromLeft.toFixed(1)}%`;
      c.style.top = `${offsetYFromTop.toFixed(1)}%`;
      c.style.width = `${circleSize}%`;
    };

    const handleMouseEnter = (e: MouseEvent) => updateCirclePosition(e, button, circle);
    const handleMouseMove = (e: MouseEvent) => updateCirclePosition(e, button, circle);
    const handleMouseLeave = () => {
      const rect = button.getBoundingClientRect();
      const centerX = ((rect.width / 2) / rect.width) * 100;
      const centerY = ((rect.height / 2) / rect.height) * 100;
      circle.style.left = `${centerX}%`;
      circle.style.top = `${centerY}%`;
      circle.style.width = '0%';
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return { buttonRef, circleRef };
}
