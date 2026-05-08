import React, { useContext } from "react";
import { watchlist } from "../Data/data";
import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Tooltip as ChartTooltip,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

import{Tooltip,Grow} from "@mui/material"
import { useState } from "react";
import { BarChartOutlined, MoreHoriz } from "@mui/icons-material";
import { KeyboardArrowDown,KeyboardArrowUp } from "@mui/icons-material";
import GeneralContext from "./GeneralContex";

ChartJS.register(ArcElement, ChartTooltip, Legend);

const WatchList = () => {
  const downCount = watchlist.filter((stock) => stock.isDown).length;
  const upCount = watchlist.length - downCount;
  const watchlistChartData = {
    labels: ["Up", "Down"],
    datasets: [
      {
        data: [upCount, downCount],
        backgroundColor: ["#67c988", "#df4949"],
        borderWidth: 0,
      },
    ],
  };
  const watchlistChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "65%",
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length}/ 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock,index)=>{
          return(
          <WatchListItem stock={stock} key={index}/>
          )
        })}
      </ul>

      <div className="watchlist-chart">
        <Doughnut data={watchlistChartData} options={watchlistChartOptions} />
      </div>
        
    </div>
  );
};


export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="down" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
 
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    console.log("handleBuyClick triggered for uid:", uid); // Debug log
    generalContext.openBuyWindow(uid, "BUY");
  };

  const handleSellClick = () => {
    generalContext.openBuyWindow(uid, "SELL");
  };

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buy" onClick={handleBuyClick}>Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell" onClick={handleSellClick}>Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
