import React from "react";
import "./footer.css";
import fb from "../../assets/social/facebook.svg";
import ins from "../../assets/social/instagram.svg";
import twitter from "../../assets/social/twitter.svg";
import gPlus from "../../assets/social/google-plus.svg";
import youtube from "../../assets/social/youtube.svg";
import linkedin from "../../assets/social/linkedin.svg";
import pinterest from "../../assets/social/pinterest.svg";
import downloadPlay from "../../assets/get-it-on-google-play-png-1-original.png";
import appStore from "../../assets/download-on-the-app-store-apple.e374ae72.svg";
import Select from "../select";
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="container">
          <div className="row pt-4">
            <div className="col-md-4 col-sm-12 align-self-center">
              <div className="text-center">
                <div className="logo">LOGO PLACEHOLDER</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="d-flex justify-content-around">
                <div>
                  <div className="list">
                    <p className="mb-1 text-uppercase fw-bold"> GENERAL </p>
                    <ul>
                      <li>
                        <a href="/">About</a>
                      </li>
                      <li>
                        <a href="/">Blog</a>
                      </li>
                      <li>
                        <a href="/">Signup</a>
                      </li>
                      <li>
                        <a href="/">Help center</a>
                      </li>
                      <li>
                        <a href="/">From Zero to hero</a>
                      </li>
                    </ul>
                  </div>
                  <div className="list mt-3">
                    <p className="mb-1 text-uppercase fw-bold"> Help </p>
                    <ul>
                      <li>
                        <a href="/">Help center</a>
                      </li>
                      <li>
                        <a href="/">contact us</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="list">
                    <p className="mb-1 text-uppercase fw-bold"> Quick links </p>
                    <ul>
                      <li>
                        <a href="/">Jobes</a>
                      </li>
                      <li>
                        <a href="/">companies</a>
                      </li>
                      <li>
                        <a href="/">People</a>
                      </li>
                      <li>
                        <a href="/">Events</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 text-center">
              <p className="mb-1 text-uppercase fw-bold">
                {" "}
                download jobzella mobile app{" "}
              </p>
              <p className="text-secoundry" style={{ fontSize: ".8rem" }}>
                jobzella mobile app for android and iphone{" "}
              </p>
              <div className="d-flex justify-content-center">
                <div>
                  <img className="mobo_store" src={downloadPlay} alt="" />
                </div>
                <div>
                  <img className="mobo_store" src={appStore} alt="" />
                </div>
              </div>
              <p
                className="fw-bold text-uppercase mt-2"
                style={{ fontSize: ".8rem" }}
              >
                download free
              </p>
              <div className="lng">
                <Select>
                  <option value="english">English</option>
                </Select>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <ul className="d-flex social_media_links justify-content-start">
              <li>
                <a href="/">
                  <img src={fb} alt="" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={ins} alt="" />{" "}
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={twitter} alt="" />{" "}
                </a>
              </li>
              <li>
                <a href="/">
                  <img className="rounded-3" src={gPlus} alt="" />{" "}
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={youtube} alt="" />{" "}
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={linkedin} alt="" />{" "}
                </a>
              </li>
              <li>
                <a href="/">
                  <img className="rounded-3" src={pinterest} alt="" />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
