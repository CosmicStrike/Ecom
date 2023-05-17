import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './Pages/Main'
import Products from './Pages/Products'

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

    useEffect(() => {
        GetData().then((e) => {
            let p, b, c;
            [p, b, c] = e // array destructuring
            setCategories(c);
            setBrands(b)
            setProducts(p)
        })
    }, [])

    return (
        <Routes>
            {/* 
                Render the below route only if products are arrived from server, else render last route
                Because react will render the screen even if fetch api is still ongoing, so we have to check of fetch api has compleleted it's task or not
            */}
            {(products.length) && <Route path='/' element={<Main products={products} categories={categories} brands={brands} />} />}
            <Route path='/:product' element={<Products />} />
            <Route path='*' element={<div className='text-2xl m-4'>Page not Found</div>} />
        </Routes>
    )

}

export default App;