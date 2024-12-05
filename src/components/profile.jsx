import React from "react";
import entradaImage from '../assets/entrada2.jpg'; 


const ProfilePage = () => {
  return (
    <div className="relative">
      <main
        className="relative w-full min-h-screen"
        style={{
            backgroundImage: `url(${entradaImage})`, 
            backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="relative z-10 p-6 pt-20 mt-6">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-bold text-[#0f1a2b] text-center mb-6">
              Mi Perfil
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-semibold text-[#0f1a2b]">
                  Información Personal
                </h2>
                <p className="mt-2 text-gray-600">
                  Nombre: <span className="font-medium">Angel Alfonso Avila García</span>
                </p>
                <p className="mt-2 text-gray-600">
                  Correo: <span className="font-medium">user@merida.tecnm.mx</span>
                </p>
                <p className="mt-2 text-gray-600">
                  Teléfono: <span className="font-medium">+52 123-456-780</span>
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#0f1a2b]">
                  Información Académica
                </h2>
                <p className="mt-2 text-gray-600">
                  Carrera: <span className="font-medium">Ingeniería en Sistemas</span>
                </p>
                <p className="mt-2 text-gray-600">
                  Semestre: <span className="font-medium">8º</span>
                </p>
                <p className="mt-2 text-gray-600">
                  Matrícula: <span className="font-medium">A12345678910</span>
                </p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                className="px-6 py-3 rounded-lg bg-[#9EBE5D] text-white font-bold hover:bg-[#86A14A] transition duration-300"
              >
                Editar Perfil
              </button>
            </div>
          </div>
        </div>
        
      </main>
    </div>
    
  );
};

export default ProfilePage;
