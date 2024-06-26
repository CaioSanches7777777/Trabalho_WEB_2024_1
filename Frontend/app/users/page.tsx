"use client";

import { RegisterContext, SignIdData } from "@/context/RegisterContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const Users = async ({}) => {
    const { register, handleSubmit } = useForm<SignIdData>();
    const { createUser, authError } = useContext(RegisterContext);

    const handleLogin = async (data : SignIdData) => {
        await createUser(data);
    }

    return (
        <div className="grid place-items-center mt-20 ">
            <form className="flex flex-col" onSubmit={handleSubmit(handleLogin)}>
                <label htmlFor="username">Usuário: </label>
                <input {...register('username')} type="text" name="username2" id="username2" placeholder="username"></input>

                <label htmlFor="password">Senha: </label>
                <input {...register('password')} type="text" name="password2" id="password2" placeholder="password"></input>

                <input type="submit" value="Criar usuário" />
            </form>
            {authError && <p>{authError}</p>}
        </div>
    );
}

export default Users;