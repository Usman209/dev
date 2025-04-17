import{c as E,g as F}from"./chunk-MWVM4TYO-bKUcYSnf.js";import{b as L,g as $,v as h,r as N,j as e,H as _,T as v,w as s,x as p}from"./index-GdHM8J3a.js";import{R as b}from"./radio-group-D3K9MVVo.js";import{T}from"./textarea-BVPn2bbS.js";import{D as I}from"./date-picker-DqbDKbSd.js";import{S as u}from"./select-_u6JRq_j.js";import{C as M}from"./currency-input-Cv6VkBMb.js";var G=({form:a,fieldScope:n=""})=>{var y;const{t}=L(),{store:m}=$(),j=h({control:a.control,name:`${n}budget.type`}),c=j==="spend",x=h({control:a.control,name:`${n}budget.currency_code`}),o=h({control:a.control,name:"application_method.currency_code"}),d=x||o;if(N.useEffect(()=>{a.setValue(`${n}budget.limit`,null),c&&a.setValue("campaign.budget.currency_code",o),j==="usage"&&a.setValue("campaign.budget.currency_code",null)},[j]),o){const r=(y=a.getValues().campaign)==null?void 0:y.budget,i=r==null?void 0:r.currency_code;(r==null?void 0:r.type)==="spend"&&i!==o&&a.setValue("campaign.budget.currency_code",o)}return e.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8",children:[e.jsxs("div",{children:[e.jsx(_,{children:t("campaigns.create.header")}),e.jsx(v,{size:"small",className:"text-ui-fg-subtle",children:t("campaigns.create.hint")})]}),e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[e.jsx(s.Field,{control:a.control,name:`${n}name`,render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:t("fields.name")}),e.jsx(s.Control,{children:e.jsx(p,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:a.control,name:`${n}campaign_identifier`,render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:t("campaigns.fields.identifier")}),e.jsx(s.Control,{children:e.jsx(p,{...r})}),e.jsx(s.ErrorMessage,{})]})})]}),e.jsx(s.Field,{control:a.control,name:`${n}description`,render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:t("fields.description")}),e.jsx(s.Control,{children:e.jsx(T,{...r})}),e.jsx(s.ErrorMessage,{})]})})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[e.jsx(s.Field,{control:a.control,name:`${n}starts_at`,render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:t("campaigns.fields.start_date")}),e.jsx(s.Control,{children:e.jsx(I,{granularity:"minute",shouldCloseOnSelect:!1,...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:a.control,name:`${n}ends_at`,render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:t("campaigns.fields.end_date")}),e.jsx(s.Control,{children:e.jsx(I,{granularity:"minute",shouldCloseOnSelect:!1,...r})}),e.jsx(s.ErrorMessage,{})]})})]}),e.jsxs("div",{children:[e.jsx(_,{children:t("campaigns.budget.create.header")}),e.jsx(v,{size:"small",className:"text-ui-fg-subtle",children:t("campaigns.budget.create.hint")})]}),e.jsx(s.Field,{control:a.control,name:`${n}budget.type`,render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{tooltip:n!=null&&n.length&&!d?t("promotions.tooltips.campaignType"):void 0,children:t("campaigns.budget.fields.type")}),e.jsx(s.Control,{children:e.jsxs(b,{className:"flex gap-y-3",...r,onValueChange:r.onChange,children:[e.jsx(b.ChoiceBox,{value:"usage",label:t("campaigns.budget.type.usage.title"),description:t("campaigns.budget.type.usage.description")}),e.jsx(b.ChoiceBox,{value:"spend",label:t("campaigns.budget.type.spend.title"),description:t("campaigns.budget.type.spend.description"),disabled:n!=null&&n.length?!d:!1})]})}),e.jsx(s.ErrorMessage,{})]})}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[c&&e.jsx(s.Field,{control:a.control,name:`${n}budget.currency_code`,render:({field:{onChange:r,ref:i,...g}})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{tooltip:n!=null&&n.length&&!d?t("promotions.campaign_currency.tooltip"):void 0,children:t("fields.currency")}),e.jsx(s.Control,{children:e.jsxs(u,{...g,onValueChange:r,disabled:!!n.length,children:[e.jsx(u.Trigger,{ref:i,children:e.jsx(u.Value,{})}),e.jsx(u.Content,{children:Object.values(E).filter(l=>{var C;return!!((C=m==null?void 0:m.supported_currencies)!=null&&C.find(V=>V.currency_code===l.code.toLocaleLowerCase()))}).map(l=>e.jsx(u.Item,{value:l.code.toLowerCase(),children:l.name},l.code))})]})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:a.control,name:`${n}budget.limit`,render:({field:{onChange:r,value:i,...g}})=>e.jsxs(s.Item,{className:"basis-1/2",children:[e.jsx(s.Label,{tooltip:!d&&c?t("promotions.fields.amount.tooltip"):void 0,children:t("campaigns.budget.fields.limit")}),e.jsx(s.Control,{children:c?e.jsx(M,{min:0,onValueChange:l=>r(l?parseInt(l):""),code:x,symbol:x?F(x):"",...g,value:i,disabled:!d&&c}):e.jsx(p,{type:"number",...g,min:0,value:i,onChange:l=>{r(l.target.value===""?null:parseInt(l.target.value))}},"usage")}),e.jsx(s.ErrorMessage,{})]})})]})]})};export{G as C};
