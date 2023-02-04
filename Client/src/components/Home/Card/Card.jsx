import React from "react";
import "./card.css";
import accounting from "accounting"

export const Card = ({ marca, image, price }) => {
  return (
    <div>
            
      <img src={image} alt= "img not found" width="200 px" height="250px"/>
      <h3>{marca} </h3>
      <h3>{accounting.formatMoney(price)}</h3>
       
    </div>
   
  );
};

export default Card;