import RadioComponent from '../../components/RadioComponent/RadioComponent';
import './radio.css';
import { motion } from "framer-motion";

const Radio = () => {
  return (
    <motion.div
      whileInView={{
        opacity: 1,
        transform: "translateY(0)",
      }}
      initial={{
        opacity: 0,
      }}
      transition={{
        type: "tween",
        duration: 1,
      }}
      className="radio"
    >
      <RadioComponent />
    </motion.div>
  );
};

export default Radio;