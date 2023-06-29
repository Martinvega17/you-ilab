import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('enviar.php', {
        name,
        email,
        phone,
        company,
        message,
      });

      setResponse(response.data.message);
    } catch (error) {
      setResponse('Error al enviar el mensaje');
    }
  };
  console.log(handleSubmit)

  return (
    <div className="flex">
      <div className="w-1/2 mr-5 ml-5">
        {/* Insertamos el mapa */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29560.447640952556!2d-101.04494000000001!3d22.161942!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842a98c8d0777cff%3A0x8ed9d9a98ee5ca91!2sInstituto%20Potosino%20de%20Investigaci%C3%B3n%20Cient%C3%ADfica%20y%20Tecnol%C3%B3gica%20A.C.!5e0!3m2!1ses!2sus!4v1688025193576!5m2!1ses!2sus" width="100%" height="680px"></iframe>
        <Helmet>
          <title>Contact | You-i Lab</title>
        </Helmet>
      </div>
      <div className="w-1/2 mr-5">
        <h1 className="text-center">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <legend className="mb-5">Send us a message</legend>
          <div className="mb-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Jane Doe"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="example@company.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="16825789"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="">Company</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded px-3 py-2"
              rows="6"
              placeholder="Write your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="text-center">
            <input
              type="submit"
              value="Submit"
              className="bg-blue-500 text-white py-3 px-16 rounded hover:bg-blue-600 cursor-pointer mx-auto w-150 text-lg"
            />
          </div>
        </form>
        {response && <p>{response}</p>}
      </div>
    </div>
  );
};

export default Contact;
