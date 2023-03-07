import React, { useEffect, useState} from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import { motion } from "framer-motion"
import TextSpan from './TextSpan'

const sentence = ["Hi,", "I'm", "Mark Relos"];
const Header = () => {
  return (
    <section id="home">
    <header className="fade-in">
      <div className="container header__container">
        <div className="letter-container">    
                {sentence.map((word, wordIndex) => (
                  <motion.div className='animate_Header' 
                  key={wordIndex}
                  initial={{ x: '-60vw', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: wordIndex * 0.5, duration: 1, ease: 'easeOut' }}
                  >
                    {word.split("").map((letter, letterIndex) => (
                      <TextSpan key={letterIndex}>
                        {letter === ' ' ? '\u00A0' : letter}
                      </TextSpan>
                    ))}
                  </motion.div>
                ))}
        </div>
        <p className="text_light" alt="me"> Frontend / Mobile Game Developer </p>        
        <HeaderSocials />
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
    </section>
  )
  
}

export default Header