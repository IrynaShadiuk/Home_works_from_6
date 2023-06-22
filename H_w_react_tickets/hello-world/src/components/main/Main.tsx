import './main.scss'

<img src="" alt="" />



const Main = () => {
  return (
    <div>
      <h1 className="centered">Welcome to Home!</h1>
      <div className="bg-img-1" id="home">
      </div>
      <div className="centered" id="contact">
        <p className="feedback">
          <em>I'd love your feedback!</em>
        </p>

        <div className="contact-details">
          <div className="address">
            <i className="fas fa-map-marker-alt"></i> Chicago, US
            <br />
            <i className="fas fa-phone"></i> Phone: +00 151515
            <br />
            <i className="fas fa-envelope"></i> Email: mail@mail.com
            <br />
          </div>
          <p>
            Swing by for a cup of <i className="fas fa-coffee"></i>, or leave me a note:
          </p>

          <div className="contact-form">
            <div className="form-field">
              <input className="input-field" type="text" placeholder="Name" required name="Name" />
            </div>
            <div className="form-field">
              <input className="input-field" type="text" placeholder="Email" required name="Email" />
            </div>
            <input className="input-field" type="text" placeholder="Message" required name="Message" />
            <button className="submit-button" type="submit">
              <i className="fas fa-paper-plane"></i> SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
 
}
export default Main