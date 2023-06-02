import React from "react";
import { Link, useLocation } from 'react-router-dom';

function ProductCard({ image, title, price, rating, description }) {
    const location = useLocation();

    return (
        <div className="flex flex-col w-[32rem] m-2 rounded-lg mb-6 shadow-lg bg-neutral-100">
            <div className="w-[32rem] h-[24rem] flex flex-row justify-center bg-white">
                <img className="w-auto h-full p-2" src={image} alt={title} />
            </div>
            <div className="flex flex-row h-auto w-full justify-between items-start" >
                <div className="m-4">
                    <Link to={`/${title.replaceAll(' ', '-')}`} state={{ from: location }} className="text-2xl font-bold">{title}</Link>
                    <p>Rating: {rating}</p>
                </div>
                <div className="m-4 text-center mx-6">
                    <p className="text-3xl mb-2">Rs {price}</p>
                    <button className="bg-violet-500 w-[8rem] h-[2.4rem] shadow-sm rounded-md text-white font-bold">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}


export default ProductCard;