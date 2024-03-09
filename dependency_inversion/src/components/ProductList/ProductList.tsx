import React from 'react';
import { Product } from '../../hooks/Product/Product.tsx';

interface ProductListProps {
  products: Product[] | null;
}

const ProductList: React.FC<ProductListProps> = ({ products }): JSX.Element => {
  return (
    <div>
      {products?.map(product => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          {/* Add other product details as needed */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
