import React, { useState, useContext } from "react";
// import { Link, Router } from "react-router-dom";
import { Context } from "../Main";

const Navbar = ({ countCart }) => {
  const [menu, setMenu] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const { username, email, cart } = useContext(Context);

  const handleLogOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    window.location.reload();
  };

  return (
    <div id="Navbar">
      <header className="main__header">
        <nav className="nav container">
          <a href="/" className="logo">
            <span className="logo__brand">
              <span className="brand__top"></span>
              <span className="brand__bottom"></span>
            </span>
            تپسی
          </a>
          <div className={`nav__toggler`} onClick={() => setMenu(!menu)}>
            <span className="toggler__top"></span>
            <span className="toggler__middle"></span>
            <span className="toggler__bottom"></span>
          </div>
          <ul className={`list nav__list ${menu ? "nav-list-open" : null}`}>
            <li className="nav__item" onClick={() => setMenu(!menu)}>
              <a className="nav__link" href="#">
                پشتیبانی
              </a>
            </li>
            <li className="nav__item" onClick={() => setMenu(!menu)}>
              <a className="nav__link" href="#">
                خدمات و کسب و کارها
              </a>
            </li>
            {/* <li className="nav__item" onClick={() => setMenu(!menu)}>
              <a className="nav__link" href="#">
                فرصت های شغلی
              </a>
            </li> */}
            <li className="nav__item user-icon">
              <p className=" nav__link" onClick={() => setUserMenu(!userMenu)}>
                حساب کاربری
              </p>
              <ul
                className="user-menu"
                style={{ display: `${userMenu ? "block" : "none"}` }}
              >
                <li>
                  <strong> User : </strong>
                  {username}
                </li>
                <li>
                  <strong> Email : </strong> {email}
                </li>
                <li>
                  <a href="/register" className="user-register">
                    <i className="uil uil-key-skeleton-alt"></i>
                    register
                  </a>
                </li>
                <li className="user-signOut" onClick={handleLogOut}>
                  <i className="uil uil-sign-out-alt"></i>
                  signOut
                </li>
              </ul>
            </li>
            {/* cart icon */}
            <li className="nav__item cart-icon" onClick={() => setMenu(!menu)}>
              <a className="nav__link cartItem" href="#">
                <i className="uil uil-shopping-cart-alt"></i>
                <span className="cartCount">{cart}</span>
              </a>
            </li>
          </ul>
          {/* <button className={`btn nav__download`}>دانلود تپسی</button> */}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
