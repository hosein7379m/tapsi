import React from "react";

function Footer() {
  return (
    <div>
      <svg
        className="footer__wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#000"
          fillOpacity="1"
          d="M0,64L60,58.7C120,53,240,43,360,74.7C480,107,600,181,720,192C840,203,960,149,1080,133.3C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <section className="Footer">
        <div className="footer__container">
          <div className="footer__intro">
            <h1>Tapsi</h1>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor consectetur adipiscing elit, sed do eiusmod tempor
            </h6>
            <div className="footer__social">
              <a href="https://www.instagram.com/_.hos.m">
                <i className="uil uil-instagram"></i>
              </a>
              <a href="https://github.com/hosein7379m">
                <i className="uil uil-github-alt"></i>
              </a>
              <a href="#">
                <i className="uil uil-linkedin-alt"></i>
              </a>
            </div>
          </div>
          <div className="footer__body">
            <div className="link__container">
              <ul className="footer__quick">
                <h3>Quick Links</h3>
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
              </ul>
              <ul className="footer__services">
                <h3>Services</h3>
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
              </ul>
            </div>
            <ul className="footer__contact">
              <h3>contact us</h3>
              <li>
                <i className="uil uil-envelope-alt"></i>
                <p>moradih7379@gmail.com</p>
              </li>
              <li>
                <i className="uil uil-mobile-android"></i>
                <p>989025197379+</p>
              </li>
              <li>
                <i className="uil uil-map-marker-alt"></i>
                <p>Iran</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
