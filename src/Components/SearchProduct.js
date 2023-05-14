import React from "react";

function SearchProduct() {

    return (
        <form>
            <label htmlFor="searchProduct">Search Products</label>
            <input type="text" placeholder="Search" value={" "} name="searchProduct" id="searchProduct" />
        </form>
    )
}

export default SearchProduct;