import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import headerImage from '../assets/header-image.svg';
import '../App.css';

function Nav() {
  return (
    <>
      <nav className='nav'>
        <div className='nav-title'>
          <Link className='title-link' to='/home'>
            <p>NZCBS</p>
          </Link>
        </div>
        <div className='header-image'>
          <img src={headerImage} alt='' />
        </div>
        <div className='nav-links-wrapper'>
          <Link className='nav-link' to='/info'>
            <p>INFO</p>
          </Link>
          <Link className='nav-link' to='/registration'>
            <p>REGISTRATION</p>
          </Link>
          <Link className='nav-link' to='/donations'>
            <p>DONATIONS</p>
          </Link>
          <Link className='nav-link' to='/talks'>
            <p>TALKS</p>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
