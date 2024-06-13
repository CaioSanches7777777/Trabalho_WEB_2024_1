'use client'

import AddProduct from "@/components/AddProduct";
import ListProduct from "@/components/ListProduct";
import { Product, ProductContextProvider } from "@/context/ProductContext";
import { useEffect, useState } from "react";
import { Category } from "@/context/CategoryContext";

const Products = async ({}) => {
  return (
    <main className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <ProductContextProvider>
        <ListProduct></ListProduct>
      </ProductContextProvider>
    </main>
  );
};

export default Products;