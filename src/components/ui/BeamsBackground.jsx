import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function BeamsBackground({ className }) {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let beams = [];
    let frameCount = 0;

    const updateCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      initializeBeams();
    };

    function initializeBeams() {
      beams = [];
      // Create 12 beams
      for (let i = 0; i < 12; i++) {
        beams.push({
          x: Math.random() * window.innerWidth,
          y: -100,
          speed: 1.0 + Math.random() * 1.5, // Speed between 1.0 and 2.5
          width: 1 + Math.random() * 2,
          opacity: 0.1 + Math.random() * 0.2,
          length: 100 + Math.random() * 200
        });
      }
    }

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    function animate() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Draw every frame for smooth animation
      beams.forEach((beam) => {
        // Create gradient for beam
        const gradient = ctx.createLinearGradient(
          beam.x,
          beam.y,
          beam.x,
          beam.y + beam.length
        );
        gradient.addColorStop(0, `rgba(59, 130, 246, 0)`);
        gradient.addColorStop(0.5, `rgba(59, 130, 246, ${beam.opacity})`);
        gradient.addColorStop(1, `rgba(59, 130, 246, 0)`);

        ctx.shadowBlur = 30;
        ctx.shadowColor = "rgba(59, 130, 246, 0.5)";
        ctx.fillStyle = gradient;
        ctx.fillRect(beam.x - beam.width / 2, beam.y, beam.width, beam.length);

        // Update beam position
        beam.y += beam.speed;

        // Reset beam when it goes off screen
        if (beam.y > window.innerHeight + 100) {
          beam.y = -beam.length;
          beam.x = Math.random() * window.innerWidth;
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className={cn(
        "absolute inset-0 pointer-events-none",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
}
