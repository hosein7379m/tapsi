import React from "react";
import homeVector from "../assets/image/mobileMap.png";

function Home() {
  return (
    <section className="home">
      <div className="home__right">
        <div className="home__intro">
          <h1 className="intro__title">تپسی</h1>
          <h2 className="intro__subtitle">اپلیکیشن درخواست خودرو و پیک</h2>
          <div className="intro__btns">
            <div className="btn download-app-pass">
              <a href="#">
                <i className="ic-download"></i>
                <p> دانلود اپلیکیشن مسافران</p>
              </a>
            </div>
            <div className="btn web-app-pass">
              <a href="#">
                <i className="ic-pwa"></i>
                <p> وب اپلیکیشن مسافران </p>
              </a>
            </div>
            <div className="btn download-app-driver">
              <a href="#">
                <i className="ic-download"></i>
                <p> دانلود اپلیکیشن رانندگان </p>
              </a>
            </div>
            <div className="btn register-driver">
              <a href="#">
                <i className="ic-driver-join"></i>
                <p>ثبت نام راننده</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home__left">
        <div className={`home__vector`}>
          <img src={homeVector} alt="map" />
        </div>
      </div>
    </section>
  );
}

export default Home;
