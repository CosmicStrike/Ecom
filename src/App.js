import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Pages/Main'
import Products from './Pages/Products'
function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/product' element={<Products />} />
                <Route path='*' element={<div className='text-2xl m-4'>Page not Found</div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;