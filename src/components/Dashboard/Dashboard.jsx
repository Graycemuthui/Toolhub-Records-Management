import React from "react";
import { records } from "../data/Mockdata";
import "./Dashboard.css";
import Total from "./Total/Total";
import Missing from "./Missing/Missing";
import Edited from "./Edited/Edited";
import DashboardNav from "./DashboardNav/DashboardNav";
import Piechart from "./Charts/Piechart";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardNav />
      <div className="tables">
        <Total data={records} />
        <Missing data={records} />
        <Edited data={records} />
        <Piechart style={{ position: "relative", height: "100px" }} />
      </div>
    </div>
  );
};

export default Dashboard;
