import{_ as s,o as a,c as n,V as l}from"./chunks/framework.74edd467.js";const A=JSON.parse('{"title":"组件懒加载","description":"","frontmatter":{"sidebar":"auto"},"headers":[],"relativePath":"react/Lazy&Suspense.md","filePath":"react/Lazy&Suspense.md"}'),o={name:"react/Lazy&Suspense.md"},p=l(`<h1 id="组件懒加载" tabindex="-1">组件懒加载 <a class="header-anchor" href="#组件懒加载" aria-label="Permalink to &quot;组件懒加载&quot;">​</a></h1><p><a href="https://react.docschina.org/docs/code-splitting.html#reactlazy" target="_blank" rel="noreferrer">React中文官网-React.lazy</a></p><p>不管是在Vue还是React中，我们经常接触到<strong>路由懒加载</strong>，也就是根据路由按需加载。</p><p>其实从React16.6之后，就出现了组件懒加载的实现。那就是<code>React.lazy</code>和<code>React. Suspense</code>这两个API，它俩必须要搭配使用。</p><h2 id="常规的组件引入方式" tabindex="-1">常规的组件引入方式 <a class="header-anchor" href="#常规的组件引入方式" aria-label="Permalink to &quot;常规的组件引入方式&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> PlainComponent </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./components/PlainComponent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="组件懒加载引入方式" tabindex="-1">组件懒加载引入方式 <a class="header-anchor" href="#组件懒加载引入方式" aria-label="Permalink to &quot;组件懒加载引入方式&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> LazyComponent </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> React</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lazy</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./components/LazyComponent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>如上，使用组件懒加载后，组件会在首次渲染时才导入组件。</p><br><h2 id="懒加载组件的使用" tabindex="-1">懒加载组件的使用 <a class="header-anchor" href="#懒加载组件的使用" aria-label="Permalink to &quot;懒加载组件的使用&quot;">​</a></h2><p>懒加载组件的使用和普通组件也略微不同。<strong>必须</strong>在<code>React.Suspense</code>内置组件中使用。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> React </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> LazyComponent </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> React</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lazy</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./components/LazyComponent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MyComponent</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">React.Suspense</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">fallback</span><span style="color:#89DDFF;">={&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Loading...</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">LazyComponent</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">React.Suspense</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">  )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p><code>fallback</code>属性接受任何在组件加载过程中你想展示的组件。</p>`,14),e=[p];function t(c,r,y,D,F,i){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};