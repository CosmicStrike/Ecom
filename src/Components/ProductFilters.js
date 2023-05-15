import React, { useState } from 'react';
import FilterBy from './FilterBy';

function ProductFilter({ brands, category }) {

    const [searchBrands, setSearchBrands] = useState('');// stores the keyword by wich to search the brands name
    const [searchCategories, setSearchCategories] = useState('');// stores the keyword by wich to search the categories name

    // TODO: Apply the user filter input to the products
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        console.log(form.getAll('Brands'));// Gets the selected checkboxes for Brand
        console.log(form.getAll('Categories'));// Gets the selected checkboxes for Categories
    }


    return (
        <form onSubmit={handleSubmit}>

            {/* Search the product by title/name */}
            <label htmlFor="searchProduct">Search Products</label>
            <input className='mx-2' type="text" placeholder="Search" name="searchProduct" id="searchProduct" />

            {/* Search the product by Brand name */}
            <FilterBy by={brands} name={"Brands"} searchName={"searchBrands"} search={[searchBrands, setSearchBrands]} />

            {/* Search the product by categories */}
            <FilterBy by={category} name={"Categories"} searchName={"searchCategories"} search={[searchCategories, setSearchCategories]} />

            <input type='submit' value={'Apply'} />
        </form>
    )
}

export default ProductFilter;