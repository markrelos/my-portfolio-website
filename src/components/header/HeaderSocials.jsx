import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiVercel} from 'react-icons/si'
import {GrFacebook} from 'react-icons/gr'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/mark-aldrin-relos-595aa1268/" target="blank" className='linkedIn'><BsLinkedin/>
        </a>
        <a href="https://github.com/markrelos" target="blank" className='gitHub'><FaGithub />     
        </a>
        <a href="https://facebook.com/markaldrin.relos" target="blank" className='faceBook'><GrFacebook/>
        </a>
        <a href="https://vercel.com/markrelos" target="blank" className='vercel'><SiVercel />   
        </a>
    </div>
  )
}

export default HeaderSocials