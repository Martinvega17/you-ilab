import React from 'react';
import { Helmet } from 'react-helmet';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '680px',
};

const center = {
  lat: 22.1496998, // Latitud de la ubicación del mapa
  lng: -101.0357601, // Longitud de la ubicación del mapa
  zoom: 17, // Nivel de zoom del mapa (valor entre 0 y 21)
};

const Contact = () => {
  return (
    <div className="flex">
      <div className="w-1/2 mr-5 ml-5">
      <LoadScript googleMapsApiKey="AIzaSyBPB68uLtyZHNyjaBaMVBnFHvX5itxnwwU">
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
        <Helmet>
          <title>Contact | You-i Lab</title>
        </Helmet>
        
      </div>
      <div className="w-1/2 mr-5">

        <h1 className="text-center">Contact Page</h1>
        <form>
          <legend>Send us a message</legend>
          <div className="mb-4">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone">Phone</label>
            <input type="tel" name="phone" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="">Company</label>
            <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="">Message</label>
            <textarea className="w-full border border-gray-300 rounded px-3 py-2" rows="6"></textarea>
          </div>
          <div className="text-center">
            <input type="submit" value="Submit"
              className="bg-blue-500 text-white py-3 px-16 rounded hover:bg-blue-600 cursor-pointer mx-auto w-150 text-lg"/>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Contact;
