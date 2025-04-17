import{K as F}from"./chunk-6HTZNHPT-CGSbGn11.js";import{b as u,u as R}from"./chunk-ZCO6EK4W-CX69Xo4z.js";import{a6 as h,R as E,b as w,dX as k,dY as C,cZ as I,j as e,H as N,a8 as T,a9 as z,dZ as L,t as _,w as s,x as M,B as q,T as S}from"./index-GdHM8J3a.js";import{S as m}from"./select-_u6JRq_j.js";import{T as V}from"./textarea-BVPn2bbS.js";import"./prompt-Cg4bZ6tm.js";import"./triangles-mini-GR_5DSVU.js";import"./check-DKhqBFr9.js";var A=h.object({location_id:h.string(),description:h.string().optional(),quantity:h.number().min(1)}),p=({title:t,value:r})=>e.jsxs("div",{className:"grid grid-cols-2 divide-x",children:[e.jsx(S,{className:"px-2 py-1.5",size:"small",leading:"compact",children:t}),e.jsx(S,{className:"px-2 py-1.5",size:"small",leading:"compact",children:r})]}),B=t=>({quantity:t.quantity,location_id:t.location_id,description:t.description??void 0}),D=({reservation:t,item:r,locations:l})=>{const{t:i}=w(),{handleSuccess:f}=R(),o=T({defaultValues:B(t),resolver:z(A)}),{mutateAsync:a}=L(t.id),j=o.handleSubmit(async n=>{a(n,{onSuccess:()=>{_.success(i("inventory.reservation.updateSuccessToast")),f()},onError:x=>{_.error(x.message)}})}),y=o.watch("quantity"),v=o.watch("location_id"),c=r.location_levels.find(n=>n.location_id===v);return e.jsx(u.Form,{form:o,children:e.jsxs(F,{onSubmit:j,className:"flex flex-1 flex-col overflow-hidden",children:[e.jsxs(u.Body,{className:"flex flex-1 flex-col gap-y-8 overflow-auto",children:[e.jsx(s.Field,{control:o.control,name:"location_id",render:({field:{onChange:n,value:x,ref:g,...b}})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:i("inventory.reservation.location")}),e.jsx(s.Control,{children:e.jsxs(m,{value:x,onValueChange:d=>{n(d)},...b,children:[e.jsx(m.Trigger,{ref:g,children:e.jsx(m.Value,{})}),e.jsx(m.Content,{children:(l||[]).map(d=>e.jsx(m.Item,{value:d.id,children:d.name},d.id))})]})}),e.jsx(s.ErrorMessage,{})]})}),e.jsxs("div",{className:"text-ui-fg-subtle shadow-elevation-card-rest grid grid-rows-4 divide-y rounded-lg border",children:[e.jsx(p,{title:i("fields.title"),value:r.title??r.sku}),e.jsx(p,{title:i("fields.sku"),value:r.sku}),e.jsx(p,{title:i("fields.inStock"),value:c.stocked_quantity}),e.jsx(p,{title:i("inventory.available"),value:c.stocked_quantity-(c.reserved_quantity-t.quantity)-y})]}),e.jsx(s.Field,{control:o.control,name:"quantity",render:({field:{onChange:n,value:x,...g}})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:i("inventory.reservation.reservedAmount")}),e.jsx(s.Control,{children:e.jsx(M,{type:"number",min:0,max:(c.available_quantity||0)+(t.quantity||0),value:x||"",onChange:b=>{const d=b.target.value;n(d===""?null:parseFloat(d))},...g})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:o.control,name:"description",render:({field:n})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:i("fields.description")}),e.jsx(s.Control,{children:e.jsx(V,{...n})}),e.jsx(s.ErrorMessage,{})]})})]}),e.jsx(u.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(u.Close,{asChild:!0,children:e.jsx(q,{variant:"secondary",size:"small",children:i("actions.cancel")})}),e.jsx(q,{type:"submit",size:"small",isLoading:!1,children:i("actions.save")})]})})]})})},Y=()=>{var v;const{id:t}=E(),{t:r}=w(),{reservation:l,isPending:i,isError:f,error:o}=k(t),{inventory_item:a}=C(l==null?void 0:l.inventory_item_id,{enabled:!!l}),{stock_locations:j}=I({id:(v=a==null?void 0:a.location_levels)==null?void 0:v.map(c=>c.location_id)},{enabled:!!(a!=null&&a.location_levels)}),y=!i&&l&&a&&j;if(f)throw o;return e.jsxs(u,{children:[e.jsx(u.Header,{children:e.jsx(N,{children:r("inventory.reservation.editItemDetails")})}),y&&e.jsx(D,{locations:j,reservation:l,item:a})]})};export{Y as Component};
