'use client';

import React, {useContext, useState} from "react";
import Select from "react-dropdown-select";
import { CategoryContext, CategoryData } from "@/context/CategoryContext";

const ListCategories = ({}) => {
    const { categories } = useContext(CategoryContext);

    return (
        <div className="flex flex-col  gap-4 sm:items-center sm:justify-between mb-8 sm:mb-8">
            <h2 className="text-2xl font-semibold">Minhas tarefas</h2>

            <div className="flex">
            <ul className="max-w-md space-y-1 text-gray-500 list-inside">
                {categories.map((category:CategoryData, index:number) => (
                    
                    <li className={`flex flex-center gap-2 mb-2 `} key={index}>
                        
                        <div className="flex flex-center gap-2 mb-2 text-center" >
                            <button >
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 12H15" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12 9L12 15" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#323232" stroke-width="1.5"/>
                                </svg>
                            </button>

                            {category.name} 

                        </div>
                        
                        
                        
                    </li>

                ))}
            </ul>
            </div>

        </div>
    )

};
export default ListCategories;