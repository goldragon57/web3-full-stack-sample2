import React, { useState } from "react";
import "./style.css";
import Icon from "..//../Icon";
import arrowBack from "../../..//assets/img/icons/arrowBack.svg";
import LogoBrand from "../../..//assets/img/brand/logo.svg";
import MediumIcon from "../../../assets/img/socials/medium.svg";
import TelegramIcon from "../../../assets/img/socials/telegram.svg";
import DiscordIcon from "../../../assets/img/socials/discord.svg";
import TwitterIcon from "../../../assets/img/socials/twitter.svg";
import { HashLink } from "react-router-hash-link";
import tabIcon from "../../../assets/img/icons/tab.svg";

const Menu = ({ isOpen, close }) => {
  const [isOpenTab1, setisOpenTab1] = useState(false);
  const [isOpenTab2, setisOpenTab2] = useState(false);
  return (
    <div
      className={
        isOpen ? "menu-container-open aic" : "menu-container-close aic"
      }
    >
      <div className="menu--top aic">
        <div className="menu-header aic">
          <div className="menu--close " onClick={() => close()}>
            <Icon
              imgsrc={arrowBack}
              classnamestyle="menu--close-icon aic hover-effect"
            />
          </div>
          <Icon imgsrc={LogoBrand} classnamestyle="menu--brand" />
        </div>
        <div className="menu--links-outer">
          <div className="menu--links aic">
            <a href="/" className="menu--links-link aic">
              Home
            </a>
            <HashLink
              onClick={() => close()}
              smooth={true}
              to="#ourvision"
              className="menu--links-link aic"
            >
              Our Vision
            </HashLink>
            {/* <HashLink
              onClick={() => close()}
              smooth={true}
              to="#products"
              className="menu--links-link aic"
            >
              Products
            </HashLink> */}
            <div
              className="menu--links-link aic menu--links-tab"
              onClick={() => setisOpenTab1((prev) => !prev)}
            >
              Products
              <img
                className="menu--link-tab aic"
                src={tabIcon}
                alt="icon-alt"
                draggable="false"
              />
            </div>
            <div
              className={
                isOpenTab1
                  ? "menu--links-tab-open aic"
                  : "menu--links-tab-close aic"
              }
            >
              <HashLink
                onClick={() => close()}
                smooth={true}
                to="#products"
                className="menu--links-tab-option"
              >
                Project Apollo
              </HashLink>
              <HashLink
                onClick={() => close()}
                smooth={true}
                to="#products"
                className="menu--links-tab-option"
              >
                Phoenicis Roulette
              </HashLink>
              <HashLink
                onClick={() => close()}
                smooth={true}
                to="#products"
                className="menu--links-tab-option"
              >
                Casa Daylight
              </HashLink>
              <HashLink
                onClick={() => close()}
                smooth={true}
                to="#products"
                className="menu--links-tab-option"
              >
                Project Orion
              </HashLink>
            </div>

            <div
              className="menu--links-link aic menu--links-tab"
              onClick={() => setisOpenTab2((prev) => !prev)}
            >
              Ecosystem
              <img
                className="menu--link-tab aic"
                src={tabIcon}
                alt="icon-alt"
                draggable="false"
              />
            </div>
            <div
              className={
                isOpenTab2
                  ? "menu--links-tab-open aic"
                  : "menu--links-tab-close aic"
              }
            >
              <HashLink
                onClick={() => close()}
                smooth={true}
                to="#whydaylight"
                className="menu--links-tab-option"
              >
                Why Daylight
              </HashLink>
              <HashLink
                onClick={() => close()}
                smooth={true}
                to="#roadmap"
                className="menu--links-tab-option"
              >
                Roadmap
              </HashLink>
              <HashLink
                onClick={() => close()}
                smooth={true}
                to="#tokenomics"
                className="menu--links-tab-option"
              >
                Tokenomics
              </HashLink>
            </div>
            {/* <div className="menu--links-link aic">Litepaper</div> */}
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://daylight-protocol.gitbook.io/litepaper/"
              className="menu--links-link aic"
            >
              Litepaper
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.pinksale.finance/launchpad/0xA179446a193248F3dB5F05E2B5C7Aa8de6885eA0?chain=BSC"
              className="menu--links-link aic"
            >
              PreSale
            </a>
            <HashLink
              onClick={() => close()}
              className="header--link hover-effect"
              smooth={true}
              to="#partners"
            >
              Partners
            </HashLink>
          </div>
        </div>
      </div>

      {/* <HashLink
          onClick={() => close()}
          smooth={true}
          to="#ourvision"
          className="hover-effect menu--links-link aic"
        >
          Our Vision
        </HashLink>
        <div className="menu--links-link aic aic menu--link-options">
          Products
          <img
            className="menu--link-tab aic"
            src={tabIcon}
            alt="icon-alt"
            draggable="false"
          />
          <div className="menu--link-options-list aic">
            <div className="menu--link-options-list-option-disable ">
              Project Apollo
            </div>
            <div className="menu--link-options-list-option-disable ">
              Phoenicis Roulette
            </div>
            <div className="menu--link-options-list-option-disable ">
              Casa Daylight
            </div>
            <div className="menu--link-options-list-option-disable ">
              Project Orion
            </div>
          </div>
        </div>
        <div className="menu--links-link aic aic menu--link-options">
          Mechanics
          <img
            className="menu--link-tab aic"
            src={tabIcon}
            alt="icon-alt"
            draggable="false"
          />
          <div className="menu--link-options-list aic">
            <HashLink
              onClick={() => close()}
              smooth={true}
              to="#whydaylight"
              className="menu--links-link aic hover-effect-c"
            >
              Why Daylight
            </HashLink>
            <div className="menu--link-options-list-option-disable ">
              Roadmap
            </div>
            <div className="menu--link-options-list-option-disable ">
              Tokenomics
            </div>
          </div>
        </div>
        <div className="hover-effect menu--links-link aic">Documentation</div>
        <a
          href="https://www.pinksale.finance/launchpad/0xA179446a193248F3dB5F05E2B5C7Aa8de6885eA0?chain=BSC"
          className="hover-effect menu--links-link aic"
        >
          PreSale
        </a> */}
      <div className="menu--bottom aic">
        <div className="menu--socials aic">
          <Icon
            imgsrc={MediumIcon}
            link="https://medium.com/@DaylightProtocol"
            classnamestyle="menu--socials-social aic hover-effect"
          />
          <Icon
            imgsrc={TelegramIcon}
            link="https://t.me/DaylightDefi"
            classnamestyle="menu--socials-social aic hover-effect"
          />
          <Icon
            imgsrc={DiscordIcon}
            link="https://discord.gg/CsRc6AVZbZ"
            classnamestyle="menu--socials-social aic hover-effect"
          />
          <Icon
            imgsrc={TwitterIcon}
            link="https://twitter.com/DaylightDeFi"
            classnamestyle="menu--socials-social aic hover-effect"
          />
        </div>
        <div className="menu--copyright">
          Daylight Protocol Copyright 2022. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Menu;
