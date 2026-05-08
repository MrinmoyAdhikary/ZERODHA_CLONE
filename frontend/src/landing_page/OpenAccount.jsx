import React from "react";
function OpenAccount() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="mb-4">Open a Zerodha account</h1>
        <p className="mb-6 fs-3 text-muted">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades
          <br />
        </p>
        <div className="row justify-content-center">
          <div className="col-auto text-center">
            <button type="button" className="fs-3 btn btn-primary mb-5">
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
