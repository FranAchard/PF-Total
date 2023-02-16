import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import invitado from "../../Media/invitado.png";

export const User = () => {
  
  const user = useSelector((state) => state.user);
  console.log("este es el usuario guardado en el estado",user)
  const image = user ? JSON.parse(user).image : null;
  const name = user ? JSON.parse(user).name :null
  return (
    <div>
      <div>
        {user  ? <img src={image} alt="" height="40px" width="40px" /> : <img src={invitado} alt="" height="40px" width="40px" />}
      </div>
      <div>
      {user ? <h4>{name}</h4> : <h4>Invitado</h4> }
      </div>
    </div>
  );
};
export default User;
