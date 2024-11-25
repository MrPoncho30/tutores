import Question from './Question'; // Ajusta la ruta si está en otra carpeta

const FormularioCuestionario = () => {
    return (
<div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 mt-20 mb-6">
        <h1 className="text-3xl font-bold text-[#1B396A] mb-6 mt-6">Cuestionario de Competencias Tutorales</h1>
        <p className="text-gray-600 mb-6">
          Este cuestionario está diseñado para evaluar tus habilidades y conocimientos como tutor. Por favor, responde honestamente a cada pregunta.
        </p>
        <form>
          <div className="space-y-6">
            <Question title="1. ¿Cuál es tu nivel de experiencia en tutoría académica?">
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="experiencia" value="1" className="mr-2" />
                  <span>Principiante (menos de 1 año)</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="experiencia" value="2" className="mr-2" />
                  <span>Intermedio (1-3 años)</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="experiencia" value="3" className="mr-2" />
                  <span>Avanzado (más de 3 años)</span>
                </label>
              </div>
            </Question>
  
            <Question title="2. ¿Qué estrategias utilizas para motivar a tus tutorados?">
              <textarea
                name="estrategias"
                rows="4"
                className="w-full p-2 border rounded-md"
                placeholder="Describe tus estrategias aquí..."
              ></textarea>
            </Question>
  
            <Question title="3. ¿Cómo manejas situaciones de conflicto o desacuerdo con tus tutorados?">
              <textarea
                name="manejo_conflictos"
                rows="4"
                className="w-full p-2 border rounded-md"
                placeholder="Explica tu enfoque aquí..."
              ></textarea>
            </Question>
  
            <Question title="4. Califica tu habilidad para comunicarte efectivamente con tus tutorados:">
              <div className="flex items-center space-x-4">
                <input type="range" name="comunicacion" min="1" max="5" className="w-full" />
                <span className="text-sm text-gray-600">1 (Necesita mejorar) - 5 (Excelente)</span>
              </div>
            </Question>
  
            <Question title="5. ¿Qué áreas de tu desempeño como tutor crees que necesitas mejorar?">
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" name="mejoras[]" value="conocimiento" className="mr-2" />
                  <span>Conocimiento del tema</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" name="mejoras[]" value="comunicacion" className="mr-2" />
                  <span>Habilidades de comunicación</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" name="mejoras[]" value="planificacion" className="mr-2" />
                  <span>Planificación de sesiones</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" name="mejoras[]" value="evaluacion" className="mr-2" />
                  <span>Evaluación del progreso del tutorado</span>
                </label>
              </div>
            </Question>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="bg-[#1B396A] text-white px-6 py-2 rounded-full hover:bg-[#2C5282] transition duration-300"
            >
              Enviar Cuestionario
            </button>
          </div>
        </form>
      </div>
    );
  };
  export default FormularioCuestionario;
