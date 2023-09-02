import{s as Z,p as ee,t as Q,_ as y,T as te,U as G,r as d,w as se,l as re,j as t,n as D,o as oe,u as ne,a as ae,g as ie,C as le,L as C}from"./index-a7bd720d.js";import{P as ce,C as de}from"./CurrentlyReading-dbb3958f.js";import{T as P}from"./Title-1758a322.js";import{R as H,C as _}from"./Row-a305f01f.js";import"./Post-011d59cf.js";import"./Rating-c9dcf923.js";import"./useIsFocusVisible-e1f2172a.js";import"./Typography-ae9765a8.js";import"./Button-0c7a912b.js";import"./axios-4a70c6fc.js";import"./react-toastify.esm-96ce24d9.js";/* empty css             *//* empty css                      */import"./debounce-517eeb3c.js";var s={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V=Symbol.for("react.element"),O=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),me=Symbol.for("react.server_context"),U=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),X;X=Symbol.for("react.module.reference");function c(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case V:switch(e=e.type,e){case L:case E:case M:case k:case T:return e;default:switch(e=e&&e.$$typeof,e){case me:case z:case U:case F:case W:case R:return e;default:return n}}case O:return n}}}s.ContextConsumer=z;s.ContextProvider=R;s.Element=V;s.ForwardRef=U;s.Fragment=L;s.Lazy=F;s.Memo=W;s.Portal=O;s.Profiler=E;s.StrictMode=M;s.Suspense=k;s.SuspenseList=T;s.isAsyncMode=function(){return!1};s.isConcurrentMode=function(){return!1};s.isContextConsumer=function(e){return c(e)===z};s.isContextProvider=function(e){return c(e)===R};s.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===V};s.isForwardRef=function(e){return c(e)===U};s.isFragment=function(e){return c(e)===L};s.isLazy=function(e){return c(e)===F};s.isMemo=function(e){return c(e)===W};s.isPortal=function(e){return c(e)===O};s.isProfiler=function(e){return c(e)===E};s.isStrictMode=function(e){return c(e)===M};s.isSuspense=function(e){return c(e)===k};s.isSuspenseList=function(e){return c(e)===T};s.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===L||e===E||e===M||e===k||e===T||e===ue||typeof e=="object"&&e!==null&&(e.$$typeof===F||e.$$typeof===W||e.$$typeof===R||e.$$typeof===z||e.$$typeof===U||e.$$typeof===X||e.getModuleId!==void 0)};s.typeOf=c;function pe(e){return ee("MuiAvatarGroup",e)}const fe=Z("MuiAvatarGroup",["root","avatar"]),he=fe,xe=["children","className","component","componentsProps","max","slotProps","spacing","total","variant"],J={small:-16,medium:null},ve=e=>{const{classes:n}=e;return oe({root:["root"],avatar:["avatar"]},pe,n)},ge=Q("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(e,n)=>y({[`& .${he.avatar}`]:n.avatar},n.root)})(({theme:e})=>({[`& .${te.root}`]:{border:`2px solid ${(e.vars||e).palette.background.default}`,boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"})),ye=Q(G,{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:(e,n)=>n.avatar})(({theme:e})=>({border:`2px solid ${(e.vars||e).palette.background.default}`,boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}})),je=d.forwardRef(function(n,j){var f;const b=se({props:n,name:"MuiAvatarGroup"}),{children:q,className:$,component:o="div",componentsProps:I={},max:a=5,slotProps:A={},spacing:u="medium",total:B,variant:S="circular"}=b,N=re(b,xe);let m=a<2?2:a;const h=y({},b,{max:a,spacing:u,component:o,variant:S}),x=ve(h),v=d.Children.toArray(q).filter(l=>d.isValidElement(l)),p=B||v.length;p===m&&(m+=1),m=Math.min(p+1,m);const g=Math.min(v.length,m-1),w=Math.max(p-m,p-g,0),r=u&&J[u]!==void 0?J[u]:-u,i=(f=A.additionalAvatar)!=null?f:I.additionalAvatar;return t.jsxs(ge,y({as:o,ownerState:h,className:D(x.root,$),ref:j},N,{children:[w?t.jsxs(ye,y({ownerState:h,variant:S},i,{className:D(x.avatar,i==null?void 0:i.className),style:y({marginLeft:r},i==null?void 0:i.style),children:["+",w]})):null,v.slice(0,g).reverse().map((l,Y)=>d.cloneElement(l,{className:D(l.props.className,x.avatar),style:y({marginLeft:Y===g-1?void 0:r},l.props.style),variant:l.props.variant||S}))]}))}),K=je,ze=()=>{var N,m,h,x,v,p,g,w;const[e,n]=d.useState([]),[j,f]=d.useState(!0),[b,q]=d.useState([]),$=ne("token"),[o,I]=d.useState({});let{profileId:a}=ae();const A=ie(),u=async r=>{try{const l=await(await fetch(`http://127.0.0.1:3000/api/v1/users/get-user/${r}`,{method:"GET",headers:{Authorization:`Bearer ${$}`}})).json();f(!1),I(l.data.user)}catch(i){console.error(i.message)}},B=async r=>{try{const l=await(await fetch(`http://127.0.0.1:3000/api/v1/posts/get-posts/${r}`,{method:"GET",headers:{Authorization:`Bearer ${$}`}})).json();f(!1),n(l.data.posts)}catch(i){console.error(i.message)}},S=async r=>{const l=await(await fetch(`http://127.0.0.1:3000/api/v1/shelf/get-currently-reading/books/${r}`,{method:"GET",headers:{Authorization:`Bearer ${$}`}})).json();f(!1),q(l.data.books)};return d.useEffect(()=>{S(a)},[a]),d.useEffect(()=>{B(a)},[a]),d.useEffect(()=>{u(a)},[a]),t.jsx("main",{children:t.jsx("section",{className:"py-4 mb-2",children:t.jsx(le,{children:t.jsxs(H,{children:[t.jsx(_,{md:8,className:"px-5",children:t.jsx("div",{className:"profile-details",children:t.jsxs(H,{children:[t.jsx(_,{md:3,children:t.jsx(G,{sizes:"large",alt:o.name,src:`http://127.0.0.1:3000${o.photo}`,sx:{width:"150px",height:"150px",margin:"0 auto"}})}),t.jsxs(_,{md:9,children:[t.jsxs("div",{className:"profile-details_content",children:[t.jsx("h5",{className:"border-bottom pb-1",children:o.name}),t.jsxs("div",{style:{fontSize:"14px"},children:[t.jsxs("div",{className:"",children:[t.jsx("span",{style:{fontWeight:700},children:"Email:"})," ",o.email]}),t.jsxs("div",{className:"",children:[t.jsx("span",{style:{fontWeight:700},children:"Friends:"})," ",t.jsxs(C,{to:`/friends/${o._id}`,children:[(N=o.friends)==null?void 0:N.length," friends"]})]}),t.jsxs("div",{className:"",children:[t.jsx("span",{style:{fontWeight:700},children:"Followers:"})," ",t.jsxs(C,{to:`/followers/${a}`,children:[(m=o.followers)==null?void 0:m.length," followers"]})]}),t.jsxs("div",{className:"",children:[t.jsx("span",{style:{fontWeight:700},children:"Following:"})," ",t.jsxs(C,{to:`/following/${o._id}`,children:[(h=o.following)==null?void 0:h.length," following"]})]})]})]}),t.jsxs("div",{className:"user-posts mt-5",children:[t.jsx(P,{element:t.jsxs("h5",{className:"border-bottom pb-2 mb-4",children:["User","'","s Post"]})}),!j&&e&&e.map(r=>t.jsx(ce,{post:r},r._id))]})]})]})})}),t.jsxs(_,{md:4,children:[t.jsxs("div",{className:"user-following mt-4",children:[t.jsx(P,{element:t.jsxs("h6",{className:"border-bottom pb-2 mb-2",style:{fontWeight:700,fontSize:"14px"},children:[o.name," is following"]})}),t.jsx(K,{max:4,total:(x=o.following)==null?void 0:x.length,sx:{justifyContent:"flex-end"},children:(v=o.following)==null?void 0:v.map(r=>t.jsx(G,{alt:r.name,src:`http://127.0.0.1:3000${r.photo}`},r._id))})]}),((p=o.request_pending)==null?void 0:p.length)>0&&A===a?t.jsxs("div",{className:"user-following mt-4",children:[t.jsx(P,{element:t.jsxs("div",{className:"d-flex align-items-center border-bottom pb-2 mb-2 justify-content-between",children:[t.jsx("h6",{style:{fontWeight:700,fontSize:"14px",margin:0},children:"Pending request"}),t.jsx(C,{to:`/request-pending/${a}`,children:"more..."})]})}),t.jsx(K,{max:4,total:(g=o.request_pending)==null?void 0:g.length,sx:{justifyContent:"flex-end"},children:(w=o.request_pending)==null?void 0:w.map(r=>t.jsx(G,{alt:r.name,src:`http://127.0.0.1:3000${r.photo}`},r._id))})]}):null,t.jsxs("div",{className:"currently-reading mt-4",children:[t.jsx(P,{element:t.jsxs("h6",{className:"border-bottom pb-2 mb-2",style:{fontWeight:700,fontSize:"14px"},children:[o.name," currently reading"]})}),t.jsx("div",{className:"mt-3",children:!j&&b.map(r=>t.jsx(de,{book:r,currentUser:A===a},r.book._id))})]})]})]})})})})};export{ze as default};
