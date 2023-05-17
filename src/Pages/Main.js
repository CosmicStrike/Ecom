import React, { useState } from "react";
import ProductFilter from "../Components/ProductFilters";
import ProductContainer from "../Components/ProductContainer";

function Main({ products, brands, categories }) {
    const [searchProducts, setSearchProducts] = useState('') // Search bar content for searching the products by name
    const [Brands, setBrands] = useState([]); // This will store only those brands which user wants to see, filtered ones
    const [Categories, setCategories] = useState([]);// This will store only those categories which user wants to see, 

    return (
        <div className="flex flex-row">
            <ProductFilter brands={[brands, setBrands]} categories={[categories, setCategories]} setSearchProducts={setSearchProducts} />
            <ProductContainer products={products} brands={Brands} categories={Categories} searchProducts={searchProducts} />
        </div>
    )
}



export default Main;