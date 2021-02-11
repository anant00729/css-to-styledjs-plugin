import {
  SET_ALERT,
  REMOVE_ALERT,
  ON_CSS_CODE_ADDED,
  CONVERT_CLICK,
  ON_JS_CODE_ADDED,
} from "./types";

const appReducer = (state, action) => {
  switch (action.type) {
    case CONVERT_CLICK:
      return {
        ...state,
        jsCode: covertCssToJs(state.cssCode),
      };
    case ON_JS_CODE_ADDED:
      return {
        ...state,
        jsCode: action.payload,
      };
    case ON_CSS_CODE_ADDED:
      return {
        ...state,
        cssCode: action.payload,
      };
    case SET_ALERT:
      return {
        ...state,
        alerts: [...state.alerts, action?.payload],
      };
    case REMOVE_ALERT:
      return {
        ...state,
        alerts: state?.alerts?.filter((alert) => alert.id !== action?.payload),
      };
    default:
      return state;
  }
};

const covertCssToJs = (data) => {
  //   const copyData = data.slice();
  const allImports = `import styled from "styled-components";\n\n`;

  const removeDevname = /\/\*\sDeveloped by Anant S Awasthy\s\*\//;
  const classConverterPattern = /^\.[a-zA-Z0-9_ -]*{/gm;
  const closeCurlyConverterPattern = /\}/gm;
  const mediaTrackingPattern = /@media[^{]+\{([\s\S]+?})\s*}/gm;
  data = allImports + data;
  let jsClass = data.replace(mediaTrackingPattern, "");
  jsClass = jsClass.replace(classConverterPattern, replacer);
  jsClass = jsClass.replace(closeCurlyConverterPattern, "`;");
  jsClass = jsClass.replace(removeDevname, "");
  return jsClass;
};

const replacer = (match, _) => {
  let className = "ERROR";

  if (!!match.length && match.charAt(0) === ".") {
    if (match.includes(".")) {
      match = match.replace(".", "");
    }
    if (match.includes("{")) {
      match = match.replace("{", "");
    }
    match = match.trim();
    className = match.charAt(0).toUpperCase() + match.slice(1);
    className = snakeToCamel(className);
  }

  return `export const ${className} = styled.div\``;
};

const snakeToCamel = (str) =>
  str.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace("-", "").replace("_", "").replace("__", "")
  );

export default appReducer;
