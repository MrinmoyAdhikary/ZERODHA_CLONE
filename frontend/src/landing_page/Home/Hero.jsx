import React from "react";
import {useNavigate} from "react-router-dom"
function Hero() {
  const navigate=useNavigate();

  const handleOnCLick=()=>{
    navigate("/signup")
  }
  return (
    <div className="container">
      <div className="row text-center">
        <img src="../src/assets/homeHero.png" className="mb-5" />
        <h1 className="mb-4">Invest in everything</h1>
        <p className="mb-6 fs-3">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <div className="row justify-content-center">
          <div className="col-auto text-center">
            <button type="button" className="fs-3 btn btn-primary mb-5" onClick={handleOnCLick}>
              Sign up for free 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
