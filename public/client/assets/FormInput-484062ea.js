import{P as r,j as s}from"./index-3c314f58.js";import{d as a}from"./ErrorMessage-9d644fe0.js";/* empty css             */const m=({fieldName:l,type:e,name:o,id:n,rounded:i,message:t,placeHolder:p})=>s.jsxs(s.Fragment,{children:[l&&s.jsx("label",{htmlFor:o,className:"form-label",children:l}),s.jsx("input",{type:e,name:o,id:n,className:`form-input ${i?"round":null}`,placeholder:p}),t&&s.jsxs("small",{style:{color:"#f00",fontSize:"12px"},children:[s.jsx(a,{fontSize:"small"})," ",t]})]});m.propTypes={fieldName:r.string,type:r.string,name:r.string,id:r.string,rounded:r.bool,message:r.string,placeHolder:r.string};export{m as F};
