import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const AnimatedSection = ({
  children,
  className,
  initial = { opacity: 0, y: 50 },
  whileInView = { opacity: 1, y: 0 },
  transition = { duration: 0.8, ease: 'easeOut' },
  viewport = { once: false, amount: 0.2 },
}) => {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
};

AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  initial: PropTypes.object,
  whileInView: PropTypes.object,
  transition: PropTypes.object,
  viewport: PropTypes.object,
};

export default AnimatedSection;
