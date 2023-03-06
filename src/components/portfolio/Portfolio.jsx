import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import TextSpan3 from './TextSpan3'

const sentence = "My Works".split("");
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19886744-Orion-UI-kit-for-Figma'
  },

  {
    id: 2,
    image: IMG2,
    title: 'Charts Templates & Infographics in Figma Collection',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19838794-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },

  {
    id: 3,
    image: IMG3,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19838730-Orion-UI-kit-for-Figma'
  }
]

const Portfolio = () => {
  return (
    <section id= 'portfolio'>
      {/*<h5>My Recent Work</h5>
      <h2>Portfolio</h2>*/}
      <div id='port__header'>
        {sentence.map((letter, index) => {
          return(
            <TextSpan3 key={index}>
              {letter === " "? "\u00A0" : letter}
            </TextSpan3>
          )
        })}
        </div>

      <div className="container portfolio__container">
       {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
          )
        })
       }
      </div>
    </section>
  )
}

export default Portfolio