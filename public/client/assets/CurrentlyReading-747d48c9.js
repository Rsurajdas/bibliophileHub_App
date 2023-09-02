import{W as Ve,Q as Ye,r as i,X as Qe,n as H,j as t,_ as P,o as J,Y as Ze,Z as Je,D as et,q as ze,t as De,v as W,w as z,x as Oe,p as Ie,$ as tt,a0 as rt,P as Z,u as Me,g as ot,a1 as nt,a2 as st,L as X,V as oe}from"./index-7143f6c6.js";import{T as at,r as it,g as je,M as lt,P as ct,u as ke,i as dt,a as ut}from"./Post-b1e90a2d.js";import{B as O}from"./Button-929226ff.js";import{a as ie}from"./axios-4a70c6fc.js";import{u as Ae,R as pt}from"./Rating-2371d0dd.js";import{k as mt,Q}from"./react-toastify.esm-25a86fe4.js";/* empty css             *//* empty css                      */import{e as ft,k as de,c as ue,T as ht}from"./Typography-e43b7cfe.js";import{a as Ue,o as Ce,d as $e}from"./useIsFocusVisible-778bb752.js";import{d as gt}from"./debounce-517eeb3c.js";const xt=["className","component"];function vt(e={}){const{themeId:r,defaultTheme:o,defaultClassName:l="MuiBox-root",generateClassName:h}=e,x=Ve("div",{shouldForwardProp:v=>v!=="theme"&&v!=="sx"&&v!=="as"})(Ye);return i.forwardRef(function(a,b){const f=Qe(o),u=ft(a),{className:C,component:y="div"}=u,n=H(u,xt);return t.jsx(x,P({as:y,ref:b,className:J(C,h?h(l):l),theme:r&&f[r]||f},n))})}const bt=Ze(),Pt=vt({themeId:Je,defaultTheme:bt,defaultClassName:"MuiBox-root",generateClassName:et.generate}),ne=Pt,yt=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function le(e){return`scale(${e}, ${e**2})`}const jt={entering:{opacity:1,transform:le(1)},entered:{opacity:1,transform:"none"}},se=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),He=i.forwardRef(function(r,o){const{addEndListener:l,appear:h=!0,children:x,easing:m,in:v,onEnter:a,onEntered:b,onEntering:f,onExit:u,onExited:C,onExiting:y,style:n,timeout:s="auto",TransitionComponent:g=at}=r,p=H(r,yt),I=i.useRef(),R=i.useRef(),$=Ae(),_=i.useRef(null),F=Ue(_,x.ref,o),L=c=>E=>{if(c){const N=_.current;E===void 0?c(N):c(N,E)}},V=L(f),Y=L((c,E)=>{it(c);const{duration:N,delay:D,easing:T}=je({style:n,timeout:s,easing:m},{mode:"enter"});let S;s==="auto"?(S=$.transitions.getAutoHeightDuration(c.clientHeight),R.current=S):S=N,c.style.transition=[$.transitions.create("opacity",{duration:S,delay:D}),$.transitions.create("transform",{duration:se?S:S*.666,delay:D,easing:T})].join(","),a&&a(c,E)}),ee=L(b),B=L(y),G=L(c=>{const{duration:E,delay:N,easing:D}=je({style:n,timeout:s,easing:m},{mode:"exit"});let T;s==="auto"?(T=$.transitions.getAutoHeightDuration(c.clientHeight),R.current=T):T=E,c.style.transition=[$.transitions.create("opacity",{duration:T,delay:N}),$.transitions.create("transform",{duration:se?T:T*.666,delay:se?N:N||T*.333,easing:D})].join(","),c.style.opacity=0,c.style.transform=le(.75),u&&u(c)}),te=L(C),K=c=>{s==="auto"&&(I.current=setTimeout(c,R.current||0)),l&&l(_.current,c)};return i.useEffect(()=>()=>{clearTimeout(I.current)},[]),t.jsx(g,P({appear:h,in:v,nodeRef:_,onEnter:Y,onEntered:ee,onEntering:V,onExit:G,onExited:te,onExiting:B,addEndListener:K,timeout:s==="auto"?null:s},p,{children:(c,E)=>i.cloneElement(x,P({style:P({opacity:0,transform:le(.75),visibility:c==="exited"&&!v?"hidden":void 0},jt[c],n,x.props.style),ref:F},E))}))});He.muiSupportAuto=!0;const kt=He;function Ct(e){return ze("MuiLinearProgress",e)}De("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const $t=["className","color","value","valueBuffer","variant"];let q=e=>e,Ee,Ne,Te,we,Re,_e;const ce=4,Et=de(Ee||(Ee=q`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),Nt=de(Ne||(Ne=q`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),Tt=de(Te||(Te=q`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),wt=e=>{const{classes:r,variant:o,color:l}=e,h={root:["root",`color${z(l)}`,o],dashed:["dashed",`dashedColor${z(l)}`],bar1:["bar",`barColor${z(l)}`,(o==="indeterminate"||o==="query")&&"bar1Indeterminate",o==="determinate"&&"bar1Determinate",o==="buffer"&&"bar1Buffer"],bar2:["bar",o!=="buffer"&&`barColor${z(l)}`,o==="buffer"&&`color${z(l)}`,(o==="indeterminate"||o==="query")&&"bar2Indeterminate",o==="buffer"&&"bar2Buffer"]};return Ie(h,Ct,r)},pe=(e,r)=>r==="inherit"?"currentColor":e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:e.palette.mode==="light"?tt(e.palette[r].main,.62):rt(e.palette[r].main,.5),Rt=W("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.root,r[`color${z(o.color)}`],r[o.variant]]}})(({ownerState:e,theme:r})=>P({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:pe(r,e.color)},e.color==="inherit"&&e.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},e.variant==="buffer"&&{backgroundColor:"transparent"},e.variant==="query"&&{transform:"rotate(180deg)"})),_t=W("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.dashed,r[`dashedColor${z(o.color)}`]]}})(({ownerState:e,theme:r})=>{const o=pe(r,e.color);return P({position:"absolute",marginTop:0,height:"100%",width:"100%"},e.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${o} 0%, ${o} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},ue(we||(we=q`
    animation: ${0} 3s infinite linear;
  `),Tt)),Lt=W("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.bar,r[`barColor${z(o.color)}`],(o.variant==="indeterminate"||o.variant==="query")&&r.bar1Indeterminate,o.variant==="determinate"&&r.bar1Determinate,o.variant==="buffer"&&r.bar1Buffer]}})(({ownerState:e,theme:r})=>P({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:e.color==="inherit"?"currentColor":(r.vars||r).palette[e.color].main},e.variant==="determinate"&&{transition:`transform .${ce}s linear`},e.variant==="buffer"&&{zIndex:1,transition:`transform .${ce}s linear`}),({ownerState:e})=>(e.variant==="indeterminate"||e.variant==="query")&&ue(Re||(Re=q`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),Et)),Bt=W("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.bar,r[`barColor${z(o.color)}`],(o.variant==="indeterminate"||o.variant==="query")&&r.bar2Indeterminate,o.variant==="buffer"&&r.bar2Buffer]}})(({ownerState:e,theme:r})=>P({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},e.variant!=="buffer"&&{backgroundColor:e.color==="inherit"?"currentColor":(r.vars||r).palette[e.color].main},e.color==="inherit"&&{opacity:.3},e.variant==="buffer"&&{backgroundColor:pe(r,e.color),transition:`transform .${ce}s linear`}),({ownerState:e})=>(e.variant==="indeterminate"||e.variant==="query")&&ue(_e||(_e=q`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),Nt)),St=i.forwardRef(function(r,o){const l=Oe({props:r,name:"MuiLinearProgress"}),{className:h,color:x="primary",value:m,valueBuffer:v,variant:a="indeterminate"}=l,b=H(l,$t),f=P({},l,{color:x,variant:a}),u=wt(f),C=Ae(),y={},n={bar1:{},bar2:{}};if((a==="determinate"||a==="buffer")&&m!==void 0){y["aria-valuenow"]=Math.round(m),y["aria-valuemin"]=0,y["aria-valuemax"]=100;let s=m-100;C.direction==="rtl"&&(s=-s),n.bar1.transform=`translateX(${s}%)`}if(a==="buffer"&&v!==void 0){let s=(v||0)-100;C.direction==="rtl"&&(s=-s),n.bar2.transform=`translateX(${s}%)`}return t.jsxs(Rt,P({className:J(u.root,h),ownerState:f,role:"progressbar"},y,{ref:o},b,{children:[a==="buffer"?t.jsx(_t,{className:u.dashed,ownerState:f}):null,t.jsx(Lt,{className:u.bar1,ownerState:f,style:n.bar1}),a==="determinate"?null:t.jsx(Bt,{className:u.bar2,ownerState:f,style:n.bar2})]}))}),zt=St;function Dt(e){return ze("MuiPopover",e)}De("MuiPopover",["root","paper"]);const Ot=["onEntering"],It=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"],Mt=["slotProps"];function Le(e,r){let o=0;return typeof r=="number"?o=r:r==="center"?o=e.height/2:r==="bottom"&&(o=e.height),o}function Be(e,r){let o=0;return typeof r=="number"?o=r:r==="center"?o=e.width/2:r==="right"&&(o=e.width),o}function Se(e){return[e.horizontal,e.vertical].map(r=>typeof r=="number"?`${r}px`:r).join(" ")}function ae(e){return typeof e=="function"?e():e}const At=e=>{const{classes:r}=e;return Ie({root:["root"],paper:["paper"]},Dt,r)},Ut=W(lt,{name:"MuiPopover",slot:"Root",overridesResolver:(e,r)=>r.root})({}),Ht=W(ct,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,r)=>r.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Wt=i.forwardRef(function(r,o){var l,h,x;const m=Oe({props:r,name:"MuiPopover"}),{action:v,anchorEl:a,anchorOrigin:b={vertical:"top",horizontal:"left"},anchorPosition:f,anchorReference:u="anchorEl",children:C,className:y,container:n,elevation:s=8,marginThreshold:g=16,open:p,PaperProps:I={},slots:R,slotProps:$,transformOrigin:_={vertical:"top",horizontal:"left"},TransitionComponent:F=kt,transitionDuration:L="auto",TransitionProps:{onEntering:V}={}}=m,Y=H(m.TransitionProps,Ot),ee=H(m,It),B=(l=$==null?void 0:$.paper)!=null?l:I,G=i.useRef(),te=Ue(G,B.ref),K=P({},m,{anchorOrigin:b,anchorReference:u,elevation:s,marginThreshold:g,externalPaperSlotProps:B,transformOrigin:_,TransitionComponent:F,transitionDuration:L,TransitionProps:Y}),c=At(K),E=i.useCallback(()=>{if(u==="anchorPosition")return f;const d=ae(a),k=(d&&d.nodeType===1?d:Ce(G.current).body).getBoundingClientRect();return{top:k.top+Le(k,b.vertical),left:k.left+Be(k,b.horizontal)}},[a,b.horizontal,b.vertical,f,u]),N=i.useCallback(d=>({vertical:Le(d,_.vertical),horizontal:Be(d,_.horizontal)}),[_.horizontal,_.vertical]),D=i.useCallback(d=>{const j={width:d.offsetWidth,height:d.offsetHeight},k=N(j);if(u==="none")return{top:null,left:null,transformOrigin:Se(k)};const ge=E();let A=ge.top-k.vertical,U=ge.left-k.horizontal;const xe=A+j.height,ve=U+j.width,be=$e(ae(a)),Pe=be.innerHeight-g,ye=be.innerWidth-g;if(A<g){const w=A-g;A-=w,k.vertical+=w}else if(xe>Pe){const w=xe-Pe;A-=w,k.vertical+=w}if(U<g){const w=U-g;U-=w,k.horizontal+=w}else if(ve>ye){const w=ve-ye;U-=w,k.horizontal+=w}return{top:`${Math.round(A)}px`,left:`${Math.round(U)}px`,transformOrigin:Se(k)}},[a,u,E,N,g]),[T,S]=i.useState(p),M=i.useCallback(()=>{const d=G.current;if(!d)return;const j=D(d);j.top!==null&&(d.style.top=j.top),j.left!==null&&(d.style.left=j.left),d.style.transformOrigin=j.transformOrigin,S(!0)},[D]),We=(d,j)=>{V&&V(d,j),M()},qe=()=>{S(!1)};i.useEffect(()=>{p&&M()}),i.useImperativeHandle(v,()=>p?{updatePosition:()=>{M()}}:null,[p,M]),i.useEffect(()=>{if(!p)return;const d=gt(()=>{M()}),j=$e(a);return j.addEventListener("resize",d),()=>{d.clear(),j.removeEventListener("resize",d)}},[a,p,M]);let me=L;L==="auto"&&!F.muiSupportAuto&&(me=void 0);const Fe=n||(a?Ce(ae(a)).body:void 0),re=(h=R==null?void 0:R.root)!=null?h:Ut,fe=(x=R==null?void 0:R.paper)!=null?x:Ht,Ge=ke({elementType:fe,externalSlotProps:P({},B,{style:T?B.style:P({},B.style,{opacity:0})}),additionalProps:{elevation:s,ref:te},ownerState:K,className:J(c.paper,B==null?void 0:B.className)}),he=ke({elementType:re,externalSlotProps:($==null?void 0:$.root)||{},externalForwardedProps:ee,additionalProps:{ref:o,slotProps:{backdrop:{invisible:!0}},container:Fe,open:p},ownerState:K,className:J(c.root,y)}),{slotProps:Ke}=he,Xe=H(he,Mt);return t.jsx(re,P({},Xe,!dt(re)&&{slotProps:Ke},{children:t.jsx(F,P({appear:!0,in:p,onEntering:We,onExited:qe,timeout:me},Y,{children:t.jsx(fe,P({},Ge,{children:C}))}))}))}),qt=Wt,Ft=({post:e})=>{const[r,o]=i.useState(!1),[l,h]=i.useState(!0),x=Me("token"),[m,v]=i.useState(e.comments),a=ot(),b=i.useRef(null),f=async(n,s)=>{const p=await(await fetch(`https://boiling-wildwood-46640-30ec30629e36.herokuapp.com/api/v1/posts/${n}/like`,{method:"POST",headers:{Authorization:`Bearer ${x}`}})).json();h(!1),o(p.post.likes.includes(s))},u=async(n,s)=>{const p=await(await fetch(`https://boiling-wildwood-46640-30ec30629e36.herokuapp.com/api/v1/posts/${n}/unlike`,{method:"POST",headers:{Authorization:`Bearer ${x}`}})).json();h(!1),o(p.post.likes.includes(s))},C=(n,s)=>async g=>{g.preventDefault();const p={user:s,text:b.current.value},I=await ie.post(`https://boiling-wildwood-46640-30ec30629e36.herokuapp.com/api/v1/posts/${n}/add-comment`,p,{headers:{Authorization:`Bearer ${x}`}}),{data:R}=I;v(R.post.comments),b.current.value=""},{user:y}=nt(n=>n.user,st);return i.useEffect(()=>{o(e.likes.includes(a))},[e.likes,a]),t.jsx(t.Fragment,{children:t.jsxs("div",{className:"post",children:[t.jsx("div",{className:"post-avatar",children:t.jsx(X,{to:`/profile/${e.user._id}`,children:t.jsx(oe,{alt:e.user.name,src:e.user.photo})})}),t.jsxs("div",{className:"post-header",children:[t.jsx("div",{className:"post-by mb-2",children:t.jsx("p",{style:{margin:0},children:e.text})}),t.jsxs("div",{className:"post-details",children:[t.jsx("div",{className:"post-img",children:t.jsx("img",{src:e.book.book_image,alt:e.book.title})}),t.jsxs("div",{className:"post-content",children:[t.jsx("h4",{children:t.jsx(X,{to:`/book/${e.book._id}`,children:e.book.title})}),t.jsxs("div",{className:"post-author",children:["by ",t.jsx(X,{to:"author",children:e.book.author.name})]}),t.jsxs("div",{className:"post-cta",children:[t.jsx(ut,{})," ",t.jsxs("div",{className:"post-rating",children:["Rate this :"," ",t.jsx(pt,{name:"half-rating-read",defaultValue:0,size:"small"})]})]}),t.jsx("div",{className:"post-description",children:t.jsx("p",{children:e.book.description})})]})]}),t.jsxs("div",{className:"post-activity",children:[r?t.jsx(O,{type:"button",variant:"text",text:`${r?"Unlike":"Like"}`,onClick:()=>u(e._id,a)}):t.jsx(O,{type:"button",variant:"text",text:`${r?"Unlike":"Like"}`,onClick:()=>f(e._id,a)})," ","| ",t.jsx(O,{type:"button",variant:"text",text:"Comment"})]})]}),t.jsxs("div",{className:"post-footer",children:[r&&t.jsx("div",{className:"post-liked",children:"You liked this"}),m&&t.jsx("ul",{className:"post-comments",children:m.map(n=>t.jsx("li",{children:t.jsxs("div",{className:"comment-body",children:[t.jsx(oe,{alt:n.user.name,src:`${n.user.photo}`}),t.jsxs("div",{className:"comment-user",children:[t.jsx("h6",{className:"user-name mb-1",children:t.jsx(X,{to:`/profile/${n.user._id}`,children:n.user.name})}),t.jsx("div",{className:"user-comment",children:n.text})]})]})},n._id))}),t.jsxs("div",{className:"post-comment",children:[t.jsx(oe,{alt:y.name,src:y.photo}),t.jsx("form",{method:"post",onSubmit:C(e._id,a),children:t.jsxs("div",{className:"form-group d-flex",style:{gap:"2%"},children:[t.jsx("textarea",{name:"comment",id:"comment",style:{height:"40px"},ref:b}),t.jsx(O,{variant:"solid",text:"comment",sx:{padding:"3px 10px"},type:"submit"})]})})]})]})]})})};Ft.propTypes={post:Z.object};const Gt=({book:e,currentUser:r})=>{const[o,l]=i.useState(null),[h,x]=i.useState(e.readingProgress),m=i.useRef(null),v=Me("token"),a=n=>{l(n.currentTarget)},b=()=>{l(null)},f=!!o,u=f?"simple-popover":void 0,C=async n=>{try{const s={readingProgress:Number(m.current.value)},g=await ie.patch(`https://boiling-wildwood-46640-30ec30629e36.herokuapp.com/api/v1/shelf/update-progress/${n}`,s,{headers:{Authorization:`Bearer ${v}`}}),{data:p}=g;x(m.current.value),Q.success(p.message)}catch(s){Q.error(s.message)}},y=async n=>{try{const s={readingProgress:100},g=await ie.patch(`https://boiling-wildwood-46640-30ec30629e36.herokuapp.com/api/v1/shelf/update-progress/${n}`,s,{headers:{Authorization:`Bearer ${v}`}}),{data:p}=g;x(100),l(null),Q.success(p.message)}catch(s){Q.error(s.message)}};return t.jsxs("div",{className:"reading mb-3",children:[t.jsx("div",{className:"reading-img",children:t.jsx("img",{src:e.book.book_image,alt:e.book.title})}),t.jsxs("div",{className:"reading-content",children:[t.jsx("h6",{children:t.jsx(X,{to:`/book/${e.book._id}`,style:{color:"#2a2a2a"},children:e.book.title})}),t.jsx("div",{className:"mb-2",children:e.book.author.name}),h>0&&t.jsxs(ne,{sx:{display:"flex",alignItems:"center"},children:[t.jsx(ne,{sx:{width:"100%",mr:1},children:t.jsx(zt,{variant:"determinate",value:Number(h),color:"success"})}),t.jsx(ne,{sx:{minWidth:35},children:t.jsx(ht,{variant:"body2",color:"text.secondary",children:`${Math.round(h)}/100%`})})]}),r&&t.jsx(O,{text:"update progress",variant:"outline",sx:{fontSize:"12px",padding:"5px 15px",marginTop:"10px"},onClick:a})]}),t.jsx(qt,{id:u,open:f,anchorEl:o,onClose:b,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:t.jsxs("div",{className:"progress-wrapper",children:[t.jsxs("div",{className:"progress-top",children:[t.jsx("div",{className:"progress-form",children:t.jsxs("div",{children:[t.jsxs("label",{htmlFor:"reading",children:["Currently on",t.jsx("input",{type:"number",name:"reading",id:"reading",style:{height:"25px",width:"60px",margin:"0 10px",padding:"2px 5px"},max:100,min:0,ref:m}),t.jsx("span",{children:"of 100%"})]}),t.jsx(O,{text:"Update",variant:"solid",sx:{padding:"2px 7px",fontSize:"12px",marginLeft:"10px"},onClick:()=>C(e.book._id)})]})}),t.jsx(O,{text:"I'm finished",variant:"text",onClick:()=>y(e.book._id)})]}),t.jsx("div",{className:"progress-footer"})]})}),t.jsx(mt,{position:"bottom-left",limit:1})]})};Gt.propTypes={book:Z.object,setOpen:Z.func,currentUser:Z.bool};export{Gt as C,Ft as P};