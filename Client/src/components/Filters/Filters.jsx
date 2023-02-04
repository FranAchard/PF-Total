import React from "react"; 
import { useState, useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import { getAllProducts , orderProductAlf} from "../../Redux/actions";





export default function Filters (){
    const dispatch= useDispatch()
    
    
    const [order, setOrder] = useState("")

    useEffect(()=>{
        dispatch(getAllProducts());
    },[dispatch])



function handleSort(e){
    e.preventDefault();
    dispatch(orderProductAlf(e.target.value))
};


   
    return(
       <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark"> 
       

        <select onChange={e => handleSort(e)} >
                <option value="all" >All</option>
                <option value="alf" >A-Z</option>
                <option value="pop">Z-A</option>
        </select>

        <select >
                <option value="all" >All</option>
                <option value="sam">Samsung</option>
                <option value="ip">Iphone</option>
                <option value="hw">Huawei</option>
                <option value="mot">Motorola</option>
        </select>

        <select >
                <option value="all" >All</option>
                <option value="low">Menor precio</option>
                <option value="bit">Mayor precio</option>
        </select>


        </nav>
       </div>
       
    )
}