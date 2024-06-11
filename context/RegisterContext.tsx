'use client'

import { createContext, useState } from "react";
import { request } from "@/services/request";
import { setCookie } from "@/node_modules/nookies/dist/index";
import { useRouter } from "@/node_modules/next/navigation";

export type SignIdData = {
    username: string;
    password: string;
}

type RegisterContextType = {
    createUser: (data: SignIdData) => void;
    authError: string | null
}

type UserAuthentication = {
    '_id' : string
}

export const RegisterContext = createContext({} as RegisterContextType);

export default function RegisterProvider( {children}: {children: React.ReactNode}){

    const [authError, setAuthError] = useState<string | null>(null)

    const router = useRouter();
    
    async function createUser({username, password}: SignIdData) {

        const result = await fetch('http://localhost:5000/registerUser',{   //ver se esse é o url correto do backend usado para registrar o usuario
            method: 'POST',
            body: JSON.stringify({username, password})
        });
        
    }
    return (
        <RegisterContext.Provider value={{createUser, authError}}>
            {children}
        </RegisterContext.Provider>
    );
};