"use strict";(self.webpackChunkms_gh_pages=self.webpackChunkms_gh_pages||[]).push([[660],{7713:function(e,a,n){n.r(a),n.d(a,{default:function(){return h}});var t=n(1151),s=n(7294);function l(e){const a=Object.assign({h3:"h3",a:"a",span:"span"},(0,t.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement(a.h3,{id:"package-notepad",style:{position:"relative"}},s.createElement(a.a,{href:"#package-notepad","aria-label":"package notepad permalink",className:"anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Package Notepad"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="powershell"><pre class="language-powershell"><code class="language-powershell">crossroads package <span class="token operator">--</span>name newnotepad <span class="token operator">--</span>command <span class="token string">"notepad"</span></code></pre></div>'}}),"\n",s.createElement(a.h3,{id:"package-notepad-and-open-a-text-file-from-include",style:{position:"relative"}},s.createElement(a.a,{href:"#package-notepad-and-open-a-text-file-from-include","aria-label":"package notepad and open a text file from include permalink",className:"anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Package Notepad and open a text file from include"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="powershell"><pre class="language-powershell"><code class="language-powershell">crossroads package <span class="token operator">--</span>name newhello <span class="token operator">--</span>command notepad <span class="token operator">--</span>args <span class="token punctuation">.</span>\\notepadtxt\\abc<span class="token punctuation">.</span>txt <span class="token operator">--</span>location <span class="token punctuation">.</span>\\output <span class="token operator">--</span>icon <span class="token punctuation">.</span>\\testicon<span class="token punctuation">.</span>ico <span class="token operator">--</span>version <span class="token string">"2.2.2"</span> <span class="token operator">--</span>include <span class="token string">".\\notepadtxt"</span></code></pre></div>'}}),"\n",s.createElement(a.h3,{id:"package-an-application-from-include-directory",style:{position:"relative"}},s.createElement(a.a,{href:"#package-an-application-from-include-directory","aria-label":"package an application from include directory permalink",className:"anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Package an application from include directory"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="powershell"><pre class="language-powershell"><code class="language-powershell">crossroads package <span class="token operator">--</span>name newhello <span class="token operator">--</span>command <span class="token string">".\\helloworld\\helloworld.exe"</span> <span class="token operator">--</span>location <span class="token punctuation">.</span>\\output <span class="token operator">--</span>icon <span class="token punctuation">.</span>\\testcion<span class="token punctuation">.</span>ico <span class="token operator">--</span>version <span class="token string">"3.0.1"</span> <span class="token operator">--</span>include <span class="token string">".\\helloworld"</span></code></pre></div>'}}),"\n",s.createElement(a.h3,{id:"inspect-a-package",style:{position:"relative"}},s.createElement(a.a,{href:"#inspect-a-package","aria-label":"inspect a package permalink",className:"anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Inspect a package"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="powershell"><pre class="language-powershell"><code class="language-powershell">crossroads inspect <span class="token operator">--</span>package <span class="token string">".\\testapp.exe"</span></code></pre></div>'}}),"\n",s.createElement(a.h3,{id:"show-help",style:{position:"relative"}},s.createElement(a.a,{href:"#show-help","aria-label":"show help permalink",className:"anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Show help"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="powershell"><pre class="language-powershell"><code class="language-powershell">crossroads <span class="token operator">--</span>help</code></pre></div>'}}),"\n",s.createElement(a.h3,{id:"execute-generated-app",style:{position:"relative"}},s.createElement(a.a,{href:"#execute-generated-app","aria-label":"execute generated app permalink",className:"anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Execute generated app"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="powershell"><pre class="language-powershell"><code class="language-powershell">&lt;appname><span class="token punctuation">.</span>exe</code></pre></div>'}}),"\n",s.createElement(a.h3,{id:"execute-generated-with-override-arguments",style:{position:"relative"}},s.createElement(a.a,{href:"#execute-generated-with-override-arguments","aria-label":"execute generated with override arguments permalink",className:"anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Execute generated with override arguments"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="powershell"><pre class="language-powershell"><code class="language-powershell">&lt;appname><span class="token punctuation">.</span>exe <span class="token operator">--</span>args <span class="token string">"new args"</span></code></pre></div>'}}))}var c=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?s.createElement(a,e,s.createElement(l,e)):l(e)},r=n(1883),o=n(4697),p=n(8183);const i=e=>{let{children:a,data:n,pageContext:t,location:l}=e;const c=n.allMdx.nodes,i=n.mdx.tableOfContents.items,h=t.frontmatter.title;return s.createElement(o.Z,{data:n,location:l},s.createElement(p.Z,{title:h,description:t.description}),s.createElement("article",{className:"page-main content documentation-main"},s.createElement("nav",{className:"nav documentation-nav"},s.createElement("h4",null,"Documentation"),s.createElement("ul",null,c.map(((e,a)=>{const n=l.pathname.includes(e.fields.slug),t=e.frontmatter.title;return s.createElement("li",{key:a,className:n?"current":""},s.createElement(r.Link,{to:e.fields.slug},t),n&&s.createElement("nav",{className:"nav documentation-content-nav"},s.createElement("ul",null,i&&i.map(((e,a)=>s.createElement("li",{key:`link-${a}`},s.createElement(r.Link,{to:e.url},e.title)))))))})))),s.createElement("div",{className:"documentation-content"},s.createElement("header",null,s.createElement("h2",null,h)),a)))};function h(e){return s.createElement(i,e,s.createElement(c,e))}}}]);
//# sourceMappingURL=component---src-templates-documentation-js-content-file-path-content-documentation-use-mdx-45ad78e03820e9b876f2.js.map