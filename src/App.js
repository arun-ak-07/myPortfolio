import './App.css';
import About from './components/About';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
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
    </div>
  );
}

export default App;
