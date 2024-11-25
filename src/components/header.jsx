import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png';

// ENCABEZADO
const Header = () => {
  const navigate = useNavigate();


  const handleLogout = () => {
   
    navigate('/loginForm'); 
  };

  const handleHome = () => {
    navigate('/Main'); 
  };

  return (
    <header className="bg-[#1B396A] text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src={logo}
              alt="TecNM Logo"
              className="mr-4 w-16 h-16"
            />
            <div>
              <h1 className="text-2xl font-bold">TecNM</h1>
              <p className="text-sm">Sistema de Tutorías</p>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
            <button
              onClick={handleHome}
              className="hover:text-gray-300 transition duration-300 flex items-center"
            >
              <i className="fas fa-home mr-2"></i> Inicio
            </button>
            <button
              onClick={handleLogout}
              className="hover:text-gray-300 transition duration-300 flex items-center"
            >
              <i className="fas fa-sign-out-alt mr-2"></i> Cerrar Sesión
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
