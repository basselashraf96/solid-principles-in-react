// useProduct.tsx
import axios from 'axios';
import { baseURL } from "../../api/api.tsx";
import { useState, useEffect } from 'react';

export interface Product {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

export const useProduct = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async (): Promise<void> => {
    try {
      const response = await axios.get<Product[]>(`${baseURL}products`);
      setProducts(response.data);
      setError(null);
    } catch (error) {
      setProducts(null);
      setError('Error fetching products');
    }
  };
  
  const addProduct = async (newProduct: Product): Promise<void> => {
    try {
      const response = await axios.post<Product>(`${baseURL}products`, newProduct);
      setProducts((prevProducts) => (prevProducts ? [...prevProducts, response.data] : [response.data]));
      setError(null);
    } catch (error) {
      setProducts(null);
      setError('Error adding product');
    }
  };

  // Use useEffect to fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return { products, error,addProduct  };
};
