import{_ as s}from"./index-00c75e4e.js";const i={props:["title","description","keywords","author"],data:()=>({defaults:{title:"Vue Play - A Vue Drag And Drop Website Builder Using Vue.js",description:"Design Components and Websites with Transform Tools and Style Controllers. Drag & Drop Elements and Components into the Playground with Vue Play.",keywords:"Vue Play Playground Vue.js Vuejs Drag Drop Design UI Visual Graphic User Interface",author:"Siglar Development AS"}}),watch:{title(){document.title=this.title?this.title+" - Vue Play":this.defaults.title},description(){this.ensureMeta("description"),document.head.children.description.content=this.description||this.defaults.description},keywords(){this.ensureMeta("keywords"),document.head.children.keywords.content=this.keywords||this.defaults.keywords},author(){this.ensureMeta("author"),document.head.children.author.content=this.author||this.defaults.author}},created(){this.init()},methods:{init(){document.title=this.title?this.title+" - Vue Play":this.defaults.title,this.ensureMeta("description"),this.ensureMeta("keywords"),this.ensureMeta("author"),document.head.children.description.content=this.description||this.defaults.description,document.head.children.keywords.content=this.keywords||this.defaults.keywords,document.head.children.author.content=this.author||this.defaults.author},ensureMeta(e){if(!document.head.children[e]||document.head.children[e]===void 0){let t=document.createElement("meta");t.name=e,document.head.appendChild(t)}}}};function n(e,t,o,r,d,a){return null}const u=s(i,[["render",n]]);export{u as M};
