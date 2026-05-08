import styles from './Brokerage.module.css';
import {useSearchParams,useParams,useNavigate} from 'react-router-dom'
import React, { useEffect } from 'react';
function Brokerage() {
  //   const [searchParams, setSearchParams] = useSearchParams();

  
  // const activeTab = searchParams.get("tab") || "Equity";
  // useEffect(() => {
  //       if (!activeTab) {
  //           setSearchParams({ tab: "Equity"});
  //       }
  //   }, [activeTab, setSearchParams]);

  // const handleTabChange = (tabName) => {
  //   setSearchParams({ tab: tabName });
  // };
  const { tab } = useParams();
  const navigate = useNavigate();

  // 2. Default to Equity if the path is just /brokerage/
  // or if an invalid tab is provided
  const activeTab = tab || "Equity";

  useEffect(() => {
    if (!tab) {
      navigate("/pricing/Equity", { replace: true });
    }
  }, [tab, navigate]);

  const handleTabChange = (tabName) => {
    // 3. Navigate to the new URL path
    navigate(`/pricing/${tabName}`);
  };
  const EquityTable = () => (
  <div className="mt-5 mb-5">
   
    <div className="table-responsive">
      <table className="table custom-brokerage-table mt-3 ">
        <thead>
          <tr className="text-muted small text-uppercase">
            <th style={{ width: '20%' }}></th>
            <th className="text-center">Equity delivery</th>
            <th className="text-center">Equity intraday</th>
            <th className="text-center">F&O - Futures</th>
            <th className="text-center">F&O - Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="fw-medium">Brokerage</td>
            <td className="text-center">Zero Brokerage</td>
            <td className="text-center">0.03% or Rs. 20 per order</td>
            <td className="text-center">0.03% or Rs. 20 per order</td>
            <td className="text-center">Flat Rs. 20 per order</td>
          </tr>
          <tr>
            <td className="fw-medium">STT/CTT</td>
            <td className="text-center">0.1% on buy & sell</td>
            <td className="text-center">0.025% on the sell side</td>
            <td className="text-center">0.05% on the sell side</td>
            <td className="text-center">0.15% (exercised) / 0.05% (sell)</td>
          </tr>
          <tr>
            <td className="fw-medium">Transaction charges</td>
            <td className="text-center">NSE: 0.00307%<br/>BSE: 0.00375%</td>
            <td className="text-center">NSE: 0.00307%<br/>BSE: 0.00375%</td>
            <td className="text-center">NSE: 0.00183%<br/>BSE: 0</td>
            <td className="text-center">NSE: 0.03553%<br/>BSE: 0.0325%</td>
          </tr>
          <tr>
            <td className="fw-medium">GST</td>
            <td colSpan="4" className="text-center">18% on (brokerage + SEBI charges + transaction charges)</td>
          </tr>
          <tr>
            <td className="fw-medium">SEBI charges</td>
            <td colSpan="4" className="text-center">₹10 / crore</td>
          </tr>
          <tr>
            <td className="fw-medium">Stamp charges</td>
            <td className="text-center">0.015% (Buy)</td>
            <td className="text-center">0.003% (Buy)</td>
            <td className="text-center">0.002% (Buy)</td>
            <td className="text-center">0.003% (Buy)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
const CurrencyTable = () => (
  <div className="mt-5">
   
    <div className="table-responsive">
      <table className="table custom-brokerage-table mt-3">
        <thead>
          <tr className="text-muted small text-uppercase">
            <th style={{ width: '25%' }}></th>
            <th className="text-center">Currency futures</th>
            <th className="text-center">Currency options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="fw-medium">Brokerage</td>
            <td className="text-center">0.03% or ₹ 20/executed order whichever is lower</td>
            <td className="text-center">₹ 20/executed order</td>
          </tr>
          <tr>
            <td className="fw-medium">STT/CTT</td>
            <td className="text-center">No STT</td>
            <td className="text-center">No STT</td>
          </tr>
          <tr>
            <td className="fw-medium">Transaction charges</td>
            <td className="text-center">
              NSE: 0.00035%<br/>
              BSE: 0.00045%
            </td>
            <td className="text-center">
              NSE: 0.0311%<br/>
              BSE: 0.001%
            </td>
          </tr>
          <tr>
            <td className="fw-medium">GST</td>
            <td colSpan="2" className="text-center">
              18% on (brokerage + SEBI charges + transaction charges)
            </td>
          </tr>
          <tr>
            <td className="fw-medium">SEBI charges</td>
            <td className="text-center">₹10 / crore</td>
            <td className="text-center">₹10 / crore</td>
          </tr>
          <tr>
            <td className="fw-medium">Stamp charges</td>
            <td className="text-center">0.0001% or ₹10 / crore on buy side</td>
            <td className="text-center">0.0001% or ₹10 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
const CommodityTable = () => (
  <div className="mt-5 animate-fade-in">
   
    <div className="table-responsive">
      <table className="table custom-brokerage-table mt-3">
        <thead>
          <tr className="text-muted small text-uppercase">
            <th style={{ width: '25%' }}></th>
            <th className="text-center">Commodity futures</th>
            <th className="text-center">Commodity options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="fw-medium">Brokerage</td>
            <td className="text-center">0.03% or Rs. 20/executed order whichever is lower</td>
            <td className="text-center">₹ 20/executed order</td>
          </tr>
          <tr>
            <td className="fw-medium">STT/CTT</td>
            <td className="text-center">0.01% on sell side (Non-Agri)</td>
            <td className="text-center">0.05% on sell side</td>
          </tr>
          <tr>
            <td className="fw-medium">Transaction charges</td>
            <td className="text-center">
              MCX: 0.0021%<br/>
              NSE: 0.0001%
            </td>
            <td className="text-center">
              MCX: 0.0418%<br/>
              NSE: 0.001%
            </td>
          </tr>
          <tr>
            <td className="fw-medium">GST</td>
            <td colSpan="2" className="text-center">
              18% on (brokerage + SEBI charges + transaction charges)
            </td>
          </tr>
          <tr>
            <td className="fw-medium">SEBI charges</td>
            <td className="text-center">
              Agri: ₹1 / crore<br/>
              Non-agri: ₹10 / crore
            </td>
            <td className="text-center">₹10 / crore</td>
          </tr>
          <tr>
            <td className="fw-medium">Stamp charges</td>
            <td className="text-center">0.002% or ₹200 / crore on buy side</td>
            <td className="text-center">0.003% or ₹300 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
  return (
    <div className="container mt-5">
      <div className="row mt-5 border-bottom" >
        <div className="col-auto text-center">
          <button 
    type="button" 
    className={`fs-3 btn ${styles.tabButton} ${activeTab === "Equity" ? styles.activeTab : ""}`} 
    onClick={() => handleTabChange("Equity")}
  >Equity</button>
        </div>
        <div className="col-auto text-center">
          <button type="button" className={`fs-3 btn ${styles.tabButton} ${activeTab === "Currency" ? styles.activeTab : ""}`} onClick={()=>handleTabChange("Currency")}>
            Currency
          </button>
        </div>

        <div className="col-auto text-center">
          <button type="button" className={`fs-3 btn ${styles.tabButton} ${activeTab === "Commodity" ? styles.activeTab : ""}`} onClick={()=>handleTabChange("Commodity")}>
            Commodity 
          </button>
        </div>
      </div>
     <div className="mt-4">
        {activeTab === 'Equity' && <EquityTable />}
        {activeTab === 'Currency' && <CurrencyTable />}
        {activeTab === 'Commodity' && <CommodityTable />}
      </div>
    </div>
  );
}

export default Brokerage;
