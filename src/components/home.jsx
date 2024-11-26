import React from 'react';
import { Link } from 'react-router-dom'; 

const Home = () => (
  <div className="flex flex-col min-h-screen bg-gray-100">
    <header className="bg-[#1B396A] text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <div className="flex items-center mb-4 md:mb-0">
            
            <img src="/resources/tecnm.png" alt="TecNM Logo" className="mr-4 w-[60px] h-[60px] rounded-full shadow-md" />
            <div>
              <h1 className="text-2xl font-bold">TecNM</h1>
              <p className="text-sm">Sistema de Tutorías</p>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
            <Link to="/Main" className="hover:text-gray-300 transition duration-300 flex items-center">
              <i className="fas fa-home mr-2 text-xl"></i> Inicio
            </Link>
            <Link to="/loginForm" className="hover:text-gray-300 transition duration-300 flex items-center">
              <i className="fas fa-sign-in-alt mr-2 text-xl"></i> Iniciar Sesión
            </Link>
          </nav>
        </div>
      </div>
    </header>

    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1B396A] mb-6 text-center">Bienvenido al Sistema de Tutorías TecNM</h1>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="p-6">
            <p className="text-lg text-gray-700 mb-4">
              Descubre un mundo de apoyo académico personalizado diseñado especialmente para ti.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/loginForm" 
                className="bg-[#1B396A] text-white px-6 py-3 rounded-full hover:bg-[#2C5282] transition duration-300 transform hover:scale-105 flex items-center"
              >
                Comenzar Mi Viaje Académico
              </Link>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-bold text-[#1B396A] mb-4">¿Por qué usar nuestro sistema?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Apoyo personalizado de tutores expertos</li>
              <li>Seguimiento detallado de tu progreso académico</li>
              <li>Recursos educativos adaptados a tus necesidades</li>
              <li>Flexibilidad para programar sesiones de tutoría</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-bold text-[#1B396A] mb-4">Beneficios para estudiantes</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Mejora tu rendimiento académico</li>
              <li>Desarrolla habilidades de estudio efectivas</li>
              <li>Recibe orientación profesional</li>
              <li>Conecta con una comunidad de aprendizaje</li>
            </ul>
          </div>
          
        </div>
      </div>
    </main>
  </div>
);

export default Home;
