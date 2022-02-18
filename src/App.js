import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage  from './components/HomePage';
import About from './components/About';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/'element={<HomePage/>} />
          <Route path='/about' element={<About/>}/>
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
