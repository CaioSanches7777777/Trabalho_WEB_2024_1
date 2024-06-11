import { CategoryContext } from "@/context/CategoryContext";
import { useContext } from "react";
import AddCategory from "@/components/AddCategory";
import ListCategories from "@/components/ListCategories"
const Categories = ({}) => {
    
    return(
        <main className="h-screen">
            
            <AddCategory></AddCategory>
        </main>
    );
}
export default Categories;