import{r as h,b as x,c as g,j as e,C as j,L as t}from"./index-a0051c01.js";import{E as f,F as c}from"./ErrorMessage-ae7d3245.js";import{B as w}from"./Button-57ddcc21.js";import{R as b,C as v}from"./Row-f8d353d5.js";import"./Form-2c2a6d0b.js";import"./useForkRef-3114d95e.js";import"./debounce-517eeb3c.js";import"./useIsFocusVisible-1aa6f67c.js";const I=()=>{const[s,n]=h.useState(),l=new x,m=g(),p=async a=>{a.preventDefault();const u={email:a.target.email.value,password:a.target.password.value},i=await fetch("https://boiling-wildwood-46640-30ec30629e36.herokuapp.com/api/v1/users/login",{method:"POST",body:JSON.stringify(u),headers:{"Content-Type":"application/json"}});i.status===401&&n(await i.json());const o=await i.json();n(o);const d=o.token,r=o.data.user._id;d&&r&&(l.set("token",d,{path:"/",expires:new Date(Date.now()+7*24*60*60*1e3)}),l.set("userId",r,{path:"/",expires:new Date(Date.now()+7*24*60*60*1e3)})),m(`/profile/${r}`)};return e.jsx("section",{children:e.jsx(j,{children:e.jsx(b,{className:"justify-content-center",children:e.jsx(v,{md:3,children:e.jsxs("div",{className:"auth-wrapper",children:[e.jsxs("div",{className:"auth-top text-center mb-3",children:[e.jsx("div",{className:"logo mb-3",children:e.jsx("img",{src:"/images/bibliophileHub.png",alt:"bibliophile hub logo"})}),(s==null?void 0:s.status)==="fail"&&e.jsx(f,{message:s.message}),e.jsx("h1",{children:"Sign in"})]}),e.jsxs("form",{method:"post",onSubmit:p,children:[e.jsx("div",{className:"form-group",children:e.jsx(c,{fieldName:"Email",type:"email",name:"email",id:"email",rounded:!0})}),e.jsx("div",{className:"form-group",children:e.jsx(c,{fieldName:"Password",type:"password",name:"password",id:"password",rounded:!0})}),e.jsx("div",{className:"form-group",style:{textAlign:"right",margin:"0"},children:e.jsx(t,{to:"/forgot-password",children:"Forgot your password?"})}),e.jsx(w,{text:"Submit",type:"submit",variant:"solid",rounded:!0,sx:{width:"100%",marginTop:"10px"}})]}),e.jsxs("small",{className:"d-block mt-3",children:["By signing in, you agree to the Bibliophile Hub"," ",e.jsx(t,{to:"/",children:"Terms of Service"})," and"," ",e.jsx(t,{to:"/",children:"Privacy Policy"})]}),e.jsxs("div",{className:"mt-4 text-center",children:["Create an account ",e.jsx(t,{to:"/signup",children:"Sign up"})]})]})})})})})};export{I as default};