import '../App.css';

function Contact() {
  return (
    <>
      <div className='contact'>
        <div className='contact-info'>
          <p>
            If you have any questions, concerns, or suggestions please contact
            the Bible School convenor, David Luxmoore.
          </p>
          <p>
            <a href='tel:(09) 8176678'>(09) 8176678</a>
          </p>
          <p>
            <a href='mailto:delux@xtra.co.nz'>delux@xtra.co.nz</a>
          </p>
        </div>
        <div className='contact-quote'>
          <em>
            "That I may be encouraged together with you while among you, each of
            us by the other's faith, both yours and mine."
          </em>
        </div>
      </div>
    </>
  );
}

export default Contact;
