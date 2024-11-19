import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';

function App() {
  
  return (
    <div>
       <Navbar/>
       <Introduction/>
       <About/>
       <Services/>
       <Skills/>
       <Projects/>
       <Contact/>
    </div>
  );
}

export default App;
