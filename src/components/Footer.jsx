import React from 'react';
import { FaWhatsapp, FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-6 px-4 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        <div className="mb-4 md:mb-0"
        onClick={() => navigate('/projet')}>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-md transition-colors shadow-md">
            Créer un projet
          </button>
        </div>

        
        <div className="mb-4 md:mb-0 text-center">
          <p className="text-gray-700 text-sm md:text-base">
            © 2023 EventMaster. Tous droits réservés. | Politique de confidentialité
          </p>
        </div>

        
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
            <FaWhatsapp className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
            <FaFacebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
            <FaTwitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;