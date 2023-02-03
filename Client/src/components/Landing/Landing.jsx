import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "./landing.css"
function Landing() {
    return (
        <div className="btn-entorn">
            <Link to="/home">
                <span className="btn btn-dark btn-lg">Start</span>
            </Link>
        </div>
    )
}
export default Landing;