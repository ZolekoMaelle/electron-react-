
import React from 'react';
import { FaTasks, FaWallet, FaUsers, FaTruck, FaRegAddressCard, FaRegCalendarAlt } from 'react-icons/fa'; 
import { useNavigate } from "react-router-dom";

const Reunion = () => {
  const navigate = useNavigate();
  
  return ( 
    <div className="flex flex-col items-center">
      
      <div className="flex items-center mt-10 justify-evenly w-full max-w-4xl">
        <a
          href="/Task"
          className="flex flex-col items-center text-center hover:text-blue-500"
        >
          <FaTasks 
            className="mb-2 text-6xl text-blue-600 cursor-pointer" 
            onClick={() => navigate("/Tp")} 
          />
          <span className="text-sm font-medium">Task</span>
        </a>

        <a
          href="/Bp"
          className="flex flex-col items-center text-center hover:text-blue-500"
        >
          <FaWallet 
            className="mb-2 text-6xl text-blue-600 cursor-pointer" 
            onClick={() => navigate("/Bp")} 
          />
          <span className="text-sm font-medium">Budget</span>
        </a>

        <a
          href="/Ip"
          className="flex flex-col items-center text-center hover:text-blue-500"
        >
          <FaUsers 
            className="mb-2 text-6xl text-blue-600 cursor-pointer" 
            onClick={() => navigate("/Ip")} 
          />
          <span className="text-sm font-medium">Invite</span>
        </a>

        <a
          href="/Fp"
          className="flex flex-col items-center text-center hover:text-blue-500"
        >
          <FaTruck 
            className="mb-2 text-6xl text-blue-600 cursor-pointer" 
            onClick={() => navigate("/Fp")} 
          />
          <span className="text-sm font-medium">Fournisseurs</span>
        </a>
      </div>

   
      <div className="w-full max-w-4xl p-6 mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-center text-blue-600">TACHES</h1>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-4 h-4 mr-2 text-white bg-blue-600 rounded-full">
              <span className="text-xs">!</span>
            </div>
            <span className="text-lg">Creer un budget</span>
          </div>
          <span className="text-sm text-gray-500">25/02/25</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-4 h-4 mr-2 text-white bg-blue-600 rounded-full">
              <span className="text-xs">!</span>
            </div>
            <span className="text-lg">Negocier une ceremonie</span>
          </div>
          <span className="text-sm text-gray-500">26/02/25</span>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-4 h-4 mr-2 text-white bg-blue-600 rounded-full">
              <span className="text-xs">!</span>
            </div>
            <span className="text-lg">Faire une liste des invites</span>
          </div>
          <span className="text-sm text-gray-500">27/02/25</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">0% termine</span>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mx-2">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '0%' }}></div>
          </div>
          <span className="text-sm text-gray-500">0 sur 16</span>
        </div>
      </div>

   
      <div className="w-full max-w-4xl p-6 mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">BUDGET</h1>

        <div className="flex w-full">
          <div className="flex-1 space-y-6">
            <div className="text-left">
              <h2 className="text-lg font-semibold text-gray-700">Solde</h2>
            </div>
            <div className="text-left">
              <h2 className="text-lg font-semibold text-gray-700">Payé</h2>
            </div>
            <div className="text-left">
              <h2 className="text-lg font-semibold text-gray-700">En attente</h2>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
              <span className="text-gray-700">Non defini</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span className="text-gray-700">0 $</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
              <span className="text-gray-700">0 $</span>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border-4 border-gray-200"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-full h-full rounded-full border-4 border-blue-500"
                  style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0)' }}
                ></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-blue-500">0%</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full max-w-4xl p-6 mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">INVITES</h1>

        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center mx-8">
            <FaRegAddressCard className="text-blue-600 text-4xl mb-2" />
            <span className="text-sm text-gray-700">Tous les invites</span>
          </div>

          <div className="h-16 border-l-2 border-gray-300"></div>

          <div className="flex flex-col items-center mx-8">
            <FaRegCalendarAlt className="text-blue-600 text-4xl mb-2" />
            <span className="text-sm text-gray-700">Tous les evenements</span>
          </div>
        </div>
      </div>

 
      <div className="w-full max-w-4xl p-6 mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">FOURNISSEURS</h1>

        <div className="flex w-full space-x-8">
          <div className="flex-1 space-y-4">
            <div className="text-left">
              <h2 className="text-lg font-semibold text-gray-700">Montant: 0$</h2>
            </div>
            <div className="text-left">
              <h2 className="text-lg font-semibold text-gray-700">Payé: 0$</h2>
            </div>
            <div className="text-left">
              <h2 className="text-lg font-semibold text-gray-700">En attente: 0$</h2>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border-4 border-blue-600"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-blue-600">0%</span>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">0 réservé</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              <span className="text-gray-700">0 en attente</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span className="text-gray-700">0 rejeté</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reunion;