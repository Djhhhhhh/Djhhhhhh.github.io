const n={},e=`<h2>TypeScript</h2>
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
<pre><code class="language-cmd">ts-node 01.ts
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
<h4>字面量类型</h4>
<p>对于用const所修饰的变量名，它的修饰类型变为它的值。</p>
<pre><code class="language-ts">const str = 'hello ts'
//str的类型为'hello ts'
</code></pre>
<p>使用场景：字面量类型配合联合类型一起使用，用来表示一组明确的可选值列表。</p>
<pre><code class="language-ts">let fx=(zou: 'up'|'down'|'left'|'right')=&gt;{
	console.log(zou)
}
fx('left')
</code></pre>
<h4>枚举类型</h4>
<p>定义一组命名常量。他描述一个值，该值可以是这些命名常量中的一个。</p>
<pre><code class="language-ts">enum Direction {up,down,letf,right}
let fx=(zou: Direction)=&gt;{
	console.log(zou)
}
fx(Direction.up)
</code></pre>
<p>1.使用enum关键字定义枚举。</p>
<p>2.约定枚举名称，枚举中的值以大写字母开头。</p>
<p>3.枚举最终的多个值之间通过(，)隔开。</p>
<p>4.定义好枚举后，直接使用枚举名称作为类型注释。</p>
<p>注：枚举成员的数值默认从0开始递增。如果枚举成员的值初始化为字符串，则枚举中的每个成员必须有初始值。</p>
<h4>typeof操作符</h4>
<p>在TS中提供了typeof，可以在类型上下文中引用变量或属性的类型（类型查询）。</p>
<p>使用场景：根据已有变量的值，获取该值的类型，来简化类型书写。</p>
<pre><code class="language-ts">let p = {a:1,b:2}
function formatPoint(point: typeof p){}
formatPoint({a:1,b:2})
</code></pre>
<h2>TS高级类型</h2>
<h4>class类</h4>
<pre><code class="language-ts">class Person{}
const p = new Person() 
</code></pre>
<p>1.根据TS中的类型推断，可以知道Person类的实例对象p的类型是Person</p>
<p>2.TS中的class，不仅提供了class的语法功能，也作为一种类型存在。</p>
<h5>封装</h5>
<p>构造函数：construct做为构造函数关键字。</p>
<p>1.成员需要初始化，使用this关键字访问成员。</p>
<p>2.需要为构造函数指定类型注解，否则会被隐式推断为any。</p>
<pre><code class="language-ts">class Person{
	age:number
	gender: string
	construct(age:number,gender:string){
		this.age=age
		this.gender=gender
	}
}
</code></pre>
<h5>继承</h5>
<pre><code class="language-c++">class Animal{
	speak():void{}
}
class Cat extends Animal {
}
</code></pre>
<h5>多态</h5>
<pre><code class="language-ts">class Animal{
	speak():void{}
}
class Cat extends Animal {
}
class Dog extends Animal {
}
const dog:Animal = new Dog('k')
const cat:Animal = new Cat('Tom')
</code></pre>
<h5>抽象类</h5>
<pre><code class="language-ts">abstract class Animal {  //abstract作为关键字
    name:string
    constructor(name:string) {
        this.name=name
    }
    abstract say():void
}
</code></pre>
<h4>interface接口</h4>
<p>​	形状(对一类十五描述他的形状)，函数，类，对象。</p>
<h5>对象接口</h5>
<pre><code class="language-ts">interface Person {  //定义对象接口
    name:string,
    age:number
}
const obj:Person={  //接口值必须匹配
    name:&quot;DJh&quot;,
    age:23
}
console.log(obj)
</code></pre>
<h5>可选/只读/任意属性</h5>
<pre><code class="language-ts">interface Person {
    readonly name:string,  //只读属性
    age:number,
    career?:string,  //可选属性
    [propName:string]:string|number|undefined  //任意属性
}
</code></pre>
<h5>描述函数</h5>
<pre><code class="language-ts">interface ISum {
    (x:number,y:number):number
}
const isum:ISum = (x,y)=&gt;{
    return x+y
}
</code></pre>
<h5>可索引类型</h5>
<pre><code class="language-ts">interface ISum {
    [propName:number]:string
}
const obj:ISum=['1','2','3']
</code></pre>
<h4>类与接口的关系</h4>
<h5>类实现接口</h5>
<p>​	描述一类事物的行为。</p>
<pre><code class="language-ts">interface Iwake {
    wakeUp():void
}
class Alarm implements Iwake {  //implements作为实现接口关键字 后面可以写多个接口
    wakeUp(): void {
        
    }
}
</code></pre>
<h5>接口继承接</h5>
<pre><code class="language-ts">interface Iwake extends Imusic{
    wakeUp():void
}
</code></pre>
<h4>泛型</h4>
<p>类似于模板。</p>
<pre><code class="language-ts">function print&lt;T&gt;(arg:T):T{
    console.log(arg)
    return arg
}
print&lt;string&gt;('JJJJJ')
</code></pre>
<h5>泛型约束函数</h5>
<pre><code class="language-ts">interface Iprint&lt;T&gt;{
    (arg:T):T
}
const p11:Iprint&lt;number&gt; = (arg)=&gt;arg
</code></pre>
<h5>泛型约束类</h5>
<pre><code class="language-ts">class Stack&lt;T&gt; {
    private data : T[]=[]
    push(item:T){
        this.data.push(item)
    }
    pop():T|undefined {
        return this.data.pop()
    }
}
</code></pre>
<h5>泛型约束接口</h5>
<pre><code class="language-ts">interface ILength{
    length:number 
}
function logLength&lt;T extends ILength&gt;(arg: T): T{
    console.log(arg.length)
    return arg
}
</code></pre>
<h4>交叉类型</h4>
<pre><code class="language-ts">interface Ibasic{
    name:string,
    age:number,
}
type Student = Ibasic &amp; {
    study_direction:'web'|'java'
}
type Teacher = Ibasic &amp; {
    teachingAge: number 
}
</code></pre>
<h4>联合类型</h4>
<pre><code class="language-ts">let a:number| string = 1
let b:'a'|'b'='a'
class Coke{
    eat(){}
}
class Duck{
    eat(){}
}
function getEat(per:Coke|Duck){
    per.eat()
}
</code></pre>
<h4>索引操作符</h4>
<pre><code class="language-ts">interface Person {
    name:string,
    age:number 
}
let k:keyof Person
k= 'age'
console.log(k)
//或者
let k:Person[&quot;name&quot;]
</code></pre>
<h4>映射类型</h4>
<pre><code class="language-ts">type P1=Readonly&lt;Person&gt;  //映射为只读
type P2=Partial&lt;Person&gt;  //映射为可选
type P3=Pick&lt;Person,'age'&gt;  //提取
type P4=Record&lt;'bj'|'sj'&gt;  //构建新类型
</code></pre>
<h4>条件类型</h4>
<pre><code class="language-ts">Excluede&lt;T,U&gt;  // 从T中剔除U
Extract&lt;T,U&gt;  //从T中提取U
NonNullable&lt;T&gt;  //剔除null和undefined
ReturnType&lt;T&gt;  //获取函数返回值类型
Paramters&lt;T&gt;   //获取函数参数的类型
</code></pre>
`;export{n as attributes,e as html};
