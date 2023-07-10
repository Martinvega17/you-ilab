import React from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <div classNameName="flex">
      <div classNameName="w-1/2 mr-5 ml-5">

        {/* Insertamos el mapa */}

        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29560.447640952556!2d-101.04494000000001!3d22.161942!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842a98c8d0777cff%3A0x8ed9d9a98ee5ca91!2sInstituto%20Potosino%20de%20Investigaci%C3%B3n%20Cient%C3%ADfica%20y%20Tecnol%C3%B3gica%20A.C.!5e0!3m2!1ses!2sus!4v1688025193576!5m2!1ses!2sus" width='100%' height='680px'></iframe>
        <Helmet>
          <title>Contact | You-i Lab</title>
        </Helmet>

      </div>
      <div classNameName="w-1/2 mr-5">

        <h1 classNameName="text-center">Contactanos</h1>
        <form action="enviar.php" method="POST">
          <legend classNameName='mb-5 text-lg font-bold'>Envia un mensaje</legend>
          <div classNameName="mb-4">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" classNameName="w-full border border-gray-300 rounded px-3 py-2" placeholder='Jane Doe' required />
          </div>
          <div classNameName="mb-4">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" classNameName="w-full border border-gray-300 rounded px-3 py-2" placeholder='example@company.com' required />
          </div>
          <div classNameName="mb-4">
            <label htmlFor="phone">Phone</label>
            <input type="tel" name="phone" classNameName="w-full border border-gray-300 rounded px-3 py-2" placeholder='16825789' />
          </div>
          <div classNameName="mb-4">
            <label htmlFor="">Company</label>
            <input type="text" classNameName="w-full border border-gray-300 rounded px-3 py-2" placeholder='Company'/>
          </div>
          <div classNameName="mb-4">
            <label htmlFor="">Message</label>
            <textarea classNameName="w-full border border-gray-300 rounded px-3 py-2" rows="6" placeholder='Write your message'></textarea>
          </div>
          <div classNameName="text-center mb-10">
            <input type="submit" value="Submit"
              classNameName="bg-blue-500 text-white py-3 px-16 rounded hover:bg-blue-600 cursor-pointer mx-auto w-150 text-lg" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;