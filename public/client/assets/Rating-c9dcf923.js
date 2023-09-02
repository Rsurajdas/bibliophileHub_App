import{W as be,Y as xe,a5 as Fe,x as oe,j as i,s as Re,p as Ve,t as D,v as te,_ as l,a6 as Ce,r as w,w as Se,l as ie,n as W,o as Ae}from"./index-a7bd720d.js";import{b as se,u as Me,g as we,a as Ee}from"./useIsFocusVisible-e1f2172a.js";function Qe(e){const n=e.documentElement.clientWidth;return Math.abs(window.innerWidth-n)}const He={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},Le=He;function je(){const e=be(Fe);return e[xe]||e}const ze=oe(i.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),Ie=oe(i.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function Te(e){return Ve("MuiRating",e)}const $e=Re("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),T=$e,Oe=["value"],Ne=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function Pe(e,n,t){return e<n?n:e>t?t:e}function Be(e){const n=e.toString().split(".")[1];return n?n.length:0}function J(e,n){if(e==null)return e;const t=Math.round(e/n)*n;return Number(t.toFixed(Be(n)))}const ke=e=>{const{classes:n,size:t,readOnly:m,disabled:E,emptyValueFocused:b,focusVisible:v}=e,x={root:["root",`size${te(t)}`,E&&"disabled",v&&"focusVisible",m&&"readOnly"],label:["label","pristine"],labelEmptyValue:[b&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return Ae(x,Te,n)},_e=D("span",{name:"MuiRating",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[{[`& .${T.visuallyHidden}`]:n.visuallyHidden},n.root,n[`size${te(t.size)}`],t.readOnly&&n.readOnly]}})(({theme:e,ownerState:n})=>l({display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent",[`&.${T.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${T.focusVisible} .${T.iconActive}`]:{outline:"1px solid #999"},[`& .${T.visuallyHidden}`]:Le},n.size==="small"&&{fontSize:e.typography.pxToRem(18)},n.size==="large"&&{fontSize:e.typography.pxToRem(30)},n.readOnly&&{pointerEvents:"none"})),ae=D("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:e},n)=>[n.label,e.emptyValueFocused&&n.labelEmptyValueActive]})(({ownerState:e})=>l({cursor:"inherit"},e.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})),We=D("span",{name:"MuiRating",slot:"Icon",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.icon,t.iconEmpty&&n.iconEmpty,t.iconFilled&&n.iconFilled,t.iconHover&&n.iconHover,t.iconFocus&&n.iconFocus,t.iconActive&&n.iconActive]}})(({theme:e,ownerState:n})=>l({display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none"},n.iconActive&&{transform:"scale(1.2)"},n.iconEmpty&&{color:(e.vars||e).palette.action.disabled})),De=D("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:e=>Ce(e)&&e!=="iconActive",overridesResolver:(e,n)=>{const{iconActive:t}=e;return[n.decimal,t&&n.iconActive]}})(({iconActive:e})=>l({position:"relative"},e&&{transform:"scale(1.2)"}));function Ue(e){const n=ie(e,Oe);return i.jsx("span",l({},n))}function ne(e){const{classes:n,disabled:t,emptyIcon:m,focus:E,getLabelText:b,highlightSelectedOnly:v,hover:x,icon:$,IconContainerComponent:H,isActive:O,itemValue:c,labelProps:L,name:f,onBlur:U,onChange:F,onClick:R,onFocus:N,readOnly:P,ownerState:a,ratingValue:u,ratingValueRounded:X}=e,V=v?c===u:c<=u,B=c<=x,C=c<=E,Y=c===X,j=se(),g=i.jsx(We,{as:H,value:c,className:W(n.icon,V?n.iconFilled:n.iconEmpty,B&&n.iconHover,C&&n.iconFocus,O&&n.iconActive),ownerState:l({},a,{iconEmpty:!V,iconFilled:V,iconHover:B,iconFocus:C,iconActive:O}),children:m&&!V?m:$});return P?i.jsx("span",l({},L,{children:g})):i.jsxs(w.Fragment,{children:[i.jsxs(ae,l({ownerState:l({},a,{emptyValueFocused:void 0}),htmlFor:j},L,{children:[g,i.jsx("span",{className:n.visuallyHidden,children:b(c)})]})),i.jsx("input",{className:n.visuallyHidden,onFocus:N,onBlur:U,onChange:F,onClick:R,disabled:t,value:c,id:j,type:"radio",name:f,checked:Y})]})}const Xe=i.jsx(ze,{fontSize:"inherit"}),Ye=i.jsx(Ie,{fontSize:"inherit"});function qe(e){return`${e} Star${e!==1?"s":""}`}const Ge=w.forwardRef(function(n,t){const m=Se({name:"MuiRating",props:n}),{className:E,defaultValue:b=null,disabled:v=!1,emptyIcon:x=Ye,emptyLabelText:$="Empty",getLabelText:H=qe,highlightSelectedOnly:O=!1,icon:c=Xe,IconContainerComponent:L=Ue,max:f=5,name:U,onChange:F,onChangeActive:R,onMouseLeave:N,onMouseMove:P,precision:a=1,readOnly:u=!1,size:X="medium",value:V}=m,B=ie(m,Ne),C=se(U),[Y,j]=Me({controlled:V,default:b,name:"Rating"}),g=J(Y,a),le=je(),[{hover:d,focus:k},z]=w.useState({hover:-1,focus:-1});let S=g;d!==-1&&(S=d),k!==-1&&(S=k);const{isFocusVisibleRef:K,onBlur:ce,onFocus:re,ref:ue}=we(),[de,q]=w.useState(!1),Q=w.useRef(),pe=Ee(ue,Q,t),me=o=>{P&&P(o);const s=Q.current,{right:r,left:_}=s.getBoundingClientRect(),{width:A}=s.firstChild.getBoundingClientRect();let M;le.direction==="rtl"?M=(r-o.clientX)/(A*f):M=(o.clientX-_)/(A*f);let p=J(f*M+a/2,a);p=Pe(p,a,f),z(y=>y.hover===p&&y.focus===p?y:{hover:p,focus:p}),q(!1),R&&d!==p&&R(o,p)},fe=o=>{N&&N(o);const s=-1;z({hover:s,focus:s}),R&&d!==s&&R(o,s)},Z=o=>{let s=o.target.value===""?null:parseFloat(o.target.value);d!==-1&&(s=d),j(s),F&&F(o,s)},he=o=>{o.clientX===0&&o.clientY===0||(z({hover:-1,focus:-1}),j(null),F&&parseFloat(o.target.value)===g&&F(o,null))},ve=o=>{re(o),K.current===!0&&q(!0);const s=parseFloat(o.target.value);z(r=>({hover:r.hover,focus:s}))},ge=o=>{if(d!==-1)return;ce(o),K.current===!1&&q(!1);const s=-1;z(r=>({hover:r.hover,focus:s}))},[ye,ee]=w.useState(!1),I=l({},m,{defaultValue:b,disabled:v,emptyIcon:x,emptyLabelText:$,emptyValueFocused:ye,focusVisible:de,getLabelText:H,icon:c,IconContainerComponent:L,max:f,precision:a,readOnly:u,size:X}),h=ke(I);return i.jsxs(_e,l({ref:pe,onMouseMove:me,onMouseLeave:fe,className:W(h.root,E,u&&"MuiRating-readOnly"),ownerState:I,role:u?"img":null,"aria-label":u?H(S):null},B,{children:[Array.from(new Array(f)).map((o,s)=>{const r=s+1,_={classes:h,disabled:v,emptyIcon:x,focus:k,getLabelText:H,highlightSelectedOnly:O,hover:d,icon:c,IconContainerComponent:L,name:C,onBlur:ge,onChange:Z,onClick:he,onFocus:ve,ratingValue:S,ratingValueRounded:g,readOnly:u,ownerState:I},A=r===Math.ceil(S)&&(d!==-1||k!==-1);if(a<1){const M=Array.from(new Array(1/a));return i.jsx(De,{className:W(h.decimal,A&&h.iconActive),ownerState:I,iconActive:A,children:M.map((p,y)=>{const G=J(r-1+(y+1)*a,a);return i.jsx(ne,l({},_,{isActive:!1,itemValue:G,labelProps:{style:M.length-1===y?{}:{width:G===S?`${(y+1)*a*100}%`:"0%",overflow:"hidden",position:"absolute"}}}),G)})},r)}return i.jsx(ne,l({},_,{isActive:A,itemValue:r}),r)}),!u&&!v&&i.jsxs(ae,{className:W(h.label,h.labelEmptyValue),ownerState:I,children:[i.jsx("input",{className:h.visuallyHidden,value:"",id:`${C}-empty`,type:"radio",name:C,checked:g==null,onFocus:()=>ee(!0),onBlur:()=>ee(!1),onChange:Z}),i.jsx("span",{className:h.visuallyHidden,children:$})]})]}))}),Ze=Ge;export{Ze as R,Qe as g,je as u};