import React from 'react';
import RestaurantList from '../components/Company/RestaurantList';
import Navbar from './Navbar'; // Importe o componente Navbar
import '../index.css'; // Certifique-se de importar o CSS global

const Home: React.FC = () => {
  return (
    <div className="bg-ifoodRed min-h-screen pt-16">  
    <Navbar /> 
      <h1 className="text-6xl font-inter font-bold text-center mb-8 mt-10 text-white">
        Bem-vindo ao Delivery do Léozão
      </h1>
      <RestaurantList />
    </div>
  );
};

export default Home;
