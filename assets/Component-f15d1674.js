import{V as Re,F as Ne}from"./Footer-5ca326cd.js";import{loadTheme as Oe,loadGrammars as Fe}from"https://cdn.jsdelivr.net/npm/monaco-volar@0.4.0/+esm";import*as Te from"https://cdn.jsdelivr.net/npm/onigasm@2.2.5/+esm";import*as _ from"https://cdn.jsdelivr.net/npm/monaco-editor-core-colorpicker@0.38.0/+esm";import j from"https://cdn.jsdelivr.net/npm/@volar/monaco@1.10.1/+esm";import qe from"https://cdn.jsdelivr.net/npm/moment@2.29.4/+esm";import{_ as P,o,c as l,b as t,w as k,q as z,e as c,n as $,F as B,j as W,t as p,p as Ue,g as Ye,r as L,a as A,h as E,k as S,i as Ge,d as b,l as Ze,m as Ke,v as Xe}from"./index-f327f352.js";import{M as Je}from"./Meta-d87bffde.js";import{h as Qe}from"./moment-fbc5633a.js";import{d as et}from"./defaultBase64Image-ab365e89.js";function tt(){if(!window.loadedOnigasm)return window.loadedOnigasm=!0,Te.loadWASM("https://cdn.jsdelivr.net/npm/onigasm@2.2.5/lib/onigasm.wasm")}let st=async()=>{let e="https://cdn.jsdelivr.net/npm/monaco-volar@0.4.0/dist/worker/vue.worker.js";return new Worker(URL.createObjectURL(new Blob([`
		const process = { env: { NODE_ENV: 'development' } }
		${await(await fetch(e)).text()}
    `],{type:"text/javascript"})))},it=async()=>new Worker(URL.createObjectURL(new Blob([`
        self.MonacoEnvironment = { baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min' }
        importScripts('https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs/base/worker/workerMain.min.js')
  	`],{type:"text/javascript"})));async function ot(){let e=!1;_.languages.register({id:"vue",extensions:[".vue"]}),_.languages.onLanguage("vue",s);async function s(){if(e)return;e=!0,window.MonacoEnvironment={},window.MonacoEnvironment.getWorker=async()=>it();const n=window.MonacoEnvironment.getWorker;window.MonacoEnvironment.getWorker=async(f,w)=>w==="vue"?await st():n();const h=_.editor.createWebWorker({moduleId:"vs/language/vue/vueWorker",label:"vue",createData:{}}),u=["vue"],a=()=>_.editor.getModels().map(f=>f.uri);j.editor.activateMarkers(h,u,"vue",a,_.editor),j.editor.activateAutoInsertion(h,u,a,_.editor),await j.languages.registerProvides(h,u,a,_.languages)}await s()}const lt={inject:["io"],props:{id:{type:String,default:"64b1469b691f1cd6f7ad4328"},user:{type:Object,default:null}},data:()=>({identifier:null,moment:qe,fullWindow:!1,show:"preview",showHistory:!1,history:null,application:null,raw:"",preview:"",webComponent:"",webComponentPreview:"",livePreview:"",livePreviewWebComponent:"",html:"",htmlWebComponent:"",htmlBase64:"",iframe:"",esm:"",esmWebComponent:"",esmBase64:"",version:0,saving:!1}),computed:{iframeSource(){var e;return`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=preview${(e=this.application)!=null&&e.tailwind?"-tw":""}&v=${this.version}`}},async created(){const s=new URLSearchParams(window.location.search).get("id");if(s?this.identifier=s:this.identifier=this.id,await this.init(),!this.io)return;const n=this.io.service("types/applications");n.on("updated",h=>{String(h._id)===String(this.identifier)&&this.init()}),n.on("patched",h=>{String(h._id)===String(this.identifier)&&this.init()})},watch:{raw(e){this.$refs.preview.contentWindow.postMessage({raw:e},"*")}},methods:{async init(){await this.refresh(),await this.loadEditor()},async refresh(){this.application=await this.getApplication(),this.history=await this.getHistory(),this.raw=await this.getRaw(),this.preview=await this.getPreview(this.application.tailwind)},async loadEditor(){const e=async s=>{const n=_.editor.createModel(this.raw,"vue","demo.vue"),h=this.$refs.editor,u=_.editor.create(h,{theme:s,model:n,selectOnLineNumbers:!0,automaticLayout:!0,autoIndent:!0,formatOnPaste:!0,"semanticHighlighting.enabled":!0}),a=u._themeService._theme;a.getTokenStyleMetadata=(f,w,m)=>{const r=w.includes("readonly");switch(f){case"function":case"method":return{foreground:12};case"class":return{foreground:11};case"variable":case"property":return{foreground:r?21:9};default:return{foreground:0}}},Fe(_,u),u.onDidChangeModelContent(()=>{this.raw=u.getValue()}),this.$nextTick(()=>{u.getAction("editor.action.formatDocument").run()})};Promise.all([ot(),tt(),Oe(_.editor)]).then(([,,s])=>{e(s.light)})},async getApplication(){return(await fetch(`https://api.vueplay.io/types/applications/${this.identifier}`)).json()},async getHistory(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}`)).json()},async getRaw(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=vue`)).text()},async getPreview(e=!1){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=preview${e?"-tw":""}`)).text()},async getLivePreview(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=live-preview`)).text()},async getLivePreviewWebComponent(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=live-preview-wc`)).text()},async getWebComponent(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=webcomponent`)).text()},async getWebComponentPreview(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=preview-wc`)).text()},async getHtml(e=!1){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=html${e?"-tw":""}`)).text()},async getHtmlWebComponentPreview(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=html-wc`)).text()},async getHtmlBase64(e=!1){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=html-base64${e?"-tw":""}`)).text()},async getIframe(e=!1){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=iframe${e?"-tw":""}`)).text()},async getESM(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=esm`)).text()},async getESMWebComponent(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=esmwc`)).text()},async getESMBase64(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=base64`)).text()},openPreview(e){window.open(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=preview${e?"-tw":""}`,"_blank")},async save(){this.saving=!0;try{let e=await this.io.service("types/sfc").patch(this.id,{content:this.raw,token:await this.io.authentication.getAccessToken()});console.log("results",e),this.version++,await this.refresh()}catch{alert("You do not have permission to make patches")}this.saving=!1}}},y=e=>(Ue("data-v-b5508396"),e=e(),Ye(),e),at={class:"grid-cols-2 grid bg-slate-100 pt-1 px-1",style:{width:"100%",height:"40px"}},rt={class:"h-full"},nt=["disabled"],dt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"mx-auto",style:{width:"80%",height:"80%",padding:"10%"}},ct=y(()=>t("path",{d:"M15 3.75H9v16.5h6V3.75zM16.5 20.25h3.375c1.035 0 1.875-.84 1.875-1.875V5.625c0-1.036-.84-1.875-1.875-1.875H16.5v16.5zM4.125 3.75H7.5v16.5H4.125a1.875 1.875 0 01-1.875-1.875V5.625c0-1.036.84-1.875 1.875-1.875z"},null,-1)),ht=[ct],ut=["disabled"],pt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"mx-auto",style:{width:"80%",height:"80%",padding:"10%"}},wt=y(()=>t("path",{d:"M12 15a3 3 0 100-6 3 3 0 000 6z"},null,-1)),mt=y(()=>t("path",{"fill-rule":"evenodd",d:"M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z","clip-rule":"evenodd"},null,-1)),vt=[wt,mt],ft=["disabled"],gt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"mx-auto",style:{width:"80%",height:"80%",padding:"10%"}},yt=y(()=>t("path",{"fill-rule":"evenodd",d:"M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z","clip-rule":"evenodd"},null,-1)),bt=[yt],_t=["disabled"],kt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"mx-auto",style:{width:"80%",height:"80%",padding:"10%"}},xt=y(()=>t("path",{"fill-rule":"evenodd",d:"M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z","clip-rule":"evenodd"},null,-1)),Ct=[xt],$t={class:"text-right h-full"},Mt={key:0,style:{width:"31px",height:"31px"},class:"bg-slate-200 m-0.5 mr-0 rounded text-center inline-block",title:"Component depends on Tailwind"},Ht={xmlns:"http://www.w3.org/2000/svg",width:"1000",height:"1000",viewBox:"0 0 1000 1000",fill:"none",style:{width:"80%",height:"80%",padding:"10%"},class:"m-auto"},Vt=y(()=>t("path",{d:"M489.5 226.499C328 231.632 280 346.999 269 409.499C283.333 386.332 328.5 335.5 395 335.5C472.5 335.5 531.5 422 567.5 449C611.237 481.803 699.123 525.115 814.5 490C906.5 462 949.167 364.332 958.5 317.999C914 378.499 846.5 414.838 763 371.999C705.5 342.499 662.5 221 489.5 226.499Z",fill:"#07B6D5"},null,-1)),Lt=y(()=>t("path",{d:"M261 500.999C99.5 506.132 51.5 621.499 40.5 683.999C54.8333 660.832 100 610 166.5 610C244 610 303 696.5 339 723.5C382.737 756.303 470.623 799.615 586 764.5C678 736.5 720.667 638.832 730 592.499C685.5 652.999 618 689.338 534.5 646.499C477 616.999 434 495.5 261 500.999Z",fill:"#07B6D5"},null,-1)),At=[Vt,Lt],Dt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"mx-auto",style:{width:"80%",height:"80%",padding:"10%"}},St=y(()=>t("path",{"fill-rule":"evenodd",d:"M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z","clip-rule":"evenodd"},null,-1)),zt=[St],Et={xmlns:"http://www.w3.org/2000/svg",width:"92pt",height:"92pt",viewBox:"0 0 92 92",class:"mx-auto",style:{width:"80%",height:"80%",padding:"10%"}},Bt=y(()=>t("defs",null,[t("clipPath",{id:"a"},[t("path",{d:"M0 .113h91.887V92H0Zm0 0"})])],-1)),Wt=y(()=>t("g",{"clip-path":"url(#a)"},[t("path",{style:{stroke:"none","fill-rule":"nonzero",fill:"#100f0d","fill-opacity":"1"},d:"M90.156 41.965 50.036 1.848a5.913 5.913 0 0 0-8.368 0l-8.332 8.332 10.566 10.566a7.03 7.03 0 0 1 7.23 1.684 7.043 7.043 0 0 1 1.673 7.277l10.183 10.184a7.026 7.026 0 0 1 7.278 1.672 7.04 7.04 0 0 1 0 9.957 7.045 7.045 0 0 1-9.961 0 7.038 7.038 0 0 1-1.532-7.66l-9.5-9.497V59.36a7.04 7.04 0 0 1 1.86 11.29 7.04 7.04 0 0 1-9.957 0 7.04 7.04 0 0 1 0-9.958 7.034 7.034 0 0 1 2.308-1.539V33.926a7.001 7.001 0 0 1-2.308-1.535 7.049 7.049 0 0 1-1.516-7.7L29.242 14.273 1.734 41.777a5.918 5.918 0 0 0 0 8.371L41.855 90.27a5.92 5.92 0 0 0 8.368 0l39.933-39.934a5.925 5.925 0 0 0 0-8.371"})],-1)),jt=[Bt,Wt],Pt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"mx-auto",style:{width:"80%",height:"80%",padding:"10%"}},It=y(()=>t("path",{"fill-rule":"evenodd",d:"M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 01-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h2.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z","clip-rule":"evenodd"},null,-1)),Ut=[It],Yt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"mx-auto",style:{width:"80%",height:"80%",padding:"10%"}},Rt=y(()=>t("path",{"fill-rule":"evenodd",d:"M3.22 3.22a.75.75 0 011.06 0l3.97 3.97V4.5a.75.75 0 011.5 0V9a.75.75 0 01-.75.75H4.5a.75.75 0 010-1.5h2.69L3.22 4.28a.75.75 0 010-1.06zm17.56 0a.75.75 0 010 1.06l-3.97 3.97h2.69a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75V4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0zM3.75 15a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-2.69l-3.97 3.97a.75.75 0 01-1.06-1.06l3.97-3.97H4.5a.75.75 0 01-.75-.75zm10.5 0a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-2.69l3.97 3.97a.75.75 0 11-1.06 1.06l-3.97-3.97v2.69a.75.75 0 01-1.5 0V15z","clip-rule":"evenodd"},null,-1)),Nt=[Rt],Ot={class:"flex-row flex bg-slate-50",style:{width:"100%",height:"calc(100% - 40px)"}},Ft={class:"grid-cols-2 grid grow"},Tt={class:"editor",ref:"editor"},qt=["uid","src"],Gt={key:0,class:"relative px-4 pb-4 box-border overflow-auto h-full",style:{"max-width":"280px","min-width":"280px"}},Zt=y(()=>t("label",{class:"top-0 pt-2 pb-1 sticky w-full bg-slate-50 font-semibold inline-block mb-2"}," Git History ",-1)),Kt={class:"p-2 rounded mb-2 bg-slate-100"};function Xt(e,s,n,h,u,a){var f,w,m;return o(),l("div",{class:$(["bg-slate-50 rounded",e.fullWindow?"full-window":""]),style:{"max-width":"100%","max-height":"100%"}},[t("div",at,[t("div",rt,[k(t("button",{style:{width:"31px",height:"31px"},class:"bg-slate-200 m-0.5 mr-0 rounded text-center inline-block disabled:opacity-40 hover:bg-slate-300",onClick:s[0]||(s[0]=r=>e.show="split"),disabled:e.show==="split"},[(o(),l("svg",dt,ht))],8,nt),[[z,e.fullWindow]]),t("button",{style:{width:"31px",height:"31px"},class:"bg-slate-200 m-0.5 mr-0 rounded text-center inline-block disabled:opacity-40 hover:bg-slate-300",onClick:s[1]||(s[1]=r=>e.show="preview"),disabled:e.show==="preview"},[(o(),l("svg",pt,vt))],8,ut),t("button",{style:{width:"31px",height:"31px"},class:"bg-slate-200 m-0.5 mr-0 rounded text-center inline-block disabled:opacity-40 hover:bg-slate-300",onClick:s[2]||(s[2]=r=>e.show="code"),disabled:e.show==="code"},[(o(),l("svg",gt,bt))],8,ft),t("button",{style:{width:"31px",height:"31px"},class:"bg-slate-200 m-0.5 mr-0 rounded text-center inline-block disabled:opacity-40 hover:bg-slate-300",disabled:((f=n.user)==null?void 0:f._id)!==((w=e.application)==null?void 0:w.user_id)||e.saving,onClick:s[3]||(s[3]=r=>a.save())},[(o(),l("svg",kt,Ct))],8,_t)]),t("div",$t,[(m=e.application)!=null&&m.tailwind?(o(),l("button",Mt,[(o(),l("svg",Ht,At))])):c("",!0),t("button",{style:{width:"31px",height:"31px"},class:"bg-slate-200 m-0.5 mr-0 rounded text-center inline-block hover:bg-slate-300",title:"Open preview",onClick:s[4]||(s[4]=r=>{var g;return a.openPreview((g=e.application)==null?void 0:g.tailwind)})},[(o(),l("svg",Dt,zt))]),t("button",{style:{width:"31px",height:"31px"},class:$(["bg-slate-200 m-0.5 mr-0 rounded text-center hover:bg-slate-300 inline-block",e.showHistory?"opacity-50":""]),title:"History",onClick:s[5]||(s[5]=r=>e.showHistory=!e.showHistory)},[(o(),l("svg",Et,jt))],2),e.fullWindow?c("",!0):(o(),l("button",{key:1,style:{width:"31px",height:"31px"},class:"bg-slate-200 m-0.5 mr-0 rounded text-center inline-block hover:bg-slate-300",title:"Full window",onClick:s[6]||(s[6]=r=>(e.fullWindow=!0,e.show="split"))},[(o(),l("svg",Pt,Ut))])),e.fullWindow?(o(),l("button",{key:2,style:{width:"31px",height:"31px"},class:"bg-slate-200 m-0.5 rounded text-center inline-block hover:bg-slate-300",title:"Close full window",onClick:s[7]||(s[7]=r=>(e.fullWindow=!1,e.show="preview"))},[(o(),l("svg",Yt,Nt))])):c("",!0)])]),t("div",Ot,[t("div",Ft,[k(t("div",{class:$(["p-4 overflow-auto h-full",e.show!=="split"?"col-span-2":""])},[t("div",Tt,null,512)],2),[[z,e.show==="split"||e.show==="code"]]),k(t("div",{class:$(["p-1 overflow-auto h-full",e.show!=="split"?"col-span-2":""])},[t("iframe",{class:"bg-white h-full w-full",ref:"preview",uid:n.id,src:"https://studio.vueplay.com/preview#"+n.id},null,8,qt)],2),[[z,e.show==="split"||e.show==="preview"]])]),e.showHistory?(o(),l("div",Gt,[Zt,(o(!0),l(B,null,W(e.history,r=>{var g,v,x,C;return o(),l("div",Kt,p(r.commit.message)+" - "+p(e.moment.unix(((v=(g=r.commit)==null?void 0:g.author)==null?void 0:v.timestamp)||((C=(x=r.commit)==null?void 0:x.committer)==null?void 0:C.timestamp)).format("DD.MM.YYYY")),1)}),256))])):c("",!0)])],2)}const Jt=P(lt,[["render",Xt],["__scopeId","data-v-b5508396"]]),Qt={inject:["io","user","login","logout"],props:{id:{type:String,default:"64b1469b691f1cd6f7ad4328"}},components:{VueSfcViewer:Jt,Meta:Je},emit:["post"],data:()=>({tailwind:!0,comment:"",edit:!1,post:null,background:et,moment:Qe,categories:[]}),created(){this.refresh()},methods:{async getCategories(){const e=await this.io.service("types/categories").find();this.categories=(e==null?void 0:e.data)||[]},async postComment(){await this.login()?(await this.io.service("types/comments").create({application_id:this.post._id,comment:this.comment}),await this.refresh(),this.comment="",alert("Posted!")):alert("You need to be logged in to post a comment")},async saveComment(e){await this.io.service("types/comments").patch(e._id,{comment:e.comment}),e.edit=!1,alert("Saved")},async removeComment(e){confirm("Delete comment?")&&(await this.io.service("types/comments").remove(e._id),await this.refresh(),alert("Removed!"))},async savePost(){await this.io.service("types/applications").patch(this.post._id,{title:this.post.title,description:this.post.description,icon:this.post.icon,public:this.post.public,category_id:this.post.category_id}),await this.refresh(),this.edit=!1,alert("Saved")},async remove(e){confirm("Delete component?")&&(await this.io.service("types/applications").remove(e._id),alert("Removed!"),this.$router.push("/search"))},async refresh(){this.post=await this.io.service("types/applications").get(this.id),this.getCategories(),this.$emit("post",this.post)},async myVote(e){var n;const s=await this.io.service("types/votes").find({query:{application_id:e._id,user_id:(n=this.user)==null?void 0:n._id}});return(s==null?void 0:s[0])||!1},async vote(e){if(await this.login()){const s=await this.myVote(e);s?await this.io.service("types/votes").remove(s._id):await this.io.service("types/votes").create({application_id:e._id}),await this.refreshVotes(e)}else alert("You have to be logged in to cast a vote")},async refreshVotes(e){e.votes=await this.io.service("types/votes").find({query:{application_id:e._id}})},async myLike(e){var n;const s=await this.io.service("types/likes").find({query:{comment_id:e._id,user_id:(n=this.user)==null?void 0:n._id}});return(s==null?void 0:s[0])||!1},async like(e){if(await this.login()){const s=await this.myLike(e);s?await this.io.service("types/likes").remove(s._id):await this.io.service("types/likes").create({comment_id:e._id}),await this.refreshLikes(e)}else alert("You have to be logged in to like")},async refreshLikes(e){e.likes=await this.io.service("types/likes").find({query:{comment_id:e._id}})},selectImage(){let e=document.createElement("input");e.type="file",e.multiple=!1,e.accept="image/*",e.onchange=async()=>{let n=Array.from(e.files)[0],h=new FileReader;h.readAsDataURL(n),h.onload=async u=>{this.post.icon=await this.resizeImage(u.target.result)},h.onerror=u=>{alert("Could not load file"),console.log(u)}},e.click()},resizeImage(e){return new Promise((s,n)=>{let h=1e3,u=1e3,a=document.createElement("canvas"),f=a.getContext("2d"),w=new Image;w.onload=()=>{let m=w.width,r=w.height;m>r?m>h&&(r*=h/m,m=h):r>u&&(m*=u/r,r=u),a.width=m,a.height=r,f.drawImage(w,0,0,m,r);let g=a.toDataURL("image/png",.7);s(g)},w.src=e})}}},es={class:"p-6 md:pt-6 pb-24"},ts={class:"absolute left-0 right-0 top-0 h-16 p-2 bg-slate-50"},ss={key:1,class:"float-right mt-3 mr-4"},is={class:"mt-16"},os={class:"max-w-2xl mx-auto mt-4 flex"},ls={class:"mt-4 grow"},as={class:"flex"},rs={class:"w-16 inline-flex"},ns={class:"h-1/2 w-full"},ds=t("polygon",{points:"10,0 20,10 0,10"},null,-1),cs=[ds],hs={class:"text-center h-1/2 w-full -mt-1"},us={class:"overflow-hidden text-ellipsis max-h-20 flex-col inline-flex grow"},ps={key:0,class:"pt-2.5 text-xl font-semibold"},ws={class:"mt-4 flex"},ms={class:"w-16 inline-flex"},vs={class:"w-11"},fs={class:"overflow-hidden text-ellipsis max-h-8 flex-col inline-flex grow"},gs={class:"font-semibold mt-0.5"},ys={class:"inline-flex w-32"},bs=["src"],_s={key:0,class:"max-w-2xl mx-auto mb-8 mt-2 flex"},ks=t("div",{class:"w-16 inline-flex"},[t("div",{class:"w-16"})],-1),xs={class:"grow"},Cs={key:0,class:"text-gray-700 mb-3"},$s=["value"],Ms={class:"mt-2 flex text-gray-500"},Hs={class:"text-xs"},Vs=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 cursor-pointer inline-flex -mt-1"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1),Ls={key:1,class:"text-xs ml-1"},As=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"},null,-1),Ds=[As],Ss={class:"mt-8"},zs={class:"mt-4"},Es={class:"relative"},Bs=t("div",{class:"mt-10"},[t("p",{class:"text-gray-500"}," Activity Feed... ")],-1),Ws={class:"max-w-2xl mx-auto mt-4 flex"},js={class:"w-16 inline-flex"},Ps={class:"w-11"},Is={class:"overflow-hidden text-ellipsis max-h-8 flex-col inline-flex grow"},Us={class:"font-semibold mt-0.5"},Ys={class:"max-w-2xl mx-auto mb-8 mt-2 flex"},Rs=t("div",{class:"w-16 inline-flex"},[t("div",{class:"w-16"})],-1),Ns={class:"grow"},Os={key:0,class:"text-gray-700 mb-3"},Fs=["onUpdate:modelValue"],Ts=["onClick"],qs={class:"flex text-gray-500"},Gs=["onClick"],Zs=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"},null,-1),Ks=[Zs],Xs={class:"text-xs"},Js={key:0,class:"text-xs ml-1"},Qs=["onClick"],ei=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"},null,-1),ti=[ei],si=["onClick"],ii=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 cursor-pointer inline-flex -mt-0.5"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})],-1);function oi(e,s,n,h,u,a){var m,r,g,v,x,C,M,H,I,U,Y,R,N,O,F,T,q,G,Z,K,X,J,Q,ee,te,se,ie,oe,le,ae,re,ne,de,ce,he,ue,pe,we,me,ve,fe,ge,ye,be,_e,ke,xe,Ce,$e,Me;const f=L("Meta"),w=L("VueSfcViewer");return o(),l("section",es,[A(f,{title:(m=e.post)==null?void 0:m.title,description:(r=e.post)==null?void 0:r.description,author:(v=(g=e.post)==null?void 0:g.user)==null?void 0:v.name},null,8,["title","description","author"]),t("div",ts,[(x=a.user)!=null&&x.email||(M=(C=a.user)==null?void 0:C.value)!=null&&M.email?(o(),l("div",{key:0,class:"h-12 w-12 bg-cover rounded-full bg-slate-500 mx-auto float-right",style:E("background-image: url("+(((H=a.user)==null?void 0:H.picture)||((U=(I=a.user)==null?void 0:I.value)==null?void 0:U.picture))+")")},null,4)):c("",!0),(Y=a.user)!=null&&Y.email||(N=(R=a.user)==null?void 0:R.value)!=null&&N.email?(o(),l("div",ss,p(((O=a.user)==null?void 0:O.name)||((T=(F=a.user)==null?void 0:F.value)==null?void 0:T.name)),1)):c("",!0),(q=a.user)!=null&&q.email||(Z=(G=a.user)==null?void 0:G.value)!=null&&Z.email?(o(),l("div",{key:2,class:"float-left mt-3 ml-4 cursor-pointer text-slate-700 hover:text-slate-900 font-bold",onClick:s[0]||(s[0]=(...i)=>a.logout&&a.logout(...i))}," Logout ")):(o(),l("div",{key:3,class:"float-left mt-3 ml-4 cursor-pointer text-slate-700 hover:text-slate-900 font-bold",onClick:s[1]||(s[1]=(...i)=>a.login&&a.login(...i))}," Login "))]),t("article",is,[t("div",os,[t("div",ls,[t("div",as,[t("div",rs,[t("div",{class:$(["border w-11 h-12 rounded-lg cursor-pointer",{"bg-emerald-50":(X=(K=e.post)==null?void 0:K.votes)==null?void 0:X.find(i=>{var d;return i.user_id===((d=a.user)==null?void 0:d._id)}),"border-emerald-400":(Q=(J=e.post)==null?void 0:J.votes)==null?void 0:Q.find(i=>{var d;return i.user_id===((d=a.user)==null?void 0:d._id)}),"hover:bg-emerald-100":(te=(ee=e.post)==null?void 0:ee.votes)==null?void 0:te.find(i=>{var d;return i.user_id===((d=a.user)==null?void 0:d._id)}),"hover:bg-slate-100":!((ie=(se=e.post)==null?void 0:se.votes)!=null&&ie.find(i=>{var d;return i.user_id===((d=a.user)==null?void 0:d._id)})),"border-emerald-400":(le=(oe=e.post)==null?void 0:oe.votes)==null?void 0:le.find(i=>{var d;return i.user_id===((d=a.user)==null?void 0:d._id)})}]),onClick:s[2]||(s[2]=i=>a.vote(e.post))},[t("div",ns,[(o(),l("svg",{viewBox:"0 0 20 10",class:$(["pt-2 w-5 h-5 mx-auto",{"fill-emerald-400":(re=(ae=e.post)==null?void 0:ae.votes)==null?void 0:re.find(i=>{var d;return i.user_id===((d=a.user)==null?void 0:d._id)}),"fill-gray-400":!((de=(ne=e.post)==null?void 0:ne.votes)!=null&&de.find(i=>{var d;return i.user_id===((d=a.user)==null?void 0:d._id)}))}])},cs,2))]),t("div",hs,p((he=(ce=e.post)==null?void 0:ce.votes)==null?void 0:he.length),1)],2)]),t("div",us,[e.edit?e.post?k((o(),l("input",{key:1,class:"pt-2.5 text-xl font-semibold","onUpdate:modelValue":s[3]||(s[3]=i=>e.post.title=i)},null,512)),[[S,e.post.title]]):c("",!0):(o(),l("h1",ps,p((ue=e.post)==null?void 0:ue.title),1))])]),t("div",ws,[t("div",ms,[t("div",vs,[t("div",{class:"h-7 w-7 bg-cover rounded-full bg-slate-500 mx-auto",style:E("background-image: url("+((we=(pe=e.post)==null?void 0:pe.user)==null?void 0:we.picture)+")")},null,4)])]),t("div",fs,[t("h1",gs,p((ve=(me=e.post)==null?void 0:me.user)==null?void 0:ve.name),1)])])]),t("div",ys,[(fe=e.post)!=null&&fe.icon?(o(),l("img",{key:0,class:"rounded w-full",src:e.post.icon||e.background},null,8,bs)):c("",!0)])]),e.post?(o(),l("div",_s,[ks,t("div",xs,[e.edit?k((o(),l("textarea",{key:1,"onUpdate:modelValue":s[4]||(s[4]=i=>e.post.description=i),rows:"",cols:"",class:"rounded w-full h-32 mb-3 border",placeholder:"Description"},null,512)),[[S,e.post.description]]):(o(),l("p",Cs,p((ge=e.post)==null?void 0:ge.description),1)),A(w,{class:"rounded bg-slate-50 w-full",style:{height:"600px"},id:n.id},null,8,["id"]),e.edit?k((o(),l("select",{key:2,"onUpdate:modelValue":s[5]||(s[5]=i=>e.post.category_id=i),class:"mb-2 w-full h-10 block max-w-full pl-4 pr-2 text-sm text-gray-900 placeholder:text-slate-500 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[(o(!0),l(B,null,W(e.categories,i=>(o(),l("option",{value:i._id},p(i.title),9,$s))),256))],512)),[[Ge,e.post.category_id]]):c("",!0),b(),e.edit?(o(),l("button",{key:3,class:"mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2",onClick:s[6]||(s[6]=(...i)=>a.selectImage&&a.selectImage(...i))}," Select icon ")):c("",!0),e.edit?(o(),l("button",{key:4,class:"mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2",onClick:s[7]||(s[7]=i=>e.post.icon="")}," Remove icon ")):c("",!0),e.edit?(o(),l("button",{key:5,class:"mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2",onClick:s[8]||(s[8]=i=>e.post.public=!e.post.public)},p((ye=e.post)!=null&&ye.public?"Public":"Private"),1)):c("",!0),e.edit?(o(),l("button",{key:6,class:"mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2",onClick:s[9]||(s[9]=i=>e.edit=!e.edit)}," Cancel ")):c("",!0),e.edit?(o(),l("button",{key:7,class:"bg-emerald-400 text-white hover:bg-emerald-500 shadow rounded px-2 mb-2 py-2",onClick:s[10]||(s[10]=i=>a.savePost())}," Save ")):c("",!0),t("div",Ms,[t("span",Hs,p(e.moment(e.post.createdAt).format("MMMM DD, YYYY")),1),b(),((_e=(be=e.post)==null?void 0:be.user)==null?void 0:_e._id)===((ke=a.user)==null?void 0:ke._id)?(o(),l("span",{key:0,class:"text-xs ml-1",onClick:s[11]||(s[11]=i=>a.remove(e.post))},[b(" · "),Vs])):c("",!0),b(),!e.edit&&((Ce=(xe=e.post)==null?void 0:xe.user)==null?void 0:Ce._id)===(($e=a.user)==null?void 0:$e._id)?(o(),l("span",Ls,[b(" · "),(o(),l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 cursor-pointer inline-flex -mt-0.5",onClick:s[12]||(s[12]=i=>e.edit=!0)},Ds))])):c("",!0)]),t("div",Ss,[t("form",zs,[t("div",Es,[k(t("input",{type:"search",id:"default-search",class:"w-full h-10 block max-w-full pl-4 pr-2 text-sm text-gray-900 placeholder:text-slate-500 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Leave a comment",required:"","onUpdate:modelValue":s[13]||(s[13]=i=>e.comment=i),onKeypress:s[14]||(s[14]=Ze(Ke(i=>a.postComment(),["prevent"]),["enter"]))},null,544),[[S,e.comment]])])])]),Bs])])):c("",!0)]),(o(!0),l(B,null,W((Me=e.post)==null?void 0:Me.comments,i=>{var d,He,Ve,Le,Ae,De,Se,ze,Ee,Be,We,je,Pe,Ie;return o(),l("article",null,[t("div",Ws,[t("div",js,[t("div",Ps,[t("div",{class:"h-7 w-7 bg-cover rounded-full bg-slate-500 mx-auto",style:E("background-image: url("+((He=(d=i==null?void 0:i.user)==null?void 0:d[0])==null?void 0:He.picture)+")")},null,4)])]),t("div",Is,[t("h1",Us,p((Le=(Ve=i.user)==null?void 0:Ve[0])==null?void 0:Le.name),1)])]),t("div",Ys,[Rs,t("div",Ns,[i.edit?k((o(),l("textarea",{key:1,"onUpdate:modelValue":V=>i.comment=V,rows:"",cols:"",class:"w-full h-16 mb-3 border"},`
`,8,Fs)),[[S,i.comment]]):(o(),l("p",Os,p(i.comment),1)),i.edit?(o(),l("button",{key:2,class:"bg-emerald-400 text-white hover:bg-emerald-500 shadow rounded px-2 mb-2 py-2",onClick:V=>a.saveComment(i)}," Save ",8,Ts)):c("",!0),t("div",qs,[(o(),l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:$(["w-4 h-4 mr-1 cursor-pointer",{"fill-red-400":i.likes.length}]),onClick:V=>a.like(i)},Ks,10,Gs)),b(),t("span",Xs,p(((Ae=i.likes)==null?void 0:Ae.length)>1?((De=i.likes)==null?void 0:De.length)+" likes":"")+" "+p(((Se=i.likes)==null?void 0:Se.length)===1?((ze=i.likes)==null?void 0:ze.length)+" like":"")+" · "+p(e.moment(i.createdAt).format("MMMM DD, YYYY")),1),b(),((Be=(Ee=i==null?void 0:i.user)==null?void 0:Ee[0])==null?void 0:Be._id)===((We=a.user)==null?void 0:We._id)?(o(),l("span",Js,[b(" · "),(o(),l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 cursor-pointer inline-flex -mt-1",onClick:V=>a.removeComment(i)},ti,8,Qs))])):c("",!0),b(),((Pe=(je=i==null?void 0:i.user)==null?void 0:je[0])==null?void 0:Pe._id)===((Ie=a.user)==null?void 0:Ie._id)&&!i.edit?(o(),l("span",{key:1,class:"text-xs ml-1",onClick:V=>i.edit=!0},[b(" · "),ii],8,si)):c("",!0)])])])])}),256))])}const li=P(Qt,[["render",oi]]);const ai={props:["id"],components:{VueNavigator:Re,Footer:Ne,Component:li},data:()=>({menu:!1,post:null}),computed:{votes(){var e;return(e=this.post)==null?void 0:e.votes}}},D=e=>(Ue("data-v-2f3f15b5"),e=e(),Ye(),e),ri={class:"bg-white flex flex-col h-screen"},ni={style:{width:"100%","min-height":"calc(100vh - 50px)"},class:"flex-1 relative overflow-auto"},di={class:"relative h-full w-full flex"},ci=D(()=>t("label",{class:"bg-white fixed z-40 md:hidden cursor-pointer inline-flex items-center p-2 mt-16 lg:mt-4 ml-3 text-sm text-slate-900 rounded-lg",for:"toggle"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])],-1)),hi={class:"bottom-0 bg-white pt-10 md:w-96 md:p-7 md:shadow-md shadow-lg border-r border-slate-200 peer-checked:px-7 peer-checked:pt-16 peer-checked:md:pt-10 peer-checked:pb-7 duration-200 transition-all ease-in-out w-0 max-w-full z-30 peer-checked:w-80 absolute md:relative top-0 overflow-auto"},ui=D(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-5 h-5 -mt-1 mr-1 inline"},[t("path",{"fill-rule":"evenodd",d:"M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z","clip-rule":"evenodd"})],-1)),pi=D(()=>t("h3",{class:"text-slate-500 font-medium mb-1 whitespace-nowrap"}," Category ",-1)),wi=D(()=>t("h3",{class:"text-slate-500 mt-4 font-medium mb-2 whitespace-nowrap"}," Voters ",-1)),mi={class:"flex mb-1.5"},vi={class:"text-sm pl-2 pt-1 text-ellipsis overflow-hidden whitespace-nowrap grow"},fi={class:"flex mb-1.5"},gi=D(()=>t("div",{class:"h-7 w-7"},null,-1)),yi={class:"text-sm pl-2 pt-1 text-ellipsis overflow-hidden whitespace-nowrap grow"};function bi(e,s,n,h,u,a){var r,g;const f=L("VueNavigator"),w=L("Component",!0),m=L("Footer");return o(),l("div",ri,[A(f,{class:"absolute z-50"}),t("main",ni,[t("div",di,[ci,k(t("input",{class:"peer hidden",type:"checkbox",id:"toggle","onUpdate:modelValue":s[0]||(s[0]=v=>e.menu=v)},null,512),[[Xe,e.menu]]),t("div",hi,[t("button",{class:"border mr-2 bg-slate-50 hover:bg-slate-100 rounded-2xl pl-3 pr-4 mb-4 py-2",onClick:s[1]||(s[1]=v=>e.$router.push("/search"))},[ui,b(" Go back ")]),pi,t("span",null,p(((g=(r=e.post)==null?void 0:r.category)==null?void 0:g.title)||"Not set"),1),wi,(o(!0),l(B,null,W(a.votes,v=>{var x,C,M,H;return o(),l("div",mi,[t("div",{class:"h-7 w-7 bg-cover rounded-full bg-slate-500",style:E("background-image: url("+((C=(x=v==null?void 0:v.user)==null?void 0:x[0])==null?void 0:C.picture)+")")},null,4),t("span",vi,p((H=(M=v.user)==null?void 0:M[0])==null?void 0:H.name),1)])}),256)),t("div",fi,[gi,k(t("span",yi," and 35 more... ",512),[[z,!1]])])]),A(w,{class:"bg-white m-auto grow h-full overflow-auto pt-16 lg:pt-7 relative",onPost:s[2]||(s[2]=v=>e.post=v),id:n.id},null,8,["id"]),e.menu?(o(),l("div",{key:0,class:"absolute h-full w-full",onClick:s[3]||(s[3]=v=>e.menu=!1)})):c("",!0)])]),A(m)])}const Li=P(ai,[["render",bi],["__scopeId","data-v-2f3f15b5"]]);export{Li as default};
