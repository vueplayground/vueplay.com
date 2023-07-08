import{_ as t,o,c as e,e as s}from"./index-804ac6fd.js";const n={data:()=>({})},p={class:"p-6 pt-20 md:pt-6 pb-40"},a=s(`<article class="max-w-2xl mx-auto mb-6 mt-4"><h1 class="mb-6 text-4xl"> Limitations </h1><p class="text-2xl"> Composition API </p><p style="margin-top:15px;" class="py-2 text-lg font-medium"> Vue Play does currently only support the Vue Options API. </p><p style="margin-top:15px;" class="text-lg"> To use the Composition API within Vue Play, wrap your code inside the setup hook in the options API: </p><pre style="margin-top:15px;" class="text-lg"><code>
&lt;script&gt;
import { ref } from &#39;vue&#39;
export default() {
  setup() {
    const count = ref(0)
    // expose to template and other options API hooks
    return {
      count
    }  
  },
  mounted() {
    console.log(this.count) // 0
  }
}
&lt;/script&gt;
</code>
</pre><p style="margin-top:15px;" class="font-semibold text-lg"> Read more about the setup hook at the official docs: </p><a href="https://vuejs.org/api/composition-api-setup.html#basic-usage" target="_blank"> https://vuejs.org/api/composition-api-setup.html#basic-usage </a></article>`,1),i=[a];function c(r,l,m,u,h,d){return o(),e("section",p,i)}const g=t(n,[["render",c]]);export{g as default};
