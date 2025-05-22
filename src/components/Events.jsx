
import React from 'react';
import { FaArrowRight, FaBirthdayCake, FaCalendarAlt, FaGraduationCap, FaHandshake, FaUsers, FaGlassCheers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Events = () => {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = React.useState(null);

  const eventTypes = [
    {
      icon: <FaGlassCheers className="w-12 h-12 mx-auto text-purple-600" />,
      title: "Mariage",
      description: "Tout ce dont vous avez besoin pour créer une liste complète d'invités à un mariage, y compris les exigences alimentaires, les préférences et même les RSVP.",
      action: "Organiser votre événement",
      path: "/mariage"
    },
    {
      icon: <FaBirthdayCake className="w-12 h-12 mx-auto text-purple-600" />,
      title: "Anniversaire",
      description: "Tout ce dont vous avez besoin pour créer une liste complète d'invités à un mariage, y compris les exigences alimentaires, les préférences et même les RSVP.",
      action: "Organiser votre anniversaire",
      path: "/anniversaire"
    },
    {
      icon: <FaUsers className="w-12 h-12 mx-auto text-purple-600" />,
      title: "Bapteme",
      description: "Tout ce dont vous avez besoin pour créer une liste complète d'invités à un mariage, y compris les exigences alimentaires, les préférences et même les RSVP.",
      action: "Organiser votre conférence",
      path: "/Bapteme"
    },
    {
      icon: <FaHandshake className="w-12 h-12 mx-auto text-purple-600" />,
      title: "Réunion",
      description: "Tout ce dont vous avez besoin pour créer une liste complète d'invités à un mariage, y compris les exigences alimentaires, les préférences et même les RSVP.",
      action: "Organiser votre réunion",
      path: "/reunion"
    },
    {
      icon: <FaCalendarAlt className="w-12 h-12 mx-auto text-purple-600" />,
      title: "Séminaire",
      description: "Tout ce dont vous avez besoin pour créer une liste complète d'invités à un mariage, y compris les exigences alimentaires, les préférences et même les RSVP.",
      action: "Organiser votre séminaire",
      path: "/seminaire"
    },
    {
      icon: <FaGraduationCap className="w-12 h-12 mx-auto text-purple-600" />,
      title: "Diplomation",
      description: "Tout ce dont vous avez besoin pour créer une liste complète d'invités à un mariage, y compris les exigences alimentaires, les préférences et même les RSVP.",
      action: "Organiser votre diplomation",
      path: "/diplomation"
    }
  ];

  const handleEventClick = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-3xl font-bold text-purple-600 mb-12">
          Simplifiez l'organisation de votre mariage grâce à ces outils uniques
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventTypes.map((event, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => handleEventClick(event.path)}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="text-center">
                {event.icon}
                <h2 className="mt-4 text-xl font-semibold text-gray-800">{event.title}</h2>
                <p className="mt-2 text-gray-600">{event.description}</p>
                <div className="mt-4 flex items-center justify-center">
                  <span className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
                    {event.action}
                  </span>
                  <FaArrowRight 
                    className={`ml-2 transition-colors duration-300 ${hoveredItem === index ? 'text-purple-600' : 'text-gray-500'}`} 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;


