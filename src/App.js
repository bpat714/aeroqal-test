import React from 'react';
import {Route, Link, Routes} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './Home';
import View from './View';
import AddMember from './AddMember';
import DeleteMember from './DeleteMember';

function App() {
  return (
        <Router>
          <React.Fragment>
            <nav>
              <Link to={'/'}></Link><br/>
              <Link to={'/home'}> Homepage</Link><br/>
              <Link to={'/view'}> View the Registry</Link><br/>
              <Link to={'/add'}>Add to the Registry</Link><br/>
              <Link to={'/delete'}>Delete from the Registry</Link><br/>
            </nav>
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
