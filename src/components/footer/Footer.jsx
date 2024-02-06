import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="f-wrapper">
        <div className="f-left">
            <a href="mailto:hello@HabibullahAlHasib.com">
              <IoMdMail size={'80'}/>  hello@HabibullahAlHasib.com</a>
        </div>
        <div className='f-right'>
            <a href="#">
             <FaFacebook size={'80'}/>
            </a>
        </div>
    </div>
  )
}

export default Footer