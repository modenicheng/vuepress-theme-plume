import{_ as r,c,a as p,b as o,w as t,r as l,o as h,d as e}from"./app-C8w7aWOP.js";const m={};function u(g,s){const n=l("VPIcon"),d=l("CodeTabs");return h(),c("div",null,[s[6]||(s[6]=p('<p>本文主要包含了使用主题的过程中可能会遇到的常见问题与解决方法。</p><p>如果您遇到任何问题，您可以先在以下内容中寻找是否有相关的问题和解决方法。</p><p>如果没有找到，您可以先通过 Github <a href="https://github.com/pengzhanbo/vuepress-theme-plume/discussions/new?category=q-a" target="_blank" rel="noopener noreferrer">Discussions</a> 与我们讨论。</p><p>如果您确定某处确实存在问题，请在 Github <a href="https://github.com/pengzhanbo/vuepress-theme-plume/issues/new?assignees=pengzhanbo&amp;labels=bug&amp;projects=&amp;template=bug-report.zh-CN.yml&amp;title=%5BBug%5D" target="_blank" rel="noopener noreferrer">Open an issue</a>, 在 Issue 中说明该问题的具体细节，如有必要，请尽量提供一个 最小重现包，我们会尽快解决。</p><details class="hint-container details"><summary>发起讨论或提出问题需要注意什么？</summary><p>我们欢迎你发起讨论或提出任何问题，无论它是否简单，积极提问是好事。但请确保以下三点：</p><ol><li><p>你已经尝试搜索过相关文档；</p></li><li><p>你在讨论中提供了详细的描述；</p></li><li><p>你不是在问与 VuePress 无关的问题，也不是在寻求技术支持。</p><p>我们不会回答 “我如何在我自己的项目中单独使用主题的某个功能” 、“我怎么在我的自己项目中实现主题的某个功能” 这种 问题。</p></li></ol></details><h2 id="怎么更新主题" tabindex="-1"><a class="header-anchor" href="#怎么更新主题"><span>怎么更新主题？</span></a></h2><p>你可以通过 <code>vp-update</code> 命令来更新主题。</p><p><code>vp-update</code> 是 VuePress 官方维护的 CLI 工具，它可以帮助你检查项目内与 VuePress 相关的主题、插件等的 最新版本，并自动为你安装依赖。</p><p>复制以下命令到你的项目中运行：</p>',9)),o(d,{id:"0",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"npm-to-49"},{title0:t(({value:a,isActive:i})=>[o(n,{name:"vscode-icons:file-type-light-pnpm"}),s[0]||(s[0]=e("span",null,"pnpm",-1))]),title1:t(({value:a,isActive:i})=>[o(n,{name:"vscode-icons:file-type-yarn"}),s[1]||(s[1]=e("span",null,"yarn",-1))]),title2:t(({value:a,isActive:i})=>[o(n,{name:"logos:npm-icon"}),s[2]||(s[2]=e("span",null,"npm",-1))]),tab0:t(({value:a,isActive:i})=>s[3]||(s[3]=[e("div",{class:"language-sh","data-ext":"sh","data-title":"sh"},[e("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),e("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"pnpm"),e("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," dlx"),e("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," vp-update")])])])],-1)])),tab1:t(({value:a,isActive:i})=>s[4]||(s[4]=[e("div",{class:"language-sh","data-ext":"sh","data-title":"sh"},[e("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),e("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"yarn"),e("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," dlx"),e("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," vp-update")])])])],-1)])),tab2:t(({value:a,isActive:i})=>s[5]||(s[5]=[e("div",{class:"language-sh","data-ext":"sh","data-title":"sh"},[e("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),e("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"npx"),e("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," vp-update")])])])],-1)])),_:1}),s[7]||(s[7]=p('<h2 id="为什么更新主题版本后新的功能没有生效" tabindex="-1"><a class="header-anchor" href="#为什么更新主题版本后新的功能没有生效"><span>为什么更新主题版本后新的功能没有生效？</span></a></h2><p>由于 VuePress 在启动开发服务时，全量编译源目录中的的 <code>markdown</code> 文件耗时较长，主题对 <code>markdown</code> 的编译进行了 缓存，以提高启动速度。主题更新后重启开发服务时，由于源目录中的 <code>markdown</code> 文件没有变化，跳过了编译直接使用缓存， 这会导致与 markdown 有关的新功能没有生效。</p><p><strong>只需要删除缓存文件，并重启即可</strong>：</p><ol><li><p>方法一：直接删除 <code>.vuepress/.cache</code> 目录。</p></li><li><p>方法二：在启动开发服务命令后面，添加 <code>--clean-cache</code> 参数：</p><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">vuepress</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> dev</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docs</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --clean-cache</span></span></code></pre></div></li></ol><h2 id="为什么修改主题插件的配置没有生效" tabindex="-1"><a class="header-anchor" href="#为什么修改主题插件的配置没有生效"><span>为什么修改主题插件的配置没有生效？</span></a></h2><p>这个文件常见于修改 <code>plugins.markdownEnhance</code> 、<code>plugins.markdownPower</code> 、<code>plugins.markdownImage</code> 和 <code>plugins.markdownMath</code> 的配置。它与 <a href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9B%B4%E6%96%B0%E4%B8%BB%E9%A2%98%E7%89%88%E6%9C%AC%E5%90%8E%E6%96%B0%E7%9A%84%E5%8A%9F%E8%83%BD%E6%B2%A1%E6%9C%89%E7%94%9F%E6%95%88">为什么更新主题版本后新的功能没有生效？</a> 的原因相同。因此</p><p><strong>只需要删除缓存文件，并重启即可</strong>：</p><ol><li><p>方法一：直接删除 <code>.vuepress/.cache</code> 目录。</p></li><li><p>方法二：在启动开发服务命令后面，添加 <code>--clean-cache</code> 参数：</p><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">vuepress</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> dev</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docs</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --clean-cache</span></span></code></pre></div></li></ol><h2 id="更新依赖后重启提示-import-xxxx-not-exist" tabindex="-1"><a class="header-anchor" href="#更新依赖后重启提示-import-xxxx-not-exist"><span>更新依赖后重启提示 <code>import &quot;xxxx&quot; not exist</code></span></a></h2><p>有时候更新主题以及相关依赖后，可能会存在 包管理器未能正确生成新的依赖树的问题，导致了 导入一些依赖时，提示找不到该依赖的错误。 这时候的 依赖锁定文件如 <code>package-lock.json</code> 或 <code>pnpm-lock.yaml</code> 已经被污染。</p><p>请直接删除 <code>package-lock.json</code> 或 <code>pnpm-lock.yaml</code> 等依赖锁定文件，以及删除 <code>node_modules</code> 目录，然后重新安装依赖。</p>',11))])}const v=r(m,[["render",u],["__file","index.html.vue"]]),b=JSON.parse('{"path":"/faq/","title":"常见问题","lang":"zh-CN","frontmatter":{"title":"常见问题","createTime":"2024/09/27 08:47:36","permalink":"/faq/","draft":true,"description":"本文主要包含了使用主题的过程中可能会遇到的常见问题与解决方法。 如果您遇到任何问题，您可以先在以下内容中寻找是否有相关的问题和解决方法。 如果没有找到，您可以先通过 Github Discussions 与我们讨论。 如果您确定某处确实存在问题，请在 Github Open an issue, 在 Issue 中说明该问题的具体细节，如有必要，请尽量提...","head":[["meta",{"property":"og:url","content":"https://modenc.top/faq/"}],["meta",{"property":"og:site_name","content":"Modenc"}],["meta",{"property":"og:title","content":"常见问题"}],["meta",{"property":"og:description","content":"本文主要包含了使用主题的过程中可能会遇到的常见问题与解决方法。 如果您遇到任何问题，您可以先在以下内容中寻找是否有相关的问题和解决方法。 如果没有找到，您可以先通过 Github Discussions 与我们讨论。 如果您确定某处确实存在问题，请在 Github Open an issue, 在 Issue 中说明该问题的具体细节，如有必要，请尽量提..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-08T10:57:59.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-08T10:57:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常见问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-08T10:57:59.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":2.81,"words":842},"git":{"updatedTime":1728385079000,"contributors":[{"name":"pengzhanbo","username":"pengzhanbo","email":"volodymyr@foxmail.com","commits":2,"avatar":"https://avatars.githubusercontent.com/pengzhanbo?v=4","url":"https://github.com/pengzhanbo"}],"changelog":[{"hash":"2f73602883dac93434ec270a89d313d776bb0a53","date":1727398187000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: improve docs (<a href=\\"https://github.com/pengzhanbo/vuepress-theme-plume/issues/226\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">#226</a>)","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/2f73602883dac93434ec270a89d313d776bb0a53"},{"hash":"b721bf08f9ecf5c71a8982f479a2909cfc7bd04d","date":1728385079000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"feat(plugin-md-power): add support <code v-pre>npm-to</code> container (<a href=\\"https://github.com/pengzhanbo/vuepress-theme-plume/issues/256\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">#256</a>)","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b721bf08f9ecf5c71a8982f479a2909cfc7bd04d"}]},"autoDesc":true,"filePathRelative":"questions.md","categoryList":[],"bulletin":false}');export{v as comp,b as data};
