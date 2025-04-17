import{K as f}from"./chunk-6HTZNHPT-CGSbGn11.js";import{b as t,u as g}from"./chunk-ZCO6EK4W-CX69Xo4z.js";import{a6 as m,b as j,R as C,dl as _,j as s,H as y,a8 as b,a9 as v,dp as F,t as u,w as e,B as x}from"./index-GdHM8J3a.js";import{D as h}from"./date-picker-DqbDKbSd.js";import"./prompt-Cg4bZ6tm.js";import"./clsx-B-dksMZM.js";import"./popover-CktwWf5C.js";import"./index-Cjv5KQUy.js";import"./x-mark-mini-Ci-zy02q.js";import"./triangle-left-mini-Bk5yTWPC.js";var S=m.object({starts_at:m.date().nullable(),ends_at:m.date().nullable()}),w=({campaign:a})=>{const{t:r}=j(),{handleSuccess:o}=g(),n=b({defaultValues:{starts_at:a.starts_at?new Date(a.starts_at):void 0,ends_at:a.ends_at?new Date(a.ends_at):void 0},resolver:v(S)}),{mutateAsync:l,isPending:d}=F(a.id),p=n.handleSubmit(async i=>{await l({starts_at:i.starts_at||null,ends_at:i.ends_at||null},{onSuccess:({campaign:c})=>{u.success(r("campaigns.configuration.edit.successToast",{name:c.name})),o()},onError:c=>{u.error(c.message)}})});return s.jsx(t.Form,{form:n,children:s.jsxs(f,{onSubmit:p,className:"flex flex-1 flex-col",children:[s.jsx(t.Body,{children:s.jsxs("div",{className:"flex flex-col gap-y-4",children:[s.jsx(e.Field,{control:n.control,name:"starts_at",render:({field:i})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{children:r("campaigns.fields.start_date")}),s.jsx(e.Control,{children:s.jsx(h,{granularity:"minute",hourCycle:12,shouldCloseOnSelect:!1,...i})}),s.jsx(e.ErrorMessage,{})]})}),s.jsx(e.Field,{control:n.control,name:"ends_at",render:({field:i})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{children:r("campaigns.fields.end_date")}),s.jsx(e.Control,{children:s.jsx(h,{granularity:"minute",shouldCloseOnSelect:!1,...i})}),s.jsx(e.ErrorMessage,{})]})})]})}),s.jsx(t.Footer,{children:s.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[s.jsx(t.Close,{asChild:!0,children:s.jsx(x,{variant:"secondary",size:"small",children:r("actions.cancel")})}),s.jsx(x,{isLoading:d,type:"submit",variant:"primary",size:"small",children:r("actions.save")})]})})]})})},T=()=>{const{t:a}=j(),{id:r}=C(),{campaign:o,isLoading:n,isError:l,error:d}=_(r);if(l)throw d;return s.jsxs(t,{children:[s.jsxs(t.Header,{children:[s.jsx(t.Title,{asChild:!0,children:s.jsx(y,{children:a("campaigns.configuration.edit.header")})}),s.jsx(t.Description,{className:"sr-only",children:a("campaigns.configuration.edit.description")})]}),!n&&o&&s.jsx(w,{campaign:o})]})};export{T as Component};
