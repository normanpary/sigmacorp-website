import React, { useState, useEffect } from 'react';

const LayoutNuevo = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleCertifications = () => {
    setShowCertifications(!showCertifications);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white text-pink-500 shadow-lg' : 'bg-transparent text-white'}`}>
        <div className="container mx-auto flex justify-between items-center p-4">
          <img
            src={scrolled ? "/static/images/inicio/logo-sigma-color.png" : "/static/images/inicio/logo-sigma-blanco.png"}
            alt="Logo"
            className={`transition-all duration-300 ${scrolled ? 'w-32' : 'w-48'}`}
          />
          <nav className="hidden md:flex space-x-4">
            <a href="#" className={`relative inline-block transition duration-300 ease-in-out ${scrolled ? 'text-pink-500' : 'text-white'} hover:text-pink-500`}>
              <span className="relative z-10">Inicio</span>
              <span className="absolute left-0 bottom-[-4px] w-full h-1 bg-pink-500 transform scale-x-0 transition-transform duration-300 ease-in-out origin-left hover:scale-x-100"></span>
            </a>
            <div className="relative group">
              <a href="#" className={`relative inline-block transition duration-300 ease-in-out ${scrolled ? 'text-pink-500' : 'text-white'} hover:text-pink-500`}>
                <span className="relative z-10">Nosotros</span>
                <span className="absolute left-0 bottom-[-4px] w-full h-1 bg-pink-500 transform scale-x-0 transition-transform duration-300 ease-in-out origin-left hover:scale-x-100"></span>
              </a>
              <div className="absolute left-0 hidden mt-2 w-48 bg-white text-black shadow-lg group-hover:block">
                <a href="#" className="block px-4 py-2 hover:bg-pink-500 hover:text-white">Historia</a>
                <a href="#" className="block px-4 py-2 hover:bg-pink-500 hover:text-white">Misión y Visión</a>
                <a href="#" className="block px-4 py-2 hover:bg-pink-500 hover:text-white">Equipo</a>
              </div>
            </div>
            <div className="relative group">
              <a href="#" className={`relative inline-block transition duration-300 ease-in-out ${scrolled ? 'text-pink-500' : 'text-white'} hover:text-pink-500`}>
                <span className="relative z-10">Productos</span>
                <span className="absolute left-0 bottom-[-4px] w-full h-1 bg-pink-500 transform scale-x-0 transition-transform duration-300 ease-in-out origin-left hover:scale-x-100"></span>
              </a>
              <div className="absolute left-0 hidden mt-2 w-48 bg-white text-black shadow-lg group-hover:block">
                <a href="#" className="block px-4 py-2 hover:bg-pink-500 hover:text-white">Farmacéuticos</a>
                <a href="#" className="block px-4 py-2 hover:bg-pink-500 hover:text-white">Dispositivos Médicos</a>
                <a href="#" className="block px-4 py-2 hover:bg-pink-500 hover:text-white">Suplementos</a>
              </div>
            </div>
            <div className="relative group">
              <a href="#" className={`relative inline-block transition duration-300 ease-in-out ${scrolled ? 'text-pink-500' : 'text-white'} hover:text-pink-500`}>
                <span className="relative z-10">Servicios</span>
                <span className="absolute left-0 bottom-[-4px] w-full h-1 bg-pink-500 transform scale-x-0 transition-transform duration-300 ease-in-out origin-left hover:scale-x-100"></span>
              </a>
              <div className="absolute left-0 hidden mt-2 w-48 bg-white text-black shadow-lg group-hover:block">
                <a href="#" className="block px-4 py-2 hover:bg-pink-500 hover:text-white">Desarrollo de Productos</a>
                <a href="#" className="block px-4 py-2 hover:bg-pink-500 hover:text-white">Asesoría Regulatoria</a>
                <a href="#" className="block px-4 py-2 hover:bg-pink-500 hover:text-white">Distribución</a>
              </div>
            </div>
            <div className="relative group">
              <a href="#" className={`relative inline-block transition duration-300 ease-in-out ${scrolled ? 'text-pink-500' : 'text-white'} hover:text-pink-500`}>
                <span className="relative z-10">Noticias</span>
                <span className="absolute left-0 bottom-[-4px] w-full h-1 bg-pink-500 transform scale-x-0 transition-transform duration-300 ease-in-out origin-left hover:scale-x-100"></span>
              </a>
              <div className="absolute left-0 hidden mt-2 w-48 bg-white text-black shadow-lg group-hover:block">
                <a href="#" className="block px-4 py-2 hover:bg-pink-500 hover:text-white">Actualizaciones</a>
                <a href="#" className="block px-4 py-2 hover:bg-pink-500 hover:text-white">Eventos</a>
                <a href="#" className="block px-4 py-2 hover:bg-pink-500 hover:text-white">Publicaciones</a>
              </div>
            </div>
            <div className="relative group">
              <a href="#" className={`relative inline-block transition duration-300 ease-in-out ${scrolled ? 'text-pink-500' : 'text-white'} hover:text-pink-500`}>
                <span className="relative z-10">Contacto</span>
                <span className="absolute left-0 bottom-[-4px] w-full h-1 bg-pink-500 transform scale-x-0 transition-transform duration-300 ease-in-out origin-left hover:scale-x-100"></span>
              </a>
              <div className="absolute left-0 hidden mt-2 w-48 bg-white text-black shadow-lg group-hover:block">
                <a href="#" className="block px-4 py-2 hover:bg-pink-500 hover:text-white">Formulario de Contacto</a>
                <a href="#" className="block px-4 py-2 hover:bg-pink-500 hover:text-white">Ubicación</a>
                <a href="#" className="block px-4 py-2 hover:bg-pink-500 hover:text-white">Soporte</a>
              </div>
            </div>
          </nav>
          <button className="md:hidden text-white" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </header>
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-40 flex flex-col items-center justify-center text-white overflow-y-auto">
          <button className="absolute top-4 right-4" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <nav className="space-y-4 text-center">
            <a href="#" className="block text-2xl">Inicio</a>
            <div className="space-y-2">
              <a href="#" className="block text-2xl">Nosotros</a>
              <a href="#" className="block text-xl">Historia</a>
              <a href="#" className="block text-xl">Misión y Visión</a>
              <a href="#" className="block text-xl">Equipo</a>
            </div>
            <div className="space-y-2">
              <a href="#" className="block text-2xl">Productos</a>
              <a href="#" className="block text-xl">Farmacéuticos</a>
              <a href="#" className="block text-xl">Dispositivos Médicos</a>
              <a href="#" className="block text-xl">Suplementos</a>
            </div>
            <div className="space-y-2">
              <a href="#" className="block text-2xl">Servicios</a>
              <a href="#" className="block text-xl">Desarrollo de Productos</a>
              <a href="#" className="block text-xl">Asesoría Regulatoria</a>
              <a href="#" className="block text-xl">Distribución</a>
            </div>
            <div className="space-y-2">
              <a href="#" className="block text-2xl">Noticias</a>
              <a href="#" className="block text-xl">Actualizaciones</a>
              <a href="#" className="block text-xl">Eventos</a>
              <a href="#" className="block text-xl">Publicaciones</a>
            </div>
            <div className="space-y-2">
              <a href="#" className="block text-2xl">Contacto</a>
              <a href="#" className="block text-xl">Formulario de Contacto</a>
              <a href="#" className="block text-xl">Ubicación</a>
              <a href="#" className="block text-xl">Soporte</a>
            </div>
          </nav>
        </div>
      )}
      <main className="flex-grow pt-20">
        {children}
      </main>
      <footer className="bg-violeta text-white p-4 text-center relative">
        <p>© 2025 Mi Sitio Web</p>
        <button
          onClick={toggleCertifications}
          className="fixed bottom-6 left-8 z-50 w-15 h-15"
        >
          <img src="/static/images/inicio/boton-certificaciones.png" alt="Certificaciones" className="w-16 h-16" />
        </button>
        <div className={`fixed -bottom-12 left-16 z-40 transition-transform duration-300 ease-in-out transform ${showCertifications ? 'scale-100' : 'scale-0'} origin-left`}>
          <img src="/static/images/inicio/logos-certificaciones.png" alt="Logos Certificaciones" className="w-24" />
        </div>
      </footer>
      <style jsx>{`
        @keyframes scale-up {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes scale-down {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(0);
          }
        }
        .scale-100 {
          animation: scale-up 0.3s forwards;
        }
        .scale-0 {
          animation: scale-down 0.3s forwards;
        }
      `}</style>
    </div>
  );
};

export default LayoutNuevo;