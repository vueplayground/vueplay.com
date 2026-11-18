<template>
  <!-- The Learn view drawn, not photographed: the page on top, its code under it, the tutor at the side. -->
  <figure class="vp-learn-shot" role="img" aria-label="The Learn view: a page with a heading selected, its code under it with that line lit, and the tutor at the side explaining it, with three of nine tasks done">
    <div class="vp-learn-shot__bar"><i></i><i></i><i></i><span>Vue Play Studio · Learn</span></div>
    <div class="vp-learn-shot__body">
      <div class="vp-learn-shot__main">
        <!-- the page -->
        <div class="vp-learn-shot__page">
          <div class="vp-learn-shot__nav"><b>Ada's café</b><span>Menu</span><span>Visit</span></div>
          <div class="vp-learn-shot__hero">
            <p class="vp-learn-shot__h1"><span class="vp-learn-shot__picked">Hello, Ada<em>h1</em></span></p>
            <p class="vp-learn-shot__open">● We are open</p>
            <span class="vp-learn-shot__btn">See the menu</span>
          </div>
        </div>
        <!-- its code -->
        <pre class="vp-learn-shot__code"><span class="n">1</span><span class="t">&lt;template&gt;</span>
<span class="n">2</span>  <span class="lit"><span class="t">&lt;h1&gt;</span>Hello, <span class="m">{{ '{' + '{' }} name {{ '}' + '}' }}</span><span class="t">&lt;/h1&gt;</span></span>
<span class="n">3</span>  <span class="t">&lt;p</span> <span class="a">v-if</span>=<span class="s">"open"</span><span class="t">&gt;</span>We are open<span class="t">&lt;/p&gt;</span>
<span class="n">4</span>  <span class="t">&lt;Button</span> <span class="a">:href</span>=<span class="s">"menu"</span><span class="t">&gt;</span>See the menu<span class="t">&lt;/Button&gt;</span>
<span class="n">5</span><span class="t">&lt;/template&gt;</span></pre>
      </div>
      <!-- the tutor -->
      <aside class="vp-learn-shot__tutor">
        <p class="vp-learn-shot__label">This element</p>
        <p class="vp-learn-shot__tag">&lt;h1&gt; <small>The main heading</small></p>
        <div class="vp-learn-shot__explain">
          <code>{{ '{' + '{' }} name {{ '}' + '}' }}</code>
          <span>Shows the value named <b>name</b> from the script. Change it there, and the page follows.</span>
        </div>
        <div class="vp-learn-shot__explain">
          <code>v-if</code>
          <span>The line under it is only there while <b>open</b> is true.</span>
        </div>
        <p class="vp-learn-shot__label vp-learn-shot__label--tasks">Try it <small>3 of 9</small></p>
        <ol class="vp-learn-shot__tasks">
          <li class="done">Change the words</li>
          <li class="done">Add a Button</li>
          <li class="done">Give it a class</li>
          <li class="now">Show a value from the script</li>
          <li>Show something only sometimes</li>
        </ol>
        <span class="vp-learn-shot__ask">✦ Ask the tutor</span>
      </aside>
    </div>
  </figure>
</template>
<script>
export default { name: 'LearnShot' }
</script>
<style>
.vp-learn-shot {
  --vp-learn-warm: #f59e0b;
  width: 100%;
  max-width: 1120px;
  margin: 28px 0 0;
  border: 1px solid var(--vp-border);
  border-radius: 14px;
  overflow: hidden;
  background: var(--vp-background);
  box-shadow: 0 30px 60px -30px rgba(60, 40, 6, 0.35), 0 8px 20px -10px rgba(60, 40, 6, 0.15);
  text-align: left;
  font-size: 14px;
}
.vp-learn-shot__bar {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 34px;
  padding: 0 14px;
  border-bottom: 1px solid var(--vp-border);
  background: var(--vp-surface);
  font-size: 12px;
  color: var(--vp-muted);
}
.vp-learn-shot__bar i { width: 10px; height: 10px; border-radius: 50%; background: var(--vp-border); }
.vp-learn-shot__bar span { margin-left: 10px; }
.vp-learn-shot__body { display: grid; grid-template-columns: minmax(0, 1fr) 300px; min-height: 420px; }
.vp-learn-shot__main { display: grid; grid-template-rows: 1fr auto; min-width: 0; border-right: 1px solid var(--vp-border); }
.vp-learn-shot__page { padding: 18px 28px 26px; background: linear-gradient(180deg, color-mix(in srgb, var(--vp-learn-warm) 10%, var(--vp-background)), var(--vp-background)); }
.vp-learn-shot__nav { display: flex; gap: 18px; align-items: center; color: var(--vp-muted); font-size: 13px; }
.vp-learn-shot__nav b { margin-right: auto; color: var(--vp-text); font-family: var(--vp-font-heading); }
.vp-learn-shot__hero { display: grid; justify-items: start; gap: 10px; margin-top: 34px; }
.vp-learn-shot__h1 { margin: 0; font-family: var(--vp-font-heading); font-size: clamp(26px, 4vw, 42px); font-weight: 800; letter-spacing: -0.02em; color: var(--vp-text); }
.vp-learn-shot__picked { position: relative; padding: 0 6px; outline: 2px solid var(--vp-primary); outline-offset: 3px; border-radius: 3px; }
.vp-learn-shot__picked em {
  position: absolute;
  left: -5px;
  top: -26px;
  padding: 1px 7px;
  border-radius: 4px 4px 4px 0;
  background: var(--vp-primary);
  color: var(--vp-primary-contrast, #fff);
  font: 600 11px/1.6 ui-monospace, SFMono-Regular, Menlo, monospace;
  font-style: normal;
  letter-spacing: 0;
}
.vp-learn-shot__open { margin: 0; color: #15803d; font-weight: 600; }
.vp-learn-shot__btn { padding: 8px 16px; border-radius: 999px; background: var(--vp-learn-warm); color: #fff; font-weight: 600; font-size: 13px; }
.vp-learn-shot__code {
  margin: 0;
  padding: 14px 16px;
  border-top: 1px solid var(--vp-border);
  background: #0f1720;
  color: #d6e2ee;
  font: 500 13px/1.75 ui-monospace, SFMono-Regular, Menlo, monospace;
  white-space: pre;
  overflow: hidden;
}
.vp-learn-shot__code .n { display: inline-block; width: 22px; color: #5b6b7c; user-select: none; }
.vp-learn-shot__code .t { color: #7dd3c0; }
.vp-learn-shot__code .a { color: #9ecbff; }
.vp-learn-shot__code .s { color: #f9c440; }
.vp-learn-shot__code .m { color: #fbbf24; font-weight: 700; }
.vp-learn-shot__code .lit { background: rgba(16, 163, 124, 0.25); box-shadow: 0 0 0 4px rgba(16, 163, 124, 0.25); border-radius: 2px; }
.vp-learn-shot__tutor { display: grid; align-content: start; gap: 10px; padding: 18px; background: var(--vp-surface); min-width: 0; }
.vp-learn-shot__label { margin: 0; color: var(--vp-muted); font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
.vp-learn-shot__label small { float: right; letter-spacing: 0; text-transform: none; font-weight: 600; color: var(--vp-learn-warm); }
.vp-learn-shot__label--tasks { margin-top: 6px; }
.vp-learn-shot__tag { margin: 0; font: 700 15px/1.4 ui-monospace, SFMono-Regular, Menlo, monospace; color: var(--vp-text); }
.vp-learn-shot__tag small { display: block; font: 500 12px/1.4 system-ui, sans-serif; color: var(--vp-muted); }
.vp-learn-shot__explain { display: grid; gap: 4px; padding: 10px 12px; border: 1px solid var(--vp-border); border-radius: 10px; background: var(--vp-background); font-size: 12.5px; line-height: 1.5; color: var(--vp-muted); }
.vp-learn-shot__explain code { justify-self: start; padding: 1px 6px; border-radius: 5px; background: color-mix(in srgb, var(--vp-learn-warm) 16%, transparent); color: #b45309; font: 700 12px/1.6 ui-monospace, SFMono-Regular, Menlo, monospace; }
.vp-learn-shot__explain b { color: var(--vp-text); }
.vp-learn-shot__tasks { margin: 0; padding: 0; list-style: none; display: grid; gap: 6px; counter-reset: task; font-size: 12.5px; color: var(--vp-muted); }
.vp-learn-shot__tasks li { counter-increment: task; display: flex; align-items: center; gap: 8px; }
.vp-learn-shot__tasks li::before {
  content: counter(task);
  display: grid;
  place-items: center;
  flex: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid var(--vp-border);
  font-size: 10px;
  font-weight: 700;
}
.vp-learn-shot__tasks li.done { color: var(--vp-text); }
.vp-learn-shot__tasks li.done::before { content: '✓'; border-color: var(--vp-primary); background: var(--vp-primary); color: #fff; }
.vp-learn-shot__tasks li.now { color: var(--vp-text); font-weight: 600; }
.vp-learn-shot__tasks li.now::before { border-color: var(--vp-learn-warm); color: #b45309; }
.vp-learn-shot__ask { justify-self: start; margin-top: 4px; padding: 6px 12px; border-radius: 999px; border: 1px solid color-mix(in srgb, var(--vp-primary) 40%, var(--vp-border)); color: var(--vp-primary); font-weight: 600; font-size: 12.5px; }
@media (max-width: 820px) {
  .vp-learn-shot__body { grid-template-columns: 1fr; }
  .vp-learn-shot__main { border-right: 0; }
  .vp-learn-shot__tutor { border-top: 1px solid var(--vp-border); }
  .vp-learn-shot__tasks li:nth-child(n + 5) { display: none; }
}
@media (max-width: 520px) {
  .vp-learn-shot__page { padding: 14px 16px 20px; }
  .vp-learn-shot__code { font-size: 11px; }
}
</style>
