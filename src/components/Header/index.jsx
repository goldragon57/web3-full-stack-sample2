import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

//
import "./style.css";
//
import LogoBrand from "../../assets/img/brand/logo.svg";
import discordIcon from "../../assets/img/socials/discord.svg";
import mediumIcon from "../../assets/img/socials/medium.svg";
import telegramIcon from "../../assets/img/socials/telegram.svg";
import twitterIcon from "../../assets/img/socials/twitter.svg";
import menuIcon from "../../assets/img/icons/menu.svg";
import tabIcon from "../../assets/img/icons/tab.svg";

import Icon from "../Icon";
import Menu from ".//Menu";
//

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div className="header-container-outer aic">
      <nav className="header-container">
        <div className="header--brand aic">
          <img src={LogoBrand} alt="daylight protocol brand" />
        </div>
        <div className="header--links">
          <HashLink
            className="header--link hover-effect"
            smooth={true}
            to="#ourvision"
          >
            Our Vision
          </HashLink>
          <HashLink
            className="header--link hover-effect"
            smooth={true}
            to="#products"
          >
            Products
          </HashLink>

          {/* <div className="header--link   header--link-options aic">
            <div className="aic">Products</div>
            <img
              className="header--link-tab aic"
              src={tabIcon}
              alt="icon-alt"
              draggable="false"
            />
            <div className="header--link-options-list aic">
              <div className="header--link-options-list-option-disable ">
                Project Apollo
              </div>
              <div className="header--link-options-list-option-disable ">
                Phoenicis Roulette
              </div>
              <div className="header--link-options-list-option-disable ">
                Casa Daylight
              </div>
              <div className="header--link-options-list-option-disable ">
                Project Orion
              </div>
            </div>
          </div> */}
          <div className="header--link   header--link-options aic">
            <div className="aic">Ecosystem</div>
            <img
              className="header--link-tab aic"
              src={tabIcon}
              alt="icon-alt"
              draggable="false"
            />
            <div className="header--link-options-list aic">
              <HashLink
                smooth={true}
                to="#whydaylight"
                className="header--link hover-effect-c"
              >
                Why Daylight
              </HashLink>
              <HashLink
                smooth={true}
                to="#roadmap"
                className="header--link hover-effect-c"
              >
                Roadmap
              </HashLink>
              <HashLink
                smooth={true}
                to="#tokenomics"
                className="header--link hover-effect-c"
              >
                Tokenomics
              </HashLink>
            </div>
          </div>

          <a
            href="https://daylight-protocol.gitbook.io/litepaper/"
            target={"_blank"}
            rel="noreferrer"
            className="header--link hover-effect"
          >
            Litepaper
          </a>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://www.pinksale.finance/launchpad/0xA179446a193248F3dB5F05E2B5C7Aa8de6885eA0?chain=BSC"
            className="header--link hover-effect"
          >
            PreSale
          </a>
          <HashLink
            className="header--link hover-effect"
            smooth={true}
            to="#partners"
          >
            Partners
          </HashLink>
        </div>

        <div className="header--social">
          <Icon
            imgsrc={mediumIcon}
            link="https://medium.com/@DaylightProtocol"
            classnamestyle="header--social-icon aic hover-effect"
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-offset="-100"
            data-aos-easing="ease-in-out"
          />
          <Icon
            imgsrc={discordIcon}
            link="https://discord.gg/CsRc6AVZbZ"
            classnamestyle="header--social-icon aic hover-effect"
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-offset="-100"
            data-aos-easing="ease-in-out"
          />
          <Icon
            imgsrc={telegramIcon}
            link="https://t.me/DaylightDefi"
            classnamestyle="header--social-icon aic hover-effect"
            data-aos="fade-up"
            data-aos-delay="350"
            data-aos-offset="-100"
            data-aos-easing="ease-in-out"
          />
          <Icon
            imgsrc={twitterIcon}
            link="https://twitter.com/DaylightDeFi"
            classnamestyle="header--social-icon aic hover-effect"
            data-aos="fade-up"
            data-aos-delay="450"
            data-aos-offset="-100"
            data-aos-easing="ease-in-out"
          />
        </div>
        <div className="header--mobile ">
          <button type="button" onClick={() => setIsOpen(() => true)}>
            <Icon
              imgsrc={menuIcon}
              classnamestyle="header--menu-icon hover-effect aic"
            />
          </button>
          <Menu isOpen={isOpen} close={() => setIsOpen(() => false)} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
