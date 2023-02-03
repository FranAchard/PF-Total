import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { getAllProducts } from "../../../Redux/actions";
import { Link } from "react-router-dom";
import "./allCards.css";
import Pages from "../../Home/Pages/Pages.jsx";

export default function AllCards() {
  const dispatch = useDispatch();
  let allProducts = useSelector((state) => state.product);

  const filteredProduct = useSelector((state) => state.filter);

  // filteredProduct.length > 0 && (allProducts = filteredProduct);

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(8);
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleBack = () => {
    currentPage > 1 && (setCurrentPage(currentPage - 1))
  }

  
  const handleNext = () => {
    setCurrentPage(currentPage + 1)
  }

  return (
    <>
      <button className="productButton" onClick={handleBack}>Back</button>
      <button className="productButton" onClick={handleNext}>Next</button>
      <Pages
        productPerPage={productPerPage}
        allProducts={allProducts.length}
        paginate={paginate} 
      />

      <div >
        {allProducts.length > 0 ? (
          currentProduct.map((e) => (
            <Link key={e.id} to={`/product/${e.id}`}>
              <Card
                id={e.id}
                marca={e.marca}
                price={e.price}
                image={e.image}
              />
            </Link>
          ))
        ) : (
          <h2>No hay nada</h2>
        )}
      </div>
    </>
  );
}