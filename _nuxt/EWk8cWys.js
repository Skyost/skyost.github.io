import{a3 as L,a4 as F,a5 as M,O as _,f as v,d as S,a6 as $,a7 as q,o as B,g as E,h as w,i as k,a8 as z,e as O,b as D,a9 as V}from"./HqI6pBtT.js";function X(t,e){const a=e/t*100;return 2/Math.PI*100*Math.atan(a/50)}function j(t={}){const{duration:e=2e3,throttle:a=200,hideDelay:s=500,resetDelay:u=400}=t,l=t.estimatedProgress||X,n=L(),o=_(0),i=_(!1),m=_(!1);let p=!1,h,I,x,b;const y=()=>{m.value=!1,A(0)};function A(r=0){if(!n.isHydrating){if(r>=100)return d();c(),o.value=r<0?0:r,a?I=setTimeout(()=>{i.value=!0,T()},a):(i.value=!0,T())}}function H(){x=setTimeout(()=>{i.value=!1,b=setTimeout(()=>{o.value=0},u)},s)}function d(r={}){o.value=100,p=!0,c(),N(),r.error&&(m.value=!0),r.force?(o.value=0,i.value=!1):H()}function N(){clearTimeout(x),clearTimeout(b)}function c(){clearTimeout(I),cancelAnimationFrame(h)}function T(){p=!1;let r;function f(g){if(p)return;r??(r=g);const C=g-r;o.value=Math.max(0,Math.min(100,l(e,C))),h=requestAnimationFrame(f)}h=requestAnimationFrame(f)}let P=()=>{};{const r=n.hook("page:loading:start",()=>{y()}),f=n.hook("page:loading:end",()=>{d()}),g=n.hook("vue:error",()=>d());P=()=>{g(),r(),f(),c()}}return{_cleanup:P,progress:v(()=>o.value),isLoading:v(()=>i.value),error:v(()=>m.value),start:y,set:A,finish:d,clear:c}}function G(t={}){const e=L(),a=e._loadingIndicator=e._loadingIndicator||j(t);return F()&&(e._loadingIndicatorDeps=e._loadingIndicatorDeps||0,e._loadingIndicatorDeps++,M(()=>{e._loadingIndicatorDeps--,e._loadingIndicatorDeps===0&&(a._cleanup(),delete e._loadingIndicator)})),a}const J=S({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:[String,Boolean],default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"},errorColor:{type:String,default:"repeating-linear-gradient(to right,#f87171 0%,#ef4444 100%)"},estimatedProgress:{type:Function,required:!1}},setup(t,{slots:e,expose:a}){const{progress:s,isLoading:u,error:l,start:n,finish:o,clear:i}=G({duration:t.duration,throttle:t.throttle,estimatedProgress:t.estimatedProgress});return a({progress:s,isLoading:u,error:l,start:n,finish:o,clear:i}),()=>$("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:"auto",height:`${t.height}px`,opacity:u.value?1:0,background:l.value?t.errorColor:t.color||void 0,backgroundSize:`${100/s.value*100}% auto`,transform:`scaleX(${s.value}%)`,transformOrigin:"left",transition:"transform 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}}),Q=S({__name:"default",setup(t){const e=q({addDirAttribute:!0,identifierAttribute:"id",addSeoAttributes:!0});return(a,s)=>{var n,o;const u=J,l=V;return B(),E(l,{lang:(n=D(e).htmlAttrs)==null?void 0:n.lang,dir:(o=D(e).htmlAttrs)==null?void 0:o.dir},{default:w(()=>[k(u,{color:"#2196f3"}),k(z),O(a.$slots,"default")]),_:3},8,["lang","dir"])}}});export{Q as default};
