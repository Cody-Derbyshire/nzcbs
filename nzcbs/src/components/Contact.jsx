import '../App.css';

function Contact() {
  return (
    <>
      <div className='contact'>
        <div className='contact-text'>
          <p>
            If you have any questions, concerns, or suggestions please contact
            the Bible School convenor, David Luxmoore.
          </p>
          <em className='contact-quote'>
            "That I may be encouraged together with you while among you, each of
            us by the other's faith, both yours and mine."
          </em>
        </div>

        <div className='contact-buttons'>
          <p className='contact-btn'>
            <a href='tel:(09) 8176678'>(09) 8176678</a>
          </p>
          <p className='contact-btn'>
            <a href='mailto:delux@xtra.co.nz'>delux@xtra.co.nz</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
