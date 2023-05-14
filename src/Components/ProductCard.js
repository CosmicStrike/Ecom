import React from "react";

function ProductCard({ image, title, price, rating }) {
    return (
        <div className="flex flex-col">
            <div>
                {image}
            </div>
            <div>
                <p>{title}</p>
                <p>{rating}</p>
            </div>
            <div>
                {price}
            </div>
            <button>
                Add to Cart
            </button>
        </div>
    )
}


export default ProductCard;