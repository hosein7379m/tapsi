import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import LoadBar from "./components/loadbar/LoadBar";
import Carts from "./pages/Carts";
import Register from "./pages/Register";
import axios from "axios";
export const Context = React.createContext();

function Main() {
  const [currUser, setCurrUser] = useState({
    currUsername: "",
    currEmail: "",
  });
  const [countCart, setCountCart] = useState(0);

  useEffect(() => {
    setCurrUser({
      currUsername: localStorage.getItem("username"),
      currEmail: localStorage.getItem("email"),
    });
  }, []);
  return (
    <div>
      <Context.Provider
        value={{
          username: [currUser.currUsername],
          email: [currUser.currEmail],
          cart: [countCart],
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <App
                currUsername={currUser.currUsername}
                currEmai={currUser.currEmail}
                setCurrUser={setCurrUser}
              />
            }
          />
          <Route
            path="register"
            element={
              <Register
                currUser={currUser}
                currUsername={currUser.currUsername}
                currEmai={currUser.currEmail}
                setCurrUser={setCurrUser}
              />
            }
          />
          <Route path="carts" element={<Carts />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}
export default Main;
