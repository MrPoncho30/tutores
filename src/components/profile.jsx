import React, { useState, useEffect } from "react";
import entradaImage from "../assets/entrada2.jpg";

const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAnimation, setModalAnimation] = useState("translate-y-[-100%]");
  const [personalInfo, setPersonalInfo] = useState({
    name: "Angel Alfonso Avila García",
    email: "user@merida.tecnm.mx",
    phone: "+52 123-456-780",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
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

  const handleSave = () => {
    console.log("Datos actualizados:", personalInfo);
    handleCloseModal();
  };

  useEffect(() => {
    if (isModalOpen) {
      setModalAnimation("translate-y-0");
    }
  }, [isModalOpen]);

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
                  Nombre: <span className="font-medium">{personalInfo.name}</span>
                </p>
                <p className="mt-2 text-gray-600">
                  Correo: <span className="font-medium">{personalInfo.email}</span>
                </p>
                <p className="mt-2 text-gray-600">
                  Teléfono: <span className="font-medium">{personalInfo.phone}</span>
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
                onClick={handleOpenModal}
              >
                Editar Perfil
              </button>
            </div>
          </div>
        </div>

        {/* Modal EDITAR INFO */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div
              className={`bg-white rounded-lg p-6 w-full max-w-md transform transition-transform duration-500 ease-out ${modalAnimation}`}
            >
              <h2 className="text-2xl font-bold text-[#0f1a2b] mb-4">
                Editar Información Personal
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={personalInfo.name}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">
                    Correo
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={personalInfo.email}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">
                    Teléfono
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={personalInfo.phone}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded-lg"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-4">
                <button
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                  onClick={handleCloseModal}
                >
                  Cancelar
                </button>
                <button
                  className="px-4 py-2 bg-[#9EBE5D] text-white font-bold rounded-lg hover:bg-[#86A14A]"
                  onClick={handleSave}
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProfilePage;
