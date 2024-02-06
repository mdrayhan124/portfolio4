import React from 'react'
import './contact.css'
import { motion } from "framer-motion"
import { fadeIn, staggerChildren } from '../../motionData/motion'

const Contact = () => {
  return (
    <motion.div
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="c-wrapper">
      <motion.div
        variants={fadeIn("up", "tween", .4, .3)}
        className="c-heading">
        <h2>Have a question?</h2>
        <h4>Book For call.</h4>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "tween", .5, .6)}
        className="c-form">
        <form action="">
          <input type="text" placeholder='name' />
          <input type="email" placeholder='email' />
          <input type="phone" placeholder='phone' />
          <textarea name="anythink " id="" cols="30"></textarea>
          <button type='submit'>submit</button>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default Contact