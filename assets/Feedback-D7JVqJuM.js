import{V as R,F as X}from"./Footer-Dh_QI2-P.js";import{M as O}from"./Meta-BCm7FtrA.js";import{_ as G,o as a,c as d,d as s,n as M,f as w,t as b,j as p,m as x,e as _,F as C,h as V,p as U,i as z,a as y,v as K,r as k}from"./index-CJMNy9Uj.js";import{d as W}from"./defaultBase64Image-DIUyioUE.js";const Y={inject:["io","user","login","logout"],expose:["refresh"],data:()=>({term:"",categories:[],statuses:[],posts:[],category:"",status:"",sort:"latest"}),watch:{category(){this.refresh()},status(){this.refresh()},sort(){this.refresh()}},created(){this.refresh(),this.getCategories(),this.getStatuses()},methods:{statusStyle(t){var e,u,c,f,l,v;return{color:(u=(e=t==null?void 0:t.status)==null?void 0:e[0])==null?void 0:u.foregroundColor,backgroundColor:(f=(c=t==null?void 0:t.status)==null?void 0:c[0])==null?void 0:f.backgroundColor,borderColor:(v=(l=t==null?void 0:t.status)==null?void 0:l[0])==null?void 0:v.foregroundColor}},async refresh(t=this.sort){this.sort=t;let e={};this.term&&(e.title={$regex:this.term,$options:"i"}),this.sort==="top"&&(e.top=!0),this.category&&(e.category_id=this.category),this.status?e.status_id=this.status:e.status_id={$nin:["64d0cdd1cc7eda107dbe566c","64d9d79db7d6ebd3b66f153a"]},this.posts=await this.io.service("types/feedback").find({query:e})},async getCategories(){const t=await this.io.service("types/feedback-categories").find({query:{$sort:{order:1}}});this.categories=(t==null?void 0:t.data)||[]},async getStatuses(){const t=await this.io.service("types/feedback-status").find({query:{$sort:{order:1}}});this.statuses=(t==null?void 0:t.data)||[]},async myVote(t){var u;const e=await this.io.service("types/feedback-votes").find({query:{feedback_id:t._id,user_id:(u=this.user)==null?void 0:u._id}});return(e==null?void 0:e[0])||!1},async vote(t){if(await this.login()){const e=await this.myVote(t);e?await this.io.service("types/feedback-votes").remove(e._id):await this.io.service("types/feedback-votes").create({feedback_id:t._id}),await this.refreshVotes(t)}else alert("You have to be logged in to cast a vote")},async refreshVotes(t){t.votes=await this.io.service("types/feedback-votes").find({query:{feedback_id:t._id}})},async remove(t){await this.io.service("types/feedback").remove(t),await this.refresh(),alert("Removed!")}}},Z={class:"p-6 md:pt-6 pb-24"},J={class:"absolute left-0 right-0 top-0 h-16 p-2 bg-slate-50"},Q={key:1,class:"float-right mt-3 mr-4"},ee={class:"h-24 flex-col max-w-2xl mx-auto lg:h-9 lg:mb-8 flex text-lg lg:flex-row mt-16"},te={class:"text-sm mb:text-base font-light"},se=["value"],re=["value"],le={class:"lg:grow"},oe={class:"lg:float-right mt-4 lg:mt-0 lg:h-full"},ie={class:"relative lg:h-full"},ae={key:0,class:"max-w-2xl mx-auto mb-8 mt-4 flex"},de={class:"max-w-2xl mx-auto mb-8 mt-4 flex"},ne={class:"pr-6 inline-flex"},ue=["onClick"],ce={class:"h-1/2 w-full"},fe={class:"text-center h-1/2 w-full -mt-1"},me=["onClick"],ge={class:"font-semibold"},he={class:"text-gray-500 overflow-hidden text-ellipsis"},ve=["onClick","onMouseenter","onMouseleave"],be={class:"w-10 text-right"};function pe(t,e,u,c,f,l){var v,h,m,g,o,I,S,T,A,B,F,E,N,q,D;return a(),d("section",Z,[s("div",J,[(v=l.user)!=null&&v.email||(m=(h=l.user)==null?void 0:h.value)!=null&&m.email?(a(),d("div",{key:0,class:"h-12 w-12 bg-cover rounded-full bg-slate-500 mx-auto float-right",style:M("background-image: url("+(((g=l.user)==null?void 0:g.picture)||((I=(o=l.user)==null?void 0:o.value)==null?void 0:I.picture))+")")},null,4)):w("",!0),(S=l.user)!=null&&S.email||(A=(T=l.user)==null?void 0:T.value)!=null&&A.email?(a(),d("div",Q,b(((B=l.user)==null?void 0:B.name)||((E=(F=l.user)==null?void 0:F.value)==null?void 0:E.name)),1)):w("",!0),(N=l.user)!=null&&N.email||(D=(q=l.user)==null?void 0:q.value)!=null&&D.email?(a(),d("div",{key:2,class:"float-left mt-3 ml-4 cursor-pointer text-slate-700 hover:text-slate-900 font-bold",onClick:e[0]||(e[0]=(...r)=>l.logout&&l.logout(...r))}," Logout ")):(a(),d("div",{key:3,class:"float-left mt-3 ml-4 cursor-pointer text-slate-700 hover:text-slate-900 font-bold",onClick:e[1]||(e[1]=(...r)=>l.login&&l.login(...r))}," Login "))]),s("div",ee,[s("div",te,[e[10]||(e[10]=s("span",null," Showing ",-1)),p(s("select",{name:"",class:"cursor-pointer bg-transparent underline-offset-4 underline mx-1","onUpdate:modelValue":e[2]||(e[2]=r=>t.sort=r)},e[7]||(e[7]=[s("option",{value:"latest"}," Latest ",-1),s("option",{value:"top"}," Top ",-1)]),512),[[x,t.sort]]),e[11]||(e[11]=s("span",null," posts in ",-1)),e[12]||(e[12]=_()),p(s("select",{name:"",class:"cursor-pointer bg-transparent underline-offset-4 underline ml-1","onUpdate:modelValue":e[3]||(e[3]=r=>t.category=r)},[e[8]||(e[8]=s("option",{value:""}," All Categories ",-1)),(a(!0),d(C,null,V(t.categories,r=>(a(),d("option",{value:r._id},b(r.title),9,se))),256))],512),[[x,t.category]]),e[13]||(e[13]=s("span",null," status ",-1)),p(s("select",{name:"",class:"cursor-pointer bg-transparent underline-offset-4 underline ml-1","onUpdate:modelValue":e[4]||(e[4]=r=>t.status=r)},[e[9]||(e[9]=s("option",{value:""}," Open ",-1)),(a(!0),d(C,null,V(t.statuses,r=>(a(),d("option",{value:r._id},b(r.title),9,re))),256))],512),[[x,t.status]])]),s("div",le,[s("div",oe,[s("div",ie,[e[14]||(e[14]=s("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[s("svg",{class:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},[s("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})])],-1)),e[15]||(e[15]=_()),p(s("input",{type:"search",id:"default-search",class:"lg:w-40 w-full h-10 lg:h-full max-w-full pl-10 pr-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search...",required:"","onUpdate:modelValue":e[5]||(e[5]=r=>t.term=r),onChange:e[6]||(e[6]=r=>l.refresh())},null,544),[[U,t.term]])])])])]),t.posts.length?w("",!0):(a(),d("article",ae,e[16]||(e[16]=[s("p",{class:"text-gray-500 overflow-hidden text-ellipsis"}," No feedback with selected status in selected category... ",-1)]))),(a(!0),d(C,null,V(t.posts,r=>{var L,j,H,P,$;return a(),d("article",de,[s("div",ne,[s("div",{class:z(["cursor-pointer border w-11 h-12 rounded-lg",{"bg-emerald-50":r.votes.find(n=>{var i;return n.user_id===((i=l.user)==null?void 0:i._id)}),"border-emerald-400":r.votes.find(n=>{var i;return n.user_id===((i=l.user)==null?void 0:i._id)}),"hover:bg-emerald-100":r.votes.find(n=>{var i;return n.user_id===((i=l.user)==null?void 0:i._id)}),"hover:bg-slate-100":!r.votes.find(n=>{var i;return n.user_id===((i=l.user)==null?void 0:i._id)}),"border-emerald-400":r.votes.find(n=>{var i;return n.user_id===((i=l.user)==null?void 0:i._id)})}]),onClick:n=>l.vote(r)},[s("div",ce,[(a(),d("svg",{viewBox:"0 0 20 10",class:z(["pt-2 w-5 h-5 mx-auto",{"fill-emerald-400":r.votes.find(n=>{var i;return n.user_id===((i=l.user)==null?void 0:i._id)}),"fill-gray-400":!r.votes.find(n=>{var i;return n.user_id===((i=l.user)==null?void 0:i._id)})}])},e[17]||(e[17]=[s("polygon",{points:"10,0 20,10 0,10"},null,-1)]),2))]),s("div",fe,b((L=r.votes)==null?void 0:L.length),1)],10,ue)]),s("div",{class:z(["hover:text-emerald-600 overflow-hidden text-ellipsis inline-flex flex-col grow pr-4 cursor-pointer",r.over?"text-emerald-600":""]),onClick:n=>t.$router.push("/feedback/"+r._id),style:{"max-height":"75px",height:"1806.03px"}},[s("h1",ge,[_(b(r.title)+" ",1),(j=r==null?void 0:r.status)!=null&&j.length?(a(),d("button",{key:0,class:"ml-2 border rounded text-xs py-0.5 px-1",style:M(l.statusStyle(r))},b((P=(H=r==null?void 0:r.status)==null?void 0:H[0])==null?void 0:P.title),5)):w("",!0)]),s("p",he,b(r.description),1)],10,me),s("div",{class:"pl-4 inline-flex cursor-pointer",onClick:n=>t.$router.push("/feedback/"+r._id),onMouseenter:n=>r.over=!0,onMouseleave:n=>r.over=!1},[e[18]||(e[18]=s("div",{class:"w-6"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"stroke-gray-400 w-5 h-5 mt-1 mr-6"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"})])],-1)),s("div",be,b(($=r.comments)==null?void 0:$.length),1)],40,ve)])}),256))])}const we=G(Y,[["render",pe]]),ye={components:{VueNavigator:R,Footer:X,Meta:O,Topics:we},inject:["io","user","login","test","yam"],data:()=>({category:"",title:"",description:"",screenshot:"",background:W,menu:!1,categories:[]}),mounted(){this.getCategories()},methods:{reset(){var t,e;this.category=((e=(t=this.categories)==null?void 0:t[0])==null?void 0:e._id)||"",this.title="",this.description="",this.screenshot=""},async getCategories(){var e,u;const t=await this.io.service("types/feedback-categories").find({query:{$sort:{order:1}}});this.categories=(t==null?void 0:t.data)||[],this.category||(this.category=((u=(e=this.categories)==null?void 0:e[0])==null?void 0:u._id)||"")},async post(){await this.login()?(await this.io.service("types/feedback").create({category_id:this.category,title:this.title,description:this.description,screenshot:this.screenshot}),this.reset(),alert("Thank you for posting feedback!"),this.$refs.topics.refresh("latest")):alert("Could not log in")},open(t){location.href=t},selectImage(){let t=document.createElement("input");t.type="file",t.multiple=!1,t.accept="image/*",t.onchange=async()=>{let u=Array.from(t.files)[0],c=new FileReader;c.readAsDataURL(u),c.onload=async f=>{this.screenshot=await this.resizeImage(f.target.result)},c.onerror=f=>{alert("Could not load file"),console.log(f)}},t.click()},resizeImage(t){return new Promise((e,u)=>{let c=1e3,f=1e3,l=document.createElement("canvas"),v=l.getContext("2d"),h=new Image;h.onload=()=>{let m=h.width,g=h.height;m>g?m>c&&(g*=c/m,m=c):g>f&&(m*=f/g,g=f),l.width=m,l.height=g,v.drawImage(h,0,0,m,g);let o=l.toDataURL("image/png",.7);e(o)},h.src=t})}}},ke={class:"bg-white flex flex-col h-screen"},xe={style:{width:"100%","min-height":"calc(100vh - 50px)"},class:"flex-1 relative overflow-auto"},Ce={class:"relative h-full w-full flex"},Ve={class:"bottom-0 bg-white md:w-96 md:p-7 md:shadow-md shadow-lg pt-24 border-r border-slate-200 peer-checked:px-7 peer-checked:pt-24 peer-checked:pb-7 duration-200 transition-all ease-in-out w-0 max-w-full z-30 peer-checked:w-80 absolute md:relative top-0 overflow-auto"},_e=["value"],ze={class:"h-16"};function Me(t,e,u,c,f,l){const v=k("Meta"),h=k("VueNavigator"),m=k("Topics"),g=k("Footer");return a(),d("div",ke,[y(v,{description:"Give feedback about the playground, UX and UI of Vue Play Studio. Explain how the exp",title:"Feedback"}),y(h,{class:"absolute z-50"}),s("main",xe,[s("div",Ce,[e[14]||(e[14]=s("label",{class:"bg-white fixed z-40 md:hidden cursor-pointer inline-flex items-center p-2 mt-20 ml-3 text-sm text-slate-900 rounded-lg",for:"toggle"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6"},[s("path",{"fill-rule":"evenodd",d:"M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z","clip-rule":"evenodd"})])],-1)),p(s("input",{class:"peer hidden",type:"checkbox",id:"toggle","onUpdate:modelValue":e[0]||(e[0]=o=>t.menu=o)},null,512),[[K,t.menu]]),s("div",Ve,[e[9]||(e[9]=s("h3",{class:"text-slate-700 mb-4 text-center whitespace-nowrap font-bold"}," Create a Post ",-1)),e[10]||(e[10]=s("p",{class:"text-slate-500 mx-auto text-center",style:{height:"123px"}}," Give feedback about the playground, UX and UI of Vue Play Studio. Explain how the experience can be improved. ",-1)),e[11]||(e[11]=s("h3",{class:"text-slate-500 mt-4 font-medium mb-4 whitespace-nowrap"}," Category ",-1)),p(s("select",{name:"",class:"inline-block pl-2 py-2 w-full border-slate-300 border overflow-hidden border-solid rounded","onUpdate:modelValue":e[1]||(e[1]=o=>t.category=o)},[(a(!0),d(C,null,V(t.categories,o=>(a(),d("option",{value:o._id},b(o.title),9,_e))),256))],512),[[x,t.category]]),e[12]||(e[12]=s("h3",{class:"text-slate-500 mt-4 font-medium mb-4 whitespace-nowrap"}," Title ",-1)),p(s("input",{class:"inline-block pl-2 py-2 w-full border-slate-300 border overflow-hidden border-solid rounded",placeholder:"Short, descriptive title","onUpdate:modelValue":e[2]||(e[2]=o=>t.title=o)},null,512),[[U,t.title]]),e[13]||(e[13]=s("h3",{class:"text-slate-500 mt-4 font-medium mb-4 whitespace-nowrap"}," Description ",-1)),p(s("textarea",{"onUpdate:modelValue":e[3]||(e[3]=o=>t.description=o),rows:"",cols:"",class:"resize-none h-24 inline-block pl-2 py-2 w-full border-slate-300 border overflow-hidden border-solid rounded",placeholder:"Give helpful details. Add screenshot where relevant."},null,512),[[U,t.description]]),s("div",ze,[s("button",{class:"w-10 h-10 border-slate-300 border overflow-hidden border-solid rounded mt-6 bg-slate-400 float-left",style:M([{"background-size":"cover"},"background-image: url("+(t.screenshot||t.background)+")"]),onClick:e[4]||(e[4]=(...o)=>l.selectImage&&l.selectImage(...o))},null,4),t.screenshot?(a(),d("button",{key:0,class:"ml-1 w-10 h-10 border-slate-300 border overflow-hidden border-solid rounded mt-6 bg-slate-100 p-0 float-left",style:{"background-size":"cover"},onClick:e[5]||(e[5]=o=>t.screenshot="")},e[8]||(e[8]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto"},[s("path",{"fill-rule":"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z","clip-rule":"evenodd"})],-1)]))):w("",!0),s("button",{class:"hover:bg-slate-800 text-xs px-3 bg-slate-700 text-slate-50 float-right h-10 border-slate-300 border overflow-hidden border-solid rounded mt-6",onClick:e[6]||(e[6]=(...o)=>l.post&&l.post(...o))}," POST FEEDBACK ")])]),y(m,{class:"bg-white m-auto grow h-full overflow-auto pt-16 lg:pt-7 relative",ref:"topics"},null,512),t.menu?(a(),d("div",{key:0,class:"absolute h-full w-full",onClick:e[7]||(e[7]=o=>t.menu=!1)})):w("",!0)])]),y(g)])}const Ae=G(ye,[["render",Me],["__scopeId","data-v-21ba6d30"]]);export{Ae as default};