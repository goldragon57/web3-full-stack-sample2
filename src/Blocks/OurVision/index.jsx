import React from "react";
import "./style.css";
import Button from "../../components/Button";
// import ourvisionImg from "../../assets/img/brand/ourVision.svg";
import Lottie from "lottie-react";
import fenix from "../..//assets/animations//Second-Section_final.json";

const OurVision = () => {
  return (
    <div className="ourvision-container aic" id="ourvision">
      <div className="ourvision--left aic">
        <div
          className="ourvision--left-title"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-easing="ease-in-out"
        >
          <u style={{ textDecorationThickness: "3px" }}>OUR VISION</u>
        </div>
        <br />
        <div className="ourvision--left-description-a">
          Daylight is strategically building to lead a revolution in DeFi by
          creating the most sustainable wealth generation and distribution
          protocol in the space.
        </div>
        <br />
        <div className="ourvision--left-description-a">
          Project Daylight is pioneering fair wealth distribution and fostering
          the most complete ecosystem to support blockchain development, growth
          and a user-centric experience.
        </div>
      </div>
      <div className="ourvision--right  aic">
        <div className="ourvision--right-img aic">
          <Lottie animationData={fenix} loop={true} />
        </div>
        <a
          style={{ textDecoration: "none", width: "100%" }}
          href="https://daylight-protocol.gitbook.io/litepaper/"
          target={"_blank"}
          rel="noreferrer"
        >
          <Button style={{ width: "100%" }}>Litepaper</Button>
        </a>
      </div>
    </div>
  );
};

export default OurVision;
