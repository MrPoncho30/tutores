const DashboardCard = ({ title, description, buttonText, buttonColor, headerColor, onClick, additionalTexts, onAdditionalClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className={`${headerColor} h-12 w-full rounded-t-lg`} />
      
      <div className="p-6">
        <h2 className="text-xl font-semibold text-[#1B396A] mb-4 flex items-center">
          {title}
        </h2>
        <p className="text-gray-600 mb-4">{description}</p>
               
        {additionalTexts && additionalTexts.length > 0 && (
          <div className="mt-4">
            {additionalTexts.map((text, index) => (
              <div
                key={index}
                onClick={() => onAdditionalClick(text.link)}
                className="text-blue-600 cursor-pointer hover:underline mb-2"
              >
                {text.text}
              </div>
            ))}
          </div>
        )}

        {/* Botón */}
        <button
          onClick={onClick}  
          className={`${buttonColor} rounded-lg py-2 px-4 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-opacity-90`}
        >
          {buttonText}
        </button>

      </div>
    </div>
  );
};

export default DashboardCard;
