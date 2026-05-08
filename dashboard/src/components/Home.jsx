import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const getStoredUser = () => {
  const storedUser = localStorage.getItem("stockerUser");

  if (!storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser);
  } catch (error) {
    localStorage.removeItem("stockerUser");
    return null;
  }
};

const Home = () => {
  const [user, setUser] = useState(getStoredUser);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const userId = params.get("userId");
    const name = params.get("name");
    const number = params.get("number");

    if (!userId || !name || !number) {
      return;
    }

    const loggedInUser = { id: userId, name, number };
    localStorage.setItem("stockerUser", JSON.stringify(loggedInUser));
    setUser(loggedInUser);
    navigate(location.pathname || "/", { replace: true });
  }, [location.pathname, location.search, navigate]);

  return (
    <>
      <TopBar user={user} />
      <Dashboard user={user} />
    </>
  );
};

export default Home;
