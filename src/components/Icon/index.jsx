import React from "react";
import "./style.css";
const Icon = (props) => {
  const { imgsrc, link, classnamestyle, extrastyle } = props;
  return (
    <a
      className={classnamestyle}
      href={link}
      target="_blank"
      rel="noreferrer"
      style={extrastyle}
    >
      <img
        {...props}
        className="icon--img"
        src={imgsrc}
        alt="icon-alt"
        draggable="false"
      />
    </a>
  );
};

export default Icon;
