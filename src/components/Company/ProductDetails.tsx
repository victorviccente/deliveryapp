/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

interface ProductDetailsProps {
  product: {
    id: number;
    name: string;
    description: string;
    logoProduct: string;
    price: string;
    discountedPrice?: string;
  };
  onClose: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Função para fechar o modal se clicar fora do conteúdo
  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    // Adiciona o event listener quando o modal é montado
    document.addEventListener('mousedown', handleClickOutside);

    // Remove o event listener quando o modal é desmontado
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={onClose}>
          <FaTimes size={20} /> {/* Ícone de "X" */}
        </button>
        <img src={product.logoProduct} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-lg font-semibold mb-4">{product.price}</p>
        {product.discountedPrice && (
          <p className="text-lg font-semibold text-red-600">{product.discountedPrice}</p>
        )}
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
