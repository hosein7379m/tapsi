import React, { useEffect, useState } from "react";
import axios from "axios";
import "./register.css";
import SignUpImg from "../assets/image/signIn.svg";
import SignInImg from "../assets/image/signUp.svg";
import { useNavigate } from "react-router-dom";

const Register = ({ currUser, currUsername, currEmail, setCurrUser }) => {
  const navigate = useNavigate();
  const [onMode, setMode] = useState("");
  const [signIn, setSignIn] = useState({
    username: "",
    password: "",
  });
  const [signUp, setSignUp] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [signInError, setSignInError] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const [signInSuccess, setSignInSuccess] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState("");
  const signUpHandle = () => {
    setMode("sign-up-mode");
  };
  const signInHandle = () => {
    setMode("");
  };
  const onChangeSignIn = (e) => {
    const { name, value } = e.target;
    setSignIn((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const onChangeSignUp = (e) => {
    const { name, value } = e.target;
    setSignUp((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const submitSignIn = async (e) => {
    e.preventDefault();

    const oldUser = {
      username: signIn.username,
      password: signIn.password,
    };
    const responseIn = await axios.post(
      `http://localhost:5000/users/login`,
      oldUser
    );
    if (responseIn.data.user) {
      localStorage.setItem("username", responseIn.data.user.username);
      localStorage.setItem("email", responseIn.data.user.email);
      setSignInSuccess("successfully login");
      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 1000);
    } else if (responseIn.data === "username and password do not match!") {
      setSignInError("username and password do not match!");
    } else if (responseIn.data === "username was not found") {
      setSignInError("username was not found");
    }
  };

  const submitSignUp = async (e) => {
    e.preventDefault();
    const newUser = {
      username: signUp.username,
      email: signUp.email,
      password: signUp.password,
    };
    try {
      const responseUp = await axios.post(
        "http://localhost:5000/users/add",
        newUser
      );
      console.log(responseUp.data);
      if (responseUp.data !== "User added!") {
        if (
          responseUp.data == "please enter password" ||
          responseUp.data == "please enter email" ||
          responseUp.data == "please enter username" ||
          responseUp.data ==
            "!username or email already in use by another account"
        ) {
          setSignUpError(responseUp.data);
          setSignUpSuccess("");
        } else if (responseUp.data.txt === "User added!") {
          localStorage.setItem("username", responseUp.data.nUser.username);
          localStorage.setItem("email", responseUp.data.nUser.email);
          setSignUpSuccess("!User added");
          setSignUpError("");
          setTimeout(() => {
            navigate("/");
            window.location.reload();
          }, 1000);
        } else {
          setSignUpError("Your request was not accepted. Please try again");
          setSignUpSuccess("");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* we have 1 main div and 2 main child div inside first for signIn page and seconf for sginUp page */}
      <div className={`register container ${onMode}`}>
        {/* sign in page div */}
        {/* here we have 2 div first for form and second for cta switch to change page */}
        <div className="form-container">
          <h1 className="register-brand">
            تپسی
            <span className="logo__brand">
              <span className="brand__top"></span>
              <span className="brand__bottom"></span>
            </span>
          </h1>
          <div className="sign-in-sign-up">
            <form className="sign-in-form">
              <h1>ورود</h1>
              <div className="sign-in-username">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="نام کاربری"
                  value={signIn.username}
                  name="username"
                  onChange={onChangeSignIn}
                  spellCheck={false}
                  autoComplete="off"
                />
              </div>
              <div className="sign-in-password">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="رمز عبور "
                  value={signIn.password}
                  name="password"
                  onChange={onChangeSignIn}
                  spellCheck={false}
                  autoComplete="off"
                />
              </div>
              <p
                style={{
                  display: `${
                    !signInSuccess && signInError ? "block" : "none"
                  }`,
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                {signInError}
              </p>
              <p
                style={{
                  display: `${
                    !signInSuccess && signInError ? "none" : "block"
                  }`,
                  color: "green",
                  fontWeight: "bold",
                }}
              >
                {signInSuccess}
              </p>
              <button
                type="submit"
                className="btn sign-in-submit"
                onClick={submitSignIn}
              >
                ورود
              </button>

              <div className="sign-in-social">
                <p>ورود به وسیله :</p>
                <div className="social-app">
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-google"></i>
                  <i className="fab fa-linkedin-in"></i>
                </div>
              </div>
            </form>
            <form className="sign-up-form">
              <h1>ثبت نام</h1>
              <div className="sign-up-username">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="نام کاربری"
                  value={signUp.username}
                  name="username"
                  onChange={onChangeSignUp}
                  spellCheck={false}
                  autoComplete="off"
                />
              </div>
              <div className="sign-up-email">
                <i className="fas fa-envelope"></i>
                <input
                  type="text"
                  placeholder="ایمیل"
                  value={signUp.email}
                  name="email"
                  onChange={onChangeSignUp}
                  spellCheck={false}
                  autoComplete="off"
                />
              </div>
              <div className="sign-up-password">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="رمز عبور"
                  value={signUp.password}
                  name="password"
                  onChange={onChangeSignUp}
                  spellCheck={false}
                  autoComplete="off"
                />
              </div>
              <p
                style={{
                  display: `${
                    !signUpSuccess && signUpError ? "block" : "none"
                  }`,
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                {signUpError}
              </p>
              <p
                style={{
                  display: `${
                    !signUpSuccess && signUpError ? "none" : "block"
                  }`,
                  color: "green",
                  fontWeight: "bold",
                }}
              >
                {signUpSuccess}
              </p>
              <button
                type="submit"
                className="btn sign-up-submit"
                onClick={submitSignUp}
              >
                ثبت نام
              </button>
              <div className="sign-up-social">
                <p>ثبت نام به وسیله :</p>
                <div className="social-app">
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-google"></i>
                  <i className="fab fa-linkedin-in"></i>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/*  */}
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>ثبت نام كنيد</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button onClick={signUpHandle} className="btn transparent">
                ايجاد حساب
              </button>
            </div>
            <img src={SignUpImg} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>ورود به حساب</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button onClick={signInHandle} className="btn transparent">
                ورود
              </button>
            </div>
            <img src={SignInImg} className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
