import React from "react";
//SECCION DE PROGRESO//
const ProgressSection = () => {
  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md ">
      <h2 className="text-2xl font-bold text-[#1B396A] mb-4">Tu Progreso</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800">Cuestionarios Completados</h3>
          <p className="text-3xl font-bold text-blue-600">3/5</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800">Sesiones de Tutoría</h3>
          <p className="text-3xl font-bold text-green-600">8</p>
        </div>
        <div className="bg-purple-100 p-4 rounded-lg">
          <h3 className="font-semibold text-purple-800">Recursos Consultados</h3>
          <p className="text-3xl font-bold text-purple-600">12</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <h3 className="text-xl font-bold text-[#1B396A] mb-4">Progreso</h3>
      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-[#D19800] w-2/3"></div>
      </div>
      <p className="text-sm text-gray-600 mt-2">66% completado</p>
    </div>
    </div>
  );
};

export default ProgressSection;
