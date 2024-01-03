const t={},n=`<p>[Vue概念</p>
<p>​		Vue是用于构建用户界面的渐进式框架。</p>
<h4>构建用户界面</h4>
<p>​	基于数据渲染出用户看到的页面。</p>
<h4>渐进式</h4>
<p>​	循序渐进。</p>
<p>​	声明式渲染 =&gt; 组件系统 =&gt; 客户端路由VueRouter =&gt; 大规模状态管理Vuex =&gt; 构建工具Webpack/Vite</p>
<p>​	Vue的两种使用方式：</p>
<pre><code class="language-js">	1.	Vue核心包开发：局部模块开发。
	2.	Vue核心包&amp;Vue插件 工程化开发：整站开发。
</code></pre>
<h4>框架</h4>
<p>​	是一套完整的项目解决方案。</p>
<p>​	优点：大大提升开发效率。</p>
<h2>创建一个Vue实例</h2>
<h4>流程</h4>
<p>​	构建用户界面=&gt;创建vue实例初始化渲染=&gt;核心步骤：</p>
<p>​		1.准备容器。</p>
<p>​		2.引包-开发版本/生产版本。</p>
<p>​		3.创建Vue实例 new Vue()。</p>
<p>​		4.指定配置项=&gt;渲染数据=&gt;el指定挂载点+data提供数据。</p>
<h4>语法</h4>
<pre><code class="language-js">const app=new Vue({
            el:'.app',
            data:{
                msg:'hellow 黑马',
                count: 666,
                nickname:'oo'
            }
	})
</code></pre>
<h2>插值表达式</h2>
<p>​	是vue的一种模板语法。</p>
<h4>作用</h4>
<p>​	利用表达式进行插值，渲染到页面中。</p>
<p>​	表达式：是可以给被求值的代码，js引擎会将其计算出一个结果。</p>
<h4>语法</h4>
<pre><code class="language-js">{{表达式}}
</code></pre>
<h4>注意</h4>
<p>​	1.使用的数据必须存在(data)</p>
<p>​	2.支持的是表达式，而非语句，比如：if for...</p>
<p>​	3.不能在标签属性中使用{{}}插值。</p>
<h2>Vue响应式特性</h2>
<p>​	数据改变了，视图会自动更新。</p>
<p>​	聚焦于数据=&gt;数据驱动视图</p>
<p>​	使用Vue开发，关注业务的核心逻辑，根据业务修改数据即可。</p>
<h4>访问数据</h4>
<pre><code class="language-js">&quot;实例.属性名&quot;
</code></pre>
<h4>修改数据</h4>
<pre><code class="language-js"> &quot;实例.属性名&quot; = &quot;值&quot;
</code></pre>
<h2>method方法</h2>
<p>​	methods方法写在Vue元素中，用于封装方法函数。</p>
<p>​	访问用this就行，this指向当前实例。</p>
<h2>Vue指令</h2>
<p>​	Vue会根据不同的指令，针对标签实现不同的功能。</p>
<h4>指令</h4>
<p>​	带有v-前缀的特殊标签属性。</p>
<h4>v-html</h4>
<p>​	作用：设置元素的innerHTML</p>
<p>​	语法：</p>
<pre><code class="language-js">v-html=&quot;表达式&quot;
</code></pre>
<h4>v-show</h4>
<p>​	作用：用于控制元素的显示隐藏。</p>
<p>​	原理：是在css上加上display：none</p>
<p>​	使用场景：频繁切换显示隐藏的场景。</p>
<p>​	语法：</p>
<pre><code class="language-js">v-show=&quot;表达式&quot; 表达式值true显示 false隐藏
</code></pre>
<h4>v-if</h4>
<p>​	作用：控制元素显示隐藏（条件渲染）。</p>
<p>​	原理：根据判断条件，控制元素的创建和移除。</p>
<p>​	使用场景：要么显示，要么隐藏，不频繁切换的场景。</p>
<p>​	语法：</p>
<pre><code class="language-js">v-if=&quot;表达式&quot; 表达式值true显示 false隐藏
</code></pre>
<h4>v-else和v-else-if</h4>
<p>​	作用：辅助v-if进行判断渲染</p>
<p>​	注意：要紧挨着v-if使用。</p>
<p>​	语法：</p>
<pre><code class="language-js">v-else v-else-if=&quot;表达式&quot;
</code></pre>
<h4>v-on</h4>
<p>​	作用：注册事件 = 添加监听 + 提供处理逻辑</p>
<p>​	技巧：v-on:可以用@代替。</p>
<p>​	语法：</p>
<pre><code class="language-js">v-on:事件名=&quot;内联元素&quot;
v-on:事件名=&quot;methods中的函数名&quot;
@事件名=&quot;内联元素&quot;
@事件名=&quot;methods中的函数名&quot;
</code></pre>
<h4>v-on调用传参</h4>
<p>​	语法：</p>
<pre><code class="language-js">@click=&quot;fn(参数1，参数2...)&quot;
</code></pre>
<h4>v-bind</h4>
<p>​	作用：动态设置html的标签属性。</p>
<p>​	语法：</p>
<pre><code class="language-js">v-bind:属性=&quot;属性值&quot;
</code></pre>
<p>​	简写：</p>
<pre><code class="language-js">:属性=&quot;属性值&quot;
</code></pre>
<h4>v-for</h4>
<p>​	作用：基于数据循环，多次渲染整个元素。</p>
<p>​	语法：</p>
<pre><code class="language-js">v-for=&quot;(item,index) in 数组&quot;
//item 每一项 index 下标
</code></pre>
<h4>v-for中的key</h4>
<p>​	作用：给列表项添加唯一标识。便于vue进行列表项的正确排序服用。</p>
<p>​	语法：</p>
<pre><code class="language-js">:key=&quot;唯一标识&quot;
</code></pre>
<p>​	注意点:</p>
<p>​		1.key的值只能是字符串或数字类型。</p>
<p>​		2.key的值必须具有唯一性。</p>
<p>​		3.推荐使用id作为key（唯一），不推荐使用index作为key（会变化，不对应）</p>
<h4>v-model</h4>
<p>​	作用：给表单元素使用，双向数据绑定=&gt;可以快速获取或设置表单内容。</p>
<p>​		1.数据变化=&gt;视图自动更新。</p>
<p>​		2.视图变化=&gt;数据自动更新。</p>
<p>​	语法：</p>
<pre><code class="language-js">v-model=&quot;变量&quot;
</code></pre>
<h2>指令的修饰符</h2>
<p>​	通过'.'指明一些指令后缀，不同后缀封装了不同的处理操作=&gt;简化代码</p>
<h4>分类</h4>
<h5>1.按键修饰符</h5>
<p>​		@keyup.enter    键盘回车监听</p>
<h5>2.v-model修饰符</h5>
<p>​		 v-model.trim 去除首尾空格</p>
<p>​		v-model.number 转数字</p>
<h5>3.事件修饰符</h5>
<p>​		@事件名.stop 阻止冒泡</p>
<p>​		@事件名.prevent  阻止默认行为</p>
<h2>v-bind对于样式控制的增强</h2>
<p>​	Vue扩展了v-bind的语法，可以针对class类名和style行内样式进行控制。</p>
<h4>操作class</h4>
<p>​	语法：</p>
<pre><code class="language-vue">:class=&quot;对象/数组&quot;
</code></pre>
<p>​	1.对象：键就是类名，值是布尔值。如果值为true有这个类，否则没有。</p>
<pre><code class="language-vue">&lt;div class=&quot;box&quot; :class=&quot;{类名1:布尔值,类名2:布尔值}&quot;&gt;&lt;/div&gt;
</code></pre>
<p>​	2.数组：数组中的所有类，都会添加到盒子上，本质上就是一个class列表。</p>
<pre><code class="language-vue">&lt;div class=&quot;box&quot; :class=&quot;[类名1，类名2，类名3]&quot;&gt;&lt;/div&gt;
</code></pre>
<h4>操作style行内样式</h4>
<p>​	语法：</p>
<pre><code class="language-vue">&lt;div class=&quot;box&quot; :style=&quot;{css属性名1:'css属性值',css属性名2:'css属性值'}&quot;&gt;&lt;/div&gt;
</code></pre>
<p>​	使用场景：</p>
<p>​		某个具体属性的动态设置。</p>
<h2>v-model应用于其他表单元素</h2>
<p>​	常见的表单元素都可以用v-model绑定关联=&gt;快速设置获取或设置表单元素的值。</p>
<p>​	它会根据控件类型自动选取正确的方法来更新元素。</p>
<h4>分类</h4>
<p>​	输入框 input:text    =&gt;    value</p>
<p>​	文本域 textarea      =&gt; value</p>
<p>​	复选框input:checkbox =&gt;checked</p>
<p>​	单选框input:radio =&gt;check</p>
<p>​	下拉菜单 select =&gt;value</p>
<p>​	.......</p>
<h2>计算属性</h2>
<p>​	基于现有的数据，计算出的新属性。依赖的数据变化，自动重新计算。</p>
<h4>简写语法</h4>
<p>​	1.声明computed配置项中，一个计算属性对应一个函数。</p>
<p>​	2.使用起来和普通属性一样使用{{计算属性名}}</p>
<pre><code class="language-js">computed:{
	计算属性名(){
		基于现有数据，编写求值逻辑。
		return 结果
	}
},
</code></pre>
<p>​	计算属性内部可以通过this访问到app实例。</p>
<h4>与methods方法区别</h4>
<p>​	computed计算属性：</p>
<p>​	作用：封装一段对于数据的处理，求得一个结果。</p>
<p>​	methods方法：</p>
<p>​	作用：给实例提供一个方法，调用以处理业务逻辑。</p>
<h4>缓存特性</h4>
<p>​	计算属性会对计算出来的结果缓存，再次使用直接读取缓存，依赖项变化了，会自动重新计算，并再次缓存。</p>
<h4>完整写法</h4>
<pre><code class="language-js">computed:{
	计算属性名:{
		get(){
			一段代码逻辑（计算逻辑）
			return 结果
		}，
		set(修改的值){
			一段代码逻辑（修改逻辑）
		}
	}
}
</code></pre>
<h2>watch侦听器(监视器)</h2>
<p>​	监听数据变化，执行一些业务逻辑或异步操作。</p>
<h4>简写语法</h4>
<pre><code class="language-js">watch:{
	//该方法会在数据变化时触发执行
	数据属性名 (newValue,oldValue){
		//一些业务逻辑或异步操作
	},
     //newValue是信值 oldValue是老值 一般忽略不写
	'对象.属性名'(newValue,oldValue){
		//一些业务逻辑或异步操作
	}
}
</code></pre>
<h4>完整写法</h4>
<p>​	1.deep:true 对复杂类型深度监视</p>
<p>​	2.immediate:true 初始化立即执行一次handler方法</p>
<pre><code class="language-js">data:{
    obj:{
        word:'',
        lang:''
    },
},
watch:{
    数据属性名:{
        deep:true,
        handler(newValue){
            console,log(newValue)
        }
    }
}
</code></pre>
<h2>Vue生命周期</h2>
<p>​	一个Vue实例从创建到销毁的整个过程。</p>
<h4>四个生命阶段</h4>
<p>​	1.创建      数据的响应式处理                (发送初始化渲染请求)</p>
<p>​	2.挂载      渲染模板								(等挂载结束后可以操作dom)</p>
<p>​	3.更新      修改数据，更新视图</p>
<p>​	4.销毁	   销毁实例</p>
<h4>声明周期函数(钩子函数)</h4>
<h6>1.beforeCreate</h6>
<pre><code class="language-js">beforeCreate(){
	console.log(beforeCreate   响应式数据准备好之前)
}
</code></pre>
<h6>2.created</h6>
<pre><code class="language-js">created(){
	console.log(created   响应式数据准备好之后)
}
</code></pre>
<h6>3.beforeMount</h6>
<pre><code class="language-js">beforeMount(){
	console.log(beforeMount  模板渲染之前)
}
</code></pre>
<h6>4.mounted</h6>
<pre><code class="language-js">mounted(){
	console.log(mounted  模板渲染之后)
}
</code></pre>
<h6>5.beforeUpdate</h6>
<pre><code class="language-js">beforeUpdate(){
	console.log(beforeUpdate 数据修改了，视图还没更新)
}
</code></pre>
<h6>6.updated</h6>
<pre><code class="language-js">updated(){
	console.log(updated  数据修改了，视图已经更新)
}
</code></pre>
<h6>7.beforDestroy</h6>
<pre><code class="language-js">beforDestroy(){
	console.log(beforDestroy  卸载前)
}
</code></pre>
<h6>8.destroyed</h6>
<pre><code class="language-js">destroyed(){
	console.log(destroyed   卸载后)
}
</code></pre>
<h2>工程化开发</h2>
<p>开发vue的两种方式：</p>
<p>​	1.核心包传统开发模式：基于html/css/js文件，直接引入核心包，开发Vue。</p>
<p>​	2.工程化开发模式：基于构建工具（例如：webpack）的环境中开发Vue。</p>
<h2>脚手架VueClI</h2>
<p>​	Vue ClI是Vue官方提供的一个全局命令工具。</p>
<p>​	可以帮助我们快速创建一个开发Vue项目的标准化基础架子。[集成了webpack配置]</p>
<h4>好处：</h4>
<p>​	1.开箱即用。</p>
<p>​	2.内置babel等工具。</p>
<p>​	3.标准化。</p>
<h4>使用步骤</h4>
<p>​	1.全局安装：yarn global add @vue/cli  或   npm i @vue/cli -g</p>
<p>​	2.查看Vue坂本：vue --version</p>
<p>​	3.创建项目架子：vue create project-name(项目名--不能用中文)</p>
<p>​	4.启动项目：yarn serve 或 npm run serve (找package.json)</p>
<h2>脚手架目录文件介绍</h2>
<h4>Vue-DEMO</h4>
<h5>node_modules</h5>
<p>​	//第三方文件夹。</p>
<h5>public</h5>
<p>​	//放html文件的地方。</p>
<h6>favicon.ico</h6>
<p>​		//网站图标。</p>
<h6>index.html</h6>
<p>​		//index.html模板文件。</p>
<h5>src</h5>
<p>​	//源代码目录 =&gt;以后写代码的文件夹。</p>
<h6>assets</h6>
<p>​		//静态资源目录 =&gt;用于存放图片，字体等。</p>
<h6>components</h6>
<p>​		//组件目录  =&gt; 存放通用组件。</p>
<h6>App.vue</h6>
<p>​		//App根组件  =&gt;  项目运行看到的内容就在这里编写。</p>
<h6>main.js</h6>
<p>​		//入口文件 =&gt; 打包或运行，第一个执行的文件。</p>
<h5>.gitignore</h5>
<p>​	//git忽视文件。</p>
<h5>babel.config.js</h5>
<p>​	//babel配置文件。</p>
<h5>jsconfig.json</h5>
<p>​	//js配置文件。</p>
<h5>package.json</h5>
<p>​	//项目配置文件 =&gt;包含项目名，版本号，scripts，依赖包等。</p>
<h5>README.md</h5>
<p>​	//项目说明文档。</p>
<h5>vue.config.js</h5>
<p>​	//vue-cli配制文件。</p>
<h5>yarn.lock</h5>
<p>​	//yarn锁文件，由yarn自动生成的，锁定安装版本。</p>
<h2>组件化</h2>
<p>​	一个页面可以拆分为一个个组件，每个组件有着组件自己独立的结构，样式，行为。</p>
<p>​	好处：便于维护，利于复用 =&gt; 提升开发效率。</p>
<h4>组件分类</h4>
<p>​	普通组件</p>
<p>​	根组件：整个应有最上层的组件，包裹所有普通小组件。</p>
<h4>App.vue文件（单文件组件）</h4>
<p>​	三部分组成：1.template 结构</p>
<p>​							2.script js逻辑</p>
<p>​							3.style：样式 （可支持less，需要装包）</p>
<h2>普通组件的注册使用</h2>
<h4>注册组件的两种方式</h4>
<p>​	1.局部注册：只能在注册的组件内使用。</p>
<p>​		创建.vue文件=&gt;在使用的组件内导入并注册</p>
<p>​	2.全局注册：所有组件内都能使用。</p>
<p>​		创建.vue文件=&gt;main.js中进行全局注册</p>
<h2>组件三部分注意点</h2>
<h4>结构</h4>
<p>​	只能有一个根元素。</p>
<h4>样式</h4>
<p>​	全局样式（默认）：影响所有组件。</p>
<p>​	局部样式：scoped下样式，只作用于当前组件。</p>
<h4>逻辑</h4>
<p>​	el根实例独有，data是一个函数其他配置项一致。</p>
<h2>组件样式冲突scoped</h2>
<p>​	默认情况：写在组件中的样式会全局生效=&gt;因此很容易造成多个组件之间的样式冲突问题。</p>
<h4>全局样式</h4>
<p>​	默认组件中的样式会作用到全局。</p>
<h4>局部样式</h4>
<p>​	可以给组件加上scoped属性，可以让样式只作用于当前组件。</p>
<p>​	原理：给当前组件模板内的所有元素都添加上一个自定义属性，data-v-hash值 ，利用哈希值可以区分不同组件。</p>
<p>​				css选择器后边，被自动处理，添加上了属性选择器。</p>
<h2>data</h2>
<p>​	一个组件的data选项必须是一个函数。=&gt;保证每个组件实例，维护独立的一份数据对象。</p>
<p>​	每次创建新的组件实例都会新执行一次data函数，得到一个新对象。</p>
<h4>语法</h4>
<pre><code class="language-js">data(){
	return {
		count:100
	}
},
</code></pre>
<h2>组件通信</h2>
<p>​	组件通信值得是组件与组件之间的数据传递。</p>
<p>​	组件的数据是独立的，无法直接访问其他组件的数据。</p>
<p>​	想用其他组件的数据=&gt;组件通信。</p>
<h4>组件关系</h4>
<p>​	1.父子关系</p>
<p>​	2.非父子关系</p>
<h4>组件通信解决方案</h4>
<p>​	1.父子关系</p>
<p>​		props和$emit</p>
<p>​		父组件通过props将数据传递给子组件。</p>
<p>​		子组件通过$emit通知父组件修改更新。</p>
<p>​	2.非父子关系</p>
<p>​		provide&amp;inject和eventbus</p>
<p>​	3.通用解决方案:</p>
<p>​		Vuex</p>
<h2>prop</h2>
<p>​	组件上注册的一些自定义属性。</p>
<h4>作用</h4>
<p>​	向子组件传递数据。</p>
<h4>流程</h4>
<p>​	1.在父组件中提供一些数据。</p>
<p>​	2.给当前组件以添加属性的方式传值。</p>
<p>​	3.子组件内部用prop进行接受。</p>
<p>​	4.渲染界面。</p>
<h4>特点</h4>
<p>​	可以传递任意数量的prop</p>
<p>​	可以传递任意类型的prop</p>
<h2>props校验</h2>
<p>​	为组件的prop指定验证要求，不符合要求，控制台就会有错误提示=&gt;帮助开发者，快速发现错误。</p>
<h4>语法</h4>
<p>​	1.类型校验</p>
<pre><code class="language-js">props:{
	校验的属性名:类型
},
</code></pre>
<p>​	2.非空校验</p>
<p>​	3.默认值</p>
<p>​	4.自定义校验</p>
<pre><code class="language-js">props:{
	校验的属性名:{
		type: 类型,
		required: true,  //是否必填
		default: 默认值,  //默认值
		validator(value){   //自定义校验逻辑
			return 是否通过校验
		}
	}
}
</code></pre>
<h2>prop&amp;data区别</h2>
<h4>共同点</h4>
<p>​	都可以给组件提供数据。</p>
<h4>区别</h4>
<p>​	data的数据是自己的=&gt;随便改。</p>
<p>​	prop的数据是外部的=&gt;不能随便该，要遵循单向数据流。</p>
<h4>单向数据流</h4>
<p>​	父级prop的数据更新，会向下流动，影响子组件。这个数据流动是单向的。</p>
<h2>v-model原理</h2>
<p>​	v-model的本质是一个语法糖。</p>
<p>​	例如应用在输入框上，就是value属性和input属性的合写。</p>
<h4>作用</h4>
<p>​	提供数据的双向绑定。</p>
<p>​	1.数据变化=&gt;视图自动更新。 :value</p>
<p>​	2.视图变化=&gt;数据自动更新。 @input</p>
<h4>注意</h4>
<p>​	$event用于在模板中，获取事件的形参。</p>
<h2>表单类组件封装</h2>
<h4>核心步骤</h4>
<p>​	1.父传子：数据应该是父组件props传递过来的，v-model拆解绑定数据。</p>
<p>​	2.子传父：监听输入，子传父传值给父组件修改。</p>
<h5>子组件封装</h5>
<pre><code class="language-vue">&lt;select :value=&quot;cityId&quot; @change=&quot;handleChange&quot;&gt;...&lt;/select&gt;
props:{
    city:String
},
methods:{
    handleChange(e){
        this.$emit('事件名',e.target.value)
    }
}
</code></pre>
<h5>父组件使用</h5>
<pre><code class="language-vue">&lt;BaseSelect :cityId=&quot;selectId&quot; @事件名=&quot;selecteId=$event&quot;/&gt;
</code></pre>
<h4>代码简化</h4>
<p>​	1.子组件中：props通过value接收，事件触发input</p>
<p>​	2.父组件中：v-model给组件直接绑数据。</p>
<h5>子组件封装</h5>
<pre><code class="language-vue">&lt;select :value=&quot;cityId&quot; @change=&quot;handleChange&quot;&gt;...&lt;/select&gt;
props:{
    city:String
},
methods:{
    handleChange(e){
        this.$emit('input',e.target.value)
    }
}
</code></pre>
<h5>父组件使用</h5>
<pre><code class="language-vue">&lt;BaseSelect v-model=&quot;selectId&quot;/&gt;
</code></pre>
<h2>.sync修饰符</h2>
<p>​	可以实现子组件与父组件数据的双向绑定，简化代码。</p>
<h4>特点</h4>
<p>​	prop属性名，可以自定义，非固定value。</p>
<h4>场景</h4>
<p>​	封装弹框类的基础组件，visible属性true显示，false 隐藏</p>
<h5>父组件使用</h5>
<pre><code class="language-js">&lt;BaseDialog :visible.sync=&quot;isShow&quot; /&gt;
------------------------------------------------------
&lt;BaseDialog 
	:visible=&quot;isShow&quot;
	@update:visible=&quot;isShow=$event&quot;
/&gt;
</code></pre>
<p>​	本质：就是:属性名和@updat：属性名合写。</p>
<h5>子组件封装</h5>
<pre><code class="language-js">props:{
	visible:Boolean
},
this.$emit('update:visible',false)
</code></pre>
<h2>ref和$refs</h2>
<p>​	利用ref和$refs可以获取dom元素，或组件实例。</p>
<h4>获取dom元素</h4>
<p>​	1.目标标签添加ref属性</p>
<pre><code class="language-html">&lt;div ref=&quot;chartRef&quot;&gt;我是渲染的图表&lt;/div&gt;
</code></pre>
<p>​	2.恰当时机获取目标标签  通过this.$refs.charRef</p>
<pre><code class="language-js">mounted(){
	console.log(this.$refs.charRef)
},
</code></pre>
<h4>获取组件实例</h4>
<p>​	1.目标组件 添加ref属性</p>
<pre><code class="language-js">&lt;BaseForm ref=&quot;chartRef&quot;&gt;我是渲染的图表&lt;/BaseForm&gt;
</code></pre>
<p>​	2.恰当时机获取目标组件  通过this.$refs.charRef</p>
<pre><code class="language-js">this.$refs.baseForm.组件方法()
</code></pre>
<h2>$nextTick</h2>
<p>​	等Dom更新后，才触发执行此方法里的函数体。</p>
<p>​	用于解决dom异步问题。</p>
<h4>语法</h4>
<pre><code class="language-js">this.$nextTick(函数体)
</code></pre>
<h2>自定义指令</h2>
<p>​	自己定义的指令，可以封装一些dom操作，扩展额外功能。</p>
<h4>全局注册</h4>
<pre><code class="language-vue">Vue.directive('指令名',{
	&quot;inserted&quot;(el){
		//可对el标扩展额外功能
		el.focus()
	}
})
</code></pre>
<h4>局部注册</h4>
<pre><code class="language-vue">directives:{
	&quot;指令名&quot;:{
		inserted(){
			//可对el标扩展额外功能
			el.focus()
		}
	}
}
</code></pre>
<h4>使用</h4>
<pre><code class="language-html">&lt;input v-指令名 type=&quot;text&quot;&gt;
</code></pre>
<h2>自定义指令-指令的值</h2>
<p>​	在绑定指令时，可以通过等号的形式为指令绑定具体的参数值。</p>
<h4>语法</h4>
<pre><code class="language-js">&lt;div v-color=&quot;color&quot;&gt;我是内容&lt;/div&gt;
</code></pre>
<p>​	通过binding.value可以拿到指令值，指令值修改会触发updata函数。</p>
<pre><code class="language-vue">directives:{
	color:{
		inserted(el,binding){
			el.style.color=binding.value
		},
		updata(el,binding){
			el.style,color=binding.value
		}
	}
}
</code></pre>
<h2>默认插槽</h2>
<p>​	让组件内部的一些结构支持自定义。</p>
<h4>语法</h4>
<p>​	1.组件内需要定制的结构部分，用<slot></slot>占位。</p>
<p>​	2.使用组件时，<MyDialog></MyDialog>标签内部，传入结构替换slot。</p>
<p>​	3.在<slot>标签内防止内容，作为默认显示内容。</p>
<h2>具名插槽</h2>
<p>​	一个组件内有多处结构，需要外部传入标签，进行定制。</p>
<h4>语法</h4>
<p>​	1.多个slot使用name属性区分名字。</p>
<p>​	2.template配合v-slot:名字来分发对应标签。</p>
<p>​	3.v-slot:可简化成#插槽名。</p>
<h2>作用域插槽</h2>
<p>​	定义slot插槽的同时，是可以传值的。给插槽上可以绑定数据，将来使用组件时可以用。</p>
<p>​	注：不属于插槽分类。</p>
<h4>语法</h4>
<p>​	1.给slot标签，以添加属性的方式传值。</p>
<p>​	2.所有添加的属性，都会被收集到一个对象中。</p>
<p>​	3.在tempalte中，通过'#插槽名=&quot;obj&quot;'接收，默认插槽名为default。</p>
<h2>单页应用名程序</h2>
<p>​	SPA-Single Page Application</p>
<p>​	所有功能在一个html页面上实现。</p>
<h4>单页与多页面比较</h4>
<p>​	开发分类	实现方式	页面性能	开发效率	用户体验	学习成本	首页加载	SEO</p>
<p>​	单页			一个html	按需更新	高				非常好		高				慢				差</p>
<p>​	多页			多个html	整页更新	中等			一般			中等			快 				优</p>
<h2>路由</h2>
<p>​	是一种映射关系。</p>
<p>​	生活中的路由：设备和ip的映射关系。</p>
<p>​	Vue中路由：路径和组件的映射关系。</p>
<h2>VueRouter</h2>
<p>​	修改地址栏路径设，切换显示匹配的组件。</p>
<h4>步骤</h4>
<p>​	1.下载</p>
<pre><code class="language-js">yarn add vue-router@3.6.5
//233  vue2 下载 VueRouter2.x Vuex2.x
//344  vue3 下载 VueRouter3.x Vuex3.x
</code></pre>
<p>​	2.引入</p>
<pre><code class="language-js">import VueRouter from 'vue-router'
</code></pre>
<p>​	3.安装注册。</p>
<pre><code class="language-js">Vue.use(VueRouter)   //插件初始化
</code></pre>
<p>​	4.创建路由对象。</p>
<pre><code class="language-js">const router = new VueRouter()
</code></pre>
<p>​	5.注入，将路由对象注入到new Vue实例中，建立关联。</p>
<pre><code class="language-js">new Vue({
	render: h=&gt;h(App),
	router
}).$mount('#app')
</code></pre>
<h4>核心步骤</h4>
<p>​	6.创建需要的组件（views目录），配置路由规则。</p>
<pre><code class="language-js">const router = new VueRouter({
	routes:[
		{path:'路径1',component:组件1},
		{path:'路径2',component:组件2},
	]
})
</code></pre>
<p>​	7.配置导航，配置路由出口（路径匹配的组件显示的位置）。</p>
<pre><code class="language-html">&lt;div class=&quot;&quot;&gt;
    &lt;a href=&quot;#/路径1&quot;&gt;&lt;/a&gt;
    &lt;a href=&quot;#/路径2&quot;&gt;&lt;/a&gt;
&lt;/div&gt;
&lt;div&gt;
    &lt;router-view&gt;组件显示位置&lt;/router-view&gt;
&lt;/div&gt;
</code></pre>
<h2>组件分类</h2>
<p>​	页面组件和服用组件。</p>
<h4>意义</h4>
<p>​	分开来更易维护。</p>
<h4>页面组件</h4>
<p>​	src/views文件</p>
<p>​	页面展示-配合路由用。</p>
<h4>复用组件</h4>
<p>​	src/components文件</p>
<p>​	展示数据-常用于复合。</p>
<h2>路由模块封装</h2>
<p>​	创建一个router  /index.js文件</p>
<p>​	将路由创建封装起来。</p>
<h4>好处</h4>
<p>​	拆分模块，利于维护。</p>
<h2>声明式导航</h2>
<p>​	事项导航高亮效果。</p>
<p>​	vue-router提供了一个全局组件router-link（取代a标签）</p>
<h4>语法</h4>
<pre><code class="language-html">&lt;a href=&quot;&quot;&gt;&lt;/a&gt;
//等价
&lt;vue-router to=&quot;&quot;&gt;&lt;/vue-router&gt;
</code></pre>
<p>注意：能跳转，配置to属性指定路径（必须）。本质还是a标签，to无需#<code> </code></p>
<p>​			默认提供高亮，可以直接设置高亮样式。</p>
<h4>两个类名</h4>
<pre><code>1. router-link-active 模糊匹配  (常用)
1. router-link-exact-active 精准匹配
</code></pre>
<h4>自定义高亮类名</h4>
<pre><code class="language-js">const router = new VueRouter({
	routes:[...]
	linkActiveClass:&quot;类名1&quot;,
	linkExactActiveClass:&quot;类名2&quot;,
})
</code></pre>
<h4>跳转传参</h4>
<p>​	在跳转路由时，进行传值。</p>
<p>​	1.查询参数传参。</p>
<pre><code class="language-js">//传递
to=&quot;/path?参数名=值&quot;
//接受
this.$route.query.参数名
</code></pre>
<p>​	2.动态路由传参。</p>
<pre><code class="language-js">//配置动态路由
const router = new VueRouter({
    routes:[
        ...,
        {
        	path:'/search/:words'.
        	component:Search
        }
    ]
})
//配置导航链接
to=&quot;/path/参数值&quot;
//获取动态路由参数
this.$route.params.参数名
//获取查询参数
this.$route.query.参数名
</code></pre>
<p>​	3.两种传参方式的区别</p>
<p>​		第一种个适合传多个参数，第二种简洁优雅，传单个参数时比较方便。</p>
<p>​	4.注意：/search/:words表示，必须要传参数。如果不传参数，也希望匹配，可以在words后面加个？</p>
<h2>Vue路由-重定向</h2>
<p>​	重定向-&gt;匹配path后，强制跳转path路径。</p>
<h4>语法</h4>
<pre><code class="language-js">{
	path:匹配路径,
	redirect:重定向到的路径
}
</code></pre>
<h2>Vue路由-404</h2>
<p>​	当路径找不到匹配时，给个提示页面。</p>
<h4>语法</h4>
<pre><code class="language-vue">//放在路径最后面
{path:&quot;*&quot;,component:任意路径}
</code></pre>
<h2>Vue路由-模式设置</h2>
<p>​	hash路由（默认模式）</p>
<p>​	history路由（常用）</p>
<h4>语法</h4>
<pre><code class="language-js">const router = new VueRouter({
	routs,
	mode:&quot;history&quot;
})
</code></pre>
<h2>编程式导航</h2>
<p>​	点击按钮完成跳转。</p>
<h4>path路径跳转</h4>
<pre><code class="language-js">this.$router.push('路由路径?参数名=参数值')
//动态路由传参
this.$router.path('路由路径/\${this.inpValue}')
this.$router.push({
	path:'路由路径'
    query:{
    	参数名1:'参数值1'，
    	参数名2:'参数值2'
	}
})
</code></pre>
<p>​	query传参</p>
<h4>name命名路由跳转</h4>
<p>​	适用于path路径长的场景。</p>
<pre><code class="language-js">//查询参数
this.$router.push({
	name:'路由名'
    query:{
    	参数名1:'参数值1'，
    	参数名2:'参数值2'
	}
})
{name:'路由名',path:'/path/xxx',component:XXX}，
//动态路由传参
this.$router.push({
	name:'路由名'
    params:{
    	参数名1:'参数值1'，
    	参数名2:'参数值2'
	}
})
</code></pre>
<h2>组件缓存</h2>
<p>​	路由跳转后，组件被销毁了，返回回来的组件又被重建了，所以数据重新被加载了。</p>
<h4>解决方案</h4>
<p>​	利用keep-alive将组件缓存下来。</p>
<h4>keep-alive</h4>
<p>​	是Vue的内置组件，当他包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。</p>
<p>​	keep-alive是一个抽象组件：它自身不会渲染成一个DOM元素，也不会出现在父组件链中。</p>
<h4>keep-alive的优点</h4>
<p>​	在组件切换过程中把切换出去的组件保留在内存中，防止重复渲染DOM。</p>
<p>​	以减少加载时间及性能消耗，提高用户体验性。</p>
<h4>keep-alive的三个属性</h4>
<p>​	1.include：组件名数组，只有匹配的组件会被缓存。</p>
<p>​	2.exclude：组件名数组，任何匹配的组件都不会被缓存。</p>
<p>​	3.max：最多可以缓存多少组件实例。</p>
<h2>自定义创建项目</h2>
<p>​	基于VueCli自定义创建项目架子。</p>
<h4>步骤</h4>
<p>​	1.安装脚手架。</p>
<p>​	2.创建项目。</p>
<p>​	3.选择自定义。</p>
<p>​	4.Babel/Router/CSS/Linter</p>
<p>​	5.Vue2.x</p>
<p>​	6.VueRouter hash模式</p>
<p>​	7.CSS预处理 less</p>
<p>​	8.ESlint：Standard&amp;Lint on Save</p>
<p>​	9.配置文件 dedicated config files</p>
<h2>ESlint代码规范</h2>
<p>​	一套写代码的约定规则。例如：&quot;赋值符号的左右是否需要空格&quot;.....</p>
<h4>两种解决方案</h4>
<p>​	1.手动修正</p>
<p>​		根据错误提示一步一步修正。</p>
<p>​		根据错误代码去[ESlint规则表]中查找具体含义。</p>
<p>​	2.自动修正</p>
<p>​		通过ESlint插件。</p>
<h2>Vuex</h2>
<p>​	vuex是一个vue的状态管理工具，状态就是数据。</p>
<p>​	帮助我们管理vue通用的数据（多组件共享的数据）。</p>
<h4>场景</h4>
<p>​	1.某个状态在很多个组件来使用（个人信息）</p>
<p>​	2.多个组件共同维护一份数据（购物车）</p>
<h4>优势</h4>
<p>​	1.共同维护一份数据，数据集中化管理。</p>
<p>​	2.响应式变化。</p>
<p>​	3.操作简洁（Vuex提供了一些辅助函数）</p>
<h2>构建Vuex环境</h2>
<h4>步骤</h4>
<p>​	1.安装vuex。</p>
<p>​		yarn add vuex@3</p>
<p>​	2.新建vuex模块文件。</p>
<p>​		新建store/index.js专门存放vuex</p>
<p>​	3.创建仓库。</p>
<p>​		Vue.use(Vuex)</p>
<p>​		创建仓库new Vuex.Store()</p>
<p>​	4.main.js导入挂载。</p>
<p>​		在main.js中导入挂载到Vue实例上。</p>
<h2>state状态</h2>
<h4>提供数据</h4>
<p>​	State提供唯一的公共数据源，所有共享的数据都要统一放到Store中的State中存储。</p>
<p>​	在state对象中可以添加我们要共享的数据。</p>
<pre><code class="language-js">//创建仓库
const store = new Vuex.Stroe({
	//state状态，及数据，类似于vue组件中的data
	//区别:
	//1.data是组件自己的数据。
	//2.state是所有组件共享的数据。
	state:{
		count:101
	}
})
</code></pre>
<h4>使用数据</h4>
<p>​	1.通过store直接访问</p>
<pre><code class="language-js">//获取store
//1.this.$store
//2.import导入store
//模块中
{{ $store.state.xxx }}
//组件逻辑中
this.$store.state.xxx
//JS逻辑中
store.state.xxx
</code></pre>
<p>​	2.通过辅助函数</p>
<p>​	mapState是个辅助函数，帮助我们把store中的数据自动映射到组件的计算属性中。</p>
<pre><code class="language-js">//导入mapState
import{mapState}from'vuex'
//数组方式引入state
mapState(['count'])
//展开运算符映射
computed：{
    ...mapState(['count'])
}
</code></pre>
<h2>mutations</h2>
<p>​	只能通过mutations的操作来修改state数据。</p>
<h4>流程</h4>
<p>​	1.定义mutatios对象，对象中存放修改state的方法。</p>
<pre><code class="language-js">const store = new Vuex.Store({
	state:{
		count:0
	},
	mutations:{
		addCount(state){
			state.count+=1
		}
	}
})
</code></pre>
<p>​	2.组件中提交调用mutations</p>
<pre><code class="language-js">this.$store.commit('addCount')
</code></pre>
<h4>传参语法</h4>
<p>​	1.提供带参的函数(带参数-提交载荷payload)</p>
<pre><code>const store = new Vuex.Store({
	state:{
		count:0
	},
	mutations:{
		addCount(state,n){
			state.count+=1
		}
	}
})
</code></pre>
<p>​	2.组件中提交调用mutations</p>
<pre><code class="language-js">this.$store.commit('xxx',参数)
</code></pre>
<p>​	注意：参数只能有一个，若要传递多个参数，可以封装为一个对象。</p>
<h2>mapMutations</h2>
<p>​	mapMutations和mapState很相似，他是把位于mutations的方法提取出来，映射到组件methods中。</p>
<h4>语法</h4>
<pre><code class="language-js">import {mapMutations} from 'vuex'
methods:{
	...mapMutations(['subCount'])
    //...为展开运算符
}
this.subCount(10)//调用
</code></pre>
<h2>actions</h2>
<p>​	mutations必须是同步的(便于检测数据变化，记录调试)</p>
<h4>语法</h4>
<p>​	1.提供action方法</p>
<pre><code class="language-js">actions:{
	setAsyncCount(context,num){
        //模拟异步操作 以后大部分是发送请求
		setTimeout(()=&gt;{
			context.commit('changeCount',num)
		},1000)
	}
}
</code></pre>
<p>​	2.页面中调用dispatch调用</p>
<pre><code class="language-js">this.$store.dispatch('setAsyncCount',200)
</code></pre>
<h2>mapActions</h2>
<p>​	他是把位于actions的方法提取出来，映射到组件methods中。</p>
<h4>语法</h4>
<pre><code class="language-js">import {mapActions} from 'vuex'
methods:{
	...mapActions(['setAsyncCount'])
    //...为展开运算符
}
this.setAsyncCount(10)//调用
</code></pre>
<h2>getters</h2>
<p>​	类似计算属性。</p>
<p>​	除了state之外，有时我们还需要从state中派生出一些状态，这些状态是依赖state的，此时会用到getters。</p>
<h4>语法</h4>
<p>​	1.定义getters</p>
<pre><code class="language-js">getters:{
	//注意:
	//getters函数的第一个参数是state
	//getters函数必须要哟返回值
	filterlist(state){
		return state.list.filter(item=&gt;item&gt;5)
	}
}
</code></pre>
<p>​	2.访问getters</p>
<pre><code class="language-js">//1.通过store访问getters
{{this.store.getters.filter}}
//2.通过辅助函数mapGetters映射
computed:{
    ...mapGetters(['filterlist'])
}
{{filterlist}}
</code></pre>
<h2>模块module</h2>
<p>​	由于Vuex使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store对象就有可能变得相当臃肿。（当项目变得越来越大的时候，Vuex会变得愈来愈额难以维护）</p>
<h4>模块拆分</h4>
<p>​	在store下新建一个modules模块，并在里面创建所需的模块。</p>
<pre><code class="language-js">modules：{
	//将所需的文件挂载
}
</code></pre>
<h4>访问模块中的state、</h4>
<p>​	尽管已经分了模块了，但子模块的状态，还是会挂到根级别的state中，属性名就是模块名。</p>
<h4>使用模块中的数据</h4>
<p>​	1.直接通过模块名访问$store.state.模块名.xxx。</p>
<p>​	2.通过mapState映射。</p>
<p>​		默认根级别的映射</p>
<pre><code class="language-js">mapState(['xxx'])
</code></pre>
<p>​		子模块的映射</p>
<pre><code class="language-js">mapState('模块名',['xxx'])  //需要开启命名空间
</code></pre>
<p>​	注：开启命名空间就是在导入的时候添加</p>
<pre><code class="language-js">namespaced:true
</code></pre>
<h4>使用模块中getters的数据</h4>
<p>​	1.直接通过模块名访问</p>
<pre><code class="language-js">$store.getters['模块名/xxx']
</code></pre>
<p>​	2.通过mapGetters映射</p>
<pre><code class="language-js">//默认根级别的映射
mapGetters(['xxx'])
//子模块的映射
mapGetters('模块名',['xxx']) //需要开启命名空间
</code></pre>
<h4>使用模块中mutation的数据</h4>
<p>​	1.直接通过store调用</p>
<pre><code>$store.commit('模块名/xxx',额外参数)
</code></pre>
<p>​	2.通过mapMutations映射</p>
<pre><code class="language-js">//默认根级别的映射
mapMutations(['xxx'])
//子模块的映射
mapMutations('模块名',['xxx']) //需要开启命名空间
</code></pre>
<h4>使用模块中actions的数据</h4>
<p>​	1.直接通过store调用</p>
<pre><code>$store.dispatch('模块名/xxx',额外参数)
</code></pre>
<p>​	2.通过mapMutations映射</p>
<pre><code class="language-js">//默认根级别的映射
mapActions(['xxx'])
//子模块的映射
mapActions('模块名',['xxx']) //需要开启命名空间
</code></pre>
<h2>vant组件库</h2>
<p>​	第三方Vue组件库vant-ui</p>
<h4>使用方法</h4>
<p>​	通过vant官方网站查询。</p>
<h2>移动端适配</h2>
<p>​	基于postcss插件，实现项目vw适配。</p>
<h4>流程</h4>
<p>​	1.安装插件</p>
<pre><code class="language-js">yarn add postcss-px-to-viewport@1.1.1 -D
</code></pre>
<p>​	2.根据根目录新建postcss.config.js文件，填入配置</p>
<pre><code class="language-js">module.exports={
	plugins:{
		'postcss-px-to-viewport':{
			//标准屏宽度
			viewportWidth:375
		}
	}
}
</code></pre>
<h2>Vue3</h2>
<h4>相较于Vue2的好处</h4>
<p>​	1.更容易维护。</p>
<p>​	2.更快的速度。</p>
<p>​	3.更小的体积。</p>
<p>​	4.更优的数据响应式。</p>
<h2>搭建Vue3项目</h2>
<p>​	create-vue是官方新的脚手架工具，底层切换到了vite（下一代构建工具），为开发提供急速响应。</p>
<h4>流程</h4>
<p>​	1.安装16.0及以上版本的Node.js</p>
<p>​	2.创建一个Vue应用</p>
<pre><code class="language-js">npm init vue@latest
//这一指令将会安装并执行create-vue
</code></pre>
<p>​	3.启动文件</p>
<pre><code>npm run dev
</code></pre>
<h2>项目中关键文件</h2>
<h4>vite.config.js</h4>
<p>​	项目的配置文件 基于vite的配置。</p>
<h4>package.json</h4>
<p>​	项目包文件 核心依赖变成了Vue3.x和vite</p>
<h4>main.js</h4>
<p>​	入口文件 createApp函数创建应用实例</p>
<h4>app.vue</h4>
<p>​	根组件 SFC单文件script-template-style</p>
<p>​	变化：脚本script和模板template顺序调整，模板template不在要求唯一根元素，脚本script添加setup标识支持组合式api</p>
<h4>index.html</h4>
<p>​	单页入口 提供id为app提供挂载点</p>
<h2>组合式API</h2>
<h4>setup选项</h4>
<p>​		setup钩子函数，运行在beforecreate之前。</p>
<p>​		setup函数中获取不到this。</p>
<p>​		setup函数中可以写数据，函数，但是如果要使用必须return。</p>
<p>​		语法糖写法：将setup写在script标签中。可以简化代码，无需return。</p>
<h4>reactive()</h4>
<p>​	接受对象数据类型的参数传入并返回一个响应式对象。</p>
<pre><code class="language-html">&lt;script setup&gt;
//导入
import{reactive} from 'vue'
//执行函数 传入参数 变量接受
const state = reactive(对象类型数据)
&lt;/script&gt;
</code></pre>
<p>​	1.从vue包中导入</p>
<p>​	2.执行函数并传入类型为对象的初始值，并使用变量接受返回值。</p>
<h4>ref()</h4>
<p>​	接受简单类型或者对象类型的数据传入并返回一个响应式的对象。</p>
<pre><code class="language-html">&lt;script setup&gt;
//导入
import{ref} from 'vue'
//执行函数 传入参数 变量接受
const state = ref(简单数据类型或者复杂类型数据)
&lt;/script&gt;
</code></pre>
<p>​	本质：是在原有传入数据的基础上，外层包了一层对象，包成了复杂数据类型。</p>
<p>​	底层：包成复杂类型后，再借助reactive实现响应式。</p>
<p>​	注意：访问数据 需要通过 .value访问</p>
<h4>computed</h4>
<p>​	计算属性基本思想与vue2的完全一致，组合式API下的计算属性只是修改了写法。</p>
<pre><code class="language-html">&lt;script setup&gt;
//导入
import{computed} from 'vue'
//执行函数 传入参数 变量接受
const computedState = computed(()=&gt;{
	return 基于响应式数据做计算之后的值
})
&lt;/script&gt;
</code></pre>
<h4>watch</h4>
<p>​	监听一个或多个数据的变化，数据变化式执行回调函数。</p>
<pre><code class="language-js">//1.immediate(立即执行)
//在侦听器创建时立即触发回调，响应式数据变化之后继续执行回调。
//2.deep(深度监听)
</code></pre>
<p>​	1.监听单个数据</p>
<pre><code class="language-html">&lt;script setup&gt;
//导入
import{watch,ref} from 'vue'
//调用watch监听变化
watch(ref对象,(newValue,oldValue)=&gt;{
	console.log('count发生了变化，老值为\${oldValue}，最新值为\${newValue}')
},{
    //若简单类型 可以直接监视
	immediate:true,
    //若为复杂类型 得加上deep
	deep：true
})
&lt;/script&gt;
</code></pre>
<p>​	2.精确监听对象的莫个属性</p>
<pre><code class="language-html">watch(()=&gt;userInfo.value.age,(newValue,oldValue)=&gt;{
	console.log('count发生了变化，老值为\${oldValue}，最新值为\${newValue}')	
})
</code></pre>
<h4>声明周期函数</h4>
<p>​	1.setup</p>
<p>​	2.onBeforeMount</p>
<p>​	3.onMounted</p>
<p>​	4.onBeforeUpdate</p>
<p>​	5.onUpdated</p>
<p>​	6.onBeforeUnmount</p>
<p>​	7.onUnmounted</p>
<h4>父子通信</h4>
<p>​	父传子</p>
<p>​	1.父组件给子组件绑定属性。</p>
<p>​	2.子组件内部通过props选项接受。</p>
<p>​	注意：需要借助&quot;编译器宏&quot;函数接受子组件传递的数据。---  defineProps</p>
<p>​	子传父</p>
<p>​	1.父组件中给子组件标签通过@绑定事件。</p>
<p>​	2.子组件内部通过emit方法触发事件。---- defineEmits</p>
<h4>provid和inject</h4>
<p>​	顶级组件向任意的底层组件传递数据和方法，实现跨层组件通信。</p>
<p>​	跨层级传递普通数据</p>
<pre><code class="language-js">//顶层组件提供数据
provide('key',顶层组件中的数据)
//底层组件获取数据
const message = inject('key')
</code></pre>
<p>​	跨层级传递响应式数据</p>
<pre><code>//顶层组件提供数据
provide('key',ref对象)
//底层组件获取数据
const message = inject('key')
</code></pre>
<p>​	跨层级传递方法</p>
<pre><code class="language-js">const setCount=()=&gt;{
	//方法
}
//顶层组件提供数据
provide('key',setCount)
//底层组件获取数据
const message = inject('key')
</code></pre>
<p>​	底层通知顶层</p>
<pre><code class="language-js">//顶层提供一个方法
provide('state-fn',changeState)
//底层进行调用
inject('state-fn')-&gt;changeState()
</code></pre>
<h2>模板引用</h2>
<p>​	通过ref标识获取真实的dom对象或者组件实例对象。</p>
<h4>使用方法</h4>
<pre><code class="language-html">&lt;script setup&gt;
	import{ref} from 'vue'
	const h1Ref=ref(null)
&lt;/script&gt;
&lt;template&gt;
	&lt;h1 ref=&quot;h1Ref&quot;&gt;我是dom标签&lt;/h1&gt;
&lt;/template&gt;
</code></pre>
<p>​	1.调用ref函数生成一个ref对象。</p>
<p>​	2.通过ref标识绑定ref对象到标签。</p>
<p>​	默认情况下在<script setup>语法糖下组件内部的属性和方法是不开放给组件访问的。</p>
<p>​	可以通过defineExpose编译宏指定哪些属性和方法允许访问。</p>
<h2>defineOptions</h2>
<p>​	主要用于定义Options API选项。</p>
<p>​	可以用defineOptions定义任意的选项，props,emits,expose,slots除外（因为这些可以使用definexxx来做到）。</p>
<h2>defineModel</h2>
<p>​	用于接受双向绑定的数据，实现双向绑定。</p>
<h2>Pinia</h2>
<p>​	是vue最新的状态管理工具，是Vuex的替代品。</p>
<h4>优点</h4>
<p>​	1.提供更加简单的API。</p>
<p>​	2.提供复合，组合式风格的API。</p>
<p>​	3.去掉modules的概念，每个store都是一个独立的模块。</p>
<p>​	4.配合TypeScript更加友好，提供可靠的类型推断。</p>
<h4>添加流程</h4>
<p>​	1.使用Vite创建一个空的Vue3项目</p>
<pre><code>npm create vue@latest
</code></pre>
<p>​	2.按照官方文档安装pinia到项目中</p>
<h4>基本语法</h4>
<pre><code class="language-js">import { defineStore } from 'pinia'
// 你可以对 \`defineStore()\` 的返回值进行任意命名，但最好使用 store 的名字，同时以 \`use\` 开头且以 \`Store\` 结尾。(比如 \`useUserStore\`，\`useCartStore\`，\`useProductStore\`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useAlertsStore = defineStore('alerts', {
  // 其他配置...
})
</code></pre>
<h2>action异步实现</h2>
<p>​	异步action函数的写法和组件中获取异步数据的写法完全一致。</p>
<h2>Pinia持久化插件</h2>
<h4>步骤</h4>
<p>​	1.安装插件</p>
<pre><code>npm i pinia-plugin-peristedstate
</code></pre>
<p>​	2.main.js使用</p>
<pre><code>import persist from 'pinia-plugin-peristedstate'
...
app.use(createPinia().use(persist))
</code></pre>
<p>​	3.store仓库中，persist：true开启</p>
`;export{t as attributes,n as html};
