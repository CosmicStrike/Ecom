import React from "react";

function ProductCard({ image, title, price, rating }) {
    return (
        <div className="flex flex-row m-2 h-[16rem] w-full bg-zinc-100 justify-around">
            <div className="w-[16rem] p-1">
                <img className="aspect-square" src={image} alt={title} />
            </div>
            <div>
                <p>{title}</p>
                <p>{rating}</p>
            </div>
            <div>
                <p>{price}</p>
                <button>
                    Add to Cart
                </button>
            </div>

        </div>
    )
}


export default ProductCard;