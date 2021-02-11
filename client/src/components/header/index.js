import React from "react";
import { AppContainer } from "../../utils/commonStyles";
import {
  HeaderWrapper,
  AppLogoImg,
  AppNameLabel,
  HeaderContainer,
} from "./styles";
import AppLogo from "../../images/beauty.svg";

function Header() {
  return (
    <HeaderWrapper>
      <AppContainer>
        <HeaderContainer>
          <AppLogoImg src={AppLogo} alt="app-logo" />
          <AppNameLabel>
            CSS
            <span style={{ color: "#df6e9a", letterSpacing: "1px" }}>
              &nbsp;to&nbsp;
            </span>
            <span style={{ color: "#8dc7d8", letterSpacing: "1px" }}>
              StyledJS
            </span>
          </AppNameLabel>
        </HeaderContainer>
      </AppContainer>
    </HeaderWrapper>
  );
}

export default Header;
