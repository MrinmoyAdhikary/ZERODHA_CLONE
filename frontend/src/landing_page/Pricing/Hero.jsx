function Hero() {
    return (
        <div className="container  mb-5" style={{marginTop:"5rem"}}>
            <h1 className="text-muted text-center mt-5">Charges</h1>
            <p className="text-muted text-center mt-2 mb-5 fs-4">List of all charges and taxes</p>
            <div className="row text-center">
             <div className="col-4 mt-5 p-3">
                <img src="..\src\assets\pricing-eq.svg"/>
                 <h3>Free equity delivery</h3>
                <p className="mt-3 p-2 fs-4 text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className="col-4 mt-5 p-3">
                <img src="..\src\assets\other-trades.svg"/>
                <h3>Intraday and F&O trades</h3>
                <p className="mt-3 p-2 fs-4 text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className="col-4 mt-5 p-3">
                <img src="..\src\assets\pricing-eq.svg"/>
                 <h3>Free direct MF</h3>
                <p className="mt-3 p-2 fs-4 text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
            </div>
           
        </div>
      );
}

export default Hero;