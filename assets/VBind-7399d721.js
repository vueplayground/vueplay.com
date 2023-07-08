import{_ as t,o as e,c as s,e as n}from"./index-45b6e7ff.js";const o={data:()=>({})},c={class:"p-6 pt-20 md:pt-6 pb-40"},p=n(`<article class="max-w-2xl mx-auto mb-6 mt-4"><h1 class="mb-6 text-4xl"> Limitations </h1><p class="text-2xl"> v-bind </p><p style="margin-top:15px;" class="py-2 text-lg font-medium"> Currently v-bind in the stylesheet is not supported. </p><p style="margin-top:15px;" class="text-lg"> In the mean time, you can use style binding with the computed hook in the Options API instead: </p><pre style="margin-top:15px;" class="text-lg"><code>
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
</code> </pre></article>`,1),a=[p];function i(l,r,d,m,x,u){return e(),s("section",c,a)}const h=t(o,[["render",i]]);export{h as default};
