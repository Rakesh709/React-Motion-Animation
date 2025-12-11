import React from 'react'
import { motion } from 'motion/react'
const DraggableCard = () => {
  return (
    <div className='drag-container'>
        <motion.div className='card' 
        drag dragConstraints={{left:-130,right:130,top:-40,bottom:40}}
        dragElastic={0.2}
        
        >Drag Me!</motion.div>
    </div>
  )
}

export default DraggableCard
