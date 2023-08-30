import{V as Re,F as Ne}from"./Footer-d21bc710.js";import{loadTheme as Te,loadGrammars as Fe}from"https://cdn.jsdelivr.net/npm/monaco-volar@0.4.0/+esm";import*as Oe from"https://cdn.jsdelivr.net/npm/onigasm@2.2.5/+esm";import*as f from"https://cdn.jsdelivr.net/npm/monaco-editor-core-colorpicker@0.38.0/+esm";import Y from"https://cdn.jsdelivr.net/npm/@volar/monaco@1.10.1/+esm";import qe from"https://cdn.jsdelivr.net/npm/moment@2.29.4/+esm";import{_ as R,o,c as a,b as t,w as k,q as I,g as c,n as S,d as b,F as H,j as V,t as u,p as Ue,f as Ye,r as W,a as z,h as U,k as B,i as Ge,l as Ze,m as Ke,v as Xe}from"./index-090c5983.js";import{M as Je}from"./Meta-d639d9e2.js";import{h as Qe}from"./moment-fbc5633a.js";import{d as et}from"./defaultBase64Image-ab365e89.js";function tt(){if(!window.loadedOnigasm)return window.loadedOnigasm=!0,Oe.loadWASM("https://cdn.jsdelivr.net/npm/onigasm@2.2.5/lib/onigasm.wasm")}let st=async()=>{let e="https://cdn.jsdelivr.net/npm/monaco-volar@0.4.0/dist/worker/vue.worker.js";return new Worker(URL.createObjectURL(new Blob([`
          const process = { env: { NODE_ENV: 'development' } }
          ${await(await fetch(e)).text()}
        `],{type:"text/javascript"})))},it=async()=>new Worker(URL.createObjectURL(new Blob([`
          self.MonacoEnvironment = {
            baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min'
          };
          importScripts('https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs/base/worker/workerMain.min.js');
  `],{type:"text/javascript"})));async function ot(e=!1){let s=!1;f.languages.register({id:"vue",extensions:[".vue"]}),f.languages.onLanguage("vue",n),e&&(f.languages.onLanguage("javascript",n),f.languages.onLanguage("typescript",n),f.languages.onLanguage("javascriptreact",n),f.languages.onLanguage("typescriptreact",n),f.languages.onLanguage("json",n));async function n(){if(s)return;s=!0,window.MonacoEnvironment={},window.MonacoEnvironment.getWorker=async()=>it();const h=window.MonacoEnvironment.getWorker;window.MonacoEnvironment.getWorker=async(v,m)=>m==="vue"?await st():h();const p=f.editor.createWebWorker({moduleId:"vs/language/vue/vueWorker",label:"vue",createData:{}}),l=e?["vue","javascript","typescript","javascriptreact","typescriptreact","json"]:["vue"],y=()=>f.editor.getModels().map(v=>v.uri);Y.editor.activateMarkers(p,l,"vue",y,f.editor),Y.editor.activateAutoInsertion(p,l,y,f.editor),await Y.languages.registerProvides(p,l,y,f.languages)}await n()}const at={inject:["io"],props:{id:{type:String,default:"64b1469b691f1cd6f7ad4328"}},data:()=>({identifier:null,moment:qe,fullWindow:!1,show:"preview",showHistory:!1,history:null,application:null,raw:"",preview:"",webComponent:"",webComponentPreview:"",livePreview:"",livePreviewWebComponent:"",html:"",htmlWebComponent:"",htmlBase64:"",iframe:"",esm:"",esmWebComponent:"",esmBase64:""}),computed:{iframeSource(){var e;return`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=preview${(e=this.application)!=null&&e.tailwind?"-tw":""}`}},async created(){const s=new URLSearchParams(window.location.search).get("id");if(s?this.identifier=s:this.identifier=this.id,await this.init(),!this.io)return;const n=this.io.service("types/applications");n.on("updated",h=>{String(h._id)===String(this.identifier)&&this.init()}),n.on("patched",h=>{String(h._id)===String(this.identifier)&&this.init()})},methods:{async init(){await this.refresh(),await this.loadEditor()},async refresh(){this.application=await this.getApplication(),this.history=await this.getHistory(),this.raw=await this.getRaw(),this.preview=await this.getPreview(this.application.tailwind)},async loadEditor(){const e=async s=>{const n=f.editor.createModel(this.raw,"vue","demo.vue"),h=this.$refs.editor,p=f.editor.create(h,{theme:s,model:n,selectOnLineNumbers:!0,automaticLayout:!0,autoIndent:!0,formatOnPaste:!0,formatOnType:!0,"semanticHighlighting.enabled":!0}),l=p._themeService._theme;l.getTokenStyleMetadata=(y,v,m)=>{const w=v.includes("readonly");switch(y){case"function":case"method":return{foreground:12};case"class":return{foreground:11};case"variable":case"property":return{foreground:w?21:9};default:return{foreground:0}}},Fe(f,p),p.onDidChangeModelContent(()=>{this.raw=p.getValue()}),this.$nextTick(()=>{p.getAction("editor.action.formatDocument").run()})};Promise.all([ot(),tt(),Te(f.editor)]).then(([,,s])=>{e(s.light)})},async getApplication(){return(await fetch(`https://api.vueplay.io/types/applications/${this.identifier}`)).json()},async getHistory(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}`)).json()},async getRaw(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=vue`)).text()},async getPreview(e=!1){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=preview${e?"-tw":""}`)).text()},async getLivePreview(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=live-preview`)).text()},async getLivePreviewWebComponent(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=live-preview-wc`)).text()},async getWebComponent(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=webcomponent`)).text()},async getWebComponentPreview(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=preview-wc`)).text()},async getHtml(e=!1){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=html${e?"-tw":""}`)).text()},async getHtmlWebComponentPreview(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=html-wc`)).text()},async getHtmlBase64(e=!1){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=html-base64${e?"-tw":""}`)).text()},async getIframe(e=!1){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=iframe${e?"-tw":""}`)).text()},async getESM(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=esm`)).text()},async getESMWebComponent(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=esmwc`)).text()},async getESMBase64(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=base64`)).text()},openPreview(e){window.open(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=preview${e?"-tw":""}`,"_blank")},async save(){try{let e=await this.io.service("types/sfc").patch(this.id,{content:this.raw,token:await this.io.authentication.getAccessToken()});console.log("results",e),alert("Updated!"),await this.refresh()}catch{alert("You do not have permission to make patches")}}}},L=e=>(Ue("data-v-257a19b8"),e=e(),Ye(),e),lt={class:"grid-cols-2 grid bg-slate-100",style:{width:"100%",height:"36px"}},rt={class:"h-full"},nt=["disabled"],dt=["disabled"],ct=["disabled"],ut={class:"text-right h-full"},pt={key:0,style:{width:"31px",height:"31px"},class:"bg-slate-200 m-0.5 rounded text-center inline-block",title:"Component depends on Tailwind"},ht={xmlns:"http://www.w3.org/2000/svg",width:"1000",height:"1000",viewBox:"0 0 1000 1000",fill:"none",style:{width:"80%",height:"80%",padding:"10%"},class:"m-auto"},mt=L(()=>t("path",{d:"M489.5 226.499C328 231.632 280 346.999 269 409.499C283.333 386.332 328.5 335.5 395 335.5C472.5 335.5 531.5 422 567.5 449C611.237 481.803 699.123 525.115 814.5 490C906.5 462 949.167 364.332 958.5 317.999C914 378.499 846.5 414.838 763 371.999C705.5 342.499 662.5 221 489.5 226.499Z",fill:"#07B6D5"},null,-1)),wt=L(()=>t("path",{d:"M261 500.999C99.5 506.132 51.5 621.499 40.5 683.999C54.8333 660.832 100 610 166.5 610C244 610 303 696.5 339 723.5C382.737 756.303 470.623 799.615 586 764.5C678 736.5 720.667 638.832 730 592.499C685.5 652.999 618 689.338 534.5 646.499C477 616.999 434 495.5 261 500.999Z",fill:"#07B6D5"},null,-1)),vt=[mt,wt],gt={xmlns:"http://www.w3.org/2000/svg",width:"92pt",height:"92pt",viewBox:"0 0 92 92",class:"mx-auto",style:{width:"80%",height:"80%",padding:"10%"}},ft=L(()=>t("defs",null,[t("clipPath",{id:"a"},[t("path",{d:"M0 .113h91.887V92H0Zm0 0"})])],-1)),yt=L(()=>t("g",{"clip-path":"url(#a)"},[t("path",{style:{stroke:"none","fill-rule":"nonzero",fill:"#100f0d","fill-opacity":"1"},d:"M90.156 41.965 50.036 1.848a5.913 5.913 0 0 0-8.368 0l-8.332 8.332 10.566 10.566a7.03 7.03 0 0 1 7.23 1.684 7.043 7.043 0 0 1 1.673 7.277l10.183 10.184a7.026 7.026 0 0 1 7.278 1.672 7.04 7.04 0 0 1 0 9.957 7.045 7.045 0 0 1-9.961 0 7.038 7.038 0 0 1-1.532-7.66l-9.5-9.497V59.36a7.04 7.04 0 0 1 1.86 11.29 7.04 7.04 0 0 1-9.957 0 7.04 7.04 0 0 1 0-9.958 7.034 7.034 0 0 1 2.308-1.539V33.926a7.001 7.001 0 0 1-2.308-1.535 7.049 7.049 0 0 1-1.516-7.7L29.242 14.273 1.734 41.777a5.918 5.918 0 0 0 0 8.371L41.855 90.27a5.92 5.92 0 0 0 8.368 0l39.933-39.934a5.925 5.925 0 0 0 0-8.371"})],-1)),bt=[ft,yt],_t={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"mx-auto",style:{width:"80%",height:"80%",padding:"10%"}},kt=L(()=>t("path",{"fill-rule":"evenodd",d:"M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z","clip-rule":"evenodd"},null,-1)),xt=[kt],Ct={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"mx-auto",style:{width:"80%",height:"80%",padding:"10%"}},$t=L(()=>t("path",{"fill-rule":"evenodd",d:"M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 01-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h2.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z","clip-rule":"evenodd"},null,-1)),Mt=[$t],Ht={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"mx-auto",style:{width:"80%",height:"80%",padding:"10%"}},Vt=L(()=>t("path",{"fill-rule":"evenodd",d:"M3.22 3.22a.75.75 0 011.06 0l3.97 3.97V4.5a.75.75 0 011.5 0V9a.75.75 0 01-.75.75H4.5a.75.75 0 010-1.5h2.69L3.22 4.28a.75.75 0 010-1.06zm17.56 0a.75.75 0 010 1.06l-3.97 3.97h2.69a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75V4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0zM3.75 15a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-2.69l-3.97 3.97a.75.75 0 01-1.06-1.06l3.97-3.97H4.5a.75.75 0 01-.75-.75zm10.5 0a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-2.69l3.97 3.97a.75.75 0 11-1.06 1.06l-3.97-3.97v2.69a.75.75 0 01-1.5 0V15z","clip-rule":"evenodd"},null,-1)),Lt=[Vt],St={class:"flex-row flex bg-slate-50",style:{width:"100%",height:"calc(100% - 140px)"}},At={class:"grid-cols-2 grid grow"},Dt={class:"editor",ref:"editor"},jt=["src"],Et={key:0,class:"relative px-4 pb-4 box-border overflow-auto h-full",style:{"max-width":"280px","min-width":"280px"}},Wt=L(()=>t("label",{for:"",class:"top-0 pt-2 pb-1 sticky w-full bg-slate-50 font-semibold inline-block mb-2"}," Git History ",-1)),zt={class:"p-2 rounded mb-2 bg-slate-100"},Pt={class:"overflow-auto bg-slate-100 p-4",style:{width:"100%",height:"100px"}},Bt={class:"bg-rose-200 py-0.5 mr-1 mb-1 px-3 rounded-xl inline-block",title:"Property"},It={class:"bg-violet-200 mr-1 mb-1 py-0.5 px-3 rounded-xl inline-block",title:"Method"},Ut={class:"bg-emerald-200 mr-1 mb-1 py-0.5 px-3 rounded-xl inline-block",title:"Injection"},Yt={class:"bg-purple-200 mr-1 mb-1 py-0.5 px-3 rounded-xl inline-block"};function Rt(e,s,n,h,p,l){var y,v,m,w,_,g,x,C,$;return o(),a("div",{class:S(["bg-slate-50 rounded",e.fullWindow?"full-window":""]),style:{"max-width":"100%","max-height":"100%"}},[t("div",lt,[t("div",rt,[k(t("button",{style:{height:"31px"},class:"px-1 text-sm disabled:opacity-40 bg-slate-200 m-0.5 rounded text-center",onClick:s[0]||(s[0]=r=>e.show="split"),disabled:e.show==="split"}," Split ",8,nt),[[I,e.fullWindow]]),t("button",{style:{height:"31px"},class:"px-1 text-sm disabled:opacity-40 bg-slate-200 m-0.5 rounded text-center hover:bg-slate-300",onClick:s[1]||(s[1]=r=>e.show="preview"),disabled:e.show==="preview"}," Preview ",8,dt),t("button",{style:{height:"31px"},class:"px-1 text-sm disabled:opacity-40 bg-slate-200 m-0.5 rounded text-center hover:bg-slate-300",onClick:s[2]||(s[2]=r=>e.show="code"),disabled:e.show==="code"}," Code ",8,ct),t("button",{style:{height:"31px"},class:"px-1 text-sm disabled:opacity-40 bg-slate-200 m-0.5 rounded text-center hover:bg-slate-300",onClick:s[3]||(s[3]=r=>l.save())}," Save ")]),t("div",ut,[(y=e.application)!=null&&y.tailwind?(o(),a("button",pt,[(o(),a("svg",ht,vt))])):c("",!0),t("button",{style:{width:"31px",height:"31px"},class:S(["bg-slate-200 m-0.5 mr-0 rounded text-center hover:bg-slate-300 inline-block",e.showHistory?"opacity-50":""]),title:"History",onClick:s[4]||(s[4]=r=>e.showHistory=!e.showHistory)},[(o(),a("svg",gt,bt))],2),b(),t("button",{style:{width:"31px",height:"31px"},class:"bg-slate-200 m-0.5 ml-0 rounded text-center inline-block hover:bg-slate-300",title:"Close full window",onClick:s[5]||(s[5]=r=>{var M;return l.openPreview((M=e.application)==null?void 0:M.tailwind)})},[(o(),a("svg",_t,xt))]),e.fullWindow?c("",!0):(o(),a("button",{key:1,style:{width:"31px",height:"31px"},class:"bg-slate-200 m-0.5 rounded text-center inline-block hover:bg-slate-300",title:"Full window",onClick:s[6]||(s[6]=r=>e.fullWindow=!0)},[(o(),a("svg",Ct,Mt))])),e.fullWindow?(o(),a("button",{key:2,style:{width:"31px",height:"31px"},class:"bg-slate-200 m-0.5 rounded text-center inline-block hover:bg-slate-300",title:"Close full window",onClick:s[7]||(s[7]=r=>e.fullWindow=!1)},[(o(),a("svg",Ht,Lt))])):c("",!0)])]),t("div",St,[t("div",At,[k(t("div",{class:S(["p-4 overflow-auto h-full",e.show!=="split"?"col-span-2":""])},[t("div",Dt,null,512)],2),[[I,e.show==="split"||e.show==="code"]]),k(t("div",{class:S(["p-1 overflow-auto h-full",e.show!=="split"?"col-span-2":""])},[t("iframe",{title:"",class:"bg-white h-full w-full",src:l.iframeSource},`
					`,8,jt)],2),[[I,e.show==="split"||e.show==="preview"]])]),e.showHistory?(o(),a("div",Et,[Wt,(o(!0),a(H,null,V(e.history,r=>{var M,A,D,j;return o(),a("div",zt,u(r.commit.message)+" - "+u(e.moment.unix(((A=(M=r.commit)==null?void 0:M.author)==null?void 0:A.timestamp)||((j=(D=r.commit)==null?void 0:D.committer)==null?void 0:j.timestamp)).format("DD.MM.YYYY")),1)}),256))])):c("",!0)]),t("div",Pt,[(o(!0),a(H,null,V((m=(v=e.application)==null?void 0:v.analyze)==null?void 0:m.props,r=>(o(),a("div",Bt," :"+u(r==null?void 0:r.name),1))),256)),(o(!0),a(H,null,V((_=(w=e.application)==null?void 0:w.analyze)==null?void 0:_.methods,r=>(o(),a("div",It,u(r)+"() ",1))),256)),(o(!0),a(H,null,V((x=(g=e.application)==null?void 0:g.analyze)==null?void 0:x.inject,r=>(o(),a("div",Ut,u(r),1))),256)),(o(!0),a(H,null,V(($=(C=e.application)==null?void 0:C.analyze)==null?void 0:$.emits,r=>(o(),a("div",Yt," @"+u(r),1))),256))])],2)}const Nt=R(at,[["render",Rt],["__scopeId","data-v-257a19b8"]]),Tt={inject:["io","user","login","logout"],props:{id:{type:String,default:"64b1469b691f1cd6f7ad4328"}},components:{VueSfcViewer:Nt,Meta:Je},emit:["post"],data:()=>({tailwind:!0,comment:"",edit:!1,post:null,background:et,moment:Qe,categories:[]}),created(){this.refresh()},methods:{async getCategories(){const e=await this.io.service("types/categories").find();this.categories=(e==null?void 0:e.data)||[]},async postComment(){await this.login()?(await this.io.service("types/comments").create({application_id:this.post._id,comment:this.comment}),await this.refresh(),this.comment="",alert("Posted!")):alert("You need to be logged in to post a comment")},async saveComment(e){await this.io.service("types/comments").patch(e._id,{comment:e.comment}),e.edit=!1,alert("Saved")},async removeComment(e){confirm("Delete comment?")&&(await this.io.service("types/comments").remove(e._id),await this.refresh(),alert("Removed!"))},async savePost(){await this.io.service("types/applications").patch(this.post._id,{title:this.post.title,description:this.post.description,icon:this.post.icon,public:this.post.public,category_id:this.post.category_id}),await this.refresh(),this.edit=!1,alert("Saved")},async remove(e){confirm("Delete component?")&&(await this.io.service("types/applications").remove(e._id),alert("Removed!"),this.$router.push("/search"))},async refresh(){this.post=await this.io.service("types/applications").get(this.id),this.getCategories(),this.$emit("post",this.post)},async myVote(e){var n;const s=await this.io.service("types/votes").find({query:{application_id:e._id,user_id:(n=this.user)==null?void 0:n._id}});return(s==null?void 0:s[0])||!1},async vote(e){if(await this.login()){const s=await this.myVote(e);s?await this.io.service("types/votes").remove(s._id):await this.io.service("types/votes").create({application_id:e._id}),await this.refreshVotes(e)}else alert("You have to be logged in to cast a vote")},async refreshVotes(e){e.votes=await this.io.service("types/votes").find({query:{application_id:e._id}})},async myLike(e){var n;const s=await this.io.service("types/likes").find({query:{comment_id:e._id,user_id:(n=this.user)==null?void 0:n._id}});return(s==null?void 0:s[0])||!1},async like(e){if(await this.login()){const s=await this.myLike(e);s?await this.io.service("types/likes").remove(s._id):await this.io.service("types/likes").create({comment_id:e._id}),await this.refreshLikes(e)}else alert("You have to be logged in to like")},async refreshLikes(e){e.likes=await this.io.service("types/likes").find({query:{comment_id:e._id}})},selectImage(){let e=document.createElement("input");e.type="file",e.multiple=!1,e.accept="image/*",e.onchange=async()=>{let n=Array.from(e.files)[0],h=new FileReader;h.readAsDataURL(n),h.onload=async p=>{this.post.icon=await this.resizeImage(p.target.result)},h.onerror=p=>{alert("Could not load file"),console.log(p)}},e.click()},resizeImage(e){return new Promise((s,n)=>{let h=1e3,p=1e3,l=document.createElement("canvas"),y=l.getContext("2d"),v=new Image;v.onload=()=>{let m=v.width,w=v.height;m>w?m>h&&(w*=h/m,m=h):w>p&&(m*=p/w,w=p),l.width=m,l.height=w,y.drawImage(v,0,0,m,w);let _=l.toDataURL("image/png",.7);s(_)},v.src=e})}}},Ft={class:"p-6 md:pt-6 pb-24"},Ot={class:"absolute left-0 right-0 top-0 h-16 p-2 bg-slate-50"},qt={key:1,class:"float-right mt-3 mr-4"},Gt={class:"mt-16"},Zt={class:"max-w-2xl mx-auto mt-4 flex"},Kt={class:"mt-4 grow"},Xt={class:"flex"},Jt={class:"w-16 inline-flex"},Qt={class:"h-1/2 w-full"},es=t("polygon",{points:"10,0 20,10 0,10"},null,-1),ts=[es],ss={class:"text-center h-1/2 w-full -mt-1"},is={class:"overflow-hidden text-ellipsis max-h-20 flex-col inline-flex grow"},os={key:0,class:"pt-2.5 text-xl font-semibold"},as={class:"mt-4 flex"},ls={class:"w-16 inline-flex"},rs={class:"w-11"},ns={class:"overflow-hidden text-ellipsis max-h-8 flex-col inline-flex grow"},ds={class:"font-semibold mt-0.5"},cs={class:"inline-flex w-32"},us=["src"],ps={key:0,class:"max-w-2xl mx-auto mb-8 mt-2 flex"},hs=t("div",{class:"w-16 inline-flex"},[t("div",{class:"w-16"})],-1),ms={class:"grow"},ws={key:0,class:"text-gray-700 mb-3"},vs=["value"],gs={class:"mt-2 flex text-gray-500"},fs={class:"text-xs"},ys=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 cursor-pointer inline-flex -mt-1"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1),bs={key:1,class:"text-xs ml-1"},_s=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"},null,-1),ks=[_s],xs={class:"mt-8"},Cs={class:"mt-4"},$s={class:"relative"},Ms=t("div",{class:"mt-10"},[t("p",{class:"text-gray-500"}," Activity Feed... ")],-1),Hs={class:"max-w-2xl mx-auto mt-4 flex"},Vs={class:"w-16 inline-flex"},Ls={class:"w-11"},Ss={class:"overflow-hidden text-ellipsis max-h-8 flex-col inline-flex grow"},As={class:"font-semibold mt-0.5"},Ds={class:"max-w-2xl mx-auto mb-8 mt-2 flex"},js=t("div",{class:"w-16 inline-flex"},[t("div",{class:"w-16"})],-1),Es={class:"grow"},Ws={key:0,class:"text-gray-700 mb-3"},zs=["onUpdate:modelValue"],Ps=["onClick"],Bs={class:"flex text-gray-500"},Is=["onClick"],Us=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"},null,-1),Ys=[Us],Rs={class:"text-xs"},Ns={key:0,class:"text-xs ml-1"},Ts=["onClick"],Fs=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"},null,-1),Os=[Fs],qs=["onClick"],Gs=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 cursor-pointer inline-flex -mt-0.5"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})],-1);function Zs(e,s,n,h,p,l){var m,w,_,g,x,C,$,r,M,A,D,j,N,T,F,O,q,G,Z,K,X,J,Q,ee,te,se,ie,oe,ae,le,re,ne,de,ce,ue,pe,he,me,we,ve,ge,fe,ye,be,_e,ke,xe,Ce,$e,Me;const y=W("Meta"),v=W("VueSfcViewer");return o(),a("section",Ft,[z(y,{title:(m=e.post)==null?void 0:m.title,description:(w=e.post)==null?void 0:w.description,author:(g=(_=e.post)==null?void 0:_.user)==null?void 0:g.name},null,8,["title","description","author"]),t("div",Ot,[(x=l.user)!=null&&x.email||($=(C=l.user)==null?void 0:C.value)!=null&&$.email?(o(),a("div",{key:0,class:"h-12 w-12 bg-cover rounded-full bg-slate-500 mx-auto float-right",style:U("background-image: url("+(((r=l.user)==null?void 0:r.picture)||((A=(M=l.user)==null?void 0:M.value)==null?void 0:A.picture))+")")},null,4)):c("",!0),(D=l.user)!=null&&D.email||(N=(j=l.user)==null?void 0:j.value)!=null&&N.email?(o(),a("div",qt,u(((T=l.user)==null?void 0:T.name)||((O=(F=l.user)==null?void 0:F.value)==null?void 0:O.name)),1)):c("",!0),(q=l.user)!=null&&q.email||(Z=(G=l.user)==null?void 0:G.value)!=null&&Z.email?(o(),a("div",{key:2,class:"float-left mt-3 ml-4 cursor-pointer text-slate-700 hover:text-slate-900 font-bold",onClick:s[0]||(s[0]=(...i)=>l.logout&&l.logout(...i))}," Logout ")):(o(),a("div",{key:3,class:"float-left mt-3 ml-4 cursor-pointer text-slate-700 hover:text-slate-900 font-bold",onClick:s[1]||(s[1]=(...i)=>l.login&&l.login(...i))}," Login "))]),t("article",Gt,[t("div",Zt,[t("div",Kt,[t("div",Xt,[t("div",Jt,[t("div",{class:S(["border w-11 h-12 rounded-lg cursor-pointer",{"bg-emerald-50":(X=(K=e.post)==null?void 0:K.votes)==null?void 0:X.find(i=>{var d;return i.user_id===((d=l.user)==null?void 0:d._id)}),"border-emerald-400":(Q=(J=e.post)==null?void 0:J.votes)==null?void 0:Q.find(i=>{var d;return i.user_id===((d=l.user)==null?void 0:d._id)}),"hover:bg-emerald-100":(te=(ee=e.post)==null?void 0:ee.votes)==null?void 0:te.find(i=>{var d;return i.user_id===((d=l.user)==null?void 0:d._id)}),"hover:bg-slate-100":!((ie=(se=e.post)==null?void 0:se.votes)!=null&&ie.find(i=>{var d;return i.user_id===((d=l.user)==null?void 0:d._id)})),"border-emerald-400":(ae=(oe=e.post)==null?void 0:oe.votes)==null?void 0:ae.find(i=>{var d;return i.user_id===((d=l.user)==null?void 0:d._id)})}]),onClick:s[2]||(s[2]=i=>l.vote(e.post))},[t("div",Qt,[(o(),a("svg",{viewBox:"0 0 20 10",class:S(["pt-2 w-5 h-5 mx-auto",{"fill-emerald-400":(re=(le=e.post)==null?void 0:le.votes)==null?void 0:re.find(i=>{var d;return i.user_id===((d=l.user)==null?void 0:d._id)}),"fill-gray-400":!((de=(ne=e.post)==null?void 0:ne.votes)!=null&&de.find(i=>{var d;return i.user_id===((d=l.user)==null?void 0:d._id)}))}])},ts,2))]),t("div",ss,u((ue=(ce=e.post)==null?void 0:ce.votes)==null?void 0:ue.length),1)],2)]),t("div",is,[e.edit?e.post?k((o(),a("input",{key:1,class:"pt-2.5 text-xl font-semibold","onUpdate:modelValue":s[3]||(s[3]=i=>e.post.title=i)},null,512)),[[B,e.post.title]]):c("",!0):(o(),a("h1",os,u((pe=e.post)==null?void 0:pe.title),1))])]),t("div",as,[t("div",ls,[t("div",rs,[t("div",{class:"h-7 w-7 bg-cover rounded-full bg-slate-500 mx-auto",style:U("background-image: url("+((me=(he=e.post)==null?void 0:he.user)==null?void 0:me.picture)+")")},null,4)])]),t("div",ns,[t("h1",ds,u((ve=(we=e.post)==null?void 0:we.user)==null?void 0:ve.name),1)])])]),t("div",cs,[(ge=e.post)!=null&&ge.icon?(o(),a("img",{key:0,class:"rounded w-full",src:e.post.icon||e.background},null,8,us)):c("",!0)])]),e.post?(o(),a("div",ps,[hs,t("div",ms,[e.edit?k((o(),a("textarea",{key:1,"onUpdate:modelValue":s[4]||(s[4]=i=>e.post.description=i),rows:"",cols:"",class:"rounded w-full h-32 mb-3 border",placeholder:"Description"},null,512)),[[B,e.post.description]]):(o(),a("p",ws,u((fe=e.post)==null?void 0:fe.description),1)),z(v,{class:"rounded bg-slate-50 w-full",style:{height:"600px"},id:n.id},null,8,["id"]),e.edit?k((o(),a("select",{key:2,"onUpdate:modelValue":s[5]||(s[5]=i=>e.post.category_id=i),class:"mb-2 w-full h-10 block max-w-full pl-4 pr-2 text-sm text-gray-900 placeholder:text-slate-500 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[(o(!0),a(H,null,V(e.categories,i=>(o(),a("option",{value:i._id},u(i.title),9,vs))),256))],512)),[[Ge,e.post.category_id]]):c("",!0),b(),e.edit?(o(),a("button",{key:3,class:"mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2",onClick:s[6]||(s[6]=(...i)=>l.selectImage&&l.selectImage(...i))}," Select icon ")):c("",!0),e.edit?(o(),a("button",{key:4,class:"mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2",onClick:s[7]||(s[7]=i=>e.post.icon="")}," Remove icon ")):c("",!0),e.edit?(o(),a("button",{key:5,class:"mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2",onClick:s[8]||(s[8]=i=>e.post.public=!e.post.public)},u((ye=e.post)!=null&&ye.public?"Public":"Private"),1)):c("",!0),e.edit?(o(),a("button",{key:6,class:"mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2",onClick:s[9]||(s[9]=i=>e.edit=!e.edit)}," Cancel ")):c("",!0),e.edit?(o(),a("button",{key:7,class:"bg-emerald-400 text-white hover:bg-emerald-500 shadow rounded px-2 mb-2 py-2",onClick:s[10]||(s[10]=i=>l.savePost())}," Save ")):c("",!0),t("div",gs,[t("span",fs,u(e.moment(e.post.createdAt).format("MMMM DD, YYYY")),1),b(),((_e=(be=e.post)==null?void 0:be.user)==null?void 0:_e._id)===((ke=l.user)==null?void 0:ke._id)?(o(),a("span",{key:0,class:"text-xs ml-1",onClick:s[11]||(s[11]=i=>l.remove(e.post))},[b(" · "),ys])):c("",!0),b(),!e.edit&&((Ce=(xe=e.post)==null?void 0:xe.user)==null?void 0:Ce._id)===(($e=l.user)==null?void 0:$e._id)?(o(),a("span",bs,[b(" · "),(o(),a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 cursor-pointer inline-flex -mt-0.5",onClick:s[12]||(s[12]=i=>e.edit=!0)},ks))])):c("",!0)]),t("div",xs,[t("form",Cs,[t("div",$s,[k(t("input",{type:"search",id:"default-search",class:"w-full h-10 block max-w-full pl-4 pr-2 text-sm text-gray-900 placeholder:text-slate-500 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Leave a comment",required:"","onUpdate:modelValue":s[13]||(s[13]=i=>e.comment=i),onKeypress:s[14]||(s[14]=Ze(Ke(i=>l.postComment(),["prevent"]),["enter"]))},null,544),[[B,e.comment]])])])]),Ms])])):c("",!0)]),(o(!0),a(H,null,V((Me=e.post)==null?void 0:Me.comments,i=>{var d,He,Ve,Le,Se,Ae,De,je,Ee,We,ze,Pe,Be,Ie;return o(),a("article",null,[t("div",Hs,[t("div",Vs,[t("div",Ls,[t("div",{class:"h-7 w-7 bg-cover rounded-full bg-slate-500 mx-auto",style:U("background-image: url("+((He=(d=i==null?void 0:i.user)==null?void 0:d[0])==null?void 0:He.picture)+")")},null,4)])]),t("div",Ss,[t("h1",As,u((Le=(Ve=i.user)==null?void 0:Ve[0])==null?void 0:Le.name),1)])]),t("div",Ds,[js,t("div",Es,[i.edit?k((o(),a("textarea",{key:1,"onUpdate:modelValue":E=>i.comment=E,rows:"",cols:"",class:"w-full h-16 mb-3 border"},`
`,8,zs)),[[B,i.comment]]):(o(),a("p",Ws,u(i.comment),1)),i.edit?(o(),a("button",{key:2,class:"bg-emerald-400 text-white hover:bg-emerald-500 shadow rounded px-2 mb-2 py-2",onClick:E=>l.saveComment(i)}," Save ",8,Ps)):c("",!0),t("div",Bs,[(o(),a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:S(["w-4 h-4 mr-1 cursor-pointer",{"fill-red-400":i.likes.length}]),onClick:E=>l.like(i)},Ys,10,Is)),b(),t("span",Rs,u(((Se=i.likes)==null?void 0:Se.length)>1?((Ae=i.likes)==null?void 0:Ae.length)+" likes":"")+" "+u(((De=i.likes)==null?void 0:De.length)===1?((je=i.likes)==null?void 0:je.length)+" like":"")+" · "+u(e.moment(i.createdAt).format("MMMM DD, YYYY")),1),b(),((We=(Ee=i==null?void 0:i.user)==null?void 0:Ee[0])==null?void 0:We._id)===((ze=l.user)==null?void 0:ze._id)?(o(),a("span",Ns,[b(" · "),(o(),a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 cursor-pointer inline-flex -mt-1",onClick:E=>l.removeComment(i)},Os,8,Ts))])):c("",!0),b(),((Be=(Pe=i==null?void 0:i.user)==null?void 0:Pe[0])==null?void 0:Be._id)===((Ie=l.user)==null?void 0:Ie._id)&&!i.edit?(o(),a("span",{key:1,class:"text-xs ml-1",onClick:E=>i.edit=!0},[b(" · "),Gs],8,qs)):c("",!0)])])])])}),256))])}const Ks=R(Tt,[["render",Zs]]);const Xs={props:["id"],components:{VueNavigator:Re,Footer:Ne,Component:Ks},data:()=>({menu:!1,post:null}),computed:{votes(){var e;return(e=this.post)==null?void 0:e.votes}}},P=e=>(Ue("data-v-a08832de"),e=e(),Ye(),e),Js={class:"bg-white flex flex-col h-screen"},Qs={style:{width:"100%","min-height":"calc(100vh - 50px)"},class:"flex-1 relative overflow-auto"},ei={class:"relative h-full w-full flex"},ti=P(()=>t("label",{class:"bg-white fixed z-40 md:hidden cursor-pointer inline-flex items-center p-2 mt-16 lg:mt-4 ml-3 text-sm text-slate-900 rounded-lg",for:"toggle"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])],-1)),si={class:"bottom-0 bg-white pt-10 md:w-96 md:p-7 md:shadow-md shadow-lg border-r border-slate-200 peer-checked:px-7 peer-checked:pt-16 peer-checked:md:pt-10 peer-checked:pb-7 duration-200 transition-all ease-in-out w-0 max-w-full z-30 peer-checked:w-80 absolute md:relative top-0 overflow-auto"},ii=P(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-5 h-5 -mt-1 mr-1 inline"},[t("path",{"fill-rule":"evenodd",d:"M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z","clip-rule":"evenodd"})],-1)),oi=P(()=>t("h3",{class:"text-slate-500 font-medium mb-1 whitespace-nowrap"}," Category ",-1)),ai=P(()=>t("h3",{class:"text-slate-500 mt-4 font-medium mb-2 whitespace-nowrap"}," Voters ",-1)),li={class:"flex mb-1.5"},ri={class:"text-sm pl-2 pt-1 text-ellipsis overflow-hidden whitespace-nowrap grow"},ni={class:"flex mb-1.5"},di=P(()=>t("div",{class:"h-7 w-7"},null,-1)),ci={class:"text-sm pl-2 pt-1 text-ellipsis overflow-hidden whitespace-nowrap grow"};function ui(e,s,n,h,p,l){var w,_;const y=W("VueNavigator"),v=W("Component",!0),m=W("Footer");return o(),a("div",Js,[z(y,{class:"absolute z-50"}),t("main",Qs,[t("div",ei,[ti,k(t("input",{class:"peer hidden",type:"checkbox",id:"toggle","onUpdate:modelValue":s[0]||(s[0]=g=>e.menu=g)},null,512),[[Xe,e.menu]]),t("div",si,[t("button",{class:"border mr-2 bg-slate-50 hover:bg-slate-100 rounded-2xl pl-3 pr-4 mb-4 py-2",onClick:s[1]||(s[1]=g=>e.$router.push("/search"))},[ii,b(" Go back ")]),oi,t("span",null,u(((_=(w=e.post)==null?void 0:w.category)==null?void 0:_.title)||"Not set"),1),ai,(o(!0),a(H,null,V(l.votes,g=>{var x,C,$,r;return o(),a("div",li,[t("div",{class:"h-7 w-7 bg-cover rounded-full bg-slate-500",style:U("background-image: url("+((C=(x=g==null?void 0:g.user)==null?void 0:x[0])==null?void 0:C.picture)+")")},null,4),t("span",ri,u((r=($=g.user)==null?void 0:$[0])==null?void 0:r.name),1)])}),256)),t("div",ni,[di,k(t("span",ci," and 35 more... ",512),[[I,!1]])])]),z(v,{class:"m-auto grow h-full overflow-auto pt-16 lg:pt-7 relative",onPost:s[2]||(s[2]=g=>e.post=g),id:n.id},null,8,["id"]),e.menu?(o(),a("div",{key:0,class:"absolute h-full w-full",onClick:s[3]||(s[3]=g=>e.menu=!1)})):c("",!0)])]),z(m)])}const bi=R(Xs,[["render",ui],["__scopeId","data-v-a08832de"]]);export{bi as default};
