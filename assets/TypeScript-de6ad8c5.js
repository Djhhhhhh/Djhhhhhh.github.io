import{A as r,M as o,O as n,J as t,ai as e,u as c}from"./index-a5b235af.js";import{c as l,d as u,a as d}from"./el-main-029f4d07.js";/* empty css               */const i=`<h2>TypeScript</h2>
<p>​	TypeScript 是 JavaScript 的一个超集，支持 ECMAScript 6 标准。TypeScript 由微软开发的自由和开源的编程语言。TypeScript 设计目标是开发大型应用，它可以编译成纯 JavaScript，编译出来的 JavaScript 可以运行在任何浏览器上。</p>
<h4>静态与动态编程语言</h4>
<p>​	从编程语言的动静来区分的化，TypeScript属于静态编程语言，JS属于动态编程语言。</p>
<p>​	区别在于：动态编程语言等到执行代码的时候才开始做类型检查，而静态编程语言会在编译器就执行类型形检查。</p>
<h2>安装TS工具包</h2>
<h4>安装命令</h4>
<pre><code class="language-cmd">npm i -g typescript
</code></pre>
<h2>运行TS代码</h2>
<p>​	要注意，由ts编译的js文件时，代码中便不具有类型信息了。</p>
<h4>流程</h4>
<pre><code class="language-cmd">//1.创建.ts文件
//2.将ts文件编译为js
tsc 01.ts
//3.执行js文件
node 01.js
</code></pre>
<h2>简化运行ts的步骤</h2>
<p>​	每次修改代码后，都要重复执行两次命令，太繁琐。</p>
<h4>方式</h4>
<p>​	使用ts-node包，在node.js下直接执行JS代码。</p>
<h4>安装</h4>
<pre><code class="language-cmd">npm i -g ts-node
</code></pre>
<h4>使用方式</h4>
<pre><code class="language-cmd">ts-node 01.js
</code></pre>
<h2>TS常用类型</h2>
<h4>类型注解</h4>
<pre><code class="language-ts">let age : number = 18
</code></pre>
<p>代码中的:number就是类型注解，为变量添加类型约束。</p>
<h4>常用类型概述</h4>
<p>1.JS已有类型：原始类型：number string boolean null undefined symbol</p>
<p>​			   对象类型：object</p>
<p>2.TS新增类型：联合类型，自定义类型，接口，元组，字面量类型，枚举，void，any等。</p>
<h4>原始类型</h4>
<pre><code class="language-ts">let age : number = 18
let myname : string = &quot;djh&quot;
let loading : boolean = true 
let a : null = null
let b : undefined =undefined 
let s : symbol = Symbol()
</code></pre>
<h4>数组类型</h4>
<p>基本写法</p>
<pre><code class="language-ts">let numbers : number[] = [1,2,3]
let strings : Array&lt;string&gt; = ['a','b','c']
</code></pre>
<p>要求数组中有多种不同类型的元素</p>
<pre><code class="language-ts">let arr: (number|string)[] = [1,'a',2,'b']
</code></pre>
<p>| (竖线)在ts中叫做联合类型。</p>
<h4>自定义类型</h4>
<p>type 作为关键字来创建类型别名</p>
<pre><code class="language-ts">type CustArray = (number|string)
</code></pre>
<h4>函数类型</h4>
<p>1.单独指定参数和返回值的类型</p>
<pre><code class="language-ts">function add(num1: number,num2: number): number {
	return num1+num2
}
const add = (num1: number,num2: number): number =&gt; {
    return num1+num2
}
</code></pre>
<p>2.同时指定参数和返回值的类型</p>
<pre><code class="language-ts">const add : (num1: number,num2: number) =&gt; number = (num1,num2) =&gt;  {
    return num1+num2
}
</code></pre>
<p>3.如果函数没返回值，应该为void</p>
<p>4.在使用函数实现某个功能的时候，参数可传可不传。这种情况下就要用到可选参数了。</p>
<pre><code class="language-ts">function mySlice(start?: number,end? :number ): void {
	console.log(start,end)
}
</code></pre>
<p>注意：可选参数只能在参数列表的最后。</p>
<h4>对象类型</h4>
<p>js中的对象是由属性和方法构成的。</p>
<p>第一个大括号内为属性和方法的类型，第二个大括号为对象内容。</p>
<pre><code class="language-ts">let person: {
	name:string
	age:number
	sayHi():void
    sayGreet: () =&gt; void
} = {
	name:'Djh',
	age:20,
	sayHi(){
		console.log(&quot;HI!&quot;)
	}
    sayGreet: () =&gt; {
        console.log(&quot;Greet!&quot;)
    }
}
</code></pre>
<p>对象的属性也是可选的，也可以用？来标注。</p>
<h4>接口类型</h4>
<p>当一个对象呗多次使用使，使用接口类型，以此提高代码的复用性。</p>
<pre><code class="language-ts">interface IPerson {
	name:string
	age:number
	sayHi:()=&gt;void
}
let person: IPerson = {
	name:'Djh',
	age:20,
	sayHi(){
		console.log(&quot;HI!&quot;)
	}
}
</code></pre>
<p>解释 1.使用interface关键字来声明接口。</p>
<p>​	 2.接口名称，可以是任意合法的变量名称。</p>
<p>​	 3.声明接口后，直接使用接口名称作为变量的类型。</p>
<p>​	 4.因为每一行只有一个属性类型，因此，属性类型后没有(;)</p>
<p>对比接口与自定义类型</p>
<p>相同点：都可以给对象指定类型</p>
<p>不同点：接口只能为对象指定类型。类型别名，不仅可以为对象指定类型，实际上可以为任意类型指定别名</p>
<h4>接口继承</h4>
<p>如果两个接口之间存在相同的属性或方法，看可以将公共的属性抽离出来，通过继承来实现复用。</p>
<pre><code class="language-ts">interface Point2D {x:number; y:number}
interface Point3D extends Point2D { z:number }
</code></pre>
<p>1.使用extends关键字实现接口继承</p>
<p>2.继承后，Point3D就有了Point2D的所有属性和方法</p>
<h4>元组类型</h4>
<p>元组类型是另一种类型的数组，它确切的知道有多少个元素。</p>
<pre><code class="language-ts">let position: [number,number] = [1,2]
</code></pre>
<h4>类型推论</h4>
<p>在TS中，某些没有明确指出类型的地方，TS的类型推论机制会帮助提供类型。</p>
<p>换句话说：由于类型推论的存在，这些地方，类型注释可以忽略不写。</p>
<p>发生类型推论的两种常见场景：1声明变量并初始化时 2.决定函数返回值时</p>
<h4>类型断言</h4>
<p>有时候你会比TS更加明确一个值的类型，此时，可以用类型断言来指定更具体的类型。</p>
<pre><code class="language-ts">const aLink = document.getElementById('link') as HTMLAnchorElement
</code></pre>
<p>1.使用as关键字实现类型断言</p>
<p>2.关键字as后面的类型是一个更加具体的类型</p>
<p>3.通过该操作aLink的类型变得更加具体，这样就可以访问a标签特有的属性或方法</p>
<pre><code class="language-ts">const aLink = &lt;HTMLAnchorElement&gt;document.getElementById('link') 
</code></pre>
<p>该方法不常用 知道即可。</p>
`;const m=e("div",{class:"glass"},[e("h2",null,"作者碎碎念")],-1),g=["innerHTML"],f={__name:"TypeScript",setup(h){return(b,_)=>{const p=u,s=d,a=l;return r(),o(a,null,{default:n(()=>[t(p,{width:"200px"},{default:n(()=>[m]),_:1}),t(s,null,{default:n(()=>[e("div",{innerHTML:c(i),class:"a"},null,8,g)]),_:1})]),_:1})}}};export{f as default};
