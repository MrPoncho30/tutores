import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardCard from "./dashboardCard";
import ProgressSection from "./ProgressSection";
import entradaImage from '../assets/entrada2.jpg'; 

// PAGINA INICIAL DEL DASH
const Main = () => {
  const navigate = useNavigate(); 

  const handleRedirect = () => {
    navigate("/FormQuest"); 
  };

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
        <div className="relative z-10 p-6 pt-20 mt-6 ">
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-center mb-6">
              Bienvenido a tu Dashboard @USER
            </h1>
          </div>

          {/* Tarjetas del Dashboard */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DashboardCard
              title="Cuestionarios Actuales"
              icon="fa-file-alt"
              description="Evalúa tus habilidades como tutor."
              buttonText="Ver Todos los Cuestionarios"
              buttonColor="bg-[#D19800]"
              headerColor="bg-[#D19800]" 
              onClick={handleRedirect}
            />
            <DashboardCard
              title="Cuestionarios Anteriores"
              icon="fa-history"
              description="Revisa y actualiza tus respuestas anteriores."
              buttonText="Ver Historial"
              buttonColor="bg-[#D19800]"
              headerColor="bg-[#D19800]"  
            />
          </div>

          {/* Sección de Progreso */}
          <div className="max-w-6xl mx-auto mt-6">
            <ProgressSection />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
