import React, { useState } from "react";
import ProductFilter from "../Components/ProductFilters";
import ProductContainer from "../Components/ProductContainer";

function Main({ products, brands, categories }) {
    // Search bar content for searching the products by name
    const [searchProducts, setSearchProducts] = useState((localStorage.getItem('productSearch') === null) ? '' : localStorage.getItem('productSearch'));

    // This will store only those brands which user wants to see, filtered ones
    const [Brands, setBrands] = useState(localStorage.getItem('brandSelected') === null ? [] : localStorage.getItem('brandSelected').split(','));

    // This will store only those categories which user wants to see,
    const [Categories, setCategories] = useState(localStorage.getItem('categorySelected') === null ? [] : localStorage.getItem('categorySelected').split(','));

    // This will store range of price which user wants to filter
    const [Price, setPrice] = useState((localStorage.getItem('minPrice') === null) ? [0, 10000000] : [parseInt(localStorage.getItem('minPrice')), parseInt(localStorage.getItem('maxPrice'))]);

    return (
        <div className=" bg-slate-100">
            <div className="w-full h-[5rem] bg-slate-200 mb-2 text-center">
                <p className="text-6xl mx-2 font-bold font-serif text-slate-600">E-Shop</p>
            </div>
            <div className="flex flex-row">
                {/* Filter Component : Responsible for setting up filters */}
                <ProductFilter brands={[brands, setBrands]} categories={[categories, setCategories]} setSearchProducts={setSearchProducts} setPrice={setPrice} />

                {/* Product Component : Responsible for displaying products according the filters */}
                <ProductContainer products={products} brands={Brands} categories={Categories} searchProducts={searchProducts} price={Price} />
            </div>
        </div>
    )
}



export default Main;