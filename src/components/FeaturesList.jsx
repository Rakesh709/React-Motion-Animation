import React from "react";
import { motion } from "motion/react";

const container = {
  hidden: {opacity: 0},
  vissible: {opacity: 1,transition: { staggerChildren: 0.15, delayChildren:1 },
  },
};



const item = {
  hidden: {opacity: 0,y:20},
  vissible: {opacity: 1,y:20},
};

const FeaturesList = () => {
  const features = ["Fast", "Decarative", "PowerFul", "Fun"];
  return (
    // <motion.ul
    //   initial={{ opacity: 10 }}
    //   animate={{ opacity: 0 }}
    //   transition={{ duration: 1 }}
    // >
    //   {features.map((feature) => (
    //     <motion.li
    //       key={feature}
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ duration: 1 }}
    //     >
    //       {feature}
    //     </motion.li>
    //   ))}

    //   {/* <h3>Fast</h3>
    //         <h3>Decarative</h3>
    //         <h3>PowerFul</h3>
    //         <h3>Fun</h3> */}
    // </motion.ul>

    <motion.ul
      variants={container}
      initial="hidden"
      animate="vissible"
    >
      {features.map((feature) => (
        <motion.li
          key={feature}
          variants={item}
        >
          {feature}
        </motion.li>
      ))}

      {/* <h3>Fast</h3>
            <h3>Decarative</h3>
            <h3>PowerFul</h3>
            <h3>Fun</h3> */}
    </motion.ul>
  );
};

export default FeaturesList;
