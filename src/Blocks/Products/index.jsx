import React from "react";
import "./style.css";
import Icon from "../../components/Icon";
import icon2 from "../../assets/img/icons/stoneA.svg";
//
import CasaDaylight from "../../assets/img/brand/1-Products/CasaDaylight.svg";
import ProjectOrion from "../../assets/img/brand/1-Products//ProjectOrion.svg";
import PhoenicisRoulette from "../../assets/img/brand/1-Products//PhoenicisRoulette.svg";
import ProjectApollo from "../../assets/img/brand/1-Products/ProjectApollo.svg";

const Products = () => {
  return (
    <div className="products--container aic" id="products">
      <Icon imgsrc={icon2} />
      <div
        className="products--title"
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-easing="ease-in-out"
      >
        Daylight Products
      </div>
      <div className="products-options aic">
        <Icon
          imgsrc={CasaDaylight}
          classnamestyle="products-option hover-effect-b"
        />
        <Icon
          imgsrc={ProjectOrion}
          classnamestyle="products-option hover-effect-b"
        />
        <Icon
          imgsrc={PhoenicisRoulette}
          classnamestyle="products-option hover-effect-b"
        />
        <Icon
          imgsrc={ProjectApollo}
          classnamestyle="products-option hover-effect-b"
        />
      </div>
    </div>
  );
};

export default Products;
