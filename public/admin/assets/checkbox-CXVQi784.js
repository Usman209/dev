import{bB as D,r as t,bE as B,bQ as H,j as b,bF as j,bG as R,bH as L,bX as O,bY as A,m as P,cL as K,bp as X}from"./index-GdHM8J3a.js";var E="Checkbox",[q,J]=D(E),[z,F]=q(E),S=t.forwardRef((e,a)=>{const{__scopeCheckbox:r,name:s,checked:p,defaultChecked:n,required:f,disabled:d,value:k="on",onCheckedChange:x,form:u,...C}=e,[c,m]=t.useState(null),v=B(a,o=>m(o)),g=t.useRef(!1),y=c?u||!!c.closest("form"):!0,[l=!1,w]=H({prop:p,defaultProp:n,onChange:x}),_=t.useRef(l);return t.useEffect(()=>{const o=c==null?void 0:c.form;if(o){const h=()=>w(_.current);return o.addEventListener("reset",h),()=>o.removeEventListener("reset",h)}},[c,w]),b.jsxs(z,{scope:r,state:l,disabled:d,children:[b.jsx(j.button,{type:"button",role:"checkbox","aria-checked":i(l)?"mixed":l,"aria-required":f,"data-state":M(l),"data-disabled":d?"":void 0,disabled:d,value:k,...C,ref:v,onKeyDown:R(e.onKeyDown,o=>{o.key==="Enter"&&o.preventDefault()}),onClick:R(e.onClick,o=>{w(h=>i(h)?!0:!h),y&&(g.current=o.isPropagationStopped(),g.current||o.stopPropagation())})}),y&&b.jsx(T,{control:c,bubbles:!g.current,name:s,value:k,checked:l,required:f,disabled:d,form:u,style:{transform:"translateX(-100%)"},defaultChecked:i(n)?!1:n})]})});S.displayName=E;var I="CheckboxIndicator",N=t.forwardRef((e,a)=>{const{__scopeCheckbox:r,forceMount:s,...p}=e,n=F(I,r);return b.jsx(L,{present:s||i(n.state)||n.state===!0,children:b.jsx(j.span,{"data-state":M(n.state),"data-disabled":n.disabled?"":void 0,...p,ref:a,style:{pointerEvents:"none",...e.style}})})});N.displayName=I;var T=e=>{const{control:a,checked:r,bubbles:s=!0,defaultChecked:p,...n}=e,f=t.useRef(null),d=O(r),k=A(a);t.useEffect(()=>{const u=f.current,C=window.HTMLInputElement.prototype,m=Object.getOwnPropertyDescriptor(C,"checked").set;if(d!==r&&m){const v=new Event("click",{bubbles:s});u.indeterminate=i(r),m.call(u,i(r)?!1:r),u.dispatchEvent(v)}},[d,r,s]);const x=t.useRef(i(r)?!1:r);return b.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:p??x.current,...n,tabIndex:-1,ref:f,style:{...e.style,...k,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function i(e){return e==="indeterminate"}function M(e){return i(e)?"indeterminate":e?"checked":"unchecked"}var G=S,Q=N;const Y=t.forwardRef(({className:e,checked:a,...r},s)=>t.createElement(G,{...r,ref:s,checked:a,className:P("group inline-flex h-5 w-5 items-center justify-center outline-none ",e)},t.createElement("div",{className:P("text-ui-fg-on-inverted bg-ui-bg-base shadow-borders-base [&_path]:shadow-details-contrast-on-bg-interactive transition-fg h-[15px] w-[15px] rounded-[3px]","group-disabled:cursor-not-allowed group-disabled:opacity-50","group-focus-visible:!shadow-borders-interactive-with-focus","group-hover:group-enabled:group-data-[state=unchecked]:bg-ui-bg-base-hover","group-data-[state=checked]:bg-ui-bg-interactive group-data-[state=checked]:shadow-borders-interactive-with-shadow","group-data-[state=indeterminate]:bg-ui-bg-interactive group-data-[state=indeterminate]:shadow-borders-interactive-with-shadow")},t.createElement(Q,null,a==="indeterminate"?t.createElement(K,null):t.createElement(X,null)))));Y.displayName="Checkbox";export{Y as C};
