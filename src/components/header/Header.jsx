import React, { useEffect, useState} from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import { motion } from "framer-motion"
import TextSpan from './TextSpan'

const sentence = "Hi, I'm Mark Relos".split("");
const Header = () => {

  return (
    <header className="fade-in">
      <div className="container header__container">
      <div>
        {sentence.map((letter, index) => {
          return(
            <TextSpan key={index}>
              {letter === " "? "\u00A0" : letter}
            </TextSpan>
          )
        })}
      </div>
      <p className="text-light"> Frontend / Mobile Game Developer </p>
        {/*<h5>Hello I'm</h5>
        <h1>Mark Relos</h1>
        <h2 className="text-light">Fullstack Developer</h2>*/}
        {/*<CTA />*/}
        
        <HeaderSocials />
        <motion.div 
        intial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{duration: 3}}
        className="me">
          {/*<img src={ME} alt="me" />*/}
        </motion.div >
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
  
}

export default Header