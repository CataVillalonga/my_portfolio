import photo from '../img/img.jpg'
import '../Styles/Presentation.css';
import linkedIn_logo from '../logos/linkedIn.svg'
import github_logo from '../logos/github.svg'
import arrow from '../logos/arrow.png'

const Presentation =(setMainDisplay) => {
  const btnHandler = () => {
    setMainDisplay('')
  }
  
  return (
    <section className="presentation-wrapper">
      <div className='card-wrapper'>
        <div className='personalDetails-Wraper'>
          <h1 className='card-name'>Catalina Villalonga</h1>
          <p className='card-description'>Full stack Javascript/Typescript Developer</p>
        </div>
        <div className='glowingEffect-btn'>
          <a href="#projects" className='glowingEffect-btn-a' onClick={()=>btnHandler()}>Learn more</a>
        </div>
      </div>
    </section>
  )
}

export default Presentation