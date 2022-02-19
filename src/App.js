import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage  from './components/HomePage';
import About from './components/About';
import Skills from './components/Skills';
import { gsap, Power3 } from "gsap";
import ProjectsPage from './components/ProjectsPage';
import Contact from './components/Contact';


function App() {
  let t1 = new gsap.timeline();
  let ease = Power3.easeOut();
  let easeio = Power3.easeInOut();
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/'element={<HomePage timeline = {t1} ease={ease} easeio={easeio}/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
          <Route path="/contact" element={<Contact/>}/> 
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
