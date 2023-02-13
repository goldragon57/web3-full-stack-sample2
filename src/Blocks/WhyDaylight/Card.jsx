import React from "react";
import Icon from "../../components/Icon";

const Card = ({ img, title, desc }) => {
  return (
    <div className="token-card--container aic">
      <Icon imgsrc={img} classnamestyle="token-card-img aic " />
      <div className="token-card-info aic">
        <div className="token-card-info-title">{title}</div>
        <div className="token-card-info-desc">{desc}</div>
      </div>
    </div>
  );
};

export default Card;
