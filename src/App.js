import React from 'react';
import {Route, Link, Routes} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './components/Home';
import View from './components/View';
import AddMember from './components/AddMember';
import DeleteMember from './components/DeleteMember';

function App() {
  return (
        <Router>
          <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#">E Member Club</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" > 
                    <Link to={'/home'}> Homepage</Link><br/>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <Link to={'/view'}> View the Registry</Link><br/>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <Link to={'/add'}>Add to the Registry</Link><br/>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                    <Link to={'/delete'}>Delete from the Registry</Link><br/>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <br></br>
            <div>
              <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/home' element={<Home/>}/>
                <Route path='/view' element={<View/>}/>
                <Route path='/add' element={<AddMember/>}/>
                <Route path='/delete' element={<DeleteMember/>}/>
              </Routes>
            </div>
          </React.Fragment>
        </Router>
  );
}

export default App;
