import{_ as t,o as e,c as n,e as s}from"./index-a986b776.js";const o={data:()=>({})},c={class:"p-6 pt-20 md:pt-6 pb-40"},p=s(`<article class="max-w-2xl mx-auto mb-6 mt-4"><h1 class="mb-6 text-4xl"> v-bind </h1><p style="margin-top:15px;" class="py-2 text-lg font-medium"> Currently v-bind in the stylesheet is not supported. </p><p style="margin-top:15px;" class="text-lg"> In the mean time, you can use style binding with the computed hook in the Options API instead: </p><pre style="margin-top:15px;" class="text-lg"><code>
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
</code> </pre></article>`,1),a=[p];function i(r,l,d,m,u,x){return e(),n("section",c,a)}const h=t(o,[["render",i]]);export{h as default};
