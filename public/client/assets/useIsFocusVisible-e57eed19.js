import{r as u,a8 as w}from"./index-f05588db.js";function K(...e){return e.reduce((t,n)=>n==null?t:function(...r){t.apply(this,r),n.apply(this,r)},()=>{})}function E(e){return e&&e.ownerDocument||document}function L(e){return E(e).defaultView||window}function p(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const I=typeof window<"u"?u.useLayoutEffect:u.useEffect,R=I;let c=0;function V(e){const[t,n]=u.useState(e),s=e||t;return u.useEffect(()=>{t==null&&(c+=1,n(`mui-${c}`))},[t]),s}const l=w["useId".toString()];function S(e){if(l!==void 0){const t=l();return e??t}return V(e)}function x({controlled:e,default:t,name:n,state:s="value"}){const{current:r}=u.useRef(e!==void 0),[d,h]=u.useState(t),y=r?e:d,b=u.useCallback(m=>{r||h(m)},[]);return[y,b]}function U(e){const t=u.useRef(e);return R(()=>{t.current=e}),u.useCallback((...n)=>(0,t.current)(...n),[])}function A(...e){return u.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{p(n,t)})},e)}let i=!0,o=!1,f;const F={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function C(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&F[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function g(e){e.metaKey||e.altKey||e.ctrlKey||(i=!0)}function a(){i=!1}function v(){this.visibilityState==="hidden"&&o&&(i=!0)}function T(e){e.addEventListener("keydown",g,!0),e.addEventListener("mousedown",a,!0),e.addEventListener("pointerdown",a,!0),e.addEventListener("touchstart",a,!0),e.addEventListener("visibilitychange",v,!0)}function k(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return i||C(t)}function B(){const e=u.useCallback(r=>{r!=null&&T(r.ownerDocument)},[]),t=u.useRef(!1);function n(){return t.current?(o=!0,window.clearTimeout(f),f=window.setTimeout(()=>{o=!1},100),t.current=!1,!0):!1}function s(r){return k(r)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:s,onBlur:n,ref:e}}export{A as a,S as b,K as c,L as d,R as e,U as f,B as g,E as o,p as s,x as u};