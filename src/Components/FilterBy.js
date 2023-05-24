import React from "react";

function FilterBy({ by, name, searchName, search, intermediateUpdate }) {
    let filtered = [] // Stores the filtered list 

    by.forEach((ele) => {// searches only the charaters given in input field
        if (search[0] !== '' && (ele.toLowerCase().indexOf(search[0].toLowerCase()) === (-1))) return;
        filtered.push(ele)// appends to list
    })

    // Wrapper: It wraps all the filtered list with HTML
    const By = filtered.map((b) => {
        return <div key={b}><input type='checkbox' name={name} value={b}
            defaultChecked={(intermediateUpdate[0].indexOf(b) === (-1)) ? false : true}// tick the check box if the item is in filtered list
            onClick={
                () => {
                    if (intermediateUpdate[0].indexOf(b) === (-1))// If not present in filtered list, add it 
                        intermediateUpdate[1]([...intermediateUpdate[0], b]);
                    else // If already present in filtered list then remove it
                        intermediateUpdate[0].splice(intermediateUpdate[0].indexOf(b), 1);
                }
            } /><label htmlFor={name} >{b}</label></div>
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