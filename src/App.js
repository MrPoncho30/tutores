import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import Header from './components/header';
import Footer from './components/footer';
import LoginForm from './components/loginForm'; 
import Main from './components/Main'; 
import FormularioCuestionario from './components/FormQuest'; 

const App = () => (
  <Router>
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/loginForm" replace />} />
        <Route path="/loginForm" element={<LoginForm />} exact />
        <Route path="/Main" element={<Main />} exact />
        <Route path="/FormQuest" element={<FormularioCuestionario />} exact /> 
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
