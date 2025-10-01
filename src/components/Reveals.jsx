import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Reveals = ({ children, delay = 0.2, yOffset = 50 }) => {

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : yOffset }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveals
