import{V as ze,F as De}from"./Footer-Dh_QI2-P.js";import{M as Fe}from"./Meta-BCm7FtrA.js";import{h as He}from"./moment-C5S46NFB.js";import{_ as Be,o as i,c as r,a as B,d as l,n as S,f as d,t as n,i as H,j as w,p as A,m as Ae,F as z,h as D,e as h,q as Ye,k as Ie,r as F,v as Ue,s as je}from"./index-CJMNy9Uj.js";const Ne={components:{Meta:Fe},inject:["io","user","login","logout"],emit:["post"],props:{id:{type:String,default:"64bae1b0ca444b8b5e20cd5d"}},data:()=>({comment:"",edit:!1,post:null,statuses:[],categories:[],moment:He}),created(){this.refresh()},methods:{async postComment(){await this.login()?(await this.io.service("types/feedback-comments").create({feedback_id:this.post._id,comment:this.comment}),await this.refresh(),this.comment="",alert("Posted!")):alert("You need to be logged in to post a comment")},async saveComment(e){await this.io.service("types/feedback-comments").patch(e._id,{comment:e.comment}),e.edit=!1,alert("Saved")},async removeComment(e){confirm("Delete comment?")&&(await this.io.service("types/feedback-comments").remove(e._id),await this.refresh(),alert("Removed!"))},async savePost(){await this.io.service("types/feedback").patch(this.post._id,{title:this.post.title,description:this.post.description,screenshot:this.post.screenshot,category_id:this.post.category_id,status_id:this.post.status_id}),await this.refresh(),this.edit=!1,alert("Saved")},async remove(e){confirm("Delete post?")&&(await this.io.service("types/feedback").remove(e._id),alert("Removed!"),this.$router.push("/feedback"))},async refresh(){this.post=await this.io.service("types/feedback").get(this.id),await this.getStatuses(),await this.getCategories(),this.$emit("post",this.post)},async getStatuses(){const e=await this.io.service("types/feedback-status").find();this.statuses=(e==null?void 0:e.data)||[]},async getCategories(){const e=await this.io.service("types/feedback-categories").find();this.categories=(e==null?void 0:e.data)||[]},async myVote(e){var u;const t=await this.io.service("types/feedback-votes").find({query:{feedback_id:e._id,user_id:(u=this.user)==null?void 0:u._id}});return(t==null?void 0:t[0])||!1},async vote(e){if(await this.login()){const t=await this.myVote(e);t?await this.io.service("types/feedback-votes").remove(t._id):await this.io.service("types/feedback-votes").create({feedback_id:e._id}),await this.refreshVotes(e)}else alert("You have to be logged in to cast a vote")},async refreshVotes(e){e.votes=await this.io.service("types/feedback-votes").find({query:{feedback_id:e._id}})},async myLike(e){var u;const t=await this.io.service("types/feedback-likes").find({query:{comment_id:e._id,user_id:(u=this.user)==null?void 0:u._id}});return(t==null?void 0:t[0])||!1},async like(e){if(await this.login()){const t=await this.myLike(e);t?await this.io.service("types/feedback-likes").remove(t._id):await this.io.service("types/feedback-likes").create({comment_id:e._id}),await this.refreshLikes(e)}else alert("You have to be logged in to like")},async refreshLikes(e){e.likes=await this.io.service("types/feedback-likes").find({query:{comment_id:e._id}})},selectImage(){let e=document.createElement("input");e.type="file",e.multiple=!1,e.accept="image/*",e.onchange=async()=>{let u=Array.from(e.files)[0],f=new FileReader;f.readAsDataURL(u),f.onload=async g=>{this.post.screenshot=await this.resizeImage(g.target.result)},f.onerror=g=>{alert("Could not load file"),console.log(g)}},e.click()},resizeImage(e){return new Promise((t,u)=>{let f=1e3,g=1e3,o=document.createElement("canvas"),k=o.getContext("2d"),c=new Image;c.onload=()=>{let v=c.width,m=c.height;v>m?v>f&&(m*=f/v,v=f):m>g&&(v*=g/m,m=g),o.width=v,o.height=m,k.drawImage(c,0,0,v,m);let b=o.toDataURL("image/png",.7);t(b)},c.src=e})}}},Ee={class:"p-6 md:pt-6 pb-24"},Te={class:"absolute left-0 right-0 top-0 h-16 p-2 bg-slate-50"},qe={key:1,class:"float-right mt-3 mr-4"},Pe={class:"mt-16"},Re={class:"max-w-2xl mx-auto mt-4 flex"},Ge={class:"w-16 inline-flex"},Ke={class:"h-1/2 w-full"},Xe={class:"text-center h-1/2 w-full -mt-1"},We={class:"overflow-hidden text-ellipsis max-h-20 flex-col inline-flex grow"},Je={key:0,class:"pt-2.5 text-xl font-semibold"},Oe={class:"max-w-2xl mx-auto mt-4 flex"},Qe={class:"w-16 inline-flex"},Ze={class:"w-11"},$e={class:"overflow-hidden text-ellipsis max-h-8 flex-col inline-flex grow"},et={class:"font-semibold mt-0.5"},tt={key:0,class:"max-w-2xl mx-auto mb-8 mt-2 flex"},st={class:"grow"},lt={key:0,class:"text-gray-700 mb-3"},ot=["value"],it=["value"],rt=["src"],at={class:"mt-2 flex text-gray-500"},dt={class:"text-xs"},nt={key:1,class:"text-xs ml-1"},ut={class:"mt-8"},mt={class:"mt-4"},pt={class:"relative"},ft={class:"max-w-2xl mx-auto mt-4 flex"},vt={class:"w-16 inline-flex"},ht={class:"w-11"},ct={class:"overflow-hidden text-ellipsis max-h-8 flex-col inline-flex grow"},gt={class:"font-semibold mt-0.5"},wt={class:"max-w-2xl mx-auto mb-8 mt-2 flex"},bt={class:"grow"},kt={key:0,class:"text-gray-700 mb-3"},yt=["onUpdate:modelValue"],xt=["onClick"],Ct={class:"flex text-gray-500"},_t=["onClick"],Mt={class:"text-xs"},Vt={key:0,class:"text-xs ml-1"},Lt=["onClick"],St=["onClick"];function At(e,t,u,f,g,o){var c,v,m,b,y,x,p,C,_,M,V,Y,I,U,j,N,E,T,q,P,R,G,K,X,W,J,O,Q,Z,$,ee,te,se,le,oe,ie,re,ae,de,ne,ue,me,pe,fe,ve,he;const k=F("Meta");return i(),r("section",Ee,[B(k,{title:(c=e.post)==null?void 0:c.title,description:(v=e.post)==null?void 0:v.description,author:(b=(m=e.post)==null?void 0:m.user)==null?void 0:b.name},null,8,["title","description","author"]),l("div",Te,[(y=o.user)!=null&&y.email||(p=(x=o.user)==null?void 0:x.value)!=null&&p.email?(i(),r("div",{key:0,class:"h-12 w-12 bg-cover rounded-full bg-slate-500 mx-auto float-right",style:S("background-image: url("+(((C=o.user)==null?void 0:C.picture)||((M=(_=o.user)==null?void 0:_.value)==null?void 0:M.picture))+")")},null,4)):d("",!0),(V=o.user)!=null&&V.email||(I=(Y=o.user)==null?void 0:Y.value)!=null&&I.email?(i(),r("div",qe,n(((U=o.user)==null?void 0:U.name)||((N=(j=o.user)==null?void 0:j.value)==null?void 0:N.name)),1)):d("",!0),(E=o.user)!=null&&E.email||(q=(T=o.user)==null?void 0:T.value)!=null&&q.email?(i(),r("div",{key:2,class:"float-left mt-3 ml-4 cursor-pointer text-slate-700 hover:text-slate-900 font-bold",onClick:t[0]||(t[0]=(...s)=>o.logout&&o.logout(...s))}," Logout ")):(i(),r("div",{key:3,class:"float-left mt-3 ml-4 cursor-pointer text-slate-700 hover:text-slate-900 font-bold",onClick:t[1]||(t[1]=(...s)=>o.login&&o.login(...s))}," Login "))]),l("article",Pe,[l("div",Re,[l("div",Ge,[l("div",{class:H(["border w-11 h-12 rounded-lg cursor-pointer",{"bg-emerald-50":(P=e.post)==null?void 0:P.votes.find(s=>{var a;return s.user_id===((a=o.user)==null?void 0:a._id)}),"border-emerald-400":(R=e.post)==null?void 0:R.votes.find(s=>{var a;return s.user_id===((a=o.user)==null?void 0:a._id)}),"hover:bg-emerald-100":(G=e.post)==null?void 0:G.votes.find(s=>{var a;return s.user_id===((a=o.user)==null?void 0:a._id)}),"hover:bg-slate-100":!((K=e.post)!=null&&K.votes.find(s=>{var a;return s.user_id===((a=o.user)==null?void 0:a._id)})),"border-emerald-400":(X=e.post)==null?void 0:X.votes.find(s=>{var a;return s.user_id===((a=o.user)==null?void 0:a._id)})}]),onClick:t[2]||(t[2]=s=>o.vote(e.post))},[l("div",Ke,[(i(),r("svg",{viewBox:"0 0 20 10",class:H(["pt-2 w-5 h-5 mx-auto",{"fill-emerald-400":(W=e.post)==null?void 0:W.votes.find(s=>{var a;return s.user_id===((a=o.user)==null?void 0:a._id)}),"fill-gray-400":!((J=e.post)!=null&&J.votes.find(s=>{var a;return s.user_id===((a=o.user)==null?void 0:a._id)}))}])},t[15]||(t[15]=[l("polygon",{points:"10,0 20,10 0,10"},null,-1)]),2))]),l("div",Xe,n((Q=(O=e.post)==null?void 0:O.votes)==null?void 0:Q.length),1)],2)]),l("div",We,[e.edit?e.post?w((i(),r("input",{key:1,class:"pt-2.5 text-xl font-semibold","onUpdate:modelValue":t[3]||(t[3]=s=>e.post.title=s)},null,512)),[[A,e.post.title]]):d("",!0):(i(),r("h1",Je,n((Z=e.post)==null?void 0:Z.title),1))])]),l("div",Oe,[l("div",Qe,[l("div",Ze,[l("div",{class:"h-7 w-7 bg-cover rounded-full bg-slate-500 mx-auto",style:S("background-image: url("+((ee=($=e.post)==null?void 0:$.user)==null?void 0:ee.picture)+")")},null,4)])]),l("div",$e,[l("h1",et,n((se=(te=e.post)==null?void 0:te.user)==null?void 0:se.name),1)])]),e.post?(i(),r("div",tt,[t[23]||(t[23]=l("div",{class:"w-16 inline-flex"},[l("div",{class:"w-16"})],-1)),l("div",st,[e.edit?w((i(),r("textarea",{key:1,"onUpdate:modelValue":t[4]||(t[4]=s=>e.post.description=s),rows:"",cols:"",class:"rounded w-full h-32 mb-3 border"},"",512)),[[A,e.post.description]]):(i(),r("p",lt,n((le=e.post)==null?void 0:le.description),1)),e.edit&&((ie=(oe=o.user)==null?void 0:oe.permissions)!=null&&ie.includes("admin"))?w((i(),r("select",{key:2,"onUpdate:modelValue":t[5]||(t[5]=s=>e.post.status_id=s),class:"mb-2 w-full h-10 block max-w-full pl-4 pr-2 text-sm text-gray-900 placeholder:text-slate-500 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[(i(!0),r(z,null,D(e.statuses,s=>(i(),r("option",{value:s._id},n(s.title),9,ot))),256))],512)),[[Ae,e.post.status_id]]):d("",!0),e.edit?w((i(),r("select",{key:3,"onUpdate:modelValue":t[6]||(t[6]=s=>e.post.category_id=s),class:"mb-2 w-full h-10 block max-w-full pl-4 pr-2 text-sm text-gray-900 placeholder:text-slate-500 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[(i(!0),r(z,null,D(e.categories,s=>(i(),r("option",{value:s._id},n(s.title),9,it))),256))],512)),[[Ae,e.post.category_id]]):d("",!0),(re=e.post)!=null&&re.screenshot?(i(),r("img",{key:4,class:"rounded w-full mb-4",src:e.post.screenshot},null,8,rt)):d("",!0),t[21]||(t[21]=h()),e.edit?(i(),r("button",{key:5,class:"mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2",onClick:t[7]||(t[7]=(...s)=>o.selectImage&&o.selectImage(...s))}," Select screenshot ")):d("",!0),e.edit?(i(),r("button",{key:6,class:"mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2",onClick:t[8]||(t[8]=s=>e.post.screenshot="")}," Remove screenshot ")):d("",!0),e.edit?(i(),r("button",{key:7,class:"mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2",onClick:t[9]||(t[9]=s=>e.edit=!1)}," Cancel ")):d("",!0),e.edit?(i(),r("button",{key:8,class:"bg-emerald-400 text-white hover:bg-emerald-500 shadow rounded px-2 mb-2 py-2",onClick:t[10]||(t[10]=s=>o.savePost())}," Save ")):d("",!0),l("div",at,[l("span",dt,n(e.moment(e.post.createdAt).format("MMMM DD, YYYY")),1),t[19]||(t[19]=h()),((de=(ae=e.post)==null?void 0:ae.user)==null?void 0:de._id)===((ne=o.user)==null?void 0:ne._id)?(i(),r("span",{key:0,class:"text-xs ml-1",onClick:t[11]||(t[11]=s=>o.remove(e.post))},t[16]||(t[16]=[h(" · "),l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 cursor-pointer inline-flex -mt-1"},[l("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1)]))):d("",!0),t[20]||(t[20]=h()),!e.edit&&(((me=(ue=e.post)==null?void 0:ue.user)==null?void 0:me._id)===((pe=o.user)==null?void 0:pe._id)||(ve=(fe=o.user)==null?void 0:fe.permissions)!=null&&ve.includes("admin"))?(i(),r("span",nt,[t[18]||(t[18]=h(" · ")),(i(),r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 cursor-pointer inline-flex -mt-0.5",onClick:t[12]||(t[12]=s=>e.edit=!0)},t[17]||(t[17]=[l("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"},null,-1)])))])):d("",!0)]),l("div",ut,[l("form",mt,[l("div",pt,[w(l("input",{type:"search",id:"default-search",class:"w-full h-10 block max-w-full pl-4 pr-2 text-sm text-gray-900 placeholder:text-slate-500 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Leave a comment",required:"","onUpdate:modelValue":t[13]||(t[13]=s=>e.comment=s),onKeypress:t[14]||(t[14]=Ye(Ie(s=>o.postComment(),["prevent"]),["enter"]))},null,544),[[A,e.comment]])])])]),t[22]||(t[22]=l("div",{class:"mt-10"},[l("p",{class:"text-gray-500"}," Activity Feed ")],-1))])])):d("",!0)]),(i(!0),r(z,null,D((he=e.post)==null?void 0:he.comments,s=>{var a,ce,ge,we,be,ke,ye,xe,Ce,_e,Me,Ve,Le,Se;return i(),r("article",null,[l("div",ft,[l("div",vt,[l("div",ht,[l("div",{class:"h-7 w-7 bg-cover rounded-full bg-slate-500 mx-auto",style:S("background-image: url("+((ce=(a=s==null?void 0:s.user)==null?void 0:a[0])==null?void 0:ce.picture)+")")},null,4)])]),l("div",ct,[l("h1",gt,n((we=(ge=s.user)==null?void 0:ge[0])==null?void 0:we.name),1)])]),l("div",wt,[t[31]||(t[31]=l("div",{class:"w-16 inline-flex"},[l("div",{class:"w-16"})],-1)),l("div",bt,[s.edit?w((i(),r("textarea",{key:1,"onUpdate:modelValue":L=>s.comment=L,rows:"",cols:"",class:"w-full h-16 mb-3 border"},"",8,yt)),[[A,s.comment]]):(i(),r("p",kt,n(s.comment),1)),s.edit?(i(),r("button",{key:2,class:"bg-emerald-400 text-white hover:bg-emerald-500 shadow rounded px-2 mb-2 py-2",onClick:L=>o.saveComment(s)}," Save ",8,xt)):d("",!0),l("div",Ct,[(i(),r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:H(["w-4 h-4 mr-1 cursor-pointer",{"fill-red-400":s.likes.length}]),onClick:L=>o.like(s)},t[24]||(t[24]=[l("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"},null,-1)]),10,_t)),t[28]||(t[28]=h()),l("span",Mt,n(((be=s.likes)==null?void 0:be.length)>1?((ke=s.likes)==null?void 0:ke.length)+" likes":"")+" "+n(((ye=s.likes)==null?void 0:ye.length)===1?((xe=s.likes)==null?void 0:xe.length)+" like":"")+" · "+n(e.moment(s.createdAt).format("MMMM DD, YYYY")),1),t[29]||(t[29]=h()),((_e=(Ce=s==null?void 0:s.user)==null?void 0:Ce[0])==null?void 0:_e._id)===((Me=o.user)==null?void 0:Me._id)?(i(),r("span",Vt,[t[26]||(t[26]=h(" · ")),(i(),r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 cursor-pointer inline-flex -mt-1",onClick:L=>o.removeComment(s)},t[25]||(t[25]=[l("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"},null,-1)]),8,Lt))])):d("",!0),t[30]||(t[30]=h()),((Le=(Ve=s==null?void 0:s.user)==null?void 0:Ve[0])==null?void 0:Le._id)===((Se=o.user)==null?void 0:Se._id)&&!s.edit?(i(),r("span",{key:1,class:"text-xs ml-1",onClick:L=>s.edit=!0},t[27]||(t[27]=[h(" · "),l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 cursor-pointer inline-flex -mt-0.5"},[l("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})],-1)]),8,St)):d("",!0)])])])])}),256))])}const Bt=Be(Ne,[["render",At]]),zt={props:["id"],components:{VueNavigator:ze,Footer:De,Topic:Bt},data:()=>({menu:!1,post:null}),computed:{votes(){var e;return(e=this.post)==null?void 0:e.votes}},methods:{statusStyle(e){var t,u,f;return{color:((t=e==null?void 0:e.status)==null?void 0:t.foregroundColor)||"#333",backgroundColor:((u=e==null?void 0:e.status)==null?void 0:u.backgroundColor)||"#F8FAFC",borderColor:((f=e==null?void 0:e.status)==null?void 0:f.foregroundColor)||"#E5E7EB"}}}},Dt={class:"bg-white flex flex-col h-screen"},Ft={style:{width:"100%","min-height":"calc(100vh - 50px)"},class:"flex-1 relative overflow-auto"},Ht={class:"relative h-full w-full flex"},Yt={class:"bottom-0 bg-white pt-10 md:w-96 md:p-7 md:shadow-md shadow-lg border-r border-slate-200 peer-checked:px-7 peer-checked:pt-16 peer-checked:md:pt-10 peer-checked:pb-7 duration-200 transition-all ease-in-out w-0 max-w-full z-30 peer-checked:w-80 absolute md:relative top-0 overflow-auto"},It={class:"flex mb-1.5"},Ut={class:"text-sm pl-2 pt-1 text-ellipsis overflow-hidden whitespace-nowrap grow"},jt={class:"flex mb-1.5"},Nt={class:"text-sm pl-2 pt-1 text-ellipsis overflow-hidden whitespace-nowrap grow"};function Et(e,t,u,f,g,o){var m,b,y,x;const k=F("VueNavigator"),c=F("Topic"),v=F("Footer");return i(),r("div",Dt,[B(k,{class:"absolute z-50"}),l("main",Ft,[l("div",Ht,[t[10]||(t[10]=l("label",{class:"bg-white fixed z-40 md:hidden cursor-pointer inline-flex items-center p-2 mt-16 lg:mt-4 ml-3 text-sm text-slate-900 rounded-lg",for:"toggle"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[l("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])],-1)),w(l("input",{class:"peer hidden",type:"checkbox",id:"toggle","onUpdate:modelValue":t[0]||(t[0]=p=>e.menu=p)},null,512),[[Ue,e.menu]]),l("div",Yt,[l("button",{class:"border mr-2 bg-slate-50 hover:bg-slate-100 rounded-2xl pl-3 pr-4 mb-4 py-2",onClick:t[1]||(t[1]=p=>e.$router.push("/feedback"))},t[4]||(t[4]=[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-5 h-5 -mt-1 mr-1 inline"},[l("path",{"fill-rule":"evenodd",d:"M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z","clip-rule":"evenodd"})],-1),h(" Go back ")])),t[6]||(t[6]=l("h3",{class:"text-slate-500 font-medium mb-1 whitespace-nowrap"}," Status ",-1)),l("button",{style:S(o.statusStyle(e.post)),class:"border rounded text-xs py-0.5 px-1 mb-2"},n(((b=(m=e.post)==null?void 0:m.status)==null?void 0:b.title)||"Not set"),5),t[7]||(t[7]=l("h3",{class:"text-slate-500 font-medium mb-1 whitespace-nowrap"}," Category ",-1)),t[8]||(t[8]=h()),l("span",null,n(((x=(y=e.post)==null?void 0:y.category)==null?void 0:x.title)||"Not set"),1),t[9]||(t[9]=l("h3",{class:"text-slate-500 mt-4 font-medium mb-2 whitespace-nowrap"}," Voters ",-1)),(i(!0),r(z,null,D(o.votes,p=>{var C,_,M,V;return i(),r("div",It,[l("div",{class:"h-7 w-7 bg-cover rounded-full bg-slate-500",style:S("background-image: url("+((_=(C=p==null?void 0:p.user)==null?void 0:C[0])==null?void 0:_.picture)+")")},null,4),l("span",Ut,n((V=(M=p.user)==null?void 0:M[0])==null?void 0:V.name),1)])}),256)),l("div",jt,[t[5]||(t[5]=l("div",{class:"h-7 w-7"},null,-1)),w(l("span",Nt," and 35 more... ",512),[[je,!1]])])]),B(c,{class:"bg-white m-auto grow h-full overflow-auto pt-16 lg:pt-7 relative",onPost:t[2]||(t[2]=p=>e.post=p),id:u.id},null,8,["id"]),e.menu?(i(),r("div",{key:0,class:"absolute h-full w-full",onClick:t[3]||(t[3]=p=>e.menu=!1)})):d("",!0)])]),B(v)])}const Gt=Be(zt,[["render",Et],["__scopeId","data-v-316f1584"]]);export{Gt as default};