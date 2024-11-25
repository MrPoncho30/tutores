import React from "react";

// CONTENEDORES TIPOS "CARTAS" DONDE SE VISUALIZAN CUESTIONARIOS, HISTORIAL, ETC.
const DashboardCard = ({ title, icon, description, buttonText, buttonColor, headerColor, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className={`${headerColor} h-12 w-full rounded-t-lg`} />
      
      <div className="p-6">
        <h2 className="text-xl font-semibold text-[#1B396A] mb-4 flex items-center">
          <i className={`fas ${icon} mr-2`}></i> {title}
        </h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <button
          onClick={onClick}  
          className={`${buttonColor} rounded-lg py-2 px-4 text-black transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-opacity-90`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default DashboardCard;
