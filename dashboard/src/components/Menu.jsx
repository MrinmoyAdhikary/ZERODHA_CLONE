import React from "react";
import { NavLink ,Link} from "react-router-dom";
import { useState } from "react";

const Menu = ({ user }) => {
  // const [option,setOption]=useState(true);
  const [isProfileDropped,setIsProfileDropped]=useState(false);

  // const handleOption=()=>{
  //   setOption(!option);
  // };
  const handleProfileDropdown=()=>{
    setIsProfileDropped(!isProfileDropped);
  };
  

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  const displayName = user?.name || "USERID";
  const initials = user?.name
    ? user.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "ZU";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <NavLink end className={({ isActive }) => isActive ? activeMenuClass : menuClass} to="/">Dashboard</NavLink>
          </li>
          <li>
           <NavLink className={({ isActive }) => isActive ? activeMenuClass : menuClass} to="/orders">Orders</NavLink>
          </li>
          <li>
          <NavLink className={({ isActive }) => isActive ? activeMenuClass : menuClass} to="/holdings">Holdings</NavLink>
          </li>
          <li>
          <NavLink className={({ isActive }) => isActive ? activeMenuClass : menuClass} to="/positions">Positions</NavLink>
          </li>
        </ul>
        <hr />
        <div className="profile" >
          <div className="avatar">{initials}</div>
          <p className="username" onClick={()=>handleProfileDropdown()}>{displayName}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
