import { useState } from 'react';
import Presentation from './Components/Presentation';
import About from './Components/About';
import TechStack from'./Components/TechStack'
import Projects from'./Components/Projects'
import './Styles/reset.css';
import './Styles/App.css';



function App() {
  const [display, setDisplay] = useState('none')

  return (
    <>
      <Presentation setDisplay={setDisplay}/>
      <main className='main-wrapper' style={{display:`${display}`}}>
        <TechStack />
        <About />
        <Projects />
      </main>
    </>
  );
}

export default App;
