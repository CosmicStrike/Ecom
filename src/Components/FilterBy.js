import React from "react";

function FilterBy({ by, name, searchName, search, intermediateUpdate }) {
    let filtered = [] // Stores the filtered list 

    by.forEach((ele) => {// searches only the charaters given in input field
        if (search[0] !== '' && (ele.toLowerCase().indexOf(search[0].toLowerCase()) === (-1))) return;
        filtered.push(ele)// appends to list
    })

    // Wrapper: It wraps all the filtered list with HTML
    const By = filtered.map((b) => {
        return <div key={b}><input className="mx-2 w-4 h-4" type='checkbox' name={name} value={b}
            defaultChecked={(intermediateUpdate[0].indexOf(b) === (-1)) ? false : true}// tick the check box if the item is in filtered list
            onClick={
                () => {
                    if (intermediateUpdate[0].indexOf(b) === (-1))// If not present in filtered list, add it 
                        intermediateUpdate[1]([...intermediateUpdate[0], b]);
                    else // If already present in filtered list then remove it
                        intermediateUpdate[0].splice(intermediateUpdate[0].indexOf(b), 1);
                }
            } /><label className="text-lg" htmlFor={name} >{b}</label></div>
    })

    return (
        <div className="my-6">
            <p className="font-bold text-lg">{name}</p>
            <input className="mx-2 w-[18rem] bg-white outline-none rounded-sm p-2" type="text" placeholder="Search" name={searchName} value={search[0]} onChange={(e) => { search[1](e.target.value) }} />
            <div className=" w-[18rem] shadow-md align-middle overflow-auto h-[11rem] p-1 bg-gray-100  ml-2">{By}</div>
        </div>
    )
}

export default FilterBy;