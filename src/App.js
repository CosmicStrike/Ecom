import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Pages/Main'
import Products from './Pages/Products'
function App() {
    let products = null
    let categories = null

    fetch("https://dummyjson.com/products", { method: 'GET', headers: { 'Accept': 'application/json' } })
        .then(res => res.json())
        .then((data) => {
            products = data['products']
        })
        .catch(err => console.log(err))

    fetch("https://dummyjson.com/products/categories", { method: 'GET', headers: { 'Accept': 'application/josn' } })
        .then(res => res.json())
        .then((data) => {
            categories = data
        })
        .catch(err => console.log(err))

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main var1={var1} var2={var2} />} />
                <Route path='/product' element={<Products var1={var1} var2={var2} />} />
                <Route path='*' element={<div className='text-2xl m-4'>Page not Found</div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;