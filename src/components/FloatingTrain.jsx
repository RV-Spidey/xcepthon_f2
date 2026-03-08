import { motion } from 'framer-motion';

const FloatingTrain = ({
    duration = 25,
    delay = 0,
    opacity = 1,
    bottom = '42%',
    direction = 'right-to-left',
    width = '120px',
}) => {
    const isRTL = direction === 'right-to-left';

    return (
        <motion.div
            className="absolute pointer-events-none"
            style={{
                bottom,
                opacity,
                width,
                ...(isRTL
                    ? { right: '-15%', scaleX: -1 }
                    : { left: '-15%' }),
            }}
            animate={{
                ...(isRTL
                    ? { right: ['-15%', '115%'] }
                    : { left: ['-15%', '115%'] }),
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: 'linear',
                delay,
            }}
        >
            <img
                src={`${import.meta.env.BASE_URL}parallax/train.svg`}
                alt="train"
                className="w-full h-auto"
            />
        </motion.div>
    );
};

export default FloatingTrain;
