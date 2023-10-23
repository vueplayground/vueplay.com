import{V as ze,F as De}from"./Footer-f2e64baa.js";import{M as Fe}from"./Meta-65d9b705.js";import{h as He}from"./moment-fbc5633a.js";import{_ as Be,r as B,o as i,c as r,a as z,b as s,h as A,e as d,t as n,n as H,w,k as I,i as Ie,F as D,j as F,d as f,l as Ye,m as Ue,v as je,p as Ne,g as Ee,q as Pe}from"./index-4306226c.js";const Te={components:{Meta:Fe},inject:["io","user","login","logout"],emit:["post"],props:{id:{type:String,default:"64bae1b0ca444b8b5e20cd5d"}},data:()=>({comment:"",edit:!1,post:null,statuses:[],categories:[],moment:He}),created(){this.refresh()},methods:{async postComment(){await this.login()?(await this.io.service("types/feedback-comments").create({feedback_id:this.post._id,comment:this.comment}),await this.refresh(),this.comment="",alert("Posted!")):alert("You need to be logged in to post a comment")},async saveComment(e){await this.io.service("types/feedback-comments").patch(e._id,{comment:e.comment}),e.edit=!1,alert("Saved")},async removeComment(e){confirm("Delete comment?")&&(await this.io.service("types/feedback-comments").remove(e._id),await this.refresh(),alert("Removed!"))},async savePost(){await this.io.service("types/feedback").patch(this.post._id,{title:this.post.title,description:this.post.description,screenshot:this.post.screenshot,category_id:this.post.category_id,status_id:this.post.status_id}),await this.refresh(),this.edit=!1,alert("Saved")},async remove(e){confirm("Delete post?")&&(await this.io.service("types/feedback").remove(e._id),alert("Removed!"),this.$router.push("/feedback"))},async refresh(){this.post=await this.io.service("types/feedback").get(this.id),await this.getStatuses(),await this.getCategories(),this.$emit("post",this.post)},async getStatuses(){const e=await this.io.service("types/feedback-status").find();this.statuses=(e==null?void 0:e.data)||[]},async getCategories(){const e=await this.io.service("types/feedback-categories").find();this.categories=(e==null?void 0:e.data)||[]},async myVote(e){var u;const o=await this.io.service("types/feedback-votes").find({query:{feedback_id:e._id,user_id:(u=this.user)==null?void 0:u._id}});return(o==null?void 0:o[0])||!1},async vote(e){if(await this.login()){const o=await this.myVote(e);o?await this.io.service("types/feedback-votes").remove(o._id):await this.io.service("types/feedback-votes").create({feedback_id:e._id}),await this.refreshVotes(e)}else alert("You have to be logged in to cast a vote")},async refreshVotes(e){e.votes=await this.io.service("types/feedback-votes").find({query:{feedback_id:e._id}})},async myLike(e){var u;const o=await this.io.service("types/feedback-likes").find({query:{comment_id:e._id,user_id:(u=this.user)==null?void 0:u._id}});return(o==null?void 0:o[0])||!1},async like(e){if(await this.login()){const o=await this.myLike(e);o?await this.io.service("types/feedback-likes").remove(o._id):await this.io.service("types/feedback-likes").create({comment_id:e._id}),await this.refreshLikes(e)}else alert("You have to be logged in to like")},async refreshLikes(e){e.likes=await this.io.service("types/feedback-likes").find({query:{comment_id:e._id}})},selectImage(){let e=document.createElement("input");e.type="file",e.multiple=!1,e.accept="image/*",e.onchange=async()=>{let u=Array.from(e.files)[0],m=new FileReader;m.readAsDataURL(u),m.onload=async g=>{this.post.screenshot=await this.resizeImage(g.target.result)},m.onerror=g=>{alert("Could not load file"),console.log(g)}},e.click()},resizeImage(e){return new Promise((o,u)=>{let m=1e3,g=1e3,l=document.createElement("canvas"),_=l.getContext("2d"),v=new Image;v.onload=()=>{let p=v.width,c=v.height;p>c?p>m&&(c*=m/p,p=m):c>g&&(p*=g/c,c=g),l.width=p,l.height=c,_.drawImage(v,0,0,p,c);let b=l.toDataURL("image/png",.7);o(b)},v.src=e})}}},qe={class:"p-6 md:pt-6 pb-24"},Re={class:"absolute left-0 right-0 top-0 h-16 p-2 bg-slate-50"},Ge={key:1,class:"float-right mt-3 mr-4"},Ke={class:"mt-16"},Xe={class:"max-w-2xl mx-auto mt-4 flex"},We={class:"w-16 inline-flex"},$e={class:"h-1/2 w-full"},Je=s("polygon",{points:"10,0 20,10 0,10"},null,-1),Oe=[Je],Qe={class:"text-center h-1/2 w-full -mt-1"},Ze={class:"overflow-hidden text-ellipsis max-h-20 flex-col inline-flex grow"},et={key:0,class:"pt-2.5 text-xl font-semibold"},tt={class:"max-w-2xl mx-auto mt-4 flex"},st={class:"w-16 inline-flex"},ot={class:"w-11"},lt={class:"overflow-hidden text-ellipsis max-h-8 flex-col inline-flex grow"},it={class:"font-semibold mt-0.5"},rt={key:0,class:"max-w-2xl mx-auto mb-8 mt-2 flex"},at=s("div",{class:"w-16 inline-flex"},[s("div",{class:"w-16"})],-1),dt={class:"grow"},nt={key:0,class:"text-gray-700 mb-3"},ut=["value"],ct=["value"],ht=["src"],mt={class:"mt-2 flex text-gray-500"},pt={class:"text-xs"},ft=s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 cursor-pointer inline-flex -mt-1"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1),vt={key:1,class:"text-xs ml-1"},gt=s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"},null,-1),wt=[gt],bt={class:"mt-8"},kt={class:"mt-4"},_t={class:"relative"},yt=s("div",{class:"mt-10"},[s("p",{class:"text-gray-500"}," Activity Feed ")],-1),xt={class:"max-w-2xl mx-auto mt-4 flex"},Ct={class:"w-16 inline-flex"},Mt={class:"w-11"},Vt={class:"overflow-hidden text-ellipsis max-h-8 flex-col inline-flex grow"},Lt={class:"font-semibold mt-0.5"},St={class:"max-w-2xl mx-auto mb-8 mt-2 flex"},At=s("div",{class:"w-16 inline-flex"},[s("div",{class:"w-16"})],-1),It={class:"grow"},Bt={key:0,class:"text-gray-700 mb-3"},zt=["onUpdate:modelValue"],Dt=["onClick"],Ft={class:"flex text-gray-500"},Ht=["onClick"],Yt=s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"},null,-1),Ut=[Yt],jt={class:"text-xs"},Nt={key:0,class:"text-xs ml-1"},Et=["onClick"],Pt=s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"},null,-1),Tt=[Pt],qt=["onClick"],Rt=s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 cursor-pointer inline-flex -mt-0.5"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})],-1);function Gt(e,o,u,m,g,l){var v,p,c,b,y,x,h,C,M,V,L,Y,U,j,N,E,P,T,q,R,G,K,X,W,$,J,O,Q,Z,ee,te,se,oe,le,ie,re,ae,de,ne,ue,ce,he,me,pe,fe,ve;const _=B("Meta");return i(),r("section",qe,[z(_,{title:(v=e.post)==null?void 0:v.title,description:(p=e.post)==null?void 0:p.description,author:(b=(c=e.post)==null?void 0:c.user)==null?void 0:b.name},null,8,["title","description","author"]),s("div",Re,[(y=l.user)!=null&&y.email||(h=(x=l.user)==null?void 0:x.value)!=null&&h.email?(i(),r("div",{key:0,class:"h-12 w-12 bg-cover rounded-full bg-slate-500 mx-auto float-right",style:A("background-image: url("+(((C=l.user)==null?void 0:C.picture)||((V=(M=l.user)==null?void 0:M.value)==null?void 0:V.picture))+")")},null,4)):d("",!0),(L=l.user)!=null&&L.email||(U=(Y=l.user)==null?void 0:Y.value)!=null&&U.email?(i(),r("div",Ge,n(((j=l.user)==null?void 0:j.name)||((E=(N=l.user)==null?void 0:N.value)==null?void 0:E.name)),1)):d("",!0),(P=l.user)!=null&&P.email||(q=(T=l.user)==null?void 0:T.value)!=null&&q.email?(i(),r("div",{key:2,class:"float-left mt-3 ml-4 cursor-pointer text-slate-700 hover:text-slate-900 font-bold",onClick:o[0]||(o[0]=(...t)=>l.logout&&l.logout(...t))}," Logout ")):(i(),r("div",{key:3,class:"float-left mt-3 ml-4 cursor-pointer text-slate-700 hover:text-slate-900 font-bold",onClick:o[1]||(o[1]=(...t)=>l.login&&l.login(...t))}," Login "))]),s("article",Ke,[s("div",Xe,[s("div",We,[s("div",{class:H(["border w-11 h-12 rounded-lg cursor-pointer",{"bg-emerald-50":(R=e.post)==null?void 0:R.votes.find(t=>{var a;return t.user_id===((a=l.user)==null?void 0:a._id)}),"border-emerald-400":(G=e.post)==null?void 0:G.votes.find(t=>{var a;return t.user_id===((a=l.user)==null?void 0:a._id)}),"hover:bg-emerald-100":(K=e.post)==null?void 0:K.votes.find(t=>{var a;return t.user_id===((a=l.user)==null?void 0:a._id)}),"hover:bg-slate-100":!((X=e.post)!=null&&X.votes.find(t=>{var a;return t.user_id===((a=l.user)==null?void 0:a._id)})),"border-emerald-400":(W=e.post)==null?void 0:W.votes.find(t=>{var a;return t.user_id===((a=l.user)==null?void 0:a._id)})}]),onClick:o[2]||(o[2]=t=>l.vote(e.post))},[s("div",$e,[(i(),r("svg",{viewBox:"0 0 20 10",class:H(["pt-2 w-5 h-5 mx-auto",{"fill-emerald-400":($=e.post)==null?void 0:$.votes.find(t=>{var a;return t.user_id===((a=l.user)==null?void 0:a._id)}),"fill-gray-400":!((J=e.post)!=null&&J.votes.find(t=>{var a;return t.user_id===((a=l.user)==null?void 0:a._id)}))}])},Oe,2))]),s("div",Qe,n((Q=(O=e.post)==null?void 0:O.votes)==null?void 0:Q.length),1)],2)]),s("div",Ze,[e.edit?e.post?w((i(),r("input",{key:1,class:"pt-2.5 text-xl font-semibold","onUpdate:modelValue":o[3]||(o[3]=t=>e.post.title=t)},null,512)),[[I,e.post.title]]):d("",!0):(i(),r("h1",et,n((Z=e.post)==null?void 0:Z.title),1))])]),s("div",tt,[s("div",st,[s("div",ot,[s("div",{class:"h-7 w-7 bg-cover rounded-full bg-slate-500 mx-auto",style:A("background-image: url("+((te=(ee=e.post)==null?void 0:ee.user)==null?void 0:te.picture)+")")},null,4)])]),s("div",lt,[s("h1",it,n((oe=(se=e.post)==null?void 0:se.user)==null?void 0:oe.name),1)])]),e.post?(i(),r("div",rt,[at,s("div",dt,[e.edit?w((i(),r("textarea",{key:1,"onUpdate:modelValue":o[4]||(o[4]=t=>e.post.description=t),rows:"",cols:"",class:"rounded w-full h-32 mb-3 border"},`
`,512)),[[I,e.post.description]]):(i(),r("p",nt,n((le=e.post)==null?void 0:le.description),1)),e.edit&&((re=(ie=l.user)==null?void 0:ie.permissions)!=null&&re.includes("admin"))?w((i(),r("select",{key:2,"onUpdate:modelValue":o[5]||(o[5]=t=>e.post.status_id=t),class:"mb-2 w-full h-10 block max-w-full pl-4 pr-2 text-sm text-gray-900 placeholder:text-slate-500 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[(i(!0),r(D,null,F(e.statuses,t=>(i(),r("option",{value:t._id},n(t.title),9,ut))),256))],512)),[[Ie,e.post.status_id]]):d("",!0),e.edit?w((i(),r("select",{key:3,"onUpdate:modelValue":o[6]||(o[6]=t=>e.post.category_id=t),class:"mb-2 w-full h-10 block max-w-full pl-4 pr-2 text-sm text-gray-900 placeholder:text-slate-500 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[(i(!0),r(D,null,F(e.categories,t=>(i(),r("option",{value:t._id},n(t.title),9,ct))),256))],512)),[[Ie,e.post.category_id]]):d("",!0),(ae=e.post)!=null&&ae.screenshot?(i(),r("img",{key:4,class:"rounded w-full mb-4",src:e.post.screenshot},null,8,ht)):d("",!0),f(),e.edit?(i(),r("button",{key:5,class:"mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2",onClick:o[7]||(o[7]=(...t)=>l.selectImage&&l.selectImage(...t))}," Select screenshot ")):d("",!0),e.edit?(i(),r("button",{key:6,class:"mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2",onClick:o[8]||(o[8]=t=>e.post.screenshot="")}," Remove screenshot ")):d("",!0),e.edit?(i(),r("button",{key:7,class:"mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2",onClick:o[9]||(o[9]=t=>e.edit=!1)}," Cancel ")):d("",!0),e.edit?(i(),r("button",{key:8,class:"bg-emerald-400 text-white hover:bg-emerald-500 shadow rounded px-2 mb-2 py-2",onClick:o[10]||(o[10]=t=>l.savePost())}," Save ")):d("",!0),s("div",mt,[s("span",pt,n(e.moment(e.post.createdAt).format("MMMM DD, YYYY")),1),f(),((ne=(de=e.post)==null?void 0:de.user)==null?void 0:ne._id)===((ue=l.user)==null?void 0:ue._id)?(i(),r("span",{key:0,class:"text-xs ml-1",onClick:o[11]||(o[11]=t=>l.remove(e.post))},[f(" · "),ft])):d("",!0),f(),!e.edit&&(((he=(ce=e.post)==null?void 0:ce.user)==null?void 0:he._id)===((me=l.user)==null?void 0:me._id)||(fe=(pe=l.user)==null?void 0:pe.permissions)!=null&&fe.includes("admin"))?(i(),r("span",vt,[f(" · "),(i(),r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 cursor-pointer inline-flex -mt-0.5",onClick:o[12]||(o[12]=t=>e.edit=!0)},wt))])):d("",!0)]),s("div",bt,[s("form",kt,[s("div",_t,[w(s("input",{type:"search",id:"default-search",class:"w-full h-10 block max-w-full pl-4 pr-2 text-sm text-gray-900 placeholder:text-slate-500 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Leave a comment",required:"","onUpdate:modelValue":o[13]||(o[13]=t=>e.comment=t),onKeypress:o[14]||(o[14]=Ye(Ue(t=>l.postComment(),["prevent"]),["enter"]))},null,544),[[I,e.comment]])])])]),yt])])):d("",!0)]),(i(!0),r(D,null,F((ve=e.post)==null?void 0:ve.comments,t=>{var a,ge,we,be,ke,_e,ye,xe,Ce,Me,Ve,Le,Se,Ae;return i(),r("article",null,[s("div",xt,[s("div",Ct,[s("div",Mt,[s("div",{class:"h-7 w-7 bg-cover rounded-full bg-slate-500 mx-auto",style:A("background-image: url("+((ge=(a=t==null?void 0:t.user)==null?void 0:a[0])==null?void 0:ge.picture)+")")},null,4)])]),s("div",Vt,[s("h1",Lt,n((be=(we=t.user)==null?void 0:we[0])==null?void 0:be.name),1)])]),s("div",St,[At,s("div",It,[t.edit?w((i(),r("textarea",{key:1,"onUpdate:modelValue":S=>t.comment=S,rows:"",cols:"",class:"w-full h-16 mb-3 border"},`
`,8,zt)),[[I,t.comment]]):(i(),r("p",Bt,n(t.comment),1)),t.edit?(i(),r("button",{key:2,class:"bg-emerald-400 text-white hover:bg-emerald-500 shadow rounded px-2 mb-2 py-2",onClick:S=>l.saveComment(t)}," Save ",8,Dt)):d("",!0),s("div",Ft,[(i(),r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:H(["w-4 h-4 mr-1 cursor-pointer",{"fill-red-400":t.likes.length}]),onClick:S=>l.like(t)},Ut,10,Ht)),f(),s("span",jt,n(((ke=t.likes)==null?void 0:ke.length)>1?((_e=t.likes)==null?void 0:_e.length)+" likes":"")+" "+n(((ye=t.likes)==null?void 0:ye.length)===1?((xe=t.likes)==null?void 0:xe.length)+" like":"")+" · "+n(e.moment(t.createdAt).format("MMMM DD, YYYY")),1),f(),((Me=(Ce=t==null?void 0:t.user)==null?void 0:Ce[0])==null?void 0:Me._id)===((Ve=l.user)==null?void 0:Ve._id)?(i(),r("span",Nt,[f(" · "),(i(),r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 cursor-pointer inline-flex -mt-1",onClick:S=>l.removeComment(t)},Tt,8,Et))])):d("",!0),f(),((Se=(Le=t==null?void 0:t.user)==null?void 0:Le[0])==null?void 0:Se._id)===((Ae=l.user)==null?void 0:Ae._id)&&!t.edit?(i(),r("span",{key:1,class:"text-xs ml-1",onClick:S=>t.edit=!0},[f(" · "),Rt],8,qt)):d("",!0)])])])])}),256))])}const Kt=Be(Te,[["render",Gt]]);const Xt={props:["id"],components:{VueNavigator:ze,Footer:De,Topic:Kt},data:()=>({menu:!1,post:null}),computed:{votes(){var e;return(e=this.post)==null?void 0:e.votes}},methods:{statusStyle(e){var o,u,m;return{color:((o=e==null?void 0:e.status)==null?void 0:o.foregroundColor)||"#333",backgroundColor:((u=e==null?void 0:e.status)==null?void 0:u.backgroundColor)||"#F8FAFC",borderColor:((m=e==null?void 0:e.status)==null?void 0:m.foregroundColor)||"#E5E7EB"}}}},k=e=>(Ne("data-v-316f1584"),e=e(),Ee(),e),Wt={class:"bg-white flex flex-col h-screen"},$t={style:{width:"100%","min-height":"calc(100vh - 50px)"},class:"flex-1 relative overflow-auto"},Jt={class:"relative h-full w-full flex"},Ot=k(()=>s("label",{class:"bg-white fixed z-40 md:hidden cursor-pointer inline-flex items-center p-2 mt-16 lg:mt-4 ml-3 text-sm text-slate-900 rounded-lg",for:"toggle"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])],-1)),Qt={class:"bottom-0 bg-white pt-10 md:w-96 md:p-7 md:shadow-md shadow-lg border-r border-slate-200 peer-checked:px-7 peer-checked:pt-16 peer-checked:md:pt-10 peer-checked:pb-7 duration-200 transition-all ease-in-out w-0 max-w-full z-30 peer-checked:w-80 absolute md:relative top-0 overflow-auto"},Zt=k(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-5 h-5 -mt-1 mr-1 inline"},[s("path",{"fill-rule":"evenodd",d:"M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z","clip-rule":"evenodd"})],-1)),es=k(()=>s("h3",{class:"text-slate-500 font-medium mb-1 whitespace-nowrap"}," Status ",-1)),ts=k(()=>s("h3",{class:"text-slate-500 font-medium mb-1 whitespace-nowrap"}," Category ",-1)),ss=k(()=>s("h3",{class:"text-slate-500 mt-4 font-medium mb-2 whitespace-nowrap"}," Voters ",-1)),os={class:"flex mb-1.5"},ls={class:"text-sm pl-2 pt-1 text-ellipsis overflow-hidden whitespace-nowrap grow"},is={class:"flex mb-1.5"},rs=k(()=>s("div",{class:"h-7 w-7"},null,-1)),as={class:"text-sm pl-2 pt-1 text-ellipsis overflow-hidden whitespace-nowrap grow"};function ds(e,o,u,m,g,l){var c,b,y,x;const _=B("VueNavigator"),v=B("Topic"),p=B("Footer");return i(),r("div",Wt,[z(_,{class:"absolute z-50"}),s("main",$t,[s("div",Jt,[Ot,w(s("input",{class:"peer hidden",type:"checkbox",id:"toggle","onUpdate:modelValue":o[0]||(o[0]=h=>e.menu=h)},null,512),[[je,e.menu]]),s("div",Qt,[s("button",{class:"border mr-2 bg-slate-50 hover:bg-slate-100 rounded-2xl pl-3 pr-4 mb-4 py-2",onClick:o[1]||(o[1]=h=>e.$router.push("/feedback"))},[Zt,f(" Go back ")]),es,s("button",{style:A(l.statusStyle(e.post)),class:"border rounded text-xs py-0.5 px-1 mb-2"},n(((b=(c=e.post)==null?void 0:c.status)==null?void 0:b.title)||"Not set"),5),ts,f(),s("span",null,n(((x=(y=e.post)==null?void 0:y.category)==null?void 0:x.title)||"Not set"),1),ss,(i(!0),r(D,null,F(l.votes,h=>{var C,M,V,L;return i(),r("div",os,[s("div",{class:"h-7 w-7 bg-cover rounded-full bg-slate-500",style:A("background-image: url("+((M=(C=h==null?void 0:h.user)==null?void 0:C[0])==null?void 0:M.picture)+")")},null,4),s("span",ls,n((L=(V=h.user)==null?void 0:V[0])==null?void 0:L.name),1)])}),256)),s("div",is,[rs,w(s("span",as," and 35 more... ",512),[[Pe,!1]])])]),z(v,{class:"bg-white m-auto grow h-full overflow-auto pt-16 lg:pt-7 relative",onPost:o[2]||(o[2]=h=>e.post=h),id:u.id},null,8,["id"]),e.menu?(i(),r("div",{key:0,class:"absolute h-full w-full",onClick:o[3]||(o[3]=h=>e.menu=!1)})):d("",!0)])]),z(p)])}const ms=Be(Xt,[["render",ds],["__scopeId","data-v-316f1584"]]);export{ms as default};
