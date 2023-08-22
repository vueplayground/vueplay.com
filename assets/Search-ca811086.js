import{V as J,F as K}from"./Footer-98117824.js";import{M as O}from"./Meta-2eb3e106.js";import{d as Y}from"./defaultBase64Image-ab365e89.js";import{_ as Z,o as d,c,b as s,h as H,g as b,t as f,w as y,i as R,F as X,j as G,d as W,k as Q,n as k,r as p,a as w,v as ee,p as te,f as se}from"./index-a146f80f.js";const oe={inject:["io","user","login","logout"],expose:["refresh"],data:()=>({term:"",categories:[],posts:[],category:"",sort:"latest",background:Y}),watch:{category(){this.refresh()},sort(){this.refresh()}},created(){this.refresh(),this.getCategories()},methods:{statusStyle(e){return e.public?{color:"rgb(106, 208, 157)",backgroundColor:"rgb(239, 252, 245)",borderColor:"rgb(106, 208, 157)"}:{color:"rgb(137, 46, 222)",backgroundColor:"rgb(247, 237, 255)",borderColor:"rgb(137, 46, 222)"}},async refresh(e=this.sort){this.sort=e;let o={public:!0};this.term&&(o.title={$regex:this.term,$options:"i"}),this.sort==="top"&&(o.top=!0),this.category&&(o.category_id=this.category),this.posts=await this.io.service("types/applications").find({query:o})},async getCategories(){const e=await this.io.service("types/categories").find({query:{$sort:{order:1}}});this.categories=(e==null?void 0:e.data)||[]},async myVote(e){var u;const o=await this.io.service("types/votes").find({query:{application_id:e._id,user_id:(u=this.user)==null?void 0:u._id}});return(o==null?void 0:o[0])||!1},async vote(e){if(await this.login()){const o=await this.myVote(e);o?await this.io.service("types/votes").remove(o._id):await this.io.service("types/votes").create({application_id:e._id}),await this.refreshVotes(e)}else alert("You have to be logged in to cast a vote")},async refreshVotes(e){e.votes=await this.io.service("types/votes").find({query:{application_id:e._id}})},async remove(e){await this.io.service("types/applications").remove(e),await this.refresh(),alert("Removed!")}}},re={class:"p-6 md:pt-6 pb-24"},ie={class:"absolute left-0 right-0 top-0 h-16 p-2 bg-slate-50"},le={key:1,class:"float-right mt-3 mr-4"},ae={class:"h-24 flex-col max-w-2xl mx-auto lg:h-9 lg:mb-8 flex text-lg lg:flex-row mt-16"},ne={class:"text-sm mb:text-base font-light"},de=s("span",null," Showing ",-1),ce=s("option",{value:"latest"}," Latest ",-1),ue=s("option",{value:"top"}," Top ",-1),he=[ce,ue],ge=s("span",null," components in ",-1),me=s("option",{value:""}," All Categories ",-1),ve=["value"],fe={class:"lg:grow"},_e={class:"lg:float-right mt-4 lg:mt-0 lg:h-full"},pe={class:"relative lg:h-full"},we=s("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[s("svg",{class:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},[s("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})])],-1),ye={class:"max-w-2xl mx-auto mb-8 mt-4 flex cursor-pointer"},be={class:"pr-6 inline-flex"},xe=["onClick"],ke={class:"h-1/2 w-full"},Ce=s("polygon",{points:"10,0 20,10 0,10"},null,-1),Ve=[Ce],Me={class:"text-center h-1/2 w-full -mt-1"},Ie=["onClick"],Se={class:"font-semibold"},$e={class:"text-gray-500 overflow-hidden text-ellipsis"},ze=["onClick","onMouseenter","onMouseleave"],Be=["src"],Ae=["onClick","onMouseenter","onMouseleave"],Fe=s("div",{class:"w-6"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"stroke-gray-400 w-5 h-5 mt-1 mr-6"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"})])],-1),Le={class:"w-10 text-right"};function Ne(e,o,u,g,m,r){var _,h,a,n,v,C,V,M,I,S,$,z,B,A,F;return d(),c("section",re,[s("div",ie,[(_=r.user)!=null&&_.email||(a=(h=r.user)==null?void 0:h.value)!=null&&a.email?(d(),c("div",{key:0,class:"h-12 w-12 bg-cover rounded-full bg-slate-500 mx-auto float-right",style:H("background-image: url("+(((n=r.user)==null?void 0:n.picture)||((C=(v=r.user)==null?void 0:v.value)==null?void 0:C.picture))+")")},null,4)):b("",!0),(V=r.user)!=null&&V.email||(I=(M=r.user)==null?void 0:M.value)!=null&&I.email?(d(),c("div",le,f(((S=r.user)==null?void 0:S.name)||((z=($=r.user)==null?void 0:$.value)==null?void 0:z.name)),1)):b("",!0),(B=r.user)!=null&&B.email||(F=(A=r.user)==null?void 0:A.value)!=null&&F.email?(d(),c("div",{key:2,class:"float-left mt-3 ml-4 cursor-pointer text-slate-700 hover:text-slate-900 font-bold",onClick:o[0]||(o[0]=(...t)=>r.logout&&r.logout(...t))}," Logout ")):(d(),c("div",{key:3,class:"float-left mt-3 ml-4 cursor-pointer text-slate-700 hover:text-slate-900 font-bold",onClick:o[1]||(o[1]=(...t)=>r.login&&r.login(...t))}," Login "))]),s("div",ae,[s("div",ne,[de,y(s("select",{name:"",class:"cursor-pointer bg-transparent underline-offset-4 underline mx-1","onUpdate:modelValue":o[2]||(o[2]=t=>e.sort=t)},he,512),[[R,e.sort]]),ge,y(s("select",{name:"",class:"cursor-pointer bg-transparent underline-offset-4 underline ml-1","onUpdate:modelValue":o[3]||(o[3]=t=>e.category=t)},[me,(d(!0),c(X,null,G(e.categories,t=>(d(),c("option",{value:t._id},f(t.title),9,ve))),256))],512),[[R,e.category]])]),s("div",fe,[s("div",_e,[s("div",pe,[we,W(),y(s("input",{type:"search",id:"default-search",class:"w-full h-10 lg:w-52 lg:h-full max-w-full pl-10 pr-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search...",required:"","onUpdate:modelValue":o[4]||(o[4]=t=>e.term=t),onChange:o[5]||(o[5]=t=>r.refresh())},null,544),[[Q,e.term]])])])])]),(d(!0),c(X,null,G(e.posts.data,t=>{var L,N,P,j,q,D,T,U,E;return d(),c("article",ye,[s("div",be,[s("div",{class:k(["cursor-pointer border w-11 h-12 rounded-lg",{"bg-emerald-50":(L=t==null?void 0:t.votes)==null?void 0:L.find(i=>{var l;return i.user_id===((l=r.user)==null?void 0:l._id)}),"border-emerald-400":(N=t==null?void 0:t.votes)==null?void 0:N.find(i=>{var l;return i.user_id===((l=r.user)==null?void 0:l._id)}),"hover:bg-emerald-100":(P=t==null?void 0:t.votes)==null?void 0:P.find(i=>{var l;return i.user_id===((l=r.user)==null?void 0:l._id)}),"hover:bg-slate-100":!((j=t==null?void 0:t.votes)!=null&&j.find(i=>{var l;return i.user_id===((l=r.user)==null?void 0:l._id)})),"border-emerald-400":(q=t==null?void 0:t.votes)==null?void 0:q.find(i=>{var l;return i.user_id===((l=r.user)==null?void 0:l._id)})}]),onClick:i=>r.vote(t)},[s("div",ke,[(d(),c("svg",{viewBox:"0 0 20 10",class:k(["pt-2 w-5 h-5 mx-auto",{"fill-emerald-400":(D=t==null?void 0:t.votes)==null?void 0:D.find(i=>{var l;return i.user_id===((l=r.user)==null?void 0:l._id)}),"fill-gray-400":!((T=t==null?void 0:t.votes)!=null&&T.find(i=>{var l;return i.user_id===((l=r.user)==null?void 0:l._id)}))}])},Ve,2))]),s("div",Me,f((U=t==null?void 0:t.votes)==null?void 0:U.length),1)],10,xe)]),s("div",{class:k(["hover:text-emerald-600 overflow-hidden text-ellipsis inline-flex flex-col grow pr-4 cursor-pointer",t.over?"text-emerald-600":""]),onClick:i=>e.$router.push("/search/"+t._id),style:{"max-height":"75px",height:"1806.03px"}},[s("h1",Se,[W(f(t.title)+" ",1),s("button",{class:"ml-2 border rounded text-xs py-0.5 px-1",style:H(r.statusStyle(t))},f(t.public?"Public":"Private"),5)]),s("p",$e,f(t.description),1)],10,Ie),s("div",{class:"pl-4 inline-flex cursor-pointer",onClick:i=>e.$router.push("/search/"+t._id),onMouseenter:i=>t.over=!0,onMouseleave:i=>t.over=!1},[s("img",{class:"rounded w-16 h-16",src:t.icon||e.background,style:{"min-width":"4rem"}},null,8,Be)],40,ze),s("div",{class:"pl-4 inline-flex cursor-pointer",onClick:i=>e.$router.push("/search/"+t._id),onMouseenter:i=>t.over=!0,onMouseleave:i=>t.over=!1},[Fe,s("div",Le,f((E=t.comments)==null?void 0:E.length),1)],40,Ae)])}),256))])}const Pe=Z(oe,[["render",Ne]]);const je={components:{VueNavigator:J,Footer:K,Meta:O,Components:Pe},inject:["io","user","login","test","yam"],data:()=>({category:"",title:"",description:"",icon:"",background:Y,menu:!1,categories:[]}),mounted(){this.getCategories()},methods:{reset(){var e,o;this.category=((o=(e=this.categories)==null?void 0:e[0])==null?void 0:o._id)||"",this.title="",this.description="",this.icon=""},async getCategories(){var o,u;const e=await this.io.service("types/categories").find({query:{$sort:{order:1}}});this.categories=(e==null?void 0:e.data)||[],this.category||(this.category=((u=(o=this.categories)==null?void 0:o[0])==null?void 0:u._id)||"")},async post(){await this.login()?(await this.io.service("types/applications").create({category_id:this.category,title:this.title,description:this.description,icon:this.icon}),this.reset(),alert("Thank you for posting a component!"),this.$refs.components.refresh("latest")):alert("Could not log in")},open(e){location.href=e},selectImage(){let e=document.createElement("input");e.type="file",e.multiple=!1,e.accept="image/*",e.onchange=async()=>{let u=Array.from(e.files)[0],g=new FileReader;g.readAsDataURL(u),g.onload=async m=>{this.icon=await this.resizeImage(m.target.result)},g.onerror=m=>{alert("Could not load file"),console.log(m)}},e.click()},resizeImage(e){return new Promise((o,u)=>{let g=1e3,m=1e3,r=document.createElement("canvas"),_=r.getContext("2d"),h=new Image;h.onload=()=>{let a=h.width,n=h.height;a>n?a>g&&(n*=g/a,a=g):n>m&&(a*=m/n,n=m),r.width=a,r.height=n,_.drawImage(h,0,0,a,n);let v=r.toDataURL("image/png",.7);o(v)},h.src=e})}}},x=e=>(te("data-v-8f25596a"),e=e(),se(),e),qe={class:"bg-white flex flex-col h-screen"},De={style:{width:"100%","min-height":"calc(100vh - 50px)"},class:"flex-1 relative overflow-auto"},Te={class:"relative h-full w-full flex"},Ue=x(()=>s("label",{class:"bg-white fixed z-40 md:hidden cursor-pointer inline-flex items-center p-2 mt-20 ml-3 text-sm text-slate-900 rounded-lg",for:"toggle"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6"},[s("path",{"fill-rule":"evenodd",d:"M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z","clip-rule":"evenodd"})])],-1)),Ee={class:"bottom-0 bg-white md:w-96 md:p-7 md:shadow-md shadow-lg pt-24 border-r border-slate-200 peer-checked:px-7 peer-checked:pt-24 peer-checked:pb-7 duration-200 transition-all ease-in-out w-0 max-w-full z-30 peer-checked:w-80 absolute md:relative top-0 overflow-auto"},He=x(()=>s("h3",{class:"mt-12 text-slate-700 mb-4 text-center whitespace-nowrap font-bold"}," Post a Component ",-1)),Re=x(()=>s("p",{class:"my-6 text-slate-500 mx-auto text-center"}," Add components to the library from Vue Play and make it public using the deploy section. ",-1)),Xe=x(()=>s("p",{class:"text-slate-500 mx-auto text-center",style:{height:"123px"}}," It will be available using drag and drop from Vue Play for everyone. ",-1));function Ge(e,o,u,g,m,r){const _=p("Meta"),h=p("VueNavigator"),a=p("Components"),n=p("Footer");return d(),c("div",qe,[w(_,{description:"Browse through our components library. Drag and drop into your application using Vue Play.",title:"Components Library"}),w(h,{class:"absolute z-50"}),s("main",De,[s("div",Te,[Ue,y(s("input",{class:"peer hidden",type:"checkbox",id:"toggle","onUpdate:modelValue":o[0]||(o[0]=v=>e.menu=v)},null,512),[[ee,e.menu]]),s("div",Ee,[He,Re,Xe,b("",!0)]),w(a,{class:"m-auto grow h-full overflow-auto pt-16 lg:pt-7 relative",ref:"components"},null,512),e.menu?(d(),c("div",{key:0,class:"absolute h-full w-full",onClick:o[7]||(o[7]=v=>e.menu=!1)})):b("",!0)])]),w(n)])}const Ke=Z(je,[["render",Ge],["__scopeId","data-v-8f25596a"]]);export{Ke as default};
