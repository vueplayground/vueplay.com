import{V as X,F as O}from"./Footer-98f3d8d3.js";import{M as K}from"./Meta-1c47bc35.js";import{_ as R,o as d,c as n,b as s,h as M,g as _,t as p,w as b,i as x,d as z,F as C,j as V,k as S,n as I,r as y,a as k,v as W,p as Y,f as Z}from"./index-9226c55c.js";import{d as J}from"./defaultBase64Image-ab365e89.js";const Q={inject:["io","user","login","logout"],expose:["refresh"],data:()=>({term:"",categories:[],statuses:[],posts:[],category:"",status:"",sort:"latest"}),watch:{category(){this.refresh()},status(){this.refresh()},sort(){this.refresh()}},created(){this.refresh(),this.getCategories(),this.getStatuses()},methods:{statusStyle(e){var t,c,u,h,r,v;return{color:(c=(t=e==null?void 0:e.status)==null?void 0:t[0])==null?void 0:c.foregroundColor,backgroundColor:(h=(u=e==null?void 0:e.status)==null?void 0:u[0])==null?void 0:h.backgroundColor,borderColor:(v=(r=e==null?void 0:e.status)==null?void 0:r[0])==null?void 0:v.foregroundColor}},async refresh(e=this.sort){this.sort=e;let t={};this.term&&(t.title={$regex:this.term,$options:"i"}),this.sort==="top"&&(t.top=!0),this.category&&(t.category_id=this.category),this.status?t.status_id=this.status:t.status_id={$nin:["64d0cdd1cc7eda107dbe566c"]},this.posts=await this.io.service("types/feedback").find({query:t})},async getCategories(){const e=await this.io.service("types/feedback-categories").find({query:{$sort:{order:1}}});this.categories=(e==null?void 0:e.data)||[]},async getStatuses(){const e=await this.io.service("types/feedback-status").find({query:{$sort:{order:1}}});this.statuses=(e==null?void 0:e.data)||[]},async myVote(e){var c;const t=await this.io.service("types/feedback-votes").find({query:{feedback_id:e._id,user_id:(c=this.user)==null?void 0:c._id}});return(t==null?void 0:t[0])||!1},async vote(e){if(await this.login()){const t=await this.myVote(e);t?await this.io.service("types/feedback-votes").remove(t._id):await this.io.service("types/feedback-votes").create({feedback_id:e._id}),await this.refreshVotes(e)}else alert("You have to be logged in to cast a vote")},async refreshVotes(e){e.votes=await this.io.service("types/feedback-votes").find({query:{feedback_id:e._id}})},async remove(e){await this.io.service("types/feedback").remove(e),await this.refresh(),alert("Removed!")}}},ee={class:"p-6 md:pt-6 pb-24"},te={class:"absolute left-0 right-0 top-0 h-16 p-2 bg-slate-50"},se={key:1,class:"float-right mt-3 mr-4"},oe={class:"h-24 flex-col max-w-2xl mx-auto lg:h-9 lg:mb-8 flex text-lg lg:flex-row mt-16"},re={class:"text-sm mb:text-base font-light"},le=s("span",null," Showing ",-1),ae=s("option",{value:"latest"}," Latest ",-1),ie=s("option",{value:"top"}," Top ",-1),de=[ae,ie],ne=s("span",null," posts in ",-1),ce=s("option",{value:""}," All Categories ",-1),ue=["value"],he=s("span",null," status ",-1),fe=s("option",{value:""}," Open ",-1),ge=["value"],me={class:"lg:grow"},ve={class:"lg:float-right mt-4 lg:mt-0 lg:h-full"},pe={class:"relative lg:h-full"},be=s("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[s("svg",{class:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},[s("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})])],-1),we={class:"max-w-2xl mx-auto mb-8 mt-4 flex"},_e={class:"pr-6 inline-flex"},ye=["onClick"],ke={class:"h-1/2 w-full"},xe=s("polygon",{points:"10,0 20,10 0,10"},null,-1),Ce=[xe],Ve={class:"text-center h-1/2 w-full -mt-1"},ze=["onClick"],Ie={class:"font-semibold"},Me={class:"text-gray-500 overflow-hidden text-ellipsis"},Se=["onClick","onMouseenter","onMouseleave"],Ue=s("div",{class:"w-6"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"stroke-gray-400 w-5 h-5 mt-1 mr-6"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"})])],-1),$e={class:"w-10 text-right"};function Fe(e,t,c,u,h,r){var v,m,f,g,l,U,$,F,T,A,B,E,q,D,L;return d(),n("section",ee,[s("div",te,[(v=r.user)!=null&&v.email||(f=(m=r.user)==null?void 0:m.value)!=null&&f.email?(d(),n("div",{key:0,class:"h-12 w-12 bg-cover rounded-full bg-slate-500 mx-auto float-right",style:M("background-image: url("+(((g=r.user)==null?void 0:g.picture)||((U=(l=r.user)==null?void 0:l.value)==null?void 0:U.picture))+")")},null,4)):_("",!0),($=r.user)!=null&&$.email||(T=(F=r.user)==null?void 0:F.value)!=null&&T.email?(d(),n("div",se,p(((A=r.user)==null?void 0:A.name)||((E=(B=r.user)==null?void 0:B.value)==null?void 0:E.name)),1)):_("",!0),(q=r.user)!=null&&q.email||(L=(D=r.user)==null?void 0:D.value)!=null&&L.email?(d(),n("div",{key:2,class:"float-left mt-3 ml-4 cursor-pointer text-slate-700 hover:text-slate-900 font-bold",onClick:t[0]||(t[0]=(...o)=>r.logout&&r.logout(...o))}," Logout ")):(d(),n("div",{key:3,class:"float-left mt-3 ml-4 cursor-pointer text-slate-700 hover:text-slate-900 font-bold",onClick:t[1]||(t[1]=(...o)=>r.login&&r.login(...o))}," Login "))]),s("div",oe,[s("div",re,[le,b(s("select",{name:"",class:"cursor-pointer bg-transparent underline-offset-4 underline mx-1","onUpdate:modelValue":t[2]||(t[2]=o=>e.sort=o)},de,512),[[x,e.sort]]),ne,z(),b(s("select",{name:"",class:"cursor-pointer bg-transparent underline-offset-4 underline ml-1","onUpdate:modelValue":t[3]||(t[3]=o=>e.category=o)},[ce,(d(!0),n(C,null,V(e.categories,o=>(d(),n("option",{value:o._id},p(o.title),9,ue))),256))],512),[[x,e.category]]),he,b(s("select",{name:"",class:"cursor-pointer bg-transparent underline-offset-4 underline ml-1","onUpdate:modelValue":t[4]||(t[4]=o=>e.status=o)},[fe,(d(!0),n(C,null,V(e.statuses,o=>(d(),n("option",{value:o._id},p(o.title),9,ge))),256))],512),[[x,e.status]])]),s("div",me,[s("div",ve,[s("div",pe,[be,z(),b(s("input",{type:"search",id:"default-search",class:"lg:w-40 w-full h-10 lg:h-full max-w-full pl-10 pr-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search...",required:"","onUpdate:modelValue":t[5]||(t[5]=o=>e.term=o),onChange:t[6]||(t[6]=o=>r.refresh())},null,544),[[S,e.term]])])])])]),(d(!0),n(C,null,V(e.posts,o=>{var N,j,H,P,G;return d(),n("article",we,[s("div",_e,[s("div",{class:I(["cursor-pointer border w-11 h-12 rounded-lg",{"bg-emerald-50":o.votes.find(i=>{var a;return i.user_id===((a=r.user)==null?void 0:a._id)}),"border-emerald-400":o.votes.find(i=>{var a;return i.user_id===((a=r.user)==null?void 0:a._id)}),"hover:bg-emerald-100":o.votes.find(i=>{var a;return i.user_id===((a=r.user)==null?void 0:a._id)}),"hover:bg-slate-100":!o.votes.find(i=>{var a;return i.user_id===((a=r.user)==null?void 0:a._id)}),"border-emerald-400":o.votes.find(i=>{var a;return i.user_id===((a=r.user)==null?void 0:a._id)})}]),onClick:i=>r.vote(o)},[s("div",ke,[(d(),n("svg",{viewBox:"0 0 20 10",class:I(["pt-2 w-5 h-5 mx-auto",{"fill-emerald-400":o.votes.find(i=>{var a;return i.user_id===((a=r.user)==null?void 0:a._id)}),"fill-gray-400":!o.votes.find(i=>{var a;return i.user_id===((a=r.user)==null?void 0:a._id)})}])},Ce,2))]),s("div",Ve,p((N=o.votes)==null?void 0:N.length),1)],10,ye)]),s("div",{class:I(["hover:text-emerald-600 overflow-hidden text-ellipsis inline-flex flex-col grow pr-4 cursor-pointer",o.over?"text-emerald-600":""]),onClick:i=>e.$router.push("/feedback/"+o._id),style:{"max-height":"75px",height:"1806.03px"}},[s("h1",Ie,[z(p(o.title)+" ",1),(j=o==null?void 0:o.status)!=null&&j.length?(d(),n("button",{key:0,class:"ml-2 border rounded text-xs py-0.5 px-1",style:M(r.statusStyle(o))},p((P=(H=o==null?void 0:o.status)==null?void 0:H[0])==null?void 0:P.title),5)):_("",!0)]),s("p",Me,p(o.description),1)],10,ze),s("div",{class:"pl-4 inline-flex cursor-pointer",onClick:i=>e.$router.push("/feedback/"+o._id),onMouseenter:i=>o.over=!0,onMouseleave:i=>o.over=!1},[Ue,s("div",$e,p((G=o.comments)==null?void 0:G.length),1)],40,Se)])}),256))])}const Te=R(Q,[["render",Fe]]);const Ae={components:{VueNavigator:X,Footer:O,Meta:K,Topics:Te},inject:["io","user","login","test","yam"],data:()=>({category:"",title:"",description:"",screenshot:"",background:J,menu:!1,categories:[]}),mounted(){this.getCategories()},methods:{reset(){var e,t;this.category=((t=(e=this.categories)==null?void 0:e[0])==null?void 0:t._id)||"",this.title="",this.description="",this.screenshot=""},async getCategories(){var t,c;const e=await this.io.service("types/feedback-categories").find({query:{$sort:{order:1}}});this.categories=(e==null?void 0:e.data)||[],this.category||(this.category=((c=(t=this.categories)==null?void 0:t[0])==null?void 0:c._id)||"")},async post(){await this.login()?(await this.io.service("types/feedback").create({category_id:this.category,title:this.title,description:this.description,screenshot:this.screenshot}),this.reset(),alert("Thank you for posting feedback!"),this.$refs.topics.refresh("latest")):alert("Could not log in")},open(e){location.href=e},selectImage(){let e=document.createElement("input");e.type="file",e.multiple=!1,e.accept="image/*",e.onchange=async()=>{let c=Array.from(e.files)[0],u=new FileReader;u.readAsDataURL(c),u.onload=async h=>{this.screenshot=await this.resizeImage(h.target.result)},u.onerror=h=>{alert("Could not load file"),console.log(h)}},e.click()},resizeImage(e){return new Promise((t,c)=>{let u=1e3,h=1e3,r=document.createElement("canvas"),v=r.getContext("2d"),m=new Image;m.onload=()=>{let f=m.width,g=m.height;f>g?f>u&&(g*=u/f,f=u):g>h&&(f*=h/g,g=h),r.width=f,r.height=g,v.drawImage(m,0,0,f,g);let l=r.toDataURL("image/png",.7);t(l)},m.src=e})}}},w=e=>(Y("data-v-ed75142b"),e=e(),Z(),e),Be={class:"bg-white flex flex-col h-screen"},Ee={style:{width:"100%","min-height":"calc(100vh - 50px)"},class:"flex-1 relative overflow-auto"},qe={class:"relative h-full w-full flex"},De=w(()=>s("label",{class:"bg-white fixed z-40 md:hidden cursor-pointer inline-flex items-center p-2 mt-20 ml-3 text-sm text-slate-900 rounded-lg",for:"toggle"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6"},[s("path",{"fill-rule":"evenodd",d:"M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z","clip-rule":"evenodd"})])],-1)),Le={class:"bottom-0 bg-white md:w-96 md:p-7 md:shadow-md shadow-lg pt-24 border-r border-slate-200 peer-checked:px-7 peer-checked:pt-24 peer-checked:pb-7 duration-200 transition-all ease-in-out w-0 max-w-full z-30 peer-checked:w-80 absolute md:relative top-0 overflow-auto"},Ne=w(()=>s("h3",{class:"text-slate-700 mb-4 text-center whitespace-nowrap font-bold"}," Create a Post ",-1)),je=w(()=>s("p",{class:"text-slate-500 mx-auto text-center",style:{height:"123px"}}," Give feedback about the playground, UX and UI of Vue Play Studio. Explain how the experience can be improved. ",-1)),He=w(()=>s("h3",{class:"text-slate-500 mt-4 font-medium mb-4 whitespace-nowrap"}," Category ",-1)),Pe=["value"],Ge=w(()=>s("h3",{class:"text-slate-500 mt-4 font-medium mb-4 whitespace-nowrap"}," Title ",-1)),Re=w(()=>s("h3",{class:"text-slate-500 mt-4 font-medium mb-4 whitespace-nowrap"}," Description ",-1)),Xe={class:"h-16"},Oe=w(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto"},[s("path",{"fill-rule":"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z","clip-rule":"evenodd"})],-1)),Ke=[Oe];function We(e,t,c,u,h,r){const v=y("Meta"),m=y("VueNavigator"),f=y("Topics"),g=y("Footer");return d(),n("div",Be,[k(v,{description:"Give feedback about the playground, UX and UI of Vue Play Studio. Explain how the exp",title:"Feedback"}),k(m,{class:"absolute z-50"}),s("main",Ee,[s("div",qe,[De,b(s("input",{class:"peer hidden",type:"checkbox",id:"toggle","onUpdate:modelValue":t[0]||(t[0]=l=>e.menu=l)},null,512),[[W,e.menu]]),s("div",Le,[Ne,je,He,b(s("select",{name:"",class:"inline-block pl-2 py-2 w-full border-slate-300 border overflow-hidden border-solid rounded","onUpdate:modelValue":t[1]||(t[1]=l=>e.category=l)},[(d(!0),n(C,null,V(e.categories,l=>(d(),n("option",{value:l._id},p(l.title),9,Pe))),256))],512),[[x,e.category]]),Ge,b(s("input",{class:"inline-block pl-2 py-2 w-full border-slate-300 border overflow-hidden border-solid rounded",placeholder:"Short, descriptive title","onUpdate:modelValue":t[2]||(t[2]=l=>e.title=l)},null,512),[[S,e.title]]),Re,b(s("textarea",{"onUpdate:modelValue":t[3]||(t[3]=l=>e.description=l),rows:"",cols:"",class:"resize-none h-24 inline-block pl-2 py-2 w-full border-slate-300 border overflow-hidden border-solid rounded",placeholder:"Give helpful details. Add screenshot where relevant."},null,512),[[S,e.description]]),s("div",Xe,[s("button",{class:"w-10 h-10 border-slate-300 border overflow-hidden border-solid rounded mt-6 bg-slate-400 float-left",style:M([{"background-size":"cover"},"background-image: url("+(e.screenshot||e.background)+")"]),onClick:t[4]||(t[4]=(...l)=>r.selectImage&&r.selectImage(...l))},null,4),e.screenshot?(d(),n("button",{key:0,class:"ml-1 w-10 h-10 border-slate-300 border overflow-hidden border-solid rounded mt-6 bg-slate-100 p-0 float-left",style:{"background-size":"cover"},onClick:t[5]||(t[5]=l=>e.screenshot="")},Ke)):_("",!0),s("button",{class:"hover:bg-slate-800 text-xs px-3 bg-slate-700 text-slate-50 float-right h-10 border-slate-300 border overflow-hidden border-solid rounded mt-6",onClick:t[6]||(t[6]=(...l)=>r.post&&r.post(...l))}," POST FEEDBACK ")])]),k(f,{class:"m-auto grow h-full overflow-auto pt-16 lg:pt-7 relative",ref:"topics"},null,512),e.menu?(d(),n("div",{key:0,class:"absolute h-full w-full",onClick:t[7]||(t[7]=l=>e.menu=!1)})):_("",!0)])]),k(g)])}const et=R(Ae,[["render",We],["__scopeId","data-v-ed75142b"]]);export{et as default};
