import React, { useState } from 'react'
import './Navbar.css'
import { motion } from 'framer-motion'
import { headerVariants } from '../../motionData/motion'
import { FaBars } from "react-icons/fa6";


const NavBar = () => {
    const [sideBar, showSideBar] = useState(false)
    const handleSideBar = () => {
        showSideBar(!sideBar)
    }

    const widowSize = window.innerWidth;

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
                {
                    widowSize >= 800 ? <div className='b-n-list'>
                        <div className="n-list">
                            <ul>
                                <li><a href="#home">home</a></li>
                                <li><a href="#about">about</a></li>
                                <li><a href="#books">books</a></li>
                                <li><a href="#work">work</a></li>
                            </ul>
                            <a href="#contact">
                                <button className='button'>contact me</button>
                            </a>
                        </div>
                    </div>
                        : <div>
                            <FaBars onClick={handleSideBar} />
                            {
                                sideBar && (

                                    <div className="side-n-left">
                                        <div className="side-n-list">
                                            <ul>
                                                <li><a href="#home">home</a></li>
                                                <li><a href="#about">about</a></li>
                                                <li><a href="#books">books</a></li>
                                                <li><a href="#work">work</a></li>
                                            </ul>
                                            <a href="#contact">
                                                <button className='button'>contact me</button>
                                            </a>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                }
            </div>
        </motion.div>
    )
}

export default NavBar