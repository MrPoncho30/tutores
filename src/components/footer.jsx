import React from "react";
//PIE DE PAGINA//
const Footer = () => (
  <footer className="bg-[#1B396A] text-white py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Contacto</h3>
          <p>Tecnológico Nacional de México</p>
          <p>Av. Universidad 1200, Col. Xoco</p>
          <p>Alcaldía Benito Juárez, C.P. 03330</p>
          <p>Ciudad de México</p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Política de Privacidad</a></li>
            <li><a href="#" className="hover:underline">Términos de Uso</a></li>
            <li><a href="#" className="hover:underline">Mapa del Sitio</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-bold mb-4">Síguenos</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; <span id="currentYear"></span> Tecnológico Nacional de México | Todos los derechos reservados</p>
      </div>
    </div>
  </footer>
);

export default Footer;
