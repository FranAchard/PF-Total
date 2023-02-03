import React from "react";
import "./card.css";

export const Card = ({ marca, image, price }) => {
  return (
    <div className="card">
      <div className="imageContainer">
        <img src={image} alt="product" className="productImage" />
      </div>
      <div className="textContainer">
        <h2 className="texts">
          Marca: <br />
          {marca}
        </h2>
        <div>
          <h3 className="texts"> Price</h3>
          <div className="price">{<p>{price}</p>}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;