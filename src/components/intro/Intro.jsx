import React from 'react'
import './intro.css'
import hero from '../../img/logo.png'
import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerContainer } from '../../motionData/motion'

const Intro = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="i-wrapper">
      <motion.div
      variants={fadeIn("right", "tween", 0.2, 1)}
      className="i-left">
        <div className="intro">
          <span>Hey There!</span>
          <span>I'm Habibullah Al Hasib</span>
          <span>I am an enthusiastic editor and writer with a deep commitment to fostering scientific communication and education.</span>
        </div>
        <button className='button i-button'>connect for a meeting</button>
      </motion.div>
      <motion.div
      variants={fadeIn("left", "tween", 0.5, 1.3)}
      className="i-right">
        <div className='img-div'>
          <div className="round"></div>
          <img src={hero} alt="" className='img' />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Intro