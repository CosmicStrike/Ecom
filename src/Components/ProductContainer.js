import React from "react";
import ProductCard from './ProductCard'

function ProductContainer({ products }) {

    return (
        <div className="flex flex-col">{
            products.map((product) => <ProductCard key={Math.random()} image={"TestImage"} title={"Test title"} price={"Test price"} rating={"Test rating"} />)
        }
        </div>
    )
}


export default ProductContainer;