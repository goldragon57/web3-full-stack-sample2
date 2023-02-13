import React from "react";
import Icon from "../../components/Icon";
import "./style.css";
import icon1 from "../../assets/img/icons/stoneB.svg";
import icon6 from "../../assets/img/icons/stone6.svg";
import icon7 from "../../assets/img/icons/stone7.svg";
import robotArm from "../../assets/img/icons/robotArm.svg";
import security from "../../assets/img/icons/security.svg";
import Button from "../../components/Button";
import Card from "./Card";

const whydaylight = () => {
  return (
    <div className="whydaylight-container aic" id="whydaylight">
      <div className="whydaylight--left aic">
        <Icon
          imgsrc={icon1}
          classnamestyle="whydaylight--left-img aic"
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
        />
        <div
          className="whydaylight--left-title"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-easing="ease-in-out"
        >
          Why Daylight
        </div>
        <div
          className="whydaylight--left-description"
          data-aos="fade-up-down"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
        >
          $DAYLIGHT is an elastic supply token that runs on the BNB Chain and
          rewards holders through conventional, sustained positive rebases, with
          an APY of 160,589.28%. Interest rewards are compounded every 30
          minutes for every web3 wallet holding any $DAYLIGHT tokens.
        </div>
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://www.pinksale.finance/launchpad/0xA179446a193248F3dB5F05E2B5C7Aa8de6885eA0?chain=BSC"
          style={{ textDecoration: "none", width: "100%" }}
        >
          <Button
            style={{ width: "100%" }}
            data-aos="fade-up-down"
            data-aos-delay="400"
            data-aos-easing="ease-in-out"
          >
            Pledge for the Public PreSale
          </Button>
        </a>
      </div>
      <div className="whydaylight--right aic">
        <Card
          img={icon6}
          title="Liquidity First"
          desc="To boost token liquidity and lower price volatility, swaps with dynamic fees are included. The sustainability of our rewards and mission is significantly increased as a result."
        />
        <Card
          img={icon7}
          title="Treasury"
          desc="The Treasury contract is a simple vault implementation holding all the funds collected by the protocol. If for instance a user purchases a token amount, the token amount swapped is fully taken in by the treasury and converted to stable-coin into the Treasury. New tokens will be minted based on the RFV of the treasury assets."
        />
        <Card
          img={robotArm}
          title="Ecosystem Evolution"
          desc="Daylight Protocol is a decentralized auto-staking ecosystem with incentivized extensions that has been strategically created to disrupt decentralized earning and propel freedom of financial limitations, while rewarding users for contributions to the ecosystem with an appreciated earning over time."
        />
        <Card
          img={security}
          title="Risk Free Value"
          desc="The Risk Free Value is an additional multi-sig vault that is used to sustain and stabilize the liquidity pool. This is especially helpful if there is a sudden sell-off that might deplete the available liquidity. Since liquidity is what enables the buying and selling of the Daylight token, this might be problematic. During a sudden sell-off, the RFV acts as a liquidity reserve and stops this from happening."
        />
      </div>
    </div>
  );
};

export default whydaylight;
