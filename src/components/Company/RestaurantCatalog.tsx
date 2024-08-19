import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../pages/Navbar';
import { FaStar, FaBicycle, FaClock, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProductDetails from './ProductDetails';

interface Restaurant {
  id: number;
  name: string;
  description: string;
  logo: string;
  rating: number;
  deliveryFee: string;
  deliveryTime: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  logoProduct: string;
  price: string;
  discountedPrice?: string;
  category: string;
}

const restaurantsData: Restaurant[] = [
  { id: 1, name: 'McDonalds', description: 'Rede de fast food famosa por seus hambúrgueres e batatas fritas.', logo: '/mcdonalds-logo.png', rating: 5.0, deliveryFee: 'R$ 5,00', deliveryTime: '30 min' },
  { id: 2, name: 'Burger King', description: 'Cadeia de fast food conhecida por seu Whopper e outros hambúrgueres grelhados.', logo: '/burgerking-logo.png', rating: 4.0, deliveryFee: 'R$ 6,00', deliveryTime: '25 min' },
];

const productsData: { [key: number]: Product[] } = {
  1: [
    { id: 1, name: 'Big Mac', description: 'Dois hambúrgueres, alface, queijo, molho especial, cebola, picles em um pão com gergelim.', price: 'R$ 20,00', logoProduct: '/bigmac.png', category: 'hamburgueres' },
    { id: 2, name: 'Big Tasty', description: 'Peito de frango empanado, alface e maionese em um pão.', price: 'R$ 18,00', logoProduct: '/bigtasty.jpeg', category: 'hamburgueres' },
    { id: 3, name: 'McFlurry', description: 'Sobremesa gelada com pedaços de chocolate.', price: 'R$ 12,00', logoProduct: '/mcflurry.jpeg', category: 'sobremesas' },
    { id: 4, name: 'Suco de Laranja', description: 'Suco natural de laranja.', price: 'R$ 8,00', logoProduct: '/sucodelaranja.png', category: 'sucos' },
  ],
  2: [
    { id: 5, name: 'Whopper', description: 'Hambúrguer com carne grelhada, alface, tomate, cebola e maionese.', price: 'R$ 22,00', logoProduct: '/whopper.png', category: 'hamburgueres' },
    { id: 6, name: 'Cheeseburger', description: 'Hambúrguer com queijo, alface, tomate e cebola.', price: 'R$ 17,00', logoProduct: '/cheeseburger.png', category: 'hamburgueres' },
    { id: 7, name: 'Sundae', description: 'Sobremesa gelada com calda de chocolate.', price: 'R$ 10,00', logoProduct: '/sundae.png', category: 'sobremesas' },
    { id: 8, name: 'Milkshake de Morango', description: 'Milkshake de morango com cobertura de chantilly.', price: 'R$ 15,00', logoProduct: '/milkshakemorango.png', category: 'sobremesas' },
    { id: 9, name: 'Suco de Laranja', description: 'Suco natural de laranja.', price: 'R$ 8,00', logoProduct: '/sucodelaranja.png', category: 'sucos' },
  ],
};

const RestaurantCatalog: React.FC = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant | undefined>(undefined);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!restaurantId) {
      setError('ID do restaurante não fornecido.');
      setLoading(false);
      return;
    }

    const loadRestaurantAndProducts = () => {
      const selectedRestaurant = restaurantsData.find((r) => r.id === parseInt(restaurantId));
      if (selectedRestaurant) {
        setRestaurant(selectedRestaurant);
        setProducts(productsData[selectedRestaurant.id] || []);
      } else {
        setError('Restaurante não encontrado.');
      }
      setLoading(false);
    };

    loadRestaurantAndProducts();
  }, [restaurantId]);

  const scroll = (direction: 'left' | 'right') => {
    if (listRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      listRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const filterProductsByCategory = (category: string) => {
    return products.filter((product) => product.category === category);
  };

  const openProductDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-7xl mx-auto mt-24">
      <Navbar />

      {/* Detalhes do Restaurante */}
      <div className="flex items-center mb-8">
        <img
          src={restaurant?.logo || '/default-restaurant-image.png'}
          alt={`Imagem de ${restaurant?.name}`}
          className="w-1/3 h-48 object-cover rounded-lg"
        />
        <div className="w-2/3 ml-4 p-4 bg-white border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">{restaurant?.name || 'Nome do Restaurante'}</h2>
          <div className="flex justify-between items-center mt-2">
            <span className="text-lg font-semibold flex items-center">
              <FaStar className="text-yellow-400 mr-1" />
              {restaurant?.rating.toFixed(1) || '0.0'}
            </span>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-700">
                <FaBicycle className="mr-1" />
                <span>{restaurant?.deliveryFee || 'R$ 0,00'}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <FaClock className="mr-1" />
                <span>{restaurant?.deliveryTime || '0 min'}</span>
              </div>
            </div>
          </div>
          <p className="text-gray-700 mt-4">{restaurant?.description || 'Descrição do Restaurante'}</p>
        </div>
      </div>

      {/* Lista de Produtos */}
      {['hamburgueres', 'sobremesas', 'sucos'].map((category) => (
        <div key={category} className="mb-8">
          <h3 className="text-xl font-bold capitalize mb-4">{category}</h3>
          <div className="flex items-center">
            <button onClick={() => scroll('left')} className="text-gray-500 hover:text-gray-800">
              <FaChevronLeft size={24} />
            </button>
            <div
              ref={listRef}
              className="flex overflow-x-auto space-x-4 scrollbar-hide"
              style={{ scrollBehavior: 'smooth' }}
            >
              {filterProductsByCategory(category).map((product) => (
                <div
                  key={product.id}
                  className="min-w-[200px] bg-white border border-gray-200 rounded-lg shadow-md cursor-pointer p-4"
                  onClick={() => openProductDetails(product)}
                >
                  <img
                    src={product.logoProduct}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-md mb-2"
                  />
                  <h4 className="font-semibold">{product.name}</h4>
                  <p className="text-gray-700">{product.price}</p>
                  {product.discountedPrice && (
                    <p className="text-red-600">{product.discountedPrice}</p>
                  )}
                </div>
              ))}
            </div>
            <button onClick={() => scroll('right')} className="text-gray-500 hover:text-gray-800">
              <FaChevronRight size={24} />
            </button>
          </div>
        </div>
      ))}

      {/* Modal de Detalhes do Produto */}
      {selectedProduct && (
        <ProductDetails product={selectedProduct} onClose={closeProductDetails} />
      )}
    </div>
  );
};

export default RestaurantCatalog;
