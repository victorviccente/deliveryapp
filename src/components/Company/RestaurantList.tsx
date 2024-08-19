// src/components/Company/RestaurantList.tsx
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaHeart, FaBicycle, FaClock, FaChevronLeft, FaChevronRight, FaSearch } from 'react-icons/fa';

interface Restaurant {
  id: number;
  name: string;
  description: string;
  logo: string;
  rating: number;
  deliveryFee: string;
  deliveryTime: string;
}

const restaurants: Restaurant[] = [
  { id: 1, name: 'McDonalds', description: 'Famoso por seus hambúrgueres e batatas fritas', logo: '/mcdonalds-logo.png', rating: 5.0, deliveryFee: 'R$ 5,00', deliveryTime: '30 min' },
  { id: 2, name: 'Burger King', description: 'Conhecido por seus Whoppers e onion rings', logo: '/burgerking-logo.png', rating: 4.8, deliveryFee: 'R$ 5,00', deliveryTime: '25 min' },
  { id: 3, name: 'KFC', description: 'Famoso por seu frango frito e acompanhamentos', logo: '/kfc-logo.png', rating: 4.7, deliveryFee: 'R$ 6,00', deliveryTime: '35 min' },
  { id: 4, name: 'Subway', description: 'Especializado em sanduíches personalizados', logo: '/subway-logo.png', rating: 4.9, deliveryFee: 'R$ 4,00', deliveryTime: '20 min' },
  { id: 5, name: 'Pizza Hut', description: 'Famoso por suas pizzas e massas muito gostosas', logo: '/pizzahut-logo.png', rating: 4.6, deliveryFee: 'R$ 7,00', deliveryTime: '40 min' },
];

const RestaurantList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [favoritedRestaurants, setFavoritedRestaurants] = useState<number[]>([]);
  const navigate = useNavigate();
  const listRef = useRef<HTMLDivElement>(null);

  const handleViewProducts = (restaurant: Restaurant) => {
    navigate(`/restaurants/${restaurant.id}/products`, { state: { restaurant } });
  };

  const handleFavoriteToggle = (restaurantId: number) => {
    setFavoritedRestaurants((prev) =>
      prev.includes(restaurantId)
        ? prev.filter(id => id !== restaurantId)
        : [...prev, restaurantId]
    );
  };

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedRestaurants = filteredRestaurants.slice(0, 8);

  const scroll = (direction: 'left' | 'right') => {
    if (listRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      listRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-8">
      {/* Campo de busca */}
      <div className="mb-8">
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Buscar restaurante..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-lg shadow-md px-4 py-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-red-600 rounded-r-lg text-white">
            <FaSearch size={20} />
          </button>
        </div>
      </div>

      {/* Título e opção de ver todos */}
      <div className="relative mb-8 flex items-center justify-between">
        <h4 className="text-lg font-inter font-bold text-primary text-white">
          Restaurantes Recomendados
        </h4>
        <button
          className="text-white font-semibold"
          onClick={() => navigate('/restaurants/all')} 
        >
          Ver todos &gt;
        </button>
      </div>

      {/* Lista de restaurantes */}
      <div className="relative">
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-gray-700 z-10"
          onClick={() => scroll('left')}
        >
          <FaChevronLeft size={24} />
        </button>

        <div ref={listRef} className="flex overflow-x-hidden space-x-4 pb-4 scrolling-container">
          {displayedRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="flex-shrink-0 w-64 bg-red-600 rounded-lg shadow-md overflow-hidden relative">
              <div className="relative">
                <div className="absolute top-2 left-2 bg-white text-black px-2 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                  <FaStar className="text-yellow-500" />
                  <span>{restaurant.rating}</span>
                </div>
                <button
                  className={`absolute top-2 right-2 p-1 rounded-full ${favoritedRestaurants.includes(restaurant.id) ? 'bg-red-600 text-white' : 'bg-white text-red-600'} border border-red-600`}
                  onClick={() => handleFavoriteToggle(restaurant.id)}
                >
                  <FaHeart size={20} />
                </button>
                <img
                  src={restaurant.logo}
                  alt={restaurant.name}
                  className="w-full h-20 object-contain"
                />
              </div>
              <div className="p-3">
                <h5 className="text-lg font-semibold text-white">{restaurant.name}</h5>
                <p className="text-gray-200 text-sm">{restaurant.description}</p>
                <div className="flex items-center space-x-4 mt-2 text-white">
                  <div className="flex items-center space-x-1">
                    <FaBicycle size={16} />
                    <span>{restaurant.deliveryFee}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaClock size={16} />
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                </div>
              </div>
              <button
                className="w-full bg-white hover:bg-gray-100 text-red-600 py-1 rounded-b-lg font-semibold"
                onClick={() => handleViewProducts(restaurant)}
              >
                Ver Restaurante
              </button>
            </div>
          ))}
        </div>

        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-gray-700 z-10"
          onClick={() => scroll('right')}
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default RestaurantList;