import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineReconciliation, AiOutlineMenu } from "react-icons/ai";

const DashboardNav = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="dashboard-nav">
      <div className="dash-nav-links">
        <div className="menu-icon">
          <AiOutlineMenu onClick={() => setActive(!active)} />
        </div>
        <Link to="/dashboard">
          <AiOutlineReconciliation />
          <span className="ds">Records</span>
          {active ? <span className="mb">Records</span> : ""}
        </Link>
      </div>
    </div>
  );
};

export default DashboardNav;
