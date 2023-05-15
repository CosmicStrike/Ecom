import React, { useState } from "react";
import ProductFilter from "../Components/ProductFilters";
import ProductContainer from "../Components/ProductContainer";

function Main() {
    const brands = ['Apple', 'OPPO', 'Vivo']
    const categories = ['Earbuds', 'Laptop', 'Mobile']
    const product = [1, 2, 3, 4]
    return (
        <div className="flex flex-row">
            <ProductFilter brands={brands} category={categories} />
            <ProductContainer products={product} />
        </div>
    )
}



export default Main;