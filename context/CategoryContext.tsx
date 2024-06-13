'use client'

import React, { createContext, useState } from "react";
import { request } from "@/services/request";
import { setCookie } from "@/node_modules/nookies/dist/index";
import { useRouter } from "@/node_modules/next/navigation";
import { cookies } from "next/headers";

export type Category = {
    _id:string;
    name: string;
    img_url: string;
}
type UserAuthentication = {
    'x-access-token' : string
}
type CategoryType = {
    Categories: Category[]
    addCategory: (_id:string,name:string,img_url:string)=>void;
}


export const CategoryContext = createContext({} as CategoryType);

export const CategoryContextProvider = ( {children}: {children: React.ReactNode;}) => {
    const [Categories, setCategories] = useState<Category[]>([])

    const addCategory = (_id:string,name:string,img_url:string)=>{
        let newCategory = {
            _id:__dirname,
            name:name,
            img_url:img_url
        }
        setCategories([...Categories,newCategory]);
        request<UserAuthentication>('http://localhost:5000/categories',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': document.cookie
            },
            body: JSON.stringify({_id,name,img_url}),
            referrerPolicy: 'no-referrer',
            cache: 'no-store'
        })
    }


        
    
    
    return (
        <CategoryContext.Provider value={{Categories, addCategory}}>
            {children}
        </CategoryContext.Provider>
    );
};