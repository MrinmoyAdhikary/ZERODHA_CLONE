import React ,{useState,useEffect} from "react";
import axios from "axios";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Holdings = ({ user }) => {

  const [allHoldings,setAllHoldings]=useState([]);
  const formatCurrency = (value) => Number(value || 0).toFixed(2);
  const totalInvestment = allHoldings.reduce((total, stock) => {
    return total + Number(stock.avg || 0) * Number(stock.qty || 0);
  }, 0);
  const currentValue = allHoldings.reduce((total, stock) => {
    return total + Number(stock.price || 0) * Number(stock.qty || 0);
  }, 0);
  const totalPnl = currentValue - totalInvestment;
  const pnlPercentage = totalInvestment ? (totalPnl / totalInvestment) * 100 : 0;
  const pnlClass = totalPnl >= 0 ? "profit" : "loss";
  const holdingsChartData = {
    labels: allHoldings.map((stock) => stock.name),
    datasets: [
      {
        label: "Current value",
        data: allHoldings.map((stock) => Number(stock.price || 0) * Number(stock.qty || 0)),
        backgroundColor: "#4184f3",
        borderRadius: 4,
      },
      {
        label: "Investment",
        data: allHoldings.map((stock) => Number(stock.avg || 0) * Number(stock.qty || 0)),
        backgroundColor: "#9ca3af",
        borderRadius: 4,
      },
    ],
  };
  const holdingsChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(()=>{
    if (!user?.id) {
      return;
    }

    axios.get("http://localhost:8080/allHoldings", {
      params: { userId: user.id },
    })
    .then((res)=>{
      setAllHoldings(res.data);
    });
  },[user?.id]);

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      {allHoldings.length > 0 && (
        <div className="chart-box">
          <Bar data={holdingsChartData} options={holdingsChartOptions} />
        </div>
      )}

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          {allHoldings.map((stock, index) => {
            const curVal = stock.price * stock.qty;
            const isProfit = curVal - stock.avg * stock.qty >= 0.0;
            const profitClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curVal.toFixed(2)}</td>
                <td className={profitClass}>{(curVal-stock.avg*stock.qty).toFixed(2)}</td>
                <td className={profitClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>{formatCurrency(totalInvestment)}</h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>{formatCurrency(currentValue)}</h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={pnlClass}>
            {formatCurrency(totalPnl)} ({pnlPercentage >= 0 ? "+" : ""}{pnlPercentage.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;
