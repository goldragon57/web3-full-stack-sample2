import React from "react";
import "./style.css";
import Icon from "../../components/Icon";
// import stone1 from "../../assets/img/icons/stone1.svg";
//
import roadmap_Desktop from "../../assets/img/brand/3-Road-Map/Roadmap-Desktop-SVG.svg";
import roadmap_Mobile from "../../assets/img/brand/3-Road-Map//Roadmap-Mobile-SVG.svg";

const Roadmap = () => {
  return (
    <div className="roadmap--container aic" id="roadmap">
      {/* <Icon imgsrc={stone1} />
      <div
        className="roadmap--title"
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-easing="ease-in-out"
      >
        Our Road Map
      </div> */}
      <Icon imgsrc={roadmap_Desktop} classnamestyle="roadmap-option" />
      <Icon imgsrc={roadmap_Mobile} classnamestyle="roadmap-option-mobile" />
    </div>
  );
};

export default Roadmap;
