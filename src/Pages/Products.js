import React from "react";
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import ProductNotFound from '../Public/Images/product-not-found.jpg';
function Products({ navigation: { goBack } }) {
    // const navigate = useNavigate();
    const product = useLoaderData();
    const location = useLocation();
    const navigate = useNavigate();

    if (product === null) {
        return (
            <div className="w-1/2 h-[24rem] flex flex-col justify-center items-center rounded-md shadow-lg text-center mx-auto my-10 bg-gray-100">
                <div className="shadow-lg"><img className="aspect-square" src={ProductNotFound} alt="Product nots found" /></div>
                <p className="text-4xl p-10">Product not found</p>
            </div>
        );
    }
    return (
        <button onClick={() => { navigate((location?.state?.from === undefined) ? '/' : location?.state?.from) }}>
            Back
        </button>
    )
}


export default Products;