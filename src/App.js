import React, { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
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
        const response = await fetch('https://dummyjson.com/products');
        if (response.ok) {
            const data = await response.json()
            products = data['products']
            products.forEach((prod) => {
                prod.title = prod['title'].replaceAll('-', ' ');
                if (brands.indexOf(prod['brand']) === (-1)) brands.push(prod['brand'])
                if (categories.indexOf(prod['category']) === (-1)) categories.push(prod['category'])
            })
        }

        return [products, brands, categories];// array structuring
    }
    catch (err) { console.log(err); return [null, null, null] }
}

function App() {
    const [products, setProducts] = useState([])
    const [brands, setBrands] = useState([])
    const [categories, setCategories] = useState([])
    // const navigate = useNavigate();
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
    if (!products.length) return <Loading />
    else
        return (
            <RouterProvider router={createBrowserRouter([
                {
                    path: '/',
                    element: <Main products={products} categories={categories} brands={brands} />
                },

                {
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

                {
                    path: '/*',
                    element: <PageNotFound />
                }
            ])} />
        )

}

export default App;