import React, { memo } from "react";
import Icon from "../Icon";
import "./style.css";
import Lottie from "lottie-react";

const FeatureCard = (props) => {
  const { img, title, description, cardv2, lottie } = props;
  return (
    <div className="featurecard-container-inner" {...props}>
      {img && (
        <Icon
          imgsrc={img}
          classnamestyle="featurecard--top aic "
          extrastyle={cardv2 ? { marginTop: "0px " } : {}}
        />
      )}
      {lottie && (
        <div className="featurecard--top">
          <Lottie animationData={lottie} loop={true} />
        </div>
      )}
      <div className="featurecard--title">{title}</div>
      <div className="featurecard--description">{description}</div>
    </div>
  );
};

export default memo(FeatureCard);
