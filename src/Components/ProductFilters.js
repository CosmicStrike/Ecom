import React, { useState } from 'react';
import FilterBy from './FilterBy';

function ProductFilter({ setSearchProducts, brands, categories }) {

    const [searchBrands, setSearchBrands] = useState('');// stores the keyword by wich to search the brands name
    const [searchCategories, setSearchCategories] = useState('');// stores the keyword by wich to search the categories name

    const [iBrands, setIBrands] = useState([]); // Intermediate Brand filters, applied on button click
    const [iCategories, setICategories] = useState([]); // Intermediate Categories filters, applied on button click

    // On Form Submit, All filters are applied
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        brands[1](iBrands);// Gets the selected checkboxes for Brand and change the state
        categories[1](iCategories);// Gets the selected checkboxes for Categories and change the state

        setSearchProducts(form.get('searchProduct')); // Gets the product title which user enteres in search bar
    }


    return (
        <form className='flex flex-col w-[24rem] h-fit bg-gray-50 rounded-lg shadow-lg m-2 p-4' onSubmit={handleSubmit}>

            {/* Search the product by title/name */}
            <label className='font-bold self-start text-lg ' htmlFor="searchProduct">Products</label>
            <input className='mx-2 w-full bg-white shadow-md outline-none rounded-sm p-1' type="text" placeholder="Search" name="searchProduct" id="searchProduct" />

            {/* Search the product by Brand name */}
            <FilterBy by={brands[0]} name={"Brands"} searchName={"searchBrands"} search={[searchBrands, setSearchBrands]} intermediateUpdate={[iBrands, setIBrands]} />

            {/* Search the product by categories */}
            <FilterBy by={categories[0]} name={"Categories"} searchName={"searchCategories"} search={[searchCategories, setSearchCategories]} intermediateUpdate={[iCategories, setICategories]} />

            <input className='bg-blue-500 w-[10rem] self-center h-[2rem] text-white font-bold rounded-md shadow-md' type='submit' value={'Apply'} />

        </form>
    )
}

export default ProductFilter;