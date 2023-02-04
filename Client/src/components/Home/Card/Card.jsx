import React from "react";
import "./card.css";

export const Card = ({ marca, image, price, model}) => {
  return (
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
    </div>
   
  );
};

export default Card;