import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {SlSocialLinkedin} from 'react-icons/sl';
import TextSpan5 from './TextSpan5';


const sentence = "Contact Me".split("");
const Contact = () => {
  return (
    <section id= 'contact'>
      {/*<h5>Get In Touch</h5>
      <h2>Contact Me</h2>*/}
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
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>relos1203@gmail.com</h5>
            <a href="mailto:relos1203@gmail.com" target="blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Facebook: Mark Relos</h5>
            <a href="https://m.me/markaldrin.relos" target="blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>@markrelos</h5>
            <a href="https://t.me/<@markrelos>" target="_blank">Send a Message</a>
          </article>
        </div>
        {/*END*/}
        <form action="">
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" rows="7" placeholder='Message' required></textarea>
          <button href="mailto:relos1203@gmail.com" target="blank" type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact