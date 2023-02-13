import React from "react";
import "./style.css";
import Icon from "../../components/Icon";
import icon1 from "../../assets/img/icons/stoneE.svg";
import MDB from "../../assets/img/MDB.png";
import OnchainAlliance from "../../assets/img/OnchainAlliance.png";
import Pinksale from "../../assets/img/Pinksale.png";
import RebellionProject from "../../assets/img/RebellionProject.png";

const Partners = () => {
  return (
    <div className="partners--container aic" id="partners">
      <div className="partners--title">
        <Icon imgsrc={icon1} classnamestyle="partners-icon" />
        <div className="partners--title--text">Partners</div>
      </div>
      <div className="partners--body">
        <div className="partners--subline">
          <a
            className="partners--cards"
            href="https://www.mdb.fund/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img className="partners--img" src={MDB} />
          </a>
          <a
            className="partners--cards"
            href="http://therebellionproject.xyz/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img className="partners--img" src={RebellionProject} />
          </a>
        </div>
        <div className="partners--subline">
          <a
            className="partners--cards"
            href="https://discord.gg/EnyGhBPtq2"
            target={"_blank"}
            rel="noreferrer"
          >
            <img className="partners--img" src={OnchainAlliance} />
          </a>
          <a
            className="partners--cards"
            href="https://www.pinksale.finance/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img className="partners--img" src={Pinksale} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;
