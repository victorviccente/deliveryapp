// pages/Admin.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState('');
  const [rating, setRating] = useState('');
  const [deliveryFee, setDeliveryFee] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor
    console.log({
      name,
      description,
      logo,
      rating,
      deliveryFee,
      deliveryTime
    });
    // Redirecionar após a submissão
    navigate('/restaurants');
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Adicionar Restaurante</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Descrição</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Logo URL</label>
          <input
            type="text"
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
            required
            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Nota</label>
          <input
            type="text"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Taxa de Entrega</label>
          <input
            type="text"
            value={deliveryFee}
            onChange={(e) => setDeliveryFee(e.target.value)}
            required
            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Tempo de Entrega</label>
          <input
            type="text"
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(e.target.value)}
            required
            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg font-semibold"
        >
          Adicionar Restaurante
        </button>
      </form>
    </div>
  );
};

export default Admin;
