import React from "react";

export default function Paginate ({productPerPage, allProduct, paginate}){
    const pageNumber = [];
    for (let i = 1; i<= Math.ceil(allProduct/productPerPage); i++){
        pageNumber.push(i)  // para que el empiece en 1
    }

    return(
        <nav>
            <ul>
                {pageNumber && 
                    pageNumber.map(number => {
                    return (
                        <li key = {number}>
                        <button id="pagination" onClick={() => paginate(number)}>
                        {number}
                        </button>
                        </li>
                    )                   
                }) 
                }
            </ul>
        </nav>
    )
};
