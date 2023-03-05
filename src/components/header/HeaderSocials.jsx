import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
import {GrFacebook} from 'react-icons/gr'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/mark-aldrin-relos-595aa1268/" target="blank" className='linkedIn'><BsLinkedin/>
        </a>
        <a href="https://github.com/markrelos" target="blank" className='gitHub'><FaGithub />     
        </a>
        {/*<a href="https://dribbble.com" target="blank" className='dribbblE'><FiDribbble />   
        </a>*/}
        <a href="https://facebook.com/markaldrin.relos" target="blank" className='faceBook'><GrFacebook/>
        </a>
    </div>
  )
}

export default HeaderSocials