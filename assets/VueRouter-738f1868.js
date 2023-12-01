const t={},n=`<h2>文章介绍</h2>
<p>​	在vue学习过程中，对于路由的种种细节并没有深入学习，故写此篇文章用于深入VueRouter路由知识。</p>
<h2>VueRouter</h2>
<p>​	Vue Router 是 Vue.js 的官方路由。它与 Vue.js 核心深度集成，让用 Vue.js 构建单页应用变得轻而易举。</p>
<p>​	功能包括：嵌套路由映射，动态路由选择，模块化、基于组件的路由配置，路由参数、查询、通配符，展示由 Vue.js 的过渡系统提供的过渡效果，细致的导航控制，自动激活 CSS 类的链接，HTML5 history 模式或 hash 模式，可定制的滚动行为，URL 的正确编码。</p>
<p>（注:简介来自官方文档种的介绍）</p>
<h2>单页应用与多页应用的区别</h2>
<h4>单页应用（SPA）</h4>
<p>​		单页Web应用（single page web application，SPA），就是只有一张Web页面的应用，是加载单个HTML 页面并在用户与应用程序交互时动态更新该页面的Web应用程序。常用于PC端官网、购物等网站。</p>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/17/15fc93562b418a6e~tplv-t2oaga2asx-jj-mark:3024:0:0:0:q75.png" alt="单页面应用结构视图"></p>
<h4>多页面应用（MPA）</h4>
<p>​	多页面跳转刷新所有资源，每个公共资源(js、css等)需选择性重新加载，常用于 app 或 客户端等。</p>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/17/15fc93684b5f10e1~tplv-t2oaga2asx-jj-mark:3024:0:0:0:q75.png" alt="多页面应用结构视图"></p>
<h4>两种设计模式对比分析</h4>
<table>
<thead>
<tr>
<th></th>
<th>SPA</th>
<th>MPA</th>
</tr>
</thead>
<tbody>
<tr>
<td>组成</td>
<td>一个外壳页面和多个页面片段组成</td>
<td>多个完整页面构成</td>
</tr>
<tr>
<td>资源共用(css,js)</td>
<td>共用，只需在外壳部分加载</td>
<td>不共用，每个页面都需要加载</td>
</tr>
<tr>
<td>刷新方式</td>
<td>页面局部刷新或更改</td>
<td>整页刷新</td>
</tr>
<tr>
<td>url 模式</td>
<td>a.com/#/pageone   a.com/#/pagetwo</td>
<td>a.com/pageone.html   a.com/pagetwo.html</td>
</tr>
<tr>
<td>用户体验</td>
<td>页面片段间的切换快，用户体验良好</td>
<td>页面切换加载缓慢，流畅度不够，用户体验比较差</td>
</tr>
<tr>
<td>转场动画</td>
<td>容易实现</td>
<td>无法实现</td>
</tr>
<tr>
<td>数据传递</td>
<td>容易</td>
<td>依赖 url传参</td>
</tr>
<tr>
<td>搜索引擎优化(SEO)</td>
<td>需要单独方案、实现较为困难、不利于SEO检索</td>
<td>实现方法简易</td>
</tr>
<tr>
<td>试用范围</td>
<td>高要求的体验度、追求界面流畅的应用</td>
<td>适用于追求高度支持搜索引擎的应用</td>
</tr>
</tbody>
</table>
<p>（引用自：<a href="https://juejin.cn/post/6844903512107663368">前端：你要懂的单页面应用和多页面应用 - 掘金 (juejin.cn)</a>）</p>
<h2>router-link</h2>
<p>​	VueRouter提供的一个用于代替链接标签的一个自定义组件。它可以使得VueRouter无需重新加载页面的情况下更改URL，处理URL的生成以及编码。</p>
<h4>a标签与router-link标签的区别</h4>
<p>​	常规的a标签在进行跳转的时候，页面会被重新渲染加载，即相当于重新打开了一个页面，在视觉上的感受便是在跳转的过程中会出现页面闪烁。</p>
<p>​	router-link标签支持用户在具有路由功能的组件中进行导航。通过to属性来指定目标的地址。</p>
<p>​	通过router-link标签进行跳转不会跳转到其他页面，因此不会重新渲染重复的页面，只会对路由所执行的组件进行重新渲染，避免了重复渲染。</p>
<h4>语法</h4>
<pre><code class="language-vue">&lt;router-link to=&quot;/&quot;&gt;/router-link&gt;
</code></pre>
`;export{t as attributes,n as html};
