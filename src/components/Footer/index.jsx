import React from "react";
import "./style.css";
import { HashLink } from "react-router-hash-link";
//
import LogoBrand from "../../assets/img/brand/logo.svg";
import mediumIcon from "../../assets/img/socials/medium.svg";
import discordIcon from "../../assets/img/socials/discord.svg";
import telegramIcon from "../../assets/img/socials/telegram.svg";
import twitterIcon from "../../assets/img/socials/twitter.svg";

import Icon from "../Icon";
const Footer = () => {
  return (
    <div className="footer--container aic">
      <div className="footer-top aic">
        <div className="footer-top-list aic">
          <div className="footer-top-list-title">Project Daylight</div>
          <HashLink
            className="footer-top-list-option hover-effect"
            smooth={true}
            to="#ourvision"
          >
            Our Vision
          </HashLink>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://www.pinksale.finance/launchpad/0xA179446a193248F3dB5F05E2B5C7Aa8de6885eA0?chain=BSC"
            className="footer-top-list-option hover-effect"
          >
            PreSale
          </a>
          <HashLink
            className="footer-top-list-option hover-effect"
            smooth={true}
            to="#partners"
          >
            Partners
          </HashLink>
        </div>
        <div className="footer-top-list aic">
          <HashLink
            className="footer-top-list-title hover-effect"
            smooth={true}
            to="#products"
          >
            Products
          </HashLink>
          <HashLink
            className="footer-top-list-option hover-effect"
            smooth={true}
            to="#products"
          >
            Project Orion
          </HashLink>
          <HashLink
            className="footer-top-list-option hover-effect"
            smooth={true}
            to="#products"
          >
            Casa Daylight
          </HashLink>
          <HashLink
            className="footer-top-list-option hover-effect"
            smooth={true}
            to="#products"
          >
            Phoenicis Roulette
          </HashLink>
          <HashLink
            className="footer-top-list-option hover-effect"
            smooth={true}
            to="#products"
          >
            Project Apollo
          </HashLink>
        </div>
        <div className="footer-top-list aic">
          <div className="footer-top-list-title">Ecosystem</div>
          <HashLink
            className="footer-top-list-option hover-effect"
            smooth={true}
            to="#whydaylight"
          >
            Why Daylight
          </HashLink>
          <HashLink
            className="footer-top-list-option hover-effect"
            smooth={true}
            to="#roadmap"
          >
            Roadmap
          </HashLink>
          <HashLink
            className="footer-top-list-option hover-effect"
            smooth={true}
            to="#tokenomics"
          >
            Tokenomics
          </HashLink>
        </div>
        <div className="footer-top-list aic">
          <div className="footer-top-list-title">Documentation</div>

          <a
            href="https://daylight-protocol.gitbook.io/litepaper/"
            target={"_blank"}
            rel="noreferrer"
            className="footer-top-list-option hover-effect"
          >
            Litepaper
          </a>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://daylight-protocol.gitbook.io/litepaper/PreSale-and-launch"
            className="footer-top-list-option hover-effect"
          >
            PreSale
          </a>
        </div>
        <div className="footer-top-sub aic">
          <div className="footer-top-sub-title">Launch dApp </div>
          {/* <div className="footer-top-sub-option">
            Get the latest news and updates
          </div> */}
          <button type="button" className="footer-top-sub-button aic">
            Coming Soon
          </button>
        </div>
      </div>
      <div
        className="footer-bottom aic"
        style={{ flexDirection: "column", gap: "18px" }}
      >
        <Icon
          imgsrc={LogoBrand}
          classnamestyle="footer-top-sub-img  aic hover-effect"
        />
        <div className="footer--socials aic">
          <Icon
            imgsrc={mediumIcon}
            link="https://medium.com/@DaylightProtocol"
            classnamestyle="footer--social aic hover-effect"
          />
          <Icon
            imgsrc={discordIcon}
            link="https://discord.gg/CsRc6AVZbZ"
            classnamestyle="footer--social aic hover-effect"
          />
          <Icon
            imgsrc={telegramIcon}
            link="https://t.me/DaylightDefi"
            classnamestyle="footer--social aic hover-effect"
          />
          <Icon
            imgsrc={twitterIcon}
            link="https://twitter.com/DaylightDeFi"
            classnamestyle="footer--social aic hover-effect"
          />
        </div>
        © {new Date().getFullYear()} Daylight Capital, All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
