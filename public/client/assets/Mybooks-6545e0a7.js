import{c as d,r as x,h as u,i as j,j as e,k as p,b as c,Q as f,u as b,C as v,S as y,a as k,N as l,O as N}from"./index-3c314f58.js";/* empty css             */import{R as r,C as a}from"./Row-9b61c6f3.js";const g={gap:"5%"},S=()=>{const n=d("token"),s=x.useRef(null),t=u(),{isLoading:o,mutate:h}=j({mutationFn:async i=>{if(i.preventDefault(),!s.current.value)throw new Error("Shelf name cant be empty");const m={shelf_name:s.current.value};await c.post("https://boiling-wildwood-46640-30ec30629e36.herokuapp.com/api/v1/shelf",m,{headers:{Authorization:`Bearer ${n}`}}),s.current.value=""},onSuccess:()=>{t.invalidateQueries({queryKey:["shelves"]})},onError:i=>{f.error(i.message)}});return e.jsxs("form",{method:"POST",onSubmit:h,children:[e.jsxs("div",{className:"d-flex align-items-end",style:g,children:[e.jsx("input",{type:"text",name:"shelf",id:"shelf",className:"form-input",placeholder:"Add shelf",ref:s}),e.jsx("button",{className:"button button-solid",type:"submit",disabled:o,children:o?"Adding...":"Add"})]}),e.jsx(p,{position:"bottom-left"})]})},C=()=>{const n=d("token"),{data:s}=b({queryKey:["shelves"],queryFn:()=>c.get("https://boiling-wildwood-46640-30ec30629e36.herokuapp.com/api/v1/shelf",{headers:{Authorization:`Bearer ${n}`}}),select:t=>t.data.data.shelves});return e.jsx("main",{children:e.jsx("section",{style:{paddingBottom:"50px"},children:e.jsxs(v,{children:[e.jsxs(r,{className:"align-items-center border-bottom pt-3 pb-2",children:[e.jsx(a,{md:6,children:e.jsx("div",{className:"section-header",children:e.jsx("h1",{style:{fontSize:"25px",lineHeight:"26px",fontWeight:600,color:"#282"},children:"My Books"})})}),e.jsx(a,{md:6,children:e.jsx("div",{className:"d-flex gx-2 justify-content-end",children:e.jsx(y,{sx:{width:"250px",fontSize:"13px"}})})})]}),e.jsxs(r,{className:"mt-2",children:[e.jsx(a,{md:3,children:e.jsxs("div",{className:"book-shelf border-bottom",children:[e.jsxs("h4",{children:["BookShelves ",e.jsx(k,{to:"/",children:"Edit"})]}),e.jsx("div",{className:"pb-2",children:e.jsx(S,{})}),e.jsx("nav",{className:"book-shelf-nav",children:e.jsxs("ul",{className:"mb-2",children:[e.jsx("li",{children:e.jsx(l,{to:"table/all",children:"All"})}),s==null?void 0:s.map(t=>e.jsx("li",{children:e.jsx(l,{to:`table/${t._id}`,children:t.shelf_name})},t._id))]})})]})}),e.jsx(a,{md:9,children:e.jsx("div",{className:"book-shelf",children:e.jsx(N,{})})})]})]})})})};export{C as default};
