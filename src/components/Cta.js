import { cleanup } from "@testing-library/react";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Main";

// import { useNavigate } from "react-router-dom";

function Cta() {
  const { username, cart } = useContext(Context);

  const [Uname, setUname] = useState("");
  //console.log(Uname[0]);
  // const navigate = useNavigate();
  const [special, setspecial] = useState({
    count: 0,
  });
  const [economical, setEconomical] = useState({
    count: 0,
  });
  const [normal, setNormal] = useState({
    count: 0,
  });
  const [sumCount, setSumCount] = useState();
  const [sumCart, setSumCart] = useState("");

  useEffect(() => {
    setSumCount(special.count + economical.count + normal.count);
    setUname(username);
    return () => {
      cleanup(sumCount);
    };
  }, [special, economical, normal, Uname]);

  const snedCart = async () => {
    const newCart = {
      username: Uname[0],
      cart: sumCart,
      count: sumCount,
    };
    if (username) {
      try {
        const responseCount = await axios.post(
          `http://localhost:5000/carts/cart`,
          newCart
        );
        console.log(responseCount);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("you should login first.");
    }
  };

  const submitSpecial = (e) => {
    const name = e.target.attributes[1].nodeValue;
    setspecial({
      count: 1,
    });
    setSumCart(name);
    snedCart();
  };
  const submitEconomical = (e) => {
    const name = e.target.attributes[1].nodeValue;
    setEconomical({
      count: 1,
    });
    setSumCart(name);
    snedCart();
  };
  const submitNormal = (e) => {
    const name = e.target.attributes[1].nodeValue;
    setNormal({
      count: 1,
    });
    setSumCart(name);
    snedCart();
  };

  return (
    <div>
      {/* <hr style={{ opacity: ".4", margin: "5% 10%" }} /> */}
      <section className="cta section">
        <div className="cta__planA">
          <div className="plan__container">
            <div className="plan__text">
              <h3>خدمات تپسی ویژه کسب‌وکارها</h3>
              <p>
                پنل سازمانی تپسی، یک سامانه تحت وب است که به سادگی امکان درخواست
                هم‌زمان تعداد نامحدودی خودرو و پیک را برای کسب‌وکارها و
                سازمان‌ها فراهم می‌کند. و با استفاده از آن می‌توانید ماموریت های
                درون‌شهری و ارسال کالاهای خود را به سادگی مدیریت کنید
              </p>
              <a className="plan__link">
                اطلاعات بیشتر سرویس سازمانی
                <i className="uil uil-angle-left "></i>
              </a>
              <a className="cta__btn">ورود و ثبت نام پنل سازمانی</a>
            </div>
            <div
              className="plan__img"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="0"
            >
              <img src="https://tapsi.ir/images/home/i-mac.webp" alt="plan" />
            </div>
          </div>
        </div>
        <div className="cta__planB">
          <div className="plan__container">
            <div className="plan__text">
              <h3>خرید کد اعتبار تپسی</h3>
              <p>
                کاربران، کسب‌وکارها و سازمان‌ها می‌توانند به تعداد و مبلغ مورد
                نظرشان، کد اعتبار یا کد تخفیف تپسی تهیه کرده، برای خود، پرسنل و
                یا مشتریانشان استفاده کنند و از تخفیف‌های ویژه تپسی نیز بهره‌مند
                شوند. <br /> این کدها امکان سفارشی‌سازی بر اساس مبدا، مقصد،
                زمان، درصد و مبلغ را دارند
              </p>

              <a className="cta__btn">خرید کد اعتبار و تخفیف</a>
            </div>
            <div
              className="plan__img"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="0"
            >
              <img src="https://tapsi.ir/images/home/macbook.webp" alt="plan" />
            </div>
          </div>
        </div>
      </section>
      <section className="tapsiPlan">
        <h2>پلن های رزرو تاکسی</h2>
        <div className="plans">
          <div
            className="card special"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-mirror="true"
          >
            <div className="card__header">
              <div className="card__info">
                <span>20% OFF</span>
                <p>ویژه</p>
              </div>
              <div className="card__title">
                <h3>490,000</h3>
                <p>ماهانه / تومان</p>
              </div>
              <div className="card__subtitle">
                <p>سرویس ماشین های مدل بالا</p>
              </div>
            </div>
            <div className="card__body">
              <p>
                {" "}
                <i className="uil uil-check"></i>کیفیت خیلی خفن
              </p>
              <p>
                {" "}
                <i className="uil uil-check"></i>بی سر و صدا
              </p>
              <p>
                {" "}
                <i className="uil uil-check"></i>زمان نامحدود
              </p>
              <p>
                {" "}
                <i className="uil uil-check"></i>سرویس نامحدود
              </p>
            </div>
            <div className="card__cta">
              <a className="btn" name="special" onClick={submitSpecial}>
                ثبت سفارش
              </a>
            </div>
          </div>
          <div
            className="card economical"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-mirror="true"
          >
            <div className="card__header">
              <div className="card__info">
                <span>15% OFF</span>
                <p>اقتصادی</p>
              </div>
              <div className="card__title">
                <h3>290,000</h3>
                <p>ماهانه / تومان</p>
              </div>
              <div className="card__subtitle">
                <p>سرویس ماشین های معمولی</p>
              </div>
            </div>
            <div className="card__body">
              <p>
                {" "}
                <i className="uil uil-check"></i>کیفیت معمولی{" "}
              </p>
              <p>
                {" "}
                <i className="uil uil-check"></i>کیفیت معمولی{" "}
              </p>
              <p>
                {" "}
                <i className="uil uil-check"></i>کیفیت معمولی{" "}
              </p>
              <p>
                {" "}
                <i className="uil uil-check"></i>کیفیت معمولی{" "}
              </p>
            </div>
            <div className="card__cta">
              <a className="btn" name="economical" onClick={submitEconomical}>
                ثبت سفارش
              </a>
            </div>
          </div>
          <div
            className="card normal"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-mirror="true"
          >
            <div className="card__header">
              <div className="card__info">
                <span>10% OFF</span>
                <p>عادی</p>
              </div>
              <div className="card__title">
                <h3>290,000</h3>
                <p>ماهانه / تومان</p>
              </div>
              <div className="card__subtitle">
                <p>سرویس ماشین های معمولی</p>
              </div>
            </div>
            <div className="card__body">
              <p>
                {" "}
                <i className="uil uil-check"></i>کیفیت معمولی
              </p>
              <p>
                {" "}
                <i className="uil uil-check"></i>کیفیت معمولی
              </p>
              <p>
                {" "}
                <i className="uil uil-check"></i>کیفیت معمولی
              </p>
              <p>
                {" "}
                <i className="uil uil-check"></i>کیفیت معمولی
              </p>
            </div>
            <div className="card__cta">
              <a className="btn" name="normal" onClick={submitNormal}>
                ثبت سفارش
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cta;
