import React from 'react'
import './about.css'
import aboutimg from '../../img/bg.jpg'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../../motionData/motion'

const About = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="line">

      </div>
      <motion.div
        variants={fadeIn("right", "tween", 1 * 0.2, 1)}
        className="wrapper">
        <a className='anchor' id='about'></a>
        <div className="left">
          <div className="a-heding">
            <h4>H Al Hasib<span>(Editor of Neuron Publication)</span></h4>
          </div>
          <p>I am thrilled to share with you my journey, passion, and accomplishments as the Editor at Neuron Publication</p>
        </div>
        <div className="right">
          <img src={aboutimg} alt="" />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About