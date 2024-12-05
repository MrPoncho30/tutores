import { useState } from 'react';
import { Question, QuestionOption } from './Question';

const FormularioCuestionario = () => {
  const [answeredQuestions, setAnsweredQuestions] = useState({
    experiencia: false,
    estrategias: false,
    manejo_conflictos: false,
    comunicacion: false,
    mejoras: false
  });
  const [selectedOption, setSelectedOption] = useState({experiencia: null});

  const handleSelectOption = (questionName, option) => {
    setSelectedOption((prevState) => ({
      ...prevState,
      [questionName]: option,
    }));
    setAnsweredQuestions((prevState) => ({
      ...prevState,
      [questionName]: true,
    }));
  };
  
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 mt-20 mb-6">
      <h1 className="text-3xl font-bold text-[#1B396A] mb-6 mt-6">Cuestionario de Competencias Tutorales</h1>
      <p className="text-gray-600 mb-6">
        Este cuestionario está diseñado para evaluar tus habilidades y conocimientos como tutor. Por favor, responde honestamente a cada pregunta.
      </p>
      <form>
        <div className="space-y-6">
        <Question
            title="1. ¿Cuál es tu nivel de experiencia en tutoría académica?"
            isAnswered={answeredQuestions.experiencia}
          >
            <QuestionOption
              value="A"
              label={
                <span>
                  <b>A.</b> Principiante (menos de 1 año)
                </span>
              }
              isSelected={selectedOption.experiencia === 'A'}
              onChange={() => handleSelectOption('experiencia', 'A')}
            />
      
            <QuestionOption
              value="B"
              label={
                <span>
                  <b>B.</b> Intermedio (1-3 años)
                </span>
              }
              isSelected={selectedOption.experiencia === 'B'}
              onChange={() => handleSelectOption('experiencia', 'B')}
            />
            <QuestionOption
              value="C"
              label={
                <span>
                  <b>C.</b> Avanzado (más de 3 años)
                </span>
              }
              isSelected={selectedOption.experiencia === 'C'}
              onChange={() => handleSelectOption('experiencia', 'C')}
            />
          </Question>


          <Question
            title="2. ¿Qué estrategias utilizas para motivar a tus tutorados?"
            isAnswered={answeredQuestions.estrategias}
          >
            <textarea
              name="estrategias"
              rows="4"
              className="w-full p-2 border rounded-md"
              placeholder="Describe tus estrategias aquí..."
              onBlur={() => handleSelectOption('estrategias')}
            ></textarea>
          </Question>

          <Question
            title="3. ¿Cómo manejas situaciones de conflicto o desacuerdo con tus tutorados?"
            isAnswered={answeredQuestions.manejo_conflictos}
          >
            <textarea
              name="manejo_conflictos"
              rows="4"
              className="w-full p-2 border rounded-md"
              placeholder="Explica tu enfoque aquí..."
              onBlur={() => handleSelectOption('manejo_conflictos')}
            ></textarea>
          </Question>

          <Question
            title="4. Califica tu habilidad para comunicarte efectivamente con tus tutorados:"
            isAnswered={answeredQuestions.comunicacion}
          >
            <div className="flex flex-col items-center space-y-6">
              <label className="text-2xl font-bold text-[#1B396A] mt-2 text-center">
                Habilidad de Comunicación
              </label>
              <div className="relative w-full max-w-lg">
                <input 
                  type="range" 
                  name="comunicacion" 
                  min="1" 
                  max="5" 
                  step="1" 
                  className="w-full h-4 bg-transparent appearance-none rounded-full cursor-pointer"
                  style={{
                    background: "linear-gradient(to right, #FF6F61, #FF9F70)", 
                  }}
                  onChange={() => handleSelectOption('comunicacion')} 
                />
                <style jsx>{`
                  input[type="range"]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    background-color: #FF6F61;
                    border: 2px solid #FF9F70;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                  }

                  input[type="range"]::-moz-range-thumb {
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    background-color: #FF6F61;
                    border: 2px solid #FF9F70;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                  }

                  input[type="range"]::-ms-thumb {
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    background-color: #FF6F61;
                    border: 2px solid #FF9F70;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                  }
                `}</style>
                <div className="absolute left-0 right-0 flex justify-between text-xs text-[#1B396A] mt-2">
                  <span className="font-semibold">1</span>
                  <span className="font-semibold">2</span>
                  <span className="font-semibold">3</span>
                  <span className="font-semibold">4</span>
                  <span className="font-semibold">5</span>
                </div>
              </div>
              <div className="flex items-center justify-between w-full max-w-lg">
                <span className="text-sm text-[#6198ff]">1 (Necesita mejorar)</span>
                <span className="text-sm text-[#6198ff]">5 (Excelente)</span>
              </div>
            </div>
          </Question>

          <Question
            title="5. ¿Qué áreas de tu desempeño como tutor crees que necesitas mejorar?"
            isAnswered={answeredQuestions.mejoras}
          >
            <div className="space-y-2">
            <label className="flex items-center">
                  <input type="checkbox" name="mejoras[]" value="conocimiento" className="mr-2" onChange={() => handleSelectOption('mejoras')}
                  />
                  <span>Conocimiento del tema</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" name="mejoras[]" value="comunicacion" className="mr-2" onChange={() => handleSelectOption('mejoras')} />
                  <span>Habilidades de comunicación</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" name="mejoras[]" value="planificacion" className="mr-2" onChange={() => handleSelectOption('mejoras')} />
                  <span>Planificación de sesiones</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" name="mejoras[]" value="evaluacion" className="mr-2" onChange={() => handleSelectOption('mejoras')} />
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
