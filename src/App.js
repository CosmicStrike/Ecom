import React, { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Pages/Main'
import Products from './Pages/Products'
import Loading from './Pages/Loading'
import PageNotFound from './Pages/404'

// Fetch the data from the server
const GetData = async () => {
    let brands = []
    let products = []
    let categories = []
    try {
        // Fetch the products 
        const response = await fetch('https://dummyjson.com/products');
        if (response.ok) {
            const data = await response.json()
            products = data['products']
            products.forEach((prod) => {
                prod.title = prod['title'].replaceAll('-', ' ');// Replace all '-' by white space
                if (brands.indexOf(prod['brand']) === (-1)) brands.push(prod['brand'])// Extract Brands 
                if (categories.indexOf(prod['category']) === (-1)) categories.push(prod['category'])// Extract Categories
            })
        }

        return [products, brands, categories];// array structuring
    }
    catch (err) { return [null, null, null]; }
}

function App() {
    const [products, setProducts] = useState([])
    const [brands, setBrands] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        GetData().then((e) => {
            let p, b, c;
            [p, b, c] = e // array destructuring
            setCategories(c);
            setBrands(b)
            setProducts(p)
        })
    }, [])

    /*
        Render the below route only if products are arrived from server, else render last route
        Because react will render the screen even if fetch api is still ongoing, so we have to check of fetch api has compleleted it's task or not
    */
    if (products === null) return <div className="w-1/2  h-[12rem] flex justify-center items-center mx-auto my-[15rem]">
        <p className="w-fit h-fit text-4xl">Issuse in connecting to Internet</p>
    </div>

    if (!products.length) return <Loading />
    else
        return (
            <RouterProvider router={createBrowserRouter([
                {// Main page route, displays filters and products
                    path: '/',
                    element: <Main products={products} categories={categories} brands={brands} />
                },

                {// Product Description page route, it takes the product from here(App.js) and send it to Product.js Page
                    path: '/:product',
                    element: <Products />,
                    loader: ({ params }) => {
                        const prod = products.find((ele) => {
                            return (ele.title === params.product.replaceAll('-', ' '));
                        })
                        if (prod === undefined) return null;
                        return prod;
                    }
                },

                {// For 404
                    path: '/*',
                    element: <PageNotFound />
                }
            ])} />
        )

}

export default App;