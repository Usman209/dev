import{u as q,a as L,b as z}from"./chunk-NOAFLTPV-CECrtNlq.js";import{L as B}from"./chunk-I3VB6NM2-AmmXZWz_.js";import{f as M}from"./chunk-IR5DHEKS-aVJcUHa1.js";import{u as O,_ as Q}from"./chunk-O6K7WXYN-IEtLIX4c.js";import{e9 as T,j as r,q as b,d as H,R as W,l as Y,a as G,du as K,ea as F,s as J,b as x,r as P,eb as R,H as E,A as j,Y as U,T as X,u as Z,e7 as $,t as d}from"./index-GdHM8J3a.js";import"./lodash-BVaveu0d.js";import{c as V}from"./chunk-MWVM4TYO-bKUcYSnf.js";import"./chunk-CIE5NZAY-CFUUFBSr.js";import{S as f}from"./chunk-LFLGEXIG-BEVlmnIQ.js";import{S as ee}from"./chunk-2RQLKDBF-BhrODVxC.js";import{u as h}from"./use-prompt-_J209GIC.js";import{P as te}from"./plus-mini-DSMfIAlw.js";import{P as se}from"./pencil-square-B-MF-3PJ.js";import{T as k}from"./trash-D-EG0M25.js";import{C as I}from"./container-wpCJPRV-.js";import{C as _}from"./checkbox-CXVQi784.js";import{c as re}from"./index-D_AuOh4I.js";import"./chunk-C76H5USB-B1q_GZpn.js";import"./chunk-YEDAFXMB-CRB0Bd55.js";import"./chunk-AOFGTNG6-C8V0V_TZ.js";import"./table-Dc7gKn83.js";import"./chunk-EMIHDNB7-CHRhNkLw.js";import"./command-bar-DfHRKvag.js";import"./index-Cjv5KQUy.js";import"./chunk-PWBTCXBJ-ChFvnlW9.js";import"./format-Ltzo7hOa.js";import"./_isIndex-BvG34TfS.js";import"./x-mark-mini-Ci-zy02q.js";import"./date-picker-DqbDKbSd.js";import"./clsx-B-dksMZM.js";import"./popover-CktwWf5C.js";import"./triangle-left-mini-Bk5yTWPC.js";import"./index-BHLYLHjw.js";import"./Trans-C_hH9ntK.js";import"./check-DKhqBFr9.js";import"./prompt-Cg4bZ6tm.js";var S="*payment_providers,*countries,+automatic_taxes",Fe=s=>{const{id:t}=s.params||{},{region:e}=T(t,{fields:S},{initialData:s.data,enabled:!!t});return e?r.jsx("span",{children:e.name}):null},ie=s=>({queryKey:F.detail(s),queryFn:async()=>J.admin.region.retrieve(s,{fields:S})}),Je=async({params:s})=>{const t=s.id,e=ie(t);return b.getQueryData(e.queryKey)??await b.fetchQuery(e)},y="c",v=10,ae=({region:s})=>{const{t}=x(),e=h(),[i,o]=P.useState({}),{searchParams:a,raw:u}=q({pageSize:v,prefix:y}),{countries:c,count:n}=L({countries:s.countries||[],...a}),m=ne(),{table:p}=O({data:c||[],columns:m,count:n,enablePagination:!0,enableRowSelection:!0,getRowId:g=>g.iso_2,pageSize:v,rowSelection:{state:i,updater:o},prefix:y,meta:{region:s}}),{mutateAsync:D}=R(s.id),A=async()=>{var C;const g=Object.keys(i).filter(l=>i[l]);if(!await e({title:t("general.areYouSure"),description:t("regions.removeCountriesWarning",{count:g.length}),verificationText:t("actions.remove"),verificationInstruction:t("general.typeToConfirm"),cancelText:t("actions.cancel"),confirmText:t("actions.remove")}))return;const N=(C=s.countries)==null?void 0:C.filter(l=>!g.includes(l.iso_2)).map(l=>l.iso_2);await D({countries:N},{onSuccess:()=>{d.success(t("regions.toast.countries"))},onError:l=>{d.error(l.message)}})};return r.jsxs(I,{className:"divide-y p-0",children:[r.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[r.jsx(E,{level:"h2",children:t("fields.countries")}),r.jsx(j,{groups:[{actions:[{label:t("regions.addCountries"),icon:r.jsx(te,{}),to:"countries/add"}]}]})]}),r.jsx(Q,{table:p,columns:m,pageSize:v,count:n,orderBy:[{key:"display_name",label:t("fields.name")},{key:"iso_2",label:t("fields.code")}],search:!0,pagination:!0,queryObject:u,prefix:y,commands:[{action:A,label:t("actions.remove"),shortcut:"r"}]})]})},oe=({country:s,region:t})=>{var c;const{t:e}=x(),i=h(),{mutateAsync:o}=R(t.id),a=(c=t.countries)==null?void 0:c.filter(n=>n.iso_2!==s.iso_2).map(n=>n.iso_2),u=async()=>{await i({title:e("general.areYouSure"),description:e("regions.removeCountryWarning",{name:s.display_name}),verificationText:s.display_name,verificationInstruction:e("general.typeToConfirm"),cancelText:e("actions.cancel"),confirmText:e("actions.remove")})&&await o({countries:a},{onSuccess:()=>{d.success(e("regions.toast.countries"))},onError:m=>{d.error(m.message)}})};return r.jsx(j,{groups:[{actions:[{label:e("actions.remove"),onClick:u,icon:r.jsx(k,{})}]}]})},w=re(),ne=()=>{const s=z();return P.useMemo(()=>[w.display({id:"select",header:({table:t})=>r.jsx(_,{checked:t.getIsSomePageRowsSelected()?"indeterminate":t.getIsAllPageRowsSelected(),onCheckedChange:e=>t.toggleAllPageRowsSelected(!!e)}),cell:({row:t})=>r.jsx(_,{checked:t.getIsSelected(),onCheckedChange:e=>t.toggleSelected(!!e),onClick:e=>{e.stopPropagation()}})}),...s,w.display({id:"actions",cell:({row:t,table:e})=>{const{region:i}=e.options.meta;return r.jsx(oe,{country:t.original,region:i})}})],[s])},ce=({region:s,pricePreferences:t})=>{var o;const{t:e}=x(),i=t==null?void 0:t.find(a=>a.attribute==="region_id"&&a.value===s.id);return r.jsxs(I,{className:"divide-y p-0",children:[r.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[r.jsx(E,{children:s.name}),r.jsx(le,{region:s})]}),r.jsx(f,{title:e("fields.currency"),value:r.jsxs("div",{className:"flex items-center gap-x-2",children:[r.jsx(U,{size:"2xsmall",className:"uppercase",children:s.currency_code}),r.jsx(X,{size:"small",leading:"compact",children:V[s.currency_code.toUpperCase()].name})]})}),r.jsx(f,{title:e("fields.automaticTaxes"),value:s.automatic_taxes?e("fields.true"):e("fields.false")}),r.jsx(f,{title:e("fields.taxInclusivePricing"),value:i!=null&&i.is_tax_inclusive?e("fields.true"):e("fields.false")}),r.jsx(f,{title:e("fields.paymentProviders"),value:r.jsx("div",{className:"inline-flex",children:(o=s.payment_providers)!=null&&o.length?r.jsx(B,{list:s.payment_providers.map(a=>M(a.id))}):"-"})})]})},le=({region:s})=>{const t=Z(),{t:e}=x(),{mutateAsync:i}=$(s.id),o=h(),a=async()=>{await o({title:e("general.areYouSure"),description:e("regions.deleteRegionWarning",{name:s.name}),verificationText:s.name,verificationInstruction:e("general.typeToConfirm"),confirmText:e("actions.delete"),cancelText:e("actions.cancel")})&&await i(void 0,{onSuccess:()=>{d.success(e("regions.toast.delete")),t("/settings/regions",{replace:!0})},onError:c=>{d.error(c.message)}})};return r.jsx(j,{groups:[{actions:[{icon:r.jsx(se,{}),label:e("actions.edit"),to:`/settings/regions/${s.id}/edit`}]},{actions:[{icon:r.jsx(k,{}),label:e("actions.delete"),onClick:a}]}]})},Ue=()=>{const s=H(),{id:t}=W(),{region:e,isPending:i,isError:o,error:a}=T(t,{fields:S},{initialData:s}),{price_preferences:u,isPending:c,isError:n,error:m}=Y({attribute:"region_id",value:t},{enabled:!!e}),{getWidgets:p}=G();if(i||c||!e)return r.jsx(K,{sections:2,showJSON:!0,showMetadata:!0});if(o)throw a;if(n)throw m;return r.jsxs(ee,{widgets:{before:p("region.details.before"),after:p("region.details.after")},data:e,showMetadata:!0,showJSON:!0,children:[r.jsx(ce,{region:e,pricePreferences:u??[]}),r.jsx(ae,{region:e})]})};export{Fe as Breadcrumb,Ue as Component,Je as loader};
