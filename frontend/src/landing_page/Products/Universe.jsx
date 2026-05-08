import {useNavigate} from "react-router-dom"
function Universe() {
  const navigate=useNavigate();

  const handleOnCLick=()=>{
    navigate("/signup")
  }
  return (
     
    <div className="container">
      <div className="row mt-5 mb-5 text-muted text-center">
        <h2>The Zerodha Universe</h2>
        <p className="mt-3 fs-4">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-1 mt-5 mb-5 text-center">
          <img
            src="..\src\assets\sensibull-logo.svg"
            className="mb-3"
            style={{ height: "3rem" }}
          />
          
            <p className="text-muted px-5 ">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
        
        </div>
        <div className="col-4 p-1 mt-5 mb-5 text-center">
          <img
            src="..\src\assets\zerodhafundhouse.png"
            className="mb-3"
            style={{ height: "3rem" }}
          />
          <p className="text-muted px-5 ">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 mt-5 mb-5 p-1 text-center">
          <img
            src="..\src\assets\tijori.svg"
            className="mb-3"
            style={{ height: "3rem" }}
          />
          <p className="text-muted px-5 ">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
         <div className="col-4 p-1 text-center mt-5 mb-5">
          <img
            src="..\src\assets\streak-logo.png"
            className="mb-3"
            style={{ height: "3rem" }}
          />
          
            <p className="text-muted px-5 ">
             Systematic trading platform
that allows you to create and backtest
strategies without coding.
            </p>
         
        </div>
        <div className="col-4 p-1 text-center mt-5 mb-5">
          <img
            src="..\src\assets\smallcase-logo.png"
            className="mb-3"
            style={{ height: "3rem" }}
          />
          <p className="text-muted px-5 ">
Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-1 text-center mt-5 mb-5">
          <img
            src="..\src\assets\ditto-logo.png"
            className="mb-3"
            style={{ height: "3rem" }}
          />
          <p className="text-muted px-5 ">
           Personalized advice on life
and health insurance. No spam
and no mis-selling.
Sign up for free
          </p>
        </div>
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

export default Universe;
