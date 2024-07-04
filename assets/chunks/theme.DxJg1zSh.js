const __vite__fileDeps=["assets/chunks/VPLocalSearchBox.ClwMtS2L.js","assets/chunks/framework.DEzZqnP6.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d as g,o as t,c as u,r as H,n as $,a as a2,t as F,b as w,w as h,e as C,T as B1,_ as S,u as ii,i as ni,f as oi,g as E3,h as T,j as E2,k,l as C2,m as p,p as m,q as K,s as X,v as y2,x as L3,y as l2,z as $1,A as I3,B as n0,C as li,D as ri,E as _2,F as q,G as Z,H as o0,I as F1,J as N,K as k2,L as l0,M as D1,N as G2,O as j1,P as ti,Q as Z2,R as fi,S as C3,U as mi,V as r0,W as zi,X as Hi,Y as ui,Z as t0,$ as f0,a0 as Vi,a1 as pi,a2 as hi,a3 as m0,a4 as Mi,a5 as vi,a6 as di,a7 as Li}from"./framework.DEzZqnP6.js";const Ci=g({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(c){return(e,a)=>(t(),u("span",{class:$(["VPBadge",e.type])},[H(e.$slots,"default",{},()=>[a2(F(e.text),1)])],2))}}),gi={key:0,class:"VPBackdrop"},bi=g({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(c){return(e,a)=>(t(),w(B1,{name:"fade"},{default:h(()=>[e.show?(t(),u("div",gi)):C("",!0)]),_:1}))}}),xi=S(bi,[["__scopeId","data-v-4365cfb8"]]),P=ii;function Ni(c,e){let a,s=!1;return()=>{a&&clearTimeout(a),s?a=setTimeout(c,e):(c(),(s=!0)&&setTimeout(()=>s=!1,e))}}function g3(c){return/^\//.test(c)?c:`/${c}`}function U3(c){const{pathname:e,search:a,hash:s,protocol:i}=new URL(c,"http://a.com");if(ni(c)||c.startsWith("#")||!i.startsWith("http")||!oi(e))return c;const{site:n}=P(),o=e.endsWith("/")||e.endsWith(".html")?c:c.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,n.value.cleanUrls?"":".html")}${a}${s}`);return E3(o)}const q3=T(E2?location.hash:"");E2&&window.addEventListener("hashchange",()=>{q3.value=location.hash});function n1({removeCurrent:c=!0,correspondingLink:e=!1}={}){const{site:a,localeIndex:s,page:i,theme:n}=P(),o=k(()=>{var r,f;return{label:(r=a.value.locales[s.value])==null?void 0:r.label,link:((f=a.value.locales[s.value])==null?void 0:f.link)||(s.value==="root"?"/":`/${s.value}/`)}});return{localeLinks:k(()=>Object.entries(a.value.locales).flatMap(([r,f])=>c&&o.value.label===f.label?[]:{text:f.label,link:ki(f.link||(r==="root"?"/":`/${r}/`),n.value.i18nRouting!==!1&&e,i.value.relativePath.slice(o.value.link.length-1),!a.value.cleanUrls)+q3.value})),currentLang:o}}function ki(c,e,a,s){return e?c.replace(/\/$/,"")+g3(a.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,s?".html":"")):c}const yi=c=>(K("data-v-29da0daf"),c=c(),X(),c),wi={class:"NotFound"},Si={class:"code"},Ai={class:"title"},_i=yi(()=>p("div",{class:"divider"},null,-1)),Pi={class:"quote"},Ti={class:"action"},Bi=["href","aria-label"],$i=g({__name:"NotFound",setup(c){const{site:e,theme:a}=P(),{localeLinks:s}=n1({removeCurrent:!1}),i=T("/");return C2(()=>{var o;const n=window.location.pathname.replace(e.value.base,"").replace(/(^.*?\/).*$/,"/$1");s.value.length&&(i.value=((o=s.value.find(({link:l})=>l.startsWith(n)))==null?void 0:o.link)||s.value[0].link)}),(n,o)=>{var l,r,f,z,V;return t(),u("div",wi,[p("p",Si,F(((l=m(a).notFound)==null?void 0:l.code)??"404"),1),p("h1",Ai,F(((r=m(a).notFound)==null?void 0:r.title)??"PAGE NOT FOUND"),1),_i,p("blockquote",Pi,F(((f=m(a).notFound)==null?void 0:f.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),p("div",Ti,[p("a",{class:"link",href:m(E3)(i.value),"aria-label":((z=m(a).notFound)==null?void 0:z.linkLabel)??"go to home"},F(((V=m(a).notFound)==null?void 0:V.linkText)??"Take me home"),9,Bi)])])}}}),Fi=S($i,[["__scopeId","data-v-29da0daf"]]);function z0(c,e){if(Array.isArray(c))return x1(c);if(c==null)return[];e=g3(e);const a=Object.keys(c).sort((i,n)=>n.split("/").length-i.split("/").length).find(i=>e.startsWith(g3(i))),s=a?c[a]:[];return Array.isArray(s)?x1(s):x1(s.items,s.base)}function Di(c){const e=[];let a=0;for(const s in c){const i=c[s];if(i.items){a=e.push(i);continue}e[a]||e.push({items:[]}),e[a].items.push(i)}return e}function ji(c){const e=[];function a(s){for(const i of s)i.text&&i.link&&e.push({text:i.text,link:i.link,docFooterText:i.docFooterText}),i.items&&a(i.items)}return a(c),e}function b3(c,e){return Array.isArray(e)?e.some(a=>b3(c,a)):y2(c,e.link)?!0:e.items?b3(c,e.items):!1}function x1(c,e){return[...c].map(a=>{const s={...a},i=s.base||e;return i&&s.link&&(s.link=i+s.link),s.items&&(s.items=x1(s.items,i)),s})}function u2(){const{frontmatter:c,page:e,theme:a}=P(),s=L3("(min-width: 960px)"),i=T(!1),n=k(()=>{const A=a.value.sidebar,_=e.value.relativePath;return A?z0(A,_):[]}),o=T(n.value);l2(n,(A,_)=>{JSON.stringify(A)!==JSON.stringify(_)&&(o.value=n.value)});const l=k(()=>c.value.sidebar!==!1&&o.value.length>0&&c.value.layout!=="home"),r=k(()=>f?c.value.aside==null?a.value.aside==="left":c.value.aside==="left":!1),f=k(()=>c.value.layout==="home"?!1:c.value.aside!=null?!!c.value.aside:a.value.aside!==!1),z=k(()=>l.value&&s.value),V=k(()=>l.value?Di(o.value):[]);function M(){i.value=!0}function L(){i.value=!1}function y(){i.value?L():M()}return{isOpen:i,sidebar:o,sidebarGroups:V,hasSidebar:l,hasAside:f,leftAside:r,isSidebarEnabled:z,open:M,close:L,toggle:y}}function Oi(c,e){let a;$1(()=>{a=c.value?document.activeElement:void 0}),C2(()=>{window.addEventListener("keyup",s)}),I3(()=>{window.removeEventListener("keyup",s)});function s(i){i.key==="Escape"&&c.value&&(e(),a==null||a.focus())}}function Ri(c){const{page:e}=P(),a=T(!1),s=k(()=>c.value.collapsed!=null),i=k(()=>!!c.value.link),n=T(!1),o=()=>{n.value=y2(e.value.relativePath,c.value.link)};l2([e,c,q3],o),C2(o);const l=k(()=>n.value?!0:c.value.items?b3(e.value.relativePath,c.value.items):!1),r=k(()=>!!(c.value.items&&c.value.items.length));$1(()=>{a.value=!!(s.value&&c.value.collapsed)}),n0(()=>{(n.value||l.value)&&(a.value=!1)});function f(){s.value&&(a.value=!a.value)}return{collapsed:a,collapsible:s,isLink:i,isActiveLink:n,hasActiveLink:l,hasChildren:r,toggle:f}}function Ei(){const{hasSidebar:c}=u2(),e=L3("(min-width: 960px)"),a=L3("(min-width: 1280px)");return{isAsideEnabled:k(()=>!a.value&&!e.value?!1:c.value?a.value:e.value)}}const x3=[];function H0(c){return typeof c.outline=="object"&&!Array.isArray(c.outline)&&c.outline.label||c.outlineTitle||"On this page"}function W3(c){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(a=>a.id&&a.hasChildNodes()).map(a=>{const s=Number(a.tagName[1]);return{element:a,title:Ii(a),link:"#"+a.id,level:s}});return Ui(e,c)}function Ii(c){let e="";for(const a of c.childNodes)if(a.nodeType===1){if(a.classList.contains("VPBadge")||a.classList.contains("header-anchor")||a.classList.contains("ignore-header"))continue;e+=a.textContent}else a.nodeType===3&&(e+=a.textContent);return e.trim()}function Ui(c,e){if(e===!1)return[];const a=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[s,i]=typeof a=="number"?[a,a]:a==="deep"?[2,6]:a;c=c.filter(o=>o.level>=s&&o.level<=i),x3.length=0;for(const{element:o,link:l}of c)x3.push({element:o,link:l});const n=[];c:for(let o=0;o<c.length;o++){const l=c[o];if(o===0)n.push(l);else{for(let r=o-1;r>=0;r--){const f=c[r];if(f.level<l.level){(f.children||(f.children=[])).push(l);continue c}}n.push(l)}}return n}function qi(c,e){const{isAsideEnabled:a}=Ei(),s=Ni(n,100);let i=null;C2(()=>{requestAnimationFrame(n),window.addEventListener("scroll",s)}),li(()=>{o(location.hash)}),I3(()=>{window.removeEventListener("scroll",s)});function n(){if(!a.value)return;const l=window.scrollY,r=window.innerHeight,f=document.body.offsetHeight,z=Math.abs(l+r-f)<1,V=x3.map(({element:L,link:y})=>({link:y,top:Wi(L)})).filter(({top:L})=>!Number.isNaN(L)).sort((L,y)=>L.top-y.top);if(!V.length){o(null);return}if(l<1){o(null);return}if(z){o(V[V.length-1].link);return}let M=null;for(const{link:L,top:y}of V){if(y>l+ri()+4)break;M=L}o(M)}function o(l){i&&i.classList.remove("active"),l==null?i=null:i=c.value.querySelector(`a[href="${decodeURIComponent(l)}"]`);const r=i;r?(r.classList.add("active"),e.value.style.top=r.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function Wi(c){let e=0;for(;c!==document.body;){if(c===null)return NaN;e+=c.offsetTop,c=c.offsetParent}return e}const Gi=["href","title"],Yi=g({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(c){function e({target:a}){const s=a.href.split("#")[1],i=document.getElementById(decodeURIComponent(s));i==null||i.focus({preventScroll:!0})}return(a,s)=>{const i=_2("VPDocOutlineItem",!0);return t(),u("ul",{class:$(["VPDocOutlineItem",a.root?"root":"nested"])},[(t(!0),u(q,null,Z(a.headers,({children:n,link:o,title:l})=>(t(),u("li",null,[p("a",{class:"outline-link",href:o,onClick:e,title:l},F(l),9,Gi),n!=null&&n.length?(t(),w(i,{key:0,headers:n},null,8,["headers"])):C("",!0)]))),256))],2)}}}),u0=S(Yi,[["__scopeId","data-v-bfa750c4"]]),Ki=c=>(K("data-v-b986de79"),c=c(),X(),c),Xi={class:"content"},Zi={class:"outline-title",role:"heading","aria-level":"2"},Qi={"aria-labelledby":"doc-outline-aria-label"},Ji=Ki(()=>p("span",{class:"visually-hidden",id:"doc-outline-aria-label"}," Table of Contents for current page ",-1)),cn=g({__name:"VPDocAsideOutline",setup(c){const{frontmatter:e,theme:a}=P(),s=o0([]);F1(()=>{s.value=W3(e.value.outline??a.value.outline)});const i=T(),n=T();return qi(i,n),(o,l)=>(t(),u("div",{class:$(["VPDocAsideOutline",{"has-outline":s.value.length>0}]),ref_key:"container",ref:i,role:"navigation"},[p("div",Xi,[p("div",{class:"outline-marker",ref_key:"marker",ref:n},null,512),p("div",Zi,F(m(H0)(m(a))),1),p("nav",Qi,[Ji,N(u0,{headers:s.value,root:!0},null,8,["headers"])])])],2))}}),en=S(cn,[["__scopeId","data-v-b986de79"]]),an={class:"VPDocAsideCarbonAds"},sn=g({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(c){const e=()=>null;return(a,s)=>(t(),u("div",an,[N(m(e),{"carbon-ads":a.carbonAds},null,8,["carbon-ads"])]))}}),nn=c=>(K("data-v-77a12a66"),c=c(),X(),c),on={class:"VPDocAside"},ln=nn(()=>p("div",{class:"spacer"},null,-1)),rn=g({__name:"VPDocAside",setup(c){const{theme:e}=P();return(a,s)=>(t(),u("div",on,[H(a.$slots,"aside-top",{},void 0,!0),H(a.$slots,"aside-outline-before",{},void 0,!0),N(en),H(a.$slots,"aside-outline-after",{},void 0,!0),ln,H(a.$slots,"aside-ads-before",{},void 0,!0),m(e).carbonAds?(t(),w(sn,{key:0,"carbon-ads":m(e).carbonAds},null,8,["carbon-ads"])):C("",!0),H(a.$slots,"aside-ads-after",{},void 0,!0),H(a.$slots,"aside-bottom",{},void 0,!0)]))}}),tn=S(rn,[["__scopeId","data-v-77a12a66"]]);function fn(){const{theme:c,page:e}=P();return k(()=>{const{text:a="Edit this page",pattern:s=""}=c.value.editLink||{};let i;return typeof s=="function"?i=s(e.value):i=s.replace(/:path/g,e.value.filePath),{url:i,text:a}})}function mn(){const{page:c,theme:e,frontmatter:a}=P();return k(()=>{var r,f,z,V,M,L,y,A;const s=z0(e.value.sidebar,c.value.relativePath),i=ji(s),n=i.findIndex(_=>y2(c.value.relativePath,_.link)),o=((r=e.value.docFooter)==null?void 0:r.prev)===!1&&!a.value.prev||a.value.prev===!1,l=((f=e.value.docFooter)==null?void 0:f.next)===!1&&!a.value.next||a.value.next===!1;return{prev:o?void 0:{text:(typeof a.value.prev=="string"?a.value.prev:typeof a.value.prev=="object"?a.value.prev.text:void 0)??((z=i[n-1])==null?void 0:z.docFooterText)??((V=i[n-1])==null?void 0:V.text),link:(typeof a.value.prev=="object"?a.value.prev.link:void 0)??((M=i[n-1])==null?void 0:M.link)},next:l?void 0:{text:(typeof a.value.next=="string"?a.value.next:typeof a.value.next=="object"?a.value.next.text:void 0)??((L=i[n+1])==null?void 0:L.docFooterText)??((y=i[n+1])==null?void 0:y.text),link:(typeof a.value.next=="object"?a.value.next.link:void 0)??((A=i[n+1])==null?void 0:A.link)}}})}const n2=g({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(c){const e=c,a=k(()=>e.tag??(e.href?"a":"span")),s=k(()=>e.href&&l0.test(e.href));return(i,n)=>(t(),w(k2(a.value),{class:$(["VPLink",{link:i.href,"vp-external-link-icon":s.value,"no-icon":i.noIcon}]),href:i.href?m(U3)(i.href):void 0,target:i.target??(s.value?"_blank":void 0),rel:i.rel??(s.value?"noreferrer":void 0)},{default:h(()=>[H(i.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),zn={class:"VPLastUpdated"},Hn=["datetime"],un=g({__name:"VPDocFooterLastUpdated",setup(c){const{theme:e,page:a,frontmatter:s,lang:i}=P(),n=k(()=>new Date(s.value.lastUpdated??a.value.lastUpdated)),o=k(()=>n.value.toISOString()),l=T("");return C2(()=>{$1(()=>{var r,f,z;l.value=new Intl.DateTimeFormat((f=(r=e.value.lastUpdated)==null?void 0:r.formatOptions)!=null&&f.forceLocale?i.value:void 0,((z=e.value.lastUpdated)==null?void 0:z.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(n.value)})}),(r,f)=>{var z;return t(),u("p",zn,[a2(F(((z=m(e).lastUpdated)==null?void 0:z.text)||m(e).lastUpdatedText||"Last updated")+": ",1),p("time",{datetime:o.value},F(l.value),9,Hn)])}}}),Vn=S(un,[["__scopeId","data-v-79b37161"]]),pn=c=>(K("data-v-7f36cf1e"),c=c(),X(),c),hn={key:0,class:"VPDocFooter"},Mn={key:0,class:"edit-info"},vn={key:0,class:"edit-link"},dn=pn(()=>p("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),Ln={key:1,class:"last-updated"},Cn={key:1,class:"prev-next"},gn={class:"pager"},bn=["innerHTML"],xn=["innerHTML"],Nn={class:"pager"},kn=["innerHTML"],yn=["innerHTML"],wn=g({__name:"VPDocFooter",setup(c){const{theme:e,page:a,frontmatter:s}=P(),i=fn(),n=mn(),o=k(()=>e.value.editLink&&s.value.editLink!==!1),l=k(()=>a.value.lastUpdated&&s.value.lastUpdated!==!1),r=k(()=>o.value||l.value||n.value.prev||n.value.next);return(f,z)=>{var V,M,L,y;return r.value?(t(),u("footer",hn,[H(f.$slots,"doc-footer-before",{},void 0,!0),o.value||l.value?(t(),u("div",Mn,[o.value?(t(),u("div",vn,[N(n2,{class:"edit-link-button",href:m(i).url,"no-icon":!0},{default:h(()=>[dn,a2(" "+F(m(i).text),1)]),_:1},8,["href"])])):C("",!0),l.value?(t(),u("div",Ln,[N(Vn)])):C("",!0)])):C("",!0),(V=m(n).prev)!=null&&V.link||(M=m(n).next)!=null&&M.link?(t(),u("nav",Cn,[p("div",gn,[(L=m(n).prev)!=null&&L.link?(t(),w(n2,{key:0,class:"pager-link prev",href:m(n).prev.link},{default:h(()=>{var A;return[p("span",{class:"desc",innerHTML:((A=m(e).docFooter)==null?void 0:A.prev)||"Previous page"},null,8,bn),p("span",{class:"title",innerHTML:m(n).prev.text},null,8,xn)]}),_:1},8,["href"])):C("",!0)]),p("div",Nn,[(y=m(n).next)!=null&&y.link?(t(),w(n2,{key:0,class:"pager-link next",href:m(n).next.link},{default:h(()=>{var A;return[p("span",{class:"desc",innerHTML:((A=m(e).docFooter)==null?void 0:A.next)||"Next page"},null,8,kn),p("span",{class:"title",innerHTML:m(n).next.text},null,8,yn)]}),_:1},8,["href"])):C("",!0)])])):C("",!0)])):C("",!0)}}}),Sn=S(wn,[["__scopeId","data-v-7f36cf1e"]]),An=c=>(K("data-v-fae99d23"),c=c(),X(),c),_n={class:"container"},Pn=An(()=>p("div",{class:"aside-curtain"},null,-1)),Tn={class:"aside-container"},Bn={class:"aside-content"},$n={class:"content"},Fn={class:"content-container"},Dn={class:"main"},jn=g({__name:"VPDoc",setup(c){const{theme:e}=P(),a=D1(),{hasSidebar:s,hasAside:i,leftAside:n}=u2(),o=k(()=>a.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(l,r)=>{const f=_2("Content");return t(),u("div",{class:$(["VPDoc",{"has-sidebar":m(s),"has-aside":m(i)}])},[H(l.$slots,"doc-top",{},void 0,!0),p("div",_n,[m(i)?(t(),u("div",{key:0,class:$(["aside",{"left-aside":m(n)}])},[Pn,p("div",Tn,[p("div",Bn,[N(tn,null,{"aside-top":h(()=>[H(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":h(()=>[H(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":h(()=>[H(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[H(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[H(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[H(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):C("",!0),p("div",$n,[p("div",Fn,[H(l.$slots,"doc-before",{},void 0,!0),p("main",Dn,[N(f,{class:$(["vp-doc",[o.value,m(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),N(Sn,null,{"doc-footer-before":h(()=>[H(l.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),H(l.$slots,"doc-after",{},void 0,!0)])])]),H(l.$slots,"doc-bottom",{},void 0,!0)],2)}}}),On=S(jn,[["__scopeId","data-v-fae99d23"]]),Rn=g({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(c){const e=c,a=k(()=>e.href&&l0.test(e.href)),s=k(()=>e.tag||e.href?"a":"button");return(i,n)=>(t(),w(k2(s.value),{class:$(["VPButton",[i.size,i.theme]]),href:i.href?m(U3)(i.href):void 0,target:e.target??(a.value?"_blank":void 0),rel:e.rel??(a.value?"noreferrer":void 0)},{default:h(()=>[a2(F(i.text),1)]),_:1},8,["class","href","target","rel"]))}}),En=S(Rn,[["__scopeId","data-v-6b814122"]]),In=["src","alt"],Un=g({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(c){return(e,a)=>{const s=_2("VPImage",!0);return e.image?(t(),u(q,{key:0},[typeof e.image=="string"||"src"in e.image?(t(),u("img",G2({key:0,class:"VPImage"},typeof e.image=="string"?e.$attrs:{...e.image,...e.$attrs},{src:m(E3)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,In)):(t(),u(q,{key:1},[N(s,G2({class:"dark",image:e.image.dark,alt:e.image.alt},e.$attrs),null,16,["image","alt"]),N(s,G2({class:"light",image:e.image.light,alt:e.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):C("",!0)}}}),w1=S(Un,[["__scopeId","data-v-d86665e7"]]),qn=c=>(K("data-v-a29fcb05"),c=c(),X(),c),Wn={class:"container"},Gn={class:"main"},Yn={key:0,class:"name"},Kn=["innerHTML"],Xn=["innerHTML"],Zn=["innerHTML"],Qn={key:0,class:"actions"},Jn={key:0,class:"image"},co={class:"image-container"},eo=qn(()=>p("div",{class:"image-bg"},null,-1)),ao=g({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(c){const e=j1("hero-image-slot-exists");return(a,s)=>(t(),u("div",{class:$(["VPHero",{"has-image":a.image||m(e)}])},[p("div",Wn,[p("div",Gn,[H(a.$slots,"home-hero-info-before",{},void 0,!0),H(a.$slots,"home-hero-info",{},()=>[a.name?(t(),u("h1",Yn,[p("span",{innerHTML:a.name,class:"clip"},null,8,Kn)])):C("",!0),a.text?(t(),u("p",{key:1,innerHTML:a.text,class:"text"},null,8,Xn)):C("",!0),a.tagline?(t(),u("p",{key:2,innerHTML:a.tagline,class:"tagline"},null,8,Zn)):C("",!0)],!0),H(a.$slots,"home-hero-info-after",{},void 0,!0),a.actions?(t(),u("div",Qn,[(t(!0),u(q,null,Z(a.actions,i=>(t(),u("div",{key:i.link,class:"action"},[N(En,{tag:"a",size:"medium",theme:i.theme,text:i.text,href:i.link,target:i.target,rel:i.rel},null,8,["theme","text","href","target","rel"])]))),128))])):C("",!0),H(a.$slots,"home-hero-actions-after",{},void 0,!0)]),a.image||m(e)?(t(),u("div",Jn,[p("div",co,[eo,H(a.$slots,"home-hero-image",{},()=>[a.image?(t(),w(w1,{key:0,class:"image-src",image:a.image},null,8,["image"])):C("",!0)],!0)])])):C("",!0)])],2))}}),so=S(ao,[["__scopeId","data-v-a29fcb05"]]),io=g({__name:"VPHomeHero",setup(c){const{frontmatter:e}=P();return(a,s)=>m(e).hero?(t(),w(so,{key:0,class:"VPHomeHero",name:m(e).hero.name,text:m(e).hero.text,tagline:m(e).hero.tagline,image:m(e).hero.image,actions:m(e).hero.actions},{"home-hero-info-before":h(()=>[H(a.$slots,"home-hero-info-before")]),"home-hero-info":h(()=>[H(a.$slots,"home-hero-info")]),"home-hero-info-after":h(()=>[H(a.$slots,"home-hero-info-after")]),"home-hero-actions-after":h(()=>[H(a.$slots,"home-hero-actions-after")]),"home-hero-image":h(()=>[H(a.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):C("",!0)}}),no=c=>(K("data-v-e0b95888"),c=c(),X(),c),oo={class:"box"},lo={key:0,class:"icon"},ro=["innerHTML"],to=["innerHTML"],fo=["innerHTML"],mo={key:4,class:"link-text"},zo={class:"link-text-value"},Ho=no(()=>p("span",{class:"vpi-arrow-right link-text-icon"},null,-1)),uo=g({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(c){return(e,a)=>(t(),w(n2,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:h(()=>[p("article",oo,[typeof e.icon=="object"&&e.icon.wrap?(t(),u("div",lo,[N(w1,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(t(),w(w1,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(t(),u("div",{key:2,class:"icon",innerHTML:e.icon},null,8,ro)):C("",!0),p("h2",{class:"title",innerHTML:e.title},null,8,to),e.details?(t(),u("p",{key:3,class:"details",innerHTML:e.details},null,8,fo)):C("",!0),e.linkText?(t(),u("div",mo,[p("p",zo,[a2(F(e.linkText)+" ",1),Ho])])):C("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Vo=S(uo,[["__scopeId","data-v-e0b95888"]]),po={key:0,class:"VPFeatures"},ho={class:"container"},Mo={class:"items"},vo=g({__name:"VPFeatures",props:{features:{}},setup(c){const e=c,a=k(()=>{const s=e.features.length;if(s){if(s===2)return"grid-2";if(s===3)return"grid-3";if(s%3===0)return"grid-6";if(s>3)return"grid-4"}else return});return(s,i)=>s.features?(t(),u("div",po,[p("div",ho,[p("div",Mo,[(t(!0),u(q,null,Z(s.features,n=>(t(),u("div",{key:n.title,class:$(["item",[a.value]])},[N(Vo,{icon:n.icon,title:n.title,details:n.details,link:n.link,"link-text":n.linkText,rel:n.rel,target:n.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):C("",!0)}}),Lo=S(vo,[["__scopeId","data-v-c5c21c12"]]),Co=g({__name:"VPHomeFeatures",setup(c){const{frontmatter:e}=P();return(a,s)=>m(e).features?(t(),w(Lo,{key:0,class:"VPHomeFeatures",features:m(e).features},null,8,["features"])):C("",!0)}}),go=g({__name:"VPHomeContent",setup(c){const{width:e}=ti({includeScrollbar:!1});return(a,s)=>(t(),u("div",{class:"vp-doc container",style:Z2(m(e)?{"--vp-offset":`calc(50% - ${m(e)/2}px)`}:{})},[H(a.$slots,"default",{},void 0,!0)],4))}}),bo=S(go,[["__scopeId","data-v-0fed7bf2"]]),xo={class:"VPHome"},No=g({__name:"VPHome",setup(c){const{frontmatter:e}=P();return(a,s)=>{const i=_2("Content");return t(),u("div",xo,[H(a.$slots,"home-hero-before",{},void 0,!0),N(io,null,{"home-hero-info-before":h(()=>[H(a.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[H(a.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[H(a.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[H(a.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[H(a.$slots,"home-hero-image",{},void 0,!0)]),_:3}),H(a.$slots,"home-hero-after",{},void 0,!0),H(a.$slots,"home-features-before",{},void 0,!0),N(Co),H(a.$slots,"home-features-after",{},void 0,!0),m(e).markdownStyles!==!1?(t(),w(bo,{key:0},{default:h(()=>[N(i)]),_:1})):(t(),w(i,{key:1}))])}}}),ko=S(No,[["__scopeId","data-v-ecc01aca"]]),yo={},wo={class:"VPPage"};function So(c,e){const a=_2("Content");return t(),u("div",wo,[H(c.$slots,"page-top"),N(a),H(c.$slots,"page-bottom")])}const Ao=S(yo,[["render",So]]),_o=g({__name:"VPContent",setup(c){const{page:e,frontmatter:a}=P(),{hasSidebar:s}=u2();return(i,n)=>(t(),u("div",{class:$(["VPContent",{"has-sidebar":m(s),"is-home":m(a).layout==="home"}]),id:"VPContent"},[m(e).isNotFound?H(i.$slots,"not-found",{key:0},()=>[N(Fi)],!0):m(a).layout==="page"?(t(),w(Ao,{key:1},{"page-top":h(()=>[H(i.$slots,"page-top",{},void 0,!0)]),"page-bottom":h(()=>[H(i.$slots,"page-bottom",{},void 0,!0)]),_:3})):m(a).layout==="home"?(t(),w(ko,{key:2},{"home-hero-before":h(()=>[H(i.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":h(()=>[H(i.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[H(i.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[H(i.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[H(i.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[H(i.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":h(()=>[H(i.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":h(()=>[H(i.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":h(()=>[H(i.$slots,"home-features-after",{},void 0,!0)]),_:3})):m(a).layout&&m(a).layout!=="doc"?(t(),w(k2(m(a).layout),{key:3})):(t(),w(On,{key:4},{"doc-top":h(()=>[H(i.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":h(()=>[H(i.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":h(()=>[H(i.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":h(()=>[H(i.$slots,"doc-before",{},void 0,!0)]),"doc-after":h(()=>[H(i.$slots,"doc-after",{},void 0,!0)]),"aside-top":h(()=>[H(i.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":h(()=>[H(i.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[H(i.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[H(i.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[H(i.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":h(()=>[H(i.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),Po=S(_o,[["__scopeId","data-v-1314dbe7"]]),To={class:"container"},Bo=["innerHTML"],$o=["innerHTML"],Fo=g({__name:"VPFooter",setup(c){const{theme:e,frontmatter:a}=P(),{hasSidebar:s}=u2();return(i,n)=>m(e).footer&&m(a).footer!==!1?(t(),u("footer",{key:0,class:$(["VPFooter",{"has-sidebar":m(s)}])},[p("div",To,[m(e).footer.message?(t(),u("p",{key:0,class:"message",innerHTML:m(e).footer.message},null,8,Bo)):C("",!0),m(e).footer.copyright?(t(),u("p",{key:1,class:"copyright",innerHTML:m(e).footer.copyright},null,8,$o)):C("",!0)])],2)):C("",!0)}}),Do=S(Fo,[["__scopeId","data-v-6c8072d3"]]);function V0(){const{theme:c,frontmatter:e}=P(),a=o0([]),s=k(()=>a.value.length>0);return F1(()=>{a.value=W3(e.value.outline??c.value.outline)}),{headers:a,hasLocalNav:s}}const jo=c=>(K("data-v-adc80448"),c=c(),X(),c),Oo=jo(()=>p("span",{class:"vpi-chevron-right icon"},null,-1)),Ro={class:"header"},Eo={class:"outline"},Io=g({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(c){const e=c,{theme:a}=P(),s=T(!1),i=T(0),n=T(),o=T();fi(n,()=>{s.value=!1}),C3("Escape",()=>{s.value=!1}),F1(()=>{s.value=!1});function l(){s.value=!s.value,i.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function r(z){z.target.classList.contains("outline-link")&&(o.value&&(o.value.style.transition="none"),mi(()=>{s.value=!1}))}function f(){s.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(z,V)=>(t(),u("div",{class:"VPLocalNavOutlineDropdown",style:Z2({"--vp-vh":i.value+"px"}),ref_key:"main",ref:n},[z.headers.length>0?(t(),u("button",{key:0,onClick:l,class:$({open:s.value})},[a2(F(m(H0)(m(a)))+" ",1),Oo],2)):(t(),u("button",{key:1,onClick:f},F(m(a).returnToTopLabel||"Return to top"),1)),N(B1,{name:"flyout"},{default:h(()=>[s.value?(t(),u("div",{key:0,ref_key:"items",ref:o,class:"items",onClick:r},[p("div",Ro,[p("a",{class:"top-link",href:"#",onClick:f},F(m(a).returnToTopLabel||"Return to top"),1)]),p("div",Eo,[N(u0,{headers:z.headers},null,8,["headers"])])],512)):C("",!0)]),_:1})],4))}}),Uo=S(Io,[["__scopeId","data-v-adc80448"]]),qo=c=>(K("data-v-61706eba"),c=c(),X(),c),Wo={class:"container"},Go=["aria-expanded"],Yo=qo(()=>p("span",{class:"vpi-align-left menu-icon"},null,-1)),Ko={class:"menu-text"},Xo=g({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(c){const{theme:e,frontmatter:a}=P(),{hasSidebar:s}=u2(),{headers:i}=V0(),{y:n}=r0(),o=T(0);C2(()=>{o.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),F1(()=>{i.value=W3(a.value.outline??e.value.outline)});const l=k(()=>i.value.length===0),r=k(()=>l.value&&!s.value),f=k(()=>({VPLocalNav:!0,"has-sidebar":s.value,empty:l.value,fixed:r.value}));return(z,V)=>m(a).layout!=="home"&&(!r.value||m(n)>=o.value)?(t(),u("div",{key:0,class:$(f.value)},[p("div",Wo,[m(s)?(t(),u("button",{key:0,class:"menu","aria-expanded":z.open,"aria-controls":"VPSidebarNav",onClick:V[0]||(V[0]=M=>z.$emit("open-menu"))},[Yo,p("span",Ko,F(m(e).sidebarMenuLabel||"Menu"),1)],8,Go)):C("",!0),N(Uo,{headers:m(i),navHeight:o.value},null,8,["headers","navHeight"])])],2)):C("",!0)}}),Zo=S(Xo,[["__scopeId","data-v-61706eba"]]);function Qo(){const c=T(!1);function e(){c.value=!0,window.addEventListener("resize",i)}function a(){c.value=!1,window.removeEventListener("resize",i)}function s(){c.value?a():e()}function i(){window.outerWidth>=768&&a()}const n=D1();return l2(()=>n.path,a),{isScreenOpen:c,openScreen:e,closeScreen:a,toggleScreen:s}}const Jo={},cl={class:"VPSwitch",type:"button",role:"switch"},el={class:"check"},al={key:0,class:"icon"};function sl(c,e){return t(),u("button",cl,[p("span",el,[c.$slots.default?(t(),u("span",al,[H(c.$slots,"default",{},void 0,!0)])):C("",!0)])])}const il=S(Jo,[["render",sl],["__scopeId","data-v-a7387718"]]),p0=c=>(K("data-v-4e3e43e7"),c=c(),X(),c),nl=p0(()=>p("span",{class:"vpi-sun sun"},null,-1)),ol=p0(()=>p("span",{class:"vpi-moon moon"},null,-1)),ll=g({__name:"VPSwitchAppearance",setup(c){const{isDark:e,theme:a}=P(),s=j1("toggle-appearance",()=>{e.value=!e.value}),i=k(()=>e.value?a.value.lightModeSwitchTitle||"Switch to light theme":a.value.darkModeSwitchTitle||"Switch to dark theme");return(n,o)=>(t(),w(il,{title:i.value,class:"VPSwitchAppearance","aria-checked":m(e),onClick:m(s)},{default:h(()=>[nl,ol]),_:1},8,["title","aria-checked","onClick"]))}}),G3=S(ll,[["__scopeId","data-v-4e3e43e7"]]),rl={key:0,class:"VPNavBarAppearance"},tl=g({__name:"VPNavBarAppearance",setup(c){const{site:e}=P();return(a,s)=>m(e).appearance&&m(e).appearance!=="force-dark"?(t(),u("div",rl,[N(G3)])):C("",!0)}}),fl=S(tl,[["__scopeId","data-v-0e6dda22"]]),Y3=T();let h0=!1,m3=0;function ml(c){const e=T(!1);if(E2){!h0&&zl(),m3++;const a=l2(Y3,s=>{var i,n,o;s===c.el.value||(i=c.el.value)!=null&&i.contains(s)?(e.value=!0,(n=c.onFocus)==null||n.call(c)):(e.value=!1,(o=c.onBlur)==null||o.call(c))});I3(()=>{a(),m3--,m3||Hl()})}return zi(e)}function zl(){document.addEventListener("focusin",M0),h0=!0,Y3.value=document.activeElement}function Hl(){document.removeEventListener("focusin",M0)}function M0(){Y3.value=document.activeElement}const ul={class:"VPMenuLink"},Vl=g({__name:"VPMenuLink",props:{item:{}},setup(c){const{page:e}=P();return(a,s)=>(t(),u("div",ul,[N(n2,{class:$({active:m(y2)(m(e).relativePath,a.item.activeMatch||a.item.link,!!a.item.activeMatch)}),href:a.item.link,target:a.item.target,rel:a.item.rel},{default:h(()=>[a2(F(a.item.text),1)]),_:1},8,["class","href","target","rel"])]))}}),O1=S(Vl,[["__scopeId","data-v-1bd0c095"]]),pl={class:"VPMenuGroup"},hl={key:0,class:"title"},Ml=g({__name:"VPMenuGroup",props:{text:{},items:{}},setup(c){return(e,a)=>(t(),u("div",pl,[e.text?(t(),u("p",hl,F(e.text),1)):C("",!0),(t(!0),u(q,null,Z(e.items,s=>(t(),u(q,null,["link"in s?(t(),w(O1,{key:0,item:s},null,8,["item"])):C("",!0)],64))),256))]))}}),vl=S(Ml,[["__scopeId","data-v-8e80646c"]]),dl={class:"VPMenu"},Ll={key:0,class:"items"},Cl=g({__name:"VPMenu",props:{items:{}},setup(c){return(e,a)=>(t(),u("div",dl,[e.items?(t(),u("div",Ll,[(t(!0),u(q,null,Z(e.items,s=>(t(),u(q,{key:s.text},["link"in s?(t(),w(O1,{key:0,item:s},null,8,["item"])):(t(),w(vl,{key:1,text:s.text,items:s.items},null,8,["text","items"]))],64))),128))])):C("",!0),H(e.$slots,"default",{},void 0,!0)]))}}),gl=S(Cl,[["__scopeId","data-v-d66173f6"]]),bl=c=>(K("data-v-badc3971"),c=c(),X(),c),xl=["aria-expanded","aria-label"],Nl={key:0,class:"text"},kl=["innerHTML"],yl=bl(()=>p("span",{class:"vpi-chevron-down text-icon"},null,-1)),wl={key:1,class:"vpi-more-horizontal icon"},Sl={class:"menu"},Al=g({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(c){const e=T(!1),a=T();ml({el:a,onBlur:s});function s(){e.value=!1}return(i,n)=>(t(),u("div",{class:"VPFlyout",ref_key:"el",ref:a,onMouseenter:n[1]||(n[1]=o=>e.value=!0),onMouseleave:n[2]||(n[2]=o=>e.value=!1)},[p("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":i.label,onClick:n[0]||(n[0]=o=>e.value=!e.value)},[i.button||i.icon?(t(),u("span",Nl,[i.icon?(t(),u("span",{key:0,class:$([i.icon,"option-icon"])},null,2)):C("",!0),i.button?(t(),u("span",{key:1,innerHTML:i.button},null,8,kl)):C("",!0),yl])):(t(),u("span",wl))],8,xl),p("div",Sl,[N(gl,{items:i.items},{default:h(()=>[H(i.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),K3=S(Al,[["__scopeId","data-v-badc3971"]]),_l=["href","aria-label","innerHTML"],Pl=g({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(c){const e=c,a=k(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}" />`);return(s,i)=>(t(),u("a",{class:"VPSocialLink no-icon",href:s.link,"aria-label":s.ariaLabel??(typeof s.icon=="string"?s.icon:""),target:"_blank",rel:"noopener",innerHTML:a.value},null,8,_l))}}),Tl=S(Pl,[["__scopeId","data-v-afdd3a26"]]),Bl={class:"VPSocialLinks"},$l=g({__name:"VPSocialLinks",props:{links:{}},setup(c){return(e,a)=>(t(),u("div",Bl,[(t(!0),u(q,null,Z(e.links,({link:s,icon:i,ariaLabel:n})=>(t(),w(Tl,{key:s,icon:i,link:s,ariaLabel:n},null,8,["icon","link","ariaLabel"]))),128))]))}}),X3=S($l,[["__scopeId","data-v-3696821a"]]),Fl={key:0,class:"group translations"},Dl={class:"trans-title"},jl={key:1,class:"group"},Ol={class:"item appearance"},Rl={class:"label"},El={class:"appearance-action"},Il={key:2,class:"group"},Ul={class:"item social-links"},ql=g({__name:"VPNavBarExtra",setup(c){const{site:e,theme:a}=P(),{localeLinks:s,currentLang:i}=n1({correspondingLink:!0}),n=k(()=>s.value.length&&i.value.label||e.value.appearance||a.value.socialLinks);return(o,l)=>n.value?(t(),w(K3,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:h(()=>[m(s).length&&m(i).label?(t(),u("div",Fl,[p("p",Dl,F(m(i).label),1),(t(!0),u(q,null,Z(m(s),r=>(t(),w(O1,{key:r.link,item:r},null,8,["item"]))),128))])):C("",!0),m(e).appearance&&m(e).appearance!=="force-dark"?(t(),u("div",jl,[p("div",Ol,[p("p",Rl,F(m(a).darkModeSwitchLabel||"Appearance"),1),p("div",El,[N(G3)])])])):C("",!0),m(a).socialLinks?(t(),u("div",Il,[p("div",Ul,[N(X3,{class:"social-links-list",links:m(a).socialLinks},null,8,["links"])])])):C("",!0)]),_:1})):C("",!0)}}),Wl=S(ql,[["__scopeId","data-v-0ae10236"]]),Gl=c=>(K("data-v-fce8c640"),c=c(),X(),c),Yl=["aria-expanded"],Kl=Gl(()=>p("span",{class:"container"},[p("span",{class:"top"}),p("span",{class:"middle"}),p("span",{class:"bottom"})],-1)),Xl=[Kl],Zl=g({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(c){return(e,a)=>(t(),u("button",{type:"button",class:$(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:a[0]||(a[0]=s=>e.$emit("click"))},Xl,10,Yl))}}),Ql=S(Zl,[["__scopeId","data-v-fce8c640"]]),Jl=["innerHTML"],cr=g({__name:"VPNavBarMenuLink",props:{item:{}},setup(c){const{page:e}=P();return(a,s)=>(t(),w(n2,{class:$({VPNavBarMenuLink:!0,active:m(y2)(m(e).relativePath,a.item.activeMatch||a.item.link,!!a.item.activeMatch)}),href:a.item.link,target:a.item.target,rel:a.item.rel,tabindex:"0"},{default:h(()=>[p("span",{innerHTML:a.item.text},null,8,Jl)]),_:1},8,["class","href","target","rel"]))}}),er=S(cr,[["__scopeId","data-v-69bf7a57"]]),ar=g({__name:"VPNavBarMenuGroup",props:{item:{}},setup(c){const e=c,{page:a}=P(),s=n=>"link"in n?y2(a.value.relativePath,n.link,!!e.item.activeMatch):n.items.some(s),i=k(()=>s(e.item));return(n,o)=>(t(),w(K3,{class:$({VPNavBarMenuGroup:!0,active:m(y2)(m(a).relativePath,n.item.activeMatch,!!n.item.activeMatch)||i.value}),button:n.item.text,items:n.item.items},null,8,["class","button","items"]))}}),sr=c=>(K("data-v-7ad77f0f"),c=c(),X(),c),ir={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},nr=sr(()=>p("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),or=g({__name:"VPNavBarMenu",setup(c){const{theme:e}=P();return(a,s)=>m(e).nav?(t(),u("nav",ir,[nr,(t(!0),u(q,null,Z(m(e).nav,i=>(t(),u(q,{key:i.text},["link"in i?(t(),w(er,{key:0,item:i},null,8,["item"])):(t(),w(ar,{key:1,item:i},null,8,["item"]))],64))),128))])):C("",!0)}}),lr=S(or,[["__scopeId","data-v-7ad77f0f"]]);function rr(c){const{localeIndex:e,theme:a}=P();function s(i){var y,A,_;const n=i.split("."),o=(y=a.value.search)==null?void 0:y.options,l=o&&typeof o=="object",r=l&&((_=(A=o.locales)==null?void 0:A[e.value])==null?void 0:_.translations)||null,f=l&&o.translations||null;let z=r,V=f,M=c;const L=n.pop();for(const v of n){let b=null;const B=M==null?void 0:M[v];B&&(b=M=B);const j=V==null?void 0:V[v];j&&(b=V=j);const R=z==null?void 0:z[v];R&&(b=z=R),B||(M=b),j||(V=b),R||(z=b)}return(z==null?void 0:z[L])??(V==null?void 0:V[L])??(M==null?void 0:M[L])??""}return s}const tr=["aria-label"],fr={class:"DocSearch-Button-Container"},mr=p("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1),zr={class:"DocSearch-Button-Placeholder"},Hr=p("span",{class:"DocSearch-Button-Keys"},[p("kbd",{class:"DocSearch-Button-Key"}),p("kbd",{class:"DocSearch-Button-Key"},"K")],-1),l6=g({__name:"VPNavBarSearchButton",setup(c){const a=rr({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(s,i)=>(t(),u("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":m(a)("button.buttonAriaLabel")},[p("span",fr,[mr,p("span",zr,F(m(a)("button.buttonText")),1)]),Hr],8,tr))}}),ur={class:"VPNavBarSearch"},Vr={id:"local-search"},pr={key:1,id:"docsearch"},hr=g({__name:"VPNavBarSearch",setup(c){const e=Hi(()=>ui(()=>import("./VPLocalSearchBox.ClwMtS2L.js"),__vite__mapDeps([0,1]))),a=()=>null,{theme:s}=P(),i=T(!1),n=T(!1);C2(()=>{});function o(){i.value||(i.value=!0,setTimeout(l,16))}function l(){const V=new Event("keydown");V.key="k",V.metaKey=!0,window.dispatchEvent(V),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||l()},16)}function r(V){const M=V.target,L=M.tagName;return M.isContentEditable||L==="INPUT"||L==="SELECT"||L==="TEXTAREA"}const f=T(!1);C3("k",V=>{(V.ctrlKey||V.metaKey)&&(V.preventDefault(),f.value=!0)}),C3("/",V=>{r(V)||(V.preventDefault(),f.value=!0)});const z="local";return(V,M)=>{var L;return t(),u("div",ur,[m(z)==="local"?(t(),u(q,{key:0},[f.value?(t(),w(m(e),{key:0,onClose:M[0]||(M[0]=y=>f.value=!1)})):C("",!0),p("div",Vr,[N(l6,{onClick:M[1]||(M[1]=y=>f.value=!0)})])],64)):m(z)==="algolia"?(t(),u(q,{key:1},[i.value?(t(),w(m(a),{key:0,algolia:((L=m(s).search)==null?void 0:L.options)??m(s).algolia,onVnodeBeforeMount:M[2]||(M[2]=y=>n.value=!0)},null,8,["algolia"])):C("",!0),n.value?C("",!0):(t(),u("div",pr,[N(l6,{onClick:o})]))],64)):C("",!0)])}}}),Mr=g({__name:"VPNavBarSocialLinks",setup(c){const{theme:e}=P();return(a,s)=>m(e).socialLinks?(t(),w(X3,{key:0,class:"VPNavBarSocialLinks",links:m(e).socialLinks},null,8,["links"])):C("",!0)}}),vr=S(Mr,[["__scopeId","data-v-75163607"]]),dr=["href","rel","target"],Lr={key:1},Cr={key:2},gr=g({__name:"VPNavBarTitle",setup(c){const{site:e,theme:a}=P(),{hasSidebar:s}=u2(),{currentLang:i}=n1(),n=k(()=>{var r;return typeof a.value.logoLink=="string"?a.value.logoLink:(r=a.value.logoLink)==null?void 0:r.link}),o=k(()=>{var r;return typeof a.value.logoLink=="string"||(r=a.value.logoLink)==null?void 0:r.rel}),l=k(()=>{var r;return typeof a.value.logoLink=="string"||(r=a.value.logoLink)==null?void 0:r.target});return(r,f)=>(t(),u("div",{class:$(["VPNavBarTitle",{"has-sidebar":m(s)}])},[p("a",{class:"title",href:n.value??m(U3)(m(i).link),rel:o.value,target:l.value},[H(r.$slots,"nav-bar-title-before",{},void 0,!0),m(a).logo?(t(),w(w1,{key:0,class:"logo",image:m(a).logo},null,8,["image"])):C("",!0),m(a).siteTitle?(t(),u("span",Lr,F(m(a).siteTitle),1)):m(a).siteTitle===void 0?(t(),u("span",Cr,F(m(e).title),1)):C("",!0),H(r.$slots,"nav-bar-title-after",{},void 0,!0)],8,dr)],2))}}),br=S(gr,[["__scopeId","data-v-903e7ceb"]]),xr={class:"items"},Nr={class:"title"},kr=g({__name:"VPNavBarTranslations",setup(c){const{theme:e}=P(),{localeLinks:a,currentLang:s}=n1({correspondingLink:!0});return(i,n)=>m(a).length&&m(s).label?(t(),w(K3,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:m(e).langMenuLabel||"Change language"},{default:h(()=>[p("div",xr,[p("p",Nr,F(m(s).label),1),(t(!0),u(q,null,Z(m(a),o=>(t(),w(O1,{key:o.link,item:o},null,8,["item"]))),128))])]),_:1},8,["label"])):C("",!0)}}),yr=S(kr,[["__scopeId","data-v-4000a0d8"]]),wr=c=>(K("data-v-4202c92a"),c=c(),X(),c),Sr={class:"wrapper"},Ar={class:"container"},_r={class:"title"},Pr={class:"content"},Tr={class:"content-body"},Br=wr(()=>p("div",{class:"divider"},[p("div",{class:"divider-line"})],-1)),$r=g({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(c){const{y:e}=r0(),{hasSidebar:a}=u2(),{hasLocalNav:s}=V0(),{frontmatter:i}=P(),n=T({});return n0(()=>{n.value={"has-sidebar":a.value,"has-local-nav":s.value,top:i.value.layout==="home"&&e.value===0}}),(o,l)=>(t(),u("div",{class:$(["VPNavBar",n.value])},[p("div",Sr,[p("div",Ar,[p("div",_r,[N(br,null,{"nav-bar-title-before":h(()=>[H(o.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[H(o.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),p("div",Pr,[p("div",Tr,[H(o.$slots,"nav-bar-content-before",{},void 0,!0),N(hr,{class:"search"}),N(lr,{class:"menu"}),N(yr,{class:"translations"}),N(fl,{class:"appearance"}),N(vr,{class:"social-links"}),N(Wl,{class:"extra"}),H(o.$slots,"nav-bar-content-after",{},void 0,!0),N(Ql,{class:"hamburger",active:o.isScreenOpen,onClick:l[0]||(l[0]=r=>o.$emit("toggle-screen"))},null,8,["active"])])])])]),Br],2))}}),Fr=S($r,[["__scopeId","data-v-4202c92a"]]),Dr={key:0,class:"VPNavScreenAppearance"},jr={class:"text"},Or=g({__name:"VPNavScreenAppearance",setup(c){const{site:e,theme:a}=P();return(s,i)=>m(e).appearance&&m(e).appearance!=="force-dark"?(t(),u("div",Dr,[p("p",jr,F(m(a).darkModeSwitchLabel||"Appearance"),1),N(G3)])):C("",!0)}}),Rr=S(Or,[["__scopeId","data-v-1a7f6154"]]),Er=g({__name:"VPNavScreenMenuLink",props:{item:{}},setup(c){const e=j1("close-screen");return(a,s)=>(t(),w(n2,{class:"VPNavScreenMenuLink",href:a.item.link,target:a.item.target,rel:a.item.rel,onClick:m(e)},{default:h(()=>[a2(F(a.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),Ir=S(Er,[["__scopeId","data-v-b10fb8f4"]]),Ur=g({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(c){const e=j1("close-screen");return(a,s)=>(t(),w(n2,{class:"VPNavScreenMenuGroupLink",href:a.item.link,target:a.item.target,rel:a.item.rel,onClick:m(e)},{default:h(()=>[a2(F(a.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),v0=S(Ur,[["__scopeId","data-v-38f314c7"]]),qr={class:"VPNavScreenMenuGroupSection"},Wr={key:0,class:"title"},Gr=g({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(c){return(e,a)=>(t(),u("div",qr,[e.text?(t(),u("p",Wr,F(e.text),1)):C("",!0),(t(!0),u(q,null,Z(e.items,s=>(t(),w(v0,{key:s.text,item:s},null,8,["item"]))),128))]))}}),Yr=S(Gr,[["__scopeId","data-v-abfa899f"]]),Kr=c=>(K("data-v-24d4c24a"),c=c(),X(),c),Xr=["aria-controls","aria-expanded"],Zr=["innerHTML"],Qr=Kr(()=>p("span",{class:"vpi-plus button-icon"},null,-1)),Jr=["id"],ct={key:1,class:"group"},et=g({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(c){const e=c,a=T(!1),s=k(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function i(){a.value=!a.value}return(n,o)=>(t(),u("div",{class:$(["VPNavScreenMenuGroup",{open:a.value}])},[p("button",{class:"button","aria-controls":s.value,"aria-expanded":a.value,onClick:i},[p("span",{class:"button-text",innerHTML:n.text},null,8,Zr),Qr],8,Xr),p("div",{id:s.value,class:"items"},[(t(!0),u(q,null,Z(n.items,l=>(t(),u(q,{key:l.text},["link"in l?(t(),u("div",{key:l.text,class:"item"},[N(v0,{item:l},null,8,["item"])])):(t(),u("div",ct,[N(Yr,{text:l.text,items:l.items},null,8,["text","items"])]))],64))),128))],8,Jr)],2))}}),at=S(et,[["__scopeId","data-v-24d4c24a"]]),st={key:0,class:"VPNavScreenMenu"},it=g({__name:"VPNavScreenMenu",setup(c){const{theme:e}=P();return(a,s)=>m(e).nav?(t(),u("nav",st,[(t(!0),u(q,null,Z(m(e).nav,i=>(t(),u(q,{key:i.text},["link"in i?(t(),w(Ir,{key:0,item:i},null,8,["item"])):(t(),w(at,{key:1,text:i.text||"",items:i.items},null,8,["text","items"]))],64))),128))])):C("",!0)}}),nt=g({__name:"VPNavScreenSocialLinks",setup(c){const{theme:e}=P();return(a,s)=>m(e).socialLinks?(t(),w(X3,{key:0,class:"VPNavScreenSocialLinks",links:m(e).socialLinks},null,8,["links"])):C("",!0)}}),d0=c=>(K("data-v-422f5f34"),c=c(),X(),c),ot=d0(()=>p("span",{class:"vpi-languages icon lang"},null,-1)),lt=d0(()=>p("span",{class:"vpi-chevron-down icon chevron"},null,-1)),rt={class:"list"},tt=g({__name:"VPNavScreenTranslations",setup(c){const{localeLinks:e,currentLang:a}=n1({correspondingLink:!0}),s=T(!1);function i(){s.value=!s.value}return(n,o)=>m(e).length&&m(a).label?(t(),u("div",{key:0,class:$(["VPNavScreenTranslations",{open:s.value}])},[p("button",{class:"title",onClick:i},[ot,a2(" "+F(m(a).label)+" ",1),lt]),p("ul",rt,[(t(!0),u(q,null,Z(m(e),l=>(t(),u("li",{key:l.link,class:"item"},[N(n2,{class:"link",href:l.link},{default:h(()=>[a2(F(l.text),1)]),_:2},1032,["href"])]))),128))])],2)):C("",!0)}}),ft=S(tt,[["__scopeId","data-v-422f5f34"]]),mt={class:"container"},zt=g({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(c){const e=T(null),a=t0(E2?document.body:null);return(s,i)=>(t(),w(B1,{name:"fade",onEnter:i[0]||(i[0]=n=>a.value=!0),onAfterLeave:i[1]||(i[1]=n=>a.value=!1)},{default:h(()=>[s.open?(t(),u("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[p("div",mt,[H(s.$slots,"nav-screen-content-before",{},void 0,!0),N(it,{class:"menu"}),N(ft,{class:"translations"}),N(Rr,{class:"appearance"}),N(nt,{class:"social-links"}),H(s.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):C("",!0)]),_:3}))}}),Ht=S(zt,[["__scopeId","data-v-624b4a24"]]),ut={key:0,class:"VPNav"},Vt=g({__name:"VPNav",setup(c){const{isScreenOpen:e,closeScreen:a,toggleScreen:s}=Qo(),{frontmatter:i}=P(),n=k(()=>i.value.navbar!==!1);return f0("close-screen",a),$1(()=>{E2&&document.documentElement.classList.toggle("hide-nav",!n.value)}),(o,l)=>n.value?(t(),u("header",ut,[N(Fr,{"is-screen-open":m(e),onToggleScreen:m(s)},{"nav-bar-title-before":h(()=>[H(o.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[H(o.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":h(()=>[H(o.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":h(()=>[H(o.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),N(Ht,{open:m(e)},{"nav-screen-content-before":h(()=>[H(o.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":h(()=>[H(o.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):C("",!0)}}),pt=S(Vt,[["__scopeId","data-v-cf47aee1"]]),L0=c=>(K("data-v-c605d660"),c=c(),X(),c),ht=["role","tabindex"],Mt=L0(()=>p("div",{class:"indicator"},null,-1)),vt=L0(()=>p("span",{class:"vpi-chevron-right caret-icon"},null,-1)),dt=[vt],Lt={key:1,class:"items"},Ct=g({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(c){const e=c,{collapsed:a,collapsible:s,isLink:i,isActiveLink:n,hasActiveLink:o,hasChildren:l,toggle:r}=Ri(k(()=>e.item)),f=k(()=>l.value?"section":"div"),z=k(()=>i.value?"a":"div"),V=k(()=>l.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),M=k(()=>i.value?void 0:"button"),L=k(()=>[[`level-${e.depth}`],{collapsible:s.value},{collapsed:a.value},{"is-link":i.value},{"is-active":n.value},{"has-active":o.value}]);function y(_){"key"in _&&_.key!=="Enter"||!e.item.link&&r()}function A(){e.item.link&&r()}return(_,v)=>{const b=_2("VPSidebarItem",!0);return t(),w(k2(f.value),{class:$(["VPSidebarItem",L.value])},{default:h(()=>[_.item.text?(t(),u("div",G2({key:0,class:"item",role:M.value},Vi(_.item.items?{click:y,keydown:y}:{},!0),{tabindex:_.item.items&&0}),[Mt,_.item.link?(t(),w(n2,{key:0,tag:z.value,class:"link",href:_.item.link,rel:_.item.rel,target:_.item.target},{default:h(()=>[(t(),w(k2(V.value),{class:"text",innerHTML:_.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(t(),w(k2(V.value),{key:1,class:"text",innerHTML:_.item.text},null,8,["innerHTML"])),_.item.collapsed!=null?(t(),u("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:A,onKeydown:pi(A,["enter"]),tabindex:"0"},dt,32)):C("",!0)],16,ht)):C("",!0),_.item.items&&_.item.items.length?(t(),u("div",Lt,[_.depth<5?(t(!0),u(q,{key:0},Z(_.item.items,B=>(t(),w(b,{key:B.text,item:B,depth:_.depth+1},null,8,["item","depth"]))),128)):C("",!0)])):C("",!0)]),_:1},8,["class"])}}}),gt=S(Ct,[["__scopeId","data-v-c605d660"]]),C0=c=>(K("data-v-ca3f4899"),c=c(),X(),c),bt=C0(()=>p("div",{class:"curtain"},null,-1)),xt={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Nt=C0(()=>p("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),kt=g({__name:"VPSidebar",props:{open:{type:Boolean}},setup(c){const{sidebarGroups:e,hasSidebar:a}=u2(),s=c,i=T(null),n=t0(E2?document.body:null);return l2([s,i],()=>{var o;s.open?(n.value=!0,(o=i.value)==null||o.focus()):n.value=!1},{immediate:!0,flush:"post"}),(o,l)=>m(a)?(t(),u("aside",{key:0,class:$(["VPSidebar",{open:o.open}]),ref_key:"navEl",ref:i,onClick:l[0]||(l[0]=hi(()=>{},["stop"]))},[bt,p("nav",xt,[Nt,H(o.$slots,"sidebar-nav-before",{},void 0,!0),(t(!0),u(q,null,Z(m(e),r=>(t(),u("div",{key:r.text,class:"group"},[N(gt,{item:r,depth:0},null,8,["item"])]))),128)),H(o.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):C("",!0)}}),yt=S(kt,[["__scopeId","data-v-ca3f4899"]]),wt=g({__name:"VPSkipLink",setup(c){const e=D1(),a=T();l2(()=>e.path,()=>a.value.focus());function s({target:i}){const n=document.getElementById(decodeURIComponent(i.hash).slice(1));if(n){const o=()=>{n.removeAttribute("tabindex"),n.removeEventListener("blur",o)};n.setAttribute("tabindex","-1"),n.addEventListener("blur",o),n.focus(),window.scrollTo(0,0)}}return(i,n)=>(t(),u(q,null,[p("span",{ref_key:"backToTop",ref:a,tabindex:"-1"},null,512),p("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:s}," Skip to content ")],64))}}),St=S(wt,[["__scopeId","data-v-b3f34b9b"]]),At=g({__name:"Layout",setup(c){const{isOpen:e,open:a,close:s}=u2(),i=D1();l2(()=>i.path,s),Oi(e,s);const{frontmatter:n}=P(),o=m0(),l=k(()=>!!o["home-hero-image"]);return f0("hero-image-slot-exists",l),(r,f)=>{const z=_2("Content");return m(n).layout!==!1?(t(),u("div",{key:0,class:$(["Layout",m(n).pageClass])},[H(r.$slots,"layout-top",{},void 0,!0),N(St),N(xi,{class:"backdrop",show:m(e),onClick:m(s)},null,8,["show","onClick"]),N(pt,null,{"nav-bar-title-before":h(()=>[H(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[H(r.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":h(()=>[H(r.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":h(()=>[H(r.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":h(()=>[H(r.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":h(()=>[H(r.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),N(Zo,{open:m(e),onOpenMenu:m(a)},null,8,["open","onOpenMenu"]),N(yt,{open:m(e)},{"sidebar-nav-before":h(()=>[H(r.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":h(()=>[H(r.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),N(Po,null,{"page-top":h(()=>[H(r.$slots,"page-top",{},void 0,!0)]),"page-bottom":h(()=>[H(r.$slots,"page-bottom",{},void 0,!0)]),"not-found":h(()=>[H(r.$slots,"not-found",{},void 0,!0)]),"home-hero-before":h(()=>[H(r.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":h(()=>[H(r.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[H(r.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[H(r.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[H(r.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[H(r.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":h(()=>[H(r.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":h(()=>[H(r.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":h(()=>[H(r.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":h(()=>[H(r.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":h(()=>[H(r.$slots,"doc-before",{},void 0,!0)]),"doc-after":h(()=>[H(r.$slots,"doc-after",{},void 0,!0)]),"doc-top":h(()=>[H(r.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":h(()=>[H(r.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":h(()=>[H(r.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":h(()=>[H(r.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":h(()=>[H(r.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[H(r.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[H(r.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[H(r.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),N(Do),H(r.$slots,"layout-bottom",{},void 0,!0)],2)):(t(),w(z,{key:1}))}}}),_t=S(At,[["__scopeId","data-v-af4c0da9"]]),Pt={Layout:_t,enhanceApp:({app:c})=>{c.component("Badge",Ci)}};var g0=typeof global=="object"&&global&&global.Object===Object&&global,Tt=typeof self=="object"&&self&&self.Object===Object&&self,s2=g0||Tt||Function("return this")(),o2=s2.Symbol,b0=Object.prototype,Bt=b0.hasOwnProperty,$t=b0.toString,q2=o2?o2.toStringTag:void 0;function Ft(c){var e=Bt.call(c,q2),a=c[q2];try{c[q2]=void 0;var s=!0}catch{}var i=$t.call(c);return s&&(e?c[q2]=a:delete c[q2]),i}var Dt=Object.prototype,jt=Dt.toString;function Ot(c){return jt.call(c)}var Rt="[object Null]",Et="[object Undefined]",r6=o2?o2.toStringTag:void 0;function P2(c){return c==null?c===void 0?Et:Rt:r6&&r6 in Object(c)?Ft(c):Ot(c)}function T2(c){return c!=null&&typeof c=="object"}var It="[object Symbol]";function R1(c){return typeof c=="symbol"||T2(c)&&P2(c)==It}function x0(c,e){for(var a=-1,s=c==null?0:c.length,i=Array(s);++a<s;)i[a]=e(c[a],a,c);return i}var g2=Array.isArray,Ut=1/0,t6=o2?o2.prototype:void 0,f6=t6?t6.toString:void 0;function N0(c){if(typeof c=="string")return c;if(g2(c))return x0(c,N0)+"";if(R1(c))return f6?f6.call(c):"";var e=c+"";return e=="0"&&1/c==-Ut?"-0":e}var qt=/\s/;function Wt(c){for(var e=c.length;e--&&qt.test(c.charAt(e)););return e}var Gt=/^\s+/;function Yt(c){return c&&c.slice(0,Wt(c)+1).replace(Gt,"")}function M2(c){var e=typeof c;return c!=null&&(e=="object"||e=="function")}var m6=NaN,Kt=/^[-+]0x[0-9a-f]+$/i,Xt=/^0b[01]+$/i,Zt=/^0o[0-7]+$/i,Qt=parseInt;function z6(c){if(typeof c=="number")return c;if(R1(c))return m6;if(M2(c)){var e=typeof c.valueOf=="function"?c.valueOf():c;c=M2(e)?e+"":e}if(typeof c!="string")return c===0?c:+c;c=Yt(c);var a=Xt.test(c);return a||Zt.test(c)?Qt(c.slice(2),a?2:8):Kt.test(c)?m6:+c}function k0(c){return c}var Jt="[object AsyncFunction]",cf="[object Function]",ef="[object GeneratorFunction]",af="[object Proxy]";function y0(c){if(!M2(c))return!1;var e=P2(c);return e==cf||e==ef||e==Jt||e==af}var z3=s2["__core-js_shared__"],H6=function(){var c=/[^.]+$/.exec(z3&&z3.keys&&z3.keys.IE_PROTO||"");return c?"Symbol(src)_1."+c:""}();function sf(c){return!!H6&&H6 in c}var nf=Function.prototype,of=nf.toString;function B2(c){if(c!=null){try{return of.call(c)}catch{}try{return c+""}catch{}}return""}var lf=/[\\^$.*+?()[\]{}|]/g,rf=/^\[object .+?Constructor\]$/,tf=Function.prototype,ff=Object.prototype,mf=tf.toString,zf=ff.hasOwnProperty,Hf=RegExp("^"+mf.call(zf).replace(lf,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function uf(c){if(!M2(c)||sf(c))return!1;var e=y0(c)?Hf:rf;return e.test(B2(c))}function Vf(c,e){return c==null?void 0:c[e]}function $2(c,e){var a=Vf(c,e);return uf(a)?a:void 0}var N3=$2(s2,"WeakMap");function pf(c,e,a){switch(a.length){case 0:return c.call(e);case 1:return c.call(e,a[0]);case 2:return c.call(e,a[0],a[1]);case 3:return c.call(e,a[0],a[1],a[2])}return c.apply(e,a)}var hf=800,Mf=16,vf=Date.now;function df(c){var e=0,a=0;return function(){var s=vf(),i=Mf-(s-a);if(a=s,i>0){if(++e>=hf)return arguments[0]}else e=0;return c.apply(void 0,arguments)}}function Lf(c){return function(){return c}}var S1=function(){try{var c=$2(Object,"defineProperty");return c({},"",{}),c}catch{}}(),Cf=S1?function(c,e){return S1(c,"toString",{configurable:!0,enumerable:!1,value:Lf(e),writable:!0})}:k0,gf=df(Cf);function w0(c,e){for(var a=-1,s=c==null?0:c.length;++a<s&&e(c[a],a,c)!==!1;);return c}var bf=9007199254740991,xf=/^(?:0|[1-9]\d*)$/;function Nf(c,e){var a=typeof c;return e=e??bf,!!e&&(a=="number"||a!="symbol"&&xf.test(c))&&c>-1&&c%1==0&&c<e}function S0(c,e,a){e=="__proto__"&&S1?S1(c,e,{configurable:!0,enumerable:!0,value:a,writable:!0}):c[e]=a}function A0(c,e){return c===e||c!==c&&e!==e}var kf=Object.prototype,yf=kf.hasOwnProperty;function _0(c,e,a){var s=c[e];(!(yf.call(c,e)&&A0(s,a))||a===void 0&&!(e in c))&&S0(c,e,a)}function wf(c,e,a,s){var i=!a;a||(a={});for(var n=-1,o=e.length;++n<o;){var l=e[n],r=void 0;r===void 0&&(r=c[l]),i?S0(a,l,r):_0(a,l,r)}return a}var u6=Math.max;function Sf(c,e,a){return e=u6(e===void 0?c.length-1:e,0),function(){for(var s=arguments,i=-1,n=u6(s.length-e,0),o=Array(n);++i<n;)o[i]=s[e+i];i=-1;for(var l=Array(e+1);++i<e;)l[i]=s[i];return l[e]=a(o),pf(c,this,l)}}var Af=9007199254740991;function P0(c){return typeof c=="number"&&c>-1&&c%1==0&&c<=Af}function Z3(c){return c!=null&&P0(c.length)&&!y0(c)}var _f=Object.prototype;function T0(c){var e=c&&c.constructor,a=typeof e=="function"&&e.prototype||_f;return c===a}function Pf(c,e){for(var a=-1,s=Array(c);++a<c;)s[a]=e(a);return s}var Tf="[object Arguments]";function V6(c){return T2(c)&&P2(c)==Tf}var B0=Object.prototype,Bf=B0.hasOwnProperty,$f=B0.propertyIsEnumerable,$0=V6(function(){return arguments}())?V6:function(c){return T2(c)&&Bf.call(c,"callee")&&!$f.call(c,"callee")};function Ff(){return!1}var F0=typeof exports=="object"&&exports&&!exports.nodeType&&exports,p6=F0&&typeof module=="object"&&module&&!module.nodeType&&module,Df=p6&&p6.exports===F0,h6=Df?s2.Buffer:void 0,jf=h6?h6.isBuffer:void 0,D0=jf||Ff,Of="[object Arguments]",Rf="[object Array]",Ef="[object Boolean]",If="[object Date]",Uf="[object Error]",qf="[object Function]",Wf="[object Map]",Gf="[object Number]",Yf="[object Object]",Kf="[object RegExp]",Xf="[object Set]",Zf="[object String]",Qf="[object WeakMap]",Jf="[object ArrayBuffer]",cm="[object DataView]",em="[object Float32Array]",am="[object Float64Array]",sm="[object Int8Array]",im="[object Int16Array]",nm="[object Int32Array]",om="[object Uint8Array]",lm="[object Uint8ClampedArray]",rm="[object Uint16Array]",tm="[object Uint32Array]",E={};E[em]=E[am]=E[sm]=E[im]=E[nm]=E[om]=E[lm]=E[rm]=E[tm]=!0;E[Of]=E[Rf]=E[Jf]=E[Ef]=E[cm]=E[If]=E[Uf]=E[qf]=E[Wf]=E[Gf]=E[Yf]=E[Kf]=E[Xf]=E[Zf]=E[Qf]=!1;function fm(c){return T2(c)&&P0(c.length)&&!!E[P2(c)]}function Q3(c){return function(e){return c(e)}}var j0=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Y2=j0&&typeof module=="object"&&module&&!module.nodeType&&module,mm=Y2&&Y2.exports===j0,H3=mm&&g0.process,O2=function(){try{var c=Y2&&Y2.require&&Y2.require("util").types;return c||H3&&H3.binding&&H3.binding("util")}catch{}}(),M6=O2&&O2.isTypedArray,zm=M6?Q3(M6):fm,Hm=Object.prototype,um=Hm.hasOwnProperty;function O0(c,e){var a=g2(c),s=!a&&$0(c),i=!a&&!s&&D0(c),n=!a&&!s&&!i&&zm(c),o=a||s||i||n,l=o?Pf(c.length,String):[],r=l.length;for(var f in c)(e||um.call(c,f))&&!(o&&(f=="length"||i&&(f=="offset"||f=="parent")||n&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||Nf(f,r)))&&l.push(f);return l}function R0(c,e){return function(a){return c(e(a))}}var Vm=R0(Object.keys,Object),pm=Object.prototype,hm=pm.hasOwnProperty;function Mm(c){if(!T0(c))return Vm(c);var e=[];for(var a in Object(c))hm.call(c,a)&&a!="constructor"&&e.push(a);return e}function vm(c){return Z3(c)?O0(c):Mm(c)}function dm(c){var e=[];if(c!=null)for(var a in Object(c))e.push(a);return e}var Lm=Object.prototype,Cm=Lm.hasOwnProperty;function gm(c){if(!M2(c))return dm(c);var e=T0(c),a=[];for(var s in c)s=="constructor"&&(e||!Cm.call(c,s))||a.push(s);return a}function bm(c){return Z3(c)?O0(c,!0):gm(c)}var xm=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Nm=/^\w*$/;function km(c,e){if(g2(c))return!1;var a=typeof c;return a=="number"||a=="symbol"||a=="boolean"||c==null||R1(c)?!0:Nm.test(c)||!xm.test(c)||e!=null&&c in Object(e)}var Q2=$2(Object,"create");function ym(){this.__data__=Q2?Q2(null):{},this.size=0}function wm(c){var e=this.has(c)&&delete this.__data__[c];return this.size-=e?1:0,e}var Sm="__lodash_hash_undefined__",Am=Object.prototype,_m=Am.hasOwnProperty;function Pm(c){var e=this.__data__;if(Q2){var a=e[c];return a===Sm?void 0:a}return _m.call(e,c)?e[c]:void 0}var Tm=Object.prototype,Bm=Tm.hasOwnProperty;function $m(c){var e=this.__data__;return Q2?e[c]!==void 0:Bm.call(e,c)}var Fm="__lodash_hash_undefined__";function Dm(c,e){var a=this.__data__;return this.size+=this.has(c)?0:1,a[c]=Q2&&e===void 0?Fm:e,this}function w2(c){var e=-1,a=c==null?0:c.length;for(this.clear();++e<a;){var s=c[e];this.set(s[0],s[1])}}w2.prototype.clear=ym;w2.prototype.delete=wm;w2.prototype.get=Pm;w2.prototype.has=$m;w2.prototype.set=Dm;function jm(){this.__data__=[],this.size=0}function E1(c,e){for(var a=c.length;a--;)if(A0(c[a][0],e))return a;return-1}var Om=Array.prototype,Rm=Om.splice;function Em(c){var e=this.__data__,a=E1(e,c);if(a<0)return!1;var s=e.length-1;return a==s?e.pop():Rm.call(e,a,1),--this.size,!0}function Im(c){var e=this.__data__,a=E1(e,c);return a<0?void 0:e[a][1]}function Um(c){return E1(this.__data__,c)>-1}function qm(c,e){var a=this.__data__,s=E1(a,c);return s<0?(++this.size,a.push([c,e])):a[s][1]=e,this}function V2(c){var e=-1,a=c==null?0:c.length;for(this.clear();++e<a;){var s=c[e];this.set(s[0],s[1])}}V2.prototype.clear=jm;V2.prototype.delete=Em;V2.prototype.get=Im;V2.prototype.has=Um;V2.prototype.set=qm;var J2=$2(s2,"Map");function Wm(){this.size=0,this.__data__={hash:new w2,map:new(J2||V2),string:new w2}}function Gm(c){var e=typeof c;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?c!=="__proto__":c===null}function I1(c,e){var a=c.__data__;return Gm(e)?a[typeof e=="string"?"string":"hash"]:a.map}function Ym(c){var e=I1(this,c).delete(c);return this.size-=e?1:0,e}function Km(c){return I1(this,c).get(c)}function Xm(c){return I1(this,c).has(c)}function Zm(c,e){var a=I1(this,c),s=a.size;return a.set(c,e),this.size+=a.size==s?0:1,this}function b2(c){var e=-1,a=c==null?0:c.length;for(this.clear();++e<a;){var s=c[e];this.set(s[0],s[1])}}b2.prototype.clear=Wm;b2.prototype.delete=Ym;b2.prototype.get=Km;b2.prototype.has=Xm;b2.prototype.set=Zm;var Qm="Expected a function";function J3(c,e){if(typeof c!="function"||e!=null&&typeof e!="function")throw new TypeError(Qm);var a=function(){var s=arguments,i=e?e.apply(this,s):s[0],n=a.cache;if(n.has(i))return n.get(i);var o=c.apply(this,s);return a.cache=n.set(i,o)||n,o};return a.cache=new(J3.Cache||b2),a}J3.Cache=b2;var Jm=500;function cz(c){var e=J3(c,function(s){return a.size===Jm&&a.clear(),s}),a=e.cache;return e}var ez=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,az=/\\(\\)?/g,sz=cz(function(c){var e=[];return c.charCodeAt(0)===46&&e.push(""),c.replace(ez,function(a,s,i,n){e.push(i?n.replace(az,"$1"):s||a)}),e});function iz(c){return c==null?"":N0(c)}function c4(c,e){return g2(c)?c:km(c,e)?[c]:sz(iz(c))}var nz=1/0;function E0(c){if(typeof c=="string"||R1(c))return c;var e=c+"";return e=="0"&&1/c==-nz?"-0":e}function oz(c,e){e=c4(e,c);for(var a=0,s=e.length;c!=null&&a<s;)c=c[E0(e[a++])];return a&&a==s?c:void 0}function e4(c,e){for(var a=-1,s=e.length,i=c.length;++a<s;)c[i+a]=e[a];return c}var v6=o2?o2.isConcatSpreadable:void 0;function lz(c){return g2(c)||$0(c)||!!(v6&&c&&c[v6])}function rz(c,e,a,s,i){var n=-1,o=c.length;for(a||(a=lz),i||(i=[]);++n<o;){var l=c[n];a(l)?e4(i,l):i[i.length]=l}return i}function tz(c){var e=c==null?0:c.length;return e?rz(c):[]}function fz(c){return gf(Sf(c,void 0,tz),c+"")}var I0=R0(Object.getPrototypeOf,Object),mz="[object Object]",zz=Function.prototype,Hz=Object.prototype,U0=zz.toString,uz=Hz.hasOwnProperty,Vz=U0.call(Object);function pz(c){if(!T2(c)||P2(c)!=mz)return!1;var e=I0(c);if(e===null)return!0;var a=uz.call(e,"constructor")&&e.constructor;return typeof a=="function"&&a instanceof a&&U0.call(a)==Vz}function hz(c,e,a){var s=-1,i=c.length;e<0&&(e=-e>i?0:i+e),a=a>i?i:a,a<0&&(a+=i),i=e>a?0:a-e>>>0,e>>>=0;for(var n=Array(i);++s<i;)n[s]=c[s+e];return n}function Mz(){this.__data__=new V2,this.size=0}function vz(c){var e=this.__data__,a=e.delete(c);return this.size=e.size,a}function dz(c){return this.__data__.get(c)}function Lz(c){return this.__data__.has(c)}var Cz=200;function gz(c,e){var a=this.__data__;if(a instanceof V2){var s=a.__data__;if(!J2||s.length<Cz-1)return s.push([c,e]),this.size=++a.size,this;a=this.__data__=new b2(s)}return a.set(c,e),this.size=a.size,this}function I2(c){var e=this.__data__=new V2(c);this.size=e.size}I2.prototype.clear=Mz;I2.prototype.delete=vz;I2.prototype.get=dz;I2.prototype.has=Lz;I2.prototype.set=gz;var q0=typeof exports=="object"&&exports&&!exports.nodeType&&exports,d6=q0&&typeof module=="object"&&module&&!module.nodeType&&module,bz=d6&&d6.exports===q0,L6=bz?s2.Buffer:void 0;L6&&L6.allocUnsafe;function xz(c,e){return c.slice()}function Nz(c,e){for(var a=-1,s=c==null?0:c.length,i=0,n=[];++a<s;){var o=c[a];e(o,a,c)&&(n[i++]=o)}return n}function W0(){return[]}var kz=Object.prototype,yz=kz.propertyIsEnumerable,C6=Object.getOwnPropertySymbols,wz=C6?function(c){return c==null?[]:(c=Object(c),Nz(C6(c),function(e){return yz.call(c,e)}))}:W0,Sz=Object.getOwnPropertySymbols,Az=Sz?function(c){for(var e=[];c;)e4(e,wz(c)),c=I0(c);return e}:W0;function _z(c,e,a){var s=e(c);return g2(c)?s:e4(s,a(c))}function G0(c){return _z(c,bm,Az)}var k3=$2(s2,"DataView"),y3=$2(s2,"Promise"),w3=$2(s2,"Set"),g6="[object Map]",Pz="[object Object]",b6="[object Promise]",x6="[object Set]",N6="[object WeakMap]",k6="[object DataView]",Tz=B2(k3),Bz=B2(J2),$z=B2(y3),Fz=B2(w3),Dz=B2(N3),t2=P2;(k3&&t2(new k3(new ArrayBuffer(1)))!=k6||J2&&t2(new J2)!=g6||y3&&t2(y3.resolve())!=b6||w3&&t2(new w3)!=x6||N3&&t2(new N3)!=N6)&&(t2=function(c){var e=P2(c),a=e==Pz?c.constructor:void 0,s=a?B2(a):"";if(s)switch(s){case Tz:return k6;case Bz:return g6;case $z:return b6;case Fz:return x6;case Dz:return N6}return e});var jz=Object.prototype,Oz=jz.hasOwnProperty;function Rz(c){var e=c.length,a=new c.constructor(e);return e&&typeof c[0]=="string"&&Oz.call(c,"index")&&(a.index=c.index,a.input=c.input),a}var y6=s2.Uint8Array;function a4(c){var e=new c.constructor(c.byteLength);return new y6(e).set(new y6(c)),e}function Ez(c,e){var a=a4(c.buffer);return new c.constructor(a,c.byteOffset,c.byteLength)}var Iz=/\w*$/;function Uz(c){var e=new c.constructor(c.source,Iz.exec(c));return e.lastIndex=c.lastIndex,e}var w6=o2?o2.prototype:void 0,S6=w6?w6.valueOf:void 0;function qz(c){return S6?Object(S6.call(c)):{}}function Wz(c,e){var a=a4(c.buffer);return new c.constructor(a,c.byteOffset,c.length)}var Gz="[object Boolean]",Yz="[object Date]",Kz="[object Map]",Xz="[object Number]",Zz="[object RegExp]",Qz="[object Set]",Jz="[object String]",cH="[object Symbol]",eH="[object ArrayBuffer]",aH="[object DataView]",sH="[object Float32Array]",iH="[object Float64Array]",nH="[object Int8Array]",oH="[object Int16Array]",lH="[object Int32Array]",rH="[object Uint8Array]",tH="[object Uint8ClampedArray]",fH="[object Uint16Array]",mH="[object Uint32Array]";function zH(c,e,a){var s=c.constructor;switch(e){case eH:return a4(c);case Gz:case Yz:return new s(+c);case aH:return Ez(c);case sH:case iH:case nH:case oH:case lH:case rH:case tH:case fH:case mH:return Wz(c);case Kz:return new s;case Xz:case Jz:return new s(c);case Zz:return Uz(c);case Qz:return new s;case cH:return qz(c)}}var HH="[object Map]";function uH(c){return T2(c)&&t2(c)==HH}var A6=O2&&O2.isMap,VH=A6?Q3(A6):uH,pH="[object Set]";function hH(c){return T2(c)&&t2(c)==pH}var _6=O2&&O2.isSet,MH=_6?Q3(_6):hH,vH=1,Y0="[object Arguments]",dH="[object Array]",LH="[object Boolean]",CH="[object Date]",gH="[object Error]",K0="[object Function]",bH="[object GeneratorFunction]",xH="[object Map]",NH="[object Number]",X0="[object Object]",kH="[object RegExp]",yH="[object Set]",wH="[object String]",SH="[object Symbol]",AH="[object WeakMap]",_H="[object ArrayBuffer]",PH="[object DataView]",TH="[object Float32Array]",BH="[object Float64Array]",$H="[object Int8Array]",FH="[object Int16Array]",DH="[object Int32Array]",jH="[object Uint8Array]",OH="[object Uint8ClampedArray]",RH="[object Uint16Array]",EH="[object Uint32Array]",O={};O[Y0]=O[dH]=O[_H]=O[PH]=O[LH]=O[CH]=O[TH]=O[BH]=O[$H]=O[FH]=O[DH]=O[xH]=O[NH]=O[X0]=O[kH]=O[yH]=O[wH]=O[SH]=O[jH]=O[OH]=O[RH]=O[EH]=!0;O[gH]=O[K0]=O[AH]=!1;function N1(c,e,a,s,i,n){var o,l=e&vH;if(a&&(o=i?a(c,s,i,n):a(c)),o!==void 0)return o;if(!M2(c))return c;var r=g2(c);if(r)o=Rz(c);else{var f=t2(c),z=f==K0||f==bH;if(D0(c))return xz(c);if(f==X0||f==Y0||z&&!i)o={};else{if(!O[f])return i?c:{};o=zH(c,f)}}n||(n=new I2);var V=n.get(c);if(V)return V;n.set(c,o),MH(c)?c.forEach(function(y){o.add(N1(y,e,a,y,c,n))}):VH(c)&&c.forEach(function(y,A){o.set(A,N1(y,e,a,A,c,n))});var M=G0,L=r?void 0:M(c);return w0(L||c,function(y,A){L&&(A=y,y=c[A]),_0(o,A,N1(y,e,a,A,c,n))}),o}function IH(c){return function(e,a,s){for(var i=-1,n=Object(e),o=s(e),l=o.length;l--;){var r=o[++i];if(a(n[r],r,n)===!1)break}return e}}var UH=IH();function qH(c,e){return c&&UH(c,e,vm)}function WH(c,e){return function(a,s){if(a==null)return a;if(!Z3(a))return c(a,s);for(var i=a.length,n=-1,o=Object(a);++n<i&&s(o[n],n,o)!==!1;);return a}}var GH=WH(qH),u3=function(){return s2.Date.now()},YH="Expected a function",KH=Math.max,XH=Math.min;function ZH(c,e,a){var s,i,n,o,l,r,f=0,z=!1,V=!1,M=!0;if(typeof c!="function")throw new TypeError(YH);e=z6(e)||0,M2(a)&&(z=!!a.leading,V="maxWait"in a,n=V?KH(z6(a.maxWait)||0,e):n,M="trailing"in a?!!a.trailing:M);function L(D){var Y=s,r2=i;return s=i=void 0,f=D,o=c.apply(r2,Y),o}function y(D){return f=D,l=setTimeout(v,e),z?L(D):o}function A(D){var Y=D-r,r2=D-f,c2=e-Y;return V?XH(c2,n-r2):c2}function _(D){var Y=D-r,r2=D-f;return r===void 0||Y>=e||Y<0||V&&r2>=n}function v(){var D=u3();if(_(D))return b(D);l=setTimeout(v,A(D))}function b(D){return l=void 0,M&&s?L(D):(s=i=void 0,o)}function B(){l!==void 0&&clearTimeout(l),f=0,s=r=i=l=void 0}function j(){return l===void 0?o:b(u3())}function R(){var D=u3(),Y=_(D);if(s=arguments,i=this,r=D,Y){if(l===void 0)return y(r);if(V)return clearTimeout(l),l=setTimeout(v,e),L(r)}return l===void 0&&(l=setTimeout(v,e)),o}return R.cancel=B,R.flush=j,R}function QH(c){var e=c==null?0:c.length;return e?c[e-1]:void 0}function JH(c){return typeof c=="function"?c:k0}function cu(c,e){var a=g2(c)?w0:GH;return a(c,JH(e))}function eu(c,e){return e.length<2?c:oz(c,hz(e,0,-1))}function au(c,e){return e=c4(e,c),c=eu(c,e),c==null||delete c[E0(QH(e))]}function su(c){return pz(c)?void 0:c}var iu=1,nu=2,ou=4,lu=fz(function(c,e){var a={};if(c==null)return a;var s=!1;e=x0(e,function(n){return n=c4(n,c),s||(s=n.length>1),n}),wf(c,G0(c),a),s&&(a=N1(a,iu|nu|ou,su));for(var i=e.length;i--;)au(a,e[i]);return a}),ru="Expected a function";function tu(c,e,a){var s=!0,i=!0;if(typeof c!="function")throw new TypeError(ru);return M2(a)&&(s="leading"in a?!!a.leading:s,i="trailing"in a?!!a.trailing:i),ZH(c,e,{leading:s,maxWait:e,trailing:i})}function P6(c,e){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);e&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),a.push.apply(a,s)}return a}function d(c){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?P6(Object(a),!0).forEach(function(s){G(c,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(a)):P6(Object(a)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(a,s))})}return c}function A1(c){"@babel/helpers - typeof";return A1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A1(c)}function fu(c,e){if(!(c instanceof e))throw new TypeError("Cannot call a class as a function")}function mu(c,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(c,s.key,s)}}function zu(c,e,a){return e&&mu(c.prototype,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function G(c,e,a){return e in c?Object.defineProperty(c,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):c[e]=a,c}function s4(c,e){return uu(c)||pu(c,e)||Z0(c,e)||Mu()}function o1(c){return Hu(c)||Vu(c)||Z0(c)||hu()}function Hu(c){if(Array.isArray(c))return S3(c)}function uu(c){if(Array.isArray(c))return c}function Vu(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function pu(c,e){var a=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(a!=null){var s=[],i=!0,n=!1,o,l;try{for(a=a.call(c);!(i=(o=a.next()).done)&&(s.push(o.value),!(e&&s.length===e));i=!0);}catch(r){n=!0,l=r}finally{try{!i&&a.return!=null&&a.return()}finally{if(n)throw l}}return s}}function Z0(c,e){if(c){if(typeof c=="string")return S3(c,e);var a=Object.prototype.toString.call(c).slice(8,-1);if(a==="Object"&&c.constructor&&(a=c.constructor.name),a==="Map"||a==="Set")return Array.from(c);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return S3(c,e)}}function S3(c,e){(e==null||e>c.length)&&(e=c.length);for(var a=0,s=new Array(e);a<e;a++)s[a]=c[a];return s}function hu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var T6=function(){},i4={},Q0={},J0=null,c8={mark:T6,measure:T6};try{typeof window<"u"&&(i4=window),typeof document<"u"&&(Q0=document),typeof MutationObserver<"u"&&(J0=MutationObserver),typeof performance<"u"&&(c8=performance)}catch{}var vu=i4.navigator||{},B6=vu.userAgent,$6=B6===void 0?"":B6,v2=i4,U=Q0,F6=J0,u1=c8;v2.document;var p2=!!U.documentElement&&!!U.head&&typeof U.addEventListener=="function"&&typeof U.createElement=="function",e8=~$6.indexOf("MSIE")||~$6.indexOf("Trident/"),V1,p1,h1,M1,v1,m2="___FONT_AWESOME___",A3=16,a8="fa",s8="svg-inline--fa",S2="data-fa-i2svg",_3="data-fa-pseudo-element",du="data-fa-pseudo-element-pending",n4="data-prefix",o4="data-icon",D6="fontawesome-i2svg",Lu="async",Cu=["HTML","HEAD","STYLE","SCRIPT"],i8=function(){try{return!0}catch{return!1}}(),I="classic",W="sharp",l4=[I,W];function l1(c){return new Proxy(c,{get:function(e,a){return a in e?e[a]:e[I]}})}var c1=l1((V1={},G(V1,I,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),G(V1,W,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),V1)),e1=l1((p1={},G(p1,I,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),G(p1,W,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),p1)),a1=l1((h1={},G(h1,I,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),G(h1,W,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),h1)),gu=l1((M1={},G(M1,I,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),G(M1,W,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),M1)),bu=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,n8="fa-layers-text",xu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Nu=l1((v1={},G(v1,I,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),G(v1,W,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),v1)),o8=[1,2,3,4,5,6,7,8,9,10],ku=o8.concat([11,12,13,14,15,16,17,18,19,20]),yu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],x2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},s1=new Set;Object.keys(e1[I]).map(s1.add.bind(s1));Object.keys(e1[W]).map(s1.add.bind(s1));var wu=[].concat(l4,o1(s1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",x2.GROUP,x2.SWAP_OPACITY,x2.PRIMARY,x2.SECONDARY]).concat(o8.map(function(c){return"".concat(c,"x")})).concat(ku.map(function(c){return"w-".concat(c)})),K2=v2.FontAwesomeConfig||{};function Su(c){var e=U.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function Au(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(U&&typeof U.querySelector=="function"){var _u=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];_u.forEach(function(c){var e=s4(c,2),a=e[0],s=e[1],i=Au(Su(a));i!=null&&(K2[s]=i)})}var l8={styleDefault:"solid",familyDefault:"classic",cssPrefix:a8,replacementClass:s8,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};K2.familyPrefix&&(K2.cssPrefix=K2.familyPrefix);var R2=d(d({},l8),K2);R2.autoReplaceSvg||(R2.observeMutations=!1);var x={};Object.keys(l8).forEach(function(c){Object.defineProperty(x,c,{enumerable:!0,set:function(e){R2[c]=e,X2.forEach(function(a){return a(x)})},get:function(){return R2[c]}})});Object.defineProperty(x,"familyPrefix",{enumerable:!0,set:function(c){R2.cssPrefix=c,X2.forEach(function(e){return e(x)})},get:function(){return R2.cssPrefix}});v2.FontAwesomeConfig=x;var X2=[];function Pu(c){return X2.push(c),function(){X2.splice(X2.indexOf(c),1)}}var h2=A3,i2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Tu(c){if(!(!c||!p2)){var e=U.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;for(var a=U.head.childNodes,s=null,i=a.length-1;i>-1;i--){var n=a[i],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(s=n)}return U.head.insertBefore(e,s),c}}var Bu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function i1(){for(var c=12,e="";c-- >0;)e+=Bu[Math.random()*62|0];return e}function U2(c){for(var e=[],a=(c||[]).length>>>0;a--;)e[a]=c[a];return e}function r4(c){return c.classList?U2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(e){return e})}function r8(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function $u(c){return Object.keys(c||{}).reduce(function(e,a){return e+"".concat(a,'="').concat(r8(c[a]),'" ')},"").trim()}function U1(c){return Object.keys(c||{}).reduce(function(e,a){return e+"".concat(a,": ").concat(c[a].trim(),";")},"")}function t4(c){return c.size!==i2.size||c.x!==i2.x||c.y!==i2.y||c.rotate!==i2.rotate||c.flipX||c.flipY}function Fu(c){var e=c.transform,a=c.containerWidth,s=c.iconWidth,i={transform:"translate(".concat(a/2," 256)")},n="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),r={transform:"".concat(n," ").concat(o," ").concat(l)},f={transform:"translate(".concat(s/2*-1," -256)")};return{outer:i,inner:r,path:f}}function Du(c){var e=c.transform,a=c.width,s=a===void 0?A3:a,i=c.height,n=i===void 0?A3:i,o=c.startCentered,l=o===void 0?!1:o,r="";return l&&e8?r+="translate(".concat(e.x/h2-s/2,"em, ").concat(e.y/h2-n/2,"em) "):l?r+="translate(calc(-50% + ".concat(e.x/h2,"em), calc(-50% + ").concat(e.y/h2,"em)) "):r+="translate(".concat(e.x/h2,"em, ").concat(e.y/h2,"em) "),r+="scale(".concat(e.size/h2*(e.flipX?-1:1),", ").concat(e.size/h2*(e.flipY?-1:1),") "),r+="rotate(".concat(e.rotate,"deg) "),r}var ju=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function t8(){var c=a8,e=s8,a=x.cssPrefix,s=x.replacementClass,i=ju;if(a!==c||s!==e){var n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(n,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(l,".".concat(s))}return i}var j6=!1;function V3(){x.autoAddCss&&!j6&&(Tu(t8()),j6=!0)}var Ou={mixout:function(){return{dom:{css:t8,insertCss:V3}}},hooks:function(){return{beforeDOMElementCreation:function(){V3()},beforeI2svg:function(){V3()}}}},z2=v2||{};z2[m2]||(z2[m2]={});z2[m2].styles||(z2[m2].styles={});z2[m2].hooks||(z2[m2].hooks={});z2[m2].shims||(z2[m2].shims=[]);var e2=z2[m2],f8=[],Ru=function c(){U.removeEventListener("DOMContentLoaded",c),_1=1,f8.map(function(e){return e()})},_1=!1;p2&&(_1=(U.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(U.readyState),_1||U.addEventListener("DOMContentLoaded",Ru));function Eu(c){p2&&(_1?setTimeout(c,0):f8.push(c))}function r1(c){var e=c.tag,a=c.attributes,s=a===void 0?{}:a,i=c.children,n=i===void 0?[]:i;return typeof c=="string"?r8(c):"<".concat(e," ").concat($u(s),">").concat(n.map(r1).join(""),"</").concat(e,">")}function O6(c,e,a){if(c&&c[e]&&c[e][a])return{prefix:e,iconName:a,icon:c[e][a]}}var p3=function(c,e,a,s){var i=Object.keys(c),n=i.length,o=e,l,r,f;for(a===void 0?(l=1,f=c[i[0]]):(l=0,f=a);l<n;l++)r=i[l],f=o(f,c[r],r,c);return f};function Iu(c){for(var e=[],a=0,s=c.length;a<s;){var i=c.charCodeAt(a++);if(i>=55296&&i<=56319&&a<s){var n=c.charCodeAt(a++);(n&64512)==56320?e.push(((i&1023)<<10)+(n&1023)+65536):(e.push(i),a--)}else e.push(i)}return e}function m8(c){var e=Iu(c);return e.length===1?e[0].toString(16):null}function Uu(c,e){var a=c.length,s=c.charCodeAt(e),i;return s>=55296&&s<=56319&&a>e+1&&(i=c.charCodeAt(e+1),i>=56320&&i<=57343)?(s-55296)*1024+i-56320+65536:s}function R6(c){return Object.keys(c).reduce(function(e,a){var s=c[a],i=!!s.icon;return i?e[s.iconName]=s.icon:e[a]=s,e},{})}function P3(c,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=a.skipHooks,i=s===void 0?!1:s,n=R6(e);typeof e2.hooks.addPack=="function"&&!i?e2.hooks.addPack(c,R6(e)):e2.styles[c]=d(d({},e2.styles[c]||{}),n),c==="fas"&&P3("fa",e)}var d1,L1,C1,F2=e2.styles,qu=e2.shims,Wu=(d1={},G(d1,I,Object.values(a1[I])),G(d1,W,Object.values(a1[W])),d1),f4=null,z8={},H8={},u8={},V8={},p8={},Gu=(L1={},G(L1,I,Object.keys(c1[I])),G(L1,W,Object.keys(c1[W])),L1);function Yu(c){return~wu.indexOf(c)}function Ku(c,e){var a=e.split("-"),s=a[0],i=a.slice(1).join("-");return s===c&&i!==""&&!Yu(i)?i:null}var h8=function(){var c=function(s){return p3(F2,function(i,n,o){return i[o]=p3(n,s,{}),i},{})};z8=c(function(s,i,n){if(i[3]&&(s[i[3]]=n),i[2]){var o=i[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){s[l.toString(16)]=n})}return s}),H8=c(function(s,i,n){if(s[n]=n,i[2]){var o=i[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){s[l]=n})}return s}),p8=c(function(s,i,n){var o=i[2];return s[n]=n,o.forEach(function(l){s[l]=n}),s});var e="far"in F2||x.autoFetchSvg,a=p3(qu,function(s,i){var n=i[0],o=i[1],l=i[2];return o==="far"&&!e&&(o="fas"),typeof n=="string"&&(s.names[n]={prefix:o,iconName:l}),typeof n=="number"&&(s.unicodes[n.toString(16)]={prefix:o,iconName:l}),s},{names:{},unicodes:{}});u8=a.names,V8=a.unicodes,f4=q1(x.styleDefault,{family:x.familyDefault})};Pu(function(c){f4=q1(c.styleDefault,{family:x.familyDefault})});h8();function m4(c,e){return(z8[c]||{})[e]}function Xu(c,e){return(H8[c]||{})[e]}function N2(c,e){return(p8[c]||{})[e]}function M8(c){return u8[c]||{prefix:null,iconName:null}}function Zu(c){var e=V8[c],a=m4("fas",c);return e||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function d2(){return f4}var z4=function(){return{prefix:null,iconName:null,rest:[]}};function q1(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.family,s=a===void 0?I:a,i=c1[s][c],n=e1[s][c]||e1[s][i],o=c in e2.styles?c:null;return n||o||null}var E6=(C1={},G(C1,I,Object.keys(a1[I])),G(C1,W,Object.keys(a1[W])),C1);function W1(c){var e,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.skipLookups,i=s===void 0?!1:s,n=(e={},G(e,I,"".concat(x.cssPrefix,"-").concat(I)),G(e,W,"".concat(x.cssPrefix,"-").concat(W)),e),o=null,l=I;(c.includes(n[I])||c.some(function(f){return E6[I].includes(f)}))&&(l=I),(c.includes(n[W])||c.some(function(f){return E6[W].includes(f)}))&&(l=W);var r=c.reduce(function(f,z){var V=Ku(x.cssPrefix,z);if(F2[z]?(z=Wu[l].includes(z)?gu[l][z]:z,o=z,f.prefix=z):Gu[l].indexOf(z)>-1?(o=z,f.prefix=q1(z,{family:l})):V?f.iconName=V:z!==x.replacementClass&&z!==n[I]&&z!==n[W]&&f.rest.push(z),!i&&f.prefix&&f.iconName){var M=o==="fa"?M8(f.iconName):{},L=N2(f.prefix,f.iconName);M.prefix&&(o=null),f.iconName=M.iconName||L||f.iconName,f.prefix=M.prefix||f.prefix,f.prefix==="far"&&!F2.far&&F2.fas&&!x.autoFetchSvg&&(f.prefix="fas")}return f},z4());return(c.includes("fa-brands")||c.includes("fab"))&&(r.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(r.prefix="fad"),!r.prefix&&l===W&&(F2.fass||x.autoFetchSvg)&&(r.prefix="fass",r.iconName=N2(r.prefix,r.iconName)||r.iconName),(r.prefix==="fa"||o==="fa")&&(r.prefix=d2()||"fas"),r}var Qu=function(){function c(){fu(this,c),this.definitions={}}return zu(c,[{key:"add",value:function(){for(var e=this,a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];var n=s.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(o){e.definitions[o]=d(d({},e.definitions[o]||{}),n[o]),P3(o,n[o]);var l=a1[I][o];l&&P3(l,n[o]),h8()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var s=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(s).map(function(i){var n=s[i],o=n.prefix,l=n.iconName,r=n.icon,f=r[2];e[o]||(e[o]={}),f.length>0&&f.forEach(function(z){typeof z=="string"&&(e[o][z]=r)}),e[o][l]=r}),e}}]),c}(),I6=[],D2={},j2={},Ju=Object.keys(j2);function cV(c,e){var a=e.mixoutsTo;return I6=c,D2={},Object.keys(j2).forEach(function(s){Ju.indexOf(s)===-1&&delete j2[s]}),I6.forEach(function(s){var i=s.mixout?s.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(a[o]=i[o]),A1(i[o])==="object"&&Object.keys(i[o]).forEach(function(l){a[o]||(a[o]={}),a[o][l]=i[o][l]})}),s.hooks){var n=s.hooks();Object.keys(n).forEach(function(o){D2[o]||(D2[o]=[]),D2[o].push(n[o])})}s.provides&&s.provides(j2)}),a}function T3(c,e){for(var a=arguments.length,s=new Array(a>2?a-2:0),i=2;i<a;i++)s[i-2]=arguments[i];var n=D2[c]||[];return n.forEach(function(o){e=o.apply(null,[e].concat(s))}),e}function A2(c){for(var e=arguments.length,a=new Array(e>1?e-1:0),s=1;s<e;s++)a[s-1]=arguments[s];var i=D2[c]||[];i.forEach(function(n){n.apply(null,a)})}function H2(){var c=arguments[0],e=Array.prototype.slice.call(arguments,1);return j2[c]?j2[c].apply(null,e):void 0}function B3(c){c.prefix==="fa"&&(c.prefix="fas");var e=c.iconName,a=c.prefix||d2();if(e)return e=N2(a,e)||e,O6(v8.definitions,a,e)||O6(e2.styles,a,e)}var v8=new Qu,eV=function(){x.autoReplaceSvg=!1,x.observeMutations=!1,A2("noAuto")},aV={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return p2?(A2("beforeI2svg",c),H2("pseudoElements2svg",c),H2("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=c.autoReplaceSvgRoot;x.autoReplaceSvg===!1&&(x.autoReplaceSvg=!0),x.observeMutations=!0,Eu(function(){iV({autoReplaceSvgRoot:e}),A2("watch",c)})}},sV={icon:function(c){if(c===null)return null;if(A1(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:N2(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var e=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],a=q1(c[0]);return{prefix:a,iconName:N2(a,e)||e}}if(typeof c=="string"&&(c.indexOf("".concat(x.cssPrefix,"-"))>-1||c.match(bu))){var s=W1(c.split(" "),{skipLookups:!0});return{prefix:s.prefix||d2(),iconName:N2(s.prefix,s.iconName)||s.iconName}}if(typeof c=="string"){var i=d2();return{prefix:i,iconName:N2(i,c)||c}}}},J={noAuto:eV,config:x,dom:aV,parse:sV,library:v8,findIconDefinition:B3,toHtml:r1},iV=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=c.autoReplaceSvgRoot,a=e===void 0?U:e;(Object.keys(e2.styles).length>0||x.autoFetchSvg)&&p2&&x.autoReplaceSvg&&J.dom.i2svg({node:a})};function G1(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(a){return r1(a)})}}),Object.defineProperty(c,"node",{get:function(){if(p2){var a=U.createElement("div");return a.innerHTML=c.html,a.children}}}),c}function nV(c){var e=c.children,a=c.main,s=c.mask,i=c.attributes,n=c.styles,o=c.transform;if(t4(o)&&a.found&&!s.found){var l=a.width,r=a.height,f={x:l/r/2,y:.5};i.style=U1(d(d({},n),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function oV(c){var e=c.prefix,a=c.iconName,s=c.children,i=c.attributes,n=c.symbol,o=n===!0?"".concat(e,"-").concat(x.cssPrefix,"-").concat(a):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},i),{},{id:o}),children:s}]}]}function H4(c){var e=c.icons,a=e.main,s=e.mask,i=c.prefix,n=c.iconName,o=c.transform,l=c.symbol,r=c.title,f=c.maskId,z=c.titleId,V=c.extra,M=c.watchable,L=M===void 0?!1:M,y=s.found?s:a,A=y.width,_=y.height,v=i==="fak",b=[x.replacementClass,n?"".concat(x.cssPrefix,"-").concat(n):""].filter(function(c2){return V.classes.indexOf(c2)===-1}).filter(function(c2){return c2!==""||!!c2}).concat(V.classes).join(" "),B={children:[],attributes:d(d({},V.attributes),{},{"data-prefix":i,"data-icon":n,class:b,role:V.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(_)})},j=v&&!~V.classes.indexOf("fa-fw")?{width:"".concat(A/_*16*.0625,"em")}:{};L&&(B.attributes[S2]=""),r&&(B.children.push({tag:"title",attributes:{id:B.attributes["aria-labelledby"]||"title-".concat(z||i1())},children:[r]}),delete B.attributes.title);var R=d(d({},B),{},{prefix:i,iconName:n,main:a,mask:s,maskId:f,transform:o,symbol:l,styles:d(d({},j),V.styles)}),D=s.found&&a.found?H2("generateAbstractMask",R)||{children:[],attributes:{}}:H2("generateAbstractIcon",R)||{children:[],attributes:{}},Y=D.children,r2=D.attributes;return R.children=Y,R.attributes=r2,l?oV(R):nV(R)}function U6(c){var e=c.content,a=c.width,s=c.height,i=c.transform,n=c.title,o=c.extra,l=c.watchable,r=l===void 0?!1:l,f=d(d(d({},o.attributes),n?{title:n}:{}),{},{class:o.classes.join(" ")});r&&(f[S2]="");var z=d({},o.styles);t4(i)&&(z.transform=Du({transform:i,startCentered:!0,width:a,height:s}),z["-webkit-transform"]=z.transform);var V=U1(z);V.length>0&&(f.style=V);var M=[];return M.push({tag:"span",attributes:f,children:[e]}),n&&M.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),M}function lV(c){var e=c.content,a=c.title,s=c.extra,i=d(d(d({},s.attributes),a?{title:a}:{}),{},{class:s.classes.join(" ")}),n=U1(s.styles);n.length>0&&(i.style=n);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),a&&o.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),o}var h3=e2.styles;function $3(c){var e=c[0],a=c[1],s=c.slice(4),i=s4(s,1),n=i[0],o=null;return Array.isArray(n)?o={tag:"g",attributes:{class:"".concat(x.cssPrefix,"-").concat(x2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(x.cssPrefix,"-").concat(x2.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(x.cssPrefix,"-").concat(x2.PRIMARY),fill:"currentColor",d:n[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:e,height:a,icon:o}}var rV={found:!1,width:512,height:512};function tV(c,e){!i8&&!x.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function F3(c,e){var a=e;return e==="fa"&&x.styleDefault!==null&&(e=d2()),new Promise(function(s,i){if(H2("missingIconAbstract"),a==="fa"){var n=M8(c)||{};c=n.iconName||c,e=n.prefix||e}if(c&&e&&h3[e]&&h3[e][c]){var o=h3[e][c];return s($3(o))}tV(c,e),s(d(d({},rV),{},{icon:x.showMissingIcons&&c?H2("missingIconAbstract")||{}:{}}))})}var q6=function(){},D3=x.measurePerformance&&u1&&u1.mark&&u1.measure?u1:{mark:q6,measure:q6},W2='FA "6.5.2"',fV=function(c){return D3.mark("".concat(W2," ").concat(c," begins")),function(){return d8(c)}},d8=function(c){D3.mark("".concat(W2," ").concat(c," ends")),D3.measure("".concat(W2," ").concat(c),"".concat(W2," ").concat(c," begins"),"".concat(W2," ").concat(c," ends"))},u4={begin:fV,end:d8},k1=function(){};function W6(c){var e=c.getAttribute?c.getAttribute(S2):null;return typeof e=="string"}function mV(c){var e=c.getAttribute?c.getAttribute(n4):null,a=c.getAttribute?c.getAttribute(o4):null;return e&&a}function zV(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(x.replacementClass)}function HV(){if(x.autoReplaceSvg===!0)return y1.replace;var c=y1[x.autoReplaceSvg];return c||y1.replace}function uV(c){return U.createElementNS("http://www.w3.org/2000/svg",c)}function VV(c){return U.createElement(c)}function L8(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.ceFn,s=a===void 0?c.tag==="svg"?uV:VV:a;if(typeof c=="string")return U.createTextNode(c);var i=s(c.tag);Object.keys(c.attributes||[]).forEach(function(o){i.setAttribute(o,c.attributes[o])});var n=c.children||[];return n.forEach(function(o){i.appendChild(L8(o,{ceFn:s}))}),i}function pV(c){var e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var y1={replace:function(c){var e=c[0];if(e.parentNode)if(c[1].forEach(function(s){e.parentNode.insertBefore(L8(s),e)}),e.getAttribute(S2)===null&&x.keepOriginalSource){var a=U.createComment(pV(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(c){var e=c[0],a=c[1];if(~r4(e).indexOf(x.replacementClass))return y1.replace(c);var s=new RegExp("".concat(x.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(o,l){return l===x.replacementClass||l.match(s)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var n=a.map(function(o){return r1(o)}).join(`
`);e.setAttribute(S2,""),e.innerHTML=n}};function G6(c){c()}function C8(c,e){var a=typeof e=="function"?e:k1;if(c.length===0)a();else{var s=G6;x.mutateApproach===Lu&&(s=v2.requestAnimationFrame||G6),s(function(){var i=HV(),n=u4.begin("mutate");c.map(i),n(),a()})}}var V4=!1;function g8(){V4=!0}function j3(){V4=!1}var P1=null;function Y6(c){if(F6&&x.observeMutations){var e=c.treeCallback,a=e===void 0?k1:e,s=c.nodeCallback,i=s===void 0?k1:s,n=c.pseudoElementsCallback,o=n===void 0?k1:n,l=c.observeMutationsRoot,r=l===void 0?U:l;P1=new F6(function(f){if(!V4){var z=d2();U2(f).forEach(function(V){if(V.type==="childList"&&V.addedNodes.length>0&&!W6(V.addedNodes[0])&&(x.searchPseudoElements&&o(V.target),a(V.target)),V.type==="attributes"&&V.target.parentNode&&x.searchPseudoElements&&o(V.target.parentNode),V.type==="attributes"&&W6(V.target)&&~yu.indexOf(V.attributeName))if(V.attributeName==="class"&&mV(V.target)){var M=W1(r4(V.target)),L=M.prefix,y=M.iconName;V.target.setAttribute(n4,L||z),y&&V.target.setAttribute(o4,y)}else zV(V.target)&&i(V.target)})}}),p2&&P1.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function hV(){P1&&P1.disconnect()}function MV(c){var e=c.getAttribute("style"),a=[];return e&&(a=e.split(";").reduce(function(s,i){var n=i.split(":"),o=n[0],l=n.slice(1);return o&&l.length>0&&(s[o]=l.join(":").trim()),s},{})),a}function vV(c){var e=c.getAttribute("data-prefix"),a=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",i=W1(r4(c));return i.prefix||(i.prefix=d2()),e&&a&&(i.prefix=e,i.iconName=a),i.iconName&&i.prefix||(i.prefix&&s.length>0&&(i.iconName=Xu(i.prefix,c.innerText)||m4(i.prefix,m8(c.innerText))),!i.iconName&&x.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=c.firstChild.data)),i}function dV(c){var e=U2(c.attributes).reduce(function(i,n){return i.name!=="class"&&i.name!=="style"&&(i[n.name]=n.value),i},{}),a=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return x.autoA11y&&(a?e["aria-labelledby"]="".concat(x.replacementClass,"-title-").concat(s||i1()):(e["aria-hidden"]="true",e.focusable="false")),e}function LV(){return{iconName:null,title:null,titleId:null,prefix:null,transform:i2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function K6(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=vV(c),s=a.iconName,i=a.prefix,n=a.rest,o=dV(c),l=T3("parseNodeAttributes",{},c),r=e.styleParser?MV(c):[];return d({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:i2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:r,attributes:o}},l)}var CV=e2.styles;function b8(c){var e=x.autoReplaceSvg==="nest"?K6(c,{styleParser:!1}):K6(c);return~e.extra.classes.indexOf(n8)?H2("generateLayersText",c,e):H2("generateSvgReplacementMutation",c,e)}var L2=new Set;l4.map(function(c){L2.add("fa-".concat(c))});Object.keys(c1[I]).map(L2.add.bind(L2));Object.keys(c1[W]).map(L2.add.bind(L2));L2=o1(L2);function X6(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!p2)return Promise.resolve();var a=U.documentElement.classList,s=function(z){return a.add("".concat(D6,"-").concat(z))},i=function(z){return a.remove("".concat(D6,"-").concat(z))},n=x.autoFetchSvg?L2:l4.map(function(z){return"fa-".concat(z)}).concat(Object.keys(CV));n.includes("fa")||n.push("fa");var o=[".".concat(n8,":not([").concat(S2,"])")].concat(n.map(function(z){return".".concat(z,":not([").concat(S2,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=U2(c.querySelectorAll(o))}catch{}if(l.length>0)s("pending"),i("complete");else return Promise.resolve();var r=u4.begin("onTree"),f=l.reduce(function(z,V){try{var M=b8(V);M&&z.push(M)}catch(L){i8||L.name==="MissingIcon"&&console.error(L)}return z},[]);return new Promise(function(z,V){Promise.all(f).then(function(M){C8(M,function(){s("active"),s("complete"),i("pending"),typeof e=="function"&&e(),r(),z()})}).catch(function(M){r(),V(M)})})}function gV(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;b8(c).then(function(a){a&&C8([a],e)})}function bV(c){return function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(e||{}).icon?e:B3(e||{}),i=a.mask;return i&&(i=(i||{}).icon?i:B3(i||{})),c(s,d(d({},a),{},{mask:i}))}}var xV=function(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,s=a===void 0?i2:a,i=e.symbol,n=i===void 0?!1:i,o=e.mask,l=o===void 0?null:o,r=e.maskId,f=r===void 0?null:r,z=e.title,V=z===void 0?null:z,M=e.titleId,L=M===void 0?null:M,y=e.classes,A=y===void 0?[]:y,_=e.attributes,v=_===void 0?{}:_,b=e.styles,B=b===void 0?{}:b;if(c){var j=c.prefix,R=c.iconName,D=c.icon;return G1(d({type:"icon"},c),function(){return A2("beforeDOMElementCreation",{iconDefinition:c,params:e}),x.autoA11y&&(V?v["aria-labelledby"]="".concat(x.replacementClass,"-title-").concat(L||i1()):(v["aria-hidden"]="true",v.focusable="false")),H4({icons:{main:$3(D),mask:l?$3(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:j,iconName:R,transform:d(d({},i2),s),symbol:n,title:V,maskId:f,titleId:L,extra:{attributes:v,styles:B,classes:A}})})}},NV={mixout:function(){return{icon:bV(xV)}},hooks:function(){return{mutationObserverCallbacks:function(c){return c.treeCallback=X6,c.nodeCallback=gV,c}}},provides:function(c){c.i2svg=function(e){var a=e.node,s=a===void 0?U:a,i=e.callback,n=i===void 0?function(){}:i;return X6(s,n)},c.generateSvgReplacementMutation=function(e,a){var s=a.iconName,i=a.title,n=a.titleId,o=a.prefix,l=a.transform,r=a.symbol,f=a.mask,z=a.maskId,V=a.extra;return new Promise(function(M,L){Promise.all([F3(s,o),f.iconName?F3(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var A=s4(y,2),_=A[0],v=A[1];M([e,H4({icons:{main:_,mask:v},prefix:o,iconName:s,transform:l,symbol:r,maskId:z,title:i,titleId:n,extra:V,watchable:!0})])}).catch(L)})},c.generateAbstractIcon=function(e){var a=e.children,s=e.attributes,i=e.main,n=e.transform,o=e.styles,l=U1(o);l.length>0&&(s.style=l);var r;return t4(n)&&(r=H2("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),a.push(r||i.icon),{children:a,attributes:s}}}},kV={mixout:function(){return{layer:function(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.classes,s=a===void 0?[]:a;return G1({type:"layer"},function(){A2("beforeDOMElementCreation",{assembler:c,params:e});var i=[];return c(function(n){Array.isArray(n)?n.map(function(o){i=i.concat(o.abstract)}):i=i.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(x.cssPrefix,"-layers")].concat(o1(s)).join(" ")},children:i}]})}}}},yV={mixout:function(){return{counter:function(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.title,s=a===void 0?null:a,i=e.classes,n=i===void 0?[]:i,o=e.attributes,l=o===void 0?{}:o,r=e.styles,f=r===void 0?{}:r;return G1({type:"counter",content:c},function(){return A2("beforeDOMElementCreation",{content:c,params:e}),lV({content:c.toString(),title:s,extra:{attributes:l,styles:f,classes:["".concat(x.cssPrefix,"-layers-counter")].concat(o1(n))}})})}}}},wV={mixout:function(){return{text:function(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,s=a===void 0?i2:a,i=e.title,n=i===void 0?null:i,o=e.classes,l=o===void 0?[]:o,r=e.attributes,f=r===void 0?{}:r,z=e.styles,V=z===void 0?{}:z;return G1({type:"text",content:c},function(){return A2("beforeDOMElementCreation",{content:c,params:e}),U6({content:c,transform:d(d({},i2),s),title:n,extra:{attributes:f,styles:V,classes:["".concat(x.cssPrefix,"-layers-text")].concat(o1(l))}})})}}},provides:function(c){c.generateLayersText=function(e,a){var s=a.title,i=a.transform,n=a.extra,o=null,l=null;if(e8){var r=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();o=f.width/r,l=f.height/r}return x.autoA11y&&!s&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,U6({content:e.innerHTML,width:o,height:l,transform:i,title:s,extra:n,watchable:!0})])}}},SV=new RegExp('"',"ug"),Z6=[1105920,1112319];function AV(c){var e=c.replace(SV,""),a=Uu(e,0),s=a>=Z6[0]&&a<=Z6[1],i=e.length===2?e[0]===e[1]:!1;return{value:m8(i?e[0]:e),isSecondary:s||i}}function Q6(c,e){var a="".concat(du).concat(e.replace(":","-"));return new Promise(function(s,i){if(c.getAttribute(a)!==null)return s();var n=U2(c.children),o=n.filter(function(Y){return Y.getAttribute(_3)===e})[0],l=v2.getComputedStyle(c,e),r=l.getPropertyValue("font-family").match(xu),f=l.getPropertyValue("font-weight"),z=l.getPropertyValue("content");if(o&&!r)return c.removeChild(o),s();if(r&&z!=="none"&&z!==""){var V=l.getPropertyValue("content"),M=~["Sharp"].indexOf(r[2])?W:I,L=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(r[2])?e1[M][r[2].toLowerCase()]:Nu[M][f],y=AV(V),A=y.value,_=y.isSecondary,v=r[0].startsWith("FontAwesome"),b=m4(L,A),B=b;if(v){var j=Zu(A);j.iconName&&j.prefix&&(b=j.iconName,L=j.prefix)}if(b&&!_&&(!o||o.getAttribute(n4)!==L||o.getAttribute(o4)!==B)){c.setAttribute(a,B),o&&c.removeChild(o);var R=LV(),D=R.extra;D.attributes[_3]=e,F3(b,L).then(function(Y){var r2=H4(d(d({},R),{},{icons:{main:Y,mask:z4()},prefix:L,iconName:B,extra:D,watchable:!0})),c2=U.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(c2,c.firstChild):c.appendChild(c2),c2.outerHTML=r2.map(function(si){return r1(si)}).join(`