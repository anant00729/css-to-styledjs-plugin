import React, { useState, useContext } from "react";
import {
  HomeWrapper,
  CssBox,
  JSBox,
  ConvertButton,
  ConvertButtonImg,
} from "./styles";
import ConvertImg from "../../images/body-wrap.svg";
import CSSBoxContent from "../../components/cssbox-content";
import JsBoxContent from "../../components/jsbox-content";
import { GlobalContext } from "../../global/GlobalContext";

function Home() {
  const [isKicked, setKicked] = useState(false);
  const { onConvertClick } = useContext(GlobalContext);

  const onConvert = () => {
    onConvertClick();
    // setAlert("Something went wrong, Please try again!");
    setKicked(true);
    setTimeout(() => {
      setKicked(false);
    }, 2000);
  };

  const displayConvertButton = () => {
    return (
      <ConvertButton isKicked={isKicked} onClick={onConvert}>
        <ConvertButtonImg alt="convert-img" src={ConvertImg}></ConvertButtonImg>
      </ConvertButton>
    );
  };

  return (
    <HomeWrapper>
      <CssBox>
        <CSSBoxContent />
        {displayConvertButton()}
      </CssBox>
      <JSBox>
        <JsBoxContent />
      </JSBox>
    </HomeWrapper>
  );
}

export default Home;
