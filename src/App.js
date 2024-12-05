import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import Header from './components/header';
import Footer from './components/footer';
import LoginForm from './components/loginForm'; 
import Main from './components/Main'; 
import FormularioCuestionario from './components/FormQuest'; 
import Home from './components/home';
import 'font-awesome/css/font-awesome.min.css';
import ProfilePage from "./components/profile";



const App = () => (
  <Router>
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <Routes>
        {/* Redirigir automáticamente a '/home' desde la ruta raíz */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/loginForm" element={<LoginForm />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/FormQuest" element={<FormularioCuestionario />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;