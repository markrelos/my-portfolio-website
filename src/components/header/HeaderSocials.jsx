import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiVercel} from 'react-icons/si'
import {GrFacebook} from 'react-icons/gr'
import { motion } from 'framer-motion'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <motion.a
        href="https://www.linkedin.com/in/mark-aldrin-relos-595aa1268/"
        target="_blank"
        initial={{ x: '-60vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0 }}
        style={{ marginLeft: '1rem' }}
        className='social-icon linkedIn'
        whileHover={{ backgroundColor: '#0A66C2', translateY: -10, transition: { duration: 0 } }}
      >
        <BsLinkedin />
      </motion.a>
      <motion.a
        href="https://github.com/markrelos"
        target="_blank"
        initial={{ x: '-60vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0 }}
        style={{ marginLeft: '1rem' }}
        className='social-icon gitHub'
        whileHover={{ backgroundColor: '#131418', translateY: -10, transition: { duration: 0 } }}
      >
        <FaGithub />
      </motion.a>
      <motion.a
        href="https://facebook.com/markaldrin.relos"
        target="_blank"
        initial={{ x: '-60vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0 }}
        style={{ marginLeft: '1rem' }}
        className='social-icon faceBook'
        whileHover={{ backgroundColor: '#1877F2', translateY: -10, transition: { duration: 0 } }}
      >
        <GrFacebook />
      </motion.a>
      <motion.a
        href="https://vercel.com/markrelos"
        target="_blank"
        initial={{ x: '-60vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0 }}
        style={{ marginLeft: '1rem' }}
        className='social-icon vercel'
        whileHover={{ backgroundColor: '#000000', translateY: -10, transition: { duration: 0 } }}
      >
        <SiVercel />
      </motion.a>
    </div>
  )
}

export default HeaderSocials