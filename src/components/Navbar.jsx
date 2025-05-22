
import React from 'react';
import { FaCalendarAlt, FaBuilding, FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = React.useState('prestataire');

  const isNotHomePage = location.pathname !== '/';

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center">
          {isNotHomePage && (
            <button 
              onClick={() => navigate(-1)}
              className="mr-4 text-purple-600 hover:text-purple-800"
            >
              <FaArrowLeft className="text-xl" />
            </button>
          )}
          <span 
            onClick={() => navigate('/')}
            className="text-2xl font-bold ps-4 text-purple-600 cursor-pointer hover:text-purple-800"
          >
            Evena
          </span>
        </div>

        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => {
              setActiveLink('prestataire');
              navigate('/prestataire');
            }}
            className={`font-medium ${activeLink === 'prestataire' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-500 text-xl'}`}
          >
            Trouver un prestataire
          </button>
          <button 
            onClick={() => {
              setActiveLink('projet');
              navigate('/projet');
            }}
            className={`font-medium ${activeLink === 'projet' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-500 text-xl'}`}
          >
            Mes Projets
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={() => navigate('/login')}
            className="text-gray-700 hover:text-purple-600 font-medium"
          >
            Se connecter
          </button>
          <span className="h-5 w-px bg-gray-300"></span>
          <button 
            onClick={() => navigate('/signup')}
            className="text-gray-700 hover:text-purple-600 font-medium"
          >
            Inscrivez-vous
          </button>
        </div>
      </nav>

      {isNotHomePage ? (
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-800 mb-8"
          >
            <FaArrowLeft /> Retour
          </button>
      
        </div>
      ) : (
        <div className="container mx-auto px-10 py-16 ps-8 pe-8 flex flex-col md:flex-row">
          <div className="md:w-1/2 pr-8">
            <h1 className="text-4xl font-bold text-purple-600 mb-4">
              Assistant en ligne à<br />l'organisation des Evenement
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Votre site web unique d'organisation des evenement, avec tous les outils dont vous avez besoin pour créer la célébration de vos rêves.<br />
              Pas de frais cachés ! Pas besoin de s'inscrire !
            </p>
            <button 
              onClick={() => navigate('/projet')}
              className="bg-purple-200 hover:bg-purple-300 text-purple-800 font-bold py-3 px-6 rounded-lg w-64 transition-colors"
            >
              Créer un Projet d'événement
            </button>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 flex flex-col items-center">
            <div className="bg-gray-50 p-8 rounded-lg w-full max-w-md">
              <div className="flex justify-center mb-6">
                <FaCalendarAlt className="text-5xl text-purple-500" />
              </div>
              <p className="text-center text-gray-700 mb-6">
                Êtes-vous un organisateur d'evenements, prestataire ou lieu de réception ?<br />
                Commencez ici :
              </p>
              <button 
                onClick={() => navigate('/entreprise')}
                className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg w-full transition-colors flex items-center justify-center"
              >
                <FaBuilding className="mr-2" />
                Portail des entreprises
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;