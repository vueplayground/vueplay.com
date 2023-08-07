import{V as J,F as Q}from"./Footer-a89d6aee.js";import{M as ee}from"./Meta-0565d56b.js";import{_ as Z,o as d,c as n,b as s,h as C,g as _,t as v,w as p,i as V,F as z,j as I,d as Y,k as M,n as x,r as y,a as k,v as te,p as se,f as oe}from"./index-e4116de3.js";import{d as re}from"./defaultBase64Image-ab365e89.js";const le={inject:["io","user","login","logout"],expose:["refresh"],data:()=>({term:"",categories:[],posts:[],category:"",sort:"latest"}),watch:{category(){this.refresh()},sort(){this.refresh()}},created(){this.refresh(),this.getCategories()},methods:{async refresh(e=this.sort){this.sort=e;let t={};this.term&&(t.title={$regex:this.term,$options:"i"}),this.sort==="top"&&(t.top=!0),this.category&&(t.category_id=this.category),this.posts=await this.io.service("types/feedback").find({query:t}),console.log(this.posts)},async getCategories(){const e=await this.io.service("types/feedback-categories").find({query:{$sort:{order:1}}});this.categories=(e==null?void 0:e.data)||[]},async myVote(e){var h;const t=await this.io.service("types/feedback-votes").find({query:{feedback_id:e._id,user_id:(h=this.user)==null?void 0:h._id}});return(t==null?void 0:t[0])||!1},async vote(e){if(await this.login()){const t=await this.myVote(e);t?await this.io.service("types/feedback-votes").remove(t._id):await this.io.service("types/feedback-votes").create({feedback_id:e._id}),await this.refreshVotes(e)}else alert("You have to be logged in to cast a vote")},async refreshVotes(e){e.votes=await this.io.service("types/feedback-votes").find({query:{feedback_id:e._id}})},async remove(e){await this.io.service("types/feedback").remove(e),await this.refresh(),alert("Removed!")}}},ie={class:"p-6 md:pt-6 pb-24"},ae={class:"absolute left-0 right-0 top-0 h-16 p-2 bg-slate-50"},de={key:1,class:"float-right mt-3 mr-4"},ne={class:"h-24 flex-col max-w-2xl mx-auto lg:h-9 lg:mb-8 flex text-lg lg:flex-row mt-16"},ce={class:"text-sm mb:text-base font-light"},ue=s("span",null," Showing ",-1),he=s("option",{value:"latest"}," Latest ",-1),ge=s("option",{value:"top"}," Top ",-1),fe=[he,ge],me=s("span",null," posts in ",-1),ve=s("option",{value:""}," All Categories ",-1),pe=["value"],be={class:"lg:grow"},we={class:"lg:float-right mt-4 lg:mt-0 lg:h-full"},_e={class:"relative lg:h-full"},ye=s("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[s("svg",{class:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},[s("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})])],-1),ke={class:"max-w-2xl mx-auto mb-8 mt-4 flex"},xe={class:"pr-6 inline-flex"},Ce=["onClick"],Ve={class:"h-1/2 w-full"},ze=s("polygon",{points:"10,0 20,10 0,10"},null,-1),Ie=[ze],Me={class:"text-center h-1/2 w-full -mt-1"},Ue=["onClick"],Se={class:"font-semibold"},$e={class:"text-gray-500 overflow-hidden text-ellipsis"},Fe=["onClick","onMouseenter","onMouseleave"],Te=s("div",{class:"w-6"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"stroke-gray-400 w-5 h-5 mt-1 mr-6"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"})])],-1),Ae={class:"w-10 text-right"};function Be(e,t,h,f,m,r){var w,g,c,u,l,U,S,$,F,T,A,B,E,D,L;return d(),n("section",ie,[s("div",ae,[(w=r.user)!=null&&w.email||(c=(g=r.user)==null?void 0:g.value)!=null&&c.email?(d(),n("div",{key:0,class:"h-12 w-12 bg-cover rounded-full bg-slate-500 mx-auto float-right",style:C("background-image: url("+(((u=r.user)==null?void 0:u.picture)||((U=(l=r.user)==null?void 0:l.value)==null?void 0:U.picture))+")")},null,4)):_("",!0),(S=r.user)!=null&&S.email||(F=($=r.user)==null?void 0:$.value)!=null&&F.email?(d(),n("div",de,v(((T=r.user)==null?void 0:T.name)||((B=(A=r.user)==null?void 0:A.value)==null?void 0:B.name)),1)):_("",!0),(E=r.user)!=null&&E.email||(L=(D=r.user)==null?void 0:D.value)!=null&&L.email?(d(),n("div",{key:2,class:"float-left mt-3 ml-4 cursor-pointer text-slate-700 hover:text-slate-900 font-bold",onClick:t[0]||(t[0]=(...o)=>r.logout&&r.logout(...o))}," Logout ")):(d(),n("div",{key:3,class:"float-left mt-3 ml-4 cursor-pointer text-slate-700 hover:text-slate-900 font-bold",onClick:t[1]||(t[1]=(...o)=>r.login&&r.login(...o))}," Login "))]),s("div",ne,[s("div",ce,[ue,p(s("select",{name:"",class:"cursor-pointer bg-transparent underline-offset-4 underline mx-1","onUpdate:modelValue":t[2]||(t[2]=o=>e.sort=o)},fe,512),[[V,e.sort]]),me,p(s("select",{name:"",class:"cursor-pointer bg-transparent underline-offset-4 underline ml-1","onUpdate:modelValue":t[3]||(t[3]=o=>e.category=o)},[ve,(d(!0),n(z,null,I(e.categories,o=>(d(),n("option",{value:o._id},v(o.title),9,pe))),256))],512),[[V,e.category]])]),s("div",be,[s("div",we,[s("div",_e,[ye,Y(),p(s("input",{type:"search",id:"default-search",class:"w-full h-10 lg:w-52 lg:h-full max-w-full pl-10 pr-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search...",required:"","onUpdate:modelValue":t[4]||(t[4]=o=>e.term=o),onChange:t[5]||(t[5]=o=>r.refresh())},null,544),[[M,e.term]])])])])]),(d(!0),n(z,null,I(e.posts,o=>{var N,j,q,H,P,G,R,X,K,O,W;return d(),n("article",ke,[s("div",xe,[s("div",{class:x(["cursor-pointer border w-11 h-12 rounded-lg",{"bg-emerald-50":o.votes.find(a=>{var i;return a.user_id===((i=r.user)==null?void 0:i._id)}),"border-emerald-400":o.votes.find(a=>{var i;return a.user_id===((i=r.user)==null?void 0:i._id)}),"hover:bg-emerald-100":o.votes.find(a=>{var i;return a.user_id===((i=r.user)==null?void 0:i._id)}),"hover:bg-slate-100":!o.votes.find(a=>{var i;return a.user_id===((i=r.user)==null?void 0:i._id)}),"border-emerald-400":o.votes.find(a=>{var i;return a.user_id===((i=r.user)==null?void 0:i._id)})}]),onClick:a=>r.vote(o)},[s("div",Ve,[(d(),n("svg",{viewBox:"0 0 20 10",class:x(["pt-2 w-5 h-5 mx-auto",{"fill-emerald-400":o.votes.find(a=>{var i;return a.user_id===((i=r.user)==null?void 0:i._id)}),"fill-gray-400":!o.votes.find(a=>{var i;return a.user_id===((i=r.user)==null?void 0:i._id)})}])},Ie,2))]),s("div",Me,v((N=o.votes)==null?void 0:N.length),1)],10,Ce)]),s("div",{class:x(["hover:text-emerald-600 overflow-hidden text-ellipsis inline-flex flex-col grow pr-4 cursor-pointer",o.over?"text-emerald-600":""]),onClick:a=>e.$router.push("/feedback/"+o._id),style:{"max-height":"75px",height:"1806.03px"}},[s("h1",Se,[Y(v(o.title)+" ",1),(j=o==null?void 0:o.status)!=null&&j.length?(d(),n("button",{key:0,class:"ml-2 border rounded text-xs p-0.5",style:C({color:(H=(q=o==null?void 0:o.status)==null?void 0:q[0])==null?void 0:H.foregroundColor,backgroundColor:(G=(P=o==null?void 0:o.status)==null?void 0:P[0])==null?void 0:G.backgroundColor,borderColor:(X=(R=o==null?void 0:o.status)==null?void 0:R[0])==null?void 0:X.foregroundColor})},v((O=(K=o==null?void 0:o.status)==null?void 0:K[0])==null?void 0:O.title),5)):_("",!0)]),s("p",$e,v(o.description),1)],10,Ue),s("div",{class:"pl-4 inline-flex cursor-pointer",onClick:a=>e.$router.push("/feedback/"+o._id),onMouseenter:a=>o.over=!0,onMouseleave:a=>o.over=!1},[Te,s("div",Ae,v((W=o.comments)==null?void 0:W.length),1)],40,Fe)])}),256))])}const Ee=Z(le,[["render",Be]]);const De={components:{VueNavigator:J,Footer:Q,Meta:ee,Topics:Ee},inject:["io","user","login","test","yam"],data:()=>({category:"",title:"",description:"",screenshot:"",background:re,menu:!1,categories:[]}),mounted(){this.getCategories()},methods:{reset(){var e,t;this.category=((t=(e=this.categories)==null?void 0:e[0])==null?void 0:t._id)||"",this.title="",this.description="",this.screenshot=""},async getCategories(){var t,h;const e=await this.io.service("types/feedback-categories").find({query:{$sort:{order:1}}});this.categories=(e==null?void 0:e.data)||[],this.category||(this.category=((h=(t=this.categories)==null?void 0:t[0])==null?void 0:h._id)||"")},async post(){await this.login()?(await this.io.service("types/feedback").create({category_id:this.category,title:this.title,description:this.description,screenshot:this.screenshot}),this.reset(),alert("Thank you for posting feedback!"),this.$refs.topics.refresh("latest")):alert("Could not log in")},open(e){location.href=e},selectImage(){let e=document.createElement("input");e.type="file",e.multiple=!1,e.accept="image/*",e.onchange=async()=>{let h=Array.from(e.files)[0],f=new FileReader;f.readAsDataURL(h),f.onload=async m=>{this.screenshot=await this.resizeImage(m.target.result)},f.onerror=m=>{alert("Could not load file"),console.log(m)}},e.click()},resizeImage(e){return new Promise((t,h)=>{let f=1e3,m=1e3,r=document.createElement("canvas"),w=r.getContext("2d"),g=new Image;g.onload=()=>{let c=g.width,u=g.height;c>u?c>f&&(u*=f/c,c=f):u>m&&(c*=m/u,u=m),r.width=c,r.height=u,w.drawImage(g,0,0,c,u);let l=r.toDataURL("image/png",.7);t(l)},g.src=e})}}},b=e=>(se("data-v-ed75142b"),e=e(),oe(),e),Le={class:"bg-white flex flex-col h-screen"},Ne={style:{width:"100%","min-height":"calc(100vh - 50px)"},class:"flex-1 relative overflow-auto"},je={class:"relative h-full w-full flex"},qe=b(()=>s("label",{class:"bg-white fixed z-40 md:hidden cursor-pointer inline-flex items-center p-2 mt-20 ml-3 text-sm text-slate-900 rounded-lg",for:"toggle"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6"},[s("path",{"fill-rule":"evenodd",d:"M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z","clip-rule":"evenodd"})])],-1)),He={class:"bottom-0 bg-white md:w-96 md:p-7 md:shadow-md shadow-lg pt-24 border-r border-slate-200 peer-checked:px-7 peer-checked:pt-24 peer-checked:pb-7 duration-200 transition-all ease-in-out w-0 max-w-full z-30 peer-checked:w-80 absolute md:relative top-0 overflow-auto"},Pe=b(()=>s("h3",{class:"text-slate-700 mb-4 text-center whitespace-nowrap font-bold"}," Create a Post ",-1)),Ge=b(()=>s("p",{class:"text-slate-500 mx-auto text-center",style:{height:"123px"}}," Give feedback about the playground, UX and UI of Vue Play Studio. Explain how the experience can be improved. ",-1)),Re=b(()=>s("h3",{class:"text-slate-500 mt-4 font-medium mb-4 whitespace-nowrap"}," Category ",-1)),Xe=["value"],Ke=b(()=>s("h3",{class:"text-slate-500 mt-4 font-medium mb-4 whitespace-nowrap"}," Title ",-1)),Oe=b(()=>s("h3",{class:"text-slate-500 mt-4 font-medium mb-4 whitespace-nowrap"}," Description ",-1)),We={class:"h-16"},Ye=b(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto"},[s("path",{"fill-rule":"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z","clip-rule":"evenodd"})],-1)),Ze=[Ye];function Je(e,t,h,f,m,r){const w=y("Meta"),g=y("VueNavigator"),c=y("Topics"),u=y("Footer");return d(),n("div",Le,[k(w,{description:"Give feedback about the playground, UX and UI of Vue Play Studio. Explain how the exp",title:"Feedback"}),k(g,{class:"absolute z-50"}),s("main",Ne,[s("div",je,[qe,p(s("input",{class:"peer hidden",type:"checkbox",id:"toggle","onUpdate:modelValue":t[0]||(t[0]=l=>e.menu=l)},null,512),[[te,e.menu]]),s("div",He,[Pe,Ge,Re,p(s("select",{name:"",class:"inline-block pl-2 py-2 w-full border-slate-300 border overflow-hidden border-solid rounded","onUpdate:modelValue":t[1]||(t[1]=l=>e.category=l)},[(d(!0),n(z,null,I(e.categories,l=>(d(),n("option",{value:l._id},v(l.title),9,Xe))),256))],512),[[V,e.category]]),Ke,p(s("input",{class:"inline-block pl-2 py-2 w-full border-slate-300 border overflow-hidden border-solid rounded",placeholder:"Short, descriptive title","onUpdate:modelValue":t[2]||(t[2]=l=>e.title=l)},null,512),[[M,e.title]]),Oe,p(s("textarea",{"onUpdate:modelValue":t[3]||(t[3]=l=>e.description=l),rows:"",cols:"",class:"resize-none h-24 inline-block pl-2 py-2 w-full border-slate-300 border overflow-hidden border-solid rounded",placeholder:"Give helpful details. Add screenshot where relevant."},null,512),[[M,e.description]]),s("div",We,[s("button",{class:"w-10 h-10 border-slate-300 border overflow-hidden border-solid rounded mt-6 bg-slate-400 float-left",style:C([{"background-size":"cover"},"background-image: url("+(e.screenshot||e.background)+")"]),onClick:t[4]||(t[4]=(...l)=>r.selectImage&&r.selectImage(...l))},null,4),e.screenshot?(d(),n("button",{key:0,class:"ml-1 w-10 h-10 border-slate-300 border overflow-hidden border-solid rounded mt-6 bg-slate-100 p-0 float-left",style:{"background-size":"cover"},onClick:t[5]||(t[5]=l=>e.screenshot="")},Ze)):_("",!0),s("button",{class:"hover:bg-slate-800 text-xs px-3 bg-slate-700 text-slate-50 float-right h-10 border-slate-300 border overflow-hidden border-solid rounded mt-6",onClick:t[6]||(t[6]=(...l)=>r.post&&r.post(...l))}," POST FEEDBACK ")])]),k(c,{class:"m-auto grow h-full overflow-auto pt-16 lg:pt-7 relative",ref:"topics"},null,512),e.menu?(d(),n("div",{key:0,class:"absolute h-full w-full",onClick:t[7]||(t[7]=l=>e.menu=!1)})):_("",!0)])]),k(u)])}const ot=Z(De,[["render",Je],["__scopeId","data-v-ed75142b"]]);export{ot as default};
