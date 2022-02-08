import React, { useState } from "react";
import Offroad from "../assets/image/offroad.jpg";
import sea from "../assets/image/sea.jpg";
import jungle from "../assets/image/jungle.jpg";

function Prize() {
  const [likes1, setLikes1] = useState({
    status: false,
    rate: 50,
  });
  const [likes2, setLikes2] = useState({
    status: false,
    rate: 50,
  });
  const [likes3, setLikes3] = useState({
    status: false,
    rate: 50,
  });
  /* this function for handle rate of each box ehen user click on like  */
  const handleLike = (event) => {
    const currBox = event.target.parentElement.id;
    if (currBox === "1") {
      if (likes1.status === false) {
        setLikes1({ status: true, rate: likes1.rate + 1 });
      } else {
        setLikes1({ status: false, rate: likes1.rate - 1 });
      }
    } else if (currBox === "2") {
      if (likes2.status === false) {
        setLikes2({ status: true, rate: likes2.rate + 1 });
      } else {
        setLikes2({ status: false, rate: likes2.rate - 1 });
      }
    } else if (currBox === "3") {
      if (likes3.status === false) {
        setLikes3({ status: true, rate: likes3.rate + 1 });
      } else {
        setLikes3({ status: false, rate: likes3.rate - 1 });
      }
    }
  };

  return (
    <div>
      <section className="prize">
        <h2>جوایز ویژه</h2>
        <div className="prize__slide">
          <div
            className="prize__card"
            data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-delay="0"
          >
            <div className="prize__img">
              <img src={Offroad} alt="offroad" />
            </div>
            <div className="prize__content">
              <div>
                <p>سفر 3 روزه و اقامت رایگان</p>
                <span>ویژه</span>
              </div>
              <h3>سفر به قلب کویر لوت</h3>
              <span id="1">
                <i className="uil uil-eye">25</i>
                <i
                  className={`uil uil-thumbs-up 1 ${
                    likes1.status ? "liked" : null
                  }`}
                  onClick={handleLike}
                >
                  {likes1.rate}
                </i>
              </span>
            </div>
          </div>
          <div
            className="prize__card"
            data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-delay="0"
          >
            <div className="prize__img">
              <img src={jungle} alt="offroad" />
            </div>
            <div className="prize__content">
              <div>
                <p>سفر 3 روزه و اقامت رایگان</p>
                <span>ویژه</span>
              </div>
              <h3>سفر به قلب جنگل</h3>
              <span id="2">
                <i className="uil uil-eye">25</i>
                <i
                  className={`uil uil-thumbs-up 2 ${
                    likes2.status ? "liked" : null
                  }`}
                  onClick={handleLike}
                >
                  {likes2.rate}
                </i>
              </span>
            </div>
          </div>
          <div
            className="prize__card"
            data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-delay="0"
          >
            <div className="prize__img">
              <img src={sea} alt="offroad" />
            </div>
            <div className="prize__content">
              <div>
                <p>سفر 3 روزه و اقامت رایگان</p>
                <span>ویژه</span>
              </div>
              <h3>سفر به قلب دریا</h3>
              <span id="3">
                <i className="uil uil-eye">25</i>
                <i
                  className={`uil uil-thumbs-up 3 ${
                    likes3.status ? "liked" : null
                  }`}
                  onClick={handleLike}
                >
                  {likes3.rate}
                </i>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Prize;
