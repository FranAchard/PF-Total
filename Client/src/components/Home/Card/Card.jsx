import React from "react";
import "./card.css";
import accounting from "accounting"

export const Card = ({ marca, image, price, model}) => {
  return (
<<<<<<< HEAD
    <div >
      <div > 
        <div >
            <div class="card border-0 mb-grid-gutter">
                <a class="card-img-tiles" href="shop-style1-ls.html">
                    <div class="main-img"><img src={image} alt="Clothing"/></div>
                    
                </a>
                <div class="card-body border mt-n1 py-4 text-center">
                    <h2 class="h5 mb-1">{marca}</h2>
                    <h2 class="h5 mb-1">{model}</h2>
                    <span class="d-block mb-3 font-size-xs text-muted">Starting from<span class="font-weight-semibold">${price}</span></span>
                    <a class="btn btn-pill btn-outline-primary btn-sm" href="/shop">Shop Now!</a>
                </div>
            </div>
        </div>
      </div>  
=======
    <div>
            
      <img src={image} alt= "img not found" width="200 px" height="250px"/>
      <h3>{marca} </h3>
      <h3>{accounting.formatMoney(price)}</h3>
       
>>>>>>> 79f9467e8265f32d846dd008a3aff21f515cd655
    </div>
   
  );
};

export default Card;