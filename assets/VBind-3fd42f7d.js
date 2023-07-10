import{_ as t,o as e,c as n,e as s}from"./index-79847aa2.js";const o={data:()=>({})},p={class:"p-6 pt-20 md:pt-6 pb-40"},a=s(`<article class="max-w-2xl mx-auto mb-6 mt-4 shadow border rounded-lg bg-white px-6 py-12 overflow-auto"><h1 class="mb-6 text-4xl"> v-bind </h1><p style="margin-top:15px;" class="text-xl py-2 font-medium"> Currently v-bind in the stylesheet is not supported. </p><p style="margin-top:15px;" class="text-lg"> In the mean time, you can use style binding with the computed hook in the Options API instead: </p><pre style="margin-top:15px;" class="text-white rounded bg-slate-900 p-4 text-lg"><code>
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
</code> </pre></article>`,1),c=[a];function r(i,d,l,m,u,x){return e(),n("section",p,c)}const _=t(o,[["render",r]]);export{_ as default};
