export const SET_ALERT = "SET_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";
export const ON_CSS_CODE_ADDED = "ON_CSS_CODE_ADDED";
export const ON_JS_CODE_ADDED = "ON_JS_CODE_ADDED";
export const CONVERT_CLICK = "CONVERT_CLICK";
export const SAMPLE_CSS = `
.main {
  border: 10px solid violet;
  display: grid;
  min-height: 100vh;
  gap: 12px;
  grid-template-areas: 
    "header"
    "nav"
    "sidebar"
    "main-body"
    "ads"
    ;
}

.header {
  border: 10px solid brown;
  grid-area: header;
  padding: 8px;
}

.nav {
  border: 10px solid purple;
  padding: 8px;
  grid-area: nav;
}

.sidebar {
  border: 10px solid blue;
  padding: 8px;
  grid-area: sidebar;
  align-self: start;
  overflow-y: auto;
  max-height: calc(100vh);
  position: sticky;
  top: 0;
  left: 0;
  align-self: start;
}

.ads {
  border: 10px solid teal;
  padding: 8px;
  grid-area: ads;
}

.footer {
  border: 10px solid gray;
  padding: 8px;
  grid-area: footer;
  display: none;
}

.main-body {
  border: 10px solid orange;
  padding: 8px;
  grid-area: main-body;
  display: grid;
  grid-template-columns: repeat(6, auto);
  overflow-y: auto;
}

.one{
  border: 10px solid brown;
  align-self: start;
}
`;
