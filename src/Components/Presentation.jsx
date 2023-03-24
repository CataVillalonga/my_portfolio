import { useState } from 'react';
import '../Styles/Presentation.css';
import linkedIn_logo from '../logos/linkedIn.svg'
import github_logo from '../logos/github.svg'

const Presentation =({setDisplay}) => {

  const [id, setId] = useState('#')

  const btnHandler = () => {
    setDisplay('block')
    setId('#techStack')
  }
  
  return (
    <section className="presentation-wrapper">
      <div className='card-wrapper'>
        <div className='personalDetails-Wraper'>
          <h1 className='card-name'>Catalina Villalonga</h1>
          <p className='card-description'>Full stack Javascript/Typescript Developer</p>
        </div>
        <div className='socialMedia-wraper'>
          <a href="https://github.com/CataVillalonga"><img src={linkedIn_logo} alt="linkedIn" className='socialMedia-img'/></a>
          <a href="https://www.linkedin.com/in/catalina-villalonga-7a272912a/"><img src={github_logo} alt="github" className='socialMedia-img'/></a>
        </div>
        <div className='glowingEffect-btn'>
          <a href={id} className='glowingEffect-btn-a' onClick={btnHandler}>Learn more</a>
        </div>
      </div>
    </section>
  )
}

export default Presentation