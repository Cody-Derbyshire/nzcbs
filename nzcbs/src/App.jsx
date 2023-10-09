import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Contact from './components/Contact.jsx';
import Donations from './components/Donations.jsx';
import Registration from './components/Registration.jsx';
import Talks from './components/Talks.jsx';
import Info from './components/Info';
import Landing from './components/Landing.jsx';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route index element={<Landing />} />
          <Route path='/home' element={<Landing />} />
          <Route path='/info' element={<Info />} />
          <Route path='/donations' element={<Donations />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/talks' element={<Talks />} />
        </Routes>
        <Contact />
      </Router>
    </>
  );
}

export default App;
