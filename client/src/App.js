import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddShares from './containers/AddShares';
import Portfolio from './containers/Portfolio';
import Projections from './containers/Projections';
import ErrorPage from './containers/ErrorPage';
import HomePage from './containers/Homepage';

function App() {
  return (
    <div className="Application">
    
   
  
    <Router>
    <header>
    <div>
    <NavBar/>
    
    </div>
    </header>
    <div>
    <main>

    <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path='/personalportfolio' element={<Portfolio/>}/>
          <Route path='/projections' element={<Projections/>}/>
          <Route path='/addanewshare' element={<AddShares/>}/>
          <Route path="/*" element={<ErrorPage/>}/>
        </Routes>
    </main>
    </div>
    </Router>
  <footer>
    FOOTER
  </footer> 
    </div>
  );
}

export default App;
