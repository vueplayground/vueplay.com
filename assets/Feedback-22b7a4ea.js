import{V as y,F as P}from"./Footer-85140c1b.js";import{M as J}from"./Meta-79263f4a.js";import{_ as m,r as h,o as C,c as i,a as c,b as A,w as E,h as v,F as u,i as f,t as I,d as S,j as k,n as b,v as z,k as U,g as p,p as w,f as K}from"./index-00e37edc.js";const F={components:{Meta:J},inject:["io","user","login"],expose:["refresh"],data:()=>({term:"",categories:[],posts:[],category:"",sort:"latest"}),watch:{category(){this.refresh()},sort(){this.refresh()}},created(){this.refresh(),this.getCategories()},methods:{async refresh(){let e={};this.term&&(e.title={$regex:this.term,$options:"i"}),this.sort,this.category&&(e.category_id=this.category),this.posts=await this.io.service("types/feedback").find({query:e}),console.log(this.posts)},async getCategories(){const e=await this.io.service("types/feedback-categories").find({query:{$sort:{order:1}}});this.categories=(e==null?void 0:e.data)||[]},async myVote(e){const t=await this.io.service("types/feedback-votes").find({query:{feedback_id:e._id,user_id:this.user.value._id}});return(t==null?void 0:t[0])||!1},async vote(e){if(await this.login()){const t=await this.myVote(e);t?await this.io.service("types/feedback-votes").remove(t._id):await this.io.service("types/feedback-votes").create({feedback_id:e._id}),await this.refreshVotes(e)}else alert("You have to be logged in to cast a vote")},async refreshVotes(e){e.votes=await this.io.service("types/feedback-votes").find({query:{feedback_id:e._id}})},async remove(e){await this.io.service("types/feedback").remove(e),await this.refresh(),alert("Removed!")}}},x={class:"p-6 md:pt-6 pb-24"},H={class:"h-24 flex-col max-w-2xl mx-auto lg:h-9 lg:mb-8 flex text-lg lg:flex-row"},X={class:"font-light"},L=A("span",null," Showing ",-1),Z=A("option",{value:"latest"}," Latest ",-1),T=A("option",{value:"top"}," Top ",-1),R=[Z,T],O=A("span",null," posts in ",-1),N=A("option",{value:""}," All Categories ",-1),D=["value"],W={class:"lg:grow"},j={class:"lg:float-right mt-4 lg:mt-0 lg:h-full"},V={class:"relative lg:h-full"},M=A("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[A("svg",{class:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},[A("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})])],-1),G={class:"max-w-2xl mx-auto mb-8 mt-4 flex"},Y={class:"w-16 inline-flex"},q=["onClick"],_={class:"h-1/2 w-full"},$=A("polygon",{points:"10,0 20,10 0,10"},null,-1),ee=[$],Ae={class:"text-center h-1/2 w-full -mt-1"},te=["onClick"],oe={class:"font-semibold"},se={class:"text-gray-500"},re={class:"w-12 inline-flex"},le=A("div",{class:"w-1/2"},[A("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"stroke-gray-400 w-5 h-5 mt-1"},[A("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"})])],-1),Qe={class:"w-1/2 text-right"};function Ce(e,t,n,d,a,r){const B=h("Meta");return C(),i("section",x,[c(B,{title:"Frequently Asked Questions",description:"Vue Play was created to simplify web development in a visual way, inspired by several tools like Elementor, Adobe Photoshop, Adobe Flash and GameMaker."}),A("div",H,[A("div",X,[L,E(A("select",{name:"",class:"cursor-pointer bg-transparent underline-offset-4 underline mx-1","onUpdate:modelValue":t[0]||(t[0]=s=>e.sort=s)},R,512),[[v,e.sort]]),O,E(A("select",{name:"",class:"cursor-pointer bg-transparent underline-offset-4 underline ml-1","onUpdate:modelValue":t[1]||(t[1]=s=>e.category=s)},[N,(C(!0),i(u,null,f(e.categories,s=>(C(),i("option",{value:s._id},I(s.title),9,D))),256))],512),[[v,e.category]])]),A("div",W,[A("div",j,[A("div",V,[M,S(),E(A("input",{type:"search",id:"default-search",class:"w-full h-10 lg:w-52 lg:h-full max-w-full pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search...",required:"","onUpdate:modelValue":t[2]||(t[2]=s=>e.term=s),onChange:t[3]||(t[3]=s=>r.refresh())},null,544),[[k,e.term]])])])])]),(C(!0),i(u,null,f(e.posts,s=>{var l,Q;return C(),i("article",G,[A("div",Y,[A("div",{class:b(["cursor-pointer border w-11 h-12 rounded-lg",{"bg-emerald-50":s.votes.find(o=>o.user_id===r.user.value._id),"border-emerald-400":s.votes.find(o=>o.user_id===r.user.value._id),"hover:bg-emerald-100":s.votes.find(o=>o.user_id===r.user.value._id),"hover:bg-slate-100":!s.votes.find(o=>o.user_id===r.user.value._id),"border-emerald-400":s.votes.find(o=>o.user_id===r.user.value._id)}]),onClick:o=>r.vote(s)},[A("div",_,[(C(),i("svg",{viewBox:"0 0 20 10",class:b(["pt-2 w-5 h-5 mx-auto",{"fill-emerald-400":s.votes.find(o=>o.user_id===r.user.value._id),"fill-gray-400":!s.votes.find(o=>o.user_id===r.user.value._id)}])},ee,2))]),A("div",Ae,I((l=s.votes)==null?void 0:l.length),1)],10,q)]),A("div",{class:"hover:text-emerald-600 overflow-hidden text-ellipsis max-h-20 flex-col inline-flex grow mr-4 cursor-pointer",onClick:o=>e.$router.push("/feedback/"+s._id)},[A("h1",oe,I(s.title),1),A("p",se,I(s.description),1)],8,te),A("div",re,[le,A("div",Qe,I((Q=s.comments)==null?void 0:Q.length),1)])])}),256))])}const ie=m(F,[["render",Ce]]),de="data:image/png;base64,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";const ae={components:{VueNavigator:y,Footer:P,Meta:J,Topics:ie},inject:["io","user","login","test","yam"],data:()=>({category:"",title:"",description:"",screenshot:"",background:de,menu:!1,categories:[]}),mounted(){this.getCategories()},methods:{reset(){var e,t;this.category=((t=(e=this.categories)==null?void 0:e[0])==null?void 0:t._id)||"",this.title="",this.description="",this.screenshot=""},async getCategories(){var t,n;const e=await this.io.service("types/feedback-categories").find({query:{$sort:{order:1}}});this.categories=(e==null?void 0:e.data)||[],this.category||(this.category=((n=(t=this.categories)==null?void 0:t[0])==null?void 0:n._id)||"")},async post(){await this.login()?(await this.io.service("types/feedback").create({category_id:this.category,title:this.title,description:this.description,screenshot:this.screenshot}),this.reset(),alert("Thank you for posting feedback!"),this.$refs.topics.refresh()):alert("Could not log in")},open(e){location.href=e},selectImage(){let e=document.createElement("input");e.type="file",e.multiple=!1,e.accept="image/*",e.onchange=async()=>{let n=Array.from(e.files)[0],d=new FileReader;d.readAsDataURL(n),d.onload=async a=>{this.screenshot=await this.resizeImage(a.target.result)},d.onerror=a=>{alert("Could not load file"),console.log(a)}},e.click()},resizeImage(e){return new Promise((t,n)=>{let d=1e3,a=1e3,r=document.createElement("canvas"),B=r.getContext("2d"),s=new Image;s.onload=()=>{let l=s.width,Q=s.height;l>Q?l>d&&(Q*=d/l,l=d):Q>a&&(l*=a/Q,Q=a),r.width=l,r.height=Q,B.drawImage(s,0,0,l,Q);let o=r.toDataURL("image/png",.7);t(o)},s.src=e})}}},g=e=>(w("data-v-279c211a"),e=e(),K(),e),ne={class:"bg-white flex flex-col h-screen"},Ee={style:{width:"100%"},class:"relative overflow-auto flex-1 h-full"},ge={class:"relative h-full w-full flex"},Ie=g(()=>A("label",{class:"fixed z-40 md:hidden cursor-pointer inline-flex items-center p-2 mt-4 ml-3 text-sm text-slate-900 rounded-lg",for:"toggle"},[A("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6"},[A("path",{"fill-rule":"evenodd",d:"M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z","clip-rule":"evenodd"})])],-1)),Be={class:"bg-white md:w-96 md:p-7 md:shadow-md shadow-lg pt-24 border-r border-slate-200 peer-checked:px-7 peer-checked:pt-24 peer-checked:pb-7 duration-200 transition-all ease-in-out w-0 max-w-full z-30 peer-checked:w-80 h-full absolute md:relative top-0 overflow-auto"},he=g(()=>A("h3",{class:"text-slate-700 mb-4 text-center whitespace-nowrap font-bold"}," Create a Post ",-1)),ce=g(()=>A("p",{class:"text-slate-500 mx-auto text-center",style:{height:"123px"}}," Give feedback about the playground, UX and UI of Vue Play Studio. Explain how the experience can be improved. ",-1)),ve=g(()=>A("h3",{class:"text-slate-500 mt-4 font-medium mb-4 whitespace-nowrap"}," Category ",-1)),ue=["value"],fe=g(()=>A("h3",{class:"text-slate-500 mt-4 font-medium mb-4 whitespace-nowrap"}," Title ",-1)),ke=g(()=>A("h3",{class:"text-slate-500 mt-4 font-medium mb-4 whitespace-nowrap"}," Description ",-1)),be={class:"h-16"},pe=g(()=>A("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto"},[A("path",{"fill-rule":"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z","clip-rule":"evenodd"})],-1)),Je=[pe];function me(e,t,n,d,a,r){const B=h("Meta"),s=h("VueNavigator"),l=h("Topics"),Q=h("Footer");return C(),i("div",ne,[c(B,{description:"Read the Vue Play documentation for better insights to the software.",title:"Documentation"}),c(s,{class:"absolute flex z-50"}),A("main",Ee,[A("div",ge,[Ie,E(A("input",{class:"peer hidden",type:"checkbox",id:"toggle","onUpdate:modelValue":t[0]||(t[0]=o=>e.menu=o)},null,512),[[z,e.menu]]),A("div",Be,[he,ce,ve,E(A("select",{name:"",class:"inline-block pl-2 py-2 w-full border-slate-300 border overflow-hidden border-solid rounded","onUpdate:modelValue":t[1]||(t[1]=o=>e.category=o)},[(C(!0),i(u,null,f(e.categories,o=>(C(),i("option",{value:o._id},I(o.title),9,ue))),256))],512),[[v,e.category]]),fe,E(A("input",{class:"inline-block pl-2 py-2 w-full border-slate-300 border overflow-hidden border-solid rounded",placeholder:"Short, descriptive title","onUpdate:modelValue":t[2]||(t[2]=o=>e.title=o)},null,512),[[k,e.title]]),ke,E(A("textarea",{"onUpdate:modelValue":t[3]||(t[3]=o=>e.description=o),rows:"",cols:"",class:"resize-none h-24 inline-block pl-2 py-2 w-full border-slate-300 border overflow-hidden border-solid rounded",placeholder:"Give helpful details. Add screenshot where relevant."},null,512),[[k,e.description]]),A("div",be,[A("button",{class:"w-10 h-10 border-slate-300 border overflow-hidden border-solid rounded mt-6 bg-slate-400 float-left",style:U([{"background-size":"cover"},"background-image: url("+(e.screenshot||e.background)+")"]),onClick:t[4]||(t[4]=(...o)=>r.selectImage&&r.selectImage(...o))},null,4),e.screenshot?(C(),i("button",{key:0,class:"ml-1 w-10 h-10 border-slate-300 border overflow-hidden border-solid rounded mt-6 bg-slate-100 p-0 float-left",style:{"background-size":"cover"},onClick:t[5]||(t[5]=o=>e.screenshot="")},Je)):p("",!0),A("button",{class:"hover:bg-slate-800 text-xs px-3 bg-slate-700 text-slate-50 float-right h-10 border-slate-300 border overflow-hidden border-solid rounded mt-6",onClick:t[6]||(t[6]=(...o)=>r.post&&r.post(...o))}," POST FEEDBACK ")])]),c(l,{class:"m-auto container grow h-full overflow-auto pt-16 lg:pt-7",ref:"topics"},null,512),e.menu?(C(),i("div",{key:0,class:"absolute h-full w-full",onClick:t[7]||(t[7]=o=>e.menu=!1)})):p("",!0)])]),c(Q)])}const ze=m(ae,[["render",me],["__scopeId","data-v-279c211a"]]);export{ze as default};
