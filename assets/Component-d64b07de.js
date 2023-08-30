import{V as Ue,F as Ne}from"./Footer-87cff1c5.js";import{loadTheme as Re,loadGrammars as Fe}from"https://cdn.jsdelivr.net/npm/monaco-volar@0.4.0/+esm";import*as I from"https://cdn.jsdelivr.net/npm/monaco-editor-core@0.41.0/+esm";import*as Te from"https://cdn.jsdelivr.net/npm/onigasm@2.2.5/+esm";import qe from"https://cdn.jsdelivr.net/npm/moment@2.29.4/+esm";import{_ as U,o,c as l,b as t,w as b,q as W,g as d,n as L,d as f,F as H,j as M,t as p,p as We,f as Ye,r as E,a as P,h as Y,k as j,i as Oe,l as Ge,m as Ze,v as Ke}from"./index-bf449408.js";import{M as Xe}from"./Meta-97c67abf.js";import{h as Je}from"./moment-fbc5633a.js";import{d as Qe}from"./defaultBase64Image-ab365e89.js";const et={inject:["io"],props:{id:{type:String,default:"64b1469b691f1cd6f7ad4328"}},data:()=>({theme:null,identifier:null,moment:qe,fullWindow:!1,show:"preview",showHistory:!1,history:null,application:null,raw:"",preview:"",webComponent:"",webComponentPreview:"",livePreview:"",livePreviewWebComponent:"",html:"",htmlWebComponent:"",htmlBase64:"",iframe:"",esm:"",esmWebComponent:"",esmBase64:""}),computed:{iframeSource(){var e;return`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=preview${(e=this.application)!=null&&e.tailwind?"-tw":""}`}},async created(){window.MonacoEnvironment||(window.MonacoEnvironment={async getWorker(m,g){return new Worker(URL.createObjectURL(new Blob([`
                            const process = { env: { NODE_ENV: 'development' } }
                            ${await(await fetch("https://cdn.jsdelivr.net/npm/monaco-volar@0.4.0/dist/worker/vue.worker.js")).text()}
                        `],{type:"text/javascript"})))}},await Te.loadWASM("https://cdn.jsdelivr.net/npm/onigasm@2.2.5/lib/onigasm.wasm")),this.theme=await Re(I.editor);const s=new URLSearchParams(window.location.search).get("id");if(s?this.identifier=s:this.identifier=this.id,await this.init(),!this.io)return;const h=this.io.service("types/applications");h.on("updated",m=>{String(m._id)===String(this.identifier)&&this.init()}),h.on("patched",m=>{String(m._id)===String(this.identifier)&&this.init()})},methods:{async init(){this.application=await this.getApplication(),this.history=await this.getHistory(),this.raw=await this.getRaw(),this.preview=await this.getPreview(this.application.tailwind);const e=I.editor.createModel(this.raw,"vue");let s=I.editor.create(this.$refs.editor,{theme:this.theme,model:e,selectOnLineNumbers:!0,automaticLayout:!0,autoIndent:!0,formatOnPaste:!0,formatOnType:!0});await Fe(I,s),s.onDidChangeModelContent(()=>{this.raw=s.getValue(),console.log("value changed",this.raw)}),this.$nextTick(()=>{s.getAction("editor.action.formatDocument").run()})},async getApplication(){return(await fetch(`https://api.vueplay.io/types/applications/${this.identifier}`)).json()},async getHistory(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}`)).json()},async getRaw(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=vue`)).text()},async getPreview(e=!1){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=preview${e?"-tw":""}`)).text()},async getLivePreview(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=live-preview`)).text()},async getLivePreviewWebComponent(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=live-preview-wc`)).text()},async getWebComponent(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=webcomponent`)).text()},async getWebComponentPreview(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=preview-wc`)).text()},async getHtml(e=!1){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=html${e?"-tw":""}`)).text()},async getHtmlWebComponentPreview(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=html-wc`)).text()},async getHtmlBase64(e=!1){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=html-base64${e?"-tw":""}`)).text()},async getIframe(e=!1){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=iframe${e?"-tw":""}`)).text()},async getESM(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=esm`)).text()},async getESMWebComponent(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=esmwc`)).text()},async getESMBase64(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=base64`)).text()},openPreview(e){window.open(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=preview${e?"-tw":""}`,"_blank")}}},V=e=>(We("data-v-9efb022e"),e=e(),Ye(),e),tt={class:"grid-cols-2 grid bg-slate-100",style:{width:"100%",height:"36px"}},st={class:"h-full"},it=["disabled"],ot=["disabled"],lt=["disabled"],at={class:"text-right h-full"},rt={key:0,style:{width:"31px",height:"31px"},class:"bg-slate-200 m-0.5 rounded text-center inline-block",title:"Component depends on Tailwind"},nt={xmlns:"http://www.w3.org/2000/svg",width:"1000",height:"1000",viewBox:"0 0 1000 1000",fill:"none",style:{width:"80%",height:"80%",padding:"10%"},class:"m-auto"},dt=V(()=>t("path",{d:"M489.5 226.499C328 231.632 280 346.999 269 409.499C283.333 386.332 328.5 335.5 395 335.5C472.5 335.5 531.5 422 567.5 449C611.237 481.803 699.123 525.115 814.5 490C906.5 462 949.167 364.332 958.5 317.999C914 378.499 846.5 414.838 763 371.999C705.5 342.499 662.5 221 489.5 226.499Z",fill:"#07B6D5"},null,-1)),pt=V(()=>t("path",{d:"M261 500.999C99.5 506.132 51.5 621.499 40.5 683.999C54.8333 660.832 100 610 166.5 610C244 610 303 696.5 339 723.5C382.737 756.303 470.623 799.615 586 764.5C678 736.5 720.667 638.832 730 592.499C685.5 652.999 618 689.338 534.5 646.499C477 616.999 434 495.5 261 500.999Z",fill:"#07B6D5"},null,-1)),ht=[dt,pt],ct={xmlns:"http://www.w3.org/2000/svg",width:"92pt",height:"92pt",viewBox:"0 0 92 92",class:"mx-auto",style:{width:"80%",height:"80%",padding:"10%"}},ut=V(()=>t("defs",null,[t("clipPath",{id:"a"},[t("path",{d:"M0 .113h91.887V92H0Zm0 0"})])],-1)),mt=V(()=>t("g",{"clip-path":"url(#a)"},[t("path",{style:{stroke:"none","fill-rule":"nonzero",fill:"#100f0d","fill-opacity":"1"},d:"M90.156 41.965 50.036 1.848a5.913 5.913 0 0 0-8.368 0l-8.332 8.332 10.566 10.566a7.03 7.03 0 0 1 7.23 1.684 7.043 7.043 0 0 1 1.673 7.277l10.183 10.184a7.026 7.026 0 0 1 7.278 1.672 7.04 7.04 0 0 1 0 9.957 7.045 7.045 0 0 1-9.961 0 7.038 7.038 0 0 1-1.532-7.66l-9.5-9.497V59.36a7.04 7.04 0 0 1 1.86 11.29 7.04 7.04 0 0 1-9.957 0 7.04 7.04 0 0 1 0-9.958 7.034 7.034 0 0 1 2.308-1.539V33.926a7.001 7.001 0 0 1-2.308-1.535 7.049 7.049 0 0 1-1.516-7.7L29.242 14.273 1.734 41.777a5.918 5.918 0 0 0 0 8.371L41.855 90.27a5.92 5.92 0 0 0 8.368 0l39.933-39.934a5.925 5.925 0 0 0 0-8.371"})],-1)),wt=[ut,mt],vt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"mx-auto",style:{width:"80%",height:"80%",padding:"10%"}},ft=V(()=>t("path",{"fill-rule":"evenodd",d:"M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z","clip-rule":"evenodd"},null,-1)),gt=[ft],yt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"mx-auto",style:{width:"80%",height:"80%",padding:"10%"}},bt=V(()=>t("path",{"fill-rule":"evenodd",d:"M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 01-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h2.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z","clip-rule":"evenodd"},null,-1)),_t=[bt],kt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"mx-auto",style:{width:"80%",height:"80%",padding:"10%"}},xt=V(()=>t("path",{"fill-rule":"evenodd",d:"M3.22 3.22a.75.75 0 011.06 0l3.97 3.97V4.5a.75.75 0 011.5 0V9a.75.75 0 01-.75.75H4.5a.75.75 0 010-1.5h2.69L3.22 4.28a.75.75 0 010-1.06zm17.56 0a.75.75 0 010 1.06l-3.97 3.97h2.69a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75V4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0zM3.75 15a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-2.69l-3.97 3.97a.75.75 0 01-1.06-1.06l3.97-3.97H4.5a.75.75 0 01-.75-.75zm10.5 0a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-2.69l3.97 3.97a.75.75 0 11-1.06 1.06l-3.97-3.97v2.69a.75.75 0 01-1.5 0V15z","clip-rule":"evenodd"},null,-1)),Ct=[xt],$t={class:"flex-row flex bg-slate-50",style:{width:"100%",height:"calc(100% - 140px)"}},Ht={class:"grid-cols-2 grid grow"},Mt={class:"editor",ref:"editor"},Vt=["src"],Lt={key:0,class:"relative px-4 pb-4 box-border overflow-auto h-full",style:{"max-width":"280px","min-width":"280px"}},Dt=V(()=>t("label",{for:"",class:"top-0 pt-2 pb-1 sticky w-full bg-slate-50 font-semibold inline-block mb-2"}," Git History ",-1)),At={class:"p-2 rounded mb-2 bg-slate-100"},St={class:"overflow-auto bg-slate-100 p-4",style:{width:"100%",height:"100px"}},zt={class:"bg-rose-200 py-0.5 mr-1 mb-1 px-3 rounded-xl inline-block",title:"Property"},Et={class:"bg-violet-200 mr-1 mb-1 py-0.5 px-3 rounded-xl inline-block",title:"Method"},Pt={class:"bg-emerald-200 mr-1 mb-1 py-0.5 px-3 rounded-xl inline-block",title:"Injection"},Bt={class:"bg-purple-200 mr-1 mb-1 py-0.5 px-3 rounded-xl inline-block"};function It(e,s,h,m,g,a){var _,v,w,c,y,u,k,x,C;return o(),l("div",{class:L(["bg-slate-50 rounded",e.fullWindow?"full-window":""]),style:{"max-width":"100%","max-height":"100%"}},[t("div",tt,[t("div",st,[b(t("button",{style:{height:"31px"},class:"px-1 text-sm disabled:opacity-40 bg-slate-200 m-0.5 rounded text-center",onClick:s[0]||(s[0]=r=>e.show="split"),disabled:e.show==="split"}," Split ",8,it),[[W,e.fullWindow]]),t("button",{style:{height:"31px"},class:"px-1 text-sm disabled:opacity-40 bg-slate-200 m-0.5 rounded text-center hover:bg-slate-300",onClick:s[1]||(s[1]=r=>e.show="preview"),disabled:e.show==="preview"}," Preview ",8,ot),t("button",{style:{height:"31px"},class:"px-1 text-sm disabled:opacity-40 bg-slate-200 m-0.5 rounded text-center hover:bg-slate-300",onClick:s[2]||(s[2]=r=>e.show="code"),disabled:e.show==="code"}," Code ",8,lt)]),t("div",at,[(_=e.application)!=null&&_.tailwind?(o(),l("button",rt,[(o(),l("svg",nt,ht))])):d("",!0),t("button",{style:{width:"31px",height:"31px"},class:L(["bg-slate-200 m-0.5 mr-0 rounded text-center hover:bg-slate-300 inline-block",e.showHistory?"opacity-50":""]),title:"History",onClick:s[3]||(s[3]=r=>e.showHistory=!e.showHistory)},[(o(),l("svg",ct,wt))],2),f(),t("button",{style:{width:"31px",height:"31px"},class:"bg-slate-200 m-0.5 ml-0 rounded text-center inline-block hover:bg-slate-300",title:"Close full window",onClick:s[4]||(s[4]=r=>{var $;return a.openPreview(($=e.application)==null?void 0:$.tailwind)})},[(o(),l("svg",vt,gt))]),e.fullWindow?d("",!0):(o(),l("button",{key:1,style:{width:"31px",height:"31px"},class:"bg-slate-200 m-0.5 rounded text-center inline-block hover:bg-slate-300",title:"Full window",onClick:s[5]||(s[5]=r=>e.fullWindow=!0)},[(o(),l("svg",yt,_t))])),e.fullWindow?(o(),l("button",{key:2,style:{width:"31px",height:"31px"},class:"bg-slate-200 m-0.5 rounded text-center inline-block hover:bg-slate-300",title:"Close full window",onClick:s[6]||(s[6]=r=>e.fullWindow=!1)},[(o(),l("svg",kt,Ct))])):d("",!0)])]),t("div",$t,[t("div",Ht,[b(t("div",{class:L(["p-4 overflow-auto h-full",e.show!=="split"?"col-span-2":""])},[t("div",Mt,null,512)],2),[[W,e.show==="split"||e.show==="code"]]),b(t("div",{class:L(["p-1 overflow-auto h-full",e.show!=="split"?"col-span-2":""])},[t("iframe",{title:"",class:"bg-white h-full w-full",src:a.iframeSource},`
                    `,8,Vt)],2),[[W,e.show==="split"||e.show==="preview"]])]),e.showHistory?(o(),l("div",Lt,[Dt,(o(!0),l(H,null,M(e.history,r=>{var $,D,A,S;return o(),l("div",At,p(r.commit.message)+" - "+p(e.moment.unix(((D=($=r.commit)==null?void 0:$.author)==null?void 0:D.timestamp)||((S=(A=r.commit)==null?void 0:A.committer)==null?void 0:S.timestamp)).format("DD.MM.YYYY")),1)}),256))])):d("",!0)]),t("div",St,[(o(!0),l(H,null,M((w=(v=e.application)==null?void 0:v.analyze)==null?void 0:w.props,r=>(o(),l("div",zt," :"+p(r==null?void 0:r.name),1))),256)),(o(!0),l(H,null,M((y=(c=e.application)==null?void 0:c.analyze)==null?void 0:y.methods,r=>(o(),l("div",Et,p(r)+"() ",1))),256)),(o(!0),l(H,null,M((k=(u=e.application)==null?void 0:u.analyze)==null?void 0:k.inject,r=>(o(),l("div",Pt,p(r),1))),256)),(o(!0),l(H,null,M((C=(x=e.application)==null?void 0:x.analyze)==null?void 0:C.emits,r=>(o(),l("div",Bt," @"+p(r),1))),256))])],2)}const jt=U(et,[["render",It],["__scopeId","data-v-9efb022e"]]),Wt={inject:["io","user","login","logout"],props:{id:{type:String,default:"64b1469b691f1cd6f7ad4328"}},components:{VueSfcViewer:jt,Meta:Xe},emit:["post"],data:()=>({tailwind:!0,comment:"",edit:!1,post:null,background:Qe,moment:Je,categories:[]}),created(){this.refresh()},methods:{async getCategories(){const e=await this.io.service("types/categories").find();this.categories=(e==null?void 0:e.data)||[]},async postComment(){await this.login()?(await this.io.service("types/comments").create({application_id:this.post._id,comment:this.comment}),await this.refresh(),this.comment="",alert("Posted!")):alert("You need to be logged in to post a comment")},async saveComment(e){await this.io.service("types/comments").patch(e._id,{comment:e.comment}),e.edit=!1,alert("Saved")},async removeComment(e){confirm("Delete comment?")&&(await this.io.service("types/comments").remove(e._id),await this.refresh(),alert("Removed!"))},async savePost(){await this.io.service("types/applications").patch(this.post._id,{title:this.post.title,description:this.post.description,icon:this.post.icon,public:this.post.public,category_id:this.post.category_id}),await this.refresh(),this.edit=!1,alert("Saved")},async remove(e){confirm("Delete component?")&&(await this.io.service("types/applications").remove(e._id),alert("Removed!"),this.$router.push("/search"))},async refresh(){this.post=await this.io.service("types/applications").get(this.id),this.getCategories(),this.$emit("post",this.post)},async myVote(e){var h;const s=await this.io.service("types/votes").find({query:{application_id:e._id,user_id:(h=this.user)==null?void 0:h._id}});return(s==null?void 0:s[0])||!1},async vote(e){if(await this.login()){const s=await this.myVote(e);s?await this.io.service("types/votes").remove(s._id):await this.io.service("types/votes").create({application_id:e._id}),await this.refreshVotes(e)}else alert("You have to be logged in to cast a vote")},async refreshVotes(e){e.votes=await this.io.service("types/votes").find({query:{application_id:e._id}})},async myLike(e){var h;const s=await this.io.service("types/likes").find({query:{comment_id:e._id,user_id:(h=this.user)==null?void 0:h._id}});return(s==null?void 0:s[0])||!1},async like(e){if(await this.login()){const s=await this.myLike(e);s?await this.io.service("types/likes").remove(s._id):await this.io.service("types/likes").create({comment_id:e._id}),await this.refreshLikes(e)}else alert("You have to be logged in to like")},async refreshLikes(e){e.likes=await this.io.service("types/likes").find({query:{comment_id:e._id}})},selectImage(){let e=document.createElement("input");e.type="file",e.multiple=!1,e.accept="image/*",e.onchange=async()=>{let h=Array.from(e.files)[0],m=new FileReader;m.readAsDataURL(h),m.onload=async g=>{this.post.icon=await this.resizeImage(g.target.result)},m.onerror=g=>{alert("Could not load file"),console.log(g)}},e.click()},resizeImage(e){return new Promise((s,h)=>{let m=1e3,g=1e3,a=document.createElement("canvas"),_=a.getContext("2d"),v=new Image;v.onload=()=>{let w=v.width,c=v.height;w>c?w>m&&(c*=m/w,w=m):c>g&&(w*=g/c,c=g),a.width=w,a.height=c,_.drawImage(v,0,0,w,c);let y=a.toDataURL("image/png",.7);s(y)},v.src=e})}}},Yt={class:"p-6 md:pt-6 pb-24"},Ut={class:"absolute left-0 right-0 top-0 h-16 p-2 bg-slate-50"},Nt={key:1,class:"float-right mt-3 mr-4"},Rt={class:"mt-16"},Ft={class:"max-w-2xl mx-auto mt-4 flex"},Tt={class:"mt-4 grow"},qt={class:"flex"},Ot={class:"w-16 inline-flex"},Gt={class:"h-1/2 w-full"},Zt=t("polygon",{points:"10,0 20,10 0,10"},null,-1),Kt=[Zt],Xt={class:"text-center h-1/2 w-full -mt-1"},Jt={class:"overflow-hidden text-ellipsis max-h-20 flex-col inline-flex grow"},Qt={key:0,class:"pt-2.5 text-xl font-semibold"},es={class:"mt-4 flex"},ts={class:"w-16 inline-flex"},ss={class:"w-11"},is={class:"overflow-hidden text-ellipsis max-h-8 flex-col inline-flex grow"},os={class:"font-semibold mt-0.5"},ls={class:"inline-flex w-32"},as=["src"],rs={key:0,class:"max-w-2xl mx-auto mb-8 mt-2 flex"},ns=t("div",{class:"w-16 inline-flex"},[t("div",{class:"w-16"})],-1),ds={class:"grow"},ps={key:0,class:"text-gray-700 mb-3"},hs=["value"],cs={class:"mt-2 flex text-gray-500"},us={class:"text-xs"},ms=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 cursor-pointer inline-flex -mt-1"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1),ws={key:1,class:"text-xs ml-1"},vs=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"},null,-1),fs=[vs],gs={class:"mt-8"},ys={class:"mt-4"},bs={class:"relative"},_s=t("div",{class:"mt-10"},[t("p",{class:"text-gray-500"}," Activity Feed... ")],-1),ks={class:"max-w-2xl mx-auto mt-4 flex"},xs={class:"w-16 inline-flex"},Cs={class:"w-11"},$s={class:"overflow-hidden text-ellipsis max-h-8 flex-col inline-flex grow"},Hs={class:"font-semibold mt-0.5"},Ms={class:"max-w-2xl mx-auto mb-8 mt-2 flex"},Vs=t("div",{class:"w-16 inline-flex"},[t("div",{class:"w-16"})],-1),Ls={class:"grow"},Ds={key:0,class:"text-gray-700 mb-3"},As=["onUpdate:modelValue"],Ss=["onClick"],zs={class:"flex text-gray-500"},Es=["onClick"],Ps=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"},null,-1),Bs=[Ps],Is={class:"text-xs"},js={key:0,class:"text-xs ml-1"},Ws=["onClick"],Ys=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"},null,-1),Us=[Ys],Ns=["onClick"],Rs=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 cursor-pointer inline-flex -mt-0.5"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})],-1);function Fs(e,s,h,m,g,a){var w,c,y,u,k,x,C,r,$,D,A,S,N,R,F,T,q,O,G,Z,K,X,J,Q,ee,te,se,ie,oe,le,ae,re,ne,de,pe,he,ce,ue,me,we,ve,fe,ge,ye,be,_e,ke,xe,Ce,$e;const _=E("Meta"),v=E("VueSfcViewer");return o(),l("section",Yt,[P(_,{title:(w=e.post)==null?void 0:w.title,description:(c=e.post)==null?void 0:c.description,author:(u=(y=e.post)==null?void 0:y.user)==null?void 0:u.name},null,8,["title","description","author"]),t("div",Ut,[(k=a.user)!=null&&k.email||(C=(x=a.user)==null?void 0:x.value)!=null&&C.email?(o(),l("div",{key:0,class:"h-12 w-12 bg-cover rounded-full bg-slate-500 mx-auto float-right",style:Y("background-image: url("+(((r=a.user)==null?void 0:r.picture)||((D=($=a.user)==null?void 0:$.value)==null?void 0:D.picture))+")")},null,4)):d("",!0),(A=a.user)!=null&&A.email||(N=(S=a.user)==null?void 0:S.value)!=null&&N.email?(o(),l("div",Nt,p(((R=a.user)==null?void 0:R.name)||((T=(F=a.user)==null?void 0:F.value)==null?void 0:T.name)),1)):d("",!0),(q=a.user)!=null&&q.email||(G=(O=a.user)==null?void 0:O.value)!=null&&G.email?(o(),l("div",{key:2,class:"float-left mt-3 ml-4 cursor-pointer text-slate-700 hover:text-slate-900 font-bold",onClick:s[0]||(s[0]=(...i)=>a.logout&&a.logout(...i))}," Logout ")):(o(),l("div",{key:3,class:"float-left mt-3 ml-4 cursor-pointer text-slate-700 hover:text-slate-900 font-bold",onClick:s[1]||(s[1]=(...i)=>a.login&&a.login(...i))}," Login "))]),t("article",Rt,[t("div",Ft,[t("div",Tt,[t("div",qt,[t("div",Ot,[t("div",{class:L(["border w-11 h-12 rounded-lg cursor-pointer",{"bg-emerald-50":(K=(Z=e.post)==null?void 0:Z.votes)==null?void 0:K.find(i=>{var n;return i.user_id===((n=a.user)==null?void 0:n._id)}),"border-emerald-400":(J=(X=e.post)==null?void 0:X.votes)==null?void 0:J.find(i=>{var n;return i.user_id===((n=a.user)==null?void 0:n._id)}),"hover:bg-emerald-100":(ee=(Q=e.post)==null?void 0:Q.votes)==null?void 0:ee.find(i=>{var n;return i.user_id===((n=a.user)==null?void 0:n._id)}),"hover:bg-slate-100":!((se=(te=e.post)==null?void 0:te.votes)!=null&&se.find(i=>{var n;return i.user_id===((n=a.user)==null?void 0:n._id)})),"border-emerald-400":(oe=(ie=e.post)==null?void 0:ie.votes)==null?void 0:oe.find(i=>{var n;return i.user_id===((n=a.user)==null?void 0:n._id)})}]),onClick:s[2]||(s[2]=i=>a.vote(e.post))},[t("div",Gt,[(o(),l("svg",{viewBox:"0 0 20 10",class:L(["pt-2 w-5 h-5 mx-auto",{"fill-emerald-400":(ae=(le=e.post)==null?void 0:le.votes)==null?void 0:ae.find(i=>{var n;return i.user_id===((n=a.user)==null?void 0:n._id)}),"fill-gray-400":!((ne=(re=e.post)==null?void 0:re.votes)!=null&&ne.find(i=>{var n;return i.user_id===((n=a.user)==null?void 0:n._id)}))}])},Kt,2))]),t("div",Xt,p((pe=(de=e.post)==null?void 0:de.votes)==null?void 0:pe.length),1)],2)]),t("div",Jt,[e.edit?e.post?b((o(),l("input",{key:1,class:"pt-2.5 text-xl font-semibold","onUpdate:modelValue":s[3]||(s[3]=i=>e.post.title=i)},null,512)),[[j,e.post.title]]):d("",!0):(o(),l("h1",Qt,p((he=e.post)==null?void 0:he.title),1))])]),t("div",es,[t("div",ts,[t("div",ss,[t("div",{class:"h-7 w-7 bg-cover rounded-full bg-slate-500 mx-auto",style:Y("background-image: url("+((ue=(ce=e.post)==null?void 0:ce.user)==null?void 0:ue.picture)+")")},null,4)])]),t("div",is,[t("h1",os,p((we=(me=e.post)==null?void 0:me.user)==null?void 0:we.name),1)])])]),t("div",ls,[(ve=e.post)!=null&&ve.icon?(o(),l("img",{key:0,class:"rounded w-full",src:e.post.icon||e.background},null,8,as)):d("",!0)])]),e.post?(o(),l("div",rs,[ns,t("div",ds,[e.edit?b((o(),l("textarea",{key:1,"onUpdate:modelValue":s[4]||(s[4]=i=>e.post.description=i),rows:"",cols:"",class:"rounded w-full h-32 mb-3 border",placeholder:"Description"},null,512)),[[j,e.post.description]]):(o(),l("p",ps,p((fe=e.post)==null?void 0:fe.description),1)),P(v,{class:"rounded bg-slate-50 w-full",style:{height:"600px"},id:h.id},null,8,["id"]),e.edit?b((o(),l("select",{key:2,"onUpdate:modelValue":s[5]||(s[5]=i=>e.post.category_id=i),class:"mb-2 w-full h-10 block max-w-full pl-4 pr-2 text-sm text-gray-900 placeholder:text-slate-500 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[(o(!0),l(H,null,M(e.categories,i=>(o(),l("option",{value:i._id},p(i.title),9,hs))),256))],512)),[[Oe,e.post.category_id]]):d("",!0),f(),e.edit?(o(),l("button",{key:3,class:"mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2",onClick:s[6]||(s[6]=(...i)=>a.selectImage&&a.selectImage(...i))}," Select icon ")):d("",!0),e.edit?(o(),l("button",{key:4,class:"mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2",onClick:s[7]||(s[7]=i=>e.post.icon="")}," Remove icon ")):d("",!0),e.edit?(o(),l("button",{key:5,class:"mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2",onClick:s[8]||(s[8]=i=>e.post.public=!e.post.public)},p((ge=e.post)!=null&&ge.public?"Public":"Private"),1)):d("",!0),e.edit?(o(),l("button",{key:6,class:"mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2",onClick:s[9]||(s[9]=i=>e.edit=!e.edit)}," Cancel ")):d("",!0),e.edit?(o(),l("button",{key:7,class:"bg-emerald-400 text-white hover:bg-emerald-500 shadow rounded px-2 mb-2 py-2",onClick:s[10]||(s[10]=i=>a.savePost())}," Save ")):d("",!0),t("div",cs,[t("span",us,p(e.moment(e.post.createdAt).format("MMMM DD, YYYY")),1),f(),((be=(ye=e.post)==null?void 0:ye.user)==null?void 0:be._id)===((_e=a.user)==null?void 0:_e._id)?(o(),l("span",{key:0,class:"text-xs ml-1",onClick:s[11]||(s[11]=i=>a.remove(e.post))},[f(" · "),ms])):d("",!0),f(),!e.edit&&((xe=(ke=e.post)==null?void 0:ke.user)==null?void 0:xe._id)===((Ce=a.user)==null?void 0:Ce._id)?(o(),l("span",ws,[f(" · "),(o(),l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 cursor-pointer inline-flex -mt-0.5",onClick:s[12]||(s[12]=i=>e.edit=!0)},fs))])):d("",!0)]),t("div",gs,[t("form",ys,[t("div",bs,[b(t("input",{type:"search",id:"default-search",class:"w-full h-10 block max-w-full pl-4 pr-2 text-sm text-gray-900 placeholder:text-slate-500 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Leave a comment",required:"","onUpdate:modelValue":s[13]||(s[13]=i=>e.comment=i),onKeypress:s[14]||(s[14]=Ge(Ze(i=>a.postComment(),["prevent"]),["enter"]))},null,544),[[j,e.comment]])])])]),_s])])):d("",!0)]),(o(!0),l(H,null,M(($e=e.post)==null?void 0:$e.comments,i=>{var n,He,Me,Ve,Le,De,Ae,Se,ze,Ee,Pe,Be,Ie,je;return o(),l("article",null,[t("div",ks,[t("div",xs,[t("div",Cs,[t("div",{class:"h-7 w-7 bg-cover rounded-full bg-slate-500 mx-auto",style:Y("background-image: url("+((He=(n=i==null?void 0:i.user)==null?void 0:n[0])==null?void 0:He.picture)+")")},null,4)])]),t("div",$s,[t("h1",Hs,p((Ve=(Me=i.user)==null?void 0:Me[0])==null?void 0:Ve.name),1)])]),t("div",Ms,[Vs,t("div",Ls,[i.edit?b((o(),l("textarea",{key:1,"onUpdate:modelValue":z=>i.comment=z,rows:"",cols:"",class:"w-full h-16 mb-3 border"},`
`,8,As)),[[j,i.comment]]):(o(),l("p",Ds,p(i.comment),1)),i.edit?(o(),l("button",{key:2,class:"bg-emerald-400 text-white hover:bg-emerald-500 shadow rounded px-2 mb-2 py-2",onClick:z=>a.saveComment(i)}," Save ",8,Ss)):d("",!0),t("div",zs,[(o(),l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:L(["w-4 h-4 mr-1 cursor-pointer",{"fill-red-400":i.likes.length}]),onClick:z=>a.like(i)},Bs,10,Es)),f(),t("span",Is,p(((Le=i.likes)==null?void 0:Le.length)>1?((De=i.likes)==null?void 0:De.length)+" likes":"")+" "+p(((Ae=i.likes)==null?void 0:Ae.length)===1?((Se=i.likes)==null?void 0:Se.length)+" like":"")+" · "+p(e.moment(i.createdAt).format("MMMM DD, YYYY")),1),f(),((Ee=(ze=i==null?void 0:i.user)==null?void 0:ze[0])==null?void 0:Ee._id)===((Pe=a.user)==null?void 0:Pe._id)?(o(),l("span",js,[f(" · "),(o(),l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 cursor-pointer inline-flex -mt-1",onClick:z=>a.removeComment(i)},Us,8,Ws))])):d("",!0),f(),((Ie=(Be=i==null?void 0:i.user)==null?void 0:Be[0])==null?void 0:Ie._id)===((je=a.user)==null?void 0:je._id)&&!i.edit?(o(),l("span",{key:1,class:"text-xs ml-1",onClick:z=>i.edit=!0},[f(" · "),Rs],8,Ns)):d("",!0)])])])])}),256))])}const Ts=U(Wt,[["render",Fs]]);const qs={props:["id"],components:{VueNavigator:Ue,Footer:Ne,Component:Ts},data:()=>({menu:!1,post:null}),computed:{votes(){var e;return(e=this.post)==null?void 0:e.votes}}},B=e=>(We("data-v-a08832de"),e=e(),Ye(),e),Os={class:"bg-white flex flex-col h-screen"},Gs={style:{width:"100%","min-height":"calc(100vh - 50px)"},class:"flex-1 relative overflow-auto"},Zs={class:"relative h-full w-full flex"},Ks=B(()=>t("label",{class:"bg-white fixed z-40 md:hidden cursor-pointer inline-flex items-center p-2 mt-16 lg:mt-4 ml-3 text-sm text-slate-900 rounded-lg",for:"toggle"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])],-1)),Xs={class:"bottom-0 bg-white pt-10 md:w-96 md:p-7 md:shadow-md shadow-lg border-r border-slate-200 peer-checked:px-7 peer-checked:pt-16 peer-checked:md:pt-10 peer-checked:pb-7 duration-200 transition-all ease-in-out w-0 max-w-full z-30 peer-checked:w-80 absolute md:relative top-0 overflow-auto"},Js=B(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-5 h-5 -mt-1 mr-1 inline"},[t("path",{"fill-rule":"evenodd",d:"M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z","clip-rule":"evenodd"})],-1)),Qs=B(()=>t("h3",{class:"text-slate-500 font-medium mb-1 whitespace-nowrap"}," Category ",-1)),ei=B(()=>t("h3",{class:"text-slate-500 mt-4 font-medium mb-2 whitespace-nowrap"}," Voters ",-1)),ti={class:"flex mb-1.5"},si={class:"text-sm pl-2 pt-1 text-ellipsis overflow-hidden whitespace-nowrap grow"},ii={class:"flex mb-1.5"},oi=B(()=>t("div",{class:"h-7 w-7"},null,-1)),li={class:"text-sm pl-2 pt-1 text-ellipsis overflow-hidden whitespace-nowrap grow"};function ai(e,s,h,m,g,a){var c,y;const _=E("VueNavigator"),v=E("Component",!0),w=E("Footer");return o(),l("div",Os,[P(_,{class:"absolute z-50"}),t("main",Gs,[t("div",Zs,[Ks,b(t("input",{class:"peer hidden",type:"checkbox",id:"toggle","onUpdate:modelValue":s[0]||(s[0]=u=>e.menu=u)},null,512),[[Ke,e.menu]]),t("div",Xs,[t("button",{class:"border mr-2 bg-slate-50 hover:bg-slate-100 rounded-2xl pl-3 pr-4 mb-4 py-2",onClick:s[1]||(s[1]=u=>e.$router.push("/search"))},[Js,f(" Go back ")]),Qs,t("span",null,p(((y=(c=e.post)==null?void 0:c.category)==null?void 0:y.title)||"Not set"),1),ei,(o(!0),l(H,null,M(a.votes,u=>{var k,x,C,r;return o(),l("div",ti,[t("div",{class:"h-7 w-7 bg-cover rounded-full bg-slate-500",style:Y("background-image: url("+((x=(k=u==null?void 0:u.user)==null?void 0:k[0])==null?void 0:x.picture)+")")},null,4),t("span",si,p((r=(C=u.user)==null?void 0:C[0])==null?void 0:r.name),1)])}),256)),t("div",ii,[oi,b(t("span",li," and 35 more... ",512),[[W,!1]])])]),P(v,{class:"m-auto grow h-full overflow-auto pt-16 lg:pt-7 relative",onPost:s[2]||(s[2]=u=>e.post=u),id:h.id},null,8,["id"]),e.menu?(o(),l("div",{key:0,class:"absolute h-full w-full",onClick:s[3]||(s[3]=u=>e.menu=!1)})):d("",!0)])]),P(w)])}const mi=U(qs,[["render",ai],["__scopeId","data-v-a08832de"]]);export{mi as default};
