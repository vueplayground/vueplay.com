import{M as d}from"./Meta-o-V35F4B.js";import{A as p}from"./Accordion-D7GLfJ0C.js";import{_ as h,r as n,o as u,c as m,a as o,b as e,w as a,d as t,t as _}from"./index-ClOUTEp2.js";const b={components:{Meta:d,Accordion:p},data:()=>({}),computed:{isMac(){var r;return/(Mac|iPhone|iPod|iPad)/i.test(((r=navigator==null?void 0:navigator.userAgentData)==null?void 0:r.platform)||(navigator==null?void 0:navigator.platform))}}},f={class:"p-6 pt-20 md:pt-6 pb-40"},x={class:"py-6 max-w-2xl mx-auto mb-6 px-12 overflow-auto"},g=e("h1",{class:"mb-12 text-4xl"}," Frequently Asked Questions ",-1),w={class:"text-lg"},y=e("a",{href:"https://github.com/vueplayground/vueplay.com/issues",target:"_blank",class:"hover:text-emerald-700 text-emerald-600"}," GitHub issues. ",-1),k=e("p",{class:"text-lg",style:{"margin-bottom":"10px"}},[t(" Vue Play was created to simplify web development in a visual way, inspired by several tools like "),e("a",{href:"https://elementor.com/",target:"_blank",class:"hover:text-emerald-700 text-emerald-600"}," Elementor, "),t(),e("a",{href:"https://www.adobe.com/no/products/photoshop",target:"_blank",class:"hover:text-emerald-700 text-emerald-600"}," Adobe Photoshop, "),t(),e("a",{href:"https://www.adobe.com/no/products/flash",target:"_blank",class:"hover:text-emerald-700 text-emerald-600"}," Adobe Flash "),t(" and "),e("a",{href:"https://gamemaker.io",target:"_blank",class:"hover:text-emerald-700 text-emerald-600"}," GameMaker. ")],-1),v=e("p",{class:"text-lg",style:{"margin-bottom":"10px"}},' The main difference is that it is built up the "Vue.js" way which opens up alot of opportunities, like building everything from ground up with components. ',-1),V=e("p",{class:"text-lg"},[t(" It also opens possibilities to connect Vue Play with frameworks like "),e("a",{href:"https://www.electronjs.org/",target:"_blank",class:"hover:text-emerald-700 text-emerald-600"}," Electron "),t(" to create Native Software for Windows, Mac & Linux or "),e("a",{href:"https://capacitorjs.com/",target:"_blank",class:"hover:text-emerald-700 text-emerald-600"}," Capacitor "),t(" by Ionic to build IOS and Android apps in the future! ")],-1),M=e("p",{class:"text-lg"}," Vue Play is built up using Vue.js SFC's (Vue Single File Components) which are files ending with the .vue extension. This files houses specific functionalities + templates and works like modules in a webpage. This modules will be available as Components in Vue Play, to be dragged into any playground. It can be authored by developers from us or the community. ",-1),A=e("span",{class:"text-lg"}," You can paste any HTML block into the playground using the Context Menu (Three Dots) or Keyboard Shortcut ",-1),P={class:"px-1.5 rounded-md p-1 text-emerald-800 bg-emerald-300 text-lg",style:{"white-space":"nowrap"}},C=e("span",{class:"text-lg"}," while you are in the playground. ",-1);function F(r,T,I,S,j,l){const i=n("Meta"),c=n("router-link"),s=n("Accordion");return u(),m("section",f,[o(i,{title:"Frequently Asked Questions",description:"Vue Play was created to simplify web development in a visual way, inspired by several tools like Elementor, Adobe Photoshop, Adobe Flash and GameMaker."}),e("article",x,[g,o(s,{title:"Where do I post questions, bugs and feature requests?"},{default:a(()=>[e("p",w,[t(" Feedback can be reported "),o(c,{to:"/feedback",class:"hover:text-emerald-700 text-emerald-600"},{default:a(()=>[t(" on the feedback page ")]),_:1}),t(" or on "),y])]),_:1}),o(s,{title:"Why was Vue Play created?"},{default:a(()=>[k,v,V]),_:1}),o(s,{title:"What are Components in Vue Play?"},{default:a(()=>[M]),_:1}),o(s,{title:"How can I insert HTML snippets?"},{default:a(()=>[A,e("span",P,_(l.isMac?"CMD + V":"CTRL + V"),1),C]),_:1})])])}const H=h(b,[["render",F]]);export{H as default};