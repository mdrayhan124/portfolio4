import React from 'react'
import './work.css'
import Bg from '../../img/bg3.jpg'
import Bg2 from '../../img/bg4.jpg'
import Bg3 from '../../img/bg5.jpg'
import Bg4 from '../../img/bg6.jpg'
import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerContainer } from '../../motionData/motion'

const Work = () => {
    return (
        <motion.div
        style={{overflow:'hidden'}}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="w-wrapper">
            <motion.div
                variants={slideIn("left", "tween", 4, .4)}
                className="worklist">
                <div className="w-img">
                    <a className='anchor' id='work'></a>
                    <img src={Bg} alt="" />
                </div>
                <h5>Neuron Nursing Coaching</h5>
            </motion.div>
            <motion.div
                variants={slideIn("left", "tween", 3, .3)}
                className="worklist">
                <div className="w-img">
                    <img src={Bg2} alt="" />
                </div>
                <h5>Neuron Nursing Coaching</h5>
            </motion.div>
            <motion.div
                variants={slideIn("left", "tween", 2, .2)}
                className="worklist">
                <div className="w-img">
                    <img src={Bg3} alt="" />
                </div>
                <h5>Neuron Nursing Coaching</h5>
            </motion.div>
            <motion.div
                variants={slideIn("left", "tween", 1, .1)}
                className="worklist">
                <div className="w-img">
                    <img src={Bg4} alt="" />
                </div>
                <h5>Neuron Nursing Coaching</h5>
            </motion.div>
        </motion.div>
    )
}

export default Work