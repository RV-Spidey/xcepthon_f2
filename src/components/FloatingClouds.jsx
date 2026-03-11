import { motion } from 'framer-motion';

const FloatingCloud = ({ size = 'medium', duration = 20, delay = 0, top = '20%', opacity = 0.6, startX = '-100px', endX = 'calc(100vw + 200px)' }) => {
  const sizeMap = {
    small: 'w-20 h-20',
    medium: 'w-32 h-32',
    large: 'w-48 h-48',
    xlarge: 'w-64 h-64',
  };

  return (
    <motion.div
      className={`absolute ${sizeMap[size]} pointer-events-none z-30`}
      style={{ top, opacity, left: startX }}
      animate={{ x: [`0px`, endX] }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: 'linear',
        delay: delay,
      }}
    >
      <img
        src={`${import.meta.env.BASE_URL}parallax/cloud4-svgrepo-com.svg`}
        alt="cloud"
        className="w-full h-full"
      />
    </motion.div>
  );
};

export default FloatingCloud;
