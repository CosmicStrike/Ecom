import React, { useState } from 'react';
import FilterBy from './FilterBy';

function ProductFilter({ setSearchProducts, brands, categories, setPrice }) {

    const [searchBrands, setSearchBrands] = useState(localStorage.getItem('brandSearch') === null ? '' : localStorage.getItem('brandSearch'));// stores the keyword by wich to search the brands name
    const [searchCategories, setSearchCategories] = useState(localStorage.getItem('categorySearch') === null ? '' : localStorage.getItem('categorySearch'));// stores the keyword by wich to search the categories name

    const [iBrands, setIBrands] = useState(localStorage.getItem('brandSelected') === null ? [] : localStorage.getItem('brandSelected').split(',')); // Intermediate Brand filters, applied on button click
    const [iCategories, setICategories] = useState(localStorage.getItem('categorySelected') === null ? [] : localStorage.getItem('categorySelected').split(',')); // Intermediate Categories filters, applied on button click

    // On Form Submit, All filters will get applied
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        brands[1](iBrands);// Gets the selected checkboxes for Brand and change the state
        localStorage.setItem('brandSearch', searchBrands);// Remember the filters
        if (iBrands.length > 0) localStorage.setItem('brandSelected', (iBrands));

        categories[1](iCategories);// Gets the selected checkboxes for Categories and change the state
        localStorage.setItem('categorySearch', searchCategories);
        if (iCategories.length > 0) localStorage.setItem('categorySelected', (iCategories));

        setSearchProducts(form.get('searchProduct')); // Gets the product title which user enteres in search bar
        localStorage.setItem('productSearch', form.get('searchProduct'));

        let minPrice = form.get('minPrice');
        let maxPrice = form.get('maxPrice');

        if (minPrice === "" && maxPrice === "") { minPrice = 0; maxPrice = 10000000; }
        else if (minPrice === "") { minPrice = 0; maxPrice = parseInt(maxPrice); }
        else if (maxPrice === "") { minPrice = parseInt(minPrice); maxPrice = 10000000; }
        else { minPrice = parseInt(minPrice); maxPrice = parseInt(maxPrice); }
        setPrice([minPrice, maxPrice]);

        localStorage.setItem('minPrice', minPrice);
        localStorage.setItem('maxPrice', maxPrice);
    }


    return (
        <form className='flex flex-col w-[24rem] h-fit bg-[#f8f8f8] rounded-lg shadow-lg m-2 p-4' onSubmit={handleSubmit}>

            {/* Search the product by title/name */}
            <label className='font-bold self-start text-lg ' htmlFor="searchProduct">Products</label>
            <input className='mx-2 bg-white shadow-md outline-none rounded-sm p-2' type="text" placeholder="Search" name="searchProduct" id="searchProduct" defaultValue={(localStorage.getItem('productSearch') === null) ? '' : (localStorage.getItem('productSearch'))} />

            {/* Search the product by Brand name */}
            <FilterBy by={brands[0]} name={"Brands"} searchName={"searchBrands"} search={[searchBrands, setSearchBrands]} intermediateUpdate={[iBrands, setIBrands]} />

            {/* Search the product by categories */}
            <FilterBy by={categories[0]} name={"Categories"} searchName={"searchCategories"} search={[searchCategories, setSearchCategories]} intermediateUpdate={[iCategories, setICategories]} />

            <label className='font-bold text-lg' htmlFor="price">Price</label>
            <div id="price" className='flex flex-row m-2'>
                <input className='w-[8rem] outline-none h-10 p-2 shadow-md' name='minPrice' type='number' placeholder='min' min={0} defaultValue={(parseInt(localStorage.getItem('minPrice')) === 0) ? '' : localStorage.getItem('minPrice') === null ? '' : (parseInt(localStorage.getItem('minPrice')))} />
                <p className='m-2'>to</p>
                <input className='w-[8rem] outline-none h-10 p-2 shadow-md' name='maxPrice' type='number' placeholder='max' max={10000000} defaultValue={(parseInt(localStorage.getItem('maxPrice')) === 10000000) ? '' : (localStorage.getItem('maxPrice') === null) ? '' : parseInt(localStorage.getItem('maxPrice'))} />
            </div>

            <input className='bg-blue-500 mt-6 w-[10rem] self-center h-[2rem] text-white font-bold rounded-md shadow-md cursor-pointer' type='submit' value={'Apply'} />

            <button className='bg-violet-500 mt-6 w-[10rem] self-center h-[2rem] text-white font-bold rounded-md shadow-md' type='button'
                onClick={() => {
                    localStorage.removeItem('productSearch');
                    localStorage.removeItem('categorySearch');
                    localStorage.removeItem('brandSearch');
                    localStorage.removeItem('categorySelected');
                    localStorage.removeItem('brandSelected');
                    localStorage.removeItem('minPrice');
                    localStorage.removeItem('maxPrice');
                    window.location.reload();
                }}
            >Clear Filters</button>

        </form>
    )
}

export default ProductFilter;