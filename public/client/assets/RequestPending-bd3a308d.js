import{r as o,u as w,a as N,j as e,C as v,L as i}from"./index-626fd1d9.js";import{T as b}from"./Title-4ea1d570.js";import{B as l}from"./Button-66ad25f4.js";import{k as y,Q as h}from"./react-toastify.esm-a01cce03.js";/* empty css                      */import{R as m,C as c}from"./Row-20c8603c.js";const B=()=>{const[r,x]=o.useState([]),[d,j]=o.useState(!0),n=w("token"),{profileId:t}=N(),u=async s=>{const g=await(await fetch(`https://boiling-wildwood-46640-30ec30629e36.herokuapp.com/api/v1/users/request_pending/${s}`,{method:"GET",headers:{Authorization:`Bearer ${n}`}})).json();j(!1),x(g.data.users)},p=async s=>{try{await(await fetch(`https://boiling-wildwood-46640-30ec30629e36.herokuapp.com/api/v1/users/accept-request/${s}`,{method:"POST",headers:{Authorization:`Bearer ${n}`}})).json(),window.location.reload(!0)}catch(a){h.error(a.message)}},f=async s=>{try{await(await fetch(`https://boiling-wildwood-46640-30ec30629e36.herokuapp.com/api/v1/users/cancel-request/${s}`,{method:"POST",headers:{Authorization:`Bearer ${n}`}})).json(),window.location.reload(!0)}catch(a){h.error(a.message)}};return o.useEffect(()=>{u(t)},[t]),e.jsxs("main",{children:[e.jsx("section",{className:"py-5",children:e.jsx(v,{children:e.jsx(m,{children:e.jsx(c,{md:10,className:"mx-auto",children:e.jsxs(m,{className:"gx-5",children:[e.jsx(c,{md:8,children:e.jsxs("div",{className:"friends-wrapper",children:[e.jsx(b,{element:e.jsx("h6",{className:"border-bottom pb-2 mb-2",style:{fontWeight:700,fontSize:"14px"},children:"Pending Request"})}),e.jsx("ul",{children:!d&&r.length>0&&r.map(s=>e.jsx("li",{children:e.jsxs("div",{className:"friend-item",children:[e.jsxs("div",{className:"friend-left",children:[e.jsx("div",{className:"friend-img",children:e.jsx("img",{src:s.photo,alt:s.name})}),e.jsxs("div",{className:"friend-detail ps-2",children:[e.jsx("h6",{className:"",style:{fontWeight:700,fontSize:"14px",margin:"0"},children:e.jsx(i,{to:`/profile/${s._id}`,children:s.name})}),e.jsx("div",{className:"",children:s.email})]})]}),e.jsxs("div",{className:"friend-right",children:[e.jsx(l,{text:"accept",variant:"solid",onClick:()=>p(s._id),sx:{display:"block",marginBottom:"10px"}}),e.jsx(l,{text:"cancel",variant:"solid",onClick:()=>f(s._id),sx:{display:"block",backgroundColor:"#b8b8b8"}})]})]})},s._id))}),!d&&r.length<0&&e.jsx("p",{children:"No pending request"})]})}),e.jsx(c,{md:4,children:e.jsxs("div",{className:"friends-link",children:[e.jsx("div",{className:"",children:e.jsxs(i,{to:`/following/${t}`,style:{color:"#2a2a2a"},children:["People I","'","m following"]})}),e.jsx("div",{className:"",children:e.jsx(i,{to:`/followers/${t}`,style:{color:"#2a2a2a"},children:"My followers"})}),e.jsx("div",{className:"",children:e.jsx(i,{to:"/add-friend",style:{color:"#2a2a2a"},children:"Add friends"})})]})})]})})})})}),e.jsx(y,{position:"bottom-left"})]})};export{B as default};
