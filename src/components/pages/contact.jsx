import React from 'react';
import '../../contact.css';

const Contact = () => {
  return (
    <div className="contact-container mb-5">
      <h1 className="logo c1">Contact <span>Us</span></h1>
      <div className="contact-wrapper animated bounceInUp">
        <div className="contact-form">
          <h3 className="c3">Contact us</h3>
          <form action="">
            <div className="grid-2-cols">
              <p>
                <label>FullName</label>
                <input type="text" name="fullname" />
              </p>
              <p>
                <label>Email Adress</label>
                <input type="email" name="email" />
              </p>
            </div>
            <div className="grid-2-cols">
              <p>
                <label>Phone Number</label>
                <input type="tel" name="phone" />
              </p>
              <p>
                <label>Company</label>
                <input type="text" name="affair" />
              </p>
            </div>
            <p className="block">
              <label>Message</label>
              <textarea name="message" rows="3"></textarea>
            </p>
            <p className="block">
              <button>Send</button>
            </p>
          </form>
        </div>
        <div className="contact-info">
          <h4 className="c4">More Info</h4>
          <ul>
            <li><i className="fas fa-map-marker-alt"></i> Baker Street</li>
            <li><i className="fas fa-phone"></i> (111) 111 111 111</li>
            <li><i className="fas fa-envelope-open-text"></i> contact@website.com</li>
          </ul>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident ipsam necessitatibus repellendus?</p>
          <p>Company.com</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3695.3774471537113!2d-101.03576!3d22.1497!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842a98c8d0777cff%3A0x8ed9d9a98ee5ca91!2sInstituto%20Potosino%20de%20Investigaci%C3%B3n%20Cient%C3%ADfica%20y%20Tecnol%C3%B3gica!5e0!3m2!1sen!2smx!4v1689109636400!5m2!1sen!2smx" width="500" height="250"></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
