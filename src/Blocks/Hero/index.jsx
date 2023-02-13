import React from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import "./style.css";

import Lottie from "lottie-react";
// import fenix from "../../assets/img/brand/Fenix-Hill.svg";
import fenix from "../..//assets/animations/1-Fenix.json";
import Mountainlottie from "../..//assets/animations/2-Mountain.json";
import planets from "../..//assets/animations//3-Planets.json";

const HeroSection = ({ offsetY }) => {
  return (
    <div className="hero--shell aic">
      <div className="hero--background">
        <div
          className="icon--imgbg"
          style={{
            transform: `translateY(-${offsetY * 0.5}px)`,
            transition: "transform 0.6s cubic-bezier(0, 0, 0, 1) 0s",
          }}
        >
          <Lottie animationData={planets} loop={true} />
        </div>
      </div>
      <div className="hero--single">
        <div
          className="icon--imgbg"
          style={{
            transform: `translateY(${offsetY * 0.3}px)`,
            transition: "transform 0.6s cubic-bezier(0, 0, 0, 1) 0s",
          }}
        >
          <Lottie animationData={Mountainlottie} loop={true} />
        </div>
      </div>
      <div className="hero--fenix">
        {/* <img
          style={{
            transform: `translateY(${offsetY * 0.5}px)`,
            transition: "transform 0.6s cubic-bezier(0, 0, 0, 1) 0s",
          }}
          className="icon--imgbg"
          src={fenix}
          alt="brand animation"
          draggable="false"
        /> */}
        <div
          className="icon--imgbg"
          style={{
            transform: `translateY(${offsetY * 0.5}px)`,
            transition: "transform 0.6s cubic-bezier(0, 0, 0, 1) 0s",
          }}
        >
          <Lottie animationData={fenix} loop={true} />
        </div>
      </div>

      <div className="hero-container-header">
        <Header />
        <div className="hero-container">
          <div className="hero--left">
            <div
              className="hero--left-title aic"
              data-aos="fade-up-down"
              data-aos-delay="200"
              data-aos-offset="-100"
              data-aos-easing="ease-in-out"
            >
              Revolutionizing Wealth Generation and Distribution
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-offset="-100"
              data-aos-easing="ease-in-out"
              className="hero--left-description-a"
            >
              Daylight was created with the intention to stabilize the DeFi 3.0
              space by ascertaining measures in place to mitigate price
              manipulation, depreciating value and combat sustainability issues
              faced by other protocols in the space.
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-offset="-100"
              data-aos-easing="ease-in-out"
              className="hero--left-description-a"
            >
              Daylight Protocol is a decentralized income mechanism on the BNB
              Chain (BEP-20) that rewards holders at a set APY of 160,589.28
              percent that is sustainable and calculated with efficiency in
              parallel to RFV sustainability and survivability.
            </div>
            <div className="hero--left-buttons">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://www.pinksale.finance/launchpad/0xA179446a193248F3dB5F05E2B5C7Aa8de6885eA0?chain=BSC"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button
                  data-aos="fade-up-down"
                  data-aos-delay="600"
                  data-aos-offset="-100"
                  data-aos-easing="ease-in-out"
                >
                  PreSale
                </Button>
              </a>
              <Button
                style={{
                  whiteSpace: "nowrap",
                }}
                data-aos="fade-up-down"
                data-aos-delay="700"
                data-aos-offset="-100"
                data-aos-easing="ease-in-out"
              >
                dApp Launching Soon
              </Button>
            </div>
          </div>
          <div className="hero--right"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
