import{o as p,c,b as a,t as r,j as d,k as u,a as o,l as g,m as f}from"./index-c24fe349.js";const _={__name:"ChildComponent",props:{msg:String},emits:["response"],setup(l,{emit:s}){const t=s;function n(){t("response","message from child arrived!")}return(m,e)=>(p(),c("div",null,[a("h2",null,r(l.msg||"No props passed yet"),1),a("button",{onClick:e[0]||(e[0]=i=>n())},"Emit"),d(m.$slots,"default",{},()=>[u("Fallback content")])]))}},k={__name:"TestView4",setup(l){const s=o("Passed from parent"),t=o("No child msg yet"),n=o("template from parent");return(m,e)=>(p(),c("div",null,[g(_,{msg:s.value,onResponse:e[0]||(e[0]=i=>t.value=i)},{default:f(()=>[u(" Template: "+r(n.value),1)]),_:1},8,["msg"]),a("p",null,r(t.value),1)]))}};export{k as default};
