"use client";

import AddProduct from '@/components/AddProduct';
import React, {createContext, useState} from 'react';
import { request } from "@/services/request";



export type Product = {
    _id: string,
    name: string,
    qtd: number,
    category: string,
    price: number,
    description: string
}

type ProductContextType = {
    Products: Product[];
    addProduct: (_id:string, name:string, qtd:number, category:string,price:number,description:string) => void;
    removeProduct: (_id:string) => void;
    //changeCategory: (_id:string, new_Category:string) => void;
}

type UserAuthentication = {
    'x-access-token' : string
}

export const ProductContext = createContext({} as ProductContextType);

export const ProductContextProvider = ({ children } : {children: React.ReactNode;}) => {
    const [Products, setProducts] = useState<Product[]>([]);

    const addProduct = (_id:string,name:string,qtd:number,category:string,price:number,description:string)=>{
        let token = document.cookie;
        request<UserAuthentication>('http://localhost:5000/products',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            },
            body: JSON.stringify({_id,name,qtd,category,price,description}),
            referrerPolicy: 'no-referrer',
            cache: 'no-store'
        })
    }

/*  

    const addProduct = (_id:string, name:string, qtd:number, category:Category, preco:number, description:string) => {
        let newProduct = {
            _id: _id,
            name: name,
            qtd: qtd,
            category: category,
            preco: preco,
            description: description
        }
        setProducts([...Products, newProduct]);
    };
*/

    const removeProduct = (_id:string) => {
        setProducts(Products.filter((_:Product, index: number) => parseInt(_id) !== index));
    };

/*
    const changeCategory = (_id:string, new_Category:Category) => {
        Products[parseInt(_id)].category = new_Category;
    };
*/
    return (
        <ProductContext.Provider value={{ Products,addProduct,removeProduct }}>
            {children}
        </ProductContext.Provider>
    );
}