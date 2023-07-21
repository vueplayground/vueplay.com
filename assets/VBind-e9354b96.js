import{M as e}from"./Meta-ca68bf6f.js";import{_ as n,r as o,o as s,c as i,a,e as r}from"./index-973e256c.js";const p={components:{Meta:e},data:()=>({})},c={class:"p-6 pt-20 md:pt-6 pb-40"},d=r(`<article class="max-w-2xl mx-auto mb-6 mt-4 shadow border rounded-lg bg-white px-12 py-14 overflow-auto"><h1 class="mb-6 text-4xl"> v-bind </h1><p style="margin-top:15px;" class="text-xl py-2 font-medium"> Currently v-bind is not supported by Vue Play. </p><p style="margin-top:15px;" class="text-lg"> Style binding with the computed hook in the Options API can be used in the meantime for reactive style binding: </p><pre style="margin-top:15px;" class="text-white rounded bg-slate-900 p-4 text-lg overflow-auto"><code>
&lt;script&gt;
export default() {
  computed: {
    style()
      return {
        width: &#39;&#39; // Your code
      }
    }
  }
}
&lt;/script&gt;
</code> </pre></article>`,1);function l(m,u,h,b,x,y){const t=o("Meta");return s(),i("section",c,[a(t,{title:"v-bind",description:"Currently v-bind is not supported by Vue Play. Style binding with the computed hook in the Options API can be used in the meantime for reactive style binding."}),d])}const f=n(p,[["render",l]]);export{f as default};
