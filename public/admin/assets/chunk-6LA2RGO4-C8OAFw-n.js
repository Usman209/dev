import{r as v}from"./chunk-ICR3D7SB-Co5FJKPM.js";import{co as y,s,aI as d,q as i,aW as r,cU as l}from"./index-GdHM8J3a.js";var m="exchanges",o=l(m),g=(a,n,t)=>{const{data:e,...u}=y({queryFn:async()=>s.admin.exchange.retrieve(a,n),queryKey:o.detail(a,n),...t});return{...e,...u}},h=(a,n)=>{const{data:t,...e}=y({queryFn:async()=>s.admin.exchange.list(a),queryKey:o.list(a),...n});return{...t,...e}},b=(a,n)=>d({mutationFn:t=>s.admin.exchange.create(t),onSuccess:(t,e,u)=>{i.invalidateQueries({queryKey:r.details()}),i.invalidateQueries({queryKey:r.preview(a)}),i.invalidateQueries({queryKey:o.lists()})},...n}),q=(a,n,t)=>d({mutationFn:()=>s.admin.exchange.cancel(a),onSuccess:(e,u,c)=>{i.invalidateQueries({queryKey:r.details()}),i.invalidateQueries({queryKey:r.preview(n)}),i.invalidateQueries({queryKey:o.details()}),i.invalidateQueries({queryKey:o.lists()})},...t}),K=(a,n,t)=>d({mutationFn:e=>s.admin.exchange.addInboundItems(a,e),onSuccess:(e,u,c)=>{i.invalidateQueries({queryKey:r.preview(n)})},...t}),Q=(a,n,t)=>d({mutationFn:({actionId:e,...u})=>s.admin.exchange.updateInboundItem(a,e,u),onSuccess:(e,u,c)=>{i.invalidateQueries({queryKey:r.preview(n)})},...t}),S=(a,n,t)=>d({mutationFn:e=>s.admin.exchange.removeInboundItem(a,e),onSuccess:(e,u,c)=>{i.invalidateQueries({queryKey:r.details()}),i.invalidateQueries({queryKey:r.preview(n)}),i.invalidateQueries({queryKey:v.details()})},...t}),I=(a,n,t)=>d({mutationFn:e=>s.admin.exchange.addInboundShipping(a,e),onSuccess:(e,u,c)=>{i.invalidateQueries({queryKey:r.preview(n)})},...t}),E=(a,n,t)=>d({mutationFn:({actionId:e,...u})=>s.admin.exchange.updateInboundShipping(a,e,u),onSuccess:(e,u,c)=>{i.invalidateQueries({queryKey:r.preview(n)})},...t}),F=(a,n,t)=>d({mutationFn:e=>s.admin.exchange.deleteInboundShipping(a,e),onSuccess:(e,u,c)=>{i.invalidateQueries({queryKey:r.preview(n)})},...t}),w=(a,n,t)=>d({mutationFn:e=>s.admin.exchange.addOutboundItems(a,e),onSuccess:(e,u,c)=>{i.invalidateQueries({queryKey:r.preview(n)})},...t}),O=(a,n,t)=>d({mutationFn:({actionId:e,...u})=>s.admin.exchange.updateOutboundItem(a,e,u),onSuccess:(e,u,c)=>{i.invalidateQueries({queryKey:r.preview(n)})},...t}),C=(a,n,t)=>d({mutationFn:e=>s.admin.exchange.removeOutboundItem(a,e),onSuccess:(e,u,c)=>{i.invalidateQueries({queryKey:r.details()}),i.invalidateQueries({queryKey:r.preview(n)})},...t}),R=(a,n,t)=>d({mutationFn:e=>s.admin.exchange.addOutboundShipping(a,e),onSuccess:(e,u,c)=>{i.invalidateQueries({queryKey:r.preview(n)})},...t}),U=(a,n,t)=>d({mutationFn:({actionId:e,...u})=>s.admin.exchange.updateOutboundShipping(a,e,u),onSuccess:(e,u,c)=>{i.invalidateQueries({queryKey:r.preview(n)})},...t}),A=(a,n,t)=>d({mutationFn:e=>s.admin.exchange.deleteOutboundShipping(a,e),onSuccess:(e,u,c)=>{i.invalidateQueries({queryKey:r.preview(n)})},...t}),f=(a,n,t)=>d({mutationFn:e=>s.admin.exchange.request(a,e),onSuccess:(e,u,c)=>{i.invalidateQueries({queryKey:v.all}),i.invalidateQueries({queryKey:r.details()}),i.invalidateQueries({queryKey:r.preview(n)}),i.invalidateQueries({queryKey:o.lists()})},...t}),k=(a,n,t)=>d({mutationFn:()=>s.admin.exchange.cancelRequest(a),onSuccess:(e,u,c)=>{i.invalidateQueries({queryKey:r.details()}),i.invalidateQueries({queryKey:r.preview(n)}),i.invalidateQueries({queryKey:o.details()}),i.invalidateQueries({queryKey:o.lists()})},...t});export{h as a,q as b,b as c,g as d,f as e,E as f,U as g,I as h,F as i,K as j,Q as k,S as l,R as m,A as n,w as o,O as p,C as q,k as u};
