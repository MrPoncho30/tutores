import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'; 
import entradaImage from '../assets/entrada.jpg'; 

const LoginForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAnimation, setModalAnimation] = useState("translate-y-[-100%]");
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/Main");  
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalAnimation("translate-y-[-100%]");
    setTimeout(() => {
      setIsModalOpen(false);
    }, 500); 
  };

  useEffect(() => {
    if (isModalOpen) {
      setModalAnimation("translate-y-0"); 
    }
  }, [isModalOpen]);

  return (
    <main
      className="relative w-full h-full"
      style={{
        backgroundImage: `url(${entradaImage})`, 
        backgroundSize: "cover",  
        backgroundPosition: "center",  
        backgroundRepeat: "no-repeat", 
        backgroundAttachment: "fixed",
        height: "100vh",  
        width: "100%",  
      }}
    >
      <div className="flex justify-center items-center min-h-screen bg-black bg-opacity-50"> 
        <div className="max-w-lg mx-auto bg-white rounded-lg overflow-hidden shadow-lg my-6 px-8 z-10">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center text-[#1B396A] mb-6">Iniciar Sesión</h2>
            <form id="loginForm" onSubmit={(e) => {
              e.preventDefault();
              handleRedirect(); 
            }}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="flex flex-col items-center justify-between">
                <button
                  type="submit"
                  className="bg-[#1B396A] hover:bg-[#2C5282] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 mb-4"
                >
                  Iniciar Sesión
                </button>
                <a href="#" className="inline-block align-baseline font-bold text-sm text-[#1b396aa8] hover:text-[#2C5282] mb-2">
                  ¿Olvidaste tu contraseña?
                </a>

                <a 
                  href="#"
                  className="inline-block align-baseline font-bold text-sm text-[#1b396ab4] hover:text-[#2C5282]"
                  onClick={handleOpenModal} 
                >
                  ¿No tienes cuenta? ¡Regístrate!
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Modal de Registro */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div 
            className={`bg-white rounded-lg p-6 w-96 transition-transform duration-500 ease-out ${modalAnimation}`}
          >
            <h3 className="text-xl font-bold text-center text-[#1B396A] mb-4">Formulario de Registro</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              // // //
              handleCloseModal(); 
            }}>
              <div className="mb-4">
                <label htmlFor="newEmail" className="block text-gray-700 text-sm font-bold mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="newEmail"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="newPassword" className="block text-gray-700 text-sm font-bold mb-2">
                  Contraseña
                </label>
                <input
                  type="password"
                  id="newPassword"
                  name="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
                  Confirmar Contraseña
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#1B396A] hover:bg-[#2C5282] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                >
                  Registrarse
                </button>
              </div>
            </form>
            <div className="text-right mt-4">
              <button
                onClick={handleCloseModal} 
                className="text-[#1B396A] font-bold"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default LoginForm;
