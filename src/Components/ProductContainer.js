import React from "react";
import ProductCard from './ProductCard'

function ProductContainer({ products, searchProducts, brands, categories, price }) {
    let filteredProducts = [] // Stores the filltered products

    const Brands = brands.map((e) => e.toLowerCase());
    const Categories = categories.map((e) => e.toLowerCase());

    products.forEach((prod) => {
        // Filter the product by title
        if (searchProducts !== '' && prod.title.toLowerCase().indexOf(searchProducts.toLowerCase()) === (-1)) return;
        // Filter the product by brand name
        if (Brands.length !== 0 && !Brands.includes(prod.brand.toLowerCase())) return;
        
        // Filter the product by category
        if (Categories.length !== 0 && !Categories.includes(prod.category.toLowerCase())) return;

        // Filter the product by price
        if (price.length !== 0 && !(parseInt(Math.ceil(prod.price)) >= (price[0]) && parseInt(Math.ceil(prod.price)) <= (price[1]))) return;

        // push the product, it passes all the filters
        filteredProducts.push(prod)
    })

    // Creates the card for all filtered products and store it in array which will be get displayed 
    const ProductCards = filteredProducts.map((prod) => <ProductCard key={prod.id} image={prod.images[0]} title={prod.title} rating={prod.rating} price={prod.price} description={prod.description} />)

    return (
        <div className="flex flex-row flex-wrap w-full">
            {(ProductCards.length) ? ProductCards : <h1 className="text-2xl font-bold m-2">No Product matches the filters</h1>}
        </div>
    )
}


export default ProductContainer;