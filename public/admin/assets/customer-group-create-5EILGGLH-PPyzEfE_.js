import{K as x}from"./chunk-6HTZNHPT-CGSbGn11.js";import{R as s,u as h}from"./chunk-ZCO6EK4W-CX69Xo4z.js";import{a2 as j,a4 as p,j as e,b as f,a8 as C,a9 as g,dQ as v,t as l,H as y,T as b,w as a,x as F,B as i}from"./index-GdHM8J3a.js";import"./prompt-Cg4bZ6tm.js";var G=j({name:p().min(1)}),T=()=>{const{t:r}=f(),{handleSuccess:c}=h(),o=C({defaultValues:{name:""},resolver:g(G)}),{mutateAsync:m,isPending:d}=v(),u=o.handleSubmit(async n=>{await m({name:n.name},{onSuccess:({customer_group:t})=>{l.success(r("customerGroups.create.successToast",{name:t.name})),c(`/customer-groups/${t.id}`)},onError:t=>{l.error(t.message)}})});return e.jsx(s.Form,{form:o,children:e.jsxs(x,{className:"flex h-full flex-col overflow-hidden",onSubmit:u,children:[e.jsx(s.Header,{}),e.jsx(s.Body,{className:"flex flex-col items-center pt-[72px]",children:e.jsxs("div",{className:"flex size-full max-w-[720px] flex-col gap-y-8",children:[e.jsxs("div",{children:[e.jsx(s.Title,{asChild:!0,children:e.jsx(y,{children:r("customerGroups.create.header")})}),e.jsx(s.Description,{asChild:!0,children:e.jsx(b,{size:"small",className:"text-ui-fg-subtle",children:r("customerGroups.create.hint")})})]}),e.jsx("div",{className:"grid grid-cols-2 gap-4",children:e.jsx(a.Field,{control:o.control,name:"name",render:({field:n})=>e.jsxs(a.Item,{children:[e.jsx(a.Label,{children:r("fields.name")}),e.jsx(a.Control,{children:e.jsx(F,{...n})}),e.jsx(a.ErrorMessage,{})]})})})]})}),e.jsxs(s.Footer,{children:[e.jsx(s.Close,{asChild:!0,children:e.jsx(i,{variant:"secondary",size:"small",children:r("actions.cancel")})}),e.jsx(i,{type:"submit",variant:"primary",size:"small",isLoading:d,children:r("actions.create")})]})]})})},R=()=>e.jsx(s,{children:e.jsx(T,{})});export{R as Component};
