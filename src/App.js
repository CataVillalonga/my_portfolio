import { useState } from 'react';
import Presentation from './Components/Presentation';
import About from './Components/About';
import TechStack from'./Components/TechStack'
import Projects from'./Components/Projects'
import Collaborations from'./Components/Collaborations'
import './Styles/reset.css';
import './Styles/App.css';



function App() {
  
  const [display, setDisplay] = useState('')

  console.log(display)
  // `${mainDisplay}`
  return (
    <>
    <Presentation setMainDisplay={setDisplay}/>
    <main className='main-wrapper' style={{display:'block'}}>
      <TechStack />
      <Projects />
      <About />
      <Collaborations />
    </main>
    </>
  );
}

export default App;
