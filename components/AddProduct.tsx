'use client';

import { ProductContext } from '@/context/ProductContext';
import React, {useContext, useState} from 'react';

const AddProduct = ({}) => {

    const { Products, addProduct } = useContext(ProductContext);
    const [_id, setId] = useState('');
    const [name, setName] = useState('');
    const [qtd, setQtd] = useState(0);
    const [category, setCategory] = useState('');
    //const [description, setDescription] = useState('');
    //const [preco, setPreco] = useState(0);


    const saveProduct = (e: {preventDefault: () => void}) => {
        e.preventDefault();
        console.log('Lista antes de incluir: ' + Products);
        addProduct(_id, name, qtd, category);
        setId(_id);
    }

    return (
        <div className="text-center">
            <h3 className="mb-4 text-xl font-semibold text-gray-600">Adicionar Tarefa</h3>
            <form onSubmit={saveProduct}>
                <div className="space-x-2 space-y-2">
                    
                    <input 
                        type="string" 
                        placeholder="Forneça o id do produto" 
                        className="border border-graya-500 px-4 py-2 rounded-xl focus:border-blue-600 focus:outline-none focus:border-2"
                        name="id"
                        value={_id}
                        onChange={(e) => setId(e.target.value)}
                    />
                    <input 
                        type="string" 
                        placeholder="Forneça o nome do produto" 
                        className="border border-graya-500 px-4 py-2 rounded-xl focus:border-blue-600 focus:outline-none focus:border-2"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                        placeholder="Forneça a quantidade do produto" 
                        className="border border-graya-500 px-4 py-2 rounded-xl focus:border-blue-600 focus:outline-none focus:border-2"
                        name="quantidade"
                        value={qtd}
                        onChange={(e) => setQtd(parseInt(e.target.value))}
                    />
                    
                    <input 
                        type="category" 
                        placeholder="Forneça a categoria do produto" 
                        className="border border-graya-500 px-4 py-2 rounded-xl focus:border-blue-600 focus:outline-none focus:border-2"
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
                <div className="space-y-3">
                    <button 
                        type="submit"
                        className="bg-gray-600 text-white px-4 py-2 rounded-lg mx-2 hover:bg-blue-600"
                    >
                        Incluir
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;