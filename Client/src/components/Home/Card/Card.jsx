import React from "react";
import { Link } from "react-router-dom";
import "./card.css"

const Card = ({ id, image, price, model , handleAddToCart}) => {
  

  return (
    <div className="card m-3" style={{ width: "20rem" }}>
      <span className="card-img-tiles" >
        <img className="card-img-top" src={image} alt="cel" />
      </span>
      <div className="card-body mt-n1 py-4 text-center">
      <Link key={id} to={`/product/${id}`}><h4 className="card-text mb-1">{model}</h4></Link>
        <h4 className="m-2 font-size-xs  price">
          Starting from <span  className="font-weight-semibold">$ {price}</span>
        </h4>
        <button onClick={() => handleAddToCart(id)} 
                className="btn btn-pill btn-outline-primary btn-sm">
          Add
        </button>
      </div>
    </div>
  );
};

export default Card;
