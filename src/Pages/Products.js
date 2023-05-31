import React, { useState } from "react";
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import ProductNotFound from '../Public/Images/product-not-found.jpg';
function Products() {
    // const navigate = useNavigate();
    const [imageNumber, setImageNumber] = useState(0);
    const product = useLoaderData();
    const location = useLocation();
    const navigate = useNavigate();

    console.log(product)
    if (product === null) {
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
                <div className="w-2/5 flex flex-col items-center">
                    <img className="w-full h-full p-4 aspect-square" src={product.images[imageNumber]} alt={`${product.title}`} />
                    <div className="w-11/12 h-10 shadow-sm rounded-full  flex flex-row justify-between">
                        <button className="material-symbols-outlined rounded-full w-14 bg-gray-200" onClick={() => {
                            setImageNumber(Math.abs(imageNumber - 1) % product.images.length);

                        }}>
                            navigate_before
                        </button>
                        <div>
                            {imageNumber + 1}/{product.images.length}
                        </div>
                        <button className="material-symbols-outlined  rounded-full w-14 bg-gray-200" onClick={() => {
                            setImageNumber(Math.abs(imageNumber + 1) % product.images.length);

                        }}>
                            navigate_next
                        </button>
                    </div>
                </div>
                <div className="w-3/5 flex flex-col justify-around bg-gray-100">
                    <div className="text-5xl mb-2">
                        {product.title}

                        <div className="text-lg">
                            Rating: {product.rating}
                        </div>
                    </div>
                    <div className="text-4xl bg-white">
                        Price: Rs.{product.price}
                    </div>
                    <div>
                        Description:<br /> {product.description}
                    </div>
                </div>
            </div>

        </div >
    )
}


export default Products;