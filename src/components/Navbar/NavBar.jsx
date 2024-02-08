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
                    <li><a href="#home">home</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#books">books</a></li>
                    <li><a href="#work">work</a></li>
                </ul>
            </div>
            <a href="#contact">
            <button className='button'>contact me</button>
            </a>
        </div>
    </motion.div>
  )
}

export default NavBar