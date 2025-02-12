import React, { useState, useEffect } from 'react';

const LayoutNuevo = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <div className="min-h-screen flex flex-col">
      <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white text-pink-500 shadow-lg' : 'bg-transparent text-white'}`}>
        <div className="container mx-auto flex justify-between items-center p-4">
          <img
            src={scrolled ? "/static/images/logo-sigma-transparente.png" : "/static/images/logo-sigmacorp.png"}
            alt="Logo"
            className={`transition-all duration-300 ${scrolled ? 'w-20' : 'w-32'}`}
          />
          <nav className="flex space-x-4">
            <a href="#" className={`relative inline-block transition duration-300 ease-in-out ${scrolled ? 'text-pink-500' : 'text-white'} hover:text-pink-500`}>
              <span className="relative z-10">Inicio</span>
              <span className="absolute left-0 bottom-[-4px] w-full h-1 bg-pink-500 transform scale-x-0 transition-transform duration-300 ease-in-out origin-left hover:scale-x-100"></span>
            </a>
            <a href="#" className={`relative inline-block transition duration-300 ease-in-out ${scrolled ? 'text-pink-500' : 'text-white'} hover:text-pink-500`}>
              <span className="relative z-10">Nosotros</span>
              <span className="absolute left-0 bottom-[-4px] w-full h-1 bg-pink-500 transform scale-x-0 transition-transform duration-300 ease-in-out origin-left hover:scale-x-100"></span>
            </a>
            <a href="#" className={`relative inline-block transition duration-300 ease-in-out ${scrolled ? 'text-pink-500' : 'text-white'} hover:text-pink-500`}>
              <span className="relative z-10">Productos</span>
              <span className="absolute left-0 bottom-[-4px] w-full h-1 bg-pink-500 transform scale-x-0 transition-transform duration-300 ease-in-out origin-left hover:scale-x-100"></span>
            </a>
            <a href="#" className={`relative inline-block transition duration-300 ease-in-out ${scrolled ? 'text-pink-500' : 'text-white'} hover:text-pink-500`}>
              <span className="relative z-10">Maquila</span>
              <span className="absolute left-0 bottom-[-4px] w-full h-1 bg-pink-500 transform scale-x-0 transition-transform duration-300 ease-in-out origin-left hover:scale-x-100"></span>
            </a>
            <a href="#" className={`relative inline-block transition duration-300 ease-in-out ${scrolled ? 'text-pink-500' : 'text-white'} hover:text-pink-500`}>
              <span className="relative z-10">Recursos</span>
              <span className="absolute left-0 bottom-[-4px] w-full h-1 bg-pink-500 transform scale-x-0 transition-transform duration-300 ease-in-out origin-left hover:scale-x-100"></span>
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-grow pt-20">
        {children}
      </main>
      <footer className="bg-violeta text-white p-4 text-center">
        <p>© 2025 Mi Sitio Web</p>
      </footer>
    </div>
  );
};

export default LayoutNuevo;