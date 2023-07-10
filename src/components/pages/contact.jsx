import React from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <div className="flex mt-32">
      <div className="w-1/2 mr-5 ml-5">

        {/* Insertamos el mapa */}

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.3774529350726!2d-101.03833502503684!3d22.149699779795128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842a98c8d0777cff%3A0x8ed9d9a98ee5ca91!2sInstituto%20Potosino%20de%20Investigaci%C3%B3n%20Cient%C3%ADfica%20y%20Tecnol%C3%B3gica!5e0!3m2!1sen!2smx!4v1689006856094!5m2!1sen!2smx" width="730" height="660"></iframe>
        <Helmet>
          <title>Contact | You-i Lab</title>
        </Helmet>

      </div>
      <div className="w-1/2 mr-5">

        <h1 className="text-center">Contactanos</h1>
        <form action="enviar.php" method="POST">
          <legend className='mb-5 text-lg font-bold'>Envia un mensaje</legend>
          <div className="mb-4">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" className="w-full border border-gray-300 rounded px-3 py-2" placeholder='Jane Doe' required />
          </div>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" className="w-full border border-gray-300 rounded px-3 py-2" placeholder='example@company.com' required />
          </div>
          <div className="mb-4">
            <label htmlFor="phone">Phone</label>
            <input type="tel" name="phone" className="w-full border border-gray-300 rounded px-3 py-2" placeholder='16825789' />
          </div>
          <div className="mb-4">
            <label htmlFor="">Company</label>
            <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" placeholder='Company'/>
          </div>
          <div className="mb-4">
            <label htmlFor="">Message</label>
            <textarea className="w-full border border-gray-300 rounded px-3 py-2" rows="6" placeholder='Write your message'></textarea>
          </div>
          <div className="text-center mb-10">
            <input type="submit" value="Submit"
              className="bg-blue-500 text-white py-3 px-16 rounded hover:bg-blue-600 cursor-pointer mx-auto w-150 text-lg" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;