import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function WavesBackground({ className, intensity = "medium" }) {
    const canvasRef = useRef(null);
    const animationFrameRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        let time = 0;
        let frameCount = 0;

        const updateCanvasSize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2); // Limit DPR to 2 for performance
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);
        };

        updateCanvasSize();
        window.addEventListener("resize", updateCanvasSize);

        function drawWave(ctx, amplitude, frequency, phase, yOffset, color, opacity) {
            ctx.beginPath();
            ctx.moveTo(0, canvas.height);

            // Reduce points for better performance - draw every 10 pixels instead of every pixel
            for (let x = 0; x <= window.innerWidth; x += 10) {
                const y = 
                    yOffset +
                    amplitude * Math.sin((x * frequency) / 100 + phase);
                
                ctx.lineTo(x, y);
            }

            ctx.lineTo(window.innerWidth, canvas.height);
            ctx.closePath();

            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, `${color}00`);
            gradient.addColorStop(0.5, `${color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
            gradient.addColorStop(1, `${color}${Math.floor(opacity * 200).toString(16).padStart(2, '0')}`);

            ctx.fillStyle = gradient;
            ctx.fill();
        }

        function animate() {
            if (!canvas || !ctx) return;

            // Only update every 2nd frame for better performance (30fps instead of 60fps)
            frameCount++;
            if (frameCount % 2 === 0) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                time += 0.008; // Slower animation

                // Draw only 2 waves instead of 4
                drawWave(
                    ctx,
                    30,
                    0.8,
                    time * 0.5,
                    window.innerHeight * 0.7,
                    '#3B82F6',  // blue-500
                    0.08
                );

                drawWave(
                    ctx,
                    35,
                    1.0,
                    time * 0.6 + 2,
                    window.innerHeight * 0.75,
                    '#8B5CF6',  // purple-500
                    0.06
                );
            }

            animationFrameRef.current = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener("resize", updateCanvasSize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [intensity]);

    return (
        <div
            className={cn(
                "absolute inset-0 overflow-hidden",
                className
            )}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0"
                style={{ filter: "blur(20px)" }}
            />

            {/* Reduced to 2 gradient orbs for performance */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-25 blur-3xl"
                animate={{
                    scale: [1, 1.15, 1],
                    x: [0, 40, 0],
                    y: [0, 25, 0],
                }}
                transition={{
                    duration: 10,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                }}
            />

            <motion.div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-200 to-indigo-200 rounded-full opacity-20 blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, -25, 0],
                    y: [0, -40, 0],
                }}
                transition={{
                    duration: 12,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                }}
            />
        </div>
    );
}
