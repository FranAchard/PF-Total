import React from "react";
import Login from "../../Login/Login";
import css from "../Footer/footer.css";

export const Footer = () => {
  return (
      <div className="container-fluid text-center bg-dark d-flex flex-column">
        <p>Online Store Copyright</p>
        <form className="form-inline d-flex flex-row justify-content-center">
          Get deals:
          {/* <input
            type="email"
            className="form-control"
            size="50"
            placeholder="Email Address"
          /> */}
            <Login/>
        </form>
      </div>
  );
};
