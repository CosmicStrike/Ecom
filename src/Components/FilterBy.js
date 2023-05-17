import React from "react";

function FilterBy({ by, name, searchName, search }) {
    let filtered = [] // Stores the filtered list 

    by.forEach((ele) => {// searches only the charaters given in input field
        if (search[0] !== '' && (ele.toLowerCase().indexOf(search[0].toLowerCase()) === (-1))) return;
        filtered.push(ele)// appends to list
    })

    // Wrapper: It wraps all the filtered list with HTML
    let i = 0;
    const By = filtered.map((b) => {
        i += 1;
        return <div key={i}><input type='checkbox' name={name} value={b} /><label htmlFor={name}>{b}</label></div>
    })

    return (
        <div className="my-2">
            <p>{name}</p>
            <input type="text" placeholder="Search" name={searchName} value={search[0]} onChange={(e) => { search[1](e.target.value) }} />
            <div className="overflow-auto h-[10rem]">{By}</div>

        </div>
    )
}

export default FilterBy;