// src/components/Company/ProductCatalog.tsx
import React, { useEffect, useState } from 'react';
import { fetchProductsByCompanyId } from '../utils/api';

interface ProductCatalogProps {
  companyId: string;
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({ companyId }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProductsByCompanyId(companyId);
        setProducts(data);
      } catch (err) {
        setError('Falha ao carregar produtos');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [companyId]);

  if (loading) return <p>Carregando produtos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Catálogo de Produtos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Preço: {product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCatalog;
