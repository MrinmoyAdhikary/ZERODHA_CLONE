import React, { useEffect, useState } from "react";
import axios from "axios";

const Summary = ({ user }) => {
  const [allHoldings, setAllHoldings] = useState([]);
  const formatCompact = (value) => {
    const amount = Number(value || 0);

    if (Math.abs(amount) >= 1000) {
      return `${(amount / 1000).toFixed(2)}k`;
    }

    return amount.toFixed(2);
  };
  const totalInvestment = allHoldings.reduce((total, stock) => {
    return total + Number(stock.avg || 0) * Number(stock.qty || 0);
  }, 0);
  const currentValue = allHoldings.reduce((total, stock) => {
    return total + Number(stock.price || 0) * Number(stock.qty || 0);
  }, 0);
  const totalPnl = currentValue - totalInvestment;
  const pnlPercentage = totalInvestment ? (totalPnl / totalInvestment) * 100 : 0;
  const pnlClass = totalPnl >= 0 ? "profit" : "loss";

  useEffect(() => {
    if (!user?.id) {
      return;
    }

    axios.get("http://localhost:8080/allHoldings", {
      params: { userId: user.id },
    })
      .then((res) => {
        setAllHoldings(res.data);
      })
      .catch((error) => {
        console.error("Failed to fetch holdings summary:", error);
      });
  }, [user?.id]);

  return (
    <>
      <div className="username">
        <h6>Hi, {user?.name || "User"}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({allHoldings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={pnlClass}>
              {formatCompact(totalPnl)} <small>{pnlPercentage >= 0 ? "+" : ""}{pnlPercentage.toFixed(2)}%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{formatCompact(currentValue)}</span>{" "}
            </p>
            <p>
              Investment <span>{formatCompact(totalInvestment)}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
