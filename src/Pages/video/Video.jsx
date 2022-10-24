import React from 'react'
import { motion } from "framer-motion";

const Video = () => {
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
      Video
    </motion.div>
  );
};

export default Video