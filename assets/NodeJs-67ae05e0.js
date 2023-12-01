const n={},e=`<h2>Node.js</h2>
<p>​	基于Chrome的V8引擎封装，独立执行JS代码的环境。</p>
<h4>Node.js与浏览器环境的js区别</h4>
<p>​	Node.js环境中没有BOM和DOM元素。</p>
<h4>Node.js有什么用</h4>
<p>​	编写后端程序：提供数据和网页资源等</p>
<p>​	前端工程化：集成各种开发中使用的工具和技术。</p>
<h4>Node.js如何执行代码</h4>
<p>​	在vc终端中输入node xxx.js回车即可执行。</p>
<h2>fs模块-读写文件</h2>
<p>​	fs模块封装了与本机文件系统进行交互的方法/属性。</p>
<h4>语法</h4>
<pre><code class="language-js">//1.加载fs模块对象
const fs = require('fs')
//2.写入文件内容
fs.writeFile('文件路径','写入内容',err=&gt;{
    //写入文件后的回调函数
})
//3.读取文件内容
fs.readFile('文件路径',(err,data)=&gt;{
    //读取后的回调函数
    //data是文件内容的Butter数据流
})
</code></pre>
<h2>path模块-路径处理</h2>
<p>​	建议在node.js代码中，使用绝对路径。</p>
<p>​	__dirname内置变量，用于获取当前模块目录-绝对路径。</p>
<p>​	注意：path.join()会使用特定于平台的分隔符作为界定符，将所有给定的路径片段连接在一起。</p>
<h4>语法</h4>
<pre><code class="language-js">//1.加载path模块
const path = require('path')
//2.使用path.join方法，拼接路径
path.join('路径1','路径2',...)
</code></pre>
`;export{n as attributes,e as html};
