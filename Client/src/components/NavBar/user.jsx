import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import invitado from "../../Media/invitado.png";

export const User = () => {
  
  const user = useSelector((state) => state.userLogged);
  const image = user ? user.image : null;
  const name = user ? user.name :null
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
