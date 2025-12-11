
import './App.css'
import {motion} from "motion/react"
import AnimationButton from './components/AnimationButton'
import FeaturesList from './components/FeaturesList'

function App() {
  

  return (
    <>
      <motion.div
        initial={{opacity:0,y:-100}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.8,ease:"easeIn"}}
        // mosly use easeIn or easeOut
      >
        <h1>Hello world</h1>
      </motion.div>

      <motion.button 
      whileHover={{scale:1.05,y:-2}}
      whileTap={{scale:0.9,y:1}}
      //above combination is taping the button like
      transition={{type:"spring",stiffness:300,damping:15}}
      
      >Click Me</motion.button>
      <br />
      <AnimationButton >Login</AnimationButton>
      <br />
      <FeaturesList/>
    </>
  )
}

export default App
