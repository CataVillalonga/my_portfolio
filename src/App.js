import Header from'./Components/Header'
import Presentation from './Components/Presentation';
import TechStack from'./Components/TechStack'
import Projects from'./Components/Projects'
import Footer from'./Components/Footer'
import './Styles/reset.css';
import './Styles/App.css';

function App() {
  return (
    <>
    <Header />
    <Presentation/>
    <TechStack />
    <Projects />
    < Footer />
    </>
  );
}

export default App;
