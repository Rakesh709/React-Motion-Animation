import React, { useState } from 'react'
import { motion,AnimatePresence } from 'motion/react'
const DismissableAlert = () => {
    const [open, setOpen] = useState(true)
  return (
    <div>
      <button onClick={() => setOpen((o)=> !o)}>
            Toggle Alert
      </button>
      <AnimatePresence mode='wait'>
      {
        open && (
            <motion.div
            initial={{y:-10, opacity:0}}
            animate={{y:0,opacity:1}}
            exit={{y:-10, opacity:0}}
            transition={{duration:0.25}}
            className='alert'
            >
                This is an animation alert!
            </motion.div>
        )
      }
      </AnimatePresence>
    </div>
  )
}

export default DismissableAlert
