import React from 'react'
import {motion} from "motion/react"

const AnimationButton = ({
    children,
    stiffness=300,
    damping=15,
    
    }) => {
  return (
    <div>
      <motion.button
      whileHover={{scale:1.05,y:-2}}
      whileTap={{scale:0.9,y:1}}
      transition={{type:"spring",stiffness,damping}}
      >
        {children}
      </motion.button>
    </div>
  )
}

export default AnimationButton
