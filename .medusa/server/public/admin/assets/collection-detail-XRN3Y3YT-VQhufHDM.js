import{u as _,a as q}from"./chunk-PCFUZKDS-YZnipwp3.js";import{dt as j,j as o,d as I,R as z,a as M,du as W,q as B,b as p,u as H,dr as L,H as b,A as g,T as f,e as O,k as Q,dv as C,W as Y,r as $,dw as F,s as G,t as d}from"./index-GdHM8J3a.js";import{u as J,_ as K}from"./chunk-O6K7WXYN-IEtLIX4c.js";import"./lodash-BVaveu0d.js";import{u as U}from"./chunk-2WQFRVK5-DxRxRRmN.js";import"./chunk-CIE5NZAY-CFUUFBSr.js";import{S as Z}from"./chunk-2RQLKDBF-BhrODVxC.js";import{u as x}from"./use-prompt-_J209GIC.js";import{P as S}from"./pencil-square-B-MF-3PJ.js";import{T as P}from"./trash-D-EG0M25.js";import{C as w}from"./container-wpCJPRV-.js";import{C as v}from"./checkbox-CXVQi784.js";import{c as V}from"./index-D_AuOh4I.js";import"./chunk-IQBAUTU5-DOY187sJ.js";import"./chunk-ADOCJB6L-D19yuKNw.js";import"./chunk-P3UUX2T6-1eI8ZyrA.js";import"./chunk-C76H5USB-B1q_GZpn.js";import"./chunk-YEDAFXMB-CRB0Bd55.js";import"./chunk-AOFGTNG6-C8V0V_TZ.js";import"./table-Dc7gKn83.js";import"./chunk-EMIHDNB7-CHRhNkLw.js";import"./plus-mini-DSMfIAlw.js";import"./command-bar-DfHRKvag.js";import"./index-Cjv5KQUy.js";import"./chunk-PWBTCXBJ-ChFvnlW9.js";import"./format-Ltzo7hOa.js";import"./_isIndex-BvG34TfS.js";import"./x-mark-mini-Ci-zy02q.js";import"./date-picker-DqbDKbSd.js";import"./clsx-B-dksMZM.js";import"./popover-CktwWf5C.js";import"./triangle-left-mini-Bk5yTWPC.js";import"./index-BHLYLHjw.js";import"./Trans-C_hH9ntK.js";import"./check-DKhqBFr9.js";import"./prompt-Cg4bZ6tm.js";var Le=s=>{const{id:e}=s.params||{},{collection:t}=j(e,{initialData:s.data,enabled:!!e});return t?o.jsx("span",{children:t.title}):null},X=({collection:s})=>{const{t:e}=p(),t=x(),r=H(),{mutateAsync:i}=L(s.id),a=async()=>{await t({title:e("general.areYouSure"),description:e("collections.deleteWarning",{count:1,title:s.title})})&&(await i(),r("../",{replace:!0}))};return o.jsxs(w,{className:"divide-y p-0",children:[o.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[o.jsx(b,{children:s.title}),o.jsx(g,{groups:[{actions:[{icon:o.jsx(S,{}),label:e("actions.edit"),to:`/collections/${s.id}/edit`,disabled:!s.id}]},{actions:[{icon:o.jsx(P,{}),label:e("actions.delete"),onClick:a,disabled:!s.id}]}]})]}),o.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[o.jsx(f,{size:"small",leading:"compact",weight:"plus",children:e("fields.handle")}),o.jsxs(f,{size:"small",children:["/",s.handle]})]})]})},l=10,ee=({collection:s})=>{const{t:e}=p(),{searchParams:t,raw:r}=_({pageSize:l}),{products:i,count:a,isLoading:n,isError:u,error:T}=O({limit:l,...t,collection_id:[s.id]},{placeholderData:Q}),k=U(["collections"]),h=se(),{table:D}=J({data:i??[],columns:h,getRowId:c=>c.id,count:a,enablePagination:!0,enableRowSelection:!0,pageSize:l,meta:{collectionId:s.id}}),A=x(),{mutateAsync:R}=C(s.id),E=async c=>{const m=Object.keys(c);await A({title:e("general.areYouSure"),description:e("collections.removeProductsWarning",{count:m.length}),confirmText:e("actions.remove"),cancelText:e("actions.cancel")})&&await R({remove:m},{onSuccess:()=>{d.success(e("collections.products.remove.successToast",{count:m.length}))},onError:N=>{d.error(N.message)}})};if(u)throw T;return o.jsxs(w,{className:"divide-y p-0",children:[o.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[o.jsx(b,{level:"h2",children:e("products.domain")}),o.jsx(g,{groups:[{actions:[{icon:o.jsx(Y,{}),label:e("actions.add"),to:"products"}]}]})]}),o.jsx(K,{table:D,columns:h,search:!0,pagination:!0,pageSize:l,navigateTo:({original:c})=>`/products/${c.id}`,count:a,filters:k,isLoading:n,orderBy:[{key:"title",label:e("fields.title")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}],queryObject:r,commands:[{action:E,label:e("actions.remove"),shortcut:"r"}],noRecords:{message:e("collections.products.list.noRecordsMessage")}})]})},te=({product:s,collectionId:e})=>{const{t}=p(),r=x(),{mutateAsync:i}=C(e),a=async()=>{await r({title:t("general.areYouSure"),description:t("collections.removeSingleProductWarning",{title:s.title}),confirmText:t("actions.remove"),cancelText:t("actions.cancel")})&&await i({remove:[s.id]},{onSuccess:()=>{d.success(t("collections.products.remove.successToast",{count:1}))},onError:u=>{d.error(u.message)}})};return o.jsx(g,{groups:[{actions:[{icon:o.jsx(S,{}),label:t("actions.edit"),to:`/products/${s.id}/edit`}]},{actions:[{icon:o.jsx(P,{}),label:t("actions.remove"),onClick:a}]}]})},y=V(),se=()=>{const s=q();return $.useMemo(()=>[y.display({id:"select",header:({table:e})=>o.jsx(v,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:t=>e.toggleAllPageRowsSelected(!!t)}),cell:({row:e})=>o.jsx(v,{checked:e.getIsSelected(),onCheckedChange:t=>e.toggleSelected(!!t),onClick:t=>{t.stopPropagation()}})}),...s,y.display({id:"actions",cell:({row:e,table:t})=>{const{collectionId:r}=t.options.meta;return o.jsx(te,{product:e.original,collectionId:r})}})],[s])},Oe=()=>{const s=I(),{id:e}=z(),{collection:t,isLoading:r,isError:i,error:a}=j(e,{initialData:s}),{getWidgets:n}=M();if(r||!t)return o.jsx(W,{sections:2,showJSON:!0,showMetadata:!0});if(i)throw a;return o.jsxs(Z,{widgets:{after:n("product_collection.details.after"),before:n("product_collection.details.before")},showJSON:!0,showMetadata:!0,data:t,children:[o.jsx(X,{collection:t}),o.jsx(ee,{collection:t})]})},oe=s=>({queryKey:F.detail(s),queryFn:async()=>G.admin.productCollection.retrieve(s)}),Qe=async({params:s})=>{const e=s.id,t=oe(e);return B.ensureQueryData(t)};export{Le as Breadcrumb,Oe as Component,Qe as loader};
