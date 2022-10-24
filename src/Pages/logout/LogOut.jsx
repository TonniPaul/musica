import React from 'react'
import { motion } from "framer-motion";

const LogOut = () => {
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
      LogOut
    </motion.div>
  );
};

export default LogOut