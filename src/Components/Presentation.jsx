import '../Styles/Presentation.css';
import linkedIn_logo from '../logos/linkedIn.svg'
import github_logo from '../logos/github.svg'

const Presentation =({setDisplay}) => {
  // const btnHandler = () => {
  //   console.log('banana')
  //   setDisplay('block')
  // }
  
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
          <a href="#teckStack" className='glowingEffect-btn-a' onClick={()=> setDisplay('block')}>Learn more</a>
        </div>
      </div>
    </section>
  )
}

export default Presentation