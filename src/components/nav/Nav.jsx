import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {MdWorkOutline} from 'react-icons/md'
import {BsChatSquareText} from 'react-icons/bs'
import {useState, useEffect} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      const sections = document.querySelectorAll('section');
      let currentSection = null;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.offsetHeight;

        if (currentPosition >= sectionTop && currentPosition < sectionTop + sectionHeight) {
          currentSection = '#' + section.id;
        } else if (currentPosition < sections[0].offsetTop - 200) {
          currentSection = null; // At the top of the page
        } else if (index === sections.length - 1 && currentPosition >= sectionTop + sectionHeight) {
          currentSection = null; // At the bottom of the page
        }
      });

      setActiveNav(currentSection);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (sectionId) => {
    setActiveNav(sectionId);
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className='container__nav'> 
        <a href="#home" onClick={() => handleClick('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome/></a>
        <a href="#experience" onClick={() => handleClick('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
        {/*<a href="#portfolio" onClick={() => handleClick('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdWorkOutline/></a>*/}
        {/*<a href="#testimonials" onClick={() => handleClick('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><BsChatSquareText/></a>*/}  
        <a href="#contact" onClick={() => handleClick('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav