'use client';

import React, {useContext, useEffect, useState} from 'react';
import { ProductContext, Product } from "@/context/ProductContext";
import Select from 'react-dropdown-select';
import { Category } from '@/context/CategoryContext';

const ListProduct = ({}) => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  //const [isLoading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    fetch('http://localhost:5000/products',{
        method:'GET'
    })
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
        //setLoading(false);
      });
    
    fetch('http://localhost:5000/categories',{
        method:'GET'
    })
      .then((res) => res.json())
      .then((data) => {
        setCategoryList(data);
      });
  }, []);
  
  if (!productList.length) return <p className="text-center">Não há produtos disponíveis para seu usuário</p>;
  if (!categoryList.length) return <p className="text-center">Não há categorias de produtos disponíveis para seu usuário</p>;
  const filterProducts = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory === 'all'
    ? productList
    : productList.filter(product => product.category === selectedCategory);
  return (
    <main className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <div id="filters" className="mb-4">
        <button onClick={() => filterProducts('all')} className="bg-blue-500 text-white py-2 px-4 m-2 rounded hover:bg-blue-700">Todos</button>
        {categoryList.map((category:Category) => (
          <button 
            key={category._id} 
            onClick={() => filterProducts(category.name)} 
            className="bg-blue-500 text-white py-2 px-4 m-2 rounded hover:bg-blue-700">
            {category.name}
          </button>
        ))}
      </div>
      <div className="grid lg:grid-cols-3 gap-4 w-full">
        {filteredProducts.map(({ _id, name, qtd, category,price,description }) => (
          <div key={_id} className="bg-white border border-gray-300 rounded p-4 shadow-md">
            <p className="text-xl font-semibold mb-2">{name}</p>
            <p className="text-gray-600">Quantidade: {qtd}</p>
            <p className="text-gray-600">Categoria: {category}</p>
            <p className="text-gray-600">Preço: {price}</p>
            <p className="text-gray-600">Descrição{description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ListProduct;