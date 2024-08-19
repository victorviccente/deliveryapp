import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaSignInAlt, FaTimes } from 'react-icons/fa'; // Importa os ícones necessários

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="relative">
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        } z-20`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-red-700 text-white w-64 transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } z-30`}
      >
        <div className="flex flex-col items-center mt-10 space-y-4 px-4">
          <div className="flex items-center justify-between w-full mb-6">
            <h2 className="text-lg font-bold">Menu</h2>
            <button
              onClick={handleSidebarToggle}
              className="text-white text-2xl"
            >
              <FaTimes />
            </button>
          </div>
          <button
            onClick={handleLoginClick}
            className="w-full bg-white text-red-600 py-2 rounded-lg font-semibold flex items-center justify-center space-x-2"
          >
            <FaSignInAlt />
            <span>Faça seu Login</span>
          </button>
        </div>
      </div>

      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md flex items-center justify-between px-6 py-4 z-10">
        <h1 className='font-inter font-bold cursor-pointer'onClick={() => navigate('/')}>Léozão Delivery</h1>
        <button
          onClick={handleSidebarToggle}
          className="text-red-600 text-2xl"
        >
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
