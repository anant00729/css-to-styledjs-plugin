import React, { useState, useContext } from "react";
import { CssBoxWrapper } from "./styles";
import { AppTextArea } from "../../utils/commonStyles";
import { GlobalContext } from "../../global/GlobalContext";

function CSSBoxContent() {
  const { onCssCodeAdded, cssCode } = useContext(GlobalContext);
  return (
    <CssBoxWrapper>
      <AppTextArea
        value={cssCode}
        onChange={(e) => onCssCodeAdded(e.target.value)}
        type="text"
        style={{
          width: "100%",
          boxSizing: "border-box",
          marginTop: 0,
          color: "#92400E",
        }}
      />
    </CssBoxWrapper>
  );
}

export default CSSBoxContent;
