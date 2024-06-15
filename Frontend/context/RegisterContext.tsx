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
    'x-access-token' : string
}

export const RegisterContext = createContext({} as RegisterContextType);

export default function RegisterProvider( {children}: {children: React.ReactNode}){

    const [authError, setAuthError] = useState<string | null>(null)

    const router = useRouter();
    
    async function createUser({username, password}: SignIdData) {

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
            
            setCookie(undefined, 'auth.token', token, { 
                maxAge: 60 * 60 * 1,
            });
            request<UserAuthentication>('http://localhost:5000/registerUser',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token
                },
                body: JSON.stringify({username,password}),
                referrerPolicy: 'no-referrer',
                cache: 'no-store'
            })
        }
    }
    return (
        <RegisterContext.Provider value={{createUser, authError}}>
            {children}
        </RegisterContext.Provider>
    );
};