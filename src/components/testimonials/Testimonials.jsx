import React, {useState, useEffect}  from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import TextSpan4 from './TextSpan4'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion'

const data = [
    {
      avatar: AVTR1,
      name: 'Tina Snow',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem corporis autem mollitia, molestias quos laborum. Quia, libero aperiam optio eveniet odio, incidunt, voluptas omnis suscipit at repellat et dignissimos soluta?',
    },
    {
      avatar: AVTR2,
      name: 'Shatta Wale',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem corporis autem mollitia, molestias quos laborum. Quia, libero aperiam optio eveniet odio, incidunt, voluptas omnis suscipit at repellat et dignissimos soluta?',
    },
    {
      avatar: AVTR3,
      name: 'Kwame Despite',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem corporis autem mollitia, molestias quos laborum. Quia, libero aperiam optio eveniet odio, incidunt, voluptas omnis suscipit at repellat et dignissimos soluta?',
    },
    {
      avatar: AVTR4,
      name: 'Nana Ama McBrown',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem corporis autem mollitia, molestias quos laborum. Quia, libero aperiam optio eveniet odio, incidunt, voluptas omnis suscipit at repellat et dignissimos soluta?',
    }
]
const sentence = "Testimonials".split("");
const Testimonials = () => {
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
          const element = section.querySelector('.animate_Testimonials');
          setIsVisible(!!element);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id= 'testimonials'>    
      {/*<h5>Review from Clients</h5>
      <h2>Testimonials</h2>*/}
      <div id="testi__header">
        {sentence.map((letter, index) => {
          return(
            <TextSpan4 key={index}>
              {letter === " "? "\u00A0" : letter}
            </TextSpan4>
          )
        })}
      </div>
      <motion.div className='animate_Testimonials'
                initial={{ scale: 0 }}
                animate={isVisible ? {scale: 1 } : { scale: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2}}
       >
      <Swiper className="container testimonials__container" 
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>

      {
          data.map(({avatar, name, review}, index) => {
            return (
                <SwiperSlide key={index} className="testimonial">
                  <div className="client__avatar">
                    <img src={avatar}/>
                  </div>
                  <h5 className='client__name'>{name}</h5>
                    <small className='client__review'>{review}</small>
                </SwiperSlide>
              )
            })   
        } 
      </Swiper>
      </motion.div>
    </section>
  
  )
}

export default Testimonials