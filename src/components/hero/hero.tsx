import './hero.scss';
import postcard from 'assets/images/postcard.png';

function Hero() {
  function openMail() {
    window.open(
      'mailto:merle@web.de?subject=booking%20request&body=add%20name%20and%20month'
    );
  }

  return (
    <div id="hero" className="container">
      <div className="col-left">
        <h1 className="header">The Banana House</h1>
        <h2 className="section-header">
          Join the banana crew <br />
          in Ponta do Sol!
        </h2>
        <button onClick={openMail} className="primary-btn">
          Contact
        </button>
      </div>
      <div className="col-right">
        <img src={postcard} alt="" />
      </div>
    </div>
  );
}

export default Hero;
