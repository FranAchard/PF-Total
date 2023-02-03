import React from "react"; 
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductQuery } from "../../Redux/actions.js";
import css from "../NavBar/navBar.css"


//instalar poppers

export default function Navbar(){

    const dispatch = useDispatch();
    const [name,setName] = useState("");

    function handleInputName(e){
        e.preventDefault();
        setName(e.target.value);
        console.log(name);        
    }
    function handleSubmit(e){
        e.preventDefault();
        dispatch(getProductQuery(name));
        setName("") // para dejarlo vacio despues de la busqueda 
    }
    return(
      
      <section class="navbar navbar-expand-lg" id="navbar1">

      <div class="col-md-2" >
        <a href="/">LOGO</a>
      </div>
        
      <button class="navbar-toggler d-lg-none" id="main">
      <span class="navbar-toggler-icon">
        <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <ion-icon name="menu-outline"></ion-icon>
        </a>
      </span>
      </button>

       <form class="d-lg-flex mb-2 mb-lg-0 mx-auto w-100" id="mobile">
        <div class="busca">
          <input class="form-control me-2 w-75" type="search" placeholder="Search" aria-label="Search"  onChange={(e) => handleInputName(e)}/>
          <div
                type="submit" 
                onClick={(e)=> handleSubmit(e)}
                ><i class="bi bi-search" id="formbusca"></i></div>
        </div>
      </form>

      <div class="col-md-3">
        <div class="d-flex d-md-flex flex-row align-items-center">
          
          <div class="col-md-3" id="iconsperson" onclick="redirectBtnlogin()">
            <span class="shop-bag">
              
            </span>
            <div class="text-icon">
              LOGIN
            </div>

         

          </div>

          <div class="col-md-3" id="iconscart" onclick="redirectIconCheckout()">
            <span class="shop-bag" >
              
                <div class="text-icon">
                  CARRY
                </div>
            </span>
          </div>
        </div>
      </div>
    </section>
    )
}
