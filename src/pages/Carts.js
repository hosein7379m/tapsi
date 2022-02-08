import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import SingleCart from "../components/SingleCart";

const Carts = () => {
  const [userCarts, setUserCarts] = useState([]);
  const [length, setLength] = useState();
  const [cartName, setCartName] = useState(["ali", "mamad"]);

  const fetchCarts = async () => {
    const currUser = {
      username: localStorage.getItem("username"),
    };
    const responseCount = await axios.post(
      `http://localhost:5000/carts`,
      currUser
    );
    //console.log(responseCount.data);
    //setLength(responseCount.data.length);
    setUserCarts(responseCount.data);
  };

  //console.log(userCarts);

  useEffect(() => {
    fetchCarts();
    return () => {
      setUserCarts();
      setLength();
    };
  }, []);

  return (
    <div className="carts">
      <section className="top__AD">
        <h3>AD</h3>
      </section>
      <section className="cart__container">
        {userCarts.map((Scart, index) => {
          return <SingleCart key={index} name={Scart.cart} />;
        })}
      </section>
    </div>
  );
};

export default Carts;
