'use client'

import { createContext, useState } from "react";
import { request } from "@/services/request";
import { setCookie } from "@/node_modules/nookies/dist/index";
import { useRouter } from "@/node_modules/next/navigation";

export type CategoryData = {
    name: string;
    img_url: string;
}

type CategoryType = {
    categories: CategoryData[]
    addCategory: (data: CategoryData)=>void;
}


export const CategoryContext = createContext({} as CategoryType);

export default function CategoryProvider( {children}: {children: React.ReactNode}){

    const [categories] = useState<CategoryData[]>([]);
    const [authError, setAuthError] = useState<string | null>(null)

    const router = useRouter();
    
    const addCategory = () =>{
        
    } 
    
    async function category({name, img_url}: CategoryData) {

        const result = await fetch('http://localhost:5000/registerUser',{   //ver se esse é o url correto do backend usado para registrar o usuario
            method: 'POST',
            body: JSON.stringify({name, img_url})
        });

        
    
    }
    return (
        <CategoryContext.Provider value={{addCategory, categories}}>
            {children}
        </CategoryContext.Provider>
    );
};