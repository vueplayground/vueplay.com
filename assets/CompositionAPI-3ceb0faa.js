import{M as o}from"./Meta-f2d6e3de.js";import{_ as e,r as s,o as n,c as p,a,e as i}from"./index-a987d2b7.js";const r={components:{Meta:o},data:()=>({})},c={class:"p-6 pt-20 md:pt-6 pb-40"},l=i(`<article class="max-w-2xl mx-auto mb-6 mt-4 shadow border rounded-lg bg-white px-12 py-14 overflow-auto"><h1 class="mb-6 text-4xl"> Composition API </h1><p style="margin-top:15px;" class="text-xl py-2 font-medium"> Vue Play does currently only support the Vue Options API. </p><p style="margin-top:15px;" class="text-lg"> To use the Composition API within Vue Play, wrap your code inside the setup hook in the options API: </p><pre style="margin-top:15px;" class="text-white rounded bg-slate-900 p-4 text-lg overflow-auto"><code>
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
</code> </pre><p style="margin-top:15px;" class="font-semibold text-lg"> Read more about the setup hook at the official docs: </p><a href="https://vuejs.org/api/composition-api-setup.html#basic-usage" target="_blank"> https://vuejs.org/api/composition-api-setup.html#basic-usage </a></article>`,1);function m(u,d,h,x,f,g){const t=s("Meta");return n(),p("section",c,[a(t,{title:"Composition API"}),l])}const y=e(r,[["render",m]]);export{y as default};
