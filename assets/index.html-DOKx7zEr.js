import{_ as c,c as g,a as k,b as e,d as s,w as n,e as a,r as l,o}from"./app-C8w7aWOP.js";const y={},m={class:"hint-container tip"};function b(v,i){const p=l("VPIcon"),d=l("CodeTabs"),r=l("RouteLink");return o(),g("div",null,[i[8]||(i[8]=k('<h2 id="主题定制" tabindex="-1"><a class="header-anchor" href="#主题定制"><span>主题定制</span></a></h2><p>支持自定义样式。</p><p>主题虽然使用 <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">SASS</a> 作为 CSS 预处理器，但所有的颜色使用的是 <code>CSS Vars</code> 定义， 因此，你可以创建 一个 css 文件 或 scss 文件，进行覆盖。</p><p>首先，在 <code>.vuepress</code> 目录中，创建一个 <code>styles/index.css</code> 文件， 然后在 <a href="https://v2.vuepress.vuejs.org/zh/guide/configuration.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6" target="_blank" rel="noopener noreferrer">客户端配置文件</a> 中，引入该文件即可。</p>',4)),e(d,{id:"12",data:[{id:".vuepress/client.ts"},{id:".vuepress/styles/index.css"}]},{title0:n(({value:t,isActive:h})=>[e(p,{name:"vscode-icons:file-type-typescript"}),i[0]||(i[0]=s("span",null,".vuepress/client.ts",-1))]),title1:n(({value:t,isActive:h})=>[e(p,{name:"vscode-icons:file-type-css"}),i[1]||(i[1]=s("span",null,".vuepress/styles/index.css",-1))]),tab0:n(({value:t,isActive:h})=>i[2]||(i[2]=[s("div",{class:"language-ts","data-ext":"ts","data-title":"ts"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," defineClientConfig"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"vuepress/client"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"./styles/index.css"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," default"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," defineClientConfig"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"({")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  // ...")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"})")])])])],-1)])),tab1:n(({value:t,isActive:h})=>i[3]||(i[3]=[s("div",{class:"language-css","data-ext":"css","data-title":"css"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"root"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  --vp-c-brand-1"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," #"),s("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}},"5086a1"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")])])])],-1)])),_:1}),i[9]||(i[9]=k(`<h2 id="style-文件" tabindex="-1"><a class="header-anchor" href="#style-文件"><span>Style 文件</span></a></h2><p>在 <code>.vuepress</code> 目录中，创建一个如 <code>custom.css</code> 的文件，</p><p>在这里添加额外的样式，或者覆盖默认样式：</p><div class="language-scss" data-ext="scss" data-title="scss"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">root</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  scroll-behavior</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> smooth</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div><p>你也可以利用它来覆盖默认主题的预定义 CSS 变量。</p><p>以下是部分预定义变量， 完整列表请参考 <a href="https://github.com/pengzhanbo/vuepress-theme-plume/blob/main/theme/src/client/styles/vars.scss" target="_blank" rel="noopener noreferrer">vars.scss</a></p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">root</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /** 主题颜色 */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  --vp-c-brand-1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> #</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">5086a1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  --vp-c-brand-2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> #</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">6aa1b7</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  --vp-c-brand-3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> #</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">8cccd5</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  --vp-c-brand-soft</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> rgba</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">131</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 208</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 218</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0.314</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> /** 背景颜色 */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  --vp-c-bg</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> #</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">ffffff</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  --vp-c-bg-alt</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> #</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">f6f6f7</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  --vp-c-bg-elv</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> #</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">ffffff</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  --vp-c-bg-soft</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> #</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">f6f6f7</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /** 文本颜色 */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  --vp-c-text-1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> rgba</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">60</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 60</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 67</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  --vp-c-text-2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> rgba</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">60</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 60</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 67</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0.78</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  --vp-c-text-3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> rgba</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">60</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 60</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 67</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0.56</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">data-theme</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">dark</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  --vp-c-brand-1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> #</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">8cccd5</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  --vp-c-brand-2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> #</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">6aa1b7</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  --vp-c-brand-3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> #</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">5086a1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  --vp-c-brand-soft</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> rgba</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">131</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 208</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 218</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0.314</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  --vp-c-bg</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> #</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">1b1b1f</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  --vp-c-bg-alt</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> #</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">161618</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  --vp-c-bg-elv</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> #</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">202127</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  --vp-c-bg-soft</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> #</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">202127</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  --vp-c-text-1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> rgba</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">255</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 255</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 245</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0.86</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  --vp-c-text-2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> rgba</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">235</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 235</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 245</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0.6</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  --vp-c-text-3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> rgba</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">235</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 235</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 245</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0.38</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)),s("div",m,[i[7]||(i[7]=s("p",{class:"hint-container-title"},"提示",-1)),s("p",null,[i[5]||(i[5]=a("主题提供了 ")),e(r,{to:"/notes/tools/custom-theme.html"},{default:n(()=>i[4]||(i[4]=[a("主题颜色工具")])),_:1}),i[6]||(i[6]=a(" , 你可以使用它来创建自定义颜色。"))])])])}const A=c(y,[["render",b],["__file","index.html.vue"]]),f=JSON.parse('{"path":"/guide/custom-style/","title":"自定义样式","lang":"zh-CN","frontmatter":{"title":"自定义样式","author":"pengzhanbo","icon":"icon-park-outline:theme","createTime":"2024/03/04 20:18:52","permalink":"/guide/custom-style/","description":"主题定制 支持自定义样式。 主题虽然使用 SASS 作为 CSS 预处理器，但所有的颜色使用的是 CSS Vars 定义， 因此，你可以创建 一个 css 文件 或 scss 文件，进行覆盖。 首先，在 .vuepress 目录中，创建一个 styles/index.css 文件， 然后在 客户端配置文件 中，引入该文件即可。 Style 文件 在 ....","head":[["meta",{"property":"og:url","content":"https://modenc.top/guide/custom-style/"}],["meta",{"property":"og:site_name","content":"Modenc"}],["meta",{"property":"og:title","content":"自定义样式"}],["meta",{"property":"og:description","content":"主题定制 支持自定义样式。 主题虽然使用 SASS 作为 CSS 预处理器，但所有的颜色使用的是 CSS Vars 定义， 因此，你可以创建 一个 css 文件 或 scss 文件，进行覆盖。 首先，在 .vuepress 目录中，创建一个 styles/index.css 文件， 然后在 客户端配置文件 中，引入该文件即可。 Style 文件 在 ...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-22T20:02:32.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-09-22T20:02:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自定义样式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-22T20:02:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":1.46,"words":438},"git":{"updatedTime":1727035352000,"contributors":[{"name":"pengzhanbo","username":"pengzhanbo","email":"volodymyr@foxmail.com","commits":10,"avatar":"https://avatars.githubusercontent.com/pengzhanbo?v=4","url":"https://github.com/pengzhanbo"}],"changelog":[{"hash":"c56bae8d58941db05a5cb1faad45be2178331db3","date":1709915848000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"feat: 全新的文档！","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/c56bae8d58941db05a5cb1faad45be2178331db3"},{"hash":"ca097146cf4473f9ebfb04fe9e61708dcfd6d464","date":1709917771000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: lint fix","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/ca097146cf4473f9ebfb04fe9e61708dcfd6d464"},{"hash":"920d3d115723141dfa8a35ec376c8e372f188a53","date":1710362649000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: update docs","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/920d3d115723141dfa8a35ec376c8e372f188a53"},{"hash":"822d861daef23a289c5e7720cdd7b0beb79b60c1","date":1711040997000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: lint fix md","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/822d861daef23a289c5e7720cdd7b0beb79b60c1"},{"hash":"86e425bcf6fcbec7ff6427d2c06ff07dafd1ed1c","date":1717348418000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: update doc","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/86e425bcf6fcbec7ff6427d2c06ff07dafd1ed1c"},{"hash":"4558b8ac4ee850b296ac98ea90f4f3144d856de9","date":1717348606000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: update doc","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/4558b8ac4ee850b296ac98ea90f4f3144d856de9"},{"hash":"bf4b8dcb061102deaa1ba8a93b5a3b91e32f6aa8","date":1722397571000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: update docs","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/bf4b8dcb061102deaa1ba8a93b5a3b91e32f6aa8"},{"hash":"520dce22c1b037232401c4b6ddf5a90346da41a0","date":1725984193000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"style: lint fix","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/520dce22c1b037232401c4b6ddf5a90346da41a0"},{"hash":"ce921e209d8d2a5d752d08a9022ec4e3f8ac03fa","date":1726939693000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"feat!: apply vuepress official guidelines (<a href=\\"https://github.com/pengzhanbo/vuepress-theme-plume/issues/203\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">#203</a>)","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/ce921e209d8d2a5d752d08a9022ec4e3f8ac03fa"},{"hash":"b8485cb369bbcd971156325f4e10483286f6e425","date":1727035352000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: improve doc (<a href=\\"https://github.com/pengzhanbo/vuepress-theme-plume/issues/209\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">#209</a>)","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b8485cb369bbcd971156325f4e10483286f6e425"}]},"autoDesc":true,"filePathRelative":"notes/theme/guide/自定义样式.md","bulletin":false}');export{A as comp,f as data};
