import{V as g}from"./Navigator-48c6c39a.js";import{_ as d,o as r,c,b as t,p,e as _,r as l,a,d as y}from"./index-23adf8db.js";const $={data:()=>({}),methods:{redirect(e){location.href=e}}},i=e=>(p("data-v-d8fa638c"),e=e(),_(),e),x={class:"comparison"},P=i(()=>t("h2",null,"Free",-1)),b=i(()=>t("p",null," Try out the playground with only a few limitations. ",-1)),B=i(()=>t("div",{class:"price"}," 0 USD / Month ",-1)),S=i(()=>t("div",{class:"feature-list"},[t("div",null,"Drag & Drop"),t("div",null,"1 Application"),t("div",null,"Basic styling"),t("div",null,"Basic elements"),t("div",null," Basic transform tools "),t("div",null,"Build distribution")],-1)),V=[P,b,B,S],k=i(()=>t("h2",null,"Premium",-1)),w=i(()=>t("p",null," Use the full playground without any limitations. ",-1)),C=i(()=>t("div",{class:"price"}," 4.99 USD / Month ",-1)),I=i(()=>t("div",{class:"feature-list"},[t("div",null,"Everything in Free"),t("div",null,"Unlimited Applications"),t("div",null,"All styles"),t("div",null,"All elements"),t("div",null,"Push to GitHub"),t("div",null,"Deploy to GitHub pages")],-1)),N=[k,w,C,I];function D(e,n,u,v,h,o){return r(),c("div",x,[t("div",{class:"free",onClick:n[0]||(n[0]=s=>o.redirect("https://vueplay.app"))},V),t("div",{class:"early-bird",onClick:n[1]||(n[1]=s=>o.redirect("https://vueplay.app"))},N)])}const A=d($,[["render",D],["__scopeId","data-v-d8fa638c"]]);const U={components:{VueNavigator:g,Pricing:A},data:()=>({}),methods:{open(e){location.href=e}}},F=e=>(p("data-v-90110ff4"),e=e(),_(),e),G=F(()=>t("header",null,[t("h1",null," Pricing "),t("p",null," Compare plans ")],-1)),E={style:{"text-align":"left"}},H={style:{"text-align":"center"}};function M(e,n,u,v,h,o){const s=l("VueNavigator"),f=l("Pricing",!0);return r(),c("div",null,[a(s),G,t("main",null,[t("section",E,[a(f,{style:{"margin-bottom":"50px","max-width":"786px","text-align":"left","margin-right":"auto","margin-left":"auto"}})]),t("section",H,[t("button",{onClick:n[0]||(n[0]=m=>e.$router.push("/features"))}," Features "),y(),t("button",{onClick:n[1]||(n[1]=m=>o.open("https://vueplay.app")),class:"higlighted"}," Get Started ⇾ ")])])])}const q=d(U,[["render",M],["__scopeId","data-v-90110ff4"]]);export{q as default};
