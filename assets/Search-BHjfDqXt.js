import{V as Z,F as J}from"./Footer-DLrIrUDQ.js";import{M as K}from"./Meta-BcfnMMvN.js";import{d as W}from"./defaultBase64Image-DIUyioUE.js";import{_ as Y,o as d,c as u,d as o,n as k,f as x,t as v,j as b,m as H,F as R,h as X,e as G,p as O,i as _,r as w,a as y,v as Q}from"./index-BQlSULlP.js";const ee={inject:["io","user","login","logout"],expose:["refresh"],data:()=>({term:"",categories:[],posts:[],category:"",sort:"latest",background:W}),watch:{category(){this.refresh()},sort(){this.refresh()}},created(){this.refresh(),this.getCategories()},methods:{statusStyle(t){return t.public?{color:"rgb(106, 208, 157)",backgroundColor:"rgb(239, 252, 245)",borderColor:"rgb(106, 208, 157)"}:{color:"rgb(137, 46, 222)",backgroundColor:"rgb(247, 237, 255)",borderColor:"rgb(137, 46, 222)"}},async refresh(t=this.sort){this.sort=t;let e={public:!0,published:!0};this.term&&(e.title={$regex:this.term,$options:"i"}),this.sort==="top"?e.top=!0:this.sort==="upcoming"?e.published=!1:this.sort==="top-upcoming"?(e.top=!0,e.published=!1):e.$sort={createdAt:-1},this.category&&(e.category_id=this.category),this.posts=await this.io.service("types/applications").find({query:e})},async getCategories(){const t=await this.io.service("types/categories").find({query:{$sort:{order:1}}});this.categories=(t==null?void 0:t.data)||[]},async myVote(t){var c;const e=await this.io.service("types/votes").find({query:{application_id:t._id,user_id:(c=this.user)==null?void 0:c._id}});return(e==null?void 0:e[0])||!1},async vote(t){if(await this.login()){const e=await this.myVote(t);e?await this.io.service("types/votes").remove(e._id):await this.io.service("types/votes").create({application_id:t._id}),await this.refreshVotes(t)}else alert("You have to be logged in to cast a vote")},async refreshVotes(t){t.votes=await this.io.service("types/votes").find({query:{application_id:t._id}})},async remove(t){await this.io.service("types/applications").remove(t),await this.refresh(),alert("Removed!")}}},te={class:"p-6 md:pt-6 pb-24"},re={class:"absolute left-0 right-0 top-0 h-16 p-2 bg-slate-50"},oe={key:1,class:"float-right mt-3 mr-4"},se={class:"h-24 flex-col max-w-2xl mx-auto lg:h-9 lg:mb-8 flex text-lg lg:flex-row mt-16"},ie={class:"text-sm mb:text-base font-light"},le=["value"],ae={class:"lg:grow"},ne={class:"lg:float-right mt-4 lg:mt-0 lg:h-full"},de={class:"relative lg:h-full"},ue={class:"max-w-2xl mx-auto mb-8 mt-4 flex cursor-pointer"},ce={class:"pr-6 inline-flex"},ge=["onClick"],me={class:"h-1/2 w-full"},he={class:"text-center h-1/2 w-full -mt-1"},fe=["onClick"],ve={class:"font-semibold"},pe={class:"text-gray-500 overflow-hidden text-ellipsis"},we=["onClick","onMouseenter","onMouseleave"],ye=["onClick","onMouseenter","onMouseleave"],be={class:"w-10 text-right"};function xe(t,e,c,m,h,s){var p,g,a,n,f,C,V,M,z,F,I,A,B,$,L;return d(),u("section",te,[o("div",re,[(p=s.user)!=null&&p.email||(a=(g=s.user)==null?void 0:g.value)!=null&&a.email?(d(),u("div",{key:0,class:"h-12 w-12 bg-cover rounded-full bg-slate-500 mx-auto float-right",style:k("background-image: url("+(((n=s.user)==null?void 0:n.picture)||((C=(f=s.user)==null?void 0:f.value)==null?void 0:C.picture))+")")},null,4)):x("",!0),(V=s.user)!=null&&V.email||(z=(M=s.user)==null?void 0:M.value)!=null&&z.email?(d(),u("div",oe,v(((F=s.user)==null?void 0:F.name)||((A=(I=s.user)==null?void 0:I.value)==null?void 0:A.name)),1)):x("",!0),(B=s.user)!=null&&B.email||(L=($=s.user)==null?void 0:$.value)!=null&&L.email?(d(),u("div",{key:2,class:"float-left mt-3 ml-4 cursor-pointer text-slate-700 hover:text-slate-900 font-bold",onClick:e[0]||(e[0]=(...r)=>s.logout&&s.logout(...r))}," Logout ")):(d(),u("div",{key:3,class:"float-left mt-3 ml-4 cursor-pointer text-slate-700 hover:text-slate-900 font-bold",onClick:e[1]||(e[1]=(...r)=>s.login&&s.login(...r))}," Login "))]),o("div",se,[o("div",ie,[e[8]||(e[8]=o("span",null," Showing ",-1)),b(o("select",{name:"",class:"cursor-pointer bg-transparent underline-offset-4 underline mx-1","onUpdate:modelValue":e[2]||(e[2]=r=>t.sort=r)},e[6]||(e[6]=[o("option",{value:"latest"}," Latest ",-1),o("option",{value:"top"}," Top ",-1),o("option",{value:"upcoming"}," Latest upcoming ",-1),o("option",{value:"top-upcoming"}," Top upcoming ",-1)]),512),[[H,t.sort]]),e[9]||(e[9]=o("span",null," components in ",-1)),b(o("select",{name:"",class:"cursor-pointer bg-transparent underline-offset-4 underline ml-1","onUpdate:modelValue":e[3]||(e[3]=r=>t.category=r)},[e[7]||(e[7]=o("option",{value:""}," All Categories ",-1)),(d(!0),u(R,null,X(t.categories,r=>(d(),u("option",{value:r._id},v(r.title),9,le))),256))],512),[[H,t.category]])]),o("div",ae,[o("div",ne,[o("div",de,[e[10]||(e[10]=o("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[o("svg",{class:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},[o("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})])],-1)),e[11]||(e[11]=G()),b(o("input",{type:"search",id:"default-search",class:"w-full h-10 lg:w-52 lg:h-full max-w-full pl-10 pr-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search...",required:"","onUpdate:modelValue":e[4]||(e[4]=r=>t.term=r),onChange:e[5]||(e[5]=r=>s.refresh())},null,544),[[O,t.term]])])])])]),(d(!0),u(R,null,X(t.posts.data,r=>{var S,N,P,T,j,q,D,U,E;return d(),u("article",ue,[o("div",ce,[o("div",{class:_(["cursor-pointer border w-11 h-12 rounded-lg",{"bg-emerald-50":(S=r==null?void 0:r.votes)==null?void 0:S.find(i=>{var l;return i.user_id===((l=s.user)==null?void 0:l._id)}),"border-emerald-400":(N=r==null?void 0:r.votes)==null?void 0:N.find(i=>{var l;return i.user_id===((l=s.user)==null?void 0:l._id)}),"hover:bg-emerald-100":(P=r==null?void 0:r.votes)==null?void 0:P.find(i=>{var l;return i.user_id===((l=s.user)==null?void 0:l._id)}),"hover:bg-slate-100":!((T=r==null?void 0:r.votes)!=null&&T.find(i=>{var l;return i.user_id===((l=s.user)==null?void 0:l._id)})),"border-emerald-400":(j=r==null?void 0:r.votes)==null?void 0:j.find(i=>{var l;return i.user_id===((l=s.user)==null?void 0:l._id)})}]),onClick:i=>s.vote(r)},[o("div",me,[(d(),u("svg",{viewBox:"0 0 20 10",class:_(["pt-2 w-5 h-5 mx-auto",{"fill-emerald-400":(q=r==null?void 0:r.votes)==null?void 0:q.find(i=>{var l;return i.user_id===((l=s.user)==null?void 0:l._id)}),"fill-gray-400":!((D=r==null?void 0:r.votes)!=null&&D.find(i=>{var l;return i.user_id===((l=s.user)==null?void 0:l._id)}))}])},e[12]||(e[12]=[o("polygon",{points:"10,0 20,10 0,10"},null,-1)]),2))]),o("div",he,v((U=r==null?void 0:r.votes)==null?void 0:U.length),1)],10,ge)]),o("div",{class:_(["hover:text-emerald-600 overflow-hidden text-ellipsis inline-flex flex-col grow pr-4 cursor-pointer",r.over?"text-emerald-600":""]),onClick:i=>t.$router.push("/search/"+r._id),style:{"max-height":"75px",height:"1806.03px"}},[o("h1",ve,[G(v(r.title)+" ",1),o("button",{class:"ml-2 border rounded text-xs py-0.5 px-1",style:k(s.statusStyle(r))},v(r.public?"Public":"Private"),5)]),o("p",pe,v(r.description),1)],10,fe),o("div",{class:"pl-4 inline-flex cursor-pointer",onClick:i=>t.$router.push("/search/"+r._id),onMouseenter:i=>r.over=!0,onMouseleave:i=>r.over=!1},[o("div",{class:"rounded w-16 h-16",style:k([{"min-width":"4rem","background-size":"contain","background-position":"center","background-repeat":"no-repeat","background-color":"#F5F5F5"},"background-image: url("+(r.icon||t.background)+")"])},null,4)],40,we),o("div",{class:"pl-4 inline-flex cursor-pointer",onClick:i=>t.$router.push("/search/"+r._id),onMouseenter:i=>r.over=!0,onMouseleave:i=>r.over=!1},[e[13]||(e[13]=o("div",{class:"w-6"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"stroke-gray-400 w-5 h-5 mt-1 mr-6"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"})])],-1)),o("div",be,v((E=r.comments)==null?void 0:E.length),1)],40,ye)])}),256))])}const ke=Y(ee,[["render",xe]]),_e={components:{VueNavigator:Z,Footer:J,Meta:K,Components:ke},inject:["io","user","login","test","yam"],data:()=>({category:"",title:"",description:"",icon:"",background:W,menu:!1,categories:[]}),mounted(){this.getCategories()},methods:{reset(){var t,e;this.category=((e=(t=this.categories)==null?void 0:t[0])==null?void 0:e._id)||"",this.title="",this.description="",this.icon=""},async getCategories(){var e,c;const t=await this.io.service("types/categories").find({query:{$sort:{order:1}}});this.categories=(t==null?void 0:t.data)||[],this.category||(this.category=((c=(e=this.categories)==null?void 0:e[0])==null?void 0:c._id)||"")},async post(){await this.login()?(await this.io.service("types/applications").create({category_id:this.category,title:this.title,description:this.description,icon:this.icon}),this.reset(),alert("Thank you for posting a component!"),this.$refs.components.refresh("latest")):alert("Could not log in")},open(t){location.href=t},selectImage(){let t=document.createElement("input");t.type="file",t.multiple=!1,t.accept="image/*",t.onchange=async()=>{let c=Array.from(t.files)[0],m=new FileReader;m.readAsDataURL(c),m.onload=async h=>{this.icon=await this.resizeImage(h.target.result)},m.onerror=h=>{alert("Could not load file"),console.log(h)}},t.click()},resizeImage(t){return new Promise((e,c)=>{let m=1e3,h=1e3,s=document.createElement("canvas"),p=s.getContext("2d"),g=new Image;g.onload=()=>{let a=g.width,n=g.height;a>n?a>m&&(n*=m/a,a=m):n>h&&(a*=h/n,n=h),s.width=a,s.height=n,p.drawImage(g,0,0,a,n);let f=s.toDataURL("image/png",.7);e(f)},g.src=t})}}},Ce={class:"bg-white flex flex-col h-screen"},Ve={style:{width:"100%","min-height":"calc(100vh - 50px)"},class:"flex-1 relative overflow-auto"},Me={class:"relative h-full w-full flex"},ze={class:"bottom-0 bg-white md:w-96 md:p-7 md:shadow-md shadow-lg pt-24 border-r border-slate-200 peer-checked:px-7 peer-checked:pt-24 peer-checked:pb-7 duration-200 transition-all ease-in-out w-0 max-w-full z-30 peer-checked:w-80 absolute md:relative top-0 overflow-auto"};function Fe(t,e,c,m,h,s){const p=w("Meta"),g=w("VueNavigator"),a=w("Components"),n=w("Footer");return d(),u("div",Ce,[y(p,{description:"Browse through our components library. Drag and drop into your application using Vue Play.",title:"Components Library"}),y(g,{class:"absolute z-50"}),o("main",Ve,[o("div",Me,[e[15]||(e[15]=o("label",{class:"bg-white fixed z-40 md:hidden cursor-pointer inline-flex items-center p-2 mt-20 ml-3 text-sm text-slate-900 rounded-lg",for:"toggle"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6"},[o("path",{"fill-rule":"evenodd",d:"M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z","clip-rule":"evenodd"})])],-1)),b(o("input",{class:"peer hidden",type:"checkbox",id:"toggle","onUpdate:modelValue":e[0]||(e[0]=f=>t.menu=f)},null,512),[[Q,t.menu]]),o("div",ze,[e[12]||(e[12]=o("h3",{class:"mt-12 text-slate-700 mb-4 text-center whitespace-nowrap font-bold"}," Post a Component ",-1)),e[13]||(e[13]=o("p",{class:"my-6 text-slate-500 mx-auto text-center"}," Add components to the library from Vue Play and make it public using the deploy section. ",-1)),e[14]||(e[14]=o("p",{class:"text-slate-500 mx-auto text-center",style:{height:"123px"}}," It will be available using drag and drop from Vue Play for everyone. ",-1)),x("",!0)]),y(a,{class:"bg-white m-auto grow h-full overflow-auto pt-16 lg:pt-7 relative",ref:"components"},null,512),t.menu?(d(),u("div",{key:0,class:"absolute h-full w-full",onClick:e[7]||(e[7]=f=>t.menu=!1)})):x("",!0)])]),y(n)])}const Le=Y(_e,[["render",Fe],["__scopeId","data-v-78f47906"]]);export{Le as default};
