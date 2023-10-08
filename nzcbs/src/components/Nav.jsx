import '../App.css';

function Nav() {
  return (
    <>
      <div className='nav-title'>
        <h1>NZCBS</h1>
      </div>
      <div className='nav-links-wrapper'>
        <a className='nav-link' href=''>
          INFO
        </a>
        <a className='nav-link' href=''>
          REGISTRATION
        </a>
        <a className='nav-link' href=''>
          DONATIONS
        </a>
        <a className='nav-link' href=''>
          TALKS
        </a>
        <a className='nav-link' href=''>
          CONTACT
        </a>
      </div>
    </>
  );
}

export default Nav;
