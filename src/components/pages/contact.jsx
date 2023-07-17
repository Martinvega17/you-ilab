import React from 'react';
import '../../css/contact.css';

const Contact = () => {
  return (
    <div className="contact-container mb-5">
      <h1 className="logo c1">Contact <span>Us</span></h1>
      <div className="contact-wrapper animated bounceInUp">
        <div className="contact-form">
          <h3 className="c3">Contact us</h3>
          <form action="" method="POST" >


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
            <li><i className="fas fa-map-marker-alt"></i> Camino a la Presa San José 2055, <br />Lomas
            4 sección San Luis Potosí, 78216 SLP, México</li>
            <li><i className="fas fa-phone"></i> (444) 834-2000 ext. 2117</li>
            <li><i className="fas fa-envelope-open-text"></i> you-i.lab@ipicyt.edu.mx</li>
          </ul>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident ipsam necessitatibus repellendus?</p>
          <p><a href="https://www.ipicyt.edu.mx/" className='text-white' target='_blanck'>ipicyt.edu.mx</a></p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
