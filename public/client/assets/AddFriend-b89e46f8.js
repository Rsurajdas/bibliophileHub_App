import{P as w,r as i,a1 as b,a2 as N,u as p,j as s,L as y,C as v}from"./index-7143f6c6.js";import{T as k}from"./Title-5e271a8f.js";import{B as x}from"./Button-929226ff.js";import{k as S,Q as u}from"./react-toastify.esm-25a86fe4.js";/* empty css                      */import{R as f,C as j}from"./Row-6374f0a9.js";const g=({profile:e})=>{const[n,l]=i.useState(!1),[d,c]=i.useState(!1),{user:r}=b(a=>a.user,N),m=p("token");i.useEffect(()=>{const a=r.following.some(t=>t._id===e._id);l(a)},[e._id,r.following]),i.useEffect(()=>{const a=r.friends.some(t=>t._id===e._id);c(a)},[e._id,r.friends]);const o=async a=>{try{const h=await fetch(`https://boiling-wildwood-46640-30ec30629e36.herokuapp.com/api/v1/users/${n?"unfollow":"follow"}/${a}`,{method:"POST",headers:{Authorization:`Bearer ${m}`}});await h.json(),l(!n),u.success(h.message)}catch(t){u.error(t.message)}};return s.jsxs("li",{children:[s.jsxs("div",{className:"friend-item",children:[s.jsxs("div",{className:"friend-left",children:[s.jsx("div",{className:"friend-img",children:s.jsx("img",{src:e.photo,alt:e.name})}),s.jsxs("div",{className:"friend-detail ps-2",children:[s.jsx("h6",{className:"",style:{fontWeight:700,fontSize:"14px",margin:"0"},children:s.jsx(y,{to:`/profile/${e._id}`,children:e.name})}),s.jsx("div",{className:"",children:e.email})]})]}),s.jsxs("div",{className:"friend-right",children:[s.jsx(x,{text:d?"unfriend":"add friend",variant:"solid",sx:{display:"block",marginBottom:"10px"}}),s.jsx(x,{text:n?"following":"follow",variant:"solid",sx:{display:"block",backgroundColor:"#207e20",marginLeft:"auto"},onClick:()=>o(e._id)})]})]}),s.jsx(S,{position:"bottom-left"})]})};g.propTypes={profile:w.object};const E=()=>{const[e,n]=i.useState([]),[l,d]=i.useState(!0),c=i.useRef(null),r=p("token"),m=async o=>{o.preventDefault();try{const t=await(await fetch(`https://boiling-wildwood-46640-30ec30629e36.herokuapp.com/api/v1/users/search-member?query=${c.current.value}`,{method:"GET",headers:{Authorization:`Bearer ${r}`}})).json();d(!1),n(t.data.users)}catch(a){console.error(a.message)}};return s.jsx("main",{children:s.jsx("section",{className:"py-5",children:s.jsx(v,{children:s.jsx(f,{children:s.jsx(j,{md:10,className:"mx-auto",children:s.jsx(f,{className:"gx-5",children:s.jsx(j,{md:8,children:s.jsxs("div",{className:"friends-wrapper",children:[s.jsx(k,{element:s.jsx("h6",{className:"border-bottom pb-2 mb-2",style:{fontWeight:700,fontSize:"14px"},children:"Friends"})}),s.jsx("div",{className:"search-user",children:s.jsx("div",{className:"search-wrapper",children:s.jsx("form",{className:"search-form",onSubmit:m,children:s.jsxs("div",{className:"form-group",style:{marginBottom:"0"},children:[s.jsx("input",{type:"search",name:"search",id:"search",placeholder:"name or email",style:{fontSize:"12px"},ref:c}),s.jsx("button",{type:"submit",children:s.jsx("i",{className:"fa-solid fa-magnifying-glass"})})]})})})}),s.jsx("ul",{className:"mt-4",children:!l&&e.map(o=>s.jsx(g,{profile:o},o._id))})]})})})})})})})})};export{E as default};
