'use client' //para rodar como se fosse do lado do cliente

//'use server' //para rodar como se fosse do lado do servidor

import React, { useContext, useState } from "react";
import { CategoryContext } from "@/context/CategoryContext";

const AddCategory = ({}) => {
    
    const { addCategory, categories } = useContext(CategoryContext);
    const [img_url, setURL] = useState('');
    const [name, setName] = useState('');

    const saveCategory = (e: {preventDefault: () => void}) => {
        fetch('http://localhost:5000/categories',{   //ver se esse é o url correto do backend usado para registrar o usuario
            method: 'POST',
            body: JSON.stringify({name, img_url})
        });
    }

    return (
        <div className="text-center">
            <h3 className="mb-4 text-xl font-semibold text-gray-600">Adicionar Categoria</h3>
            <form onSubmit={saveCategory}>

                <input type="text" placeholder="Nomeie a categoria" className="border border-gray-500 px-4 py-2 rounded-lg" name="TaskName" value={name} onChange={(e) => setName(e.target.value)}>
                </input>

                <input type="text" placeholder="insira a URL da imagem" className="border border-gray-500 px-4 py-2 rounded-lg" name="description" value={img_url} onChange={(e) => setURL(e.target.value)}>
                </input>

                <br />

                <button className="mt-3 bg-gray-600 text-white p-2 rounded-lg" type="submit" onClick={() => console.log('Clicou no botão.')}>
                    Incluir
                </button>

            </form>
        </div>
    );
};

export default AddCategory;