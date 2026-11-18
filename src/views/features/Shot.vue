<template>
  <figure class="vp-feat-shot" :class="{ 'vp-feat-shot--hero': hero }" :style="{ '--shot': `url(${src})` }">
    <div class="vp-feat-shot__bar"><i></i><i></i><i></i><span>Vue Play Studio · {{ name }}</span></div>
    <div class="vp-feat-shot__screen" role="img" :aria-label="label"><span class="vp-feat-shot__name">{{ name }} view</span></div>
  </figure>
</template>
<script>
// A screenshot of the Studio in a window, as on the front page: until the picture is there, a sketch of the
// editor with the view's name shows through.
export default {
  name: 'Shot',
  props: {
    src: { type: String, required: true },
    name: { type: String, required: true },
    label: { type: String, required: true },
    hero: { type: Boolean, default: false },
  },
}
</script>
