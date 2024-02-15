import React from 'react'
import './books.css'
import Book from '../../img/book.jpg'
import Book2 from '../../img/book2.jpg'
import Book3 from '../../img/book3.jpg'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../../motionData/motion';

const Books = () => {
    const wsize = window.innerWidth;
    console.log(wsize);
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >
            <div className="line">

            </div>
            <div className="wrapper">
                <a className='anchor' id='books'></a>
                <motion.div
                    variants={fadeIn("right", "tween", 0.2, 1)}
                    className="left-side">
                    <div className="heding">
                        <h4>My Books</h4>
                    </div>
                    <p>My journey in the publishing industry has allowed me to develop a keen eye for detail, a passion for clarity, and an unwavering dedication to precision in language. I firmly believe that well-edited content can unlock the beauty and potential of even the most intricate ideas.</p>
                </motion.div>
                <motion.div
                    variants={fadeIn("left", "tween", 0.2, 1)}
                    className="right-side">
                    {wsize <= 375 ?
                        <div className="ss-cards">
                            <div className="ss-card">
                                <img src={Book} alt="" />
                            </div>
                            <div className="ss-card">
                                <img src={Book2} alt="" />
                            </div>
                            <div className="ss-card">
                                <img src={Book3} alt="" />
                            </div>
                        </div>
                        :
                        <div className="cards">
                            <div className="card">
                                <img src={Book} alt="" />
                            </div>
                            <div className="card">
                                <img src={Book2} alt="" />
                            </div>
                            <div className="card">
                                <img src={Book3} alt="" />
                            </div>
                        </div>
                    }

                </motion.div>
            </div>
        </motion.div>
    )
}

export default Books