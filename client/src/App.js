import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddShares from './containers/AddShares';
import Portfolio from './containers/Portfolio';
import ErrorPage from './containers/ErrorPage';
import HomePage from './containers/Homepage';
import Account from './containers/Account'
import HighchartsReact from 'highcharts-react-official';
import highcharts from 'highcharts';

function App() {
  return (
    <div >
      <div>

      </div>
      <Router>
        <header>
          <div>
            <NavBar />
          </div>
        </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path='/personalportfolio' element={<Portfolio />} />
              <Route path='/addanewshare' element={<AddShares />} />
              <Route path='/account' element={<Account/>}/>
              <Route path="/*" element={<ErrorPage />} />
            </Routes>
          </main>
      </Router>
      <footer>
      <div className="footer-social-icons">
        <h4 className="_14">Follow us for the latest stock news and information:</h4>
        <ul className="social-icons">
          <li><a href="" className="social-icon"> <i className="fa fa-facebook"></i></a></li>
          <li><a href="" className="social-icon"> <i className="fa fa-twitter"></i></a></li>
          <li><a href="" className="social-icon"> <i className="fa fa-rss"></i></a></li>
          <li><a href="https://www.youtube.com/watch?v=-g10fBMRypA&ab_channel=CoComelon-FurryFriends" className="social-icon"> <i className="fa fa-youtube"></i></a></li>
          <li><a href="" className="social-icon"> <i className="fa fa-linkedin"></i></a></li>
          <li><a href="" className="social-icon"> <i className="fa fa-google-plus"></i></a></li>
        </ul>
      </div>
    </footer>
    </div>
  );
}

export default App;
