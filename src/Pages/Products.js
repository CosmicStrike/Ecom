import React from "react";
import { redirect, useLoaderData, useNavigate } from 'react-router-dom';

function Products() {
    // const navigate = useNavigate();
    const product = useLoaderData();
    if (product === null) {
        return
    }
    console.log("Product ", product);
    return (
        <h1>{product}
        </h1>
    )
}


export default Products;