import '../App.css';

function Landing() {
  return (
    <>
      <div className='landing'>
        <div className='landing-heading'>
          <h1>2023-2024 BIBLE SCHOOL</h1>
          <h2>28th Dec - 3rd Jan @ MiCamp Taupo</h2>
        </div>
        <div className='speaker-card-wrapper'>
          <div className='speaker-card'>
            <h2 className='speaker-name'>John Launchbury</h2>
            <p className='speaker-location'>Portland Oregon USA</p>
            <em className='speaker-topic'>To Theophilus</em>
          </div>
          <div className='speaker-card'>
            <h2 className='speaker-name'>Guy Alexander</h2>
            <p className='speaker-location'>Hutt Valley</p>
            <em className='speaker-topic'>What Tomorrow Will Bring</em>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
