import React, { useEffect, useState} from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import { motion } from "framer-motion"
import TextSpan from './TextSpan'

const sentence = ["Hi,", "I'm", "Mark Relos"];
const Header = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    handleDarkMode();
  }, [isOn]);

  function handleDarkMode() {
    setIsDarkMode(!isDarkMode);
    const body = document.querySelector("body");
    body.classList.toggle("dark-mode", isOn);
  }
  
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

  return (
    <section id="home">
      <div className='switch_wrapper'>
          <motion.div
            className="switch"
            data-isOn={isOn}
            onClick={toggleSwitch}
            layout
            transition={spring}
          >
                <motion.div className="handle" layout transition={spring}/>
          </motion.div>
            <div className="image-container">
                  <div className="image" />
            </div>
       </div>
    <header className="fade-in">
      <div className="container header__container">
        <div className="letter-container">    
                {sentence.map((word, wordIndex) => (
                  <motion.div className='animate_Header' 
                  key={wordIndex}
                  initial={{ y: '60vw', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: wordIndex * 0.5, duration: 0.8, ease: 'easeOut' }}
                  >
                    {word.split("").map((letter, letterIndex) => (
                      <TextSpan key={letterIndex}>
                        {letter === ' ' ? '\u00A0' : letter}
                      </TextSpan>
                    ))}
                  </motion.div>
                ))}
        </div>
        <p className='p_home' alt="me"> Frontend / Mobile Game Developer </p>        
        <HeaderSocials />
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
    </section>
  )
  
}

export default Header