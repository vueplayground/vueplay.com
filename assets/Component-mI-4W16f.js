import{V as lt,F as at}from"./Footer-Dh_QI2-P.js";import{loadTheme as rt,loadGrammars as nt}from"https://cdn.jsdelivr.net/npm/monaco-volar@0.4.0/+esm";import*as dt from"https://cdn.jsdelivr.net/npm/onigasm@2.2.5/+esm";import*as b from"https://cdn.jsdelivr.net/npm/monaco-editor-core-colorpicker@0.38.0/+esm";import _ from"https://cdn.jsdelivr.net/npm/@volar/monaco@1.10.1/+esm";import ut from"https://cdn.jsdelivr.net/npm/moment@2.29.4/+esm";import{_ as B,o as l,c as a,d as s,j as k,s as E,f as u,i as M,F as S,h as W,t as w,a as z,n as L,p as D,e as y,m as ot,q as pt,k as ht,r as A,v as wt}from"./index-CJMNy9Uj.js";import{M as mt}from"./Meta-BCm7FtrA.js";import{h as vt}from"./moment-C5S46NFB.js";import{d as ct}from"./defaultBase64Image-DIUyioUE.js";function gt(){if(!window.loadedOnigasm)return window.loadedOnigasm=!0,dt.loadWASM("https://cdn.jsdelivr.net/npm/onigasm@2.2.5/lib/onigasm.wasm")}let ft=async()=>{let e="https://cdn.jsdelivr.net/npm/monaco-volar@0.4.0/dist/worker/vue.worker.js";return new Worker(URL.createObjectURL(new Blob([`
		const process = { env: { NODE_ENV: 'development' } }
		${await(await fetch(e)).text()}
    `],{type:"text/javascript"})))},yt=async()=>new Worker(URL.createObjectURL(new Blob([`
        self.MonacoEnvironment = { baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min' }
        importScripts('https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs/base/worker/workerMain.min.js')
  	`],{type:"text/javascript"})));async function bt(){let e=!1;b.languages.register({id:"vue",extensions:[".vue"]}),b.languages.onLanguage("vue",t);async function t(){if(e)return;e=!0,window.MonacoEnvironment={},window.MonacoEnvironment.getWorker=async()=>yt();const n=window.MonacoEnvironment.getWorker;window.MonacoEnvironment.getWorker=async(g,m)=>m==="vue"?await ft():n();const p=b.editor.createWebWorker({moduleId:"vs/language/vue/vueWorker",label:"vue",createData:{}}),h=["vue"],o=()=>b.editor.getModels().map(g=>g.uri);_.editor.activateMarkers(p,h,"vue",o,b.editor),_.editor.activateAutoInsertion(p,h,o,b.editor),await _.languages.registerProvides(p,h,o,b.languages)}await t()}const kt={inject:["io"],props:{id:{type:String,default:"64b1469b691f1cd6f7ad4328"},user:{type:Object,default:null}},data:()=>({identifier:null,moment:ut,fullWindow:!1,show:"preview",showHistory:!1,history:null,application:null,raw:"",preview:"",webComponent:"",webComponentPreview:"",livePreview:"",livePreviewWebComponent:"",html:"",htmlWebComponent:"",htmlBase64:"",iframe:"",esm:"",esmWebComponent:"",esmBase64:"",version:0,saving:!1}),computed:{iframeSource(){var e;return`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=preview${(e=this.application)!=null&&e.tailwind?"-tw":""}&v=${this.version}`}},async created(){const t=new URLSearchParams(window.location.search).get("id");if(t?this.identifier=t:this.identifier=this.id,await this.init(),!this.io)return;const n=this.io.service("types/applications");n.on("updated",p=>{String(p._id)===String(this.identifier)&&this.init()}),n.on("patched",p=>{String(p._id)===String(this.identifier)&&this.init()})},watch:{raw(e){this.$refs.preview.contentWindow.postMessage({raw:e},"*")}},methods:{async init(){await this.refresh(),await this.loadEditor()},async refresh(){this.application=await this.getApplication(),this.history=await this.getHistory(),this.raw=await this.getRaw(),this.preview=await this.getPreview(this.application.tailwind)},async loadEditor(){const e=async t=>{let n=b.editor.getModel("demo.vue");n?n.setValue(this.raw):n=b.editor.createModel(this.raw,"vue","demo.vue");const p=this.$refs.editor,h=b.editor.create(p,{theme:t,model:n,selectOnLineNumbers:!0,automaticLayout:!0,autoIndent:!0,wordWrapOverride1:"off","semanticHighlighting.enabled":!0}),o=h._themeService._theme;o.getTokenStyleMetadata=(g,m,v)=>{const r=m.includes("readonly");switch(g){case"function":case"method":return{foreground:12};case"class":return{foreground:11};case"variable":case"property":return{foreground:r?21:9};default:return{foreground:0}}},nt(b,h),h.onDidChangeModelContent(()=>{this.raw=h.getValue()})};Promise.all([bt(),gt(),rt(b.editor)]).then(([,,t])=>{e(t.light)})},async getApplication(){return(await fetch(`https://api.vueplay.io/types/applications/${this.identifier}`)).json()},async getHistory(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}`)).json()},async getRaw(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=vue`)).text()},async getPreview(e=!1){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=preview${e?"-tw":""}`)).text()},async getLivePreview(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=live-preview`)).text()},async getLivePreviewWebComponent(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=live-preview-wc`)).text()},async getWebComponent(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=webcomponent`)).text()},async getWebComponentPreview(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=preview-wc`)).text()},async getHtml(e=!1){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=html${e?"-tw":""}`)).text()},async getHtmlWebComponentPreview(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=html-wc`)).text()},async getHtmlBase64(e=!1){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=html-base64${e?"-tw":""}`)).text()},async getIframe(e=!1){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=iframe${e?"-tw":""}`)).text()},async getESM(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=esm`)).text()},async getESMWebComponent(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=esmwc`)).text()},async getESMBase64(){return(await fetch(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=base64`)).text()},openPreview(e){window.open(`https://api.vueplay.io/types/sfc/${this.identifier}?ref=HEAD&type=preview${e?"-tw":""}`,"_blank")},async save(){this.saving=!0;try{let e=await this.io.service("types/sfc").patch(this.id,{content:this.raw,token:await this.io.authentication.getAccessToken()});this.version++,await this.refresh()}catch{alert("You do not have permission to make patches")}this.saving=!1}}},xt={class:"grid-cols-2 grid bg-slate-100 pt-1 px-1",style:{width:"100%",height:"40px"}},Ct={class:"h-full"},Mt=["disabled"],Ht={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"mx-auto",style:{width:"80%",height:"80%",padding:"10%"}},Vt=["disabled"],$t={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"mx-auto",style:{width:"80%",height:"80%",padding:"10%"}},Lt=["disabled"],zt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"mx-auto",style:{width:"80%",height:"80%",padding:"10%"}},At=["disabled"],Dt={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"mx-auto animate-spin",style:{width:"80%",height:"80%",padding:"10%"}},Et={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"mx-auto",style:{width:"80%",height:"80%",padding:"10%"}},St={class:"text-right h-full"},Wt={key:0,style:{width:"31px",height:"31px"},class:"bg-slate-200 m-0.5 mr-0 rounded text-center inline-block",title:"Depends on Tailwind"},_t={xmlns:"http://www.w3.org/2000/svg",width:"1000",height:"1000",viewBox:"0 0 1000 1000",fill:"none",style:{width:"80%",height:"80%",padding:"10%"},class:"m-auto"},Bt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"mx-auto",style:{width:"80%",height:"80%",padding:"10%"}},Pt={xmlns:"http://www.w3.org/2000/svg",width:"92pt",height:"92pt",viewBox:"0 0 92 92",class:"mx-auto",style:{width:"80%",height:"80%",padding:"10%"}},jt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"mx-auto",style:{width:"80%",height:"80%",padding:"10%"}},It={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"mx-auto",style:{width:"80%",height:"80%",padding:"10%"}},Ut={class:"flex-row flex bg-slate-50",style:{width:"100%",height:"calc(100% - 40px)"}},Yt={class:"grid-cols-2 grid grow"},Rt={class:"editor",ref:"editor"},Nt=["uid","src"],Ft={key:0,class:"relative px-4 pb-4 box-border overflow-auto h-full",style:{"max-width":"280px","min-width":"280px"}},Ot={class:"p-2 rounded mb-2 bg-slate-100"};function Tt(e,t,n,p,h,o){var g,m,v;return l(),a("div",{class:M(["bg-slate-50 rounded",e.fullWindow?"full-window":""]),style:{"max-width":"100%","max-height":"100%"}},[s("div",xt,[s("div",Ct,[k(s("button",{style:{width:"31px",height:"31px"},class:"bg-slate-200 m-0.5 mr-0 rounded text-center inline-block disabled:opacity-40 hover:bg-slate-300",onClick:t[0]||(t[0]=r=>e.show="split"),disabled:e.show==="split",title:"Split View"},[(l(),a("svg",Ht,t[8]||(t[8]=[s("path",{d:"M15 3.75H9v16.5h6V3.75zM16.5 20.25h3.375c1.035 0 1.875-.84 1.875-1.875V5.625c0-1.036-.84-1.875-1.875-1.875H16.5v16.5zM4.125 3.75H7.5v16.5H4.125a1.875 1.875 0 01-1.875-1.875V5.625c0-1.036.84-1.875 1.875-1.875z"},null,-1)])))],8,Mt),[[E,e.fullWindow]]),s("button",{style:{width:"31px",height:"31px"},class:"bg-slate-200 m-0.5 mr-0 rounded text-center inline-block disabled:opacity-40 hover:bg-slate-300",onClick:t[1]||(t[1]=r=>e.show="preview"),title:"Preview Changes",disabled:e.show==="preview"},[(l(),a("svg",$t,t[9]||(t[9]=[s("path",{d:"M12 15a3 3 0 100-6 3 3 0 000 6z"},null,-1),s("path",{"fill-rule":"evenodd",d:"M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z","clip-rule":"evenodd"},null,-1)])))],8,Vt),s("button",{style:{width:"31px",height:"31px"},class:"bg-slate-200 m-0.5 mr-0 rounded text-center inline-block disabled:opacity-40 hover:bg-slate-300",onClick:t[2]||(t[2]=r=>e.show="code"),title:"Code Editor",disabled:e.show==="code"},[(l(),a("svg",zt,t[10]||(t[10]=[s("path",{"fill-rule":"evenodd",d:"M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z","clip-rule":"evenodd"},null,-1)])))],8,Lt),s("button",{style:{width:"31px",height:"31px"},class:"bg-slate-200 m-0.5 mr-0 rounded text-center inline-block disabled:opacity-40 hover:bg-slate-300",disabled:((g=n.user)==null?void 0:g._id)!==((m=e.application)==null?void 0:m.user_id)||e.saving,title:"Save Changes",onClick:t[3]||(t[3]=r=>o.save())},[e.saving?(l(),a("svg",Dt,t[11]||(t[11]=[s("path",{"fill-rule":"evenodd",d:"M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z","clip-rule":"evenodd"},null,-1)]))):(l(),a("svg",Et,t[12]||(t[12]=[s("path",{"fill-rule":"evenodd",d:"M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z","clip-rule":"evenodd"},null,-1)])))],8,At)]),s("div",St,[(v=e.application)!=null&&v.tailwind?(l(),a("button",Wt,[(l(),a("svg",_t,t[13]||(t[13]=[s("path",{d:"M489.5 226.499C328 231.632 280 346.999 269 409.499C283.333 386.332 328.5 335.5 395 335.5C472.5 335.5 531.5 422 567.5 449C611.237 481.803 699.123 525.115 814.5 490C906.5 462 949.167 364.332 958.5 317.999C914 378.499 846.5 414.838 763 371.999C705.5 342.499 662.5 221 489.5 226.499Z",fill:"#07B6D5"},null,-1),s("path",{d:"M261 500.999C99.5 506.132 51.5 621.499 40.5 683.999C54.8333 660.832 100 610 166.5 610C244 610 303 696.5 339 723.5C382.737 756.303 470.623 799.615 586 764.5C678 736.5 720.667 638.832 730 592.499C685.5 652.999 618 689.338 534.5 646.499C477 616.999 434 495.5 261 500.999Z",fill:"#07B6D5"},null,-1)])))])):u("",!0),s("button",{style:{width:"31px",height:"31px"},class:"bg-slate-200 m-0.5 mr-0 rounded text-center inline-block hover:bg-slate-300",title:"Preview in New Window",onClick:t[4]||(t[4]=r=>{var f;return o.openPreview((f=e.application)==null?void 0:f.tailwind)})},[(l(),a("svg",Bt,t[14]||(t[14]=[s("path",{"fill-rule":"evenodd",d:"M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z","clip-rule":"evenodd"},null,-1)])))]),s("button",{style:{width:"31px",height:"31px"},class:M(["bg-slate-200 m-0.5 mr-0 rounded text-center hover:bg-slate-300 inline-block",e.showHistory?"opacity-50":""]),title:"Git History",onClick:t[5]||(t[5]=r=>e.showHistory=!e.showHistory)},[(l(),a("svg",Pt,t[15]||(t[15]=[s("defs",null,[s("clipPath",{id:"a"},[s("path",{d:"M0 .113h91.887V92H0Zm0 0"})])],-1),s("g",{"clip-path":"url(#a)"},[s("path",{style:{stroke:"none","fill-rule":"nonzero",fill:"#100f0d","fill-opacity":"1"},d:"M90.156 41.965 50.036 1.848a5.913 5.913 0 0 0-8.368 0l-8.332 8.332 10.566 10.566a7.03 7.03 0 0 1 7.23 1.684 7.043 7.043 0 0 1 1.673 7.277l10.183 10.184a7.026 7.026 0 0 1 7.278 1.672 7.04 7.04 0 0 1 0 9.957 7.045 7.045 0 0 1-9.961 0 7.038 7.038 0 0 1-1.532-7.66l-9.5-9.497V59.36a7.04 7.04 0 0 1 1.86 11.29 7.04 7.04 0 0 1-9.957 0 7.04 7.04 0 0 1 0-9.958 7.034 7.034 0 0 1 2.308-1.539V33.926a7.001 7.001 0 0 1-2.308-1.535 7.049 7.049 0 0 1-1.516-7.7L29.242 14.273 1.734 41.777a5.918 5.918 0 0 0 0 8.371L41.855 90.27a5.92 5.92 0 0 0 8.368 0l39.933-39.934a5.925 5.925 0 0 0 0-8.371"})],-1)])))],2),e.fullWindow?u("",!0):(l(),a("button",{key:1,style:{width:"31px",height:"31px"},class:"bg-slate-200 m-0.5 mr-0 rounded text-center inline-block hover:bg-slate-300",title:"Expand View",onClick:t[6]||(t[6]=r=>(e.fullWindow=!0,e.show="split"))},[(l(),a("svg",jt,t[16]||(t[16]=[s("path",{"fill-rule":"evenodd",d:"M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 01-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h2.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z","clip-rule":"evenodd"},null,-1)])))])),e.fullWindow?(l(),a("button",{key:2,style:{width:"31px",height:"31px"},class:"bg-slate-200 m-0.5 rounded text-center inline-block hover:bg-slate-300",title:"Shrink View",onClick:t[7]||(t[7]=r=>(e.fullWindow=!1,e.show="preview"))},[(l(),a("svg",It,t[17]||(t[17]=[s("path",{"fill-rule":"evenodd",d:"M3.22 3.22a.75.75 0 011.06 0l3.97 3.97V4.5a.75.75 0 011.5 0V9a.75.75 0 01-.75.75H4.5a.75.75 0 010-1.5h2.69L3.22 4.28a.75.75 0 010-1.06zm17.56 0a.75.75 0 010 1.06l-3.97 3.97h2.69a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75V4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0zM3.75 15a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-2.69l-3.97 3.97a.75.75 0 01-1.06-1.06l3.97-3.97H4.5a.75.75 0 01-.75-.75zm10.5 0a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-2.69l3.97 3.97a.75.75 0 11-1.06 1.06l-3.97-3.97v2.69a.75.75 0 01-1.5 0V15z","clip-rule":"evenodd"},null,-1)])))])):u("",!0)])]),s("div",Ut,[s("div",Yt,[k(s("div",{class:M(["p-4 overflow-auto h-full",e.show!=="split"?"col-span-2":""])},[s("div",Rt,null,512)],2),[[E,e.show==="split"||e.show==="code"]]),k(s("div",{class:M(["p-1 overflow-auto h-full",e.show!=="split"?"col-span-2":""])},[s("iframe",{class:"bg-white h-full w-full",ref:"preview",uid:n.id,src:"https://studio.vueplay.com/preview#"+n.id},null,8,Nt)],2),[[E,e.show==="split"||e.show==="preview"]])]),e.showHistory?(l(),a("div",Ft,[t[18]||(t[18]=s("label",{class:"top-0 pt-2 pb-1 sticky w-full bg-slate-50 font-semibold inline-block mb-2"}," Git History ",-1)),(l(!0),a(S,null,W(e.history,r=>{var f,c,x,C;return l(),a("div",Ot,w(e.moment.unix(((c=(f=r.commit)==null?void 0:f.author)==null?void 0:c.timestamp)||((C=(x=r.commit)==null?void 0:x.committer)==null?void 0:C.timestamp)).format("DD.MM.YYYY - HH:mm"))+" | "+w(r.commit.message),1)}),256))])):u("",!0)])],2)}const qt=B(kt,[["render",Tt],["__scopeId","data-v-07a05655"]]),Gt={inject:["io","user","login","logout"],props:{id:{type:String,default:"64b1469b691f1cd6f7ad4328"}},components:{VueSfcViewer:qt,Meta:mt},emit:["post"],data:()=>({tailwind:!0,comment:"",edit:!1,post:null,background:ct,moment:vt,categories:[]}),created(){this.refresh()},methods:{async getCategories(){const e=await this.io.service("types/categories").find();this.categories=(e==null?void 0:e.data)||[]},async postComment(){await this.login()?(await this.io.service("types/comments").create({application_id:this.post._id,comment:this.comment}),await this.refresh(),this.comment="",alert("Posted!")):alert("You need to be logged in to post a comment")},async saveComment(e){await this.io.service("types/comments").patch(e._id,{comment:e.comment}),e.edit=!1,alert("Saved")},async removeComment(e){confirm("Delete comment?")&&(await this.io.service("types/comments").remove(e._id),await this.refresh(),alert("Removed!"))},async savePost(){await this.io.service("types/applications").patch(this.post._id,{title:this.post.title,description:this.post.description,icon:this.post.icon,public:this.post.public,category_id:this.post.category_id,published:this.post.published}),await this.refresh(),this.edit=!1,alert("Saved")},async remove(e){confirm("Delete component?")&&(await this.io.service("types/applications").remove(e._id),alert("Removed!"),this.$router.push("/search"))},async refresh(){this.post=await this.io.service("types/applications").get(this.id),this.getCategories(),this.$emit("post",this.post)},async myVote(e){var n;const t=await this.io.service("types/votes").find({query:{application_id:e._id,user_id:(n=this.user)==null?void 0:n._id}});return(t==null?void 0:t[0])||!1},async vote(e){if(await this.login()){const t=await this.myVote(e);t?await this.io.service("types/votes").remove(t._id):await this.io.service("types/votes").create({application_id:e._id}),await this.refreshVotes(e)}else alert("You have to be logged in to cast a vote")},async refreshVotes(e){e.votes=await this.io.service("types/votes").find({query:{application_id:e._id}})},async myLike(e){var n;const t=await this.io.service("types/likes").find({query:{comment_id:e._id,user_id:(n=this.user)==null?void 0:n._id}});return(t==null?void 0:t[0])||!1},async like(e){if(await this.login()){const t=await this.myLike(e);t?await this.io.service("types/likes").remove(t._id):await this.io.service("types/likes").create({comment_id:e._id}),await this.refreshLikes(e)}else alert("You have to be logged in to like")},async refreshLikes(e){e.likes=await this.io.service("types/likes").find({query:{comment_id:e._id}})},selectImage(){let e=document.createElement("input");e.type="file",e.multiple=!1,e.accept="image/*",e.onchange=async()=>{let n=Array.from(e.files)[0],p=new FileReader;p.readAsDataURL(n),p.onload=async h=>{this.post.icon=await this.resizeImage(h.target.result)},p.onerror=h=>{alert("Could not load file"),console.log(h)}},e.click()},resizeImage(e){return new Promise((t,n)=>{let p=1e3,h=1e3,o=document.createElement("canvas"),g=o.getContext("2d"),m=new Image;m.onload=()=>{let v=m.width,r=m.height;v>r?v>p&&(r*=p/v,v=p):r>h&&(v*=h/r,r=h),o.width=v,o.height=r,g.drawImage(m,0,0,v,r);let f=o.toDataURL("image/png",.7);t(f)},m.src=e})}}},Zt={class:"p-6 md:pt-6 pb-24"},Kt={class:"absolute left-0 right-0 top-0 h-16 p-2 bg-slate-50"},Xt={key:1,class:"float-right mt-3 mr-4"},Jt={class:"mt-16"},Qt={class:"max-w-2xl mx-auto mt-4 flex"},es={class:"mt-4 grow"},ts={class:"flex"},ss={class:"w-16 inline-flex"},is={class:"h-1/2 w-full"},os={class:"text-center h-1/2 w-full -mt-1"},ls={class:"overflow-hidden text-ellipsis max-h-20 flex-col inline-flex grow"},as={key:0,class:"pt-2.5 text-xl font-semibold"},rs={class:"mt-4 flex"},ns={class:"w-16 inline-flex"},ds={class:"w-11"},us={class:"overflow-hidden text-ellipsis max-h-8 flex-col inline-flex grow"},ps={class:"font-semibold mt-0.5"},hs=["src"],ws={key:0,class:"max-w-2xl mx-auto mb-8 mt-2 flex"},ms={class:"grow"},vs={key:0,class:"text-gray-700 mb-3"},cs=["value"],gs={class:"mt-2 flex text-gray-500"},fs={class:"text-xs"},ys={key:1,class:"text-xs ml-1"},bs={class:"mt-8"},ks={class:"mt-4"},xs={class:"relative"},Cs={class:"max-w-2xl mx-auto mt-4 flex"},Ms={class:"w-16 inline-flex"},Hs={class:"w-11"},Vs={class:"overflow-hidden text-ellipsis max-h-8 flex-col inline-flex grow"},$s={class:"font-semibold mt-0.5"},Ls={class:"max-w-2xl mx-auto mb-8 mt-2 flex"},zs={class:"grow"},As={key:0,class:"text-gray-700 mb-3"},Ds=["onUpdate:modelValue"],Es=["onClick"],Ss={class:"flex text-gray-500"},Ws=["onClick"],_s={class:"text-xs"},Bs={key:0,class:"text-xs ml-1"},Ps=["onClick"],js=["onClick"];function Is(e,t,n,p,h,o){var v,r,f,c,x,C,H,V,P,j,I,U,Y,R,N,F,O,T,q,G,Z,K,X,J,Q,ee,te,se,ie,oe,le,ae,re,ne,de,ue,pe,he,we,me,ve,ce,ge,fe,ye,be,ke,xe,Ce,Me,He,Ve,$e,Le,ze,Ae,De,Ee,Se,We,_e,Be,Pe,je,Ie,Ue,Ye,Re,Ne,Fe;const g=A("Meta"),m=A("VueSfcViewer");return l(),a("section",Zt,[z(g,{title:(v=e.post)==null?void 0:v.title,description:(r=e.post)==null?void 0:r.description,author:(c=(f=e.post)==null?void 0:f.user)==null?void 0:c.name},null,8,["title","description","author"]),s("div",Kt,[(x=o.user)!=null&&x.email||(H=(C=o.user)==null?void 0:C.value)!=null&&H.email?(l(),a("div",{key:0,class:"h-12 w-12 bg-cover rounded-full bg-slate-500 mx-auto float-right",style:L("background-image: url("+(((V=o.user)==null?void 0:V.picture)||((j=(P=o.user)==null?void 0:P.value)==null?void 0:j.picture))+")")},null,4)):u("",!0),(I=o.user)!=null&&I.email||(Y=(U=o.user)==null?void 0:U.value)!=null&&Y.email?(l(),a("div",Xt,w(((R=o.user)==null?void 0:R.name)||((F=(N=o.user)==null?void 0:N.value)==null?void 0:F.name)),1)):u("",!0),(O=o.user)!=null&&O.email||(q=(T=o.user)==null?void 0:T.value)!=null&&q.email?(l(),a("div",{key:2,class:"float-left mt-3 ml-4 cursor-pointer text-slate-700 hover:text-slate-900 font-bold",onClick:t[0]||(t[0]=(...i)=>o.logout&&o.logout(...i))}," Logout ")):(l(),a("div",{key:3,class:"float-left mt-3 ml-4 cursor-pointer text-slate-700 hover:text-slate-900 font-bold",onClick:t[1]||(t[1]=(...i)=>o.login&&o.login(...i))}," Login "))]),s("article",Jt,[s("div",Qt,[s("div",es,[s("div",ts,[s("div",ss,[s("div",{class:M(["border w-11 h-12 rounded-lg cursor-pointer",{"bg-emerald-50":(Z=(G=e.post)==null?void 0:G.votes)==null?void 0:Z.find(i=>{var d;return i.user_id===((d=o.user)==null?void 0:d._id)}),"border-emerald-400":(X=(K=e.post)==null?void 0:K.votes)==null?void 0:X.find(i=>{var d;return i.user_id===((d=o.user)==null?void 0:d._id)}),"hover:bg-emerald-100":(Q=(J=e.post)==null?void 0:J.votes)==null?void 0:Q.find(i=>{var d;return i.user_id===((d=o.user)==null?void 0:d._id)}),"hover:bg-slate-100":!((te=(ee=e.post)==null?void 0:ee.votes)!=null&&te.find(i=>{var d;return i.user_id===((d=o.user)==null?void 0:d._id)})),"border-emerald-400":(ie=(se=e.post)==null?void 0:se.votes)==null?void 0:ie.find(i=>{var d;return i.user_id===((d=o.user)==null?void 0:d._id)})}]),onClick:t[2]||(t[2]=i=>o.vote(e.post))},[s("div",is,[(l(),a("svg",{viewBox:"0 0 20 10",class:M(["pt-2 w-5 h-5 mx-auto",{"fill-emerald-400":(le=(oe=e.post)==null?void 0:oe.votes)==null?void 0:le.find(i=>{var d;return i.user_id===((d=o.user)==null?void 0:d._id)}),"fill-gray-400":!((re=(ae=e.post)==null?void 0:ae.votes)!=null&&re.find(i=>{var d;return i.user_id===((d=o.user)==null?void 0:d._id)}))}])},t[16]||(t[16]=[s("polygon",{points:"10,0 20,10 0,10"},null,-1)]),2))]),s("div",os,w((de=(ne=e.post)==null?void 0:ne.votes)==null?void 0:de.length),1)],2)]),s("div",ls,[e.edit?e.post?k((l(),a("input",{key:1,class:"pt-2.5 text-xl font-semibold","onUpdate:modelValue":t[3]||(t[3]=i=>e.post.title=i)},null,512)),[[D,e.post.title]]):u("",!0):(l(),a("h1",as,w((ue=e.post)==null?void 0:ue.title),1))])]),s("div",rs,[s("div",ns,[s("div",ds,[s("div",{class:"h-7 w-7 bg-cover rounded-full bg-slate-500 mx-auto",style:L("background-image: url("+((he=(pe=e.post)==null?void 0:pe.user)==null?void 0:he.picture)+")")},null,4)])]),s("div",us,[s("h1",ps,w((me=(we=e.post)==null?void 0:we.user)==null?void 0:me.name),1)])])]),s("div",{class:"inline-flex w-32 rounded",style:L(["background: url("+(((ve=e.post)==null?void 0:ve.icon)||e.background)+")",{"background-repeat":"no-repeat","background-size":"contain","background-position":"center","background-color":"#F5F5F5"}])},[(ce=e.post)!=null&&ce.icon?(l(),a("img",{key:0,class:"rounded w-full opacity-0",src:((ge=e.post)==null?void 0:ge.icon)||e.background},null,8,hs)):u("",!0)],4)]),e.post?(l(),a("div",ws,[t[26]||(t[26]=s("div",{class:"w-16 inline-flex"},[s("div",{class:"w-16"})],-1)),s("div",ms,[e.edit?k((l(),a("textarea",{key:1,"onUpdate:modelValue":t[4]||(t[4]=i=>e.post.description=i),rows:"",cols:"",class:"rounded w-full h-32 mb-3 border",placeholder:"Description"},null,512)),[[D,e.post.description]]):(l(),a("p",vs,w((fe=e.post)==null?void 0:fe.description),1)),z(m,{class:"rounded bg-slate-50 w-full",style:{height:"600px"},id:n.id,user:o.user},null,8,["id","user"]),t[23]||(t[23]=y()),e.edit&&((be=(ye=o.user)==null?void 0:ye.permissions)!=null&&be.includes("admin")||(Ce=(xe=(ke=o.user)==null?void 0:ke.value)==null?void 0:xe.permissions)!=null&&Ce.includes("admin"))?k((l(),a("select",{key:2,"onUpdate:modelValue":t[5]||(t[5]=i=>e.post.published=i),class:"mt-2 mb-2 w-full h-10 block max-w-full pl-4 pr-2 text-sm text-gray-900 placeholder:text-slate-500 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},t[17]||(t[17]=[s("option",{value:!1}," Not published ",-1),s("option",{value:!0}," Published ",-1)]),512)),[[ot,e.post.published]]):u("",!0),e.edit?k((l(),a("select",{key:3,"onUpdate:modelValue":t[6]||(t[6]=i=>e.post.category_id=i),class:"mt-2 mb-2 w-full h-10 block max-w-full pl-4 pr-2 text-sm text-gray-900 placeholder:text-slate-500 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[(l(!0),a(S,null,W(e.categories,i=>(l(),a("option",{value:i._id},w(i.title),9,cs))),256))],512)),[[ot,e.post.category_id]]):u("",!0),t[24]||(t[24]=y()),e.edit?(l(),a("button",{key:4,class:"mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2",onClick:t[7]||(t[7]=(...i)=>o.selectImage&&o.selectImage(...i))}," Select icon ")):u("",!0),e.edit?(l(),a("button",{key:5,class:"mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2",onClick:t[8]||(t[8]=i=>e.post.icon="")}," Remove icon ")):u("",!0),e.edit?(l(),a("button",{key:6,class:"mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2",onClick:t[9]||(t[9]=i=>e.post.public=!e.post.public)},w((Me=e.post)!=null&&Me.public?"Public":"Private"),1)):u("",!0),e.edit?(l(),a("button",{key:7,class:"mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2",onClick:t[10]||(t[10]=i=>e.edit=!e.edit)}," Cancel ")):u("",!0),e.edit?(l(),a("button",{key:8,class:"bg-emerald-400 text-white hover:bg-emerald-500 shadow rounded px-2 mb-2 py-2",onClick:t[11]||(t[11]=i=>o.savePost())}," Save ")):u("",!0),s("div",gs,[s("span",fs,w(e.moment(e.post.createdAt).format("MMMM DD, YYYY")),1),t[21]||(t[21]=y()),((Ve=(He=e.post)==null?void 0:He.user)==null?void 0:Ve._id)===(($e=o.user)==null?void 0:$e._id)||((ze=(Le=e.post)==null?void 0:Le.user)==null?void 0:ze._id)===((De=(Ae=o.user)==null?void 0:Ae.value)==null?void 0:De._id)?(l(),a("span",{key:0,class:"text-xs ml-1",onClick:t[12]||(t[12]=i=>o.remove(e.post))},t[18]||(t[18]=[y(" · "),s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 cursor-pointer inline-flex -mt-1"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1)]))):u("",!0),t[22]||(t[22]=y()),!e.edit&&(((Se=(Ee=e.post)==null?void 0:Ee.user)==null?void 0:Se._id)===((We=o.user)==null?void 0:We._id)||((Be=(_e=e.post)==null?void 0:_e.user)==null?void 0:Be._id)===((je=(Pe=o.user)==null?void 0:Pe.value)==null?void 0:je._id)||(Ue=(Ie=o.user)==null?void 0:Ie.permissions)!=null&&Ue.includes("admin")||(Ne=(Re=(Ye=o.user)==null?void 0:Ye.value)==null?void 0:Re.permissions)!=null&&Ne.includes("admin"))?(l(),a("span",ys,[t[20]||(t[20]=y(" · ")),(l(),a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 cursor-pointer inline-flex -mt-0.5",onClick:t[13]||(t[13]=i=>e.edit=!0)},t[19]||(t[19]=[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"},null,-1)])))])):u("",!0)]),s("div",bs,[s("form",ks,[s("div",xs,[k(s("input",{type:"search",id:"default-search",class:"w-full h-10 block max-w-full pl-4 pr-2 text-sm text-gray-900 placeholder:text-slate-500 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Leave a comment",required:"","onUpdate:modelValue":t[14]||(t[14]=i=>e.comment=i),onKeypress:t[15]||(t[15]=pt(ht(i=>o.postComment(),["prevent"]),["enter"]))},null,544),[[D,e.comment]])])])]),t[25]||(t[25]=s("div",{class:"mt-10"},[s("p",{class:"text-gray-500"}," Activity Feed... ")],-1))])])):u("",!0)]),(l(!0),a(S,null,W((Fe=e.post)==null?void 0:Fe.comments,i=>{var d,Oe,Te,qe,Ge,Ze,Ke,Xe,Je,Qe,et,tt,st,it;return l(),a("article",null,[s("div",Cs,[s("div",Ms,[s("div",Hs,[s("div",{class:"h-7 w-7 bg-cover rounded-full bg-slate-500 mx-auto",style:L("background-image: url("+((Oe=(d=i==null?void 0:i.user)==null?void 0:d[0])==null?void 0:Oe.picture)+")")},null,4)])]),s("div",Vs,[s("h1",$s,w((qe=(Te=i.user)==null?void 0:Te[0])==null?void 0:qe.name),1)])]),s("div",Ls,[t[34]||(t[34]=s("div",{class:"w-16 inline-flex"},[s("div",{class:"w-16"})],-1)),s("div",zs,[i.edit?k((l(),a("textarea",{key:1,"onUpdate:modelValue":$=>i.comment=$,rows:"",cols:"",class:"w-full h-16 mb-3 border"},"",8,Ds)),[[D,i.comment]]):(l(),a("p",As,w(i.comment),1)),i.edit?(l(),a("button",{key:2,class:"bg-emerald-400 text-white hover:bg-emerald-500 shadow rounded px-2 mb-2 py-2",onClick:$=>o.saveComment(i)}," Save ",8,Es)):u("",!0),s("div",Ss,[(l(),a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:M(["w-4 h-4 mr-1 cursor-pointer",{"fill-red-400":i.likes.length}]),onClick:$=>o.like(i)},t[27]||(t[27]=[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"},null,-1)]),10,Ws)),t[31]||(t[31]=y()),s("span",_s,w(((Ge=i.likes)==null?void 0:Ge.length)>1?((Ze=i.likes)==null?void 0:Ze.length)+" likes":"")+" "+w(((Ke=i.likes)==null?void 0:Ke.length)===1?((Xe=i.likes)==null?void 0:Xe.length)+" like":"")+" · "+w(e.moment(i.createdAt).format("MMMM DD, YYYY")),1),t[32]||(t[32]=y()),((Qe=(Je=i==null?void 0:i.user)==null?void 0:Je[0])==null?void 0:Qe._id)===((et=o.user)==null?void 0:et._id)?(l(),a("span",Bs,[t[29]||(t[29]=y(" · ")),(l(),a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 cursor-pointer inline-flex -mt-1",onClick:$=>o.removeComment(i)},t[28]||(t[28]=[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"},null,-1)]),8,Ps))])):u("",!0),t[33]||(t[33]=y()),((st=(tt=i==null?void 0:i.user)==null?void 0:tt[0])==null?void 0:st._id)===((it=o.user)==null?void 0:it._id)&&!i.edit?(l(),a("span",{key:1,class:"text-xs ml-1",onClick:$=>i.edit=!0},t[30]||(t[30]=[y(" · "),s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 cursor-pointer inline-flex -mt-0.5"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})],-1)]),8,js)):u("",!0)])])])])}),256))])}const Us=B(Gt,[["render",Is]]),Ys={props:["id"],components:{VueNavigator:lt,Footer:at,Component:Us},data:()=>({menu:!1,post:null}),computed:{votes(){var e;return(e=this.post)==null?void 0:e.votes}}},Rs={class:"bg-white flex flex-col h-screen"},Ns={style:{width:"100%","min-height":"calc(100vh - 50px)"},class:"flex-1 relative overflow-auto"},Fs={class:"relative h-full w-full flex"},Os={class:"bottom-0 bg-white pt-10 md:w-96 md:p-7 md:shadow-md shadow-lg border-r border-slate-200 peer-checked:px-7 peer-checked:pt-16 peer-checked:md:pt-10 peer-checked:pb-7 duration-200 transition-all ease-in-out w-0 max-w-full z-30 peer-checked:w-80 absolute md:relative top-0 overflow-auto"},Ts={class:"flex mb-1.5"},qs={class:"text-sm pl-2 pt-1 text-ellipsis overflow-hidden whitespace-nowrap grow"},Gs={class:"flex mb-1.5"},Zs={class:"text-sm pl-2 pt-1 text-ellipsis overflow-hidden whitespace-nowrap grow"};function Ks(e,t,n,p,h,o){var r,f;const g=A("VueNavigator"),m=A("Component",!0),v=A("Footer");return l(),a("div",Rs,[z(g,{class:"absolute z-50"}),s("main",Ns,[s("div",Fs,[t[8]||(t[8]=s("label",{class:"bg-white fixed z-40 md:hidden cursor-pointer inline-flex items-center p-2 mt-16 lg:mt-4 ml-3 text-sm text-slate-900 rounded-lg",for:"toggle"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])],-1)),k(s("input",{class:"peer hidden",type:"checkbox",id:"toggle","onUpdate:modelValue":t[0]||(t[0]=c=>e.menu=c)},null,512),[[wt,e.menu]]),s("div",Os,[s("button",{class:"border mr-2 bg-slate-50 hover:bg-slate-100 rounded-2xl pl-3 pr-4 mb-4 py-2",onClick:t[1]||(t[1]=c=>e.$router.push("/search"))},t[4]||(t[4]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-5 h-5 -mt-1 mr-1 inline"},[s("path",{"fill-rule":"evenodd",d:"M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z","clip-rule":"evenodd"})],-1),y(" Go back ")])),t[6]||(t[6]=s("h3",{class:"text-slate-500 font-medium mb-1 whitespace-nowrap"}," Category ",-1)),s("span",null,w(((f=(r=e.post)==null?void 0:r.category)==null?void 0:f.title)||"Not set"),1),t[7]||(t[7]=s("h3",{class:"text-slate-500 mt-4 font-medium mb-2 whitespace-nowrap"}," Voters ",-1)),(l(!0),a(S,null,W(o.votes,c=>{var x,C,H,V;return l(),a("div",Ts,[s("div",{class:"h-7 w-7 bg-cover rounded-full bg-slate-500",style:L("background-image: url("+((C=(x=c==null?void 0:c.user)==null?void 0:x[0])==null?void 0:C.picture)+")")},null,4),s("span",qs,w((V=(H=c.user)==null?void 0:H[0])==null?void 0:V.name),1)])}),256)),s("div",Gs,[t[5]||(t[5]=s("div",{class:"h-7 w-7"},null,-1)),k(s("span",Zs," and 35 more... ",512),[[E,!1]])])]),z(m,{class:"bg-white m-auto grow h-full overflow-auto pt-16 lg:pt-7 relative",onPost:t[2]||(t[2]=c=>e.post=c),id:n.id},null,8,["id"]),e.menu?(l(),a("div",{key:0,class:"absolute h-full w-full",onClick:t[3]||(t[3]=c=>e.menu=!1)})):u("",!0)])]),z(v)])}const li=B(Ys,[["render",Ks],["__scopeId","data-v-0bd7617d"]]);export{li as default};