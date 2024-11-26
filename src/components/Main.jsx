import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardCard from "./dashboardCard";
import ProgressSection from "./ProgressSection";
import entradaImage from '../assets/entrada2.jpg'; 

// PAGINA INICIAL DEL DASH
const Main = () => {
  const navigate = useNavigate(); 

  const handleRedirect = (path) => {
    navigate(path); 
  };

  const handleAdditionalRedirect = (path) => {
    navigate(path);
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
            <h1 className="text-3xl font-bold text-[#0f1a2b] text-center mb-6">
              Bienvenido a tu Dashboard @USER
            </h1>
          </div>


          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DashboardCard
              title="Cuestionarios Actuales"
              description="Evalúa tus habilidades como tutor."
              buttonText="Ver Todos los Cuestionarios"
              buttonColor="bg-[#D19800]"
              headerColor="bg-[#D19800]" 
              onClick={() => handleRedirect("#")}
              additionalTexts={[
                { text: "Cuestionario de Competencias Tutorales", link: "/FormQuest" },
                { text: "Cuestionario 2", link: "#" },
              ]}
              onAdditionalClick={handleAdditionalRedirect}
            />
            <DashboardCard
              title="Cuestionarios Anteriores"
              description="Revisa y actualiza tus respuestas anteriores."
              buttonText="Ver Historial"
              buttonColor="bg-[#810620]"
              headerColor="bg-[#810620]"  
            />
            <DashboardCard
              title="Tu Perfil"
              description="Actualiza tu informacion personal y académica."
              buttonText="Ver Perfil"
              buttonColor="bg-[#9EBE5D]"
              headerColor="bg-[#9EBE5D]"  
            />
            <DashboardCard
              title="Calendario de Tutorías"
              description="Revisa y actualiza tus respuestas anteriores."
              buttonText="Ver Calendario"
              buttonColor="bg-[#810620]"
              headerColor="bg-[#810620]"  
            />
            <DashboardCard
              title="Card Extra xd"
              description="Revisa y actualiza tus respuestas anteriores."
              buttonText="Ver extra xd"
              buttonColor="bg-[#D19800]"
              headerColor="bg-[#D19800]"  
            />
          </div>

          <div className="max-w-6xl mx-auto mt-6">
            <ProgressSection />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
