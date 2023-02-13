import React, { useRef, useCallback } from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import Icon from "../../components/Icon";
import icon1 from "../../assets/img/icons/stoneE.svg";

import leftArrow from "../../assets/img/icons/leftArrow.svg";
import rightArrow from "../../assets/img/icons/rightArrow.svg";
import FeatureCard from "../../components/FeatureCard";

import tokencard from "../..//assets/animations//Daylight-Token-Card.json";
import compound from "../..//assets/animations//Auto-Compound-Card.json";
import dynamic from "../..//assets/animations//Dynamic-Card.json";
import rfv from "../..//assets/animations//RFV-Card.json";
import diamond from "../..//assets/animations//Diamonds-Card.json";
const Features = () => {
  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);
  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <div className="features-container aic" id="mechanics">
      <Icon imgsrc={icon1} classnamestyle="features-icon" />
      <div
        className="features--title"
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-easing="ease-in-out"
      >
        Sustainability and Longevity Driven
      </div>
      <div className="aic">
        <div
          data-aos="fade-up-down"
          data-aos-delay="400"
          data-aos-easing="ease-in-out"
          data-aos-once={true}
          className="aic hover-effect"
          onClick={() => handlePrev()}
        >
          <Icon imgsrc={leftArrow} classnamestyle="features--arrow aic" />
        </div>
        <div
          data-aos="fade-up-down"
          data-aos-delay="500"
          data-aos-easing="ease-in-out"
          data-aos-once={true}
          className="aic hover-effect"
          onClick={() => handleNext()}
        >
          <Icon imgsrc={rightArrow} classnamestyle="features--arrow aic" />
        </div>
      </div>
      <Swiper
        ref={sliderRef}
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={true}
        className="features--cards"
        breakpoints={{
          850: {
            slidesPerView: 2,
          },
          1050: {
            slidesPerView: 3,
          },
          1250: {
            slidesPerView: 4,
          },
          1650: {
            slidesPerView: 5,
          },
        }}
      >
        <SwiperSlide className="aic">
          <FeatureCard
            data-aos="fade-up-down"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
            title="Daylight Token"
            lottie={tokencard}
            description="$DAYL token is a deflationary BEP20 token with an elastic supply that rewards holders with a positive rebase reward over time for just holding. "
          />
        </SwiperSlide>
        <SwiperSlide className="aic">
          <FeatureCard
            data-aos="fade-up-down"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
            lottie={compound}
            title="Auto-Compound"
            description="Through an auto-rebase system and fixed compound interest automatic staking protocol, holders get rewards directly in their wallets at a set APY of 160,589.28 percent.      "
          />
        </SwiperSlide>
        <SwiperSlide className="aic">
          <FeatureCard
            data-aos="fade-up-down"
            data-aos-delay="400"
            data-aos-easing="ease-in-out"
            lottie={rfv}
            title="Daylight RFV"
            description="An independent wallet in the Daylight Protocol ecosystem is called the RFV. A percentage of the buy and sell trading costs that accumulate in the RFV, together with an algorithm that supports the Rebase Rewards, are used to fund the vault."
          />
        </SwiperSlide>
        <SwiperSlide className="aic">
          <FeatureCard
            data-aos="fade-up-down"
            data-aos-delay="500"
            data-aos-easing="ease-in-out"
            lottie={dynamic}
            title="Dynamic Taxation"
            description="Our dynamic taxation seeks to reduce price manipulation by charging sales and wallet transfers additionally according to the size of the share the holder possesses in reference to Daylight's LP. This makes it impossible for someone with a large number of tokens in the ecosystem to dump the market."
          />
        </SwiperSlide>
        <SwiperSlide className="aic">
          <FeatureCard
            data-aos="fade-up-down"
            data-aos-delay="600"
            data-aos-easing="ease-in-out"
            // img={icon6}
            lottie={diamond}
            title="Daylight Vault"
            description="The Daylight Vault is a protected safe that stores certain transactional fees received from the protocol and are used to extend the ecosystem by developing use cases for sustainability in regards to the Daylight Token. Daylight Vault is also considered as a SAFU fund for the protocol in the event of any DeFi related exploitations or loss of protocol funds."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Features;
