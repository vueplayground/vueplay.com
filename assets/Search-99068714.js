import{V as Y,F as Z}from"./Footer-df87f5a2.js";import{M as J}from"./Meta-c3330c4e.js";import{_ as X,o as n,c as d,b as o,h as W,g as x,t as f,w as p,i as k,F as C,j as V,d as K,k as M,n as G,r as b,a as y,v as Q,p as ee,f as te}from"./index-47e8e768.js";import{d as oe}from"./defaultBase64Image-ab365e89.js";const se={inject:["io","user","login","logout"],expose:["refresh"],data:()=>({term:"",categories:[],posts:[],category:"",sort:"latest"}),watch:{category(){this.refresh()},sort(){this.refresh()}},created(){this.refresh(),this.getCategories()},methods:{async refresh(e=this.sort){this.sort=e;let t={public:!0};this.term&&(t.title={$regex:this.term,$options:"i"}),this.sort==="top"&&(t.top=!0),this.category&&(t.category_id=this.category),this.posts=await this.io.service("types/applications").find({query:t}),console.log("posts",this.posts)},async getCategories(){const e=await this.io.service("types/categories").find({query:{$sort:{order:1}}});this.categories=(e==null?void 0:e.data)||[]},async myVote(e){var h;const t=await this.io.service("types/votes").find({query:{application_id:e._id,user_id:(h=this.user)==null?void 0:h._id}});return(t==null?void 0:t[0])||!1},async vote(e){if(await this.login()){const t=await this.myVote(e);t?await this.io.service("types/votes").remove(t._id):await this.io.service("types/votes").create({application_id:e._id}),await this.refreshVotes(e)}else alert("You have to be logged in to cast a vote")},async refreshVotes(e){e.votes=await this.io.service("types/votes").find({query:{application_id:e._id}})},async remove(e){await this.io.service("types/applications").remove(e),await this.refresh(),alert("Removed!")}}},le={class:"p-6 md:pt-6 pb-24"},re={class:"absolute left-0 right-0 top-0 h-16 p-2 bg-slate-50"},ie={key:1,class:"float-right mt-3 mr-4"},ae={class:"h-24 flex-col max-w-2xl mx-auto lg:h-9 lg:mb-8 flex text-lg lg:flex-row mt-16"},ne={class:"text-sm mb:text-base font-light"},de=o("span",null," Showing ",-1),ce=o("option",{value:"latest"}," Latest ",-1),ue=o("option",{value:"top"}," Top ",-1),he=[ce,ue],me=o("span",null," components in ",-1),ge=o("option",{value:""}," All Categories ",-1),ve=["value"],fe={class:"lg:grow"},pe={class:"lg:float-right mt-4 lg:mt-0 lg:h-full"},we={class:"relative lg:h-full"},_e=o("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[o("svg",{class:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},[o("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})])],-1),be={class:"max-w-2xl mx-auto mb-8 mt-4 flex"},ye={class:"pr-6 inline-flex"},xe=["onClick"],ke={class:"h-1/2 w-full"},Ce=o("polygon",{points:"10,0 20,10 0,10"},null,-1),Ve=[Ce],Me={class:"text-center h-1/2 w-full -mt-1"},ze=["onClick"],Ie={class:"font-semibold"},Se={class:"text-gray-500 overflow-hidden text-ellipsis"},$e=["onClick","onMouseenter","onMouseleave"],Ae=o("div",{class:"w-6"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"stroke-gray-400 w-5 h-5 mt-1 mr-6"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"})])],-1),Be={class:"w-10 text-right"};function Te(e,t,h,g,v,l){var _,m,c,u,r,z,I,S,$,A,B,T,N,U,L;return n(),d("section",le,[o("div",re,[(_=l.user)!=null&&_.email||(c=(m=l.user)==null?void 0:m.value)!=null&&c.email?(n(),d("div",{key:0,class:"h-12 w-12 bg-cover rounded-full bg-slate-500 mx-auto float-right",style:W("background-image: url("+(((u=l.user)==null?void 0:u.picture)||((z=(r=l.user)==null?void 0:r.value)==null?void 0:z.picture))+")")},null,4)):x("",!0),(I=l.user)!=null&&I.email||($=(S=l.user)==null?void 0:S.value)!=null&&$.email?(n(),d("div",ie,f(((A=l.user)==null?void 0:A.name)||((T=(B=l.user)==null?void 0:B.value)==null?void 0:T.name)),1)):x("",!0),(N=l.user)!=null&&N.email||(L=(U=l.user)==null?void 0:U.value)!=null&&L.email?(n(),d("div",{key:2,class:"float-left mt-3 ml-4 cursor-pointer text-slate-700 hover:text-slate-900 font-bold",onClick:t[0]||(t[0]=(...s)=>l.logout&&l.logout(...s))}," Logout ")):(n(),d("div",{key:3,class:"float-left mt-3 ml-4 cursor-pointer text-slate-700 hover:text-slate-900 font-bold",onClick:t[1]||(t[1]=(...s)=>l.login&&l.login(...s))}," Login "))]),o("div",ae,[o("div",ne,[de,p(o("select",{name:"",class:"cursor-pointer bg-transparent underline-offset-4 underline mx-1","onUpdate:modelValue":t[2]||(t[2]=s=>e.sort=s)},he,512),[[k,e.sort]]),me,p(o("select",{name:"",class:"cursor-pointer bg-transparent underline-offset-4 underline ml-1","onUpdate:modelValue":t[3]||(t[3]=s=>e.category=s)},[ge,(n(!0),d(C,null,V(e.categories,s=>(n(),d("option",{value:s._id},f(s.title),9,ve))),256))],512),[[k,e.category]])]),o("div",fe,[o("div",pe,[o("div",we,[_e,K(),p(o("input",{type:"search",id:"default-search",class:"w-full h-10 lg:w-52 lg:h-full max-w-full pl-10 pr-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search...",required:"","onUpdate:modelValue":t[4]||(t[4]=s=>e.term=s),onChange:t[5]||(t[5]=s=>l.refresh())},null,544),[[M,e.term]])])])])]),(n(!0),d(C,null,V(e.posts.data,s=>{var D,F,P,j,q,E,H,R,O;return n(),d("article",be,[o("div",ye,[o("div",{class:G(["cursor-pointer border w-11 h-12 rounded-lg",{"bg-emerald-50":(D=s==null?void 0:s.votes)==null?void 0:D.find(a=>{var i;return a.user_id===((i=l.user)==null?void 0:i._id)}),"border-emerald-400":(F=s==null?void 0:s.votes)==null?void 0:F.find(a=>{var i;return a.user_id===((i=l.user)==null?void 0:i._id)}),"hover:bg-emerald-100":(P=s==null?void 0:s.votes)==null?void 0:P.find(a=>{var i;return a.user_id===((i=l.user)==null?void 0:i._id)}),"hover:bg-slate-100":!((j=s==null?void 0:s.votes)!=null&&j.find(a=>{var i;return a.user_id===((i=l.user)==null?void 0:i._id)})),"border-emerald-400":(q=s==null?void 0:s.votes)==null?void 0:q.find(a=>{var i;return a.user_id===((i=l.user)==null?void 0:i._id)})}]),onClick:a=>l.vote(s)},[o("div",ke,[(n(),d("svg",{viewBox:"0 0 20 10",class:G(["pt-2 w-5 h-5 mx-auto",{"fill-emerald-400":(E=s==null?void 0:s.votes)==null?void 0:E.find(a=>{var i;return a.user_id===((i=l.user)==null?void 0:i._id)}),"fill-gray-400":!((H=s==null?void 0:s.votes)!=null&&H.find(a=>{var i;return a.user_id===((i=l.user)==null?void 0:i._id)}))}])},Ve,2))]),o("div",Me,f((R=s==null?void 0:s.votes)==null?void 0:R.length),1)],10,xe)]),o("div",{class:"hover:text-emerald-600 overflow-hidden text-ellipsis inline-flex flex-col grow pr-4 cursor-pointer",onClick:a=>e.$router.push("/search/"+s._id),"post.over":"",style:{"max-height":"75px",height:"1806.03px"}},[o("h1",Ie,f(s.title)+" "+f(s.public?"":"(PRIVATE)"),1),o("p",Se,f(s.description),1)],8,ze),o("div",{class:"pl-4 inline-flex cursor-pointer",onClick:a=>e.$router.push("/search/"+s._id),onMouseenter:a=>s.over=!0,onMouseleave:a=>s.over=!1},[Ae,o("div",Be,f((O=s.comments)==null?void 0:O.length),1)],40,$e)])}),256))])}const Ne=X(se,[["render",Te]]);const Ue={components:{VueNavigator:Y,Footer:Z,Meta:J,Components:Ne},inject:["io","user","login","test","yam"],data:()=>({category:"",title:"",description:"",icon:"",background:oe,menu:!1,categories:[]}),mounted(){this.getCategories()},methods:{reset(){var e,t;this.category=((t=(e=this.categories)==null?void 0:e[0])==null?void 0:t._id)||"",this.title="",this.description="",this.icon=""},async getCategories(){var t,h;const e=await this.io.service("types/categories").find({query:{$sort:{order:1}}});this.categories=(e==null?void 0:e.data)||[],this.category||(this.category=((h=(t=this.categories)==null?void 0:t[0])==null?void 0:h._id)||"")},async post(){await this.login()?(await this.io.service("types/applications").create({category_id:this.category,title:this.title,description:this.description,icon:this.icon}),this.reset(),alert("Thank you for posting a component!"),this.$refs.components.refresh("latest")):alert("Could not log in")},open(e){location.href=e},selectImage(){let e=document.createElement("input");e.type="file",e.multiple=!1,e.accept="image/*",e.onchange=async()=>{let h=Array.from(e.files)[0],g=new FileReader;g.readAsDataURL(h),g.onload=async v=>{this.icon=await this.resizeImage(v.target.result)},g.onerror=v=>{alert("Could not load file"),console.log(v)}},e.click()},resizeImage(e){return new Promise((t,h)=>{let g=1e3,v=1e3,l=document.createElement("canvas"),_=l.getContext("2d"),m=new Image;m.onload=()=>{let c=m.width,u=m.height;c>u?c>g&&(u*=g/c,c=g):u>v&&(c*=v/u,u=v),l.width=c,l.height=u,_.drawImage(m,0,0,c,u);let r=l.toDataURL("image/png",.7);t(r)},m.src=e})}}},w=e=>(ee("data-v-362060aa"),e=e(),te(),e),Le={class:"bg-white flex flex-col h-screen"},De={style:{width:"100%","min-height":"calc(100vh - 50px)"},class:"flex-1 relative overflow-auto"},Fe={class:"relative h-full w-full flex"},Pe=w(()=>o("label",{class:"bg-white fixed z-40 md:hidden cursor-pointer inline-flex items-center p-2 mt-20 ml-3 text-sm text-slate-900 rounded-lg",for:"toggle"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6"},[o("path",{"fill-rule":"evenodd",d:"M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z","clip-rule":"evenodd"})])],-1)),je={class:"bottom-0 bg-white md:w-96 md:p-7 md:shadow-md shadow-lg pt-24 border-r border-slate-200 peer-checked:px-7 peer-checked:pt-24 peer-checked:pb-7 duration-200 transition-all ease-in-out w-0 max-w-full z-30 peer-checked:w-80 absolute md:relative top-0 overflow-auto"},qe=w(()=>o("h3",{class:"text-slate-700 mb-4 text-center whitespace-nowrap font-bold"}," Post a Component ",-1)),Ee=w(()=>o("p",{class:"text-slate-500 mx-auto text-center",style:{height:"123px"}}," Add a component to the library. It will be available to drag and drop into Vue Play for everyone. ",-1)),He=w(()=>o("h3",{class:"text-slate-500 mt-4 font-medium mb-4 whitespace-nowrap"}," Category ",-1)),Re=["value"],Oe=w(()=>o("h3",{class:"text-slate-500 mt-4 font-medium mb-4 whitespace-nowrap"}," Title ",-1)),Ge=w(()=>o("h3",{class:"text-slate-500 mt-4 font-medium mb-4 whitespace-nowrap"}," Description ",-1)),Xe={class:"h-16"},We=w(()=>o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto"},[o("path",{"fill-rule":"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z","clip-rule":"evenodd"})],-1)),Ye=[We];function Ze(e,t,h,g,v,l){const _=b("Meta"),m=b("VueNavigator"),c=b("Components"),u=b("Footer");return n(),d("div",Le,[y(_,{description:"Browse through our components library. Drag and drop into Vue Play.",title:"Components Library"}),y(m,{class:"absolute z-50"}),o("main",De,[o("div",Fe,[Pe,p(o("input",{class:"peer hidden",type:"checkbox",id:"toggle","onUpdate:modelValue":t[0]||(t[0]=r=>e.menu=r)},null,512),[[Q,e.menu]]),o("div",je,[qe,Ee,He,p(o("select",{name:"",class:"inline-block pl-2 py-2 w-full border-slate-300 border overflow-hidden border-solid rounded","onUpdate:modelValue":t[1]||(t[1]=r=>e.category=r)},[(n(!0),d(C,null,V(e.categories,r=>(n(),d("option",{value:r._id},f(r.title),9,Re))),256))],512),[[k,e.category]]),Oe,p(o("input",{class:"inline-block pl-2 py-2 w-full border-slate-300 border overflow-hidden border-solid rounded",placeholder:"Short, descriptive title","onUpdate:modelValue":t[2]||(t[2]=r=>e.title=r)},null,512),[[M,e.title]]),Ge,p(o("textarea",{"onUpdate:modelValue":t[3]||(t[3]=r=>e.description=r),rows:"",cols:"",class:"resize-none h-24 inline-block pl-2 py-2 w-full border-slate-300 border overflow-hidden border-solid rounded",placeholder:"Give helpful details. Add an icon to the component."},null,512),[[M,e.description]]),o("div",Xe,[o("button",{class:"w-10 h-10 border-slate-300 border overflow-hidden border-solid rounded mt-6 bg-slate-400 float-left",style:W([{"background-size":"cover"},"background-image: url("+(e.icon||e.background)+")"]),onClick:t[4]||(t[4]=(...r)=>l.selectImage&&l.selectImage(...r))},null,4),e.icon?(n(),d("button",{key:0,class:"ml-1 w-10 h-10 border-slate-300 border overflow-hidden border-solid rounded mt-6 bg-slate-100 p-0 float-left",style:{"background-size":"cover"},onClick:t[5]||(t[5]=r=>e.icon="")},Ye)):x("",!0),o("button",{class:"hover:bg-slate-800 text-xs px-3 bg-slate-700 text-slate-50 float-right h-10 border-slate-300 border overflow-hidden border-solid rounded mt-6",onClick:t[6]||(t[6]=(...r)=>l.post&&l.post(...r))}," POST COMPONENT ")])]),y(c,{class:"m-auto grow h-full overflow-auto pt-16 lg:pt-7 relative",ref:"components"},null,512),e.menu?(n(),d("div",{key:0,class:"absolute h-full w-full",onClick:t[7]||(t[7]=r=>e.menu=!1)})):x("",!0)])]),y(u)])}const tt=X(Ue,[["render",Ze],["__scopeId","data-v-362060aa"]]);export{tt as default};
