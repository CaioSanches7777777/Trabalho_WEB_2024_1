'use client'

import { createContext, useState } from "react";
import { request } from "@/services/request";
import { setCookie } from "@/node_modules/nookies/dist/index";
import { useRouter } from "@/node_modules/next/navigation";

export type SignIdData = {
    username: string;
    password: string;
}

type AuthContextType = {
    login: (data: SignIdData) => void;
    authError: string | null
}

type UserAuthentication = {
    'x-access-token' : string
}

export const AuthContext = createContext({} as AuthContextType);

export default function AuthProvider( {children}: {children: React.ReactNode}){

    const [authError, setAuthError] = useState<string | null>(null)

    const router = useRouter();
    
    async function login({username, password}: SignIdData) {
       
        let {'x-access-token': token} = await request<UserAuthentication>('http://localhost:5000/auth',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username,password}),
            referrerPolicy: 'no-referrer',
            cache: 'no-store'
        })

       
        if(!token) setAuthError('Usuário ou senha inválidos. verifique e tente novamente!');
        else{
            
            setCookie(null, 'auth.token', token, { 
                maxAge: 60 * 60 * 1,
            });
            router.push('/products');
        }
    }
    return (
        <AuthContext.Provider value={{login, authError}}>
            {children}
        </AuthContext.Provider>
    );
};