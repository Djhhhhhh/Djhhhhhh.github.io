const n={},t=`<h2>Ajax定义</h2>
<p>​	AJAX = 异步 JavaScript 和 XML。AJAX 是一种用于创建快速动态网页的技术。通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。</p>
<h2>axios库</h2>
<h4>语法</h4>
<p>1.引入axios.js</p>
<p>2.使用axios函数</p>
<p>​	传入配置对象，再使用.then回调函数接收结果，并作后续处理。</p>
<pre><code class="language-js">axios({
	url:'目标资源地址'
}).then((result)=&gt;{
	//对服务器返回的数据进行后续处理
})
</code></pre>
<h2>认识url</h2>
<h4>定义</h4>
<p>​	URL 代表着是统一资源定位符（Uniform Resource Locator）。URL 无非就是一个给定的独特资源在 Web 上的地址。理论上说，每个有效的 URL 都指向一个唯一的资源。这个资源可以是一个 HTML 页面，一个 CSS 文档，一幅图像，等等。</p>
<h4>URL的组成</h4>
<p>​	例如：</p>
<pre><code>http://hmajax.itheima.net/api/province
</code></pre>
<p>​	http::// ————协议     规定浏览器和服务器之间传输数据的格式</p>
<p>​	hmajax.itheima.net———域名   (必须)标记服务器在互联网中的方位</p>
<p>​	/api/province————资源路径    标识了资源在服务器下的位置</p>
<h2>查询参数</h2>
<h4>URL查询参数</h4>
<p>​	浏览器提供服务器的额外信息，让服务器返回浏览器想要的数据。</p>
<p>​	语法</p>
<pre><code>http://xxxx.com/xxx/xxx?参数名1=值1&amp;参数名2=值2
</code></pre>
<h4>axios-查询参数</h4>
<p>​	语法</p>
<pre><code class="language-js">axios({
	url='目标资源地址'
    params:{
    	参数名:值
	}
}).then(result=&gt;{
    //对服务器返回的数据进行后续处理
})
</code></pre>
<h2>常用的请求方法</h2>
<h4>请求方法</h4>
<p>​	对服务器资源，要执行的操作</p>
<table>
<thead>
<tr>
<th>请求方法</th>
<th style="text-align:center">操作</th>
</tr>
</thead>
<tbody>
<tr>
<td>GET</td>
<td style="text-align:center">获取数据</td>
</tr>
<tr>
<td>POST</td>
<td style="text-align:center">提交数据</td>
</tr>
<tr>
<td>PUT</td>
<td style="text-align:center">修改数据（全部）</td>
</tr>
<tr>
<td>DELETE</td>
<td style="text-align:center">删除数据</td>
</tr>
<tr>
<td>PATCH</td>
<td style="text-align:center">修改数据（部分）</td>
</tr>
<tr>
<td></td>
<td style="text-align:center"></td>
</tr>
</tbody>
</table>
<h4>数据提交</h4>
<p>​	当数据需要在服务器上保存</p>
<h4>axios请求配置</h4>
<p>​	url———请求的url地址</p>
<p>​	method————请求的方法</p>
<p>​	data————提交数据</p>
<pre><code class="language-js">axios({
	url='目标资源地址'
    method:'请求方法'   //默认值为get
    data:{
    	参数名:值
	}
}).then(result=&gt;{
    //对服务器返回的数据进行后续处理
})
</code></pre>
<h2>axios错误处理</h2>
<h4>场景</h4>
<p>​	再次注册相同的账号，会遇到报错信息。</p>
<h4>处理</h4>
<p>​	用更直观的方式给普通用户展示错误信息。</p>
<h4>语法</h4>
<pre><code class="language-js">axios({
	//请求选项
}).then(result=&gt;{
	//处理数据
}).catch(error=&gt;{
	//处理错误
})
</code></pre>
<h2>HTTP协议-请求报文</h2>
<h4>HTTP协议</h4>
<p>​	规定了浏览器发送及服务器返回内容的格式。</p>
<h4>请求报文</h4>
<p>​	浏览器按照HTTP协议要求的格式发送给服务器的内容。</p>
<h4>请求报文的组成部分</h4>
<p>​	1.请求行：请求方法，url，协议。</p>
<p>​	2.请求头：以键值对的格式携带的附加信息，比如：Content-Type。</p>
<p>​	3.空行：分隔请求头，空行之后是发送服务器的资源。</p>
<p>​	4.请求体：发送的资源。</p>
<h4>通过请求报文进行错误排查</h4>
<p>​	看报文——&gt;改代码</p>
<h2>HTTP协议-响应报文</h2>
<h4>HTTP协议</h4>
<p>​	规定了浏览器发送及服务器返回内容的格式。</p>
<h4>响应报文</h4>
<p>​	1.响应行（状态行）：协议，HTTP响应状态码，状态信息。</p>
<p>​	2.响应头：以键值对的格式携带的附加信息，比如：Content-Type</p>
<p>​	3.空行：分隔响应头，空行之后的是服务器返回的资源。</p>
<p>​	4.响应体：返回的资源。</p>
<h4>HTTP响应状态码</h4>
<table>
<thead>
<tr>
<th>状态码</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>1xx</td>
<td>信息</td>
</tr>
<tr>
<td>2xx</td>
<td>成功</td>
</tr>
<tr>
<td>3xx</td>
<td>重定向消息</td>
</tr>
<tr>
<td>4xx</td>
<td>客户端错误</td>
</tr>
<tr>
<td>5xx</td>
<td>服务端错误</td>
</tr>
<tr>
<td>404(服务器找不到资源)</td>
<td></td>
</tr>
</tbody>
</table>
<h2>接口文档</h2>
<p>​	描述接口的文章。</p>
<h4>接口</h4>
<p>​	使用AJAX和服务器通讯时，使用的URL，请求方法，以及参数。</p>
<h2>form-serialize插件</h2>
<p>​	快速收集表单元素的值。</p>
<h4>语法</h4>
<pre><code class="language-js">const form = document.querySelector('.example-form')
const data = serialize(form,{hash : true, empty : true }) 
</code></pre>
<p>​	form——要获取哪个表单的数据</p>
<p>​	hash——设置获取数据结构   true-JS对象   false-查询字符串</p>
<p>​	empty——设置是否获取空值   true-获取空值   false-不获取空值</p>
<h2>Bootstrap弹窗</h2>
<p>​	离不开当前页面，显示单独信息，供用户操作。</p>
<h4>步骤</h4>
<p>​	1.引入Bootstrap.js和Bootstrap.css。</p>
<p>​	2.准备弹框标签，确认结构。</p>
<p>​	3.通过自定义属性，控制弹窗的显示和隐藏。</p>
<h4>语法</h4>
<pre><code class="language-js">&lt;button data-bs-toggle=&quot;modal&quot; data-bs-target=&quot;css选择器&quot;&gt;显示弹框&lt;/button&gt;
&lt;button data-bs-toggle=&quot;modal&quot;&gt;Close&lt;/button&gt;
</code></pre>
<h2>图片上传</h2>
<h4>步骤</h4>
<p>​	1.获取图片文件对象。</p>
<p>​	2.使用FormData携带图片文件。</p>
<pre><code class="language-js">const fd = new FormData()
fd.append(参数名,值)
</code></pre>
<p>​	3.提交表单数据到服务器，使用图片url网址</p>
<h2>AJAX原理-XMLHttpRequest</h2>
<p>​	XMLHttpRequest（XHR）对象用于与服务器交互。通过 XMLHttpRequest 可以在不刷新页面的情况下请求特定 URL，获取数据。这允许网页在不影响用户操作的情况下，更新页面的局部内容。<code>XMLHttpRequest</code> 在 AJAX 编程中被大量使用。</p>
<h4>axios和ajax的关系</h4>
<p>​	axios内部采用XMR与服务器交互。</p>
<h4>使用步骤</h4>
<p>​	1.创建xhr对象。</p>
<p>​	2.配置请求方法和请求url地址。</p>
<pre><code class="language-js">const xhr = new XMLHttpRequest
xhr.open('请求方法'，'请求url网址')
xhr.addEventListener('loadend',()=&gt;{
	//响应结果
	console.log(xhr.response)
})
</code></pre>
<h2>XMLHttpRequest-查询参数</h2>
<p>​	浏览器提供服务器的额外信息，让服务器返回浏览器想要的数据。</p>
<h4>语法</h4>
<pre><code class="language-js">http://xxxx.com/xxx/xxx?参数名1=值1&amp;参数名2=值2
</code></pre>
<h2>XMLHttpRequest-数据提交</h2>
<p>​	通过xhr提交用户名和密码，完成注册功能。</p>
<h4>核心</h4>
<p>​	请求头设置Content-Type :  application/json</p>
<p>​	请求体携带JSON字符串</p>
<pre><code class="language-js">//告诉服务器我要传递的内容类型
xhr.setRequestHeader('Content-Type','application/json')
//准备将数据并转变为JSON字符串
const user = {username:'itheima001',password:'1111'}
const userStr = JSON.stringify(user)
xhr.send(userStr)
</code></pre>
<h2>Promise</h2>
<p>​	<code>Promise</code> 对象表示异步操作最终的完成（或失败）以及其结果值。</p>
<h4>好处</h4>
<p>​	1.逻辑更清楚。</p>
<p>​	2.了解axios函数内部的运行机制。</p>
<p>​	3.能解决回调函数地狱问题。</p>
<h4>语法</h4>
<pre><code class="language-js">//创建Promise对象
const p =new Promise ((resolve,reject)=&gt;{
	//执行异步任务 并传递结果
    //成功调用resolve
    //失败调用reject
})	
	//接受结果
p.then(result=&gt;{
	//成功
}).catch(error=&gt;{
	//失败
})
</code></pre>
<h4>Promise三种状态</h4>
<p>​	了解Promise对象如何关联的处理函数，以及代码的执行顺序。</p>
<p>​	待定pending 已对现fulfilled 已拒绝rejected</p>
<h2>同步代码与异步代码</h2>
<p>​	同步代码：逐行执行，需原地等待结果后，才继续向下执行。</p>
<p>​	异步代码：调用后耗时，不阻塞代码继续执行（不必原地等待），在将来完成后触发一个回调函数。</p>
<h4>JS中哪些是异步代码</h4>
<p>​	1.setTimeout/setlnterval</p>
<p>​	2.事件</p>
<p>​	2.AJAX</p>
<h2>回调函数地狱</h2>
<p>​	情景：展示默认第一个省，第一个城市，第一个地区在下拉菜单中。</p>
<p>​	在回调函数中嵌套回调函数，一直嵌套下去就形成了回调函数地狱。</p>
<h4>缺点</h4>
<p>​	可读性差，异常无法捕获，耦合性严重，牵一发而动全身。</p>
<h2>Promise-链式调用</h2>
<p>​	用于解决回调函数地狱问题。</p>
<p>​	依靠then()方法会返回一个新生成的Promise对象特性，继续串联下一环任务，直到结束。</p>
<h4>做法</h4>
<p>​	每个Promise对象管理一个异步任务，用then返回Promise对象，串联起来。</p>
<pre><code class="language-js">axios({}).then(result=&gt;{
	return axios({}).then(result=&gt;{
       	 return axios({}).then(result=&gt;{ 
		})
	})
})
</code></pre>
<h2>async函数和await函数</h2>
<p>​	async<code>和 </code>await\` 关键字让我们可以用一种更简洁的方式写出基于 Promise 的异步行为，而无需刻意地链式调用 promise。</p>
<h4>语法</h4>
<pre><code class="language-js">//1.
async function getData(){
    //2.await等待Promise对象成功的结果
    const pobj = await axios({})
}
</code></pre>
<h4>错误捕捉</h4>
<p>​	使用try-catch语句</p>
<pre><code class="language-js">try{
	//要执行的代码
}catch (error){
	//error接受的是错误信息
	//try里代码，如果有错误直接进入这里执行。
}
</code></pre>
<h2>事件循环</h2>
<p>​	好处：掌握js代码执行顺序。</p>
<p>​	js为单线程，为了让耗时代码不阻塞其他代码执行，设计了事件循环模型。</p>
<p>​	执行代码和收集异步任务的模型，在调用栈空闲，反复调用任务队列里的回调函数的执行机制，就叫事件循环。</p>
<h2>宏任务与微任务</h2>
<p>​	宏任务：有浏览器环境执行的异步代码。</p>
<p>​	微任务：由JS引擎环境执行的异步代码。</p>
<h4>分类</h4>
<table>
<thead>
<tr>
<th>任务</th>
<th>执行所在环境</th>
</tr>
</thead>
<tbody>
<tr>
<td>JS脚本执行事件</td>
<td>浏览器</td>
</tr>
<tr>
<td>setTimeout/setInterval</td>
<td>浏览器</td>
</tr>
<tr>
<td>AJAX请求完成事件</td>
<td>浏览器</td>
</tr>
<tr>
<td>用户交互事件</td>
<td>浏览器</td>
</tr>
<tr>
<td>Promise对象.then()</td>
<td>JS引擎</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h2>Promise.all静态方法</h2>
<p>​	合并多个Promise对象，等待所有用时成功，做后续逻辑。</p>
<h4>语法</h4>
<pre><code class="language-js">const p = Promise.all([Promise对象,Promise对象,...])
p.then(result=&gt;{
	//result结果：[Promise对象成功结果，Promise对象成功结果，...]                 
}).catcg(error=&gt;{
    //第一个失败的Promise对象，抛出的异常。
})
</code></pre>
<h2>Node.js</h2>
<p>​	简单的说 Node.js 就是运行在服务端的 JavaScript。</p>
<h4>作用</h4>
<p>​	使用Node.js编写服务器端程序。</p>
<p>​	1.编写数据接口，提供网页资源浏览功能等等。</p>
<p>​	2.前端工程化。</p>
<h4>什么是前端工程化？</h4>
<p>​	开发项目直到上线，过程种集成的所有工具和技术。</p>
<p>​	格式化工具 压缩工具 转换工具 打包工具 脚手架工具........</p>
<h2>fs模块-写入文件</h2>
<p>​	fs模块：封装了与本机文件系统进行交互的方法/属性。</p>
<h4>语法</h4>
<pre><code class="language-js">const fs = require('fs')   //fs是模块标识符:模块的名字。
</code></pre>
<h4>写入文件</h4>
<pre><code class="language-js">fs.writeFile('文件路径','写入内容',err=&gt;{
	//写入后的回调函数
})
</code></pre>
<h4>读取文件</h4>
<pre><code class="language-js">fs.readFile('文件路径',(err,data)=&gt;{
	//读取后的回调函数
	//data是文件内容的Buffer数据流
})
</code></pre>
<h4>例子</h4>
<pre><code class="language-js">const fs = require('fs')
fs.writeFile('../text.txt','hellow node',(err)=&gt;{
    if(err){
        console.log(err)
    }else {
        console.log('打印成功')
    }
})
fs.readFile('../text.txt',(err,data)=&gt;{
    if(err){
        console.log(err)
    }else {
        console.log(data.toString())
        //.toString()函数可以将16进制数据流对象转换为字符串
    }
})
</code></pre>
<h2>path模块-路径处理</h2>
<p>​	Node.js代码中，相对路径是根据终端所在路径来查找的，可能无法找到你想要找到的文件。</p>
<p>​	建议在Node.js中，使用绝对路径。</p>
<h4>语法</h4>
<pre><code class="language-js">__dirname内置变量(获取当前模块目录-绝对路径)
path.join()会使用特定于平台的分隔符作为界定符，拼接起来
</code></pre>
<h2>URL中的端口号</h2>
<p>​	统一资源定位符，简称网址，用于访问服务器内的资源。</p>
<p>​	端口号：标记服务器里不同功能的服务程序。</p>
<p>​	端口号范围：0-65535之间任意整数。</p>
<p>​	http协议默认访问80端口。</p>
<h4>常用服务程序</h4>
<p>​	web服务程序：用于提供网上信息浏览功能。</p>
<p>​	注意：0-1023和一些特定端口号被占用，我们自己编写服务器程序请避开使用。</p>
<h2>http模块-创建web服务</h2>
<p>​	创建web服务程序并响应内容给浏览器。</p>
<h4>步骤</h4>
<p>​</p>
<p>​	2.监听request请求事件，设置响应头和响应体。</p>
<p>​	3.配置端口号并启动Web服务。</p>
<p>​	4.浏览器请求http://localhost:3000测试</p>
<p>​	注意：localhost固定表示本机域名。</p>
<pre><code class="language-js">//1.加载http模块，创建web服务对象。
const http = require('http')
const server = http.createServer()
//监听request请求事件，设置响应头和响应体
server.on('request',(req,res)=&gt;{
    //若有中文字符 则设置该编码模式
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    res.end('欢迎使用该服务')
})
//配置端口号
server.listen(3000,()=&gt;{
    console.log('web服务启动了')
})
</code></pre>
<h2>Node.js模块化简介</h2>
<p>​	在Node.js中，每个文件都视为一个单独的模块。</p>
<p>​	好处：提高代码复用性，按需加载，独立作用域。</p>
<p>​	概念：项目是由很多个模块文件组成的。</p>
<p>​	使用：需要标准语法导出导入进行使用。</p>
<h4>CommonJ标准</h4>
<p>​	需求：定义utils.js模块，封装基地址和求数组总和的函数。</p>
<p>1.导出：module.exports={}</p>
<pre><code class="language-js">const baseURL = 'http://hmajax.itheima.net'
const getArraysum = arr =&gt; arr.reduce((sum,val)=&gt;sum+=val,0)
module.exports={
	对外属性名1：baseURL
	对外属性名2：getArraySum
}
</code></pre>
<p>2.导入：require('模块名或路径')</p>
<pre><code class="language-js">const obj = require('模块名或路径')
</code></pre>
<p>​	内置模块：直接写名字（例如：fs，path，http）</p>
<p>​	自定义模块：写模块文件路径（例如：./utils.js）</p>
<h2>ECMAScriprt-默认导出和导入</h2>
<p>​	封装并导出基地址和求数组元素和的函数。</p>
<h4>默认使用标准</h4>
<p>​	1.导出：</p>
<pre><code class="language-js">export default{}
</code></pre>
<p>​	2.导入</p>
<pre><code class="language-js">import 变量名 from '模块名或路径'
</code></pre>
<p>注意：Node.js默认支持CommonJS标准语法。</p>
<p>如需使用ECMAScript标准语法，在运行模块所在文件夹新建package.json文件，并设置{&quot;tyep&quot;:&quot;module}</p>
<h2>ECMAScriprt-命名导出和导入</h2>
<p>​	封装并导出基地址和求数组元素和的函数。</p>
<h4>命名使用标准</h4>
<p>​	1.导出</p>
<pre><code class="language-js">export 修饰定义语句
</code></pre>
<p>​	2.导入</p>
<pre><code class="language-js">import {同名变量} from '模块名或路径'
</code></pre>
<h2>包的概念</h2>
<pre><code>将模块，代码，其他资料聚合成一个文件夹。
</code></pre>
<h4>包的分类</h4>
<p>​	1.项目包：主要用于编写项目和业务逻辑。</p>
<p>​	2.软件包：封装工具和方法进行使用。</p>
<h4>要求</h4>
<p>​	根目录下，必须有package.json文件（记录包的清单信息）</p>
<pre><code class="language-json">{
	&quot;name&quot;:&quot;cz_utils&quot;,          软件包名称
	&quot;versoin&quot;:&quot;1.0.0&quot;,         软件包当前版本
	&quot;description&quot;:&quot;一个数组和字符串常用工具方法的包&quot;,   软件包简短描述
	&quot;main&quot;:&quot;index.js&quot;,  软件包入口点
	&quot;author&quot;:&quot;itheima&quot;   软件包作者
	&quot;license&quot;:&quot;MIT&quot;   软件包许可证
}
</code></pre>
<h2>npm-软件包管理器</h2>
<p>​	Node.js下的仓库。</p>
<h5>使用</h5>
<p>​	1.初始化清单文件：npm init-y （得到package.json文件，有则忽略此命令）</p>
<p>​	2.下载软件包：npm i 软件包名称</p>
<p>​	3.使用软件包。</p>
<h2>npm-安装所有依赖</h2>
<p>​	安装当前项目所需要的软件包。</p>
<h4>方法</h4>
<p>​	使用命令：npm i</p>
<p>​	用于下载package.json中记录的所有的软件包。</p>
<h2>npm-全局软件包nodemon</h2>
<p>​	本地软件包：当前项目内使用，封装属性和方法，存在于node_modules</p>
<p>​	全局软件包：本机所有项目使用，封装命令和工具，存在于系统设置的位置。</p>
<h4>作用</h4>
<p>​	代替node命令，检测代码更改，自动重启程序。</p>
<h4>使用</h4>
<p>​	1.安装：npm i nodemon -g (-g代表全局环境中)</p>
<p>​	2.运行：nodemon待执行的目标js文件。</p>
<h2>Webpack</h2>
<p>​	本质上，webpack 是一个用于现代 JavaScript 应用程序的 静态模块打包工具。当 webpack 处理应用程序时，它会在内部从一个或多个入口点构建一个 依赖图，然后将你项目中所需的每一个模块组合成一个或多个 bundles，它们均为静态资源，用于展示你的内容。</p>
<h4>静态模块：</h4>
<p>​	指的是编写代码过程中的，html，css，js，图片等固定的文件。</p>
<h4>打包：</h4>
<p>​	把静态模块内容，压缩，整合，转译等。（前端工程化）</p>
<p>​	把less/sass转成css代码。</p>
<p>​	把ES6+降级成ES5。</p>
<p>​	支持多种模块标准语法。</p>
<h4>使用Webpack</h4>
<p>​	1.新建并初始化项目，编写业务源代码。</p>
<p>​	2.下载Webpack webpack -cli到当前项目中（独立版本），并配置局部自定义命令。</p>
<p>​	3.运行打包命令，自动产生dist分发文件夹（压缩和优化后，用于最终运行的代码）</p>
`;export{n as attributes,t as html};
