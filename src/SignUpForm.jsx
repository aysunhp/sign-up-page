import React from "react";
import { Button } from "antd";
import googleLogo from "./assets/images/googleLogo.png";
import GooglePlayBtn from "./components/GooglePlayBtn";
import AppStoreBtn from "./components/AppStoreBtn";
import heroImg from "./assets/images/heroImg.png";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import "./grid.css";
import FormSection from "./components/FormSection";

const SignUpForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="login-signup">
        <div className="containerr">
          <div className="left">
            <h1>Social media shared today, tomorrow or by location</h1>
            <div className="circle">
              <div className="img1 img">
                <img src={heroImg} alt="" style={{ height: "630px" }} />
              </div>
              <div className="img2 img">
                <img src={heroImg} alt="" style={{ height: "485px" }} />
              </div>
              <div className="img3 img">
                <img src={heroImg} alt="" style={{ height: "485px" }} />
              </div>
            </div>

            <div className="points">
              <div className="point1"></div>
              <div className="point2">
                <div className="point-white"></div>
              </div>
              <div className="point3"></div>
            </div>
          </div>
          <div className="right">
            <div className="logo">
              <div className="logo-img"></div>
              <div className="logo-name">Capzul</div>
            </div>
            <div className="create-accout">
              <h1>Create account</h1>
              <p>For business, band or celebrity.</p>
            </div>
            <FormSection />

           
            <div className="log-in">
              <p>
                Don’t have an account?{" "}
                <span>
                  <Link
                    to="/logIn"
                    style={{ color: "blue", textDecoration: "none" }}
                  >
                    Log In
                  </Link>
                </span>
              </p>
            </div>
            <div className="contact">
              <GooglePlayBtn />
              <AppStoreBtn />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default SignUpForm;
