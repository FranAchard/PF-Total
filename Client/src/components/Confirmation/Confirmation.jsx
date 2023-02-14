import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { validateToken } from "../../Redux/actions";


export const Confirmation = () =>{

  const dispatch = useDispatch()
  const actualUrl = window.location.href;
  
  const token = actualUrl.slice(35)
  
  const payload = {
    token : token,
  }
  

  function handleToken(arg){
    dispatch(validateToken(arg))
  }


  return(
    <div>
      <h1>Email confirmado</h1>
      {handleToken(payload)}
    </div>
    
  )
}
export default Confirmation