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
                    ? { left: ['-40%', '160%'] }
                    : { right: ['-40%', '160%'] }),
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
            {/* Plane + Flag container */}
            <div className="relative">
                <img
                    src={`${import.meta.env.BASE_URL}parallax/airplane.svg`}
                    alt="aeroplane"
                    className="w-full h-auto drop-shadow-[0_0_10px_rgba(87,68,149,0.4)]"
                />

                {/* Trailing flag/banner behind the plane */}
                <div
                    className="absolute"
                    style={{
                        top: '45%',
                        right: '75%',
                        transform: 'translateY(-50%)',
                        width: '160%',
                    }}
                >
                    {/* Rope connecting to plane tail */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: '0',
                            width: '20%',
                            height: '2px',
                            background: 'linear-gradient(to left, rgba(209,66,6,0.8), rgba(209,66,6,0.3))',
                            transformOrigin: 'right center',
                            zIndex: 1,
                        }}
                    />

                    {/* Waving flag */}
                    <div
                        className="flag-wave"
                        style={{
                            position: 'relative',
                            width: '80%',
                            padding: '4px 12px',
                            background: '#D8C5AD',
                            borderRadius: '2px 0 0 2px',
                            boxShadow: '0 2px 10px rgba(216,197,173,0.4), 0 0 20px rgba(87,68,149,0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transformOrigin: 'right center',
                        }}
                    >
                        {/* Flag notch cut on left side */}
                        <div
                            style={{
                                position: 'absolute',
                                left: 0,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: 0,
                                height: 0,
                                borderTop: '10px solid transparent',
                                borderBottom: '10px solid transparent',
                                borderLeft: '8px solid rgba(16,11,32,0.6)',
                            }}
                        />
                        <span
                            style={{
                                color: '#574495',
                                fontFamily: "'Oswald', sans-serif",
                                fontSize: '9px',
                                fontWeight: 700,
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                whiteSpace: 'nowrap',
                                textShadow: '0 1px 3px rgba(0,0,0,0.4)',
                            }}
                        >
                            Scroll Down ↓
                        </span>
                    </div>
                </div>
            </div>

            {/* Flag wave animation */}
            <style>{`
                .flag-wave {
                    animation: flagWave 1.2s ease-in-out infinite;
                }
                @keyframes flagWave {
                    0%, 100% {
                        transform: perspective(200px) rotateY(2deg) skewY(-1deg);
                    }
                    25% {
                        transform: perspective(200px) rotateY(-3deg) skewY(1.5deg);
                    }
                    50% {
                        transform: perspective(200px) rotateY(1deg) skewY(-0.5deg);
                    }
                    75% {
                        transform: perspective(200px) rotateY(-2deg) skewY(1deg);
                    }
                }
            `}</style>
        </motion.div>
    );
};

export default FloatingPlane;
