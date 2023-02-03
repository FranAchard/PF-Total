import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { getAllProducts } from "../../../Redux/actions";
import { Link } from "react-router-dom";
import "./allCards.css";
import { Pages } from "../Pages/Pages";

export default function AllCards() {
  const dispatch = useDispatch();
  let allProduct = useSelector((state) => state.product);
  const filteredProduct = useSelector((state) => state.filter);
  filteredProduct.length > 0 && (allProduct = filteredProduct);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(8);
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = allProduct.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginado = (pageNumber) => {
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
        allProduct={allProduct.length}
        paginado={paginado}
      />
      <div className="cardList ">
        {allProduct.length > 0 ? (
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