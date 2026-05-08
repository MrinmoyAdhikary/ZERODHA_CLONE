import React from "react";
import { Route, Routes } from "react-router-dom";

import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import GeneralContext, { GeneralContextProvider } from "./GeneralContex";

const Dashboard = ({ user }) => {
  return (
    <div className="dashboard-container">
        <GeneralContextProvider user={user}>
          <WatchList />
        </GeneralContextProvider>
        
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary user={user} />} />
          <Route path="/orders" element={<Orders user={user} />} />
          <Route path="/holdings" element={<Holdings user={user} />} />
          <Route path="/positions" element={<Positions user={user} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
