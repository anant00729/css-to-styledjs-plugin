import React, { useContext } from "react";
import { JSBoxWrapper } from "./styles";
import { AppTextArea } from "../../utils/commonStyles";
import { GlobalContext } from "../../global/GlobalContext";

function JsBoxContent() {
  const { jsCode, onJsCodeAdded } = useContext(GlobalContext);
  return (
    <JSBoxWrapper>
      <AppTextArea
        value={jsCode}
        onChange={(e) => onJsCodeAdded(e.target.value)}
        type="text"
        style={{
          width: "100%",
          boxSizing: "border-box",
          marginTop: 0,
          color: "#017ea2",
        }}
      />
    </JSBoxWrapper>
  );
}

export default JsBoxContent;
