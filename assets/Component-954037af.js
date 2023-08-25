import{V as je,F as Ye}from"./Footer-39e7bf0c.js";import{_ as E,o,c as l,b as t,g as d,n as k,d as c,t as h,F as A,j as D,p as Ie,f as We,r as M,a as L,h as B,w as _,k as z,i as Fe,l as Ue,m as Ne,v as Re,q as qe}from"./index-8a16cff2.js";import{M as Te}from"./Meta-0115915b.js";import{h as Ge}from"./moment-fbc5633a.js";import{d as Ze}from"./defaultBase64Image-ab365e89.js";const Ke={props:{id:{type:String,default:"64b1469b691f1cd6f7ad4328"}},data:()=>({fullWindow:!1,show:"split",showHistory:!1,history:null,application:null,raw:"",preview:"",webComponent:"",webComponentPreview:"",livePreview:"",livePreviewWebComponent:"",html:"",htmlWebComponent:"",htmlBase64:"",iframe:"",esm:"",esmWebComponent:"",esmBase64:""}),computed:{iframeSource(){return`https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=preview${tailwind?"-tw":""}`}},async created(){await this.init()},methods:{async init(){this.application=await this.getApplication(),this.history=await this.getHistory(),this.raw=await this.getRaw(),this.preview=await this.getPreview(this.application.tailwind)},async getApplication(){return(await fetch(`https://api.vueplay.io/types/applications/${this.id}`)).json()},async getHistory(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.id}`)).json()},async getRaw(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=vue`)).text()},async getPreview(e=!1){return(await fetch(`https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=preview${e?"-tw":""}`)).text()},async getLivePreview(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=live-preview`)).text()},async getLivePreviewWebComponent(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=live-preview-wc`)).text()},async getWebComponent(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=webcomponent`)).text()},async getWebComponentPreview(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=preview-wc`)).text()},async getHtml(e=!1){return(await fetch(`https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=html${e?"-tw":""}`)).text()},async getHtmlWebComponentPreview(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=html-wc`)).text()},async getHtmlBase64(e=!1){return(await fetch(`https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=html-base64${e?"-tw":""}`)).text()},async getIframe(e=!1){return(await fetch(`https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=iframe${e?"-tw":""}`)).text()},async getESM(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=esm`)).text()},async getESMWebComponent(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=esmwc`)).text()},async getESMBase64(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=base64`)).text()},openPreview(){window.open(`https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=preview${tailwind?"-tw":""}`,"_blank")}}},y=e=>(Ie("data-v-1cb5aad8"),e=e(),We(),e),Xe={class:"grid-cols-2 grid bg-slate-100",style:{width:"100%",height:"40px"}},Je={class:"h-full"},Oe=["disabled"],Qe=["disabled"],et=["disabled"],tt={class:"text-right h-full"},st={key:0,style:{width:"31px",height:"31px"},class:"bg-slate-200 m-1 rounded text-center inline-block",title:"Component depends on Tailwind"},it={xmlns:"http://www.w3.org/2000/svg",width:"1000",height:"1000",viewBox:"0 0 1000 1000",fill:"none",style:{width:"80%",height:"80%",padding:"10%"},class:"m-auto"},ot=y(()=>t("path",{d:"M489.5 226.499C328 231.632 280 346.999 269 409.499C283.333 386.332 328.5 335.5 395 335.5C472.5 335.5 531.5 422 567.5 449C611.237 481.803 699.123 525.115 814.5 490C906.5 462 949.167 364.332 958.5 317.999C914 378.499 846.5 414.838 763 371.999C705.5 342.499 662.5 221 489.5 226.499Z",fill:"#07B6D5"},null,-1)),lt=y(()=>t("path",{d:"M261 500.999C99.5 506.132 51.5 621.499 40.5 683.999C54.8333 660.832 100 610 166.5 610C244 610 303 696.5 339 723.5C382.737 756.303 470.623 799.615 586 764.5C678 736.5 720.667 638.832 730 592.499C685.5 652.999 618 689.338 534.5 646.499C477 616.999 434 495.5 261 500.999Z",fill:"#07B6D5"},null,-1)),at=[ot,lt],rt={xmlns:"http://www.w3.org/2000/svg",width:"92pt",height:"92pt",viewBox:"0 0 92 92",class:"mx-auto",style:{width:"80%",height:"80%",padding:"10%"}},nt=y(()=>t("defs",null,[t("clipPath",{id:"a"},[t("path",{d:"M0 .113h91.887V92H0Zm0 0"})])],-1)),dt=y(()=>t("g",{"clip-path":"url(#a)"},[t("path",{style:{stroke:"none","fill-rule":"nonzero",fill:"#100f0d","fill-opacity":"1"},d:"M90.156 41.965 50.036 1.848a5.913 5.913 0 0 0-8.368 0l-8.332 8.332 10.566 10.566a7.03 7.03 0 0 1 7.23 1.684 7.043 7.043 0 0 1 1.673 7.277l10.183 10.184a7.026 7.026 0 0 1 7.278 1.672 7.04 7.04 0 0 1 0 9.957 7.045 7.045 0 0 1-9.961 0 7.038 7.038 0 0 1-1.532-7.66l-9.5-9.497V59.36a7.04 7.04 0 0 1 1.86 11.29 7.04 7.04 0 0 1-9.957 0 7.04 7.04 0 0 1 0-9.958 7.034 7.034 0 0 1 2.308-1.539V33.926a7.001 7.001 0 0 1-2.308-1.535 7.049 7.049 0 0 1-1.516-7.7L29.242 14.273 1.734 41.777a5.918 5.918 0 0 0 0 8.371L41.855 90.27a5.92 5.92 0 0 0 8.368 0l39.933-39.934a5.925 5.925 0 0 0 0-8.371"})],-1)),ht=[nt,dt],pt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"mx-auto",style:{width:"80%",height:"80%",padding:"10%"}},ct=y(()=>t("path",{"fill-rule":"evenodd",d:"M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 01-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h2.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z","clip-rule":"evenodd"},null,-1)),ut=[ct],wt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"mx-auto",style:{width:"80%",height:"80%",padding:"10%"}},vt=y(()=>t("path",{"fill-rule":"evenodd",d:"M3.22 3.22a.75.75 0 011.06 0l3.97 3.97V4.5a.75.75 0 011.5 0V9a.75.75 0 01-.75.75H4.5a.75.75 0 010-1.5h2.69L3.22 4.28a.75.75 0 010-1.06zm17.56 0a.75.75 0 010 1.06l-3.97 3.97h2.69a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75V4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0zM3.75 15a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-2.69l-3.97 3.97a.75.75 0 01-1.06-1.06l3.97-3.97H4.5a.75.75 0 01-.75-.75zm10.5 0a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-2.69l3.97 3.97a.75.75 0 11-1.06 1.06l-3.97-3.97v2.69a.75.75 0 01-1.5 0V15z","clip-rule":"evenodd"},null,-1)),mt=[vt],ft={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"mx-auto",style:{width:"80%",height:"80%",padding:"10%"}},gt=y(()=>t("path",{"fill-rule":"evenodd",d:"M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z","clip-rule":"evenodd"},null,-1)),yt=[gt],bt={class:"flex-row flex bg-slate-50",style:{width:"100%",height:"calc(100% - 140px)"}},_t={class:"grid-cols-2 grid grow"},kt=["src"],xt={key:0,class:"relative px-4 pb-4 box-border overflow-auto h-full",style:{"max-width":"280px","min-width":"280px"}},Ct=y(()=>t("label",{for:"",class:"top-0 pt-2 pb-1 sticky w-full bg-slate-50 font-semibold inline-block mb-2"}," Git History ",-1)),$t={class:"p-2 rounded mb-2 bg-slate-100"},Ht={class:"overflow-auto bg-slate-100 p-4",style:{width:"100%",height:"100px"}},Vt={class:"py-0.5 px-3 rounded-xl bg-lime-200 inline-block"};function Mt(e,s,w,m,f,a){var g,v,p;return o(),l("div",{class:k(["bg-slate-50 rounded",e.fullWindow?"full-window":""]),style:{"max-width":"100%","max-height":"100%"}},[t("div",Xe,[t("div",Je,[t("button",{style:{height:"31px"},class:"disabled:opacity-40 px-2 bg-slate-200 m-1 rounded text-center",onClick:s[0]||(s[0]=r=>e.show="split"),disabled:e.show==="split"}," Split ",8,Oe),t("button",{style:{height:"31px"},class:"disabled:opacity-40 px-2 bg-slate-200 m-1 rounded text-center hover:bg-slate-300",onClick:s[1]||(s[1]=r=>e.show="preview"),disabled:e.show==="preview"}," Preview ",8,Qe),t("button",{style:{height:"31px"},class:"disabled:opacity-40 px-2 bg-slate-200 m-1 rounded text-center hover:bg-slate-300",onClick:s[2]||(s[2]=r=>e.show="code"),disabled:e.show==="code"}," Code ",8,et)]),t("div",tt,[(g=e.application)!=null&&g.tailwind?(o(),l("button",st,[(o(),l("svg",it,at))])):d("",!0),t("button",{style:{width:"31px",height:"31px"},class:k(["bg-slate-200 m-1 rounded text-center hover:bg-slate-300 inline-block",e.showHistory?"opacity-50":""]),title:"History",onClick:s[3]||(s[3]=r=>e.showHistory=!e.showHistory)},[(o(),l("svg",rt,ht))],2),c(),e.fullWindow?d("",!0):(o(),l("button",{key:1,style:{width:"31px",height:"31px"},class:"bg-slate-200 m-1 rounded text-center inline-block hover:bg-slate-300",title:"Full window",onClick:s[4]||(s[4]=r=>e.fullWindow=!0)},[(o(),l("svg",pt,ut))])),e.fullWindow?(o(),l("button",{key:2,style:{width:"31px",height:"31px"},class:"bg-slate-200 m-1 rounded text-center inline-block hover:bg-slate-300",title:"Close full window",onClick:s[5]||(s[5]=r=>e.fullWindow=!1)},[(o(),l("svg",wt,mt))])):d("",!0),t("button",{style:{width:"31px",height:"31px"},class:"bg-slate-200 m-1 rounded text-center inline-block hover:bg-slate-300",title:"Close full window",onClick:s[6]||(s[6]=r=>a.openPreview())},[(o(),l("svg",ft,yt))])])]),t("div",bt,[t("div",_t,[e.show==="split"||e.show==="code"?(o(),l("div",{key:0,class:k(["p-4 overflow-auto h-full",e.show!=="split"?"col-span-2":""])},[t("pre",null,[c("                "),t("code",null,`
                `+h(e.raw)+`
                `,1),c()])],2)):d("",!0),e.show==="split"||e.show==="preview"?(o(),l("div",{key:1,class:k(["p-4 overflow-auto h-full",e.show!=="split"?"col-span-2":""])},[t("iframe",{title:"",class:"bg-white h-full w-full",src:a.iframeSource},`
                    `,8,kt)],2)):d("",!0)]),e.showHistory?(o(),l("div",xt,[Ct,(o(!0),l(A,null,D(e.history,r=>(o(),l("div",$t,h(r.commit.message),1))),256))])):d("",!0)]),t("div",Ht,[(o(!0),l(A,null,D((p=(v=e.application)==null?void 0:v.analyze)==null?void 0:p.props,r=>(o(),l("div",Vt," :"+h(r==null?void 0:r.name),1))),256))])],2)}const Lt=E(Ke,[["render",Mt],["__scopeId","data-v-1cb5aad8"]]),At={inject:["io","user","login","logout"],props:{id:{type:String,default:"64b1469b691f1cd6f7ad4328"}},components:{VueSfcViewer:Lt,Meta:Te},emit:["post"],data:()=>({tailwind:!0,comment:"",edit:!1,post:null,background:Ze,moment:Ge,categories:[]}),created(){this.refresh()},methods:{async getCategories(){const e=await this.io.service("types/categories").find();this.categories=(e==null?void 0:e.data)||[]},async postComment(){await this.login()?(await this.io.service("types/comments").create({application_id:this.post._id,comment:this.comment}),await this.refresh(),this.comment="",alert("Posted!")):alert("You need to be logged in to post a comment")},async saveComment(e){await this.io.service("types/comments").patch(e._id,{comment:e.comment}),e.edit=!1,alert("Saved")},async removeComment(e){confirm("Delete comment?")&&(await this.io.service("types/comments").remove(e._id),await this.refresh(),alert("Removed!"))},async savePost(){await this.io.service("types/applications").patch(this.post._id,{title:this.post.title,description:this.post.description,icon:this.post.icon,public:this.post.public,category_id:this.post.category_id}),await this.refresh(),this.edit=!1,alert("Saved")},async remove(e){confirm("Delete component?")&&(await this.io.service("types/applications").remove(e._id),alert("Removed!"),this.$router.push("/search"))},async refresh(){this.post=await this.io.service("types/applications").get(this.id),this.getCategories(),this.$emit("post",this.post)},async myVote(e){var w;const s=await this.io.service("types/votes").find({query:{application_id:e._id,user_id:(w=this.user)==null?void 0:w._id}});return(s==null?void 0:s[0])||!1},async vote(e){if(await this.login()){const s=await this.myVote(e);s?await this.io.service("types/votes").remove(s._id):await this.io.service("types/votes").create({application_id:e._id}),await this.refreshVotes(e)}else alert("You have to be logged in to cast a vote")},async refreshVotes(e){e.votes=await this.io.service("types/votes").find({query:{application_id:e._id}})},async myLike(e){var w;const s=await this.io.service("types/likes").find({query:{comment_id:e._id,user_id:(w=this.user)==null?void 0:w._id}});return(s==null?void 0:s[0])||!1},async like(e){if(await this.login()){const s=await this.myLike(e);s?await this.io.service("types/likes").remove(s._id):await this.io.service("types/likes").create({comment_id:e._id}),await this.refreshLikes(e)}else alert("You have to be logged in to like")},async refreshLikes(e){e.likes=await this.io.service("types/likes").find({query:{comment_id:e._id}})},selectImage(){let e=document.createElement("input");e.type="file",e.multiple=!1,e.accept="image/*",e.onchange=async()=>{let w=Array.from(e.files)[0],m=new FileReader;m.readAsDataURL(w),m.onload=async f=>{this.post.icon=await this.resizeImage(f.target.result)},m.onerror=f=>{alert("Could not load file"),console.log(f)}},e.click()},resizeImage(e){return new Promise((s,w)=>{let m=1e3,f=1e3,a=document.createElement("canvas"),g=a.getContext("2d"),v=new Image;v.onload=()=>{let p=v.width,r=v.height;p>r?p>m&&(r*=m/p,p=m):r>f&&(p*=f/r,r=f),a.width=p,a.height=r,g.drawImage(v,0,0,p,r);let b=a.toDataURL("image/png",.7);s(b)},v.src=e})}}},Dt={class:"p-6 md:pt-6 pb-24"},St={class:"absolute left-0 right-0 top-0 h-16 p-2 bg-slate-50"},zt={key:1,class:"float-right mt-3 mr-4"},Bt={class:"mt-16"},Et={class:"max-w-2xl mx-auto mt-4 flex"},Pt={class:"mt-4 grow"},It={class:"flex"},Wt={class:"w-16 inline-flex"},jt={class:"h-1/2 w-full"},Yt=t("polygon",{points:"10,0 20,10 0,10"},null,-1),Ft=[Yt],Ut={class:"text-center h-1/2 w-full -mt-1"},Nt={class:"overflow-hidden text-ellipsis max-h-20 flex-col inline-flex grow"},Rt={key:0,class:"pt-2.5 text-xl font-semibold"},qt={class:"mt-4 flex"},Tt={class:"w-16 inline-flex"},Gt={class:"w-11"},Zt={class:"overflow-hidden text-ellipsis max-h-8 flex-col inline-flex grow"},Kt={class:"font-semibold mt-0.5"},Xt={class:"inline-flex w-32"},Jt=["src"],Ot={key:0,class:"max-w-2xl mx-auto mb-8 mt-2 flex"},Qt=t("div",{class:"w-16 inline-flex"},[t("div",{class:"w-16"})],-1),es={class:"grow"},ts={key:0,class:"text-gray-700 mb-3"},ss=["value"],is={class:"mt-2 flex text-gray-500"},os={class:"text-xs"},ls=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 cursor-pointer inline-flex -mt-1"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1),as={key:1,class:"text-xs ml-1"},rs=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"},null,-1),ns=[rs],ds={class:"mt-8"},hs={class:"mt-4"},ps={class:"relative"},cs=t("div",{class:"mt-10"},[t("p",{class:"text-gray-500"}," Activity Feed ")],-1),us={class:"max-w-2xl mx-auto mt-4 flex"},ws={class:"w-16 inline-flex"},vs={class:"w-11"},ms={class:"overflow-hidden text-ellipsis max-h-8 flex-col inline-flex grow"},fs={class:"font-semibold mt-0.5"},gs={class:"max-w-2xl mx-auto mb-8 mt-2 flex"},ys=t("div",{class:"w-16 inline-flex"},[t("div",{class:"w-16"})],-1),bs={class:"grow"},_s={key:0,class:"text-gray-700 mb-3"},ks=["onUpdate:modelValue"],xs=["onClick"],Cs={class:"flex text-gray-500"},$s=["onClick"],Hs=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"},null,-1),Vs=[Hs],Ms={class:"text-xs"},Ls={key:0,class:"text-xs ml-1"},As=["onClick"],Ds=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"},null,-1),Ss=[Ds],zs=["onClick"],Bs=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 cursor-pointer inline-flex -mt-0.5"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})],-1);function Es(e,s,w,m,f,a){var p,r,b,u,x,C,$,H,P,I,W,j,Y,F,U,N,R,q,T,G,Z,K,X,J,O,Q,ee,te,se,ie,oe,le,ae,re,ne,de,he,pe,ce,ue,we,ve,me,fe,ge,ye,be,_e,ke,xe;const g=M("Meta"),v=M("VueSfcViewer");return o(),l("section",Dt,[L(g,{title:(p=e.post)==null?void 0:p.title,description:(r=e.post)==null?void 0:r.description,author:(u=(b=e.post)==null?void 0:b.user)==null?void 0:u.name},null,8,["title","description","author"]),t("div",St,[(x=a.user)!=null&&x.email||($=(C=a.user)==null?void 0:C.value)!=null&&$.email?(o(),l("div",{key:0,class:"h-12 w-12 bg-cover rounded-full bg-slate-500 mx-auto float-right",style:B("background-image: url("+(((H=a.user)==null?void 0:H.picture)||((I=(P=a.user)==null?void 0:P.value)==null?void 0:I.picture))+")")},null,4)):d("",!0),(W=a.user)!=null&&W.email||(Y=(j=a.user)==null?void 0:j.value)!=null&&Y.email?(o(),l("div",zt,h(((F=a.user)==null?void 0:F.name)||((N=(U=a.user)==null?void 0:U.value)==null?void 0:N.name)),1)):d("",!0),(R=a.user)!=null&&R.email||(T=(q=a.user)==null?void 0:q.value)!=null&&T.email?(o(),l("div",{key:2,class:"float-left mt-3 ml-4 cursor-pointer text-slate-700 hover:text-slate-900 font-bold",onClick:s[0]||(s[0]=(...i)=>a.logout&&a.logout(...i))}," Logout ")):(o(),l("div",{key:3,class:"float-left mt-3 ml-4 cursor-pointer text-slate-700 hover:text-slate-900 font-bold",onClick:s[1]||(s[1]=(...i)=>a.login&&a.login(...i))}," Login "))]),t("article",Bt,[t("div",Et,[t("div",Pt,[t("div",It,[t("div",Wt,[t("div",{class:k(["border w-11 h-12 rounded-lg cursor-pointer",{"bg-emerald-50":(Z=(G=e.post)==null?void 0:G.votes)==null?void 0:Z.find(i=>{var n;return i.user_id===((n=a.user)==null?void 0:n._id)}),"border-emerald-400":(X=(K=e.post)==null?void 0:K.votes)==null?void 0:X.find(i=>{var n;return i.user_id===((n=a.user)==null?void 0:n._id)}),"hover:bg-emerald-100":(O=(J=e.post)==null?void 0:J.votes)==null?void 0:O.find(i=>{var n;return i.user_id===((n=a.user)==null?void 0:n._id)}),"hover:bg-slate-100":!((ee=(Q=e.post)==null?void 0:Q.votes)!=null&&ee.find(i=>{var n;return i.user_id===((n=a.user)==null?void 0:n._id)})),"border-emerald-400":(se=(te=e.post)==null?void 0:te.votes)==null?void 0:se.find(i=>{var n;return i.user_id===((n=a.user)==null?void 0:n._id)})}]),onClick:s[2]||(s[2]=i=>a.vote(e.post))},[t("div",jt,[(o(),l("svg",{viewBox:"0 0 20 10",class:k(["pt-2 w-5 h-5 mx-auto",{"fill-emerald-400":(oe=(ie=e.post)==null?void 0:ie.votes)==null?void 0:oe.find(i=>{var n;return i.user_id===((n=a.user)==null?void 0:n._id)}),"fill-gray-400":!((ae=(le=e.post)==null?void 0:le.votes)!=null&&ae.find(i=>{var n;return i.user_id===((n=a.user)==null?void 0:n._id)}))}])},Ft,2))]),t("div",Ut,h((ne=(re=e.post)==null?void 0:re.votes)==null?void 0:ne.length),1)],2)]),t("div",Nt,[e.edit?e.post?_((o(),l("input",{key:1,class:"pt-2.5 text-xl font-semibold","onUpdate:modelValue":s[3]||(s[3]=i=>e.post.title=i)},null,512)),[[z,e.post.title]]):d("",!0):(o(),l("h1",Rt,h((de=e.post)==null?void 0:de.title),1))])]),t("div",qt,[t("div",Tt,[t("div",Gt,[t("div",{class:"h-7 w-7 bg-cover rounded-full bg-slate-500 mx-auto",style:B("background-image: url("+((pe=(he=e.post)==null?void 0:he.user)==null?void 0:pe.picture)+")")},null,4)])]),t("div",Zt,[t("h1",Kt,h((ue=(ce=e.post)==null?void 0:ce.user)==null?void 0:ue.name),1)])])]),t("div",Xt,[(we=e.post)!=null&&we.icon?(o(),l("img",{key:0,class:"rounded w-full",src:e.post.icon||e.background},null,8,Jt)):d("",!0)])]),e.post?(o(),l("div",Ot,[Qt,t("div",es,[L(v,{style:{height:"600px"}}),e.edit?_((o(),l("textarea",{key:1,"onUpdate:modelValue":s[4]||(s[4]=i=>e.post.description=i),rows:"",cols:"",class:"rounded w-full h-32 mb-3 border",placeholder:"Description"},`
`,512)),[[z,e.post.description]]):(o(),l("p",ts,h((ve=e.post)==null?void 0:ve.description),1)),e.edit?_((o(),l("select",{key:2,"onUpdate:modelValue":s[5]||(s[5]=i=>e.post.category_id=i),class:"mb-2 w-full h-10 block max-w-full pl-4 pr-2 text-sm text-gray-900 placeholder:text-slate-500 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[(o(!0),l(A,null,D(e.categories,i=>(o(),l("option",{value:i._id},h(i.title),9,ss))),256))],512)),[[Fe,e.post.category_id]]):d("",!0),c(),e.edit?(o(),l("button",{key:3,class:"mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2",onClick:s[6]||(s[6]=(...i)=>a.selectImage&&a.selectImage(...i))}," Select icon ")):d("",!0),e.edit?(o(),l("button",{key:4,class:"mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2",onClick:s[7]||(s[7]=i=>e.post.icon="")}," Remove icon ")):d("",!0),e.edit?(o(),l("button",{key:5,class:"mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2",onClick:s[8]||(s[8]=i=>e.post.public=!e.post.public)},h((me=e.post)!=null&&me.public?"Public":"Private"),1)):d("",!0),e.edit?(o(),l("button",{key:6,class:"mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2",onClick:s[9]||(s[9]=i=>e.edit=!e.edit)}," Cancel ")):d("",!0),e.edit?(o(),l("button",{key:7,class:"bg-emerald-400 text-white hover:bg-emerald-500 shadow rounded px-2 mb-2 py-2",onClick:s[10]||(s[10]=i=>a.savePost())}," Save ")):d("",!0),t("div",is,[t("span",os,h(e.moment(e.post.createdAt).format("MMMM DD, YYYY")),1),c(),((ge=(fe=e.post)==null?void 0:fe.user)==null?void 0:ge._id)===((ye=a.user)==null?void 0:ye._id)?(o(),l("span",{key:0,class:"text-xs ml-1",onClick:s[11]||(s[11]=i=>a.remove(e.post))},[c(" · "),ls])):d("",!0),c(),!e.edit&&((_e=(be=e.post)==null?void 0:be.user)==null?void 0:_e._id)===((ke=a.user)==null?void 0:ke._id)?(o(),l("span",as,[c(" · "),(o(),l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 cursor-pointer inline-flex -mt-0.5",onClick:s[12]||(s[12]=i=>e.edit=!0)},ns))])):d("",!0)]),t("div",ds,[t("form",hs,[t("div",ps,[_(t("input",{type:"search",id:"default-search",class:"w-full h-10 block max-w-full pl-4 pr-2 text-sm text-gray-900 placeholder:text-slate-500 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Leave a comment",required:"","onUpdate:modelValue":s[13]||(s[13]=i=>e.comment=i),onKeypress:s[14]||(s[14]=Ue(Ne(i=>a.postComment(),["prevent"]),["enter"]))},null,544),[[z,e.comment]])])])]),cs])])):d("",!0)]),(o(!0),l(A,null,D((xe=e.post)==null?void 0:xe.comments,i=>{var n,Ce,$e,He,Ve,Me,Le,Ae,De,Se,ze,Be,Ee,Pe;return o(),l("article",null,[t("div",us,[t("div",ws,[t("div",vs,[t("div",{class:"h-7 w-7 bg-cover rounded-full bg-slate-500 mx-auto",style:B("background-image: url("+((Ce=(n=i==null?void 0:i.user)==null?void 0:n[0])==null?void 0:Ce.picture)+")")},null,4)])]),t("div",ms,[t("h1",fs,h((He=($e=i.user)==null?void 0:$e[0])==null?void 0:He.name),1)])]),t("div",gs,[ys,t("div",bs,[i.edit?_((o(),l("textarea",{key:1,"onUpdate:modelValue":V=>i.comment=V,rows:"",cols:"",class:"w-full h-16 mb-3 border"},`
`,8,ks)),[[z,i.comment]]):(o(),l("p",_s,h(i.comment),1)),i.edit?(o(),l("button",{key:2,class:"bg-emerald-400 text-white hover:bg-emerald-500 shadow rounded px-2 mb-2 py-2",onClick:V=>a.saveComment(i)}," Save ",8,xs)):d("",!0),t("div",Cs,[(o(),l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:k(["w-4 h-4 mr-1 cursor-pointer",{"fill-red-400":i.likes.length}]),onClick:V=>a.like(i)},Vs,10,$s)),c(),t("span",Ms,h(((Ve=i.likes)==null?void 0:Ve.length)>1?((Me=i.likes)==null?void 0:Me.length)+" likes":"")+" "+h(((Le=i.likes)==null?void 0:Le.length)===1?((Ae=i.likes)==null?void 0:Ae.length)+" like":"")+" · "+h(e.moment(i.createdAt).format("MMMM DD, YYYY")),1),c(),((Se=(De=i==null?void 0:i.user)==null?void 0:De[0])==null?void 0:Se._id)===((ze=a.user)==null?void 0:ze._id)?(o(),l("span",Ls,[c(" · "),(o(),l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 cursor-pointer inline-flex -mt-1",onClick:V=>a.removeComment(i)},Ss,8,As))])):d("",!0),c(),((Ee=(Be=i==null?void 0:i.user)==null?void 0:Be[0])==null?void 0:Ee._id)===((Pe=a.user)==null?void 0:Pe._id)&&!i.edit?(o(),l("span",{key:1,class:"text-xs ml-1",onClick:V=>i.edit=!0},[c(" · "),Bs],8,zs)):d("",!0)])])])])}),256))])}const Ps=E(At,[["render",Es]]);const Is={props:["id"],components:{VueNavigator:je,Footer:Ye,Component:Ps},data:()=>({menu:!1,post:null}),computed:{votes(){var e;return(e=this.post)==null?void 0:e.votes}}},S=e=>(Ie("data-v-a08832de"),e=e(),We(),e),Ws={class:"bg-white flex flex-col h-screen"},js={style:{width:"100%","min-height":"calc(100vh - 50px)"},class:"flex-1 relative overflow-auto"},Ys={class:"relative h-full w-full flex"},Fs=S(()=>t("label",{class:"bg-white fixed z-40 md:hidden cursor-pointer inline-flex items-center p-2 mt-16 lg:mt-4 ml-3 text-sm text-slate-900 rounded-lg",for:"toggle"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])],-1)),Us={class:"bottom-0 bg-white pt-10 md:w-96 md:p-7 md:shadow-md shadow-lg border-r border-slate-200 peer-checked:px-7 peer-checked:pt-16 peer-checked:md:pt-10 peer-checked:pb-7 duration-200 transition-all ease-in-out w-0 max-w-full z-30 peer-checked:w-80 absolute md:relative top-0 overflow-auto"},Ns=S(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-5 h-5 -mt-1 mr-1 inline"},[t("path",{"fill-rule":"evenodd",d:"M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z","clip-rule":"evenodd"})],-1)),Rs=S(()=>t("h3",{class:"text-slate-500 font-medium mb-1 whitespace-nowrap"}," Category ",-1)),qs=S(()=>t("h3",{class:"text-slate-500 mt-4 font-medium mb-2 whitespace-nowrap"}," Voters ",-1)),Ts={class:"flex mb-1.5"},Gs={class:"text-sm pl-2 pt-1 text-ellipsis overflow-hidden whitespace-nowrap grow"},Zs={class:"flex mb-1.5"},Ks=S(()=>t("div",{class:"h-7 w-7"},null,-1)),Xs={class:"text-sm pl-2 pt-1 text-ellipsis overflow-hidden whitespace-nowrap grow"};function Js(e,s,w,m,f,a){var r,b;const g=M("VueNavigator"),v=M("Component",!0),p=M("Footer");return o(),l("div",Ws,[L(g,{class:"absolute z-50"}),t("main",js,[t("div",Ys,[Fs,_(t("input",{class:"peer hidden",type:"checkbox",id:"toggle","onUpdate:modelValue":s[0]||(s[0]=u=>e.menu=u)},null,512),[[Re,e.menu]]),t("div",Us,[t("button",{class:"border mr-2 bg-slate-50 hover:bg-slate-100 rounded-2xl pl-3 pr-4 mb-4 py-2",onClick:s[1]||(s[1]=u=>e.$router.push("/search"))},[Ns,c(" Go back ")]),Rs,t("span",null,h(((b=(r=e.post)==null?void 0:r.category)==null?void 0:b.title)||"Not set"),1),qs,(o(!0),l(A,null,D(a.votes,u=>{var x,C,$,H;return o(),l("div",Ts,[t("div",{class:"h-7 w-7 bg-cover rounded-full bg-slate-500",style:B("background-image: url("+((C=(x=u==null?void 0:u.user)==null?void 0:x[0])==null?void 0:C.picture)+")")},null,4),t("span",Gs,h((H=($=u.user)==null?void 0:$[0])==null?void 0:H.name),1)])}),256)),t("div",Zs,[Ks,_(t("span",Xs," and 35 more... ",512),[[qe,!1]])])]),L(v,{class:"m-auto grow h-full overflow-auto pt-16 lg:pt-7 relative",onPost:s[2]||(s[2]=u=>e.post=u),id:w.id},null,8,["id"]),e.menu?(o(),l("div",{key:0,class:"absolute h-full w-full",onClick:s[3]||(s[3]=u=>e.menu=!1)})):d("",!0)])]),L(p)])}const ii=E(Is,[["render",Js],["__scopeId","data-v-a08832de"]]);export{ii as default};
