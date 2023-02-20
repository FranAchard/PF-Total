import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts, getUsers, getComments, getLowStockProducts } from "../../Redux/actions";
import "./Admin.css"


const Admin = () => {

  const dispatch = useDispatch() 
  
  useEffect(() => {
    dispatch(getLowStockProducts(1, 100))
  },[dispatch])

  useEffect(() => {
    dispatch(getAllProducts())
  },[dispatch])

  useEffect(() => {
    dispatch(getComments())
  },[dispatch])

  useEffect(() => {
    dispatch(getUsers())
  },[dispatch])

  const products = useSelector((state) => state.product)
  const comments = useSelector((state)=> state.comments)
  const users = useSelector((state) => state.users)
  const lowStock = useSelector((state) => state.lowStock)

  return(
    <div className="container">
      <div>Productos
        <div>Productos de escaso stock{lowStock ? lowStock.map ((p) => (<div key={p.id}><h3>{p.model}</h3> <h3>{p.stock}</h3></div>)): <p>No hay productos con bajo stock</p>}</div>
        <div>Productos publicados {products.map ((p) => (<div><h3>{p.model}</h3> <h3>{p.price}</h3><h3>{p.stock}</h3></div>))}</div>
        <div>Seleccionar producto para borrado lógico "se pasa el id del producto por body"</div>
        <div>Modificar stock de un producto pasar por body id del producto y propiedad a modificar con su nuevo valor</div>
      </div>
      <div>Commentarios
        <div>traer todos los comentarios que no esten moderados</div>
        <div>modificar la propiedad moderated del comentario y dejar visible u oculto el mismo segun corresponda</div>
      </div>
      <div>Usuarios
        <div>enviar email de notificaciones a todos lo usuarios</div>
        <div>modificar la propiedad visible de un usuario  segun corresponda</div>
      </div>
    </div>
  )
}

export default Admin