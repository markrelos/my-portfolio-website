import React, {useState, useEffect} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {SlSocialLinkedin} from 'react-icons/sl';
import TextSpan5 from './TextSpan5';
import { motion } from 'framer-motion';

const sentence = "Contact Me".split("");
const Contact = () => {
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
          const element = section.querySelector('.animate-Contact');
          setIsVisible(!!element);
        } else if (currentPosition < sections[0].offsetTop - 200) {
          const element = section.querySelector('.animate-Contact');
          setIsVisible(!element); // At the top of the page
        } else if (index === sections.length - 1 && currentPosition >= sectionTop + sectionHeight) {
          const element = section.querySelector('.animate-Contact');
          setIsVisible(!element);// At the bottom of the page
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (

   
    <section id= 'contact'>
      <div id="contact__header">
        {sentence.map((letter, index) => {
          return(
            <TextSpan5 key={index}>
              {letter === " "? "\u00A0" : letter}
            </TextSpan5>
          )
        })}
      </div>

      <div className="container contact__container">
        <div className="contact__options">
          <motion.article className="animate-Contact contact__option"
            initial={{ scale: 0 }}
            animate={isVisible ? {scale: 1 } : { scale: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20}}
          >
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>relos1203@gmail.com</h5>
            <a href="mailto:relos1203@gmail.com" target="blank">Send a Message</a>
          </motion.article>
          <motion.article className="animate-Contact contact__option"
           initial={{ scale: 0 }}
           animate={isVisible ? {scale: 1 } : { scale: 0 }}
           transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2}}
          >
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Facebook: Mark Relos</h5>
            <a href="https://m.me/markaldrin.relos" target="blank">Send a Message</a>
          </motion.article>
          <motion.article className="animate-Contact contact__option"
            initial={{ scale: 0 }}
            animate={isVisible ? {scale: 1 } : { scale: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.4}} 
          >
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>@markrelos</h5>
            <a href="https://t.me/<@markrelos>" target="_blank">Send a Message</a>
          </motion.article>
        </div>
        {/*END*/}
        <form action="">
        <motion.input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            initial={{ scale: 0 }}
            animate={isVisible ? {scale: 1 } : { scale: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0}} 
            className='animate-Contact'
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Email"
            required
            initial={{ scale: 0 }}
            animate={isVisible ? {scale: 1 } : { scale: 0 }} 
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2}} 
            className='animate-Contact'
          />
          <motion.textarea
            name="message"
            rows="7"
            placeholder="Message"
            required
            initial={{ scale: 0 }}
            animate={isVisible ? {scale: 1 } : { scale: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.4}} 
            className='animate-Contact'
          />
          <motion.button href="mailto:relos1203@gmail.com" target="blank" type='submit' className='btn btn-primary'
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
          >Send Message</motion.button>
        </form>
      </div>
    </section>
  )
}

export default Contact