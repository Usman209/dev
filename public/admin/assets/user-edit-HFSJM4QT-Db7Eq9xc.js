import{K as f}from"./chunk-6HTZNHPT-CGSbGn11.js";import{b as n,u as h}from"./chunk-ZCO6EK4W-CX69Xo4z.js";import{a2 as p,a4 as d,b as u,R as y,cS as b,j as s,H as g,a8 as v,a9 as F,e6 as _,w as e,x as m,B as x}from"./index-GdHM8J3a.js";import"./prompt-Cg4bZ6tm.js";var w=p({first_name:d().optional(),last_name:d().optional()}),E=({user:t})=>{const{t:r}=u(),{handleSuccess:i}=h(),a=v({defaultValues:{first_name:t.first_name||"",last_name:t.last_name||""},resolver:F(w)}),{mutateAsync:l,isPending:c}=_(t.id),j=a.handleSubmit(async o=>{await l(o,{onSuccess:()=>{i()}})});return s.jsx(n.Form,{form:a,children:s.jsxs(f,{onSubmit:j,className:"flex flex-1 flex-col overflow-hidden",children:[s.jsxs(n.Body,{className:"flex max-w-full flex-1 flex-col gap-y-8 overflow-y-auto",children:[s.jsx(e.Field,{control:a.control,name:"first_name",render:({field:o})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{children:r("fields.firstName")}),s.jsx(e.Control,{children:s.jsx(m,{...o})}),s.jsx(e.ErrorMessage,{})]})}),s.jsx(e.Field,{control:a.control,name:"last_name",render:({field:o})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{children:r("fields.lastName")}),s.jsx(e.Control,{children:s.jsx(m,{...o})}),s.jsx(e.ErrorMessage,{})]})})]}),s.jsx(n.Footer,{children:s.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[s.jsx(n.Close,{asChild:!0,children:s.jsx(x,{size:"small",variant:"secondary",children:r("actions.cancel")})}),s.jsx(x,{size:"small",type:"submit",isLoading:c,children:r("actions.save")})]})})]})})},L=()=>{const{t}=u(),{id:r}=y(),{user:i,isPending:a,isError:l,error:c}=b(r);if(l)throw c;return s.jsxs(n,{children:[s.jsx(n.Header,{children:s.jsx(g,{children:t("users.editUser")})}),!a&&i&&s.jsx(E,{user:i})]})};export{L as Component};
