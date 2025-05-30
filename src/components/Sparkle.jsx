import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Sparkle = () => {
    const cursorRef = useRef(null);
    const sparklesRef = useRef([]);

    useEffect(() => {
        let xPrev = 0;
        let yPrev = 0;
        let timeout;
        let hideTimeout;

        const handleMouseMove = (e) => {
        // Calculate scale based on movement delta and clamp between 0.8 and 1.2
        const xDelta = e.clientX - xPrev;
        const yDelta = e.clientY - yPrev;
        const xScale = gsap.utils.clamp(0.8, 1.2, Math.abs(xDelta));
        const yScale = gsap.utils.clamp(0.8, 1.2, Math.abs(yDelta));
        
        xPrev = e.clientX;
        yPrev = e.clientY;

        // Move and scale cursor circle
        if (cursorRef.current) {
            gsap.to(cursorRef.current, {
            duration: 0.1,
            x: e.clientX,
            y: e.clientY,
            scaleX: xScale,
            scaleY: yScale,
            opacity: 1,
            ease: "power1.out"
            });
        }

        // Create a sparkle at cursor location
        for(let i=0; i<5; i++){
        createSparkle(
            e.clientX + (Math.random() * 20 - 10),
            e.clientY + (Math.random() * 20 - 10)
        );
        }

        clearTimeout(timeout);
        clearTimeout(hideTimeout);

        timeout = setTimeout(() => {
            // Reset scale to normal after some inactivity
            if (cursorRef.current) {
            gsap.to(cursorRef.current, {
                duration: 0.3,
                scaleX: 1,
                scaleY: 1,
                opacity: 1
            });
            }
        }, 100);
        };
        // Hide mini circle after 1 second of no mouse movement
        hideTimeout = setTimeout(() => {
            if (cursorRef.current) {
                gsap.to(cursorRef.current, {
                    duration: 0.5,
                    opacity: 0
            });
        }
    }, 100);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        clearTimeout(timeout);
        clearTimeout(hideTimeout);
        };
    }, []);

    // Create sparkle elements dynamically
    const createSparkle = (x, y) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    document.body.appendChild(sparkle);

        gsap.to(sparkle, {
        duration: 0.8,
        opacity: 0,
        scale: 0,
        x: "+=10",
        y: "-=10",
        ease: "power1.out",
        onComplete: () => {
            sparkle.remove();
        }
        });
    };

    return (
        <>
        <div
            id="minicircle"
            ref={cursorRef}
            style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '8px',
            height: '8px',
            backgroundColor: 'rgba(255, 215, 0, 0.8)',
            borderRadius: '50%',
            pointerEvents: 'none',
            transformOrigin: 'center',
            opacity: 0,
            zIndex: 9999,
            }}
        />
        <style>{`
            .sparkle {
            position: fixed;
            width: 8px;
            height: 8px;
            background: radial-gradient(circle, #ffd700 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            filter: drop-shadow(0 0 3px #ffd700);
            }
        `}</style>
        </>
    );
};

export default Sparkle;
