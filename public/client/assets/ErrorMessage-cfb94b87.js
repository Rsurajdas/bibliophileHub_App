import{j as e,P as s}from"./index-a7bd720d.js";import{r as c,i as p}from"./Form-c12da64c.js";var t={},u=p;Object.defineProperty(t,"__esModule",{value:!0});var a=t.default=void 0,x=u(c()),f=e,g=(0,x.default)((0,f.jsx)("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"InfoOutlined");a=t.default=g;const h=({fieldName:r,type:i,name:l,id:o,rounded:d,message:n,placeHolder:m})=>e.jsxs(e.Fragment,{children:[r&&e.jsx("label",{htmlFor:l,className:"form-label",children:r}),e.jsx("input",{type:i,name:l,id:o,className:`form-input ${d?"round":null}`,placeholder:m}),n&&e.jsxs("small",{style:{color:"#707070",fontSize:"12px"},children:[e.jsx(a,{fontSize:"small"})," ",n]})]});h.propTypes={fieldName:s.string,type:s.string,name:s.string,id:s.string,rounded:s.bool,message:s.string,placeHolder:s.string};const j=({message:r})=>e.jsxs("div",{className:"message mb-3",children:[e.jsx("div",{className:"message-icon",children:e.jsx(a,{})}),e.jsxs("div",{className:"message-detail text-left",children:[e.jsx("h4",{style:{fontSize:"17px",lineHeight:"1.255",color:"#1e1915",margin:0},children:"There was a problem"}),e.jsx("div",{className:"message-content",children:r})]})]});j.propTypes={message:s.string};export{j as E,h as F};
