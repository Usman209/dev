import{C as j}from"./chunk-XDJ7OMBR-ZJkL2Im5.js";import{K as f}from"./chunk-6HTZNHPT-CGSbGn11.js";import{b as n,u as v}from"./chunk-ZCO6EK4W-CX69Xo4z.js";import{a6 as a,R as g,b as x,Q as b,ar as P,j as s,H as y,a8 as C,a9 as F,as as w,w as e,x as S,B as p}from"./index-GdHM8J3a.js";import"./x-mark-mini-Ci-zy02q.js";import"./prompt-Cg4bZ6tm.js";var E=a.object({title:a.string().min(1),values:a.array(a.string()).optional()}),I=({option:i})=>{const{t:o}=x(),{handleSuccess:l}=v(),t=C({defaultValues:{title:i.title,values:i.values.map(r=>r.value)},resolver:F(E)}),{mutateAsync:d,isPending:c}=w(i.product_id,i.id),u=t.handleSubmit(async r=>{d({id:i.id,...r},{onSuccess:()=>{l()}})});return s.jsx(n.Form,{form:t,children:s.jsxs(f,{onSubmit:u,className:"flex flex-1 flex-col overflow-hidden",children:[s.jsxs(n.Body,{className:"flex flex-1 flex-col gap-y-4 overflow-auto",children:[s.jsx(e.Field,{control:t.control,name:"title",render:({field:r})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{children:o("products.fields.options.optionTitle")}),s.jsx(e.Control,{children:s.jsx(S,{...r,placeholder:o("products.fields.options.optionTitlePlaceholder")})}),s.jsx(e.ErrorMessage,{})]})}),s.jsx(e.Field,{control:t.control,name:"values",render:({field:{...r}})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{children:o("products.fields.options.variations")}),s.jsx(e.Control,{children:s.jsx(j,{...r,placeholder:o("products.fields.options.variantionsPlaceholder")})}),s.jsx(e.ErrorMessage,{})]})})]}),s.jsx(n.Footer,{children:s.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[s.jsx(n.Close,{asChild:!0,children:s.jsx(p,{variant:"secondary",size:"small",children:o("actions.cancel")})}),s.jsx(p,{type:"submit",size:"small",isLoading:c,children:o("actions.save")})]})})]})})},M=()=>{const{id:i,option_id:o}=g(),{t:l}=x(),{product:t,isPending:d,isFetching:c,isError:u,error:r}=b(i),m=t==null?void 0:t.options.find(h=>h.id===o);if(!d&&!c&&!m)throw P({message:`An option with ID ${o} was not found`},404);if(u)throw r;return s.jsxs(n,{children:[s.jsx(n.Header,{children:s.jsx(y,{children:l("products.options.edit.header")})}),m&&s.jsx(I,{option:m})]})};export{M as Component};
