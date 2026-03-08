import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

const FloatingPlane = ({
    duration = 18,
    opacity = 1,
    top = '35%',
    direction = 'left-to-right',
    width = '140px',
    isActive = false,
    onComplete = () => { },
}) => {
    const isLTR = direction === 'left-to-right';
    const controls = useAnimationControls();

    useEffect(() => {
        if (isActive) {
            controls.set({
                ...(isLTR ? { left: '-15%' } : { right: '-15%' }),
            });
            controls.start({
                ...(isLTR
                    ? { left: ['-40%', '115%'] }
                    : { right: ['-40%', '115%'] }),
            }).then(() => {
                onComplete();
            });
        }
    }, [isActive]);

    return (
        <motion.div
            className="absolute pointer-events-none z-[5]"
            style={{
                top,
                opacity: isActive ? opacity : 0,
                width,
                ...(isLTR
                    ? { left: '-15%' }
                    : { right: '-15%', scaleX: -1 }),
            }}
            animate={controls}
            transition={{
                duration,
                ease: 'linear',
            }}
        >
            <img
                src={`${import.meta.env.BASE_URL}parallax/airplane.svg`}
                alt="aeroplane"
                className="w-full h-auto drop-shadow-[0_0_10px_rgba(87,68,149,0.4)]"
            />
        </motion.div>
    );
};

export default FloatingPlane;
