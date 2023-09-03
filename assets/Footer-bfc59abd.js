import{_ as c,o as u,c as d,b as o,n as a,d as n,e as x,p as f,g as m,r as h,t as _,a as l,s as i}from"./index-4af85dfb.js";const w={data:()=>({submenu:!1,next:""}),computed:{route(){return this.next||this.$route.path},subRoute(){const t=["/documentation","/feedback"];for(const e of t)if(this.$route.path.includes(e))return!0;return!1}},methods:{open(t){location.href=t},to(t){this.next=t,this.$router.push(t)}}},p=t=>(f("data-v-980a96db"),t=t(),m(),t),k={style:{"min-height":"80px"},class:"relative text-right shadow bg-slate-50 w-full top-0 block"},y=p(()=>o("span",{class:""}," More ",-1)),C=p(()=>o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-4 h-4 inline-block"},[o("path",{"fill-rule":"evenodd",d:"M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z","clip-rule":"evenodd"})],-1)),$={key:0,class:"bg-slate-50 border-y-slate-100 border-t border-b-2 right-0 top-full absolute shadow pb-2"},S=p(()=>o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-4 h-4 ml-1 -mt-1 inline-block"},[o("path",{"fill-rule":"evenodd",d:"M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z","clip-rule":"evenodd"}),o("path",{d:"M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"})],-1));function z(t,e,v,b,g,s){return u(),d("nav",k,[o("div",{style:{width:"216px","background-size":"contain","background-repeat":"no-repeat","margin-left":"15px",cursor:"pointer",float:"left",height:"35px","margin-top":"23px","margin-bottom":"7px"},onClick:e[0]||(e[0]=r=>t.$router.push("/")),class:"sm:inline hidden logo"}),o("button",{onClick:e[1]||(e[1]=r=>s.to("/")),class:a([{active:s.route==="/"},"hover:text-green-700 text-slate-700 pr-2 sm:hidden"])}," Home ",2),n(),o("button",{onClick:e[2]||(e[2]=r=>s.to("/features")),class:a([{active:s.route==="/features"},"hover:text-green-700 text-slate-700 px-2"])}," Features ",2),o("button",{onClick:e[3]||(e[3]=r=>s.to("/pricing")),class:a([{active:s.route==="/pricing"},"hover:text-green-700 text-slate-700 px-2"])}," Pricing ",2),n(),o("button",{onClick:e[7]||(e[7]=r=>t.submenu=!0),class:a([{active:s.subRoute},"relative hover:text-green-700 text-slate-700 pr-2"]),onMouseenter:e[8]||(e[8]=r=>t.submenu=!0),onMouseleave:e[9]||(e[9]=r=>t.submenu=!1)},[y,C,t.submenu?(u(),d("div",$,[o("button",{onClick:e[4]||(e[4]=r=>(t.submenu=!1,s.to("/feedback"))),class:a([{active:s.route.includes("/feedback")},"px-4 py-2 w-full hover:text-green-700 text-slate-700 text-right"])}," Feedback ",2),n(),o("button",{onClick:e[5]||(e[5]=r=>(t.submenu=!1,s.to("/search"))),class:a([{active:s.route.includes("/search")},"px-4 py-2 w-full hover:text-green-700 text-slate-700 text-right"])}," Components ",2),o("button",{onClick:e[6]||(e[6]=r=>(t.submenu=!1,s.to("/documentation"))),class:a([{active:s.route.includes("/documentation")},"px-4 py-2 w-full hover:text-green-700 text-slate-700 text-right focus:text-green-700 active:font-bold focus:font-bold"])}," Documentation ",2)])):x("",!0)],34),n(),o("a",{class:a([{active:s.route==="/app"},"px-3 hover:bg-violet-600 bg-violet-500 from-blue-500 bg-gradient-to-br hover:from-blue-600 text-white duration-300 transition hover:drop-shadow-lg drop-shadow"]),style:{"font-weight":"bold","border-top-left-radius":"4px","border-bottom-left-radius":"4px",height:"29px","border-top-right-radius":"4px","border-bottom-right-radius":"4px","margin-right":"10px","padding-top":"7px","padding-bottom":"7px"},href:"https://studio.vueplay.com"},[n(" Studio "),S],2)])}const I=c(w,[["render",z],["__scopeId","data-v-980a96db"]]);const M={data:()=>({})},F={style:{width:"100%","text-align":"center","box-sizing":"border-box",display:"inline-block"},class:"py-20 text-sky-100 bg-sky-950 text-xs md:text-md sm:text-sm px-6"},N={class:"pb-3"};function V(t,e,v,b,g,s){const r=h("router-link");return u(),d("footer",F,[o("p",N," © All rights reserved - Siglar Development AS "+_(new Date().getUTCFullYear()),1),n(),l(r,{to:"/release-log"},{default:i(()=>[n(" Release log ")]),_:1}),n(" - "),l(r,{to:"/terms-of-service"},{default:i(()=>[n(" Terms of Service ")]),_:1}),n("-"),l(r,{to:"/privacy-policy"},{default:i(()=>[n(" Privacy Policy ")]),_:1})])}const A=c(M,[["render",V],["__scopeId","data-v-724d327c"]]);export{A as F,I as V};
