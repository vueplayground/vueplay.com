import{_ as s,o as i,c as u,b as o,n,d}from"./index-0fee6b6d.js";const p={data:()=>({}),computed:{route(){return this.$route.path}},methods:{open(t){location.href=t}}},l={style:{"background-image":"linear-gradient(270deg, #ff19000d, #b2d4c9ff)"}};function b(t,e,c,f,g,r){return i(),u("nav",l,[o("div",{style:{height:"34px",width:"240px","background-size":"contain","background-repeat":"no-repeat","margin-top":"7px","margin-left":"10px",cursor:"pointer",float:"left"},onClick:e[0]||(e[0]=a=>t.$router.push("/")),class:"sm:inline hidden logo"}),o("button",{onClick:e[1]||(e[1]=a=>t.$router.push("/")),class:n([{active:r.route==="/"},""])}," About ",2),o("button",{onClick:e[2]||(e[2]=a=>t.$router.push("/features")),class:n({active:r.route==="/features"})}," Features ",2),o("button",{onClick:e[3]||(e[3]=a=>t.$router.push("/pricing")),class:n({active:r.route==="/pricing"})}," Pricing ",2),d(),o("button",{onClick:e[4]||(e[4]=a=>r.open("https://www.vueplay.com")),class:n([{active:r.route==="/app"},"build"]),style:{"font-weight":"bold","background-color":"#b3b3b3ff",color:"#fff","border-top-left-radius":"4px","border-bottom-left-radius":"4px",height:"29px","border-top-right-radius":"4px","border-bottom-right-radius":"4px","margin-right":"5px"}}," Build ⇾ ",2)])}const m=s(p,[["render",b],["__scopeId","data-v-6b516699"]]);export{m as V};
