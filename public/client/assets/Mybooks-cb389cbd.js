import{c as h,r as m,h as x,i as u,j as e,k as j,b as p,Q as f,l as b,C as v,S as y,a as N,N as i,O as k}from"./index-a213bcde.js";/* empty css             */import{R as o,C as n}from"./Row-6003576e.js";const S={gap:"5%"},g=()=>{const t=h("token"),s=m.useRef(null),r=x(),{isLoading:a,mutate:d}=u({mutationFn:async l=>{if(l.preventDefault(),!s.current.value)throw new Error("Shelf name cant be empty");const c={shelf_name:s.current.value};await p.post("https://boiling-wildwood-46640-30ec30629e36.herokuapp.com/api/v1/shelf",c,{headers:{Authorization:`Bearer ${t}`}}),s.current.value=""},onSuccess:()=>{r.invalidateQueries({queryKey:["shelves"]})},onError:l=>{f.error(l.message)}});return e.jsxs("form",{method:"POST",onSubmit:d,children:[e.jsxs("div",{className:"d-flex align-items-end",style:S,children:[e.jsx("input",{type:"text",name:"shelf",id:"shelf",className:"form-input",placeholder:"Add shelf",ref:s}),e.jsx("button",{className:"button button-solid",type:"submit",disabled:a,children:a?"Adding...":"Add"})]}),e.jsx(j,{position:"bottom-left"})]})},R=()=>{const t=b();return e.jsx("main",{children:e.jsx("section",{style:{paddingBottom:"50px"},children:e.jsxs(v,{children:[e.jsxs(o,{className:"align-items-center border-bottom pt-3 pb-2",children:[e.jsx(n,{md:6,children:e.jsx("div",{className:"section-header",children:e.jsx("h1",{style:{fontSize:"25px",lineHeight:"26px",fontWeight:600,color:"#282"},children:"My Books"})})}),e.jsx(n,{md:6,children:e.jsx("div",{className:"d-flex gx-2 justify-content-end",children:e.jsx(y,{sx:{width:"250px",fontSize:"13px"}})})})]}),e.jsxs(o,{className:"mt-2",children:[e.jsx(n,{md:3,children:e.jsxs("div",{className:"book-shelf border-bottom",children:[e.jsxs("h4",{children:["BookShelves ",e.jsx(N,{to:"/",children:"Edit"})]}),e.jsx("div",{className:"pb-2",children:e.jsx(g,{})}),e.jsx("nav",{className:"book-shelf-nav",children:e.jsxs("ul",{className:"mb-2",children:[e.jsx("li",{children:e.jsx(i,{to:"table/all",children:"All"})}),t==null?void 0:t.map(s=>e.jsx("li",{children:e.jsx(i,{to:`table/${s._id}`,children:s.shelf_name})},s._id))]})})]})}),e.jsx(n,{md:9,children:e.jsx("div",{className:"book-shelf",children:e.jsx(k,{})})})]})]})})})};export{R as default};