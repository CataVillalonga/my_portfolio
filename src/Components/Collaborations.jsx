import saltLogo from '../logos/salt.png'
import metrieveLogo from '../logos/metrieve.png'
import smartCodingLogo from '../logos/smartCoding.gif'
import '../Styles/Collaborations.css';

const Collaborations =() => {
  return (
    <section id='collaborations' className='collaborations-section'>
      <div className='collaborations-section-title'>
        <h1>Collaborations</h1>
      </div>
      <div className='collaborations-section-imgs'>
      <img alt='smartcoding'id='smartcoding'src={smartCodingLogo}/>
      <img alt='Metrieve'src={metrieveLogo}/>
      <img  alt='Salt'src={saltLogo}/>
      </div>
    </section>
  )
}

export default Collaborations