import React from 'react';
import SearchProduct from './SearchProduct';

function ProductFilter({ brands }) {
    const Brands = brands.map((b) => <option value={b}>{b}</option>)
    return (
        <>
            <SearchProduct />
            <form>
                <select id="Brands">
                    {Brands}
                </select>
            </form>
        </>
    )
}

export default ProductFilter;