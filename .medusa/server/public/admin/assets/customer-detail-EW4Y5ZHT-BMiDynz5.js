import{u as H,a as K,b as Q}from"./chunk-ZJRFL6ZN-BBfxGl6t.js";import{u as Y,a as J,b as U}from"./chunk-XMAWMECC-CRuzo6Bm.js";import{ba as z,j as e,R as X,d as Z,a as W,du as V,q as ee,b as h,u as G,dJ as se,H as j,L as O,m as te,A as v,dK as re,T as m,r as k,dB as ae,k as B,dL as ie,bn as l,B as oe,aR as ne,p as ce,s as le,t as x,dM as de}from"./index-GdHM8J3a.js";import{u as I,_ as L}from"./chunk-O6K7WXYN-IEtLIX4c.js";import"./lodash-BVaveu0d.js";import{N as me}from"./chunk-EMIHDNB7-CHRhNkLw.js";import"./chunk-CIE5NZAY-CFUUFBSr.js";import{T as S}from"./chunk-2RQLKDBF-BhrODVxC.js";import{u as y}from"./use-prompt-_J209GIC.js";import{T as R}from"./trash-D-EG0M25.js";import{P as M}from"./pencil-square-B-MF-3PJ.js";import{A as ue}from"./arrow-path-BpiZQfIo.js";import{C as b}from"./container-wpCJPRV-.js";import{S as pe}from"./status-badge-BN_s37S4.js";import{C as E}from"./checkbox-CXVQi784.js";import{c as F}from"./index-D_AuOh4I.js";import"./chunk-C76H5USB-B1q_GZpn.js";import"./chunk-MSDRGCRR-oUhA3vxh.js";import"./chunk-P3UUX2T6-1eI8ZyrA.js";import"./chunk-LU7VJVTE-B5lCI34I.js";import"./chunk-PWBTCXBJ-ChFvnlW9.js";import"./format-Ltzo7hOa.js";import"./chunk-NNBHHXXN-DERvVIRh.js";import"./chunk-PDWBYQOW-BedvhUOI.js";import"./chunk-MWVM4TYO-bKUcYSnf.js";import"./chunk-7DXVXBSA-CCclXhoB.js";import"./chunk-ADOCJB6L-D19yuKNw.js";import"./react-country-flag.esm-BMeNdzx4.js";import"./chunk-YEDAFXMB-CRB0Bd55.js";import"./chunk-AOFGTNG6-C8V0V_TZ.js";import"./table-Dc7gKn83.js";import"./command-bar-DfHRKvag.js";import"./index-Cjv5KQUy.js";import"./plus-mini-DSMfIAlw.js";import"./_isIndex-BvG34TfS.js";import"./x-mark-mini-Ci-zy02q.js";import"./date-picker-DqbDKbSd.js";import"./clsx-B-dksMZM.js";import"./popover-CktwWf5C.js";import"./triangle-left-mini-Bk5yTWPC.js";import"./index-BHLYLHjw.js";import"./Trans-C_hH9ntK.js";import"./check-DKhqBFr9.js";import"./prompt-Cg4bZ6tm.js";var js=t=>{const{id:s}=t.params||{},{customer:r}=z(s,void 0,{initialData:t.data,enabled:!!s});if(!r)return null;const n=[r.first_name,r.last_name].filter(Boolean).join(" ")||r.email;return e.jsx("span",{children:n})},xe=({labelKey:t,descriptionKey:s,children:r})=>e.jsx("div",{className:"flex flex-col gap-2 px-2 pb-2",children:e.jsx("div",{className:"shadow-elevation-card-rest bg-ui-bg-component transition-fg hover:bg-ui-bg-component-hover active:bg-ui-bg-component-pressed group-focus-visible:shadow-borders-interactive-with-active rounded-md px-4 py-2",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"flex flex-1 flex-col",children:[e.jsx(m,{size:"small",leading:"compact",weight:"plus",children:t}),e.jsx(m,{size:"small",leading:"compact",className:"text-ui-fg-subtle",children:s})]}),e.jsx("div",{className:"flex size-7 items-center justify-center",children:r})]})})}),ge=({customer:t})=>{const{t:s}=h(),r=y(),a=G(),{mutateAsync:n}=se(t.id),c=t.addresses??[],o=async i=>{await r({title:s("general.areYouSure"),description:s("general.areYouSureDescription",{entity:s("fields.address"),title:i.address_name??"n/a"}),verificationInstruction:s("general.typeToConfirm"),verificationText:i.address_name??"address",confirmText:s("actions.delete"),cancelText:s("actions.cancel")})&&await n(i.id,{onSuccess:()=>{x.success(s("general.success",{name:i.address_name??"address"})),a(`/customers/${t.id}`,{replace:!0})},onError:u=>{x.error(u.message)}})};return e.jsxs(b,{className:"p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(j,{level:"h2",children:s("addresses.title")}),e.jsx(O,{to:"create-address",className:"text-ui-fg-muted text-xs",children:"Add"})]}),c.length===0&&e.jsx(me,{className:te({"flex h-full flex-col overflow-hidden border-t p-6":!0}),icon:null,title:s("general.noRecordsTitle"),message:s("general.noRecordsMessage")}),c.map(i=>e.jsx(xe,{labelKey:i.address_name??"n/a",descriptionKey:[i.address_1,i.address_2].join(" "),children:e.jsx(v,{groups:[{actions:[{icon:e.jsx(R,{}),label:s("actions.delete"),onClick:async()=>{await o(i)}}]}]})},i.id))]})},fe=({customer:t})=>{const{t:s}=h(),r=y(),a=G(),{mutateAsync:n}=re(t.id),c=[t.first_name,t.last_name].filter(Boolean).join(" "),o=t.has_account?"green":"orange",i=t.has_account?s("customers.fields.registered"):s("customers.fields.guest"),g=async()=>{await r({title:s("customers.delete.title"),description:s("customers.delete.description",{email:t.email}),verificationInstruction:s("general.typeToConfirm"),verificationText:t.email,confirmText:s("actions.delete"),cancelText:s("actions.cancel")})&&await n(void 0,{onSuccess:()=>{x.success(s("customers.delete.successToast",{email:t.email})),a("/customers",{replace:!0})},onError:f=>{x.error(f.message)}})};return e.jsxs(b,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(j,{children:t.email}),e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(pe,{color:o,children:i}),e.jsx(v,{groups:[{actions:[{label:s("actions.edit"),icon:e.jsx(M,{}),to:"edit"}]},{actions:[{label:s("actions.delete"),icon:e.jsx(R,{}),onClick:g}]}]})]})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(m,{size:"small",leading:"compact",weight:"plus",children:s("fields.name")}),e.jsx(m,{size:"small",leading:"compact",children:c||"-"})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(m,{size:"small",leading:"compact",weight:"plus",children:s("fields.company")}),e.jsx(m,{size:"small",leading:"compact",children:t.company_name||"-"})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(m,{size:"small",leading:"compact",weight:"plus",children:s("fields.phone")}),e.jsx(m,{size:"small",leading:"compact",children:t.phone||"-"})]})]})},T=10,_="cusgr",he=({customer:t})=>{const s=y(),[r,a]=k.useState({}),{raw:n,searchParams:c}=H({pageSize:T,prefix:_}),{customer_groups:o,count:i,isLoading:g,isError:u,error:f}=ae({...c,fields:"+customers.id",customers:{id:t.id}},{placeholderData:B}),{mutateAsync:C}=ie(t.id),w=K(),D=ve(t.id),{table:q}=I({data:o??[],columns:D,count:i,getRowId:p=>p.id,enablePagination:!0,enableRowSelection:!0,pageSize:T,prefix:_,rowSelection:{state:r,updater:a}}),$=async()=>{const p=Object.keys(r);await s({title:l("general.areYouSure"),description:l("customers.groups.removeMany",{groups:o==null?void 0:o.filter(d=>p.includes(d.id)).map(d=>d.name).join(",")}),confirmText:l("actions.remove"),cancelText:l("actions.cancel")})&&await C({remove:p},{onSuccess:()=>{x.success(l("customers.groups.removed.success",{groups:o.filter(d=>p.includes(d.id)).map(d=>d==null?void 0:d.name)}))},onError:d=>{x.error(d.message)}})};if(u)throw f;return e.jsxs(b,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(j,{level:"h2",children:l("customerGroups.domain")}),e.jsx(O,{to:`/customers/${t.id}/add-customer-groups`,children:e.jsx(oe,{variant:"secondary",size:"small",children:l("general.add")})})]}),e.jsx(L,{table:q,columns:D,pageSize:T,isLoading:g,count:i,prefix:_,navigateTo:p=>`/customer-groups/${p.id}`,filters:w,search:!0,pagination:!0,orderBy:[{key:"name",label:l("fields.name")},{key:"created_at",label:l("fields.createdAt")},{key:"updated_at",label:l("fields.updatedAt")}],commands:[{action:$,label:l("actions.remove"),shortcut:"r"}],queryObject:n,noRecords:{message:l("customers.groups.list.noRecordsMessage")}})]})},je=({group:t,customerId:s})=>{const r=y(),{t:a}=h(),{mutateAsync:n}=de(t.id),c=async()=>{await r({title:a("general.areYouSure"),description:a("customers.groups.remove",{name:t.name}),confirmText:a("actions.remove"),cancelText:a("actions.cancel")})&&await n([s],{onError:i=>{x.error(i.message)}})};return e.jsx(v,{groups:[{actions:[{label:a("actions.edit"),icon:e.jsx(M,{}),to:`/customer-groups/${t.id}/edit`},{label:a("actions.remove"),onClick:c,icon:e.jsx(R,{})}]}]})},P=F(),ve=t=>{const s=Q();return k.useMemo(()=>[P.display({id:"select",header:({table:r})=>e.jsx(E,{checked:r.getIsSomePageRowsSelected()?"indeterminate":r.getIsAllPageRowsSelected(),onCheckedChange:a=>r.toggleAllPageRowsSelected(!!a)}),cell:({row:r})=>e.jsx(E,{checked:r.getIsSelected(),onCheckedChange:a=>r.toggleSelected(!!a),onClick:a=>{a.stopPropagation()}})}),...s,P.display({id:"actions",cell:({row:r})=>e.jsx(je,{group:r.original,customerId:t})})],[s,t])},A="cusord",N=10,ye="*customer,*items,*sales_channel",be="id,status,display_id,created_at,email,fulfillment_status,payment_status,total,currency_code",Ce=({customer:t})=>{const{t:s}=h(),{searchParams:r,raw:a}=Y({pageSize:N,prefix:A}),{orders:n,count:c,isLoading:o,isError:i,error:g}=ne({customer_id:t.id,fields:be+","+ye,...r},{placeholderData:B}),u=Te(),f=J(),{table:C}=I({data:n??[],columns:u,enablePagination:!0,count:c,pageSize:N,prefix:A});if(i)throw g;return e.jsxs(b,{className:"divide-y p-0",children:[e.jsx("div",{className:"flex items-center justify-between px-6 py-4",children:e.jsx(j,{level:"h2",children:s("orders.domain")})}),e.jsx(L,{columns:u,table:C,pagination:!0,navigateTo:w=>`/orders/${w.original.id}`,filters:f,count:c,isLoading:o,pageSize:N,orderBy:[{key:"display_id",label:s("orders.fields.displayId")},{key:"created_at",label:s("fields.createdAt")},{key:"updated_at",label:s("fields.updatedAt")}],search:!0,queryObject:a,prefix:A})]})},we=({order:t})=>{const{t:s}=h();return e.jsx(v,{groups:[{actions:[{label:s("transferOwnership.label"),to:`${t.id}/transfer`,icon:e.jsx(ue,{})}]}]})},Se=F(),Te=()=>{const t=U({exclude:["customer"]});return k.useMemo(()=>[...t,Se.display({id:"actions",cell:({row:s})=>e.jsx(we,{order:s.original})})],[t])},vs=()=>{const{id:t}=X(),s=Z(),{customer:r,isLoading:a,isError:n,error:c}=z(t,{fields:"+*addresses"},{initialData:s}),{getWidgets:o}=W();if(a||!r)return e.jsx(V,{sections:2,showJSON:!0,showMetadata:!0});if(n)throw c;return e.jsxs(S,{widgets:{before:o("customer.details.before"),after:o("customer.details.after"),sideAfter:o("customer.details.side.after"),sideBefore:o("customer.details.side.before")},data:r,hasOutlet:!0,showJSON:!0,showMetadata:!0,children:[e.jsxs(S.Main,{children:[e.jsx(fe,{customer:r}),e.jsx(Ce,{customer:r}),e.jsx(he,{customer:r})]}),e.jsx(S.Sidebar,{children:e.jsx(ge,{customer:r})})]})},_e=t=>({queryKey:ce.detail(t),queryFn:async()=>le.admin.customer.retrieve(t,{fields:"+*addresses"})}),ys=async({params:t})=>{const s=t.id,r=_e(s);return ee.ensureQueryData(r)};export{js as Breadcrumb,vs as Component,ys as loader};
