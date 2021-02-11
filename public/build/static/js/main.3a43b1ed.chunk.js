(this["webpackJsonpcss-to-styledjs"]=this["webpackJsonpcss-to-styledjs"]||[]).push([[0],{21:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var i,r,a,o,d,s,c,l,p,b=t(0),x=t.n(b),u=t(12),h=t.n(u),f=(t(21),t(8)),g=t(2),j=t(3),m=j.b.div(i||(i=Object(g.a)(["\n  /* width: 100%; */\n  height: calc(100vh - 60px);\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n\n  @media (min-width: 768px) {\n    grid-template-columns: repeat(2, 1fr);\n    height: calc(100vh - 76px);\n  }\n"]))),O=j.b.div(r||(r=Object(g.a)(["\n  background-color: #ffe0c1;\n  padding: 8px 8px 8px 8px;\n"]))),v=j.b.div(a||(a=Object(g.a)(["\n  background-color: #8dc7d8;\n  position: relative;\n  padding: 8px 8px 8px 8px;\n"]))),w=j.b.div(o||(o=Object(g.a)(["\n  border: 6px solid #fff;\n  border-radius: 50%;\n  width: 56px;\n  height: 56px;\n  position: absolute;\n  bottom: -40px;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #4b5563;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  /* -webkit-transform: scale(-1, -1);\n  transform: scale(-1, -1); */\n  -webkit-transform: scaleX(-1);\n  transform: scaleX(-1);\n\n  ","\n\n  @media (min-width: 768px) {\n    bottom: unset;\n    left: unset;\n    margin: unset;\n    right: -36px;\n    top: 32px;\n  }\n"])),(function(n){return n.isKicked?Object(j.a)(d||(d=Object(g.a)(["\n        @media (min-width: 768px) {\n            bottom: unset;\n            left: unset;\n            margin: unset;\n            right: -36px;\n            top: 32px;\n        }\n          animation: wobble 2s 1, pulse 2s 1;\n          @keyframes wobble {\n            25% {\n              transform: rotate(15deg);\n            }\n            50% {\n              transform: rotate(-90deg);\n            }\n            75% {\n              transform: rotate(60deg);\n            }\n            100% {\n              transform: rotate(0deg);\n            }\n          }\n\n          @keyframes pulse {\n            0% {\n                background-color: #4b5563;\n            }\n            100% {\n                background-color: #34d399;\n            }\n        "]))):""})),y=j.b.img(s||(s=Object(g.a)(["\n  width: 56px;\n  height: 56px;\n  transform: rotate(180deg);\n"]))),C=t.p+"static/media/body-wrap.24b83ca8.svg",k=j.b.div(c||(c=Object(g.a)(["\n  width: 100%;\n  height: 100%;\n  /* width: 100%; */\n  background-color: #fff;\n  border-radius: 4px;\n\n  /* @media (min-width: 768px) {\n    width: 700px;\n  }\n  @media (min-width: 1200px) {\n    width: 1050px;\n  } */\n"]))),S=j.b.div(l||(l=Object(g.a)(["\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0 auto;\n\n  @media (min-width: 768px) {\n    width: 700px;\n  }\n  @media (min-width: 1200px) {\n    width: 1050px;\n  }\n"]))),A=j.b.textarea(p||(p=Object(g.a)(["\n  height: 100%;\n  padding: 10px 16px;\n  background: #f3f4f6;\n  border: 0 solid transparent;\n  border-radius: 4px;\n  font-size: 16px;\n  outline-color: transparent;\n  font-weight: 600;\n  /* color: rgb(55, 65, 81); */\n  margin-top: 14px;\n  &:focus {\n    outline-width: 0;\n  }\n"]))),_=t(16),E=t(4),z="SET_ALERT",D="REMOVE_ALERT",T="ON_CSS_CODE_ADDED",R="ON_JS_CODE_ADDED",J="CONVERT_CLICK",F=function(n){var e=(n='import styled from "styled-components";\n\n'+n).replace(/@media[^{]+\{([\s\S]+?})\s*}/gm,"");return e=(e=e.replace(/^\.[a-zA-Z0-9_ -]*{/gm,L)).replace(/\}/gm,"`;")},L=function(n,e){var t="ERROR";return n.length&&"."===n.charAt(0)&&(n.includes(".")&&(n=n.replace(".","")),n.includes("{")&&(n=n.replace("{","")),t=(n=n.trim()).charAt(0).toUpperCase()+n.slice(1),t=V(t)),"export const ".concat(t," = styled.div`")},V=function(n){return n.replace(/([-_][a-z])/g,(function(n){return n.toUpperCase().replace("-","").replace("_","").replace("__","")}))},B=function(n,e){var t;switch(e.type){case J:return Object(E.a)(Object(E.a)({},n),{},{jsCode:F(n.cssCode)});case R:return Object(E.a)(Object(E.a)({},n),{},{jsCode:e.payload});case T:return Object(E.a)(Object(E.a)({},n),{},{cssCode:e.payload});case z:return Object(E.a)(Object(E.a)({},n),{},{alerts:[].concat(Object(_.a)(n.alerts),[null===e||void 0===e?void 0:e.payload])});case D:return Object(E.a)(Object(E.a)({},n),{},{alerts:null===n||void 0===n||null===(t=n.alerts)||void 0===t?void 0:t.filter((function(n){return n.id!==(null===e||void 0===e?void 0:e.payload)}))});default:return n}},I=t(27),K=t(1),N={alerts:[],cssCode:'\n.main {\n  border: 10px solid violet;\n  display: grid;\n  min-height: 100vh;\n  gap: 12px;\n  grid-template-areas: \n    "header"\n    "nav"\n    "sidebar"\n    "main-body"\n    "ads"\n    ;\n}\n\n.header {\n  border: 10px solid brown;\n  grid-area: header;\n  padding: 8px;\n}\n\n.nav {\n  border: 10px solid purple;\n  padding: 8px;\n  grid-area: nav;\n}\n\n.sidebar {\n  border: 10px solid blue;\n  padding: 8px;\n  grid-area: sidebar;\n  align-self: start;\n  overflow-y: auto;\n  max-height: calc(100vh);\n  position: sticky;\n  top: 0;\n  left: 0;\n  align-self: start;\n}\n\n.ads {\n  border: 10px solid teal;\n  padding: 8px;\n  grid-area: ads;\n}\n\n.footer {\n  border: 10px solid gray;\n  padding: 8px;\n  grid-area: footer;\n  display: none;\n}\n\n.main-body {\n  border: 10px solid orange;\n  padding: 8px;\n  grid-area: main-body;\n  display: grid;\n  grid-template-columns: repeat(6, auto);\n  overflow-y: auto;\n}\n\n.one{\n  border: 10px solid brown;\n  align-self: start;\n}\n',jsCode:""},P=Object(b.createContext)(N),X=function(n){var e=n.children,t=Object(b.useReducer)(B,N),i=Object(f.a)(t,2),r=i[0],a=i[1];return Object(K.jsx)(P.Provider,{value:{alerts:r.alerts,cssCode:r.cssCode,jsCode:r.jsCode,setAlert:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2500;if(n){var t=Object(I.a)();a({type:z,payload:{msg:n,id:t}}),setTimeout((function(){return a({type:D,payload:t})}),e)}},onCssCodeAdded:function(n){a({type:T,payload:n})},onJsCodeAdded:function(n){a({type:R,payload:n})},onConvertClick:function(){a({type:J})}},children:e})};var M,U=function(){var n=Object(b.useContext)(P),e=n.onCssCodeAdded,t=n.cssCode;return Object(K.jsx)(k,{children:Object(K.jsx)(A,{value:t,onChange:function(n){return e(n.target.value)},type:"text",style:{width:"100%",boxSizing:"border-box",marginTop:0,color:"#92400E"}})})},H=j.b.div(M||(M=Object(g.a)(["\n  width: 100%;\n  /* width: 100%; */\n  background-color: #fff;\n  height: 100%;\n  border-radius: 4px;\n\n  /* @media (min-width: 768px) {\n    width: 700px;\n  }\n  @media (min-width: 1200px) {\n    width: 1050px;\n  } */\n"])));var W=function(){var n=Object(b.useContext)(P),e=n.jsCode,t=n.onJsCodeAdded;return Object(K.jsx)(H,{children:Object(K.jsx)(A,{value:e,onChange:function(n){return t(n.target.value)},type:"text",style:{width:"100%",boxSizing:"border-box",marginTop:0,color:"#017ea2"}})})};var Z,q,G,Q,Y=function(){var n=Object(b.useState)(!1),e=Object(f.a)(n,2),t=e[0],i=e[1],r=Object(b.useContext)(P).onConvertClick,a=function(){r(),i(!0),setTimeout((function(){i(!1)}),2e3)};return Object(K.jsxs)(m,{children:[Object(K.jsxs)(v,{children:[Object(K.jsx)(U,{}),Object(K.jsx)(w,{isKicked:t,onClick:a,children:Object(K.jsx)(y,{alt:"convert-img",src:C})})]}),Object(K.jsx)(O,{children:Object(K.jsx)(W,{})})]})},$=j.b.div(Z||(Z=Object(g.a)(["\n  /* width: 100%; */\n  background-color: #f3f4f6;\n\n  /* @media (min-width: 768px) {\n    width: 700px;\n  }\n  @media (min-width: 1200px) {\n    width: 1050px;\n  } */\n  border-bottom: rgba(209, 213, 219, 1);\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05);\n"]))),nn=j.b.div(q||(q=Object(g.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px;\n  /* @media (min-width: 768px) {\n    justify-content: flex-start;\n  } */\n"]))),en=j.b.img(G||(G=Object(g.a)(["\n  width: 40px;\n  width: 40px;\n  border: 2px solid #f3f4f6;\n  border-radius: 50%;\n  padding: 4px;\n  @media (min-width: 768px) {\n    width: 48px;\n    height: 48px;\n  }\n"]))),tn=j.b.label(Q||(Q=Object(g.a)(['\n  /* font-family: "Abril Fatface", cursive; */\n  /* font-family: "Satisfy", cursive; */\n  font-family: "Alfa Slab One", cursive;\n  font-size: 24px;\n  color: #e8c096;\n  -webkit-text-stroke-width: 0.2px;\n  letter-spacing: 1px;\n  -webkit-text-stroke-color: black;\n  text-shadow: 2px 2px #374151;\n  cursor: pointer;\n  transition: text-shadow 0.1s;\n\n  &:hover {\n    text-shadow: 3px 3px #374151;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 32px;\n  }\n']))),rn=t.p+"static/media/beauty.de5608ee.svg";var an,on,dn,sn,cn,ln,pn=function(){return Object(K.jsx)($,{children:Object(K.jsx)(S,{children:Object(K.jsxs)(nn,{children:[Object(K.jsx)(en,{src:rn,alt:"app-logo"}),Object(K.jsxs)(tn,{children:["CSS",Object(K.jsx)("span",{style:{color:"#df6e9a",letterSpacing:"1px"},children:"\xa0to\xa0"}),Object(K.jsx)("span",{style:{color:"#8dc7d8",letterSpacing:"1px"},children:"StyledJS"})]})]})})})},bn=j.b.div(an||(an=Object(g.a)(["\n  /* Hidden by default. Visible on click */\n  min-width: 290px;\n  /* Set a default minimum width */\n  /* margin: 0 auto; */\n  /* Divide value of min-width by 2 */\n  background-color: transparent; /* Black background color */\n\n  text-align: center; /* Centered text */\n  border-radius: 1rem; /* Rounded borders */\n  position: fixed; /* Sit on top of the screen */\n  z-index: 1; /* Add a z-index if needed */\n  left: 50%; /* Center the snackbar */\n  transform: translateX(-50%);\n  bottom: 30px; /* 30px from the bottom */\n  ","\n"])),(function(n){return n.isVisible?Object(j.a)(on||(on=Object(g.a)(["\n          visibility: visible; /* Show the snackbar */\n          -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n          animation: fadein 0.5s, fadeout 0.5s 2.5s;\n        "]))):Object(j.a)(dn||(dn=Object(g.a)(["\n          visibility: hidden;\n        "])))})),xn=j.b.div(sn||(sn=Object(g.a)(["\n  width: 100%;\n  background-color: #f3f4f6;\n  border: 4px solid #6b7280;\n  border-radius: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 8px;\n"]))),un=j.b.label(cn||(cn=Object(g.a)(["\n  font-size: 18px;\n  margin-left: 12px;\n  font-weight: 600;\n  color: #4b5563; /* White text color */\n"]))),hn=j.b.img(ln||(ln=Object(g.a)(["\n  width: 48px;\n  height: 48px;\n  margin-left: 12px;\n  @media (min-width: 768px) {\n    margin-left: unset;\n  }\n"]))),fn=t.p+"static/media/bamboo.b000660f.svg";function gn(){var n,e=Object(b.useContext)(P).alerts;return e.length>0?(n=e[e.length-1],Object(K.jsx)(bn,{isVisible:!!(null===n||void 0===n?void 0:n.id),id:"snackbar",children:Object(K.jsxs)(xn,{children:[Object(K.jsx)(hn,{src:fn,alt:"alert-img"}),Object(K.jsx)(un,{children:n.msg})]})})):null}var jn=function(){return Object(K.jsxs)(X,{children:[Object(K.jsx)(pn,{}),Object(K.jsx)(Y,{}),Object(K.jsx)(gn,{})]})},mn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,28)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),i(n),r(n),a(n),o(n)}))};h.a.render(Object(K.jsx)(x.a.StrictMode,{children:Object(K.jsx)(jn,{})}),document.getElementById("root")),mn()}},[[25,1,2]]]);
//# sourceMappingURL=main.3a43b1ed.chunk.js.map