import { FC, ReactNode, useRef, useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  enableMouseEffect?: boolean;
}

/**
 * Glassmorphic card component with backdrop blur
 * NO shadows - uses glassmorphism for depth
 * Optional mouse-following light effect for premium interactivity
 * Respects prefers-reduced-motion for accessibility
 */
export const GlassCard: FC<GlassCardProps> = ({
  children,
  className,
  enableMouseEffect = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const prefersReducedMotion = useReducedMotion();

  // Disable mouse effect if user prefers reduced motion
  const shouldEnableEffect = enableMouseEffect && !prefersReducedMotion;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!shouldEnableEffect || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    if (!shouldEnableEffect) return;
    // Reset to center when mouse leaves
    setMousePosition({ x: 50, y: 50 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "glass-effect rounded-lg relative overflow-hidden",
        className
      )}
    >
      {/* Mouse-following light effect */}
      {shouldEnableEffect && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: mousePosition.x !== 50 || mousePosition.y !== 50 ? 1 : 0,
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(6, 182, 212, 0.2), transparent 40%)`,
            transition: "opacity 0.3s ease-out",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
