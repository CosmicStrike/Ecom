import React, { useState } from "react";
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import ProductNotFound from '../Public/Images/product-not-found.jpg';
function Products() {

    const [imageNumber, setImageNumber] = useState(0);// Stores current image index 

    const product = useLoaderData();// Loads the product passed from route

    const location = useLocation();// Gives current url

    const navigate = useNavigate();// To navigate back to main page

    if (product === null) {// If no product title matches the url then display product not found page
        return (
            <div className="w-1/2 h-[24rem] flex flex-col justify-center items-center rounded-md shadow-lg text-center mx-auto my-10 bg-gray-100">
                <div className="shadow-lg"><img className="aspect-square" src={ProductNotFound} alt="Product nots found" /></div>
                <p className="text-4xl p-10">Product not found</p>
            </div>
        );
    }
    
    return (

        <div className="flex flex-col">
            <div className="flex flex-row">
                <button className="w-[6rem] font-extrabold text-lg m-1 shadow-sm text-gray-50 bg-blue-500 hover:bg-blue-600" onClick={() => { navigate((location?.state?.from === undefined) ? '/' : location?.state?.from) }}>
                    Back
                </button>
                <div className="w-full h-10 bg-slate-100 m-1"></div>
            </div>
            <div className="flex flex-row m-2 justify-center">
                <div className="w-2/5 h-[46rem] flex flex-col items-center justify-start">
                    <div className="w-11/12 h-10 shadow-md rounded-sm bg-neutral-50 flex flex-row justify-between items-center">
                        <button className="material-symbols-outlined rounded-xl w-10 m-2 h-8 bg-neutral-200 " onClick={() => {
                            setImageNumber(((imageNumber - 1) < 0 ? (product.images.length - 1) : (imageNumber - 1)) % product.images.length);

                        }}>
                            navigate_before
                        </button>
                        <div className="font-bold text-lg">
                            {imageNumber + 1}/{product.images.length}
                        </div>
                        <button className="material-symbols-outlined rounded-xl w-10 m-2 h-8 bg-neutral-200" onClick={() => {
                            setImageNumber(Math.abs(imageNumber + 1) % product.images.length);

                        }}>
                            navigate_next
                        </button>
                    </div>
                    <img className="max-h-[44rem] p-4 aspect-auto" src={product.images[imageNumber]} alt={`${product.title}`} />

                </div>
                <div className="w-3/5 h-full flex flex-col justify-evenly bg-neutral-50 p-8 rounded-md shadow-md">
                    <div className="text-5xl m-4 font-semibold">
                        {product.title}

                        <div className="text-lg font-normal">
                            Rating: {product.rating}
                        </div>
                    </div>
                    <div className="text-4xl m-4">
                        Rs.{product.price}
                    </div>
                    <div className="text-lg m-4">
                        Description:<br /> {product.description}
                    </div>
                    <button className="self-start m-4 font-bold bg-violet-500 rounded-sm text-white text-lg w-36 p-2">
                        Add to Cart
                    </button>
                </div>
            </div>

        </div >
    )
}


export default Products;