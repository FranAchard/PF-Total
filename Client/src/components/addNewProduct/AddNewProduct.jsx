import React from "react";
import { useDispatch, useSelector } from "react-redux"
import "./addNewProduct.css";
import { Link } from "react-router-dom";



export const AddNewProduct = () => {

  const logged = useSelector((state)=> state.userLogged)
  console.log(logged)
  
  if (logged){
    return (
      <div className="button-container">
        <Link to="form">
          <button className="addButton">Add a new product</button> 
        </Link>
      </div>
    );
  }else{
    return (
      <div className="button-container">
        <Link to="form">
          <h3>Register to add a Product</h3>
        </Link>
      </div>
    );
  }
  
  
};

export default AddNewProduct;
