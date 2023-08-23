import{_ as p,o as i,c as d,b as s,n as a,d as n,g as v,p as g,f as m,r as x,t as h,a as u,s as l}from"./index-857d8666.js";const k={data:()=>({submenu:!1}),computed:{route(){return this.$route.path},subRoute(){const t=["/documentation","/feedback"];for(const e of t)if(this.$route.path.includes(e))return!0;return!1}},methods:{open(t){location.href=t}}},y=t=>(g("data-v-ae627bf2"),t=t(),m(),t),$={style:{"min-height":"50px"},class:"sticky text-right shadow bg-slate-50 w-full top-0 block"},_=y(()=>s("span",{class:""}," More... ",-1)),w={key:0,class:"bg-slate-50 border-y-slate-100 border-t border-b-2 right-0 top-full absolute shadow pb-2"};function C(t,e,c,f,b,r){return i(),d("nav",$,[s("div",{style:{width:"216px","background-size":"contain","background-repeat":"no-repeat","margin-left":"10px",cursor:"pointer",float:"left",height:"35px","margin-top":"7px","margin-bottom":"7px"},onClick:e[0]||(e[0]=o=>t.$router.push("/")),class:"sm:inline hidden logo"}),s("button",{onClick:e[1]||(e[1]=o=>t.$router.push("/")),class:a([{active:r.route==="/"},"hover:text-green-700 text-slate-700 pr-2 sm:hidden focus:text-green-700 active:font-bold focus:font-bold"])}," Home ",2),s("button",{onClick:e[2]||(e[2]=o=>t.$router.push("/features")),class:a([{active:r.route==="/features"},"hover:text-green-700 text-slate-700 px-2 focus:text-green-700 active:font-bold focus:font-bold"])}," Features ",2),s("button",{onClick:e[3]||(e[3]=o=>t.$router.push("/pricing")),class:a([{active:r.route==="/pricing"},"hover:text-green-700 text-slate-700 px-2 focus:text-green-700 active:font-bold focus:font-bold"])}," Pricing ",2),n(),s("button",{onClick:e[7]||(e[7]=o=>t.submenu=!0),class:a([{active:r.subRoute},"relative hover:text-green-700 text-slate-700 pr-2"]),onMouseenter:e[8]||(e[8]=o=>t.submenu=!0),onMouseleave:e[9]||(e[9]=o=>t.submenu=!1)},[_,t.submenu?(i(),d("div",w,[s("button",{onClick:e[4]||(e[4]=o=>(t.submenu=!1,t.$router.push("/feedback"))),class:a([{active:r.route.includes("/feedback")},"px-4 py-2 w-full hover:text-green-700 text-slate-700 text-right focus:text-green-700 active:font-bold focus:font-bold"])}," Feedback ",2),n(),s("button",{onClick:e[5]||(e[5]=o=>(t.submenu=!1,t.$router.push("/search"))),class:a([{active:r.route.includes("/search")},"px-4 py-2 w-full hover:text-green-700 text-slate-700 text-right focus:text-green-700 active:font-bold focus:font-bold"])}," Components ",2),s("button",{onClick:e[6]||(e[6]=o=>(t.submenu=!1,t.$router.push("/documentation"))),class:a([{active:r.route.includes("/documentation")},"px-4 py-2 w-full hover:text-green-700 text-slate-700 text-right focus:text-green-700 active:font-bold focus:font-bold"])}," Documentation ",2)])):v("",!0)],34),n(),s("button",{onClick:e[10]||(e[10]=o=>r.open("https://studio.vueplay.com")),class:a([{active:r.route==="/app"},"px-3 hover:bg-violet-600 bg-violet-500 from-blue-500 bg-gradient-to-br hover:from-blue-600 text-white duration-300 transition hover:drop-shadow-lg drop-shadow"]),style:{"font-weight":"bold","border-top-left-radius":"4px","border-bottom-left-radius":"4px",height:"29px","border-top-right-radius":"4px","border-bottom-right-radius":"4px","margin-right":"5px"}}," Studio ⇾ ",2)])}const D=p(k,[["render",C],["__scopeId","data-v-ae627bf2"]]);const S={data:()=>({})},F={style:{width:"100%","text-align":"center","box-sizing":"border-box",display:"inline-block"},class:"text-sky-100 bg-sky-950 py-12 text-xs md:text-md sm:text-sm px-6"},N={class:"pb-3"};function V(t,e,c,f,b,r){const o=x("router-link");return i(),d("footer",F,[s("p",N," © All rights reserved - Siglar Development AS "+h(new Date().getUTCFullYear()),1),n(),u(o,{to:"/release-log"},{default:l(()=>[n(" Release log ")]),_:1}),n(" - "),u(o,{to:"/terms-of-service"},{default:l(()=>[n(" Terms of Service ")]),_:1}),n("-"),u(o,{to:"/privacy-policy"},{default:l(()=>[n(" Privacy Policy ")]),_:1})])}const z=p(S,[["render",V],["__scopeId","data-v-c6728da1"]]);export{z as F,D as V};
