import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

const FloatingSatellite = ({
    duration = 18,
    opacity = 1,
    direction = 'left-to-right',
    startX = '-10%',
    endX = '110%',
    startY = '105%',
    peakY = '5%',
    width = '35px',
    isActive = false,
    onComplete = () => { },
}) => {
    const isLTR = direction === 'left-to-right';
    const controls = useAnimationControls();

    const leftKeys = isLTR
        ? [startX, '15%', '35%', '50%', '65%', '85%', endX]
        : [endX, '85%', '65%', '50%', '35%', '15%', startX];

    const topKeys = [peakY, peakY, '10%', '18%', '28%', '38%', '48%'];

    const rotateKeys = isLTR
        ? ['-20deg', '-10deg', '0deg', '5deg', '10deg', '15deg', '20deg']
        : ['20deg', '15deg', '10deg', '5deg', '0deg', '-10deg', '-20deg'];

    useEffect(() => {
        if (isActive) {
            controls.set({
                left: leftKeys[0],
                top: topKeys[0],
                rotate: rotateKeys[0],
            });
            controls.start({
                left: leftKeys,
                top: topKeys,
                rotate: rotateKeys,
            }).then(() => {
                onComplete();
            });
        }
    }, [isActive]);

    return (
        <motion.div
            className="absolute pointer-events-none z-[0]"
            style={{ opacity: isActive ? opacity : 0, width }}
            animate={controls}
            transition={{
                duration,
                ease: 'linear',
            }}
        >
            <img
                src={`${import.meta.env.BASE_URL}parallax/satellite.svg`}
                alt="satellite"
                className="w-full h-auto drop-shadow-[0_0_8px_rgba(209,66,6,0.5)]"
            />

            <div
                className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[4px] h-[4px] rounded-full bg-[#d14206]"
                style={{
                    animation: 'blink 1.5s ease-in-out infinite',
                }}
            />

            <style
                dangerouslySetInnerHTML={{
                    __html: `
            @keyframes blink {
              0%, 100% { opacity: 0.2; box-shadow: none; }
              50% { opacity: 1; box-shadow: 0 0 6px 2px rgba(209,66,6,0.8); }
            }
          `,
                }}
            />
        </motion.div>
    );
};

export default FloatingSatellite;