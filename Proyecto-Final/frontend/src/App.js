import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ColeccionPage from './pages/ColeccionPage';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
         <Route path='/' element={<HomePage />}></Route>
         <Route path='nosotros' element={<NosotrosPage />}></Route>
         <Route path='coleccion' element={<ColeccionPage />}></Route>
         <Route path='contacto' element={<ContactoPage />}></Route>
        </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;
