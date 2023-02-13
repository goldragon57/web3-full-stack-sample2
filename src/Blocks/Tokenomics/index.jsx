import React from "react";
import "./style.css";
import Icon from "../../components/Icon";
import Tokenomics_Desktop from "../../assets/img/brand//4-Tokenomics/Tokenomics-Desktop-SVG.svg";
import Tokenomics_Mobile from "../../assets/img/brand//4-Tokenomics/Tokenomics-Mobile-SVG.svg";

const Tokenomics = () => {
  return (
    <div className="tokenomics--container aic" id="tokenomics">
      <Icon imgsrc={Tokenomics_Desktop} classnamestyle="tokenomics-option" />
      <Icon
        imgsrc={Tokenomics_Mobile}
        classnamestyle="tokenomics-option-mobile"
      />
    </div>
  );
};

export default Tokenomics;
