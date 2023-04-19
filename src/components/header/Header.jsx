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
                  <div>
                    {word.split("").map((letter, letterIndex) => (
                      <motion.div  className='animate_Header'
                      key={letterIndex}
                      initial={{ opacity: 0, x: 0 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transform: [
                          "scale3d(1, 1, 1)",
                          "scale3d(1.4, .55, 1)",
                          "scale3d(.75, 1.25, 1)",
                          "scale3d(1.25, .85, 1)",
                          "scale3d(.9, 1.05, 1)",
                          "scale3d(1, 1, 1)",
                        ],
                        color: "#82AAE3",
                        transition: {
                          times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
                          type: "spring",
                          damping: 10,
                          stiffness: 100,
                          duration: 0.5,
                          delay: wordIndex * 0.4 + letterIndex * 0.1,
                        },
                      }}
                      > 
                          <TextSpan key={letterIndex}>
                            {letter === ' ' ? '\u00A0' : letter}
                          </TextSpan>
                      </motion.div>
                    ))}

                  </div>
                ))}
        </div>
        <p className='p_home' alt="me"> Web / Web3 / Game Developer </p>        
        <HeaderSocials />
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
    </section>
  )
  
}

export default Header