import React from 'react';

const Text = () => {
    return (
        <div classname='bg-gray-300'>
        <div className="bg-gray-50">
        <p className='text-3xl text-center font-light ' >Notre service a aidé des dizaines de milliers de personnes  dans le monde entier à organiser leurs evenement de leurs rêves !</p>
    
        </div>
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      
        <h2 className="text-3xl font-bold text-purple-600 mb-12 text-center">
          Pourquoi vous avez besoin d'un organisateur d'evenement  en ligne
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">Planifier ensemble</h3>
            <p className="text-gray-700">
              Les meilleurs evenement sont planifiés ensemble, en équipe. Avec notre assistant d'organisation d'evenement en ligne, vos proches peuvent chacun jouer un rôle dans les préparatifs en temps réel de votre grand jour. Ils n'ont même pas besoin de créer un compte ! Il suffit de leur envoyer une rapide invitation en ligne, et ils utiliseront bientôt tous les mêmes outils de planification de mariage étonnants et faciles d'accès.
            </p>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">Outils de mariage en ligne</h3>
            <p className="text-gray-700">
              Que vous soyez un expert en organisation d'événements ou un couple qui se marie, nos outils de mariage professionnels vous feront gagner un nombre incalculable d'heures et rendront votre expérience de planification (presque) sans stress. Que vous créiez sans effort un plan de table de mariage en ligne ou que vous utilisiez notre modèle de calendrier pour garantir le bon déroulement de vos célébrations.
            </p>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">Stocké en toute sécurité</h3>
            <p className="text-gray-700">
              Nous comprenons le temps et l'énergie émotionnelle qu'il faut pour organiser un mariage. C'est pourquoi tout projet créé avec l'assistant d'organisation de mariage en ligne est stocké en toute sécurité sur notre système de stockage en nuage. Cela signifie qu'il n'est pas seulement protégé, mais qu'il se synchronise instantanément dès qu'un membre de votre groupe apporte un changement.
            </p>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
    }
    export default Text;