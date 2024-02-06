import React from 'react'
import './Navbar.css'
import { motion } from 'framer-motion'
import {headerVariants} from '../../motionData/motion'

const NavBar = () => {
  return (
    <motion.div
    variants={headerVariants}
    initial="hidden"
    whileInView="show"
    className="n-wrapper">
        <div className="n-right">
           <dev className="n-name"> H Al Hasib </dev>
            <span>toggle</span>
        </div>
        <div className="n-left">
            <div className="n-list">
                <ul>
                    <li><a href="">home</a></li>
                    <li><a href="">about</a></li>
                    <li><a href="">books</a></li>
                </ul>
            </div>
            <button className='button'>contact me</button>
        </div>
    </motion.div>
  )
}

export default NavBar