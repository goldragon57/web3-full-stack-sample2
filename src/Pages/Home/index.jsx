import React, { useState, useEffect } from "react";
import Body from "../../Blocks/Body";
import Hero from "../../Blocks/Hero";
import OurVision from "../../Blocks/OurVision";
import Features from "../../Blocks/Features";
import WhyDaylight from "../../Blocks/WhyDaylight";
import Footer from "../../components/Footer";
import Products from "../../Blocks/Products";
import Roadmap from "../../Blocks/RoadMap";
import Tokenomics from "../../Blocks/Tokenomics";
import Partners from "../../Blocks/Partners";

const Home = () => {
  const [offsetY, setoffsetY] = useState(0);
  const handlescroll = () => {
    setoffsetY(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);
  return (
    <Body>
      <Hero offsetY={offsetY > 1000 ? 1000 : offsetY} />
      <OurVision />
      <Products />
      <WhyDaylight />
      <Roadmap />
      <Tokenomics />
      <Features />
      <Partners />
      <Footer />
    </Body>
  );
};

export default Home;
