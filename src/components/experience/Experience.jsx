import React, {useState, useEffect} from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import TextSpan2 from './TextSpan2';
import { motion } from 'framer-motion';


const sentence = "My Skills".split("");
const Experience = () => {
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
          const element = section.querySelector('.animate');
          setIsVisible(!!element);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (   
    <section id= 'experience'>            
      <div id="exp__header">
        {sentence.map((letter, index) => {
          return(
            <TextSpan2 className="textspan_exp" key={index}>
              {letter === " "? "\u00A0" : letter}
            </TextSpan2>
          )
        })}
        </div>
        
      <div className="container experience__container">
      <motion.div className="animate"
              initial={{ scale: 0 }}
              animate={isVisible ? {scale: 1 } : { scale: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20}}
      >
              <article>
                <h3>Frontend Development</h3>
                <div className="experience__content">
                      <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                        <h4>HTML</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                      </article>
                      <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                      <div>
                      <h4>CSS</h4>
                        <small className='text-light'>Intermediate</small>
                      </div>
                      </article>
                      <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                        <h4>JavaScript</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                      </article>
                      <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                        <h4>Bootstrap</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                      </article>
                      <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                        <h4>C#</h4>
                        <small className='text-light'>Expert</small>
                        </div>
                      </article>
                      <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                        <h4>React</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                      </article>
                  </div>
                  </article>
          </motion.div>
          {/* END OF FRONTEND */}
        <motion.div className="animate"
                initial={{scale: 0 }}
                animate={isVisible ? {scale: 1 } : { scale: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}>
            <article>
            <h3>Backend Development</h3>
              <div className="experience__content">
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>Node JS</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Experienced</small>
                </div>
                </article>
              </div>
            </article>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience