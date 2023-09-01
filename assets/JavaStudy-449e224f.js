import{A as o,M as s,O as n,J as e,ai as t,u as d}from"./index-ea24d3a4.js";import{c as g,d as h,a as l}from"./el-main-a6e86d0a.js";/* empty css               */const c=`<h1>Java</h1>
<h2>Path环境变量</h2>
<p>​	配置path环境变量可以快速打开软件。</p>
<h4>理解</h4>
<p>​	可以理解为是系统中的一个管家，帮我们记录了很多软件的完整路径。当我们要运行一个程序的时候，但是没有告诉她完整路径，他会在path中寻找指定路径，若存在则访问。</p>
<h2>JavaSE</h2>
<p>​	java语言的标准版，用于桌面应用开发，是其他两个版本的基础。</p>
<h4>桌面应用</h4>
<p>​	用户只要打开程序，程序的界面会让用户在最短时间找到他们需要的功能。</p>
<h2>JavaEE</h2>
<p>​	java语言的企业版，用于web方向的网站开发。</p>
<h2>java跨平台性</h2>
<p>​	java程序可以在任意操作系统上执行。</p>
<h4>原理</h4>
<p>​	该操作系统是否下载JVM虚拟机，如果下载了就能运行。</p>
<p>​	JVM虚拟机本质上就是一个软件。</p>
<p>​	JVM不允许跨平台。</p>
<h2>注释</h2>
<p>​	在程序指定位置加说明性信息。</p>
<h4>语法</h4>
<pre><code class="language-java">// 单行注释
/* 多行注释 */
/**  文档注释 */
</code></pre>
<h2>字面量</h2>
<pre><code class="language-java">666//整数
666.666//小数
&quot;string_is_string&quot;//字符串
's','b'//字符
true,false //布尔值
null//空值
</code></pre>
<h2>变量</h2>
<h4>定义</h4>
<pre><code class="language-java">int a;
double b;
</code></pre>
<h2>表示符</h2>
<p>​	给类，方法，变量起的名字的符号。</p>
<h4>命名规则</h4>
<p>​	由数字，字母，下划线，美元符组成。</p>
<p>​	不能以数字开头，不能是关键字。</p>
<h4>命名规范</h4>
<p>​	小驼峰（通常给变量）或者大驼峰（通常给类）命名法。</p>
<h2>数据类型</h2>
<h4>整数</h4>
<p>​	byte short int long</p>
<h4>浮点数</h4>
<p>​	float double</p>
<h4>字符</h4>
<p>​	char</p>
<h4>布尔</h4>
<p>​	boolean</p>
<h4>字符串</h4>
<p>​	String</p>
<h2>输出</h2>
<h4>语法</h4>
<pre><code class="language-java">System.out.println(num);
</code></pre>
<h2>键盘录入</h2>
<h4>语法</h4>
<pre><code class="language-java">import java.util.Scanner;  //导入录入包
Scanner sc = new Scanner(System.in);  //常见一个用于录入的对象
int num = sc.nextInt();  //录入并赋值保存
System.out.println(num); //输出
</code></pre>
<h2>运算符</h2>
<h4>算数运算符</h4>
<table>
<thead>
<tr>
<th style="text-align:left"><strong>+</strong></th>
<th><strong>加</strong></th>
<th><strong>=</strong></th>
<th><strong>赋值</strong></th>
<th><strong>&gt;</strong></th>
<th><strong>大于</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>-</strong></td>
<td><strong>减</strong></td>
<td><strong>+=</strong></td>
<td><strong>加等</strong></td>
<td><strong>&lt;</strong></td>
<td><strong>小于</strong></td>
</tr>
<tr>
<td style="text-align:left">*****</td>
<td><strong>乘</strong></td>
<td><strong>-=</strong></td>
<td><strong>减等</strong></td>
<td><strong>&gt;=</strong></td>
<td><strong>大于等于</strong></td>
</tr>
<tr>
<td style="text-align:left"><strong>/</strong></td>
<td><strong>除</strong></td>
<td><strong>%=</strong></td>
<td><strong>取余等</strong></td>
<td><strong>&lt;=</strong></td>
<td><strong>小于等于</strong></td>
</tr>
<tr>
<td style="text-align:left"><strong>%</strong></td>
<td><strong>取余</strong></td>
<td><strong>/=</strong></td>
<td><strong>除等</strong></td>
<td><strong>&amp;</strong></td>
<td><strong>与</strong></td>
</tr>
<tr>
<td style="text-align:left"><strong>++</strong></td>
<td><strong>自增</strong></td>
<td><strong>==</strong></td>
<td><strong>相等</strong></td>
<td><strong>|</strong></td>
<td><strong>或</strong></td>
</tr>
<tr>
<td style="text-align:left"><strong>--</strong></td>
<td><strong>自减</strong></td>
<td><strong>!=</strong></td>
<td><strong>不等</strong></td>
<td><strong>!</strong></td>
<td><strong>非</strong></td>
</tr>
<tr>
<td style="text-align:left"><strong>^</strong></td>
<td><strong>异或</strong></td>
<td><strong>&amp;&amp;</strong></td>
<td><strong>短路与</strong></td>
<td><strong>||</strong></td>
<td><strong>短路与</strong></td>
</tr>
</tbody>
</table>
<p>三目运算符：条件？值1：值2   条件为真执行值1，否则执行值2</p>
<p>补充：当字符串与其他的数据进行相加操作时，+就变为字符串连接符，不是算术运算。</p>
<h4>类型转化</h4>
<h5>隐式转换</h5>
<p>​		将取值范围小的值赋值给另一个取值范围大的变量。</p>
<p>​		byte=&gt;short,char=&gt;int=&gt;long=&gt;float=&gt;double</p>
<p>​		注意：byte,short,char这三种类型都会自动转化为int再计算。</p>
<h5>强制类型转化</h5>
<p>​		把一个取值范围大的数值或者变量，赋值给另一个取值范围小的变量。</p>
<pre><code class="language-java">double a=1.2;
int b=(int) a;
System.out.println(a);    //该程序输出1
</code></pre>
<h4>常量优化机制</h4>
<p>​	java存在常量优化机制，在编译的时候（javac）就会将进行代码中的运算，产生字节码文件：byte b = 7；</p>
<h4>扩展赋值运算符</h4>
<p>​	内部自带强转效果。</p>
<h2>函数</h2>
<p>​	一段具有独立功能的代码块，不调用就不执行。</p>
<h4>语法</h4>
<pre><code class="language-java">public static 数据类型 方法名(参数表){
    //方法体
    return 数据;
}
</code></pre>
<h4>函数重载</h4>
<p>​	相同方法名，但是参数表不同。</p>
<p>​	数据会自动找到对应参数表的函数执行。</p>
<h2>方法</h2>
<h4>getMin(数组名)</h4>
<p>​	获取数组最小值。</p>
<h2>分支结构</h2>
<h4>if语法</h4>
<pre><code class="language-java">if(逻辑运算1){
	//为逻辑运算1真执行
}else if(逻辑运算2){
	//为逻辑运算2真执行
}else {
	//以上两个均为假执行
}
</code></pre>
<h4>switch语法</h4>
<pre><code class="language-java">switch(参数){
	case 值1:
		//语句体
		break;
	case 值2:
		//语句体
		break;
	default:
		//语句体
		break;
}
</code></pre>
<h2>循环结构</h2>
<h4>for语法</h4>
<pre><code class="language-java">for(int i=1;i&lt;=n;i++){
	System.out.println(&quot;我循环第&quot;+i+&quot;次&quot;);
}
</code></pre>
<h4>while语句</h4>
<pre><code class="language-java">while(逻辑运算){
	//为真执行循环体
}
</code></pre>
<h4>do-while语句</h4>
<pre><code class="language-java">do{
	//循环体
}while(判断)；
</code></pre>
<h4>循环控制</h4>
<pre><code class="language-java">break;
continue;
</code></pre>
<h2>Random随机数</h2>
<p>​	随机数函数。</p>
<h4>语法</h4>
<pre><code>import java.util.Random
Random r = new Random();
int num = r.nextInt(n); //产生0-n的随机数
</code></pre>
<h2>数组</h2>
<h4>数组静态初始化</h4>
<pre><code class="language-java">数据类型[] 数组名;  //java常用
数据类型 数组名[];
//完整格式:
数据类型[] 数组名 = new 数据类型[]{元素1，元素2，元素3}
//简化格式:
数据类型[] 数组名 = {元素1，元素2，元素3}
</code></pre>
<h4>打印数组名</h4>
<pre><code class="language-java">例:出现[I@776ec8df
@:分隔符 [:当前空间是数组类型 I:数组所存储的数据类型  后面的是16进制地址
</code></pre>
<h4>数组访问</h4>
<pre><code class="language-java">数组名[索引]
</code></pre>
<p>​	数组索引从0开始。</p>
<h4>数组中可用的方法</h4>
<pre><code>数组名.length //动态获取数组的长度
</code></pre>
<h4>数组动态初始化</h4>
<p>​	在初始化的时候只指定数组长度，由系统为数组分配初始值。</p>
<h5>默认值分类</h5>
<p>​		整数：0   小数：0.0  布尔：false  字符：'\\u000'  字符串：null</p>
<p>​		'u000'   ===&gt;  Unicode字符</p>
<h4>数组静态初始化</h4>
<p>​	手动指定数组元素默认值，让数组自动指定长度。</p>
<h4>二维数组</h4>
<pre><code class="language-java">//完整格式:
数据类型[][] 数组名 = new 数据类型[][]{{元素1，元素2},{元素1，元素2}}
//简化格式:
数据类型[][] 数组名 = {{元素1，元素2},{元素1，元素2}}
</code></pre>
<h2>内存分配</h2>
<p>​	字节码文件加载时会进入方法区。</p>
<p>​	方法运行时进入栈。方法结束出栈。</p>
<p>​	new出来的东西放在堆中。</p>
<h2>类与对象</h2>
<h4>类</h4>
<p>​	一组相关属性和行为的集合。</p>
<p>​	组成：属性，行为。</p>
<h4>定义</h4>
<pre><code class="language-java">public class 类名{
	属性1;
	属性2;
	pubilc void study(){ //行为
		//行为体
	}
}
</code></pre>
<h4>创建对象</h4>
<p>​	使用类的时候，需要创建对象，然后通过主方法main调用。</p>
<pre><code class="language-java">类名 对象名 = new 类名()
</code></pre>
<h2>对象内存图</h2>
<h4>内存图</h4>
<p>​	先对main函数所在的对象所创建的字节码文件放在方法区中。然后入栈。再main函数new对象时，对象的字节码文件才进入方法区。创建对象的时候在堆中申请一块地址，然后将地址返回。</p>
<p>​	方法运行的时候会入栈，然后方法结束时候弹出。</p>
<h2>成员变量和局部变量</h2>
<table>
<thead>
<tr>
<th>区别</th>
<th>成员变量</th>
<th>局部变量</th>
</tr>
</thead>
<tbody>
<tr>
<td>位置</td>
<td>方法外</td>
<td>方法中</td>
</tr>
<tr>
<td>初始化值</td>
<td>有默认</td>
<td>没有</td>
</tr>
<tr>
<td>内存位置</td>
<td>堆</td>
<td>栈</td>
</tr>
<tr>
<td>生存周期</td>
<td>随着对象存在</td>
<td>随着方法的调用存在</td>
</tr>
<tr>
<td>作用域</td>
<td>自己所属的大括号</td>
<td>自己所属的大括号中</td>
</tr>
</tbody>
</table>
<h2>this关键字</h2>
<p>​	用于访问对象中的成员或者函数。</p>
<h2>构造方法</h2>
<p>​	初始化一个新建的对象。</p>
<p>​	构建，创造对象的时候，所调用的方法。</p>
<h4>格式</h4>
<p>​	1.方法名与类名相同，大小写也要一致。</p>
<p>​	2.没有返回值类型，连void也没有。</p>
<p>​	3.没有具体的返回值（不能由return带回结果数据）</p>
<p>​	4.允许重载。</p>
<h2>封装</h2>
<p>​	使用类设计对象时，将需要处理的数据，以及处理这些数据的方法，设计到对象中。</p>
<h4>权限修饰符</h4>
<p>​	可以修饰成员，成员方法。</p>
<p>​	private：私有权限 只有同一个类中才能访问。</p>
<p>​	(default)：默认权限 同一个类同一个包中</p>
<p>​	protected：保护权限 同一个类 同一个包 不同包的子类中</p>
<p>​	public：公共权限 任意位置可以访问</p>
<h2>标准JavaBean</h2>
<p>​	JavaBean：实体类：封装数据的类</p>
<p>​	可以使用快捷键直接生成。在IDEA中右键。</p>
<h4>标准</h4>
<p>​	1.这个类中的成员变量都要私有化，并且要对外提供响应的get，set方法。</p>
<p>​	2.类中提供无参，带参构造方法。</p>
<h4>应用场景</h4>
<p>​	实体类只负责数据存取，而对数据的处理交给其他类来完成，以实现数据和数据业务处理相分离。</p>
<h2>常用API</h2>
<p>​	应用程序变成接口。（查文档）</p>
<h4>使用流程</h4>
<p>​	1.在索引位置搜索自己要查找的类</p>
<p>​	2.看包</p>
<p>​	3.看类的介绍</p>
<p>​	4.看这个类的构造方法</p>
<p>​	5.看这个类的成员方法</p>
<h2>String类</h2>
<p>​	 在java中，所有带有双引号的序列，都为string类。 是不可变的字符序列。</p>
<h4>字符串构造</h4>
<pre><code class="language-java">string s1=&quot;abc&quot;;
string s2=&quot;ab&quot;;
string s3=s2+&quot;c&quot;;
string s4=&quot;a&quot;+&quot;b&quot;+&quot;c&quot;;
/*前三个构造出来的字符串 储存在堆内存中的地址均不同 
*string s3在构造的时候会自动调用一个StringBuilder的方法函数 然后通过内部的toString方法赋予新
*字符串地址
*第四个字符串与第一个字符串地址相同 原因是java的常量优化机制
**/
</code></pre>
<h4>字符串方法</h4>
<pre><code class="language-java">public boolean equals(Object anObject)
</code></pre>
<p>​	将此字符串与指定对象比较。</p>
<pre><code class="language-java">public boolean equalsIgnoreCase(string anotherString)
</code></pre>
<p>​	将此字符串与另一个字符串比较，不考虑大小写。</p>
<pre><code class="language-java">public char[] toCharArray()
</code></pre>
<p>​	将此字符串转化为字符数组。</p>
<pre><code class="language-java">public char charAt(int index)
</code></pre>
<p>​	返回指定索引的char值。</p>
<pre><code class="language-java">public string substring(int beginIndex)
public string substring(int beginIndex,int endIndex)
</code></pre>
<p>​	从beginIndex位置一直截取到endIndex，若省略endIndex则截取到最后。返回一个字符串。</p>
<h2>StringBuiler类</h2>
<p>​	提高字符串操作效率，是可变的字符序列。</p>
<p>​	StingBuiler是字符串缓冲区，将其理解是容器，这个容器可以存储任意数据类型，但是只要进入到这个容器中，全部变成字符串。</p>
<h4>构造方法</h4>
<pre><code class="language-java">StringBuilder()
</code></pre>
<p>​	构造一个不带任何字符的字符串生成器，初始容量为16个字符，超过会自动扩容。</p>
<h4>常用方法</h4>
<pre><code>public StringBuilder append(任意类型)
</code></pre>
<p>​	添加数据，并返回对象本身。</p>
<pre><code class="language-java">public StringBuilder reverse()
</code></pre>
<p>​	反转容器中的内容。</p>
<pre><code class="language-java">public int length()
</code></pre>
<p>​	返回长度。</p>
<pre><code class="language-java">public String toString()
</code></pre>
<p>​	将StringBuiler转为String。</p>
<h2>ArrayList集合</h2>
<p>​	集合与数组类似，也是一种容器，用来装数据，集合的大小可变，开发中使用较多。</p>
<p>​	如果存储的数据个数固定不变，用数组存取，否则用集合存取。</p>
<h4>长度可变原理</h4>
<p>​	1.当创建ArrayList集合容器的时候，底层会存在一个长度为10个大小的空数组。</p>
<p>​	2.扩容原数组1.5倍大小的新数组。</p>
<p>​	3.将原数组数据，拷贝到新数组中。</p>
<p>​	4.将新元素添加到新数组中。</p>
<p>该类并不在主类中，使用ArrayList需要引包。</p>
<pre><code class="language-java">import java.util.ArrayList
</code></pre>
<h4>构造方法</h4>
<pre><code class="language-java">public ArrayList&lt;数据类型&gt;()
</code></pre>
<p>​	创建一个空的集合容器。</p>
<h4>常用方法</h4>
<pre><code class="language-java">public boolean add(E e)
</code></pre>
<p>​	将指定的元素调价到此集合的末尾。</p>
<pre><code class="language-java">public void add(int index,E element)
</code></pre>
<p>​	在此集合中的指定位置插入指定的元素。</p>
<pre><code class="language-java">public E get(int index)
</code></pre>
<p>​	返回指定索引处的元素。</p>
<pre><code class="language-java">public int size()
</code></pre>
<p>​	返回集合中的元素的个数。</p>
<pre><code class="language-java">public E remove(int index)
</code></pre>
<p>​	删除指定索引处的元素，返回被删除的元素。</p>
<pre><code class="language-java">public boolean remove(Object o)
</code></pre>
<p>​	删除指定的元素，返回删除是否成功。</p>
<pre><code class="language-java">public E set(int index,E element)
</code></pre>
<p>​	修改指定索引处的元素，返回被修改的元素。</p>
<h2>static</h2>
<p>​	static是静态的意思，可以修饰成员变量或者修饰成员方法。</p>
<h4>特点</h4>
<p>​	1.被类的所有对象共享。</p>
<p>​	2.多了一种调用方式，可以通过类名进行调用。</p>
<p>​	3.随着类的加载而加载，优先于对象存在。</p>
`;const i=t("div",{class:"glass"},[t("h2",null,"作者碎碎念")],-1),u=["innerHTML"],f={__name:"JavaStudy",setup(v){return(b,j)=>{const a=h,p=l,r=g;return o(),s(r,null,{default:n(()=>[e(a,{width:"200px"},{default:n(()=>[i]),_:1}),e(p,null,{default:n(()=>[t("div",{innerHTML:d(c),class:"a"},null,8,u)]),_:1})]),_:1})}}};export{f as default};
