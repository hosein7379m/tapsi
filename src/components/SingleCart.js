import React from "react";
import axios from "axios";
import sea from "../assets/image/sea.jpg";

const SingleCart = ({ name }) => {
  // const removeCart = async (e) => {
  //   const nameCart = e.target.attributes[0].nodeValue;
  //   const currCart = {
  //     id: nameCart,
  //   };
  //   console.log(currCart.name);
  //   const deleteCart = await axios.post(
  //     `http://localhost:5000/carts/delete`,
  //     currCart
  //   );
  //   console.log(deleteCart);
  // };
  return (
    <div>
      <div className="userCart">
        <div className="userCart-img">
          <img src={sea} />
        </div>
        <div className="userCart-info">
          <ul className="info-list">
            <li>{name}</li>
          </ul>
        </div>
        <div className="userCart-cta">
          <button>Buy</button>
          <button id={name}>cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
