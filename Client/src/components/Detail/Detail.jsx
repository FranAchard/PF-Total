import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductId } from "../../Redux/actions";
import "./detail.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const DetailProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const productArr = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getProductId(id));
  }, [dispatch, id]);

  if (productArr.length < 1) {
    return <div>"LOADING"</div>;
  }

  const myProduct = productArr[0];

  return (
    <div key={myProduct.id} className="detailContainer">
      <Link to="/home">
        <button className="backButton">Back</button>
      </Link>
      <div className="Detail">
        <div className="imageContainer">
          <img src={myProduct.image} alt="product" className="productImage" />
        </div>
        <div className="textContainer">
          <h2 className="texts">{myProduct.name}</h2>
          <h3 className="texts">
            {" "}
            Marca: <br /> From {myProduct.marca}
          </h3>
          <h3 className="texts">
            {" "}
            Modelo: <br /> {myProduct.model}
          </h3>
          <h3 className="texts">
            {" "}
            Price: <br /> From {myProduct.price}
          </h3>
          <h3 className="texts">
            {" "}
            Camera: <br /> From {myProduct.camera}
          </h3>
          <h3 className="texts">
            {" "}
            os: <br /> {myProduct.os}
          </h3>
          <h3 className="texts">
            {" "}
            Ram: <br /> {myProduct.ram}
          </h3>
          <h3 className="texts"> </h3>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
