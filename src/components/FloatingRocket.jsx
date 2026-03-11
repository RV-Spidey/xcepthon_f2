import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

const FloatingRocket = ({
    duration = 14,
    opacity = 0.9,
    left = '80%',
    startBottom = '-10%',
    endBottom = '110%',
    width = '60px',
    isActive = false,
    onComplete = () => { },
}) => {
    const controls = useAnimationControls();

    useEffect(() => {
        if (isActive) {
            controls.set({ bottom: startBottom });
            controls.start({ bottom: [startBottom, endBottom] }).then(() => {
                onComplete();
            });
        }
    }, [isActive]);

    return (
        <motion.div
            className="absolute pointer-events-none z-[0]"
            style={{
                left,
                bottom: startBottom,
                opacity: isActive ? opacity : 0,
                width,
                transform: 'translateX(-50%)',
            }}
            animate={controls}
            transition={{
                duration,
                ease: 'easeIn',
            }}
        >
            {/* Rocket image and fire stacked vertically */}
            <div className="flex flex-col items-center">
                <img
                    src={`${import.meta.env.BASE_URL}parallax/rocket.svg`}
                    alt="rocket"
                    className="w-full h-auto drop-shadow-[0_0_16px_rgba(209,66,6,0.7)]"
                />

                {/* Fire / Exhaust flames - just below rocket body */}
                <div className="relative w-[40%] h-[40px] sm:h-[50px] md:h-[60px] -mt-[2px] -ml-[10px]">
                    {/* Core flame */}
                    <div
                        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[40%] rounded-full"
                        style={{
                            height: '100%',
                            background: 'linear-gradient(to bottom, #FFFFFF, #FFD700, #d14206, transparent)',
                            animation: 'flicker 0.15s ease-in-out infinite alternate',
                        }}
                    />
                    {/* Mid flame */}
                    <div
                        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[70%] rounded-full opacity-80"
                        style={{
                            height: '80%',
                            background: 'linear-gradient(to bottom, #FFD700, #d14206, #d14206, transparent)',
                            animation: 'flicker 0.2s ease-in-out infinite alternate-reverse',
                        }}
                    />
                    {/* Outer flame */}
                    <div
                        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full rounded-full opacity-50"
                        style={{
                            height: '60%',
                            background: 'linear-gradient(to bottom, #d14206, rgba(209,66,6,0.3), transparent)',
                            animation: 'flickerOuter 0.25s ease-in-out infinite alternate',
                        }}
                    />
                </div>
            </div>

            {/* Flame keyframes */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes flicker {
                    0% { transform: translateX(-50%) scaleX(1) scaleY(1); opacity: 1; }
                    50% { transform: translateX(-50%) scaleX(0.85) scaleY(1.15); opacity: 0.9; }
                    100% { transform: translateX(-50%) scaleX(1.1) scaleY(0.9); opacity: 1; }
                }
                @keyframes flickerOuter {
                    0% { transform: translateX(-50%) scaleX(1) scaleY(1); opacity: 0.5; }
                    50% { transform: translateX(-50%) scaleX(1.2) scaleY(0.8); opacity: 0.3; }
                    100% { transform: translateX(-50%) scaleX(0.9) scaleY(1.1); opacity: 0.6; }
                }
            `}} />
        </motion.div>
    );
};

export default FloatingRocket;
