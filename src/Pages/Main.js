import React from "react";

function Main({ var1, var2 }) {

    var1++;
    var2++;
    var2++;
    var2++;

    return (
        <div>
            {var1}
            <br />
            {var2}
        </div>
    )
}



export default Main;