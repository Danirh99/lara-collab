import{b as g,C as xt,af as nt,j as wt,k as $e}from"./app-4a17Pub4.js";import{u as bt}from"./DirectionProvider-DqDMRz46.js";function J(e){return ot(e)?(e.nodeName||"").toLowerCase():"#document"}function $(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function U(e){var t;return(t=(ot(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ot(e){return e instanceof Node||e instanceof $(e).Node}function F(e){return e instanceof Element||e instanceof $(e).Element}function N(e){return e instanceof HTMLElement||e instanceof $(e).HTMLElement}function Ce(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof $(e).ShadowRoot}function fe(e){const{overflow:t,overflowX:n,overflowY:o,display:r}=H(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(r)}function Rt(e){return["table","td","th"].includes(J(e))}function Pe(e){const t=Le(),n=H(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Et(e){let t=ee(e);for(;N(t)&&!se(t);){if(Pe(t))return t;t=ee(t)}return null}function Le(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function se(e){return["html","body","#document"].includes(J(e))}function H(e){return $(e).getComputedStyle(e)}function ye(e){return F(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function ee(e){if(J(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Ce(e)&&e.host||U(e);return Ce(t)?t.host:t}function rt(e){const t=ee(e);return se(t)?e.ownerDocument?e.ownerDocument.body:e.body:N(t)&&fe(t)?t:rt(t)}function q(e,t,n){var o;t===void 0&&(t=[]),n===void 0&&(n=!0);const r=rt(e),i=r===((o=e.ownerDocument)==null?void 0:o.body),s=$(r);return i?t.concat(s,s.visualViewport||[],fe(r)?r:[],s.frameElement&&n?q(s.frameElement):[]):t.concat(r,q(r,[],n))}function Ne(e){let t=e.activeElement;for(;((n=t)==null||(n=n.shadowRoot)==null?void 0:n.activeElement)!=null;){var n;t=t.shadowRoot.activeElement}return t}function ae(e,t){if(!e||!t)return!1;const n=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&Ce(n)){let o=t;for(;o;){if(e===o)return!0;o=o.parentNode||o.host}}return!1}function it(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function st(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:n,version:o}=t;return n+"/"+o}).join(" "):navigator.userAgent}function Ct(e){return Pt()?!1:!He()&&e.width===0&&e.height===0||He()&&e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType==="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0&&e.pointerType==="touch"}function At(){return/apple/i.test(navigator.vendor)}function He(){const e=/android/i;return e.test(it())||e.test(st())}function Tt(){return it().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function Pt(){return st().includes("jsdom/")}function ct(e,t){const n=["mouse","pen"];return n.push("",void 0),n.includes(e)}function Lt(e){return"nativeEvent"in e}function Ot(e){return e.matches("html,body")}function Z(e){return(e==null?void 0:e.ownerDocument)||document}function we(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}function oe(e){return"composedPath"in e?e.composedPath()[0]:e.target}const Mt="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Dt(e){return N(e)&&e.matches(Mt)}const K=Math.min,W=Math.max,pe=Math.round,de=Math.floor,Q=e=>({x:e,y:e}),St={left:"right",right:"left",bottom:"top",top:"bottom"},kt={start:"end",end:"start"};function Ae(e,t,n){return W(e,K(t,n))}function X(e,t){return typeof e=="function"?e(t):e}function j(e){return e.split("-")[0]}function le(e){return e.split("-")[1]}function Oe(e){return e==="x"?"y":"x"}function Me(e){return e==="y"?"height":"width"}function ne(e){return["top","bottom"].includes(j(e))?"y":"x"}function De(e){return Oe(ne(e))}function It(e,t,n){n===void 0&&(n=!1);const o=le(e),r=De(e),i=Me(r);let s=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=he(s)),[s,he(s)]}function Ft(e){const t=he(e);return[Te(e),t,Te(t)]}function Te(e){return e.replace(/start|end/g,t=>kt[t])}function _t(e,t,n){const o=["left","right"],r=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?r:o:t?o:r;case"left":case"right":return t?i:s;default:return[]}}function Bt(e,t,n,o){const r=le(e);let i=_t(j(e),n==="start",o);return r&&(i=i.map(s=>s+"-"+r),t&&(i=i.concat(i.map(Te)))),i}function he(e){return e.replace(/left|right|bottom|top/g,t=>St[t])}function Wt(e){return{top:0,right:0,bottom:0,left:0,...e}}function Se(e){return typeof e!="number"?Wt(e):{top:e,right:e,bottom:e,left:e}}function ce(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Ve(e,t,n){let{reference:o,floating:r}=e;const i=ne(t),s=De(t),c=Me(s),l=j(t),u=i==="y",d=o.x+o.width/2-r.width/2,a=o.y+o.height/2-r.height/2,m=o[c]/2-r[c]/2;let f;switch(l){case"top":f={x:d,y:o.y-r.height};break;case"bottom":f={x:d,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:a};break;case"left":f={x:o.x-r.width,y:a};break;default:f={x:o.x,y:o.y}}switch(le(t)){case"start":f[s]-=m*(n&&u?-1:1);break;case"end":f[s]+=m*(n&&u?-1:1);break}return f}const $t=async(e,t,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:s}=n,c=i.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let u=await s.getElementRects({reference:e,floating:t,strategy:r}),{x:d,y:a}=Ve(u,o,l),m=o,f={},h=0;for(let v=0;v<c.length;v++){const{name:R,fn:b}=c[v],{x:C,y:A,data:w,reset:y}=await b({x:d,y:a,initialPlacement:o,placement:m,strategy:r,middlewareData:f,rects:u,platform:s,elements:{reference:e,floating:t}});d=C??d,a=A??a,f={...f,[R]:{...f[R],...w}},y&&h<=50&&(h++,typeof y=="object"&&(y.placement&&(m=y.placement),y.rects&&(u=y.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:r}):y.rects),{x:d,y:a}=Ve(u,m,l)),v=-1)}return{x:d,y:a,placement:m,strategy:r,middlewareData:f}};async function ke(e,t){var n;t===void 0&&(t={});const{x:o,y:r,platform:i,rects:s,elements:c,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:a="floating",altBoundary:m=!1,padding:f=0}=X(t,e),h=Se(f),R=c[m?a==="floating"?"reference":"floating":a],b=ce(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(R)))==null||n?R:R.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(c.floating)),boundary:u,rootBoundary:d,strategy:l})),C=a==="floating"?{...s.floating,x:o,y:r}:s.reference,A=await(i.getOffsetParent==null?void 0:i.getOffsetParent(c.floating)),w=await(i.isElement==null?void 0:i.isElement(A))?await(i.getScale==null?void 0:i.getScale(A))||{x:1,y:1}:{x:1,y:1},y=ce(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:C,offsetParent:A,strategy:l}):C);return{top:(b.top-y.top+h.top)/w.y,bottom:(y.bottom-b.bottom+h.bottom)/w.y,left:(b.left-y.left+h.left)/w.x,right:(y.right-b.right+h.right)/w.x}}const Nt=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:o,placement:r,rects:i,platform:s,elements:c,middlewareData:l}=t,{element:u,padding:d=0}=X(e,t)||{};if(u==null)return{};const a=Se(d),m={x:n,y:o},f=De(r),h=Me(f),v=await s.getDimensions(u),R=f==="y",b=R?"top":"left",C=R?"bottom":"right",A=R?"clientHeight":"clientWidth",w=i.reference[h]+i.reference[f]-m[f]-i.floating[h],y=m[f]-i.reference[f],T=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));let O=T?T[A]:0;(!O||!await(s.isElement==null?void 0:s.isElement(T)))&&(O=c.floating[A]||i.floating[h]);const I=w/2-y/2,_=O/2-v[h]/2-1,D=K(a[b],_),S=K(a[C],_),M=D,k=O-v[h]-S,L=O/2-v[h]/2+I,p=Ae(M,L,k),P=!l.arrow&&le(r)!=null&&L!==p&&i.reference[h]/2-(L<M?D:S)-v[h]/2<0,E=P?L<M?L-M:L-k:0;return{[f]:m[f]+E,data:{[f]:p,centerOffset:L-p-E,...P&&{alignmentOffset:E}},reset:P}}}),Ht=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,o;const{placement:r,middlewareData:i,rects:s,initialPlacement:c,platform:l,elements:u}=t,{mainAxis:d=!0,crossAxis:a=!0,fallbackPlacements:m,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:v=!0,...R}=X(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const b=j(r),C=j(c)===c,A=await(l.isRTL==null?void 0:l.isRTL(u.floating)),w=m||(C||!v?[he(c)]:Ft(c));!m&&h!=="none"&&w.push(...Bt(c,v,h,A));const y=[c,...w],T=await ke(t,R),O=[];let I=((o=i.flip)==null?void 0:o.overflows)||[];if(d&&O.push(T[b]),a){const M=It(r,s,A);O.push(T[M[0]],T[M[1]])}if(I=[...I,{placement:r,overflows:O}],!O.every(M=>M<=0)){var _,D;const M=(((_=i.flip)==null?void 0:_.index)||0)+1,k=y[M];if(k)return{data:{index:M,overflows:I},reset:{placement:k}};let L=(D=I.filter(p=>p.overflows[0]<=0).sort((p,P)=>p.overflows[1]-P.overflows[1])[0])==null?void 0:D.placement;if(!L)switch(f){case"bestFit":{var S;const p=(S=I.map(P=>[P.placement,P.overflows.filter(E=>E>0).reduce((E,x)=>E+x,0)]).sort((P,E)=>P[1]-E[1])[0])==null?void 0:S[0];p&&(L=p);break}case"initialPlacement":L=c;break}if(r!==L)return{reset:{placement:L}}}return{}}}};function lt(e){const t=K(...e.map(i=>i.left)),n=K(...e.map(i=>i.top)),o=W(...e.map(i=>i.right)),r=W(...e.map(i=>i.bottom));return{x:t,y:n,width:o-t,height:r-n}}function Vt(e){const t=e.slice().sort((r,i)=>r.y-i.y),n=[];let o=null;for(let r=0;r<t.length;r++){const i=t[r];!o||i.y-o.y>o.height/2?n.push([i]):n[n.length-1].push(i),o=i}return n.map(r=>ce(lt(r)))}const Kt=function(e){return e===void 0&&(e={}),{name:"inline",options:e,async fn(t){const{placement:n,elements:o,rects:r,platform:i,strategy:s}=t,{padding:c=2,x:l,y:u}=X(e,t),d=Array.from(await(i.getClientRects==null?void 0:i.getClientRects(o.reference))||[]),a=Vt(d),m=ce(lt(d)),f=Se(c);function h(){if(a.length===2&&a[0].left>a[1].right&&l!=null&&u!=null)return a.find(R=>l>R.left-f.left&&l<R.right+f.right&&u>R.top-f.top&&u<R.bottom+f.bottom)||m;if(a.length>=2){if(ne(n)==="y"){const D=a[0],S=a[a.length-1],M=j(n)==="top",k=D.top,L=S.bottom,p=M?D.left:S.left,P=M?D.right:S.right,E=P-p,x=L-k;return{top:k,bottom:L,left:p,right:P,width:E,height:x,x:p,y:k}}const R=j(n)==="left",b=W(...a.map(D=>D.right)),C=K(...a.map(D=>D.left)),A=a.filter(D=>R?D.left===C:D.right===b),w=A[0].top,y=A[A.length-1].bottom,T=C,O=b,I=O-T,_=y-w;return{top:w,bottom:y,left:T,right:O,width:I,height:_,x:T,y:w}}return m}const v=await i.getElementRects({reference:{getBoundingClientRect:h},floating:o.floating,strategy:s});return r.reference.x!==v.reference.x||r.reference.y!==v.reference.y||r.reference.width!==v.reference.width||r.reference.height!==v.reference.height?{reset:{rects:v}}:{}}}};async function jt(e,t){const{placement:n,platform:o,elements:r}=e,i=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=j(n),c=le(n),l=ne(n)==="y",u=["left","top"].includes(s)?-1:1,d=i&&l?-1:1,a=X(t,e);let{mainAxis:m,crossAxis:f,alignmentAxis:h}=typeof a=="number"?{mainAxis:a,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...a};return c&&typeof h=="number"&&(f=c==="end"?h*-1:h),l?{x:f*d,y:m*u}:{x:m*u,y:f*d}}const Sn=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,o;const{x:r,y:i,placement:s,middlewareData:c}=t,l=await jt(t,e);return s===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:r+l.x,y:i+l.y,data:{...l,placement:s}}}}},Yt=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:r}=t,{mainAxis:i=!0,crossAxis:s=!1,limiter:c={fn:R=>{let{x:b,y:C}=R;return{x:b,y:C}}},...l}=X(e,t),u={x:n,y:o},d=await ke(t,l),a=ne(j(r)),m=Oe(a);let f=u[m],h=u[a];if(i){const R=m==="y"?"top":"left",b=m==="y"?"bottom":"right",C=f+d[R],A=f-d[b];f=Ae(C,f,A)}if(s){const R=a==="y"?"top":"left",b=a==="y"?"bottom":"right",C=h+d[R],A=h-d[b];h=Ae(C,h,A)}const v=c.fn({...t,[m]:f,[a]:h});return{...v,data:{x:v.x-n,y:v.y-o}}}}},Xt=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:o,placement:r,rects:i,middlewareData:s}=t,{offset:c=0,mainAxis:l=!0,crossAxis:u=!0}=X(e,t),d={x:n,y:o},a=ne(r),m=Oe(a);let f=d[m],h=d[a];const v=X(c,t),R=typeof v=="number"?{mainAxis:v,crossAxis:0}:{mainAxis:0,crossAxis:0,...v};if(l){const A=m==="y"?"height":"width",w=i.reference[m]-i.floating[A]+R.mainAxis,y=i.reference[m]+i.reference[A]-R.mainAxis;f<w?f=w:f>y&&(f=y)}if(u){var b,C;const A=m==="y"?"width":"height",w=["top","left"].includes(j(r)),y=i.reference[a]-i.floating[A]+(w&&((b=s.offset)==null?void 0:b[a])||0)+(w?0:R.crossAxis),T=i.reference[a]+i.reference[A]+(w?0:((C=s.offset)==null?void 0:C[a])||0)-(w?R.crossAxis:0);h<y?h=y:h>T&&(h=T)}return{[m]:f,[a]:h}}}},Ut=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:o,platform:r,elements:i}=t,{apply:s=()=>{},...c}=X(e,t),l=await ke(t,c),u=j(n),d=le(n),a=ne(n)==="y",{width:m,height:f}=o.floating;let h,v;u==="top"||u==="bottom"?(h=u,v=d===(await(r.isRTL==null?void 0:r.isRTL(i.floating))?"start":"end")?"left":"right"):(v=u,h=d==="end"?"top":"bottom");const R=f-l[h],b=m-l[v],C=!t.middlewareData.shift;let A=R,w=b;if(a){const T=m-l.left-l.right;w=d||C?K(b,T):T}else{const T=f-l.top-l.bottom;A=d||C?K(R,T):T}if(C&&!d){const T=W(l.left,0),O=W(l.right,0),I=W(l.top,0),_=W(l.bottom,0);a?w=m-2*(T!==0||O!==0?T+O:W(l.left,l.right)):A=f-2*(I!==0||_!==0?I+_:W(l.top,l.bottom))}await s({...t,availableWidth:w,availableHeight:A});const y=await r.getDimensions(i.floating);return m!==y.width||f!==y.height?{reset:{rects:!0}}:{}}}};function ut(e){const t=H(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=N(e),i=r?e.offsetWidth:n,s=r?e.offsetHeight:o,c=pe(n)!==i||pe(o)!==s;return c&&(n=i,o=s),{width:n,height:o,$:c}}function Ie(e){return F(e)?e:e.contextElement}function ie(e){const t=Ie(e);if(!N(t))return Q(1);const n=t.getBoundingClientRect(),{width:o,height:r,$:i}=ut(t);let s=(i?pe(n.width):n.width)/o,c=(i?pe(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const zt=Q(0);function at(e){const t=$(e);return!Le()||!t.visualViewport?zt:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Gt(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==$(e)?!1:t}function te(e,t,n,o){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=Ie(e);let s=Q(1);t&&(o?F(o)&&(s=ie(o)):s=ie(e));const c=Gt(i,n,o)?at(i):Q(0);let l=(r.left+c.x)/s.x,u=(r.top+c.y)/s.y,d=r.width/s.x,a=r.height/s.y;if(i){const m=$(i),f=o&&F(o)?$(o):o;let h=m,v=h.frameElement;for(;v&&o&&f!==h;){const R=ie(v),b=v.getBoundingClientRect(),C=H(v),A=b.left+(v.clientLeft+parseFloat(C.paddingLeft))*R.x,w=b.top+(v.clientTop+parseFloat(C.paddingTop))*R.y;l*=R.x,u*=R.y,d*=R.x,a*=R.y,l+=A,u+=w,h=$(v),v=h.frameElement}}return ce({width:d,height:a,x:l,y:u})}const qt=[":popover-open",":modal"];function ft(e){return qt.some(t=>{try{return e.matches(t)}catch{return!1}})}function Jt(e){let{elements:t,rect:n,offsetParent:o,strategy:r}=e;const i=r==="fixed",s=U(o),c=t?ft(t.floating):!1;if(o===s||c&&i)return n;let l={scrollLeft:0,scrollTop:0},u=Q(1);const d=Q(0),a=N(o);if((a||!a&&!i)&&((J(o)!=="body"||fe(s))&&(l=ye(o)),N(o))){const m=te(o);u=ie(o),d.x=m.x+o.clientLeft,d.y=m.y+o.clientTop}return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-l.scrollLeft*u.x+d.x,y:n.y*u.y-l.scrollTop*u.y+d.y}}function Qt(e){return Array.from(e.getClientRects())}function dt(e){return te(U(e)).left+ye(e).scrollLeft}function Zt(e){const t=U(e),n=ye(e),o=e.ownerDocument.body,r=W(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),i=W(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+dt(e);const c=-n.scrollTop;return H(o).direction==="rtl"&&(s+=W(t.clientWidth,o.clientWidth)-r),{width:r,height:i,x:s,y:c}}function en(e,t){const n=$(e),o=U(e),r=n.visualViewport;let i=o.clientWidth,s=o.clientHeight,c=0,l=0;if(r){i=r.width,s=r.height;const u=Le();(!u||u&&t==="fixed")&&(c=r.offsetLeft,l=r.offsetTop)}return{width:i,height:s,x:c,y:l}}function tn(e,t){const n=te(e,!0,t==="fixed"),o=n.top+e.clientTop,r=n.left+e.clientLeft,i=N(e)?ie(e):Q(1),s=e.clientWidth*i.x,c=e.clientHeight*i.y,l=r*i.x,u=o*i.y;return{width:s,height:c,x:l,y:u}}function Ke(e,t,n){let o;if(t==="viewport")o=en(e,n);else if(t==="document")o=Zt(U(e));else if(F(t))o=tn(t,n);else{const r=at(e);o={...t,x:t.x-r.x,y:t.y-r.y}}return ce(o)}function mt(e,t){const n=ee(e);return n===t||!F(n)||se(n)?!1:H(n).position==="fixed"||mt(n,t)}function nn(e,t){const n=t.get(e);if(n)return n;let o=q(e,[],!1).filter(c=>F(c)&&J(c)!=="body"),r=null;const i=H(e).position==="fixed";let s=i?ee(e):e;for(;F(s)&&!se(s);){const c=H(s),l=Pe(s);!l&&c.position==="fixed"&&(r=null),(i?!l&&!r:!l&&c.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||fe(s)&&!l&&mt(e,s))?o=o.filter(d=>d!==s):r=c,s=ee(s)}return t.set(e,o),o}function on(e){let{element:t,boundary:n,rootBoundary:o,strategy:r}=e;const s=[...n==="clippingAncestors"?nn(t,this._c):[].concat(n),o],c=s[0],l=s.reduce((u,d)=>{const a=Ke(t,d,r);return u.top=W(a.top,u.top),u.right=K(a.right,u.right),u.bottom=K(a.bottom,u.bottom),u.left=W(a.left,u.left),u},Ke(t,c,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function rn(e){const{width:t,height:n}=ut(e);return{width:t,height:n}}function sn(e,t,n){const o=N(t),r=U(t),i=n==="fixed",s=te(e,!0,i,t);let c={scrollLeft:0,scrollTop:0};const l=Q(0);if(o||!o&&!i)if((J(t)!=="body"||fe(r))&&(c=ye(t)),o){const a=te(t,!0,i,t);l.x=a.x+t.clientLeft,l.y=a.y+t.clientTop}else r&&(l.x=dt(r));const u=s.left+c.scrollLeft-l.x,d=s.top+c.scrollTop-l.y;return{x:u,y:d,width:s.width,height:s.height}}function je(e,t){return!N(e)||H(e).position==="fixed"?null:t?t(e):e.offsetParent}function gt(e,t){const n=$(e);if(!N(e)||ft(e))return n;let o=je(e,t);for(;o&&Rt(o)&&H(o).position==="static";)o=je(o,t);return o&&(J(o)==="html"||J(o)==="body"&&H(o).position==="static"&&!Pe(o))?n:o||Et(e)||n}const cn=async function(e){const t=this.getOffsetParent||gt,n=this.getDimensions;return{reference:sn(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,...await n(e.floating)}}};function ln(e){return H(e).direction==="rtl"}const un={convertOffsetParentRelativeRectToViewportRelativeRect:Jt,getDocumentElement:U,getClippingRect:on,getOffsetParent:gt,getElementRects:cn,getClientRects:Qt,getDimensions:rn,getScale:ie,isElement:F,isRTL:ln};function an(e,t){let n=null,o;const r=U(e);function i(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function s(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),i();const{left:u,top:d,width:a,height:m}=e.getBoundingClientRect();if(c||t(),!a||!m)return;const f=de(d),h=de(r.clientWidth-(u+a)),v=de(r.clientHeight-(d+m)),R=de(u),C={rootMargin:-f+"px "+-h+"px "+-v+"px "+-R+"px",threshold:W(0,K(1,l))||1};let A=!0;function w(y){const T=y[0].intersectionRatio;if(T!==l){if(!A)return s();T?s(!1,T):o=setTimeout(()=>{s(!1,1e-7)},100)}A=!1}try{n=new IntersectionObserver(w,{...C,root:r.ownerDocument})}catch{n=new IntersectionObserver(w,C)}n.observe(e)}return s(!0),i}function fn(e,t,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,u=Ie(e),d=r||i?[...u?q(u):[],...q(t)]:[];d.forEach(b=>{r&&b.addEventListener("scroll",n,{passive:!0}),i&&b.addEventListener("resize",n)});const a=u&&c?an(u,n):null;let m=-1,f=null;s&&(f=new ResizeObserver(b=>{let[C]=b;C&&C.target===u&&f&&(f.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var A;(A=f)==null||A.observe(t)})),n()}),u&&!l&&f.observe(u),f.observe(t));let h,v=l?te(e):null;l&&R();function R(){const b=te(e);v&&(b.x!==v.x||b.y!==v.y||b.width!==v.width||b.height!==v.height)&&n(),v=b,h=requestAnimationFrame(R)}return n(),()=>{var b;d.forEach(C=>{r&&C.removeEventListener("scroll",n),i&&C.removeEventListener("resize",n)}),a==null||a(),(b=f)==null||b.disconnect(),f=null,l&&cancelAnimationFrame(h)}}const kn=Yt,In=Ht,Fn=Ut,Ye=Nt,_n=Kt,Bn=Xt,dn=(e,t,n)=>{const o=new Map,r={platform:un,...n},i={...r.platform,_c:o};return $t(e,t,{...r,platform:i})},Wn=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:o,padding:r}=typeof e=="function"?e(n):e;return o&&t(o)?o.current!=null?Ye({element:o.current,padding:r}).fn(n):{}:o?Ye({element:o,padding:r}).fn(n):{}}}};var me=typeof document<"u"?g.useLayoutEffect:g.useEffect;function ve(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(o=n;o--!==0;)if(!ve(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),n=r.length,n!==Object.keys(t).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=n;o--!==0;){const i=r[o];if(!(i==="_owner"&&e.$$typeof)&&!ve(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function pt(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Xe(e,t){const n=pt(e);return Math.round(t*n)/n}function Ue(e){const t=g.useRef(e);return me(()=>{t.current=e}),t}function mn(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:r,elements:{reference:i,floating:s}={},transform:c=!0,whileElementsMounted:l,open:u}=e,[d,a]=g.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[m,f]=g.useState(o);ve(m,o)||f(o);const[h,v]=g.useState(null),[R,b]=g.useState(null),C=g.useCallback(E=>{E!==T.current&&(T.current=E,v(E))},[]),A=g.useCallback(E=>{E!==O.current&&(O.current=E,b(E))},[]),w=i||h,y=s||R,T=g.useRef(null),O=g.useRef(null),I=g.useRef(d),_=l!=null,D=Ue(l),S=Ue(r),M=g.useCallback(()=>{if(!T.current||!O.current)return;const E={placement:t,strategy:n,middleware:m};S.current&&(E.platform=S.current),dn(T.current,O.current,E).then(x=>{const B={...x,isPositioned:!0};k.current&&!ve(I.current,B)&&(I.current=B,xt.flushSync(()=>{a(B)}))})},[m,t,n,S]);me(()=>{u===!1&&I.current.isPositioned&&(I.current.isPositioned=!1,a(E=>({...E,isPositioned:!1})))},[u]);const k=g.useRef(!1);me(()=>(k.current=!0,()=>{k.current=!1}),[]),me(()=>{if(w&&(T.current=w),y&&(O.current=y),w&&y){if(D.current)return D.current(w,y,M);M()}},[w,y,M,D,_]);const L=g.useMemo(()=>({reference:T,floating:O,setReference:C,setFloating:A}),[C,A]),p=g.useMemo(()=>({reference:w,floating:y}),[w,y]),P=g.useMemo(()=>{const E={position:n,left:0,top:0};if(!p.floating)return E;const x=Xe(p.floating,d.x),B=Xe(p.floating,d.y);return c?{...E,transform:"translate("+x+"px, "+B+"px)",...pt(p.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:x,top:B}},[n,c,p.floating,d.x,d.y]);return g.useMemo(()=>({...d,update:M,refs:L,elements:p,floatingStyles:P}),[d,M,L,p,P])}const gn=nt.useInsertionEffect,pn=gn||(e=>e());function re(e){const t=g.useRef(()=>{});return pn(()=>{t.current=e}),g.useCallback(function(){for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t.current==null?void 0:t.current(...o)},[])}var Y=typeof document<"u"?g.useLayoutEffect:g.useEffect;let be=!1,hn=0;const ze=()=>"floating-ui-"+hn++;function vn(){const[e,t]=g.useState(()=>be?ze():void 0);return Y(()=>{e==null&&t(ze())},[]),g.useEffect(()=>{be||(be=!0)},[]),e}const yn=nt.useId,ht=yn||vn;function xn(){const e=new Map;return{emit(t,n){var o;(o=e.get(t))==null||o.forEach(r=>r(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var o;e.set(t,((o=e.get(t))==null?void 0:o.filter(r=>r!==n))||[])}}}const wn=g.createContext(null),bn=g.createContext(null),Fe=()=>{var e;return((e=g.useContext(wn))==null?void 0:e.id)||null},_e=()=>g.useContext(bn);function Be(e){return"data-floating-ui-"+e}function Ge(e){const t=g.useRef(e);return Y(()=>{t.current=e}),t}const qe=Be("safe-polygon");function ge(e,t,n){return n&&!ct(n)?0:typeof e=="number"?e:e==null?void 0:e[t]}function $n(e,t){t===void 0&&(t={});const{open:n,onOpenChange:o,dataRef:r,events:i,elements:{domReference:s,floating:c},refs:l}=e,{enabled:u=!0,delay:d=0,handleClose:a=null,mouseOnly:m=!1,restMs:f=0,move:h=!0}=t,v=_e(),R=Fe(),b=Ge(a),C=Ge(d),A=g.useRef(),w=g.useRef(),y=g.useRef(),T=g.useRef(),O=g.useRef(!0),I=g.useRef(!1),_=g.useRef(()=>{}),D=g.useCallback(()=>{var L;const p=(L=r.current.openEvent)==null?void 0:L.type;return(p==null?void 0:p.includes("mouse"))&&p!=="mousedown"},[r]);g.useEffect(()=>{if(!u)return;function L(p){let{open:P}=p;P||(clearTimeout(w.current),clearTimeout(T.current),O.current=!0)}return i.on("openchange",L),()=>{i.off("openchange",L)}},[u,i]),g.useEffect(()=>{if(!u||!b.current||!n)return;function L(P){D()&&o(!1,P,"hover")}const p=Z(c).documentElement;return p.addEventListener("mouseleave",L),()=>{p.removeEventListener("mouseleave",L)}},[c,n,o,u,b,D]);const S=g.useCallback(function(L,p,P){p===void 0&&(p=!0),P===void 0&&(P="hover");const E=ge(C.current,"close",A.current);E&&!y.current?(clearTimeout(w.current),w.current=setTimeout(()=>o(!1,L,P),E)):p&&(clearTimeout(w.current),o(!1,L,P))},[C,o]),M=g.useCallback(()=>{_.current(),y.current=void 0},[]),k=g.useCallback(()=>{if(I.current){const L=Z(l.floating.current).body;L.style.pointerEvents="",L.removeAttribute(qe),I.current=!1}},[l]);return g.useEffect(()=>{if(!u)return;function L(){return r.current.openEvent?["click","mousedown"].includes(r.current.openEvent.type):!1}function p(x){if(clearTimeout(w.current),O.current=!1,m&&!ct(A.current)||f>0&&ge(C.current,"open")===0)return;const B=ge(C.current,"open",A.current);B?w.current=setTimeout(()=>{o(!0,x,"hover")},B):o(!0,x,"hover")}function P(x){if(L())return;_.current();const B=Z(c);if(clearTimeout(T.current),b.current){n||clearTimeout(w.current),y.current=b.current({...e,tree:v,x:x.clientX,y:x.clientY,onClose(){k(),M(),S(x,!0,"safe-polygon")}});const z=y.current;B.addEventListener("mousemove",z),_.current=()=>{B.removeEventListener("mousemove",z)};return}(A.current==="touch"?!ae(c,x.relatedTarget):!0)&&S(x)}function E(x){L()||b.current==null||b.current({...e,tree:v,x:x.clientX,y:x.clientY,onClose(){k(),M(),S(x)}})(x)}if(F(s)){const x=s;return n&&x.addEventListener("mouseleave",E),c==null||c.addEventListener("mouseleave",E),h&&x.addEventListener("mousemove",p,{once:!0}),x.addEventListener("mouseenter",p),x.addEventListener("mouseleave",P),()=>{n&&x.removeEventListener("mouseleave",E),c==null||c.removeEventListener("mouseleave",E),h&&x.removeEventListener("mousemove",p),x.removeEventListener("mouseenter",p),x.removeEventListener("mouseleave",P)}}},[s,c,u,e,m,f,h,S,M,k,o,n,v,C,b,r]),Y(()=>{var L;if(u&&n&&(L=b.current)!=null&&L.__options.blockPointerEvents&&D()){const P=Z(c).body;if(P.setAttribute(qe,""),P.style.pointerEvents="none",I.current=!0,F(s)&&c){var p;const E=s,x=v==null||(p=v.nodesRef.current.find(B=>B.id===R))==null||(p=p.context)==null?void 0:p.elements.floating;return x&&(x.style.pointerEvents=""),E.style.pointerEvents="auto",c.style.pointerEvents="auto",()=>{E.style.pointerEvents="",c.style.pointerEvents=""}}}},[u,n,R,c,s,v,b,D]),Y(()=>{n||(A.current=void 0,M(),k())},[n,M,k]),g.useEffect(()=>()=>{M(),clearTimeout(w.current),clearTimeout(T.current),k()},[u,s,M,k]),g.useMemo(()=>{if(!u)return{};function L(p){A.current=p.pointerType}return{reference:{onPointerDown:L,onPointerEnter:L,onMouseMove(p){n||f===0||(clearTimeout(T.current),T.current=setTimeout(()=>{O.current||o(!0,p.nativeEvent,"hover")},f))}},floating:{onMouseEnter(){clearTimeout(w.current)},onMouseLeave(p){S(p.nativeEvent,!1)}}}},[u,f,n,o,S])}const vt=g.createContext({delay:0,initialDelay:0,timeoutMs:0,currentId:null,setCurrentId:()=>{},setState:()=>{},isInstantPhase:!1}),Rn=()=>g.useContext(vt),Nn=e=>{let{children:t,delay:n,timeoutMs:o=0}=e;const[r,i]=g.useReducer((l,u)=>({...l,...u}),{delay:n,timeoutMs:o,initialDelay:n,currentId:null,isInstantPhase:!1}),s=g.useRef(null),c=g.useCallback(l=>{i({currentId:l})},[]);return Y(()=>{r.currentId?s.current===null?s.current=r.currentId:i({isInstantPhase:!0}):(i({isInstantPhase:!1}),s.current=null)},[r.currentId]),g.createElement(vt.Provider,{value:g.useMemo(()=>({...r,setState:i,setCurrentId:c}),[r,c])},t)},Hn=(e,t)=>{let{open:n,onOpenChange:o}=e,{id:r}=t;const{currentId:i,setCurrentId:s,initialDelay:c,setState:l,timeoutMs:u}=Rn();Y(()=>{i&&(l({delay:{open:1,close:ge(c,"close")}}),i!==r&&o(!1))},[r,o,l,i,c]),Y(()=>{function d(){o(!1),l({delay:c,currentId:null})}if(!n&&i===r){if(u){const a=window.setTimeout(d,u);return()=>{clearTimeout(a)}}d()}},[n,l,i,r,o,c,u]),Y(()=>{n&&s(r)},[n,s,r])};function Re(e,t){let n=e.filter(r=>{var i;return r.parentId===t&&((i=r.context)==null?void 0:i.open)}),o=n;for(;o.length;)o=e.filter(r=>{var i;return(i=o)==null?void 0:i.some(s=>{var c;return r.parentId===s.id&&((c=r.context)==null?void 0:c.open)})}),n=n.concat(o);return n}const En={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},Cn={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Je=e=>{var t,n;return{escapeKey:typeof e=="boolean"?e:(t=e==null?void 0:e.escapeKey)!=null?t:!1,outsidePress:typeof e=="boolean"?e:(n=e==null?void 0:e.outsidePress)!=null?n:!0}};function Vn(e,t){t===void 0&&(t={});const{open:n,onOpenChange:o,nodeId:r,elements:{reference:i,domReference:s,floating:c},dataRef:l}=e,{enabled:u=!0,escapeKey:d=!0,outsidePress:a=!0,outsidePressEvent:m="pointerdown",referencePress:f=!1,referencePressEvent:h="pointerdown",ancestorScroll:v=!1,bubbles:R,capture:b}=t,C=_e(),A=re(typeof a=="function"?a:()=>!1),w=typeof a=="function"?A:a,y=g.useRef(!1),T=g.useRef(!1),{escapeKey:O,outsidePress:I}=Je(R),{escapeKey:_,outsidePress:D}=Je(b),S=re(p=>{if(!n||!u||!d||p.key!=="Escape")return;const P=C?Re(C.nodesRef.current,r):[];if(!O&&(p.stopPropagation(),P.length>0)){let E=!0;if(P.forEach(x=>{var B;if((B=x.context)!=null&&B.open&&!x.context.dataRef.current.__escapeKeyBubbles){E=!1;return}}),!E)return}o(!1,Lt(p)?p.nativeEvent:p,"escape-key")}),M=re(p=>{var P;const E=()=>{var x;S(p),(x=oe(p))==null||x.removeEventListener("keydown",E)};(P=oe(p))==null||P.addEventListener("keydown",E)}),k=re(p=>{const P=y.current;y.current=!1;const E=T.current;if(T.current=!1,m==="click"&&E||P||typeof w=="function"&&!w(p))return;const x=oe(p),B="["+Be("inert")+"]",xe=Z(c).querySelectorAll(B);let z=F(x)?x:null;for(;z&&!se(z);){const V=ee(z);if(se(V)||!F(V))break;z=V}if(xe.length&&F(x)&&!Ot(x)&&!ae(x,c)&&Array.from(xe).every(V=>!ae(z,V)))return;if(N(x)&&c){const V=x.clientWidth>0&&x.scrollWidth>x.clientWidth,G=x.clientHeight>0&&x.scrollHeight>x.clientHeight;let ue=G&&p.offsetX>x.clientWidth;if(G&&H(x).direction==="rtl"&&(ue=p.offsetX<=x.offsetWidth-x.clientWidth),ue||V&&p.offsetY>x.clientHeight)return}const yt=C&&Re(C.nodesRef.current,r).some(V=>{var G;return we(p,(G=V.context)==null?void 0:G.elements.floating)});if(we(p,c)||we(p,s)||yt)return;const We=C?Re(C.nodesRef.current,r):[];if(We.length>0){let V=!0;if(We.forEach(G=>{var ue;if((ue=G.context)!=null&&ue.open&&!G.context.dataRef.current.__outsidePressBubbles){V=!1;return}}),!V)return}o(!1,p,"outside-press")}),L=re(p=>{var P;const E=()=>{var x;k(p),(x=oe(p))==null||x.removeEventListener(m,E)};(P=oe(p))==null||P.addEventListener(m,E)});return g.useEffect(()=>{if(!n||!u)return;l.current.__escapeKeyBubbles=O,l.current.__outsidePressBubbles=I;function p(x){o(!1,x,"ancestor-scroll")}const P=Z(c);d&&P.addEventListener("keydown",_?M:S,_),w&&P.addEventListener(m,D?L:k,D);let E=[];return v&&(F(s)&&(E=q(s)),F(c)&&(E=E.concat(q(c))),!F(i)&&i&&i.contextElement&&(E=E.concat(q(i.contextElement)))),E=E.filter(x=>{var B;return x!==((B=P.defaultView)==null?void 0:B.visualViewport)}),E.forEach(x=>{x.addEventListener("scroll",p,{passive:!0})}),()=>{d&&P.removeEventListener("keydown",_?M:S,_),w&&P.removeEventListener(m,D?L:k,D),E.forEach(x=>{x.removeEventListener("scroll",p)})}},[l,c,s,i,d,w,m,n,o,v,u,O,I,S,_,M,k,D,L]),g.useEffect(()=>{y.current=!1},[w,m]),g.useMemo(()=>u?{reference:{onKeyDown:S,[En[h]]:p=>{f&&o(!1,p.nativeEvent,"reference-press")}},floating:{onKeyDown:S,onMouseDown(){T.current=!0},onMouseUp(){T.current=!0},[Cn[m]]:()=>{y.current=!0}}}:{},[u,f,m,h,o,S])}function Kn(e){var t;e===void 0&&(e={});const{open:n=!1,onOpenChange:o,nodeId:r}=e,[i,s]=g.useState(null),c=((t=e.elements)==null?void 0:t.reference)||i,l=mn(e),u=_e(),d=Fe()!=null,a=re((y,T,O)=>{y&&(f.current.openEvent=T),h.emit("openchange",{open:y,event:T,reason:O,nested:d}),o==null||o(y,T,O)}),m=g.useRef(null),f=g.useRef({}),h=g.useState(()=>xn())[0],v=ht(),R=g.useCallback(y=>{const T=F(y)?{getBoundingClientRect:()=>y.getBoundingClientRect(),contextElement:y}:y;l.refs.setReference(T)},[l.refs]),b=g.useCallback(y=>{(F(y)||y===null)&&(m.current=y,s(y)),(F(l.refs.reference.current)||l.refs.reference.current===null||y!==null&&!F(y))&&l.refs.setReference(y)},[l.refs]),C=g.useMemo(()=>({...l.refs,setReference:b,setPositionReference:R,domReference:m}),[l.refs,b,R]),A=g.useMemo(()=>({...l.elements,domReference:c}),[l.elements,c]),w=g.useMemo(()=>({...l,refs:C,elements:A,dataRef:f,nodeId:r,floatingId:v,events:h,open:n,onOpenChange:a}),[l,r,v,h,n,a,C,A]);return Y(()=>{const y=u==null?void 0:u.nodesRef.current.find(T=>T.id===r);y&&(y.context=w)}),g.useMemo(()=>({...l,context:w,refs:C,elements:A}),[l,C,A,w])}function jn(e,t){t===void 0&&(t={});const{open:n,onOpenChange:o,events:r,refs:i,elements:{domReference:s}}=e,{enabled:c=!0,visibleOnly:l=!0}=t,u=g.useRef(!1),d=g.useRef(),a=g.useRef(!0);return g.useEffect(()=>{if(!c)return;const m=$(s);function f(){!n&&N(s)&&s===Ne(Z(s))&&(u.current=!0)}function h(){a.current=!0}return m.addEventListener("blur",f),m.addEventListener("keydown",h,!0),()=>{m.removeEventListener("blur",f),m.removeEventListener("keydown",h,!0)}},[s,n,c]),g.useEffect(()=>{if(!c)return;function m(f){let{reason:h}=f;(h==="reference-press"||h==="escape-key")&&(u.current=!0)}return r.on("openchange",m),()=>{r.off("openchange",m)}},[r,c]),g.useEffect(()=>()=>{clearTimeout(d.current)},[]),g.useMemo(()=>c?{reference:{onPointerDown(m){Ct(m.nativeEvent)||(a.current=!1)},onMouseLeave(){u.current=!1},onFocus(m){if(u.current)return;const f=oe(m.nativeEvent);if(l&&F(f))try{if(At()&&Tt())throw Error();if(!f.matches(":focus-visible"))return}catch{if(!a.current&&!Dt(f))return}o(!0,m.nativeEvent,"focus")},onBlur(m){u.current=!1;const f=m.relatedTarget,h=F(f)&&f.hasAttribute(Be("focus-guard"))&&f.getAttribute("data-type")==="outside";d.current=window.setTimeout(()=>{const v=Ne(s?s.ownerDocument:document);!f&&v===s||ae(i.floating.current,v)||ae(s,v)||h||o(!1,m.nativeEvent,"focus")})}}}:{},[c,l,s,i,o])}const Qe="active",Ze="selected";function Ee(e,t,n){const o=new Map,r=n==="item";let i=e;if(r&&e){const{[Qe]:s,[Ze]:c,...l}=e;i=l}return{...n==="floating"&&{tabIndex:-1},...i,...t.map(s=>{const c=s?s[n]:null;return typeof c=="function"?e?c(e):null:c}).concat(e).reduce((s,c)=>(c&&Object.entries(c).forEach(l=>{let[u,d]=l;if(!(r&&[Qe,Ze].includes(u)))if(u.indexOf("on")===0){if(o.has(u)||o.set(u,[]),typeof d=="function"){var a;(a=o.get(u))==null||a.push(d),s[u]=function(){for(var m,f=arguments.length,h=new Array(f),v=0;v<f;v++)h[v]=arguments[v];return(m=o.get(u))==null?void 0:m.map(R=>R(...h)).find(R=>R!==void 0)}}}else s[u]=d}),s),{})}}function Yn(e){e===void 0&&(e=[]);const t=e,n=g.useCallback(i=>Ee(i,e,"reference"),t),o=g.useCallback(i=>Ee(i,e,"floating"),t),r=g.useCallback(i=>Ee(i,e,"item"),e.map(i=>i==null?void 0:i.item));return g.useMemo(()=>({getReferenceProps:n,getFloatingProps:o,getItemProps:r}),[n,o,r])}const An=new Map([["select","listbox"],["combobox","listbox"],["label",!1]]);function Xn(e,t){var n;t===void 0&&(t={});const{open:o,floatingId:r}=e,{enabled:i=!0,role:s="dialog"}=t,c=(n=An.get(s))!=null?n:s,l=ht(),d=Fe()!=null;return g.useMemo(()=>{if(!i)return{};const a={id:r,...c&&{role:c}};return c==="tooltip"||s==="label"?{reference:{["aria-"+(s==="label"?"labelledby":"describedby")]:o?r:void 0},floating:a}:{reference:{"aria-expanded":o?"true":"false","aria-haspopup":c==="alertdialog"?"dialog":c,"aria-controls":o?r:void 0,...c==="listbox"&&{role:"combobox"},...c==="menu"&&{id:l},...c==="menu"&&d&&{role:"menuitem"},...s==="select"&&{"aria-autocomplete":"none"},...s==="combobox"&&{"aria-autocomplete":"list"}},floating:{...a,...c==="menu"&&{"aria-labelledby":l}},item(m){let{active:f,selected:h}=m;const v={role:"option",...f&&{id:r+"-option"}};switch(s){case"select":return{...v,"aria-selected":f&&h};case"combobox":return{...v,...f&&{"aria-selected":!0}}}return{}}}},[i,s,c,o,r,l,d])}function Un(e,t){if(e==="rtl"&&(t.includes("right")||t.includes("left"))){const[n,o]=t.split("-"),r=n==="right"?"left":"right";return o===void 0?r:`${r}-${o}`}return t}function et(e,t,n,o){return e==="center"||o==="center"?{top:t}:e==="end"?{bottom:n}:e==="start"?{top:n}:{}}function tt(e,t,n,o,r){return e==="center"||o==="center"?{left:t}:e==="end"?{[r==="ltr"?"right":"left"]:n}:e==="start"?{[r==="ltr"?"left":"right"]:n}:{}}const Tn={bottom:"borderTopLeftRadius",left:"borderTopRightRadius",right:"borderBottomLeftRadius",top:"borderBottomRightRadius"};function Pn({position:e,arrowSize:t,arrowOffset:n,arrowRadius:o,arrowPosition:r,arrowX:i,arrowY:s,dir:c}){const[l,u="center"]=e.split("-"),d={width:t,height:t,transform:"rotate(45deg)",position:"absolute",[Tn[l]]:o},a=-t/2;return l==="left"?{...d,...et(u,s,n,r),right:a,borderLeftColor:"transparent",borderBottomColor:"transparent"}:l==="right"?{...d,...et(u,s,n,r),left:a,borderRightColor:"transparent",borderTopColor:"transparent"}:l==="top"?{...d,...tt(u,i,n,r,c),bottom:a,borderTopColor:"transparent",borderLeftColor:"transparent"}:l==="bottom"?{...d,...tt(u,i,n,r,c),top:a,borderBottomColor:"transparent",borderRightColor:"transparent"}:{}}const Ln=g.forwardRef(({position:e,arrowSize:t,arrowOffset:n,arrowRadius:o,arrowPosition:r,visible:i,arrowX:s,arrowY:c,style:l,...u},d)=>{const{dir:a}=bt();return i?wt.jsx("div",{...u,ref:d,style:{...l,...Pn({position:e,arrowSize:t,arrowOffset:n,arrowRadius:o,arrowPosition:r,dir:a,arrowX:s,arrowY:c})}}):null});Ln.displayName="@mantine/core/FloatingArrow";function zn({opened:e,floating:t,position:n,positionDependencies:o}){const[r,i]=g.useState(0);g.useEffect(()=>{if(t.refs.reference.current&&t.refs.floating.current)return fn(t.refs.reference.current,t.refs.floating.current,t.update)},[t.refs.reference.current,t.refs.floating.current,e,r,n]),$e(()=>{t.update()},o),$e(()=>{i(s=>s+1)},[e])}export{Ln as F,zn as a,Wn as b,Fn as c,q as d,Nn as e,In as f,Un as g,Rn as h,_n as i,Yn as j,$n as k,Bn as l,jn as m,Xn as n,Sn as o,Vn as p,Hn as q,kn as s,Kn as u};
