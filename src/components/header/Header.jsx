import React, { useEffect, useState} from 'react'
import './header.css'
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
    const root = document.documentElement;
    root.classList.toggle("dark-mode", isOn);
  }
  
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      const sections = document.querySelectorAll('section');
      let currentSection = null;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.offsetHeight;

        if (currentPosition >= sectionTop && currentPosition < sectionTop + sectionHeight) {
          const element = section.querySelector('.animate-Header');
          setIsVisible(!element);
        } else if (currentPosition < sections[0].offsetTop - 200) {
          const element = section.querySelector('.animate-Header');
          setIsVisible(!!element); // At the top of the page
        } else if (index === sections.length - 1 && currentPosition >= sectionTop + sectionHeight) {
          const element = section.querySelector('.animate-Header');
          setIsVisible(!!element);// At the bottom of the page
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: wordIndex * 0.3, duration: 0.5, ease: 'easeOut' }}
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