import logo from '../logos/logo3.png';
import '../Styles/Header.css';

const Header = () => {
  return (
    <header className='header-section'>
      <img src={logo} alt="company-logo" />
        <li>
            <ul><a href='#about'>About</a></ul>
            <ul><a href='#technology'>Tech Stack</a></ul>
            <ul><a href='#projects'>Projects</a></ul>
            <ul><a href='#collaborations'>Collaborations</a></ul>
        </li>
    </header>
  )
}

export default Header