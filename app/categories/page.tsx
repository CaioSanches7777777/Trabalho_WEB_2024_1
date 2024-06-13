import { CategoryContext, CategoryContextProvider } from "@/context/CategoryContext";
import { useContext } from "react";
import AddCategory from "@/components/AddCategory";
import ListCategories from "@/components/ListCategories"
const Categories = ({}) => {
    
    return(
        <main className="h-screen">
            <CategoryContextProvider>
                <AddCategory/>
            </CategoryContextProvider>
        </main>
    );
}
export default Categories;