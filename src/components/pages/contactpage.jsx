import Navigation from "../navigation";
import './contactpage.css'

export default function ContactPage() {
  return (
    <>
      <Navigation />
          <div className="container_contact">
          <img src='../../../public/assets/star.png' style={{position:'absolute', }}/>
        <div className="lens1"></div>
              <div className="container2">
              <img src='../../../public/assets/star.png' style={{position:'absolute', }}/>
          <div className="desktop_only">
            <h2>Get in touch</h2>
            <p>Contact Information</p>
            <p>
              27,Alara Street
              <br />
              Yaba 100012
              <br />
              Lagos State
            </p>
            <p>Call Us : 07067981819</p>
            <p>we are open from Monday-Friday 08:00am - 05:00pm</p>
          </div>

          <div>
            <h3>Share on</h3>
            <ul style={{ listStyle: "none", display: "inline-list-item" }}>
              <li>
                <img src="../../../public/assets/instagram.png" />
              </li>
              <li>
                <img src="../../../public/assets/x.png" />
              </li>
              <li>
                <img src="../../../public/assets/facebook.png" />
              </li>
              <li>
                <img src="../../../public/assets/linkedin.png" />
              </li>
            </ul>
          </div>
        </div>
              <div className="contact _form">
                  <img src='../../../public/assets/star.png' style={{position:'absolute', }}/>
          <h4>Questions or need assistance?</h4>
          <h4>Let us know about it!</h4>
          <p className="emailfor">
            Email us below to any question related to our event
          </p>
          <form action="" method="post">
            <input type="text" name="First Name" placeholder="First Name" />
            <input type="email" name="Mail" placeholder="Mail" />
            <textarea name="Message" placeholder="message" />
            <button type="submit" className="submit">
              Submit
            </button>
                  </form>
                  <img src='../../../public/assets/star.png' style={{position:'absolute', }}/>
        </div>
        <div className="lens2"></div>
      </div>
    </>
  );
}
