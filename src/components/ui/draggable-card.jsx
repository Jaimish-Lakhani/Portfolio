import { cn } from "../../lib/utils";
import React, { useRef, useState, useEffect } from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    animate,
    useVelocity,
    useAnimationControls,
} from "framer-motion";

export const DraggableCardBody = ({
    className,
    children,
    initialPosition = { x: 0, y: 0 }
}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const cardRef = useRef(null);
    const controls = useAnimationControls();
    const [isDragging, setIsDragging] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [constraints, setConstraints] = useState({
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    });

    // Physics for smooth movement
    const velocityX = useVelocity(mouseX);
    const velocityY = useVelocity(mouseY);

    const springConfig = {
        stiffness: 100,
        damping: 20,
        mass: 0.5,
    };

    // Remove 3D rotation effects - keep card flat
    const rotateX = useSpring(0, springConfig);
    const rotateY = useSpring(0, springConfig);

    // Keep opacity stable - no animation
    const opacity = useSpring(1, springConfig);

    const glareOpacity = useSpring(0, springConfig); // Remove glare effect

    useEffect(() => {
        // Update constraints for full document dragging with absolute positioning
        const updateConstraints = () => {
            if (typeof window !== "undefined") {
                // Responsive card dimensions
                const isMobile = window.innerWidth < 768;
                const cardWidth = isMobile ? 320 : 480; // Smaller on mobile
                const cardHeight = isMobile ? 480 : 720; // Smaller on mobile
                
                // Get the full document height for vertical movement
                const documentHeight = Math.max(
                    document.body.scrollHeight,
                    document.body.offsetHeight,
                    document.documentElement.clientHeight,
                    document.documentElement.scrollHeight,
                    document.documentElement.offsetHeight
                );

                // Mobile-specific constraints for better touch scrolling
                if (isMobile) {
                    setConstraints({
                        top: 60, // Slightly smaller top margin for mobile
                        left: -cardWidth * 0.6, // Less aggressive hiding on mobile
                        right: window.innerWidth - (cardWidth * 0.4), // Keep more visible for easier dragging
                        bottom: documentHeight - cardHeight,
                    });
                } else {
                    setConstraints({
                        top: 80, // Below header (header is ~80px high)
                        left: -cardWidth * 0.8, // Allow 80% of card to go outside left border
                        right: window.innerWidth - (cardWidth * 0.2), // Allow 80% of card to go outside right border
                        bottom: documentHeight - cardHeight, // Can drag to the very end of the document
                    });
                }
            }
        };

        updateConstraints();
        window.addEventListener("resize", updateConstraints);
        // Update constraints when content changes
        const observer = new MutationObserver(updateConstraints);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("resize", updateConstraints);
            observer.disconnect();
        };
    }, []);

    const handleMouseMove = (e) => {
        // Remove 3D mouse tracking effects
        // Keep function for potential future use but disable 3D effects
        return;
    };

    const handleMouseLeave = () => {
        // Remove 3D reset effects
        return;
    };

    // Effect to add/remove blur to page content when dragging or hovering
    useEffect(() => {
        const shouldBlur = isDragging || isHovering;
        const blurIntensity = isDragging ? '8px' : '6px'; // More intense blur, especially when dragging
        
        if (shouldBlur) {
            // Add blur class to all main content containers except the draggable card
            const elementsToBlur = [
                'header',
                'main',
                'section',
                'article',
                'aside',
                'footer',
                '.hero-section',
                '.content-section',
                'nav',
                '.container',
                '.page-content'
            ];
            
            elementsToBlur.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(element => {
                    // Only blur if it's not the card container or its parent
                    if (!element.closest('[data-draggable-card]') && !element.querySelector('[data-draggable-card]')) {
                        element.style.filter = `blur(${blurIntensity})`;
                        element.style.transition = 'filter 0.4s ease';
                    }
                });
            });
        } else {
            // Remove blur from all elements
            const elementsToUnblur = [
                'header',
                'main', 
                'section',
                'article',
                'aside',
                'footer',
                '.hero-section',
                '.content-section',
                'nav',
                '.container',
                '.page-content'
            ];
            
            elementsToUnblur.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(element => {
                    element.style.filter = '';
                    element.style.transition = 'filter 0.4s ease';
                });
            });
        }

        // Cleanup function
        return () => {
            const elementsToUnblur = [
                'header',
                'main',
                'section', 
                'article',
                'aside',
                'footer',
                '.hero-section',
                '.content-section',
                'nav',
                '.container',
                '.page-content'
            ];
            
            elementsToUnblur.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(element => {
                    element.style.filter = '';
                    element.style.transition = '';
                });
            });
        };
    }, [isDragging, isHovering]);

    return (
        <motion.div
            ref={cardRef}
            drag
            dragConstraints={constraints}
            dragElastic={0.1}
            dragTransition={{
                bounceStiffness: 100,
                bounceDamping: 10,
                power: 0.3,
                timeConstant: 200
            }}
            initial={initialPosition}
            onDragStart={() => {
                document.body.style.cursor = "grabbing";
                setIsDragging(true);
                // Prevent page scrolling when dragging on mobile
                document.body.style.overflow = 'hidden';
                document.body.style.touchAction = 'none';
            }}
            onDragEnd={(event, info) => {
                document.body.style.cursor = "default";
                setIsDragging(false);
                // Re-enable page scrolling
                document.body.style.overflow = '';
                document.body.style.touchAction = '';

                // Remove rotation reset since we disabled 3D effects
                // Keep momentum animation for smooth feel
                const currentVelocityX = velocityX.get();
                const currentVelocityY = velocityY.get();

                const velocityMagnitude = Math.sqrt(
                    currentVelocityX * currentVelocityX +
                    currentVelocityY * currentVelocityY,
                );
                const bounce = Math.min(0.8, velocityMagnitude / 1000);

                // Smooth momentum after drag ends
                animate(info.point.x, info.point.x + currentVelocityX * 0.2, {
                    duration: 0.6,
                    ease: [0.2, 0, 0, 1],
                    bounce,
                    type: "spring",
                    stiffness: 60,
                    damping: 15,
                    mass: 0.8,
                });

                animate(info.point.y, info.point.y + currentVelocityY * 0.2, {
                    duration: 0.6,
                    ease: [0.2, 0, 0, 1],
                    bounce,
                    type: "spring",
                    stiffness: 60,
                    damping: 15,
                    mass: 0.8,
                });
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{
                willChange: "transform",
                position: "absolute", // Absolute positioning so it moves with page content
                zIndex: isDragging ? 45 : 40, // Below header (z-50) but above content
                // Improve touch performance on mobile
                touchAction: 'none',
            }}
            data-draggable-card="true"
            animate={controls}
            whileDrag={{ zIndex: 45 }}
            className={cn(
                "relative overflow-hidden rounded-2xl bg-background shadow-2xl cursor-grab active:cursor-grabbing border border-purple-600 select-none",
                // Responsive dimensions
                "w-[320px] h-[480px] md:w-[480px] md:h-[720px]",
                // Touch-friendly on mobile
                "touch-manipulation",
                className,
            )}
        >
            {children}
            <motion.div
                style={{
                    opacity: glareOpacity,
                }}
                className="pointer-events-none absolute inset-0 bg-white/10 select-none rounded-2xl"
            />
        </motion.div>
    );
};

export function DraggableCardContainer({ className, children }) {
    return (
        <div className={cn("", className)}>
            {children}
        </div>
    );
}
