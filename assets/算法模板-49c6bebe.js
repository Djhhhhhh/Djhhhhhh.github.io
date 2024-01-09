const n={},t=`<h1>STL</h1>
<h2>vector</h2>
<p>​	vector容器的功能和数组非常相似，使用时可以把它看成一个数组。</p>
<h4>与普通数组的区别</h4>
<p>​	1.数组是静态的，长度不可改变，而vector可以动态扩展，增加长度。
​	2.数组内数据通常存储在栈上，而vector中数据存储在堆上。</p>
<h4>动态扩展</h4>
<p>​	动态扩展并不是在原空间之后续接新空间，而是找到比原来更大的内存空间，将原数据拷贝到新空间，释放原空间。</p>
<h4>定义</h4>
<pre><code class="language-c++">vector&lt;T&gt;o;
</code></pre>
<h2>Set</h2>
<p>​	集合（set）是一个内部自动有序且不含重复元素的容器。</p>
<p>​	set 内部采用的是一种非常高效的平衡检索二叉树：红黑树（Red-Black Tree）</p>
<h4>定义</h4>
<pre><code class="language-c++">set&lt;类型名&gt; 变量名;
</code></pre>
<h4>set多元素应用</h4>
<pre><code class="language-c++">struct node{
	int a,b;
	bool operator&lt; (const node W)const
	{
		return a&gt;W.a;  //按a的值升序 
	}
};
set&lt;node&gt; q;
</code></pre>
<h4>无序set</h4>
<pre><code class="language-c++">#include &lt;unordered_set&gt;
unordered_set&lt;int&gt; a;
</code></pre>
<p>​	元素值唯一，无序的  集合，内部通过哈希表实现，查找效率比set高</p>
<h4>常用函数</h4>
<ul>
<li>find(**)：**find(value) 返回 set 中 value 所对应的迭代器，即 value 的指针（地址），如果没找到则返回 end()</li>
<li>erase()：可以删除单个元素或删除一个区间内的所有元素</li>
<li>equal_range()：返回一对迭代器，分别表示第一个大于或等于给定关键值的元素和第一个大于给定关键值的元素。返回值是一个 pair 类型。</li>
<li>count()：返回某个值元素的个数，用于判断set中是否有该元素。</li>
<li>equal_range()：返回集合中与给定值相等的上下限的两个迭代器。</li>
<li>insert()：在集合中插入元素。</li>
<li>erase()：删除集合中的元素。</li>
</ul>
<h2>std::rotate</h2>
<p>​	旋转范围中的元素顺序。</p>
<h4>用例</h4>
<pre><code class="language-c++">Input:
vector&lt;int&gt; v{ 10, 20, 30, 40, 50 };
//rotating vector from 2nd element
rotate(v.begin(), v.begin() + 2, v.end());
Output:
30 40 50 10 20
</code></pre>
<h2>std::count</h2>
<p>​	统计数组中某个元素的出现次数。</p>
<h4>用法</h4>
<pre><code class="language-c++">count(InputIt first, InputIt last, const T&amp; value);
</code></pre>
<p>​	其中，<code>first</code>和<code>last</code>表示范围的起始和结束迭代器，<code>value</code>表示要查找的值。函数返回一个<code>size_t</code>类型的值，表示<code>value</code>在指定范围内出现的次数。</p>
<h2>std::iota</h2>
<p>​	是用来批量递增赋值vector的元素的。</p>
<h4>用法</h4>
<pre><code class="language-c++">vector&lt;int&gt; v(10);
iota(v.begin(),v.end(),1);
</code></pre>
<h2>string</h2>
<h4>构造定长重复字符</h4>
<pre><code class="language-c++">string(i,'c')
</code></pre>
<h2>reverse</h2>
<h4>字符串翻转</h4>
<pre><code class="language-c++">reverse(k.begin(),k.end())
</code></pre>
<h2>substring</h2>
<h4>字符串截取</h4>
<pre><code class="language-c++">substr(int beginIndex,int endIndex)
</code></pre>
<h2>replace</h2>
<h4>字符串替换</h4>
<pre><code>string line = &quot;this@ is@ a test string!&quot;;  
line = line.replace(line.find(&quot;@&quot;), 1, &quot;&quot;);
</code></pre>
<h2>lambda表达式</h2>
<h4>有返回值</h4>
<pre><code class="language-c++">//[捕获列表](参数列表)-&gt;返回类型{函数体}
int main()
{
	auto Add = [](int a, int b)-&gt;int {
		return a + b;
	};
	std::cout &lt;&lt; Add(1, 2) &lt;&lt; std::endl;
	return 0;
}
</code></pre>
<h4>无返回值</h4>
<pre><code class="language-c++">//[捕获列表](参数列表){函数体}
int main()
{
	auto Add = [](int a, int b) {
		return a + b;
	};
	std::cout &lt;&lt; Add(1, 2) &lt;&lt; std::endl;
	return 0;
}
</code></pre>
<h1>常见的优化方法</h1>
<h2>1.快速读写</h2>
<p>​	C++的cin和cout的速度很慢，在oj上会浪费大量时间，这是因为cin和cout与stdio之间的同步锁，这样可以将读写速度大幅提升。</p>
<h4>代码如下</h4>
<pre><code class="language-c++">void fastread() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
}
//注意对于无缓冲的流，刷新是不必要的，可以直接使用&quot;\\n&quot;,过多的endl是影响程序执行效率低下的因素之一。
</code></pre>
<h2>2.双指针法</h2>
<p>​	双指针是一种通过设置两个指针不断进行单向移动来解决问题的算法思想。一般包含两种形式：一、<strong>两个指针指向同一个序列</strong>。二、<strong>两个指针分别指向不同的序列</strong>。指向同一序列的比较常见，代表有<strong>快慢指针</strong>，<strong>首尾指针</strong>，<strong>固定间距指针</strong>等。指向不同序列的双指针代表有<strong>归并排序</strong>这种，需要合并时用双指针或者多指针。</p>
<h4>解题心得</h4>
<ul>
<li>双指针并不是数据结构，也不是指C这种语言中的指针，而是一种解题思想。</li>
<li>很多时候双指针的题，会有多种解法，但双指针解法往往是最清晰易懂的解法。</li>
<li>双指针可用来提高效率，一般是将O(n^2)的时间复杂度，降为O(n)。</li>
<li>解题时要注意两指针索引的更新。</li>
</ul>
<h4>分类</h4>
<h5>1.首尾指针</h5>
<p>反转字符串（[题目链接](<a href="https://blog.csdn.net/MR_vico/article/details/118248274">(10条消息) Typora的简单入门使用教程_typora使用教程_编导儿巴的博客-CSDN博客</a>)）</p>
<pre><code class="language-c++">int main() {
    string k;
    cin &gt;&gt; k;
    for (int i = 0; i &lt;= k.size() / 2; i++) {
        swap(k[i], k[k.size() - i - 1]);
    }
    cout &lt;&lt; k;
    return 0;
}
</code></pre>
<p>救生艇([题目链接](<a href="https://leetcode.cn/problems/boats-to-save-people/">881. 救生艇 - 力扣（LeetCode）</a>))</p>
<pre><code class="language-c++">int main() {
    fastread();
    int people[N],limit;
    int ans;
    int sum = 0;
    cin &gt;&gt; ans &gt;&gt; limit;
    for (int i = 1; i &lt;= ans; i++){
        cin &gt;&gt; people[i];
    }
    sort(people, people + ans, cmp1);
    int i = 1, j = ans;
    while (i &lt;= j) {
        if (people[i] + people[j] &lt;= limit) {
            i++;
        }
        j--;
        sum++;
    }
    cout &lt;&lt; sum;
    return 0;
}
</code></pre>
<h5>2.快慢指针</h5>
<p>P1147连续自然数的和（[题目链接](<a href="https://www.luogu.com.cn/problem/P1147">P1147 连续自然数和 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)）</p>
<pre><code class="language-c++">int main() {
    fastread();
    int m;
    cin &gt;&gt; m;
    int l = 1;  //慢指针
    int r = 2;  //快指针
    int sum = 1;
    while (r - l + 1 &gt;= 2) {    //快指针因慢指针相对减速 所以 当距离小于2之后rl之间的距离不可能超过2了
        sum += r;
        while (sum &gt; m) {
            sum -= l;
            l++;
        }
        if (sum == m&amp;&amp;r-l+1&gt;=2) {
            cout &lt;&lt; l &lt;&lt; &quot; &quot; &lt;&lt; r&lt;&lt;endl;
        }
        r++;
    }
    return 0;
}
</code></pre>
<h4>总结</h4>
<p>在利用双指针算法解题时,考虑原问题如何用暴力算法解出,观察是否可构成单调性,若可以,就可采用双指针算法对暴力算法进行优化。</p>
<h2>3.空间换时间</h2>
<p>​	 算法效率：往往由时间效率和空间效率两个方面决定。</p>
<p>​     时间效率：时间效率被称为时间复杂度，指的是算法执行过程耗费的时间。</p>
<p>​     空间效率：空间效率被称为<a href="https://so.csdn.net/so/search?q=%E7%A9%BA%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6&amp;spm=1001.2101.3001.7020">空间复杂度</a>，指的是算法执行过程所耗费的最大的存储空间。</p>
<h4>数学公式总结（以此减少时间问题）</h4>
<p>p2671求和（[题目链接]([P2671 <a href="https://www.luogu.com.cn/problem/P2671">NOIP2015 普及组] 求和 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)）</p>
<pre><code class="language-c++">int sum[Nn][2];
int a[Nn][2];
int b[Nn];
int c[Nn];
int main() {
    fastread();
    int n, m;
    int ans = 0;
    cin &gt;&gt; n &gt;&gt; m;
    for (int i = 1; i &lt;= n; i++) {
        cin &gt;&gt; b[i];
    }
    for (int i = 1; i &lt;= n; i++) {
        cin &gt;&gt; c[i];
        a[c[i]][i % 2]++;
        sum[c[i]][i % 2] = (sum[c[i]][i % 2] + b[i]) % mod;
    }
    for (int i = 1; i &lt;= n; i++) {
        ans = (ans + i * ((a[c[i]][i % 2] - 2) * b[i] % mod + sum[c[i]][i % 2]))%mod;
    }
    cout &lt;&lt; ans;
    return 0;
}
</code></pre>
<h2>4.单调栈</h2>
<p>​	从栈底元素到栈顶元素呈单调递增或单调递减，栈内序列满足单调性的栈；</p>
<h4>原理</h4>
<p>​	1.当新元素在单调性上优于栈顶时（单增栈新元素比栈顶大，单减栈新元素比栈顶小），压栈，栈深+1。</p>
<p>​	2.当新元素在单调性与栈顶相同（新元素于栈顶相同）或劣于栈顶时（单增栈新元素比栈顶小，单减栈新元素比栈顶大），弹栈，栈深-1。</p>
<h4>模板</h4>
<pre><code class="language-c++">void stacks(){
        int stack[10001],tot=0,n,h;
        memset(stack,0,sizeof(stack));
        cin&gt;&gt;n;
        for(i=1;i&lt;=n;++i){
                cin&gt;&gt;h;
                while(tot&gt;0&amp;&amp;h&lt;=stack[tot]) {
                    --tot;
                }
                stack[++tot]=h;
        }
}
</code></pre>
<h4>例题</h4>
<p>P3467[POI2008] PLA-Postering（[题目链接]([P3467 <a href="https://www.luogu.com.cn/problem/P3467">POI2008] PLA-Postering - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)）</p>
<pre><code class="language-c++">ll n;
ll o;
stack&lt;ll&gt;a;
ll sum = 0;
int main() {
    fastread();
    cin &gt;&gt; n;
    int lj;
    for (int i = 1; i &lt;= n; i++) {
        cin &gt;&gt; lj &gt;&gt; o;
        while (!a.empty() &amp;&amp; a.top() &gt; o)
            a.pop();
        if (a.empty() || a.top() != o) {
            sum++;
        }
        a.push(o);
    }
    cout &lt;&lt; sum;
    return 0;
}
</code></pre>
<h2>5.单调队列</h2>
<p>​	单调队列是一个数据结构，并不是<code>STL</code>里面的内容。</p>
<p>​	单调队列为何说单调，因为是队列中的元素始终保持着单增或者单减的特性。</p>
<h4>例题</h4>
<h6>求区间最大值</h6>
<p>​	p1886滑动窗口（[题目链接](<a href="https://www.luogu.com.cn/problem/P1886">P1886 滑动窗口 /【模板】单调队列 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)）</p>
<pre><code class="language-c++">int n, k;
int o[NN];
deque&lt;int&gt; q;
int main() {
    fastread();
    cin &gt;&gt; n &gt;&gt; k;
    for (int i = 1; i &lt;= n; i++) {  //输入数据
        cin &gt;&gt; o[i];
    }
    //计算区间最小值
    for (int i = 1; i &lt;= n; i++) {
        if (!q.empty() &amp;&amp; i - k + 1 &gt; q.front()) {   //如果前面的序号已经滑过窗口则弹出
            q.pop_front();
        }
        while (!q.empty() &amp;&amp; o[q.back()] &gt;= o[i]) { //如果最后的值大于要输入的值 则将最后的值弹出 重复此操作
            q.pop_back();
        }
        q.push_back(i);
        if (i &gt;= k) {
            cout &lt;&lt;o[q.front()]&lt;&lt;&quot; &quot;;
        }
    }
    cout &lt;&lt; endl;
    q.clear();   //清除操作
    //计算区间最大值
    for (int i = 1; i &lt;= n; i++) {
        if (!q.empty() &amp;&amp; i - k + 1 &gt; q.front()) {  //如果前面的序号已经滑过窗口则弹出
            q.pop_front();
        }
        while (!q.empty() &amp;&amp; o[q.back()] &lt;= o[i]) { //如果最后的值小于要输入的值 则将最后的值弹出 重复此操作
            q.pop_back();
        }
        q.push_back(i);
        if (i &gt;= k) {
            cout &lt;&lt; o[q.front()] &lt;&lt; &quot; &quot;;
        }
    }
    return 0;
}
</code></pre>
<h6>求区间和最大值</h6>
<p>​	P1714 切蛋糕（[题目链接](<a href="https://www.luogu.com.cn/problem/P1714">P1714 切蛋糕 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)）</p>
<pre><code class="language-c++">ll sum1 = -MAXN;
deque&lt;ll&gt;k;
ll sum[Nn];
int main() {
    fastread();
    int n, m;
    cin &gt;&gt; n &gt;&gt; m;
    ll q;
    for (int i = 1; i &lt;= n; i++) {
        cin &gt;&gt; q;
        sum[i] = sum[i - 1] + q;   //求区间和
    }
    k.push_back(0);  //给队列赋初值0 用来计算包含第一段的区间
    for (int i = 1; i &lt;= n; i++) {
        while (k.front() + m &lt; i) {
            k.pop_front();  //越界则弹出
        }
        sum1 = max(sum1, sum[i] - sum[k.front()]);
        while (!k.empty() &amp;&amp; sum[k.back()] &gt; sum[i]) {
            k.pop_back();
        }   //去除递减区间
        k.push_back(i);
    }
    cout &lt;&lt; sum1 &lt;&lt; endl;
    return 0;
}
</code></pre>
<h2>6.优先队列</h2>
<p>​	对于「最大值」，我们可以想到一种非常合适的数据结构，那就是优先队列（堆），其中的大根堆可以帮助我们实时维护一系列元素中的最大值。</p>
<h4>定义</h4>
<pre><code class="language-c++">priority_queue&lt;Type, Container, Functional&gt;
//升序队列
priority_queue &lt;int,vector&lt;int&gt;,greater&lt;int&gt; &gt; q;
//降序队列
priority_queue &lt;int,vector&lt;int&gt;,less&lt;int&gt; &gt;q;
</code></pre>
<p>Type 就是数据类型，Container 就是容器类型（Container必须是用数组实现的容器，比如vector,deque等等，但不能用 list。STL里面默认用的是vector），Functional 就是比较的方式，当需要用自定义的数据类型时才需要传入这三个参数，使用基本数据类型时，只需要传入数据类型，默认是大顶堆。注：pari的比较，先比较第一个元素，第一个相等比较第二个。</p>
<h4>自定义排序方式</h4>
<pre><code class="language-c++">struct num1 {
    int xushu, zhi;
    bool operator &lt; (const num1 x) const {
        return (zhi &gt; x.zhi) || (zhi == x.zhi &amp;&amp; xushu &lt; x.xushu);
    }
    //若输入值小于队列内值则放到前面
    //若值相等 则序数大的放在前面
    //自定义比较函数 注意用 &lt; 号
};
priority_queue&lt;num1&gt; q;
</code></pre>
<p>​	例题内有具体的实现</p>
<p>​	优先队列排列规则默认为<code>operator&lt;</code>但是注意，在<code>operator&lt;</code>里的比较规则和<code>cmp</code>恰恰相反！比如在<code>cmp</code>里，<code>a.x&gt;b.x</code>表示按<code>x</code>的降序排列，但在<code>operator&lt;</code>里则是升序排；同样的<code>greater</code>在<code>cmp</code>里表示表示升序，然而在<code>operator&lt;</code>里则代表降序。</p>
<h4>例题</h4>
<p>p1886滑动窗口（[题目链接](<a href="https://www.luogu.com.cn/problem/P1886">P1886 滑动窗口 /【模板】单调队列 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)）</p>
<pre><code class="language-c++">struct num1 {
    int xushu, zhi;
    bool operator &lt; (const num1 x) const {
        return (zhi &gt; x.zhi) || (zhi == x.zhi &amp;&amp; xushu &lt; x.xushu);
    }
    //自定义比较函数 注意用 &lt; 号
}p1;
struct num2 {
    int xushu, zhi;
    bool operator &lt; (const num2 x) const {
        return (zhi &lt; x.zhi) || (zhi == x.zhi &amp;&amp; xushu &lt; x.xushu);
    }
}p2;
priority_queue&lt;num1&gt; q1; //值小优先
priority_queue&lt;num2&gt; q2; //值大优先
int n;  //序列大小
int k;  //窗口大小
int top; //窗口所取值的个数
int num[bN];   //存储的序列
int min1[bN];  //最小值
int max1[bN];  //最大值
int main() {
    fastread();
    cin &gt;&gt; n &gt;&gt; k;
    for (int i = 1; i &lt;= n; i++) {
        cin &gt;&gt; num[i];
    }
    for (int i = 1; i &lt;= k; i++) {
        p1.xushu = i, p1.zhi = num[i];
        q1.push(p1);
        p2.xushu = i, p2.zhi = num[i];
        q2.push(p2);
    }  //将第一组先存到窗口中
    min1[++top] = q1.top().zhi, max1[top] = q2.top().zhi;
    //将第一组的元素保存
    for (int i = k + 1; i &lt;= n; i++) {
        p1.xushu = i, p1.zhi = num[i];
        q1.push(p1);
        p2.xushu = i, p2.zhi = num[i];
        q2.push(p2);//存入下一组的数据
        while (i - q1.top().xushu &gt;= k)q1.pop();
        while (i - q2.top().xushu &gt;= k)q2.pop(); //超过范围的弹出
        //将下一组先存到窗口中
        min1[++top] = q1.top().zhi, max1[top] = q2.top().zhi;
    }
    //输出答案
    for (int i = 1; i &lt;= top; i++)cout &lt;&lt; min1[i] &lt;&lt; &quot; &quot;;
    cout &lt;&lt; endl;
    for (int i = 1; i &lt;= top; i++)cout &lt;&lt; max1[i] &lt;&lt; &quot; &quot;;
    return 0;
}
</code></pre>
<h2>7.memset初始化</h2>
<p>​	memset函数是按照字节对内存块进行初始化，所以不能用它将int数组出初始化为0和-1之外的其他值（除非该值高字节和低字节相同）。</p>
<h4>例子</h4>
<pre><code class="language-c++">memset(f, 128, sizeof(f));//初始化极小值 (每个字节赋128会导致自然溢出)
</code></pre>
<h2>8.数据范围</h2>
<pre><code class="language-c++">int -2147483647 ~ 2147483647   &lt;——&gt; -0x7fffffff ~ 0x7fffffff       &lt;——&gt;     -pow(2,31) ~ pow(2,31)-1
long long -9223372036854775808 ~ 9223372036854775808 &lt;——&gt;   -pow(2,63) ~ pow(2,63)-1
</code></pre>
<h2>9.int与long long的速度差异</h2>
<p>​	int会比long long在运行时稍快一些。</p>
<h1>数论</h1>
<h2>基本数论概念</h2>
<h4>互质</h4>
<p>公约数只有1 的两个 整数，称为互质。a与b互质，则写作 (a,b)=1 。</p>
<h4>质因数</h4>
<p>质因数指能整除给定整数的质数，例如6的质因数为2和3。</p>
<h4>余数的基本性质</h4>
<p>(a+b)%c = ((a%c)+(b%c)) % c       (a-b)%c = ((a%c) - (b%c)) % c         (a*b)%c = ((a%c) * (b%c)) % c</p>
<h4>同余</h4>
<p>给定一个正整数m，如果两个整数a和b满足a-b能够被m整除，那么就称整数a与b对模m同余，记作<strong>a≡b(mod m)</strong>。</p>
<h2>欧拉函数</h2>
<p>​	对正整数n，欧拉函数是小于n的正整数中与n互质的数的数目。</p>
<p><strong>欧拉函数通式</strong>
$$
φ(n)=n*(1-1/p1)<em>(1-1/p2)</em>(1-1/p3)<em>(1-1/p4)</em>……*(1-1/pn)
$$</p>
<pre><code class="language-c++">ll Eular(ll n){
    ll ans=n;
    for(int i=2; i*i &lt;= n; ++i)
    {
        if(n%i == 0)
        {
            ans = ans/i*(i-1);
            while(n%i == 0)
                n/=i;
        }
    }
    if(n &gt; 1) ans = ans/n*(n-1);
    return ans;
}
</code></pre>
<p>还可以在素数筛的同时求欧拉函数,效率更高。</p>
<h4>欧拉定理</h4>
<p>​	对任意两个正整数 a, n，如果两者互质，那么 <strong>a^φ(n)≡1(mod n)</strong>。</p>
<h4>费马小定理</h4>
<p>​	若存在整数a,p，a为整数，p为质数，那么<strong>a^(p-1)≡ 1(mod p)</strong>。</p>
<p>​	费马小定理是欧拉定理的一种特殊情况（当n为质数时φ(n)为n-1。</p>
<h2>模运算</h2>
<h4>取模运算</h4>
<p>​	a % p（a mod p），表示a除以p的余数。</p>
<p>​	模运算满足结合律、交换律和分配律。
​	a≡b (mod n) 表示a和b模n同余，即a和b除以n的余数相等。</p>
<h4>模p加法</h4>
<p>​	(a + b) % p = (a%p + b%p) % p</p>
<h4>模p减法</h4>
<p>​	(a - b) % p = (a%p - b%p) % p</p>
<h4>模p乘法</h4>
<p>​	(a * b) % p = ((a % p)*(b % p)) % p</p>
<h4>幂模p</h4>
<p>​	(a^b) % p = ((a % p)^b) % p</p>
<h2>同余的性质</h2>
<p>1.反身性：a≡a (mod m)；
2.对称性：若a≡b(mod m)，则b≡a (mod m)；
3.传递性：若a≡b(mod m)，b≡c(mod m)，则a≡c(mod m)；
4.同余式相加：若a≡b(mod m)，c≡d(mod m)，则a c≡b d(mod m)；
5.同余式相乘：若a≡b(mod m)，c≡d(mod m)，则ac≡bd(mod m)。</p>
<h2>Π的大小</h2>
<h4>模板</h4>
<p>该函数在cmath里</p>
<pre><code class="language-c++">#define PI = acos(-1);
</code></pre>
<h2>快速幂</h2>
<p>​	快速幂（Exponentiation by squaring，平方求幂）是一种简单而有效的小算法，它可以以O（logn）的时间复杂度计算乘方。快速幂不仅本身非常常见，而且后续很多算法也都会用到快速幂</p>
<h4>模板</h4>
<pre><code class="language-c++">ll qpow(ll a, ll n, ll p)    //快速幂 a^n % p
{
    ll ans = 1;
    while(n)
    {
        if(n &amp; 1) ans = ans * a % p;          //若不取模就去掉p
        a = a * a % p;
        n &gt;&gt;= 1;
    }
    return ans;
}
</code></pre>
<h2>大整数快速幂</h2>
<pre><code class="language-c++">#include &lt;bits/stdc++.h&gt;
using namespace std;
const int mod=1e9+7;
long long quick_mod(long long a,long long b)
{
    long long ans=1;
    while(b){
        if(b&amp;1){
            ans=(ans*a)%mod;
            b--;
        }
        b/=2;
        a=a*a%mod;
    }
    return ans;
}//内部也用快速幂
long long quickmod(long long a,string b,int len)
{
    long long ans=1;
    while(len&gt;0){
        if(b[len-1]!='0'){
            int s=b[len-1]-'0';
            ans=ans*quick_mod(a,s)%mod;
        }
        a=quick_mod(a,10)%mod;
        len--;
    }
    return ans;
}
int main(){
    char s[100050];
    int a;
    while(cin&gt;&gt;a)         //求a^s%mod
    {
        cin&gt;&gt;s;
        int len=strlen(s);
        cout&lt;&lt;(ull)quickmod(a,s,len);
    }
    return 0;
}
</code></pre>
<h2>质数</h2>
<p>​</p>
<p>​	素数又叫质数（prime number），有无限个。质数定义为在大于1的自然数中，除了1和它本身以外不再有其他因数。</p>
<h4>质数判断</h4>
<p>​	理论基础：将一个数开平方根可以快速判断出是否为质数。</p>
<pre><code class="language-c++">int main() {
    fastread();
    int n;
    bool t = 1;
    cin &gt;&gt; n;
    for (int i = 2; i &lt;= sqrt(n); i++) {
        if (n % i == 0) {
            t = 0;
            break;
        }
    }
    if (t) {
        cout &lt;&lt; &quot;该数是素数&quot; &lt;&lt; endl;
    }
    else {
        cout &lt;&lt; &quot;该数不是素数&quot; &lt;&lt; endl;
    }
    return 0;
}
</code></pre>
<h4>质数筛（欧拉筛又称线性筛）</h4>
<p>​	欧拉筛是埃氏筛的升级版，故对于埃氏筛不做讲解。</p>
<p>​	时间复杂度：O(n)</p>
<p>​	原理：主要原理：合数=最小质因子*合数（质数）</p>
<p>​	这个合数的组成是唯一的，欧拉面只在这种情况筛一次，也就是每个数就筛一次，可以完成o(n)的复杂度。</p>
<pre><code class="language-c++">int sushu[bN];    //用于保存素数
bool visit_sushu[bN];   //用于保存被访问过的数字
int main() {
    fastread();
    int n;  //所要求得区间范围
    int sum = 0;          //素数的个数
    cin &gt;&gt; n;
    memset(visit_sushu, false, sizeof(visit_sushu));  //初始化访问列表 均为false
    for (int i = 2; i &lt;= n; i++) {     //循环开始
        if (!visit_sushu[i]) {    //判断是否被访问 若未被访问则为素数
            sushu[++sum] = i;
        }
        for (int j = 1; j &lt;= sum &amp;&amp; i * sushu[j] &lt;= n; j++) {  //访问判断
            visit_sushu[i * sushu[j]] = true;     //取合数 将其访问
            if (i % sushu[j] == 0)break;   
        }
    }
    cout &lt;&lt; sum;
    return 0;
}
</code></pre>
<p>​</p>
<h2>约数</h2>
<p>​	约数又称因数，如果a能被b整除，那么我们称a为b的倍数，b为a的约数。</p>
<h4>唯一分解定理</h4>
<p>​	任意一个大于1的数，均可以分成有限个质数乘积的形式。
$$
N=p_1^a<em>p_2^b</em>p_3^c...
$$</p>
<h4>试除法-求n的正约数集合</h4>
<p>​	显然约数总是成对出现（除了完全平方数，只有一个$$\\sqrt{n}$$），所以只需要枚举到sqrt(n)即可。</p>
<h5>模板</h5>
<pre><code class="language-c++">vector&lt;ll&gt;p;
ll n,m;
for(int i=1;i*i&lt;=n;i++){
    if(n%i==0){
        p.push_back(i);
    	if(i!=n/i){
            p.push_back(n/i);
        }
    }
}
</code></pre>
<p>​	推论：一个整数n的约数个数上界为2$\\sqrt{n}$</p>
<h4>倍数法-求1~n中每个数的正约数集合</h4>
<p>​	按照埃氏筛的形式枚举倍数。可以求出1-n中每个数的正约数集合，但并不能求出具体某个数的因子是谁，常用于一些因子有关的计算。</p>
<h5>模板</h5>
<pre><code class="language-c++">ll n;cin&gt;&gt;n;
vector&lt;ll&gt;p[];
for(int i=1;i&lt;=n;i++){
	for(int j=1;j*i&lt;=n;j++){
		p[i*j].push_back(j);
	}
}
</code></pre>
<p>​	推论：1-n中每个数的约数总和大概为nlogn。</p>
<h2>欧几里得定理</h2>
<p>​	gcd(a,b)=gcd(b,a%b)</p>
<h2>gcd最大公约数</h2>
<p>​	指能够整除多个整数的最大正整数。而多个整数不能都为零。</p>
<h5>模板</h5>
<p>​	此段代码a,b可以为0</p>
<pre><code class="language-c++">int gcd(int a,int b) 
{    
    if(b) while((a%=b) &amp;&amp; (b%=a));    
    return a+b;
}
</code></pre>
<h2>lcm最小公倍数</h2>
<h4>模板</h4>
<pre><code class="language-c++">int gcd(int a, int b)
{
    return b &gt; 0 ? gcd(b, a % b) : a;
}
int lcm(int a, int b) {
    return a / gcd(a, b) * b;
}	
</code></pre>
<h2>进制转化</h2>
<p>​	实现两种不同进制之间的数据转换。</p>
<h4>模板</h4>
<pre><code class="language-c++">//n-&gt;m进制
char k[40] = { '0','1','2','3','4','5','6','7','8','9',
              'A','B','C','D','E','F','G','H','I','J','K','L','M',
              'N','O','P','Q','R','S','T','U','V','W','X','Y','Z' };
string jzzh(string str, int n, int m) {
    ll ten = 0;
    for (int i = 0; i &lt; str.size(); i++) {  //转化为10进制
        if (str[i] &gt;= '0' &amp;&amp; str[i] &lt;= '9') {
            ten += (str[i] - '0') * pow(n, str.size() - 1 - i);
        }
        else {
            ten += (str[i]-'A'+10) * pow(n, str.size() - 1 - i);
        }
    }
    stack&lt;int&gt;yy;
    while (ten) {
        yy.push(ten % m);
        ten /= m;
    }
    string mb = &quot;&quot;;
    while (yy.size()) {
        mb += k[yy.top()];
        yy.pop();
    }
    return mb;
}
</code></pre>
<h2>位运算</h2>
<p>​	我们知道，计算机中的数在内存中都是以二进制形式进行存储的 ，而位运算就是直接对整数在内存中的二进制位进行操作，因此其执行效率非常高，在程序中尽量使用位运算进行操作，这会大大提高程序的性能。</p>
<h4>运算符</h4>
<table>
<thead>
<tr>
<th>符号</th>
<th>描述</th>
<th>运算规则</th>
</tr>
</thead>
<tbody>
<tr>
<td>&amp;</td>
<td>与</td>
<td>两个位都为1时，结果才为1。</td>
</tr>
<tr>
<td>|</td>
<td>或</td>
<td>两个位都为0时，结果才为0。</td>
</tr>
<tr>
<td>^</td>
<td>异或</td>
<td>两个位相同为0，相异为1。</td>
</tr>
<tr>
<td>~</td>
<td>取反</td>
<td>0变1，1变0。</td>
</tr>
<tr>
<td>&lt;&lt;</td>
<td>左移</td>
<td>各二进位全部左移若干位，高位丢弃，低位补0。</td>
</tr>
<tr>
<td>&gt;&gt;</td>
<td>右移</td>
<td>各二进位全部左移若干位，高位丢弃，低位补0。</td>
</tr>
</tbody>
</table>
<h4>位运算的应用</h4>
<h5>实现乘除法</h5>
<pre><code class="language-c++">a&lt;&lt;1==a*2
a&gt;&gt;1==a/2
</code></pre>
<h5>交换两整数</h5>
<pre><code class="language-c++"> void swap(int &amp;a,int &amp;b){
      a ^= b;
      b ^= a;
      a ^= b;
  }
</code></pre>
<h5>改变正负性和求绝对值</h5>
<pre><code class="language-c++">int change(int a){
    return ~ a + 1;
}
</code></pre>
<h5>实现对p取余</h5>
<pre><code class="language-c++">//（p为2^k2）
int mod(int a,int p){
    return a &amp; (p - 1);
}
</code></pre>
<h5>统计二进制数1的个数</h5>
<pre><code class="language-c++">int count(int x){
    int cnt = 0;
    while(x){
        x = x &amp; (x - 1);
        cnt ++;
    }
    return cnt;
}
</code></pre>
<h2>排列组合</h2>
<h4>求n!</h4>
<pre><code class="language-c++">int jiecheng(int x)//阶乘代码
{
    int res = 1;//返回值变量
    for (int i = x; i; i -- )//用for实现逐次减一
        res *= i;//乘入返回值变量
    return res;//返回
}
</code></pre>
<h4>求C</h4>
<pre><code class="language-c++">//y在上面 x在下面
int C(int x,int y)//定义组合函数
{
    int ret;
    ret=jiecheng(x)/jiecheng(x-y)/jiecheng(y);//公式
    return ret;
}
</code></pre>
<h4>求A</h4>
<pre><code class="language-c++">//y在上面 x在下面
int A(int x,int y)//定义排列函数
{
    int ret;
    ret=jiecheng(x)/jiecheng(y);//公式
    return ret;
}
</code></pre>
<h2>统计数字二进制下1的个数</h2>
<p>​	__builtin_popcount该函数是C++自带的库函数，内部实现是用查表实现的。</p>
<p>​	作用：统计数字在二进制下1的个数。</p>
<pre><code class="language-c++">__builtin_popcount(num)
</code></pre>
<h2>精准的sqrt</h2>
<pre><code class="language-c++">ll m_sqrt(ll x) {
    ll left = 0, right = 9000000001;
    while (right &gt; left) {
        ll mid = (left + right) / 2;

        if (mid * mid &gt; x) right = mid;
        else left = mid + 1;
    }
    return left - 1;
}
</code></pre>
<h2>容斥原理</h2>
<p>​	容斥原理是一种重要的组合数学方法，可以让你求解任意大小的集合，或者计算复合事件的概率。</p>
<h4>原理</h4>
<p>​	要计算几个集合并集的大小，我们要先将所有<strong>单个集合</strong>的大小计算出来，然后减去所有<strong>两个集合相交</strong>的部分，再加回所有<strong>三个集合相交</strong>的部分，再减去所有<strong>四个集合相交</strong>的部分，依此类推，一直计算到<strong>所有集合相交</strong>的部分。</p>
<p>​	容斥原理核心的计数规则可以记为一句话：<strong>奇加偶减</strong>。</p>
<h1>算法</h1>
<h2>前缀和</h2>
<p>​	前缀和是指某序列的前n项和，可以把它理解为数学上的数列的前n项和，而差分可以看成前缀和的逆运算。合理的使用前缀和与差分，可以将某些复杂的问题简单化。</p>
<h4>一维前缀和</h4>
<p>​	时间复杂度：O(1)</p>
<p>​	原理：对输入的数据进行预处理，在查询时只需进行sum[r]-sum[l]的操作便可以得到对应区间的和。</p>
<pre><code class="language-c++">int main() {
    fastread();
    int n;
    int o[N]={0};     //待处理数组 
    int sum[N]={0};  //前缀和数组
    cin &gt;&gt; n;
    for (int i = 1; i &lt;= n; i++) { 
        cin &gt;&gt; o[i];
        sum[i] = o[i] + sum[i - 1];         //对数据进行预处理
    }
    int t;
    cin &gt;&gt; t;
    while (t--) {
        int l, r;
        cin &gt;&gt; l &gt;&gt; r;        //输入待查询的区间
        cout &lt;&lt; sum[r] - sum[l-1] &lt;&lt; endl;      //输出区间[l,r]的和 
    }
    return 0;
}
</code></pre>
<h4>二维前缀和</h4>
<p>​	时间复杂度：预处理O(NM)+查询O(1)</p>
<p>​	原理：</p>
<p>​		二维前缀和预处理公式  :</p>
<pre><code class="language-c++">s[i][j] = s[i - 1][j] + s[i][j - 1 ] + a[i] [j] - s[i - 1][j - 1]
</code></pre>
<p>​		以<code>(x1, y1)</code>为左上角，<code>(x2, y2)</code>为右下角的子矩阵的和为：</p>
<pre><code class="language-c++">s[x2, y2] - s[x1 - 1, y2] - s[x2, y1 - 1] + s[x1 - 1, y1 - 1]
</code></pre>
<pre><code class="language-c++">int n, m;
int o[nN][nN];
int sum[nN][nN];
int main() {
    fastread();
    int t;
    cin &gt;&gt; n &gt;&gt; m;
    cin &gt;&gt; t;
    for (int i = 1; i &lt;= n; i++) {
        for (int j = 1; j &lt;= m; j++) {
            cin &gt;&gt; o[i][j];
           	//预处理操作
            sum[i][j] = sum[i - 1][j] + sum[i][j - 1] + o[i][j] - sum[i - 1][j - 1];  
        }
    }
    
    while (t--) {
        int x1, y1,x2,y2;
        cin &gt;&gt; x1 &gt;&gt; y1&gt;&gt;x2&gt;&gt;y2;
        //求子矩阵和
        cout &lt;&lt; sum[x2][y2] - sum[x1 - 1][y2] - sum[x2][y1 - 1] + sum[x1 - 1][y1 - 1] &lt;&lt; endl;
    }
    return 0;
}
</code></pre>
<h2>差分</h2>
<p>​	差分可以看成前缀和的逆运算。</p>
<h4>一维差分</h4>
<p>​	时间复杂度：O(1)</p>
<p>​	原理：对输入的数据进行预处理，在查询时只需进行sum[r]-sum[l]的操作便可以得到对应区间的和。</p>
<pre><code class="language-c++">int main() {
    fastread();
    int n,t;
    int o[N] = { 0 };     //待处理数组 
    int cha[N] = { 0 };  //差分数组
    cin &gt;&gt; n;
    cin &gt;&gt; t;
    for (int i = 1; i &lt;= n; i++) {
        cin &gt;&gt; o[i];
        cha[i] = o[i] - o[i - 1];         //构建差分数组
    }
    int l, r, c;
    while (t--) {
        cin &gt;&gt; l &gt;&gt; r &gt;&gt; c;   //输入区间 和 在区间内要加的数
        cha[l] += c;     //将差分的第一个加上这个数
        cha[r + 1] -= c;   //并在最后将一个数的下一位将该数减下去复原
    }
    for (int i = 1; i &lt;= n; i++) {
        cha[i] += cha[i - 1];   //构建回原数组
        cout &lt;&lt; cha[i] &lt;&lt; &quot; &quot;;   //输出
    }
    return 0;
}
</code></pre>
<h4>二维差分</h4>
<p>​		时间复杂度：O(1)</p>
<pre><code class="language-c++">int n, m;
int q;
int a[nN][nN];
int b[nN][nN];
int main() {
    fastread();
    cin &gt;&gt; n &gt;&gt; m &gt;&gt; q;
    for (int i = 1; i &lt;= n; i++) {
        for (int j = 1; j &lt;= m; j++) {
            cin &gt;&gt; a[i][j];
        }
    }
    //构建差分数组
    for (int i = 1; i &lt;= n; i++) {
        for (int j = 1; j &lt;= m; j++) {
            b[i][j] += a[i][j];
            b[i + 1][j] -= a[i][j];
            b[i][j + 1] -= a[i][j];
            b[i + 1][j + 1] += a[i][j];
        }
    }
    //进行区域数据处理
    while (q--) {
        int x1, x2, y1, y2, c;
        cin &gt;&gt; x1 &gt;&gt; y1 &gt;&gt; x2 &gt;&gt; y2 &gt;&gt; c;
        b[x1][y1] += c;
        b[x2 + 1][y1] -= c;
        b[x1][y2 + 1] -= c;
        b[x2 + 1][y2 + 1] += c;
    }
    //构建
    for (int i = 1; i &lt;= n; i++) {
        for (int j = 1; j &lt;= m; j++) {
            b[i][j] += b[i - 1][j] + b[i][j - 1] - b[i - 1][j - 1];  //二维前缀和
        }
    }
    for (int i = 1; i &lt;= n; i++) {
        for (int j = 1; j &lt;= m; j++) {
            cout &lt;&lt; b[i][j] &lt;&lt; &quot; &quot;;
        }
        cout &lt;&lt; endl;
    }
    return 0;
}
</code></pre>
<h2>离散化</h2>
<p>​	离散化是程序设计中一个常用的技巧，它可以有效的降低时间复杂度。其基本思想就是在众多可能的情况中，只考虑需要用的值。离散化可以改进一个低效的算法，甚至实现根本不可能实现的算法。</p>
<p>​	离散化本质上可以看成是一种哈希。</p>
<h4>模板</h4>
<pre><code class="language-c++">int lsh[NN]; //离散化的数组
int cnt;     //离散化的数组的大小
int num[NN]; //原数组
int n;       //原数组大小
//利用二分求出x对应的离散化的值
int find(int x) {   //找到第一个大于等于x的位置
    /*int l = 1, r = cnt;
    while (l &lt; r) {
        int mid = l + r &gt;&gt; 1;
        if (lsh[mid] &gt;= x)r = mid;
        else l = mid + 1;
    }*/
    int r = lower_bound(lsh, lsh + cnt, x) - lsh;   //利用lower_bound快速写出二分操作
    return r;  //映射到1,2,...
}
int main() {
    fastread();
    cin &gt;&gt; n;
    for (int i = 1; i &lt;= n; i++) {
        cin &gt;&gt; num[i];
        lsh[i] = num[i];
    }
    sort(lsh + 1, lsh + 1 + n); //将未处理的离散化数组排序
    cnt = unique(lsh + 1, lsh + 1 + n) - lsh - 1;   //将离散化数组去重 并获取离散化数组的长度
    return 0;
}
</code></pre>
<h4>unique()</h4>
<p>​	unique函数的作用是用于去除容器中相邻元素的，但并不是真正的去除，他会把重复的元素添加到容器末尾，返回值是去重后的伪地址。</p>
<pre><code class="language-c++">int num[10]={1,1,2,2,2,3,4,5,5,5};   
int ans=unique(num,num+10)-num;   //返回5    运算为末地址减去首地址则为去重后的数组个数
</code></pre>
<h4>STL二分查找</h4>
<pre><code class="language-c++">lower_bound    //返回第一个大于等于value的迭代器
upper_bound     //返回第一个大于value的迭代器
lower_bound( begin,end,num,greater&lt;type&gt;()) //从数组的begin位置到end-1位置二分查找第一个小于或等于num的数字
upper_bound( begin,end,num,greater&lt;type&gt;()) //从数组的begin位置到end-1位置二分查找第一个小于num的数字
binary_search   //如果存在value，返回true，否则返回false
int n = lower_bound(a, a + 10, 7) - a;
int n1 = upper_bound(a, a + 10, 7) - a;   //减去首地址后返回的均为下标
binary_search(arr[],arr[]+size,indx)
</code></pre>
<h4>例题</h4>
<p>P1955 [NOI2015] 程序自动分析（[题目链接]([P1955 <a href="https://www.luogu.com.cn/problem/P1955">NOI2015] 程序自动分析 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)）</p>
<pre><code class="language-c++">pair&lt;ll, ll&gt; yes[Nn];
pair&lt;ll, ll&gt; no[Nn];
ll f[Nn];
ll lsh[Nn];
ll cnt;
int find(int x) {
    if (x == f[x]) {
        return x;
    }
    else {
        f[x] = find(f[x]);
        return f[x];
    }
}
int main() {
    fastread();
    ll t;
    cin &gt;&gt; t;
    while (t--) {
        ll k;
        cin &gt;&gt; k;
        ll a, b, c;
        ll ans = 0;
        ll ans1 = 0;
        for (int i = 1; i &lt;= k; i++) {
            cin &gt;&gt; a &gt;&gt; b &gt;&gt; c;
            if (c == 1) {
                ans++;
                yes[ans].first = a;
                yes[ans].second = b;
            }
            else {
                ans1++;
                no[ans1].first = a;
                no[ans1].second = b;
            }
            lsh[i * 2 - 1] = a;
            lsh[i * 2] = b;
        }
        sort(lsh + 1, lsh + 1 + 2 * k);
        cnt = unique(lsh + 1, lsh + 1 + 2 * k) - lsh - 1;
        for (int i = 1; i &lt;= ans; i++) {
            yes[i].first = lower_bound(lsh + 1, lsh + 1 + cnt, yes[i].first) - lsh;
            yes[i].second = lower_bound(lsh + 1, lsh + 1 + cnt, yes[i].second) - lsh;
        }
        for (int i = 1; i &lt;= ans1; i++) {
            no[i].first = lower_bound(lsh + 1, lsh + 1 + cnt, no[i].first) - lsh;
            no[i].second = lower_bound(lsh + 1, lsh + 1 + cnt, no[i].second) - lsh;
        }
        for (int i = 1; i &lt;= cnt; i++) {
            f[i] = i;
        }
        for (int i = 1; i &lt;= ans; i++) {
            int num1 = find(yes[i].first);
            int num2 = find(yes[i].second);
            if (num1 != num2) {
                f[num1] = num2;
            }
        }
        bool r = 0;
        for (int i = 1; i &lt;= ans1; i++) {
            int num1 = find(no[i].first);
            int num2 = find(no[i].second);
            if (num1 == num2) {
                r = 1;
                break;
            }
        }
        if (r) {
            cout &lt;&lt; &quot;NO&quot; &lt;&lt; endl;
        }
        else {
            cout &lt;&lt; &quot;YES&quot; &lt;&lt; endl;
        }
    }
    return 0;
    //该题运用了离散化和并查集的思想。
</code></pre>
<p>​	P4447 [AHOI2018初中组] 分组（[题目链接]([P4447 <a href="https://www.luogu.com.cn/problem/P4447">AHOI2018初中组] 分组 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)）</p>
<pre><code class="language-c++">int o[Nn];
int n;
int cnt=0;  //组数
int zu[Nn];
int siz[Nn];
int main() {
	fastread();
    cin &gt;&gt; n;
    for (int i = 1; i &lt;= n; i++) {
        cin &gt;&gt; o[i];
    }
    sort(o + 1, o + 1 + n);
    for (int i = 1; i &lt;= n; i++) {   //对每个人进行判断
        int wh = lower_bound(zu + 1, zu + 1 + cnt,o[i]) - zu;   //查询可以插进已有的哪个组里
        while (zu[wh + 1] == o[i] &amp;&amp; wh &lt; cnt) {  //寻找与之相等的最后一个数
            wh++;
        }
        if (wh &gt; cnt || zu[wh] != o[i]) {  //若没有能容纳该数的组则重新开一个组
            cnt++;
            siz[cnt] = 1;
            zu[cnt] = o[i] + 1;
        }
        else {  //若有 则更新数组
            siz[wh]++;
            zu[wh]++;
        }
    }
    int ans = MAXN;
    for (int i = 1; i &lt;= cnt; i++) {
        ans = min(siz[i], ans);
    }
    cout &lt;&lt; ans;
	return 0;
}
</code></pre>
<h2>二分答案</h2>
<p>​	二分答案的实质就是把前面二分搜索的数列变为我们答案的所有可能性，mid就是我们尝试的答案，二分答案的前题就是答案具有单调性。</p>
<pre><code class="language-c++">ll a, b;
ll l = 0, r = 1e9;       //二分左右区间 
ll mid;     //设定中间值
while (l &lt;= r) {    //二分
	ll sum = 0;    //记录check答案
	mid = l + r &gt;&gt; 1;      
	if(check(mid)){
        ans=mid;
        r=mid-1;  //视情况而定
    }else {
        l=mid+1;  //视情况而定
    }
}
</code></pre>
<h4>例题</h4>
<p>Cardboard for Pictures（[题目链接](<a href="https://codeforces.com/contest/1850/problem/E">Problem - E - Codeforces</a>)）</p>
<pre><code class="language-c++">ll o[NN];
int main() {
    fastread();
    int t;
    cin &gt;&gt; t;
    while (t--) {
        ll a, b;
        cin &gt;&gt; a &gt;&gt; b;
        for (int i = 1; i &lt;= a; i++) {
            cin &gt;&gt; o[i];
        }
        ll l = 0, r = 1e9;        
        ll mid;
        while (l &lt;= r) {
            ll sum = 0;
            mid = l + r &gt;&gt; 1;
            for (int i = 1; i &lt;= a; i++) {
                sum += (o[i] + mid + mid) * (o[i] + mid + mid);
                if (sum &gt; b) {
                    r = mid - 1;
                    break;
                }
            }
            if (sum == b) {
                cout &lt;&lt; mid &lt;&lt; endl;
                break;
            }
            else if (sum &lt; b) {
                l = mid + 1;
            }
        }
    }
    return 0;
}
</code></pre>
<p>​	该题并非标准二分答案</p>
<h2>悬线法</h2>
<p>​	用于求解最大子矩阵问题。</p>
<h4>思想与状态转移方程</h4>
<pre><code class="language-c++">if(满足条件){
    right[i][j]=min(right[i][j],right[i-1][j]);
    left[i][j]=max(left[i][j],left[i-1][j]);
    up[i][j]=up[i-1][j]+1;
}
//right表示从(i,j)这个点出发向右能到达最远的距离
//left和up差不多，一个向左，一个向上
</code></pre>
<h4>初始化</h4>
<pre><code class="language-c++">for(int i=1;i&lt;=n;i++) 
    for(int j=1;j&lt;=m;j++)
        right[i][j]=left[i][j]=j,up[i][j]=1;
for(int i=1;i&lt;=n;i++)
    for(int j=2;j&lt;=m;j++)
        if(满足条件)
            right[i][j]=right[i][j-1];
for(int i=1;i&lt;=n;i++)
    for(int j=m-1;j&gt;=1;j--)
        if(满足条件)
            left[i][j]=left[i][j+1];
</code></pre>
<h4>例题</h4>
<p>P4147 玉蟾宫（[题目链接](<a href="https://www.luogu.com.cn/problem/P4147">P4147 玉蟾宫 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)）</p>
<h5>变量</h5>
<pre><code class="language-c++">int ditu[nN][nN];  //输入的矩阵
int L[nN][nN];     //表示使悬线有此长度的左边最近的障碍
int R[nN][nN];     //表示使悬线有此长度的右边最近的障碍。
int H[nN][nN];     //（i,j）处悬挂的长度
int l[nN][nN];     //预处理 （i,j）处距离左最近的障碍
int r[nN][nN];     //预处理 （i,j）处距离右最近的障碍
</code></pre>
<h5>最大子矩阵计算公式</h5>
<pre><code class="language-C++">h(i,j)∗(R(i,j)−L(i,j)+1)
</code></pre>
<h5>对于障碍点的处理</h5>
<pre><code class="language-c++">int t;  //障碍点
for (int i = 1; i &lt;= n; i++) {
   	t = 0;
   	//左障碍点处理
    for (int j = 1; j &lt;= m; j++) {
    	if (ditu[i][j]) {
        	l[i][j] = t;
        }else {
            L[i][j] = 0, t = j;
        }
    }
    t = m + 1;
    //右障碍点处理
    for (int j = m; j &gt;= 1; j--) {
        if (ditu[i][j]) {
            r[i][j] = t;
        }else {
            R[i][j] = m+1, t = j;
        }
	}
}
</code></pre>
<h5>地图边界处理</h5>
<pre><code class="language-c++">//边界处理
for (int i = 1; i &lt;= m; i++) {
     R[0][i] = m + 1;
}
</code></pre>
<h5>代码实现</h5>
<pre><code class="language-c++">int main() {
    fastread();
    char a;
    int n, m;
    cin &gt;&gt; n &gt;&gt; m;
    //地图输入
    for (int i = 1; i &lt;= n; i++) {
        for (int j = 1; j &lt;= m; j++) {
            cin &gt;&gt; a;
            if (a == 'F')ditu[i][j] = 1;
        }
    }
    int t;  //障碍点
    for (int i = 1; i &lt;= n; i++) {
        t = 0;
        //左障碍点处理
        for (int j = 1; j &lt;= m; j++) {
            if (ditu[i][j]) {
                l[i][j] = t;
            }
            else {
                L[i][j] = 0, t = j;
            }
        }
        t = m + 1;
        //右障碍点处理
        for (int j = m; j &gt;= 1; j--) {
            if (ditu[i][j]) {
                r[i][j] = t;
            }
            else {
                R[i][j] = m+1, t = j;
            }
        }
    }
    //边界处理
    for (int i = 1; i &lt;= m; i++) {
        R[0][i] = m + 1;
    }
    int ans = 0;
    for (int i = 1; i &lt;= n; i++) {
        for (int j = 1; j &lt;= m; j++) {
            //若该点可取
            if (ditu[i][j]) {
                //对应悬线长度应比下方点长1
                H[i][j] = H[i - 1][j] + 1;
                L[i][j] = max(l[i][j] + 1, L[i - 1][j]);
                R[i][j] = min(r[i][j] - 1, R[i - 1][j]);
                ans = max(ans, (R[i][j] - L[i][j] + 1) * H[i][j]);
            }
        }
    }
    cout &lt;&lt; 3 * ans;
    return 0;
}
</code></pre>
<h2>三分法</h2>
<p>​		在区间内用两个mid将区间分成三份，这样的查找算法称为三分查找,也就是三分法，三分法常用于求解单峰函数的最值。  还有一种理解，即在二分查找的基础上，在左区间或者右区间上再进行一次二分。</p>
<h4>三分与二分的区别</h4>
<p>​		二分法适用于单调函数，而单峰函数用二分明显不太好了，对于有些单峰函数，可以求导后转化为单调函数，从而使用二分，然而很多情况求导是很麻烦的，这时就需要用到三分了。</p>
<h4>算法流程</h4>
<p>​	1.先将区间三分，每个区间的长度为1/3(right-left)</p>
<pre><code class="language-c++">midl=left+(right-left)/3;
midr=right-(right-left)/3;
</code></pre>
<p>​	2.比较mid1与mid2更谁更靠近极值，如果mid1更靠近极值，右区间改为mid2,否则左区间改为mid1（后面的代码都是  以求最大值为例）。</p>
<pre><code class="language-c++">if(check(mid1)&lt;check(mid2))
	left=mid1;
else
	right=mid2;
</code></pre>
<p>​	3.重复1,2过程，直到不满足left+eps&lt;right,也就是找到最值。</p>
<h4>模板</h4>
<pre><code class="language-c++">#define eps 10e-6
double check(double x) {} //计算题目所需要的值
int l = 1, r = 2 * n;  
while (r - l &gt;= eps) {  //三分法
    int midl = l + (r - l) / 3;  //三分左区间
    int midr = r - (r - l) / 3;  //三分右区间
    if(check(midl) &lt; check(midr)) {   //计算数据
        l = midl;  
    }
    else {
        r = midr;
    }
}
</code></pre>
<h4>例题</h4>
<p>P4653 [CEOI2017] Sure Bet（[题目链接]([P4653 <a href="https://www.luogu.com.cn/problem/P4653">CEOI2017] Sure Bet - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)）</p>
<pre><code class="language-c++">double a[Nn];
double b[Nn];
bool cmp(double a, double b) {
    return a &gt; b;
}
double check(int x) {
    double sum = 0;  //优先拿b的总和
    double sum2 = 0;  //优先拿a的总和
    int ia = 1;   //a数组指针
    int ib = 1;   //b数组指针
    double suma = 0, sumb = 0;   //a数组计算和 b数组记录和
    for (int i = 1; i &lt;= x; i++) {  //暴力计算
        if (suma &gt; sumb) {
            sumb += b[ib];
            ib++;
        }
        else {
            suma += a[ia];
            ia++;
        }
    }
    sum = min(suma, sumb) - (double)x;  //计算其一最小值
    ia = 1, ib = 1, suma = 0, sumb = 0;
    for (int i = 1; i &lt;= x; i++) {
        if (sumb &gt; suma) {
            suma += a[ia];
            ia++;
        }
        else {
            sumb += b[ib];
            ib++;
        }
    }
    sum2 = min(suma, sumb) - (double)x; //计算其二最小值
    return max(sum, sum2);  //将两个中的最大值返回
}
int main() {
    fastread();
    int n;
    cin &gt;&gt; n;
    for (int i = 1; i &lt;= n; i++) {
        cin &gt;&gt; a[i] &gt;&gt; b[i];
    }
    sort(a + 1, a + 1 + n, cmp); //将数据排序
    sort(b + 1, b + 1 + n, cmp);
    int l = 1, r = 2 * n;  //最小灯泡数量为1 最大灯泡数量为2*n
    while (r - l &gt;= 1000) {  //三分法
        int midl = l + (r - l) / 3;  //三分左区间
        int midr = r - (r - l) / 3;  //三分右区间
        if (check(midl) &lt; check(midr)) {   //计算数据
            l = midl;  
        }
        else {
            r = midr;
        }
    }
    double sumz = 0;
    for (int i = l-1; i &lt;= r+1; i++) {
        sumz = max(sumz, check(i));  //暴力
    }
    printf(&quot;%.4lf&quot;, sumz);
    return 0;
}
</code></pre>
<h2>逆序对</h2>
<p>​	归并排序是我们常用的八大排序中的一种，其排序思路中和快速排序算法一样使用到了递归的思想，同时在归并排序中还用到了一个算法，就是有序数组合并算法。配合递归与有序数组合并算法，归并排序能够高效且稳定的完成排序，归并排序的优点在于其时间复杂度低，稳定性高，但是缺点也是有的，那就是空间复杂度很高。</p>
<h4>模板</h4>
<pre><code class="language-c++">lll x[N], tmp[N] ;      //x[N] 需要排序的数组  tmp[N] 中间数组
ll merge_sort(int x[], int l, int r)//归并排序
{
    if(l&gt;=r) return;                        //当数组只剩一个数或者数组不存在，直接退出程序
    int mid = l + r &gt;&gt; 1;                   
    ll sum = merge_sort(l,mid) + merge_sort(mid+1,r);  //递归求左半边和右半边的逆序对总和
    int k=0 , i=l , j=mid + 1;              //k=0 中间数组指针 i=l 左边指针  j=mid + 1 右边指针
    while(i&lt;=mid &amp;&amp; j&lt;=r)                   //当左右指针都没读完
    {
        if(x[i]&lt;=x[j]) tmp[k++] = x[i++];   //归并到tmp[N]中
        else {
            tmp[k++] = x[j++];
            sum += mid - i + 1 ;
        }
    }
    while(i&lt;=mid) tmp[k++] = x[i++];        //当左指针读完，右边的数组全部放在tmp[N]后面
    while(j&lt;=r)   tmp[k++] = x[j++];        //当右指针读完，左边的数组全部放在tmp[N]后面
    
    for(int i=l,j=0;i&lt;=r;i++,j++) x[i]=tmp[j]; //最后把tmp[N]数组放回x[N] 
    return sum;
}
</code></pre>
<h4>例题</h4>
<p>​	p1908 逆序对（[题目链接](<a href="https://www.luogu.com.cn/problem/P1908">P1908 逆序对 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)）</p>
<pre><code class="language-c++">int t[Nn];
ll merge_sort(int x[], int l, int r)//归并排序
{
    if(l&gt;=r) return;                        //当数组只剩一个数或者数组不存在，直接退出程序
    int mid = l + r &gt;&gt; 1;                   
    ll sum = merge_sort(l,mid) + merge_sort(mid+1,r);  //递归求左半边和右半边的逆序对总和
    int k=0 , i=l , j=mid + 1;              //k=0 中间数组指针 i=l 左边指针  j=mid + 1 右边指针
    while(i&lt;=mid &amp;&amp; j&lt;=r)                   //当左右指针都没读完
    {
        if(x[i]&lt;=x[j]) tmp[k++] = x[i++];   //归并到tmp[N]中
        else {
            tmp[k++] = x[j++];
            sum += mid - i + 1 ;
        }
    }
    while(i&lt;=mid) tmp[k++] = x[i++];        //当左指针读完，右边的数组全部放在tmp[N]后面
    while(j&lt;=r)   tmp[k++] = x[j++];        //当右指针读完，左边的数组全部放在tmp[N]后面
    
    for(int i=l,j=0;i&lt;=r;i++,j++) x[i]=tmp[j]; //最后把tmp[N]数组放回x[N] 
    return sum;
}
int nn[Nn];
int main() {
    fastread();
    int n;
    cin &gt;&gt; n;
    for (int i = 1; i &lt;= n; i++) {
        cin &gt;&gt; nn[i];
    }
    cout &lt;&lt;  merge_sort(nn, 1, n); &lt;&lt; endl;
    return 0;
}
</code></pre>
<h2>RMQ</h2>
<p>​	即区间最值查询。RMQ算法一般用较长时间做预处理，时间复杂度为O(nlogn)，然后可以在O（1）的时间内处理每次查询。</p>
<h4>状态转移方程</h4>
<pre><code class="language-c++">void rmq_init()
{
    for(int i=1;i&lt;=N;i++)
        dp[i][0]=arr[i];//初始化
    for(int j=1;(1&lt;&lt;j)&lt;=N;j++)
        for(int i=1;i+(1&lt;&lt;j)-1&lt;=N;i++)
            dp[i][j]=min(dp[i][j-1],dp[i+(1&lt;&lt;j-1)][j-1]);
}
</code></pre>
<p>​	这里需要注意一个循环变量的顺序，我们看到外层循环变量为j，内层循环变量为i，这是为什么呢？可以互换一下位置吗？答案当然是不可以，我们要理解这个状态转移方程的意义，这个状态方程的含义是：先更新每两个元素中的最小值，然后通过每两个元素的最小值获得每4个元素中的最小值，依次类推更新所有长度的最小值。而如果是i在外，j在内的话，我们更新的顺序就变成了从1开始的前1个元素，前2个元素，前4个元素，前8个元素。当j等于3的时候dp[1][3] = min(min(arr[0],arr[1],arr[2],arr[3]),min(arr[4],arr[5],arr[6],arr[7])))的值，但是我们根本没有计算min(arr[0],arr[1],arr[2],arr[3])和min(arr[4],arr[5],arr[6],arr[7])，所以这样的方法肯定是错误的。为了避免这样的错误，一定要好好理解这个状态转移方程所代表的含义。</p>
<h4>查询代码</h4>
<pre><code class="language-c++">int rmq(int l,int r)
{
    int k=log2(r-l+1);
    return min(dp[l][k],dp[r-(1&lt;&lt;k)+1][k]);
}
</code></pre>
<h2>ST表</h2>
<p>​	位运算：(1&lt;&lt;k)=pow(2,k)</p>
<p>​	ST表（稀疏表）是一种简单的数据结构，主要用来解决RMQ（区间最大/最小值查询）问题。它主要应用倍增的思想，可以实现 O(nlogn)预处理、O(1)查询。</p>
<h4>RMQ预处理</h4>
<pre><code class="language-c++">int f[MAXN][21]; // 第二维的大小根据数据范围决定，不小于log(MAXN)，故遍历的时间复杂度是O(NlogN)
for (int i = 1; i &lt;= n; i++)
    f[i][0] = read(); // 读入数据
//这段转移过程的原理在于，先算出长度为2的区间max，再根据2的次数幂进一步扩散，而由于区间长度总是上一次的两倍
//所以可以直接两个上一次的答案推出这次的答案
for (int i = 1; i &lt;= (int)(log(n) / log(2)); i++) {
     for (int j = 1; j&lt;=n-(1&lt;&lt;i)+1; j++) {
          f[j][i] = max(f[j][i - 1], f[j + (1 &lt;&lt; (i - 1))][i - 1]);
     }
}
</code></pre>
<p>​	这个地方就是ST表的妙处之一，用第二维表示2的指数，也是一个很妙的思想了，这样大大节约了存储空间。</p>
<h4>查询过程</h4>
<pre><code class="language-c++">//查询m次
for (int i = 0; i &lt; m; ++i)
{
    int l = read(), r = read();
    int s = (int)(log(r - l + 1) / log(2));
    cout &lt;&lt; max(f[l][s], f[r - (1 &lt;&lt; s)+1][s]) &lt;&lt; endl;
}
</code></pre>
<h4>Log函数</h4>
<p>​	std::__lg() 这个函数，它是求log2的向下取整的值，O(1)复杂度。//在某些编译器不好用。</p>
<pre><code class="language-c++">1.LG=(int)(log(n)/log(2));//自动向下取整
2.(int)(log(r-l+1)/log(2))      //取log2
3.for (int i=2;i&lt;=n;i++) lg[i]=lg[i&gt;&gt;1]+1;//求lg[i]函数。
</code></pre>
<p>​	其实ST表不仅能处理最大值/最小值，凡是符合结合律且可重复贡献的信息查询都可以使用ST表高效进行。什么叫可重复贡献呢？设有一个二元运算 f(x,y) ，满足 f(a,a) = a 则 f 是可重复贡献的。显然最大值、最小值、最大公因数、最小公倍数、按位或、按位与都符合这个条件。可重复贡献的意义在于，可以对两个交集不为空的区间进行信息合并。</p>
<h4>例题</h4>
<p>P3865 【模板】ST 表（[题目链接](<a href="https://www.luogu.com.cn/problem/P3865">P3865 【模板】ST 表 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)）</p>
<p>求静态区间最大值</p>
<pre><code class="language-c++">int f[Nn][21];
int main() {
    fastread();
    int n, m;
    cin &gt;&gt; n &gt;&gt; m;
    for (int i = 1; i &lt;= n; i++) {
        cin &gt;&gt; f[i][0];
    }
    for (int i = 1; i &lt;= (int)(log(n) / log(2)); i++) {
        for (int j = 1; j&lt;=n-(1&lt;&lt;i)+1; j++) {
            f[j][i] = max(f[j][i - 1], f[j + (1 &lt;&lt; (i - 1))][i - 1]);
        }
    }
    while (m--) {
        int l, r;
        cin &gt;&gt; l &gt;&gt; r;
        int s = (int)(log(r - l + 1) / log(2));
        cout &lt;&lt; max(f[l][s], f[r - (1 &lt;&lt; s)+1][s]) &lt;&lt; &quot;\\n&quot;;
    }
    return 0;
}
</code></pre>
<h2>KMP算法</h2>
<p>​	Knuth-Morris-Pratt 字符串查找算法，简称为 “KMP算法”，常用于在一个文本串S内查找一个模式串P 的出现位置。、</p>
<p>​	是对BF算法(字符串暴力解法)的优化。</p>
<h4>参数表</h4>
<pre><code class="language-c++">int nextn[Nn];   //next数组
int len1;       //待匹配字符串长度
int len2;       //子串长度
string s1;      //待匹配字符串
string s2;      //子串 
len1=s1.size() , len2=s2.size();    //求取长度  
</code></pre>
<h4>next数组</h4>
<p>​	代表当前字符之前的字符串中，有多大长度的相同前缀后缀。例如如果next[j]=k，代表j之前的字符串中有最大长度为<em>k</em> 的相同前缀后缀。此也意味着在某个字符失配时，该字符对应的next 值会告诉你下一步匹配中，模式串应该跳到哪个位置（跳到next [j] 的位置）。</p>
<pre><code class="language-c++">int j=0;   //位置
for(int i=1;i&lt;len2;i++){   //计算字串的next数组
	while(j&gt;0&amp;&amp;s2[i]!=s2[j]){  //失配
		j=nextn[j-1];    
	}
	if(s2[i]==s2[j]){   //匹配上了
		j++;
	}
	nextn[i]=j;
}
</code></pre>
<p>​	next 数组的求解：就是找最大对称长度的前缀后缀，然后整体右移一位，初值赋为-1（当然，你也可以直接计算某个字符对应的next值，就是看这个字符之前的字符串中有多大长度的相同前缀后缀）。</p>
<h4>匹配</h4>
<pre><code class="language-c++">j=0;
for(int i=0;i&lt;len1;i++){
	while(j&gt;0&amp;&amp;s1[i]!=s2[j]){    //失配
		j=nextn[j-1];
	}
	if(s2[j]==s1[i]){   
		j++;
	}
	if(j==len2){           //匹配完成
		//题目要求
		j=nextn[j-1];
	}
}
</code></pre>
<h4>例题</h4>
<p>​	P3375 【模板】KMP 字符串匹配（[题目链接](<a href="https://www.luogu.com.cn/problem/P3375">P3375 【模板】KMP 字符串匹配 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)）</p>
<pre><code class="language-c++">int nextn[N];   //next数组
int len1;       //待匹配字符串长度
int len2;       //子串长度
string s1;      //待匹配字符串
string s2;      //子串
int main() {
    fastread();
	cin &gt;&gt; s1 &gt;&gt; s2;
    int j = 0;   //位置
	int len1 = s1.size();  int len2 = s2.size();    //求取长度
	for (int i = 1; i &lt; len2; i++) {   //计算字串的next数组
		while (j &gt; 0 &amp;&amp; s2[i] != s2[j]) {  //失配
			j = nextn[j - 1];
		}
		if (s2[i] == s2[j]) {   //匹配上了
			j++;
		}
		nextn[i] = j;
	}
	j = 0;
	for (int i = 0; i &lt; len1; i++) {
		while (j &gt; 0 &amp;&amp; s1[i] != s2[j]) {    //失配
			j = nextn[j - 1];
		}
		if (s2[j] == s1[i]) {
			j++;
		}
		if (j == len2) {           //匹配完成
			cout &lt;&lt; (i + 1) - len2 + 1 &lt;&lt; &quot;\\n&quot;;
			j = nextn[j - 1];
		}
	}
	for (int i = 0; i &lt; len2; i++) {
		cout &lt;&lt; nextn[i] &lt;&lt; &quot; &quot;;
	}
    return 0;
}
</code></pre>
<h4>拓展应用</h4>
<p>​	按照题意，读入字符串长度n和字符串ss ；</p>
<p>​	字符串ss最小长度的循环，我们称之为“ss的循环子串”，引入结论：</p>
<pre><code class="language-c++">ans=n-nextn[n]
</code></pre>
<h4>例题</h4>
<p>​	P4391 [BOI2009] Radio Transmission 无线传输（[题目链接]([P4391 <a href="https://www.luogu.com.cn/problem/P4391">BOI2009] Radio Transmission 无线传输 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)）</p>
<pre><code class="language-c++">ll nextn[Nn];   //next数组
ll len1;       //字符串长度
string s1;      //字符串
int main() {
    fastread();
	cin &gt;&gt; len1;
	cin &gt;&gt; s1;
    ll j = 0;
	for (ll i = 1; i &lt; len1; i++) {
		while (j &gt; 0 &amp;&amp; s1[i] != s1[j]) {  //失配
			j = nextn[j - 1];
		}
		if (s1[i] == s1[j]) {   //匹配上了
			j++;
		}
		nextn[i] = j;
	}
	cout &lt;&lt; len1 - nextn[len1-1];
    return 0;
}
</code></pre>
<h2>最小区间覆盖问题</h2>
<p>​	给定n个区间和一个范围[a, b],选择尽量少的区间，使得[a, b]能够被完全覆盖。</p>
<h4>贪心思路</h4>
<pre><code class="language-c++">while(剩余区间数目不为0)
{
    if(总长度已经超出覆盖范围)
    {
        结束循环；
    }
    for(循环查找符合条件的下一个最大区间)；
    if(找到了)
    {
        答案数+1；
        总长度 += 最大能切换的区间长度；
    }else
    {
        表示不能完全覆盖，退出循环，答案数 = 0；
    }
}
</code></pre>
<h4>模板</h4>
<pre><code class="language-c++">struct line {
    ll id = 0;
    ll l = 0;
    ll r = 0;
    line(ll id, ll l, ll chang) {
        this-&gt;id = id;
        this-&gt;l = l;
        this-&gt;r = l + chang - 1;
    }
};
void solve() {
    string k; cin &gt;&gt; k;
    ll n; cin &gt;&gt; n;
    vector&lt;line&gt;now;
    now.clear();
    for (int i = 0; i &lt; n; i++) {
        string x; cin &gt;&gt; x;
        for (int j = 0; j &lt; k.size() - x.size()+1; j++) {
            if (x == k.substr(j, x.size())) {
                now.push_back(line(i, j, x.size()));
            }
        }
    }
    if (now.size() == 0) {
        cout &lt;&lt; &quot;-1\\n&quot;; return;
    }
    sort(now.begin(), now.end(), [&amp;](line a, line b) {
        if (a.l != b.l)return a.l &lt; b.l;
        return a.r &gt; b.r;
        });
    if (now[0].l &gt; 0) {  //当第一个区间连0都不能覆盖的时候跳出程序
        cout &lt;&lt; &quot;-1\\n&quot;;
        return;
    }
    vector&lt;line&gt;ans;
    ans.clear();
    ans.push_back(now[0]);
    ll r = now[0].r; //当前能够覆盖的最右端
    ll rr = r;//用于判断当前区间的左端点是否在范围内
    ll cnt = 1;//当前选中的时第几个线段
    ll nn = now.size();//区间个数
    ll mm = k.size();//最大范围
    while (cnt &lt; nn &amp;&amp; rr &lt; mm - 1) {
        if (now[cnt].l &gt; rr+1) {//比前一个右端点还大，直接退出
            cout &lt;&lt; &quot;-1\\n&quot;; return;
        }
        ll id = -1;
        while (cnt &lt; nn &amp;&amp; r &lt; mm&amp;&amp;now[cnt].l &lt;= rr + 1) {
            if (now[cnt].r &gt; r) {
                id = cnt;
                r = now[cnt].r;
            }
            cnt++;
        }
        ans.push_back(now[id]);
        rr = r;
    }
    if (rr &lt; mm-1) { //没有完整覆盖
        cout &lt;&lt; &quot;-1\\n&quot;; return;
    }
    cout &lt;&lt; ans.size() &lt;&lt; &quot;\\n&quot;;
    for (int i = 0; i &lt; ans.size(); i++)cout &lt;&lt; ans[i].id + 1 &lt;&lt; &quot; &quot; &lt;&lt; ans[i].l + 1 &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h1>数据结构</h1>
<h2>并查集</h2>
<p>​		并查集可以高效的对元素进行分组（合并在一起），并且能快速的查询两个元素是否属于同一组。</p>
<h4>并查集的结构</h4>
<h5>合并</h5>
<p>​	并查集是一种树状结构。</p>
<h5>查询</h5>
<p>​	当我们要查询两个元素是否属于同一个组时，我们需要沿着各个节点往上向树的根进行查询，如果最终发现两个元素的根相同，那么他们就属于同一个组。反之，则不属于同一个组。</p>
<h4>模板</h4>
<pre><code class="language-c++">ll n;//共有n个元素
ll f[210000];//父节点数组
void init() {//初始化
    for (int i = 1; i &lt;= n; i++)f[i] = i;
}
ll Find(ll i) {//查询树根
    return f[i] == i ? f[i] : Find(f[i]);
}
void merge(int a, int b) {//合并树根
    f[Find(a)] = Find(b);
}
</code></pre>
<h4>路径压缩and避免退化（按秩合并）</h4>
<pre><code class="language-c++">ll n;//共有n个元素
ll f[210000];//父节点数组
ll h[210000];//高度节点数组
void Init() { //初始化
	for(int i=1; i&lt;=n; i++) {
		f[i] = i;
		h[i] = 0;
	}
}
int Find(int x) {//查询优化  路径压缩
    return f[x] == x ? f[x] : f[x] = Find(f[x]);//使元素直接指向树的根 
}
void merge(int a, int b) {//合并优化 避免退化（按秩合并）
	int fa = Find(a);
	int fb = Find(b);
	if(fa==fb) return; 
	if(h[fa] &lt; h[fb]) {  //如果元素 a对应的树的高度比 b小 
		f[fa] = fb;  //使元素 a的根指向元素 b的根 
	} else {
		f[fb] = fa;  //否则让元素 b的根指向元素 a的根 
		if(h[fa] == h[fb]) h[fa]++;// 如果两者对应的树的高度相同，则使新生成的树高度 +1 
	}
}
</code></pre>
<h2>哈夫曼树</h2>
<p>​	给定n个权值作为n个叶子结点，构造一棵二叉树，若树的带权路径长度达到最小，则这棵树被称为哈夫曼树。</p>
<h4>构造规则</h4>
<p>​	1.将w1、w2、…，wn看成是有n 棵树的森林(每棵树仅有一个结点)；</p>
<p>​	2.在森林中选出根结点的权值最小的两棵树进行合并，作为一棵新树的左、右子树，且新树的根结点权值为其左、右子树根结点权值之和；</p>
<p>​	3.从森林中删除选取的两棵树，并将新树加入森林；</p>
<p>​	4. 重复(02)、(03)步，直到森林中只剩一棵树为止，该树即为所求得的哈夫曼树。</p>
<h4>例题</h4>
<p>​	P2168 [NOI2015] 荷马史诗（[题目链接]([P2168 <a href="https://www.luogu.com.cn/problem/P2168">NOI2015] 荷马史诗 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)）</p>
<pre><code class="language-c++">ll n, m;
struct k {
    ll w, h;
};
bool operator &lt;(k a, k b) {
    if (a.w != b.w)return a.w &gt; b.w;
    return a.h &gt; b.h;
}
priority_queue&lt;k&gt;p;
ll ans, ww;
int main() {
    fastread();
    cin &gt;&gt; n &gt;&gt; m;
    for (int i = 1; i &lt;= n; i++) {
        cin &gt;&gt; ww;
        p.push(k{ ww,1 });
    }
    if ((n - 1) % (m - 1) != 0) {
        for (int i = 1; i &lt;= m - 1 - (n - 1) % (m - 1); i++) {
            p.push(k{ 0,1 });
        }
    }
    while (p.size()&gt;1) {
        k v;
        ll sum = 0, maxh = 0;
        for (int i = 1; i &lt;= m; i++) {
            v = p.top();
            sum += v.w;
            maxh = max(maxh, v.h);
            p.pop();
        }
        ans += sum;
        p.push(k{ sum,maxh + 1 });
    }
    cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot; &lt;&lt; p.top().h - 1;
    return 0;
}
</code></pre>
<h2>字典树</h2>
<p>​	Trie树，即字典树，是一种哈希树的变种。是一种用于快速查询某个字符串/字符前缀是否存在的数据结构。它的优点是：最大限度地减少无谓的字符串比较，查询效率比哈希表高。核心思想是空间换时间。利用字符串的公共前缀来降低查询时间的开销以达到提高效率的目的。</p>
<h4>参数表</h4>
<pre><code class="language-c++">int cnt[Nn];        //用于存取单词存在的次数
int word[Nn];       //用于记录以该节点为结尾的单词个数
int trie[Nn][26];   //每个节点均有可能含有26个子节点
int id = 0;         //字典树中每个节点的编号，id大小至于插入字典树的先后顺序有关
string k;   //输入的字符串
int ans = 0;  //含字串单词的最长长度
</code></pre>
<h4>插入函数</h4>
<pre><code class="language-c++">void insert(string x) {
    int p = 0;  //p代表查询与插入时的不断变化的当前节点编号，初始化为0，代表根节点
    int res = 0;    //表示字典树路径上存有别的单词的个数
    for (int i = 0; i &lt; x.size(); i++) { 
        int a = x[i] - 'a';   //映射小写数字
        if (trie[p][a] == 0) {   //若没有这个节点 
            trie[p][a] = ++id;   
        }
        p = trie[p][a];   //跳到该节点
        res += word[p];
    }
    word[p]++;   //以该节点为结尾的单词数加一
    if (res+1 &gt; ans) {   //若该串含子串的数量大于原定数值 则更新数值
        ans = res + 1;
    }
}
</code></pre>
<h4>查找函数</h4>
<pre><code class="language-c++">int find(string x) {  //查单词是否存在或者存在过多少次
    int p = 0;  //p代表查询与插入时的不断变化的当前节点编号，初始化为0，代表根节点
    for (int i = 0; i &lt; x.size(); i++) {
        int a = x[i] - 'a';   //映射小写数字
        if (trie[p][a] == 0) {  //若没有这个节点 
            return 0;    //返回0
        }
        p = trie[p][a];     
    }
    return word[p] ? cnt[p]++ : -1;  //是否存在 若存在增加单词存在次数
}
</code></pre>
<h4>例题</h4>
<p>P1481 魔族密码（[题目链接](<a href="https://www.luogu.com.cn/problem/P1481">P1481 魔族密码 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)）</p>
<pre><code class="language-c++">int main() {
    fastread();
    int n;
    cin &gt;&gt; n;
    for (int i = 1; i &lt;= n; i++) {
        cin &gt;&gt; k;
        insert(k);
    }
    cout &lt;&lt; ans;
    return 0;
}
</code></pre>
<p>P2580 于是他错误的点名开始了（[题目链接](<a href="https://www.luogu.com.cn/problem/P2580">P2580 于是他错误的点名开始了 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)）</p>
<pre><code class="language-c++">int main() {
    fastread();
    int n;
    cin &gt;&gt; n;
    for (int i = 1; i &lt;= n; i++) {
        cin &gt;&gt; k;
        insert(k);
    }
    int t;
    cin &gt;&gt; t;
    while (t--) {
        cin &gt;&gt; k;
        int u = find(k);
        if (u == -1) {
            cout &lt;&lt; &quot;WRONG\\n&quot;;
        }
        else if (u == 0) {
            cout &lt;&lt; &quot;OK\\n&quot;;
        }
        else {
            cout &lt;&lt; &quot;REPEAT\\n&quot;;
        }
    }
    return 0;
}
</code></pre>
<h2>01-Trie字典树</h2>
<p>​	01字典树（01-trie）是一种特殊的字典树，它的字符集只有{0,1}，主要用来解决一些关于二进制上的问题，例如异或问题和子集问题等。</p>
<h4>例题</h4>
<pre><code class="language-c++">struct k {
    int to;    //占比
    int w;   //权重
};
int s[Nn];
int trie[Nn][2];
vector&lt;k&gt; p[Nn];
int n;
int tot = 0;
void dfs(int x, int fa) {   //对数据进行预处理
    for (int i = 0; i &lt; p[x].size(); i++) {
        int next = p[x][i].to;
        if (next != fa) {
            s[next] = s[x] ^ p[x][i].w;  //和父节点的异或路径再异或一次
            dfs(next, x);
        }
    }
}
void insert(int val) {  
    int x = 0;
    for (int i = (1 &lt;&lt; 30); i; i &gt;&gt;= 1) { 
        int a = bool(val &amp; i);  //该为为0还是1
        if (!trie[x][a]) {    //插入节点
            trie[x][a] = ++tot;
        }
        x = trie[x][a];
    }
}
int find(int val) {
    int x = 0, ans = 0;
    for (int i = (1 &lt;&lt; 30); i; i &gt;&gt;= 1) {
        int a = bool(val &amp; i);
        if (trie[x][!a]) {  //优先取答案变为1的方向
            ans += i;
            x = trie[x][!a];
        }
        else {
            x = trie[x][a];
        }
    }
    return ans;
}
int main() {
    fastread();
    cin &gt;&gt; n;
    for (int i = 1; i &lt; n; i++) {
        int u, v, w;
        cin &gt;&gt; u &gt;&gt; v &gt;&gt; w;
        k a1,a2;
        a1.to = v; a1.w = w;
        a2.to = u; a2.w = w;
        p[u].push_back(a1);
        p[v].push_back(a2);
    }
    dfs(1, -1);  //树的建立,计算每个节点到根的异或路径
    for (int i = 1; i &lt;= n; i++) {
        insert(s[i]);
    }
    int ans = 0;
    for (int i = 1; i &lt;= n; i++) {   //每个值s[i]，都对应另一个数字
        ans = max(ans, find(s[i]));
    }
    cout &lt;&lt; ans;
    return 0;
}
</code></pre>
<h5>思路</h5>
<p>​	然后有一个定论：一个数，如果它两次异或同一个数，那么它是不会有改变的。那么i~j的路径上的异或和，就可以表示成根到i的异或和异或上根到j的异或和。那思路就很明确了：对于每一位进行贪心，如果这一位有一个与它不同的，即异或 后是1，那我们就顺着这条路往下走；否则就顺着原路往下走。这样贪心为什么是对的呢？因为当前这一位的权值比后面所有位数加起来还要高。就比如有一个数它的二进制表示是10...0（n个0）那么它比01...1(n-1个1）还要大。所以最高位决定一切。</p>
<h2>树状数组</h2>
<p>​	树状数组或二叉索引树（Binary Indexed Tree），又以其发明者命名为 Fenwick 树。其初衷是解决数据压缩里的累积频率的计算问题，现多用于高效计算数列的前缀和、区间和。它可以以 O(logn) 的时间得到任意前缀和。并同时支持在 O(logn) 时间内支持动态单点值的修改。空间复杂度 O(n)。</p>
<h4>与线段树的区别</h4>
<p>​	1.两者在复杂度上同级, 但是树状数组的常数明显优于线段树, 其编程复杂度也远小于线段树.</p>
<p>​	2.树状数组的作用被线段树完全涵盖, 凡是可以使用树状数组解决的问题, 使用线段树一定可以解决, 但是线段树能够解决的问题树状数组未必能够解决.</p>
<p>​	3.树状数组的突出特点是其编程的极端简洁性, 使用lowbit技术可以在很短的几步操作中完成树状数组的核心操作，其代码效率远高于线段树。</p>
<h4>实现</h4>
<h5>参数表</h5>
<pre><code class="language-c++">int o[Nn];  //原数组
int a[Nn];   //树状数组
int pre[Nn];  //a的前缀和数组
int n;    //原数组大小
int m;  //操作数
</code></pre>
<h5>树状数组初始化</h5>
<pre><code class="language-c++">void init(){
	for(int i=1;i&lt;=n;i++){
		pre[i]=pre[i-1]+o[i];
		a[i]=pre[i]-pre[i-(i&amp;-i)];
	}
}
</code></pre>
<h5>lowbit函数·</h5>
<p>​	将一个数转化为他的二进制，返回二的二进制下原数的末尾二次方，一个数的lowbit值就是他索引的数据个数.</p>
<p>​	返回原数二进制下的末尾2的数值。</p>
<pre><code class="language-c++">int lowbit(int x)
{
    return x&amp;-x;
}
</code></pre>
<h5>sum前缀和查询函数</h5>
<pre><code class="language-c++">int sum(int x){
	int res=0;
	for(int i=x;i;i-=(i&amp;-i)){
		res+=a[i];
	}
	return res;
}
</code></pre>
<h5>add单点更新函数</h5>
<pre><code class="language-c++">void add(int x,int y){
	for(int i=x;i&lt;=n;i+=(i&amp;-i)){
		a[i]+=y;
	}
}
</code></pre>
<h4>例题</h4>
<p>​	P3374 【模板】树状数组 1 （[题目链接](<a href="https://www.luogu.com.cn/problem/P3374">P3374 【模板】树状数组 1 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)）</p>
<pre><code class="language-c++">int main() {
    fastread();
    cin &gt;&gt; n &gt;&gt; m;
    for (int i = 1; i &lt;= n; i++) {
        cin &gt;&gt; o[i];
    }
    init();
    for (int i = 1; i &lt;= m; i++) {
        int k;
        int x, y;
        cin &gt;&gt; k &gt;&gt; x &gt;&gt; y;
        if (k == 1) {
            add(x, y);
        }
        else {
            cout &lt;&lt; sum(y)-sum(x-1)&lt;&lt;&quot;\\n&quot;;
        }
    }
    return 0;
}
</code></pre>
<h2>对顶堆</h2>
<p>​	对顶堆是由一个大顶堆和一个小顶堆组合而成的数据结构，与传统堆维护最大数不同，对顶堆用于动态维护第k大的数。在对顶堆中，小根堆位于大根堆的上方，要保证小根堆的所有数始终比大根堆大。</p>
<h4>原理</h4>
<p>​	对于对顶堆，我们可以用两个优先队列来表示两个堆。而他所维护的，我们可以看成一个单调的序列。</p>
<p>​	这时，我们对两个队列的队列元素数量进行维护（把队首从一个队列中弹出来，加入到另一个队列），那么就可以实现在每次查询第k大/第k小数时，直接访问其中一个队列的队首元素就可以了的。</p>
<h4>例题</h4>
<p>​	P1801 黑匣子（[题目链接](<a href="https://www.luogu.com.cn/problem/P1801">P1801 黑匣子 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)）</p>
<pre><code class="language-c++">int n, m;
int o[Nn];
priority_queue&lt;int&gt;p1;
priority_queue&lt;int, vector&lt;int&gt;, greater&lt;int&gt; &gt;p2;
int main() {
    fastread();
    cin &gt;&gt; n &gt;&gt; m;
    for (int i = 1; i &lt;= n; i++)cin &gt;&gt; o[i];
    int r = 1;
    int k;
    for (int i = 1; i &lt;= m; i++) {
        cin &gt;&gt; k;
        for (int j = r; j &lt;= k; j++) {
            p1.push(o[j]);
            if (p1.size() == i)p2.push(p1.top()), p1.pop();
        }
        r = k + 1;
        cout &lt;&lt; p2.top()&lt;&lt;&quot;\\n&quot;;
        p1.push(p2.top());
        p2.pop();
    }
    return 0;
}
</code></pre>
<p>​	P1168 中位数（[题目链接](<a href="https://www.luogu.com.cn/problem/P1168">P1168 中位数 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)）</p>
<pre><code class="language-c++">int n;
priority_queue&lt;int&gt;p1;
priority_queue&lt;int, vector&lt;int&gt;, greater&lt;int&gt; &gt;p2;
int main() {
    fastread();
    cin &gt;&gt; n;
    int k;
    cin &gt;&gt; k;
    cout &lt;&lt; k &lt;&lt; &quot;\\n&quot;;
    int mid = k;
    for (int i = 2; i &lt;= n; i++) {
        cin &gt;&gt; k;
        if (mid &gt;= k) {
            p1.push(k);
        }
        else {
            p2.push(k);
        }
        if (i % 2 == 1) {
            while (p1.size() != p2.size()) {
                if (p1.size() &gt; p2.size()) {
                    p2.push(mid);
                    mid = p1.top();
                    p1.pop();
                }
                else {
                    p1.push(mid);
                    mid = p2.top();
                    p2.pop();
                }
            }
            cout &lt;&lt; mid &lt;&lt; &quot;\\n&quot;;
        }
    }
    return 0;
}
</code></pre>
<h2>线段树</h2>
<p>​	线段树是一种二叉搜索树，而二叉搜索树，首先满足二叉树，即每个结点最多有两颗子树，并且是一颗搜索树，我们要知道，线段树的每个结点都存储了一个区间，也可以理解成一个线段，而搜索，就是在这些线段上进行搜索操作得到你想要的答案。</p>
<h4>线段树能解决的问题</h4>
<p>​	可以在线维护修改以及查询区间上的最值，求和。对于线段树来说，每次更新以及查询时间复杂度为O(logN)</p>
<p>​	解决动态区间查询。</p>
<h4>参数表</h4>
<pre><code class="language-c++">ll tr[Nn];  //存树
ll a[Nn];   //原数组
ll lazy[NN];   //lazy标记数组
</code></pre>
<h4>建树</h4>
<p>​	每个叶子节点的值就是数组的值，每个非叶子节点的入度均为2，左右两个叶子分别存储父节点的一半区间。每个父节点存储的值为两个孩子存储的值的最大值。</p>
<p>​	父节点和子节点下标的关系为：l=fa*2</p>
<p>​															r=fa*2+1</p>
<p>​	建树时每次递归就要先判断l是否等于r，等于的话就是说明是叶子节点，也就是区间[l,l]直接赋值成a[l]/a[r]再返回。</p>
<pre><code class="language-c++">//创建线段树
//id表示存储下标，区间[l,r]
void build(int id, int l, int r) {
    //左端点等于右端点，即为叶子节点（区间长度为1），直接赋值
    if (l == r) {
        tr[id] = a[l];
        return;
    }
    //否则将当前区间分裂为两个区间
    int mid = l + r &gt;&gt; 1;
    build(id * 2, l, mid);
    build(id * 2 + 1, mid + 1, r);
    //左右两个区间计算完成以后
    //合并到当前区间
    tr[id] = tr[id * 2] + tr[id * 2 + 1];  //更新父节点
}
</code></pre>
<h4>区间查询</h4>
<p>​	我们从跟节点往下递归，如果当前节点是要被查询的区间包含了的，则返回这个节点的信息，这样从根节点往下递归，时间复杂度也为O(logN)。</p>
<pre><code class="language-c++">//id表示树节点的编号，l r表示这个节点对应的区间
//x y表示查询的区间
int find_nolazy(int id, int l, int r, int x, int y) {
    //需要查询的区间[x,y]将当前区间[l,r]包含的时候
    if (x &lt;= l &amp;&amp; y &gt;= r)return tr[id];
    int mid = l + r &gt;&gt; 1;
    int ans = MAXN;
    //如果需要查询左半区间
    if (x &lt;= mid)ans = min(ans, find(id * 2, l, mid, x, y));
    //如果需要查询右半区间
    if (y &gt; mid)ans = min(ans, find(id * 2 + 1, mid + 1, r, x, y));
    return ans;
}
</code></pre>
<h4>单点更新</h4>
<p>​	从根节点递归去找a[x]找到了就返回，并再返回的一路上不断更新父节点的max值。</p>
<pre><code class="language-c++">//id表示树节点编号 l,r 表示这个节点所对应的区间
//将a[x]修改为v
//线段树单点更细
void diangx(int id, int l, int r, int x, int v) {
    //找到长度为1的区间才返回
    if (l == r) {
        tr[id] = v;
        return;
    }
    //否则找到x在左区间或者右区间去更新
    int mid = l + r &gt;&gt; 1;
    if (x &lt;= mid) {
        //需要修改的值在左区间
        diangx(id * 2, l, mid, x, v);
    }
    else {
        //需要修改的值在右区间
        diangx(id * 2 + 1, mid + 1, r, x, v);
    }
    tr[id] = max(tr[id * 2], tr[id * 2] + 1);
}
</code></pre>
<h4>区间更新</h4>
<p>​	在线段树中会遇到区间更新的情况，例如在区间求和问题中，令[a,b]区间内的值全部加c，若此时在采用单点更新的方法，就会耗费大量时间，这个时候就要用到懒标记(lazy标记)来进行区间更新。</p>
<p>​	lazy标记，又称延迟标记。</p>
<p>​	如果当前区间被需要修改的目标区间完全覆盖，打一个标记。如果下一次的查询或者更改包含此区间，那么将这个标记分解，并且传递给其左右儿子。简单的说，延迟标记在我们需要时，才向下传递信息，如果没有用到，则不再进行操作。</p>
<pre><code class="language-c++">//构建一个数据更新工具
void maketag(ll id, ll len, ll x) {
    lazy[id] += x;
    tr[id] += len * x;
}
void push_up(int id) {
    tr[id] = tr[id * 2] + tr[id * 2 + 1];
}
void push_down(ll id, ll l, ll r) {
    if (lazy[id]) {
        ll mid = (l + r) / 2;
        //将它左孩子的lazy加上他的lazy
        //左孩子的值加上他放下的值*区间长度
        maketag(id * 2, mid - l + 1, lazy[id]);  
        //将它右孩子的lazy加上他的lazy
        //右孩子的值加上他放下的值*区间长度
        maketag(id * 2 + 1, r - mid, lazy[id]);
        lazy[id] = 0;  //清空lazy标记
    }
}
//id为当前点的编号
//当前区间l r
//修改区间x y 增加的值为 v
void lrgx(int id, int l, int r, int x, int y, int v) {
    if (l &gt;= x &amp;&amp; r &lt;= y) {  //若暂时放不下他的值
        lazy[id] += v;
        tr[id] += v * (r - l + 1);
        return;
    }
    push_down(id, l, r);  //要来更新下面的节点 放下值
    int mid = l + r &gt;&gt; 1;
    if (x &lt;= mid)lrgx(id * 2, l, mid, x, y, v);  //因为只有x&lt;=mid才需要更新[l,mid]
    if (y &gt; mid)lrgx(id * 2 + 1, mid + 1, r, x, y, v);
    push_up(id); //自己节点更新完 父节点更新
}
</code></pre>
<h4>区间查询（lazy版）</h4>
<pre><code class="language-c++">//id为当前节点编号
//[l,r]为当前区间 目标区间为[x,y]
int find(int id, int l, int r, int x, int y) {
    int ans = 0;
    if (x &lt;= l &amp;&amp; y &gt;= r) {
        return tr[id];
    }
    //要查到id节点了 下放值
    push_down(id, l, r);
    int mid = l + r &gt;&gt; 1;
    if (x &lt;= mid)ans += find(id * 2, l, mid, x, y);
    if (y &gt; mid)ans += find(id * 2 + 1, mid + 1, r, x, y);
    return ans;
}
</code></pre>
<h2>线段树（更新版）</h2>
<h4>参数表</h4>
<pre><code class="language-c++">struct xianduan {
    ll l;   //当前节点左边界
    ll r;   //当前节点右边界
    ll val;  //当前节点的值
    ll lazy;  //当前节点lazy标记
}tr[N&lt;&lt;2];   //大小  线段树如果没有特别处理叶子节点的话，要开 8倍
ll a[Nn];  //原数组
</code></pre>
<h4>父节点更新</h4>
<pre><code class="language-c++">void pushup(ll id) {  //更新父节点
    tr[id].val = tr[id * 2].val + tr[id * 2 + 1].val;
}
</code></pre>
<h4>子节点更新</h4>
<pre><code class="language-c++">void pushdown(ll id) { //更新下面两个点的值和lazy值
    if(tr[id].lazy){
    	tr[id * 2].val += tr[id].lazy * (tr[id * 2].r - tr[id * 2].l + 1); 
    	tr[id * 2 + 1].val += tr[id].lazy * (tr[id * 2 + 1].r - tr[id * 2 + 1].l + 1);
    	tr[id * 2].lazy += tr[id].lazy;
    	tr[id * 2 + 1].lazy += tr[id].lazy;
    	tr[id].lazy = 0;
    }
}
</code></pre>
<h4>建树</h4>
<pre><code class="language-c++">void build(ll id, ll l, ll r) {
    if (l == r) {
        tr[id] = { l,r,a[l] };
        return;
    }
    else {
        tr[id] = { l,r };
    }
    ll mid = l + r &gt;&gt; 1;
    build(id * 2, l, mid);
    build(id * 2 + 1, mid + 1, r);
    pushup(id);
}
</code></pre>
<h4>区间更新</h4>
<pre><code class="language-c++">void qjgx(ll id, ll l, ll r, ll val) {
    if (tr[id].l &gt;= l &amp;&amp; tr[id].r &lt;= r) {  //如果当前节点的值在询问的值中间，则直接返回
        tr[id].val += (tr[id].r - tr[id].l + 1) * val;
        tr[id].lazy += val;
        return;
    }
    pushdown(id);
    ll mid = tr[id].l + tr[id].r &gt;&gt; 1;
    if (l &lt;= mid)qjgx(id * 2, l, r, val);
    if (r &gt; mid)qjgx(id * 2 + 1, l, r, val);
    pushup(id);
}
</code></pre>
<h4>查询函数</h4>
<pre><code class="language-c++">ll query(ll id, ll l, ll r) {
    ll ans = 0;
    if (tr[id].l &gt;= l &amp;&amp; tr[id].r &lt;= r) {
        return tr[id].val;
    }
    pushdown(id);
    ll mid = tr[id].l + tr[id].r &gt;&gt; 1;
    if (l &lt;= mid)ans += query(id * 2, l, r);
    if (r &gt; mid)ans += query(id * 2 + 1, l, r);
    return ans;
}
</code></pre>
<h1>搜索算法</h1>
<h2>DFS</h2>
<p>​	深度优先搜索算法（DFS），其过程为沿着每一个可能的路径向下进行搜索，直到不能再深入为止，并且每一个节点只能访问一次。</p>
<h4>原理</h4>
<ol>
<li>为了求得问题的解，先选择某一种可能情况向前探索；</li>
<li>在探索过程中，一旦发现原来的选择是错误的，就退回一步重新选择，继续向前探索；</li>
<li>如此反复进行，直至得到解或证明无解。</li>
</ol>
<h4>模板</h4>
<pre><code class="language-c++">int v[Nn];//是否被查询过
void dfs(int x) {
	if (满足条件) {
		保存结果;
		return;
	}
	for (寻找新状态) {
		if (状态合法) {
			v[当前点] = 1; //访问
			dfs(当前点);
			v[当前点] = 0; //状态回归
		}
	}
}
</code></pre>
<h2>BFS</h2>
<p>​	BFS（又称广度优先搜索）是最简便的图的搜索算法之一，这一算法也是很多重要的图的算法的原型。属于一种盲目搜寻法，目的是系统地展开并检查图中的所有节点，以找寻结果。</p>
<h4>原理</h4>
<p>​	1.初始化（初始化队列和所求的值）。</p>
<p>​	2.判空取队头（判断是否为空并取出队头）。</p>
<p>​	3.拓展（利用队头去扩展）。</p>
<p>​	4.判断入队（如果符合，将该点入队）。</p>
<h4>模板</h4>
<pre><code class="language-c++">void bfs(){
	queue&lt;int&gt;q;
	q.push(初始位置);//初始化
	while(q.size()){
        int t = q.front();
        q.pop();//取出队头的点，用该点向周围扩散。
		if(check(j)){       //如果该点可行就将它加入队列中
        q.psuh(j);//实施相应的操作 
        }
	} 
} 
</code></pre>
<h2>记忆化搜索</h2>
<p>​	记忆化搜索是一种搜索的形式，对搜索的结果用数组或其他数据结构记录下来。若当前状态搜索过了，则返回已存储的答案。这样，每个状态最多计算1次。</p>
<h4>记忆化搜索与动态规划</h4>
<p>​	相比较于记忆化搜索，动态规划一般要遍历所有的状态，甚至包括一些不可行的状态，而记忆化搜索可以进行剪枝包括可行性剪枝、最优性剪枝等，避免了一些多余的计算。</p>
<h4>例题</h4>
<p>​	P1434 [SHOI2002] 滑雪（[题目链接]([P1434 <a href="https://www.luogu.com.cn/problem/P1434">SHOI2002] 滑雪 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)）</p>
<pre><code class="language-c++">int ditu[nn][nn];
int dp[nn][nn];  //用于记忆化搜索 保存当前点答案
int n, m;
int dfs(int x, int y) {
    if (x &gt; n || x&lt;1 || y&gt;m || y &lt; 1)return 0;
    if (dp[x][y] != -1)return dp[x][y];
    int ans = 0;
    if (ditu[x][y] &gt; ditu[x + 1][y])ans = max(ans, dfs(x + 1, y));
    if (ditu[x][y] &gt; ditu[x][y + 1])ans = max(ans, dfs(x, y + 1));
    if (ditu[x][y] &gt; ditu[x - 1][y])ans = max(ans, dfs(x - 1, y));
    if (ditu[x][y] &gt; ditu[x][y - 1])ans = max(ans, dfs(x, y - 1));
    return dp[x][y] = ans + 1;
}
int main() {
	fastread();
    cin &gt;&gt; n &gt;&gt; m;
    memset(dp, -1, sizeof(dp));
    for (int i = 1; i &lt;= n; i++) {
        for (int j = 1; j &lt;= m; j++) {
            cin &gt;&gt; ditu[i][j];
        }
    }
    int ans = 0;
    for (int i = 1; i &lt;= n; i++) {
        for (int j = 1; j &lt;= m; j++) {
            ans = max(ans, dfs(i, j));
        }
    }
    cout &lt;&lt; ans;
	return 0;
}
</code></pre>
<p>​	注：记忆化搜索都可以转成动态规划，但是动态规划却不一定能转成记忆化搜索。</p>
<h2>状态剪枝</h2>
<p>​	状态剪枝分为可行性剪枝和最优性剪枝两种。</p>
<h4>可行性剪枝</h4>
<p>​	保证当前搜索的状态是合法的，并且从当前状态至少可以找到一个最终解。</p>
<h4>最优性剪枝</h4>
<p>​	在搜索过程中已经得出一了上述一个解x，在某个状态中，发现当前状态在最优情况下到达终点所得到的解也不优于已得到的解x，则可以直接返回剪枝返回。</p>
<h5>额外的策略选择</h5>
<p>​	1.使用贪心方法，将可能性最大的决策优先枚举。</p>
<p>​	2.目前状态中，如果可以比较方便的判断出后面任何决策都无法时当前状态相比于已经得到的最优解更优，则可以立即放弃继续搜索下去。</p>
<h4>卡时技巧</h4>
<p>​	记录已经搜过的节点数量cnt，当cnt的值超过一定数量时退出程序，直接将目前已经掌握的最佳答案输出。使用卡时技巧带有一些赌的成分，需要赌已经搜索到的答案就为最佳答案。</p>
<h5>退出方式</h5>
<pre><code class="language-c++">#include &lt;cstdlib&gt;  //引入头文件
exit(0)  //退出操作
</code></pre>
<h4>例题</h4>
<p>​	P1120 小木棍（[题目链接](<a href="https://www.luogu.com.cn/problem/P1120">P1120 小木棍 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)）</p>
<pre><code class="language-c++">int n;int o[nN];int sum;int v[nN];int minn[nN];int p;
void dfs(int a, int b, int c) {  //a为当前木棒差的长度 b为还有多少根没有拼 c为当前最短棍长度
    if (a == 0) {  //当前木棍拼完了
        dfs(p, b - 1, o[n]);return;
    }
    if (b == 0) { //找到解了
        cout &lt;&lt; p; exit(0);
    }
    if (c &gt; a) {  //最短木棍比差的还长
        c = a;
    }
    while (c &amp;&amp; v[c] == 0) {
        c--;
    }
    while (c) {
        if (v[c]) {  //换棍子
            v[c]--;
            dfs(a - c, b, c);
            v[c]++;
            if (a == c || a == p)return;
            c = minn[c];
        }
        else {
            c = minn[c];
        }
    }
}
int main() {
    fastread();
    cin &gt;&gt; n;
    for (int i = 1; i &lt;= n; i++) {
        cin &gt;&gt; o[i];
        v[o[i]]++;
        sum += o[i];
    }
    sort(o + 1, o + 1 + n);
    for (int i = 1; i &lt;= n; i++) {
        if (o[i] != o[i - 1])minn[o[i]] = o[i - 1];
    }
    for (p = o[n]; (p&lt;&lt;1) &lt;= sum ; p++) {
        if (sum % p == 0)dfs(p, sum / p, o[n]);
    }
    cout &lt;&lt; sum;
    return 0;
}
</code></pre>
<h2>IDS迭代加深搜索</h2>
<p>​	迭代加深搜索。</p>
<h4>算法原理</h4>
<p>​    迭代加深搜索就是控制了搜索深度的dfs,总体来看像一个bfs,这样将深搜和广搜结合起来，且通过剪枝灵活地控制宽度与深度，就很好的解决了dfs时间复杂度高和bfs队列高内存的弊端，提高了搜索的效率。</p>
<p>​	这种通过枚举深度来进行搜索的算法就为IDS迭代加深搜索算法。</p>
<h4>例题</h4>
<p>​	P1763 埃及分数（[题目链接](<a href="https://www.luogu.com.cn/problem/P1763">P1763 埃及分数 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)）</p>
<pre><code class="language-c++">ll n, m;ll dep;//深度ll flag;ll ans[nN];ll num[nN];
ll gcd(ll a, ll b)
{
    if (b) while ((a %= b) &amp;&amp; (b %= a));
    return a + b;
}
void dfs(ll a, ll b, ll c) {
    if (c &gt; dep) {
        return;
    }
    if (a == 1 &amp;&amp; b &gt; num[c - 1]) {
        num[c] = b;
        if (!flag || num[c] &lt; ans[c]) {
            for (int i = 1; i &lt;= dep; i++)ans[i] = num[i];
            flag = 1;
            return;
        }
    }
    ll l = max(b / a, num[c - 1] + 1);
    ll r = (dep + 1 - c) * b / a;
    if (flag &amp;&amp; r &gt;= ans[dep])r = ans[dep] - 1;
    for (ll i = l; i &lt; r; i++) {
        num[c] = i;
        ll u = gcd(a * i - b, b * i);
        dfs((a * i - b) / u, b * i / u, c + 1);
    }
}
int main() {
    fastread();
    cin &gt;&gt; n &gt;&gt; m;
    ll z = gcd(n, m);
    n /= z, m /= z;
    num[0] = 1;
    for (dep = 1; dep &lt;= 10; dep++) {
        dfs(n, m, 1);
        if (flag) {
            for (int i = 1; i &lt;= dep; i++) {
                cout &lt;&lt; ans[i] &lt;&lt; &quot; &quot;;
            }
            break;
        }
    }
    return 0;
}
</code></pre>
<h1>动态规划</h1>
<p>​	动态规划（Dynamic programming，简称DP）是一种将复杂问题分解成很多子问题，并将子问题的求解结果存储起来避免重复求解的一种算法。动态规划一般用来解决最优问题。而解决问题的过程，需要经历多个决策阶段。每个决策阶段都对应着一组状态。最后通过一组决策序列（动态转移方程），产生最终期望的最优解。</p>
<h4>动态规划三要素</h4>
<p>​	1.最优子结构</p>
<p>​		要推导出全局最优解，需要推导出子问题的最优解。</p>
<p>​	2.无后效性</p>
<p>​		在推到后续状态时，无需关心前面的状态是怎么推导出来的，只需关心前面阶段的状态值。</p>
<p>​		某一阶段的状态一旦确定，就不会受之后阶段的决策影响。</p>
<p>​	3.重复子问题</p>
<p>​		不同的决策，达到某个相同的阶段有可能会产生重复的状态。</p>
<h4>基本思路</h4>
<p>​	1.确定状态</p>
<p>​		将原问题划分为若干个阶段，每个阶段对应一个子问题，提取子问题的状态；</p>
<p>​		一般是从最后一步从底层一步一步往上逆推。</p>
<p>​	2.确定状态转移方程</p>
<p>​		寻找每一个状态的可能决策，各状态间的相互转移方式。</p>
<p>​	3.确定开始以及边界条件</p>
<p>​	4.按照顺序求解每个阶段的问题</p>
<h2>背包问题</h2>
<h4>0-1背包问题</h4>
<p>​	每件物品只有一件，可以选择装与不装。</p>
<p>​	递推式：
$$
dp[j] = max(dp[j], dp[j - tt] + vv);
$$</p>
<h5>例题</h5>
<p>​		P1048 [NOIP2005 普及组] 采药（[题目链接]([P1048 <a href="https://www.luogu.com.cn/problem/P1048">NOIP2005 普及组] 采药 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)）</p>
<p>​		思路：将问题压缩到时间上，在输入每个数据后，对该数据在时间轴中各节点是否取做判断，最后输出结果。逆序进行第二层循环是为了避免重复选择</p>
<pre><code>int ti[Nn];
int main() {
	fastread();
    int t, m;
    cin &gt;&gt; t &gt;&gt; m;
    for (int i = 1; i &lt;= m; i++) {
        int tt, vv;
        cin &gt;&gt; tt &gt;&gt; vv;
        if (tt &gt; t)continue;
        for (int j = t; j &gt;= tt; j--) {
            ti[j] = max(ti[j], ti[j - tt] + vv);
        }
    }
    cout &lt;&lt; ti[t];
	return 0;
}
</code></pre>
<h4>完全背包问题</h4>
<p>​	每个物品有无数件，只要空间足够多，一种物品可以拿满。</p>
<p>​	递推式：
$$
dp[j]=max(dp[j],dp[j-v[i]]+w[i])
$$
​	我们正序遍历第二层循环的情况下就可以进行空间优化。</p>
<h5>例题</h5>
<p>​		P1616 疯狂的采药（[题目链接](<a href="https://www.luogu.com.cn/problem/P1616">P1616 疯狂的采药 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)）</p>
<pre><code class="language-c++">ll dp[NN];
int main() {
    fastread();
    ll n, m;
    cin &gt;&gt; n &gt;&gt; m;
    for (int i = 1; i &lt;= m; i++) {
        ll a, b;
        cin &gt;&gt; a &gt;&gt; b;
        for (int j = a; j &lt;= n; j++) {
            dp[j] = max(dp[j], dp[j - a] + b);
        }
    }
    cout &lt;&lt; dp[n];
    return 0;
}
</code></pre>
<h2>线性动态规划</h2>
<p>​	一类状态定义与题设内容线性相关的动态规划。</p>
<h4>子序列与子串的区别</h4>
<p>​	子串：按原顺序依次出现，禁止跳过某元素</p>
<p>​	子序列：在保持元素前后关系的前提下，可以跳过某些元素的序列</p>
<h4>LIS问题</h4>
<p>​	最长上升子序列。</p>
<p>​	且在不严格来讲，最长不降子序列也属于LIS问题。</p>
<h5>动态规划解法：</h5>
<p>​		状态设计：dp[i]代表以A[i]结尾的LIS的长度。</p>
<p>​		状态转移：
$$
dp[i]=max(dp[i],dp[j]+1)
$$
​		边界处理：dp[i]=1</p>
<p>​		时间复杂度：O(n^2)</p>
<h6>例题</h6>
<p>​	P1020 [NOIP1999 普及组] 导弹拦截（[题目链接]([P1020 <a href="https://www.luogu.com.cn/problem/P1020">NOIP1999 普及组] 导弹拦截 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)）</p>
<pre><code class="language-c++">int dp[Nn];
int a[Nn];
int main() {
    fastread();
    int n = 0;
    int ans = 0;
    while (cin &gt;&gt; a[++n]);
    for (int i = 1; i &lt;= n-1; i++) {  //求最长不增子序列
        dp[i] = 1;
        for (int j = 1; j &lt; i; j++) {
            if (a[j] &gt;= a[i]) {
                dp[i] = max(dp[i], dp[j] + 1);
            }
        }
        ans = max(ans, dp[i]);
    }
    cout &lt;&lt; ans&lt;&lt;&quot;\\n&quot;;
    ans = 0;
    for (int i = 1; i &lt;= n - 1; i++) {  //求最长上升子序列
        dp[i] = 1;
        for (int j = 1; j &lt; i; j++) {
            if (a[j] &lt; a[i]) {
                dp[i] = max(dp[i], dp[j] + 1);
            }
        }
        ans = max(ans, dp[i]);
    }
    cout &lt;&lt; ans;
    return 0;
}
</code></pre>
<h5>贪心+二分解法</h5>
<p>​		新建一个low数组，low[i]表示长度为i的LIS结尾元素的最小值。对于一个上升子序列，显然其结尾元素越小，越有利于在后面接其他的元素，也就越可能变得更长。因此，我们只需要维护low数组，对于每一个a[i]，如果a[i] &gt; low[当前最长的LIS长度]，就把a[i]接到当前最长的LIS后面，即low[++当前最长的LIS长度]=a[i]。</p>
<p>​		对于每一个a[i]，如果a[i]能接到LIS后面，就接上去；否则，就用a[i]取更新low数组。具体方法是，在low数组中找到第一	个大于等于a[i]的元素low[j]，用a[i]去更新low[j]。如果从头到尾扫一遍low数组的话，时间复杂度仍是O(n^2)。我们注意到	low数组内部一定是单调不降的，所有我们可以二分low数组，找出第一个大于等于a[i]的元素。二分一次low数组的时间复	杂度的O(logn)，所以总的时间复杂度是O(nlogn)。</p>
<h6>例题</h6>
<p>​	P1020 [NOIP1999 普及组] 导弹拦截（[题目链接]([P1020 <a href="https://www.luogu.com.cn/problem/P1020">NOIP1999 普及组] 导弹拦截 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)）</p>
<pre><code class="language-c++">int low[Nn];
int a[Nn];
int low2[Nn];
int main() {
    fastread();
    int n = 0;
    while (cin &gt;&gt; a[++n]);
    memset(low, MAXN, sizeof(low));
    memset(low2, MAXN, sizeof(low2));
    low[1] = a[1];
    low2[1] = a[1];
    int ans = 1;
    int ans2 = 1;
    n--;
    for (int i = 2; i &lt;= n; i++) { 
        if (a[i] &lt;= low[ans]) {//求最长不增子序列
            low[++ans] = a[i];
        }
        else {
            low[upper_bound(low + 1, low + 1 + ans, a[i], greater&lt;int&gt;()) - low] = a[i];
        }
        if (a[i] &gt; low2[ans2]) {//求最长上升子序列
            low2[++ans2] = a[i];
        }
        else {
            low2[lower_bound(low2 + 1, low2 + 1 + ans2, a[i]) - low2] = a[i];
        }
    }
    cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot; &lt;&lt; ans2;
    return 0;
}
</code></pre>
<h4>LCS问题</h4>
<p>​	最长公共子序列。</p>
<p>​	状态转移方程：
$$
dp[i][j]=max(max(dp[i-1][j],dp[i][j]),dp[i-1][j-1]+(a[i-1]==b[j-1]))
$$
​	dp中的i，j表示字符串a前i个字符与字符串b前j个字符的最长公共子序列。</p>
<h5>例题</h5>
<p>​	P2758 编辑距离（[题目链接](<a href="https://www.luogu.com.cn/problem/P2758">P2758 编辑距离 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)）</p>
<pre><code class="language-c++">int dp[nN][nN];
string a, b;
int main() {
    fastread();
    cin &gt;&gt; a &gt;&gt; b;
    
    for (int i = 1; i &lt;= a.size(); i++) {
        for (int j = 1; j &lt;= b.size(); j++) {
            dp[i][j] = min(min(dp[i - 1][j] + 1, dp[i][j - 1] + 1), dp[i - 1][j - 1] + (a[i - 1] != b[j - 1]));
        }
    }
    cout &lt;&lt; dp[a.size()][b.size()];
    return 0;
}
</code></pre>
<h4>LCS问题转化为LIS问题</h4>
<p>​	给定一个A序列和一个B序列，我们想求出他们的最长公共子序列，可见这是一个LCS问题。但是如果我们将两个序列的所有最长公共子序列分别比较，时间将会很长。</p>
<p>​	此时，我们想到如下优化方式：将B序列的数字编号，对应到A数组中，在A数组中寻找最长上升子序列，该最长子序列就为两序列的最长公共子序列，如此LCS问题转化为LIS问题。</p>
<h5>例题</h5>
<p>​	P1439 【模板】最长公共子序列（[题目链接](<a href="https://www.luogu.com.cn/problem/P1439">P1439 【模板】最长公共子序列 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a>)）</p>
<pre><code class="language-c++">int o[Nn];
int n;
map&lt;int, int&gt;p;
int low[Nn];
int main() {
    fastread();
    cin &gt;&gt; n;
    for (int i = 1; i &lt;= n; i++)cin &gt;&gt; o[i];
    for (int i = 1; i &lt;= n; i++) {  //离散化
        int k; cin &gt;&gt; k; p[k] = i;
    }
    int ans = 0;
    for (int i = 1; i &lt;= n; i++) {
        if (p[o[i]] &gt; low[ans]) {  //LIS求最长不降子序列
            low[++ans] = p[o[i]];
        }
        else {
            low[lower_bound(low + 1, low + 1 + ans, p[o[i]]) - low] = p[o[i]];
        }
    }
    cout &lt;&lt; ans;
    return 0;
}
</code></pre>
<h1>图论</h1>
<h2>图形旋转</h2>
<h4>顺时针旋转90°</h4>
<pre><code class="language-c++">for (int i = 1; i &lt;= n; i++) {
    for (int j = i + 1; j &lt;= n; j++) {
        swap(o2[i][j], o2[j][i]);
    }
}
for (int i = 1; i &lt;= n; i++) {
    for (int j = 1; j &lt;= n / 2; j++) {
        swap(o2[i][j], o2[i][n - j + 1]);
    }
}
</code></pre>
<h2>树</h2>
<p>​	树是n(n&gt;=0)个结点的有限集合。当n=0的时候，树为空树。</p>
<h4>树的基本特征</h4>
<p>​	1.有且仅有一个特定的称为根的结点。</p>
<p>​	2.当n&gt;1的时候，其余节点可分为m(m&gt;0)个互不相交的有限集，其中每个集合本身又是一颗树，并且称为根的子树。</p>
<p>​	3.树的根节点没有前驱节点，除根结点外所有结点有且仅有一个前驱。</p>
<p>​	4.树中所有结点可以有零个或多个后继。</p>
<h4>性质</h4>
<p>​	1.树中的结点数等于所有结点的度数加1。</p>
<p>​	2.度为m的树中第i层上至多有m^i-1^个结点。</p>
<p>​	3.高度为h的m叉树至多有(m^h^-1)/(m-1)个结点。</p>
<p>​	4.具有n个结点的m叉树的最小高度为log_m^n(m-1)+1^</p>
<h4>树的遍历</h4>
<ol>
<li>先根遍历。若树非空，先访问根结点，再依次遍历根结点的每棵子树，遍历子树时仍遵循先根后子树的规则。其遍历序列与这棵树相应二叉树的先序序列相同。</li>
<li>后根遍历。若树非空，先依次遍历根结点的每棵子树，再访问根结点，遍历子树时仍遵循先子树后根的规则。其遍历序列与这棵树相应二叉树的中序序列相同。</li>
</ol>
<h2>二叉树</h2>
<p>​	二叉树是另一种树形结构，其特点是每个结点至多只有两棵子树( 即二叉树中不存在度大于2的结点)，并且二叉树的子树有左右之分，其次序不能任意颠倒。</p>
<h4>特殊的二叉树</h4>
<p>​	1.斜树：所有的结点都只有左子树的二叉树叫左斜树。所有结点都是只有右子树的二叉树叫右斜树。这两者统称为斜树。</p>
<p>​	2.满二叉树：一个高度为h，且含有2^h^-1个结点的二叉树。</p>
<p>​	3.完全二叉树：高度为h，有n个结点的二叉树，当且仅当每个结点都与高度为h的满二叉树中1-n的结点一一对应的时候，称为完全二叉树。</p>
<p>​	4.二叉排序树：左子树上所有结点的关键字均小于根结点的关键字；右子树上的所有结点的关键字均大于根节点的关键字；左子树和右子树又格式一颗二叉排序树。</p>
<p>​	5.平衡二叉树：树上任意结点的左子树和右子树的深度之差不超过1。</p>
<h4>二叉树遍历</h4>
<p>​	1.先序遍历：若树为空，则不进行操作，否则：访问根节点，访问左子树，访问右子树。</p>
<p>​	2.中序遍历：若树为空，则不进行操作，否则：访问左子树，访问根节点，访问右子树。</p>
<p>​	3.后序遍历：若树为空，则不进行操作，否则：访问左子树，访问右子树，访问根节点。</p>
<p>​	4.层序遍历：按照1，2，3....的层次顺序，对二叉树中的各个结点进行访问。</p>
<h4>由遍历序列构造二叉树</h4>
<p>​	1.已知先序遍历和中序遍历</p>
<p>​	遍历先序遍历中的字符，根据拿出的字符去中序遍历中查找对应位置，该位置左边为以拿出字符为根节点的左子树右边为右子树。重复以上操作，最终构建出原二叉树。</p>
<pre><code class="language-c++">string a;//中序遍历
string b;//先序遍历
void hou(ll x, ll y, ll l, ll r) { //输出后续遍历
    if (x &gt; y || l &gt; r)return;
    ll mid = a.find(b[x]);
    hou(x + 1, x + mid - l, l, mid - 1);
    hou(x + mid - l + 1, y, mid + 1, r);
    cout &lt;&lt; b[x];
}
</code></pre>
<p>​	2.已知后序遍历和中序遍历</p>
<p>​	从后向前遍历后序遍历中的字符，根据拿出的字符去中序遍历中查找对应位置，该位置左边为以拿出字符为根节点的左子树右边为右子树。重复以上操作，最终构建出原二叉树。</p>
<pre><code class="language-c++">string a;//中序遍历
string b;//后序遍历
void xian(ll x, ll y, ll l, ll r) { //输出先序遍历
    if (x &gt; y || l &gt; r)return;
    ll mid = a.find(b[r]);
    cout &lt;&lt; b[r];
    xian(x, mid - 1, l, r - y + mid - 1);
    xian(mid + 1, y, l + mid - x, r - 1);
}
</code></pre>
<p>​	3.已知层序遍历和中序遍历（与第一个相似）</p>
<p>​	遍历层序遍历中的字符，根据拿出的字符去中序遍历中查找对应位置，该位置左边为以拿出字符为根节点的左子树右边为右子树。重复以上操作，最终构建出原二叉树。</p>
<h4>线索二叉树</h4>
<p>​	我们将对二叉树以某种次序遍历使其变为线索二叉树的过程称为线索化 。</p>
<p>​	二叉树的线索化是将二叉链表中的空指针改为指向前驱或后继的线索。而前驱或后继的信息只有在遍历时才能得到，因此线索化的实质就是遍历一次二叉树，线索化的过程就是在遍历的过程中修改空指针的过程。</p>
<p>​	目的：加快查找结点的前驱和后继的速度。</p>
<h5>名词解释</h5>
<p>​	1.线索：指向前驱和后继结点的指针</p>
<p>​	2.线索化：对二叉树以先序次序（中序，后序）遍历的过程中将结点的空指针域改为线索的过程，叫做'线索化'。</p>
<p>​	3.线索二叉树：经过线索化的二叉树。</p>
<p>​	4.线索链表：以线索二叉树的结点结构存储的含有线索的二叉链表</p>
<h4>三种线索二叉树</h4>
<p>​	1.前序线索二叉树</p>
<p>​	2.中序线索二叉树</p>
<p>​	3.后序线索二叉树</p>
<p>​	以上三种二叉树，均根据已知的前中后序序列，对整个二叉树进行操作。当二叉树上某一节结点缺少左孩子，则将左孩子指向他的前驱结点（该前驱结点表示的是在序列中该结点前面的结点）；当二叉树上某一节结点缺少右孩子，则将右孩子指向他的后继结点（该后继结点表示的是在序列中该结点后面的结点）</p>
<h4>树转化为二叉树</h4>
<p>​	树转换为二义树的规则:每个结点左指针指向它的第一个孩子，右指针指向它在树中的相邻右兄弟，这个规则又称“左孩子右兄弟”。由于根结点没有兄弟，所以对应的二叉树没有右子树。</p>
<h5>画法</h5>
<p>​	1.在兄弟结点之间加一连线。</p>
<p>​	2.对每个结点，只保留它与第一个孩子的连线，而与其他孩子的连线全部抹掉。</p>
<p>​	3.以树根为轴心，顺时针旋转45°。</p>
<h4>森林转化为二叉树</h4>
<p>​	森林是由若干棵树组成的，所以完全可以理解为,森林中的每一棵树都是兄弟，可以按照兄弟的处理办法来操作。</p>
<h5>画法</h5>
<p>​	1.将森林中的每棵树转换成相应的二叉树。</p>
<p>​	2.每棵树的根也可视为兄弟关系，在每棵树的根之间加一根连线。</p>
<p>​	3.以第一棵树的根为轴心顺时针旋转45°。</p>
<h4>森林的遍历</h4>
<p>1.先序遍历森林。若森林为非空，则按如下规则进行遍历:</p>
<p>​	1.访问森林中第一棵树的根结点。
​	2.先序遍历第一棵树中根结点的子树森林。
​	3.先序遍历除去第一棵树之后剩余的树构成的森林。</p>
<p>2.后序遍历森林。森林为非空时，按如下规则进行遍历:</p>
<p>​	1.后序遍历森林中第一棵树的根结点的子树森林。
​	2.访问第一棵树的根结点。
​	3.后序遍历除去第一棵树之后剩余的树构成的森林。</p>
<h2>二叉排序树</h2>
<p>​	二叉排序树(也称二叉查找树)或者是一棵空树，或者是具有下列特性的二叉树:</p>
<p>​	1.若左子树非空，则左子树上所有结点的值均小于根结点的值。</p>
<p>​	2.若右子树非空，则右子树上所有结点的值均大于根结点的值。</p>
<p>​	3.左、右子树也分别是一棵二叉排序树。</p>
<h4>性质</h4>
<p>​	根据二叉排序树的定义，左子树结点值&lt;根结点值&lt;右子树结点值，所以对二叉排序树进行中序遍历，可以得到一个递增的有序序列。</p>
<h4>缺点</h4>
<p>​	二叉排序树的查找性能取决于二叉排序树的形状。但如果数组元素的次序是从小到大有序，则二叉排序树就成了极端的右斜树。如果我们希望对一个集合按二叉排序树查找，最好是把它构建成一棵平衡的二叉排序树。</p>
<h4>平衡二叉排序树(AVL树)</h4>
<p>​	一种二叉排序树，其中每一个节点的左子树和右子树的高度差至多等于1。</p>
<p>​	当构建平衡二叉树时，每次不满足定义时，沿着不满足的地方找三个结点，将该三个结点按照跟结点为中间值，左节点为最小值，右节点为最大值重新排列，剩下的数字重新添加。</p>
<h2>哈夫曼树</h2>
<p>​	在含有n个带权叶结点的二叉树中，其中带权路径长度(WPL)最小的二叉树称为哈夫曼树，也称最优二叉树。
$$
WPL=\\sum_{i=1}^{n}w_il_i
$$
​	wi表示第i个结点所带的权值，li是该叶结点到根节点的路径长度。</p>
<h4>构造方法</h4>
<p>​	1.先把有权值的叶子结点按照从大到小（从小到大也可以）的顺序排列成一个有序序列。</p>
<p>​	2.取最后两个最小权值的结点作为一个新节点的两个子结点，注意相对较小的是左孩子。</p>
<p>​	3.用第2步构造的新结点替掉它的两个子节点，插入有序序列中，保持从大到小排列。</p>
<p>​	4.重复步骤2到步骤3，直到根节点出现。</p>
<h2>树的直径</h2>
<p>​	树上最远的两个节点之间的距离就被称为树的直径，连接这两点的路径被称为树的最长链。</p>
<h4>求解方法</h4>
<p>​	两次dfs。先从任意一点P出发，找离它最远的点Q，再从点Q出发，找离它最远的点W，W到Q的距离就是是的直径。</p>
<h5>例题</h5>
<p><a href="https://www.luogu.com.cn/problem/P1099">树网的核</a></p>
<pre><code class="language-c++">ll n, d;
struct k {
	ll to;
	ll val;
};
vector&lt;k&gt;f[31000];
ll dep[31000];
ll fa[31000];
ll v[31000];
ll far; //最远点
void dfs(ll x, ll father) {
	fa[x] = father;
	if (dep[x] &gt; dep[far])far = x;
	for (int i = 0; i &lt; f[x].size(); i++) {
		ll y = f[x][i].to;
		ll val = f[x][i].val;
		if (y == father || v[y])continue;
		dep[y] = dep[x] + val;
		dfs(y, x);
	}
}
int main() {
	fastread();
	cin &gt;&gt; n &gt;&gt; d;
	for (int i = 1; i &lt; n; i++) {
		ll x, y, len;
		cin &gt;&gt; x &gt;&gt; y &gt;&gt; len;
		f[x].push_back({ y, len });
		f[y].push_back({ x, len });
	}
	ll x, y;
	dep[1] = 1; dfs(1, 0);
	x = far;
	dep[far] = 0; dfs(far, 0);
	y = far;
	ll ans = 0x7fffffff;
	for (int i = y, j = y; i; i = fa[i]) {
		while (dep[j] - dep[i] &gt; d) {
			j = fa[j];
		}
		ans = min(ans, max(dep[y] - dep[j], dep[i]));
	}
	for (int i = y; i; i = fa[i]) {
		v[i] = 1;
	}
	for (int i = y; i; i = fa[i]) {
		dep[i] = 0;
		dfs(i, fa[i]);
	}
	for (int i = 1; i &lt;= n; i++) {
		ans = max(ans, dep[i]);
	}
	cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
	return 0;
}
</code></pre>
<h2>树的重心</h2>
<p>​	对于树上的每一个点，以此节点为根时计算其所有子树中最大的子树节点数，这个值最小的点就是这棵树的重心。说通俗点就是，删除此结点后，剩余连通块的结点数的最大值得到最小。</p>
<h4>求解方法</h4>
<p>​	从根节点DFS，返回值为子树大小。定义一个mx，使mx=max(dfs(该节点的子节点))。最后在枚举完子节点后，再判断他父亲那一块的大小。然后记录值。他父亲的大小为总结点树减去子树的大小。</p>
<pre><code class="language-c++">ll n;
struct edge {
	ll next;
	ll to;
}f[100005];
ll head[50005];
ll cnt = 1;
ll ans = 50005;
ll sum = 50005;
ll len = 0;
ll l[50005];
queue&lt;ll&gt;p;
void add(ll x, ll y) {
	f[cnt].next = head[x];
	f[cnt].to = y;
	head[x] = cnt++;
}
int dfs(ll x, ll father) {
	ll k = 0;
	ll mx = 0;
	for (int i = head[x]; i; i = f[i].next) {
		if (f[i].to != father) {
			ll xx = dfs(f[i].to, x);
			k += xx;
			mx = max(xx, mx);
		}
	}
	mx = max(mx, n - k - 1);
	if (mx &lt; sum || (mx == sum &amp;&amp; x &lt; ans)) {
		sum = mx;
		ans = x;
	}
	return k + 1;
}
void bfs() {
	p.push(ans);
	while (!p.empty()) {
		ll xx = p.front();
		p.pop();
		for (int i = head[xx]; i; i = f[i].next) {
			ll yy = f[i].to;
			if (l[yy] || yy == ans)continue;
			l[yy] = l[xx] + 1;
			len += l[yy];
			p.push(yy);
		}
	}
}
int main() {
	fastread();
	//memset(head, -1, sizeof(head));
	cin &gt;&gt; n;
	for (int i = 1; i &lt; n; i++) {
		ll x, y; cin &gt;&gt; x &gt;&gt; y;
		add(x, y);
		add(y, x);
	}
	dfs(1, 0);
	bfs();
	cout &lt;&lt; ans &lt;&lt; &quot; &quot; &lt;&lt; len &lt;&lt; &quot;\\n&quot;;
	return 0;
}
</code></pre>
<h2>图的基本概念</h2>
<h4>有向图</h4>
<p>​	若E是有向边(也称弧)的有限集合时，则图G为有向图。弧是顶点的有序对，记为&lt;v, w&gt;，其中v,w是顶点，v称为弧尾，w称为弧头，&lt;v,w&gt;称为从顶点v到顶点w的弧，也称v邻接到w，或w邻接自v。</p>
<h4>无向图</h4>
<p>​	若E是无向边(简称边)的有限集合时，则图G为无向图。边是顶点的无序对，记为(v, w)或(w,v),因为(v,w)=(w,v), 其中v,w是顶点。可以说顶点w和顶点v互为邻接点。边(v, w)依附于顶点w和v，或者说边(v, w)和顶点v, w相关联。</p>
<h4>简单图</h4>
<p>​	图中不存在重复边，不存在顶点到自身的边。</p>
<h4>多重图</h4>
<p>​	若图G中某两个结点之间的边数多于一条，又允许顶点通过同一条边和自己关联，则G为多重图。多重图的定义和简单图是相对的。</p>
<h4>完全图</h4>
<p>​	在完全图中任意两个顶点之间都存在边。无向图中任意两点间有一条边即可，在有向图中，任意两点需要有相互指的两条边。</p>
<h4>子图</h4>
<p>​	设有两个图G=(V，E)和G'=(V'，E')，若V'为V'的子集，E'为E的子集，则称G'为G的子图。</p>
<h4>连通</h4>
<p>​	若图内两点存在路径，则说这两点是联通的。</p>
<h4>连通图</h4>
<p>​	若图内任意两点均是连通的，则称该图为连通图。</p>
<h4>连通分量</h4>
<p>​	无向图中的极大连通子图称为连通分量。</p>
<h4>极大连通子图</h4>
<p>​	极大连通子图是无向图的连通分量，极大即要求该连通子图包含其所有的边;极小连通子图是既要保持图连通又要使得边数最少的子图。</p>
<h4>强连通图</h4>
<p>​	若图中任何一对顶点都是强连通的，则称此图为强连通图。</p>
<h4>强连通分量</h4>
<p>​	有向图中的极大强连通子图称为有向图的强连通分量。</p>
<h4>生成树</h4>
<p>​	连通图的生成树是包含图中全部顶点的一个极小连通子图。</p>
<h4>生成森林</h4>
<p>​	在非连通图中，连通分量的生成树构成了非连通图的生成森林。</p>
<h4>顶点的度</h4>
<p>​	图中每个顶点的度定义为以该项点为一个端点的边的数目。</p>
<p>​	对于无向图，顶点v的度是指依附于该顶点的边的条数，记为TD(v)。</p>
<h4>入度和出度</h4>
<p>​	对于有向图,顶点v的度分为入度和出度,入度是以顶点v为终点的有向边的数目，记为ID(v); 而出度是以顶点v为起点的有向边的数目，记为OD(v)。</p>
<h4>边的权和网</h4>
<p>​	在一个图中，每条边都可以标上具有某种含义的数值，该数值称为该边的权值。这种边上带有权值的图称为带权图，也称网。</p>
<h4>稠密图与稀疏图</h4>
<p>​	边数很少的图称为稀疏图，反之称为稠密图。稀疏和稠密本身是模糊的概念，稀疏图和稠密图常常是相对而言的。</p>
<h4>路径、路径长度和回路</h4>
<p>​	路径上边的数目称为路径长度。第一个顶点和最后一个顶点相同的路径称为回路或环。</p>
<h4>简单路径、简单回路</h4>
<p>​	在路径序列中，顶点不重复出现的路径称为简单路径。除第一个顶点和最后一个顶点外，其余顶点不重复出现的回路称为简单回路。</p>
<h4>距离</h4>
<p>​	从顶点u出发到顶点v的最短路径若存在，则此路径的长度称为从u到v的距离。</p>
<h4>有向树</h4>
<p>​	一个顶点的入度为0、其余顶点的入度均为1的有向图，称为有向树。</p>
<h2>图的存储方式</h2>
<h4>邻接矩阵</h4>
<p>​	对于一个有n个顶点的图来说，用一个n*n的二维数组表示图中顶点的链接关系。如果顶点i与j之间存在链接，则令图[i,j]位置存1，如果为无向图则在[j,i]位置也存1。</p>
<pre><code class="language-c++">for (int i = 1; i &lt;= n; i++) {
	ll x, y; cin &gt;&gt; x &gt;&gt; y;
	o[x][y] = 1;
	o[y][x] = 1;
}
</code></pre>
<h4>邻接表存储</h4>
<p>​	使用动态数组来存边。其中每个数组存取的是所有出边的相关信息。</p>
<pre><code class="language-c++">ll val[210000];
vector&lt;ll&gt;to[210000];
</code></pre>
<h4>链式前向星</h4>
<p>​	如果说邻接表是不好写但效率好，邻接矩阵是好写但效率低的话，前向星就是一个相对中庸的数据结构。前向星固然好写，但效率并不高。而在优化为链式前向星后，效率也得到了较大的提升。</p>
<p>​	前向星是一种特殊的边集数组，我们把边集数组中的每一条边按照起点从小到大排序，如果起点相同就按照终点从小到大排序，并记录下以某个点为起点的所有边在数组中的起始位置和存储长度，那么前向星就构造好了。</p>
<pre><code class="language-c++">struct edge {
	ll next;  //表示这条边指向的下一条相同起点的边的编号
	ll to;    //表示第i条边的终点
	ll val;   //边权值 
}edge[Nn&gt;&gt;1];
ll head[NN]={-1}; //head的下标表示节点的标号 存的以该节点为起点添加进来的最后一条边
ll cnt = 1; //边的编号
void add(ll x, ll y, ll val) {
	edge[cnt].next = head[x];
	edge[cnt].to = y;
	edge[cnt].val = val;
	head[x] = cnt++;
}
//注意: head数组需要初始化为-1
//注意: 建出来的图为单向图 如果要为双向图 需要再反向建图
</code></pre>
<h4>使用情景</h4>
<p>1.如果是稀疏图(顶点很多、边很少)，一般用邻接表；</p>
<p>2.如果是稠密图(顶点很少、边很多)，一般用邻接矩阵；</p>
<p>3.链式前向星是一种图的存储方式，相比于邻接矩阵和邻接表 ，链式前向星是一种静态链表存储，用边集数组和邻接表相结合，可以快速访问一个顶点的所有邻接点。</p>
<h2>图的连通性判断</h2>
<p>​	图的遍历算法可以用来判断图的连通性。</p>
<h4>无向图</h4>
<p>​	若无向图是连通的，则从任一结点出发， 仅需一次遍历就能够访问图中的所有顶点；若无向图是非连通的，则从某一个顶点出发，一次遍历只能访问到该顶点所在连通分量的所有顶点，而对于图中其他连通分量的顶点，则无法通过这次遍历访问。</p>
<h4>有向图</h4>
<p>​	若从初始点到图中的每个顶点都有路径，则能够访问到图中的所有顶点，否则不能访问到所有顶点。</p>
<h2>最小生成树</h2>
<h4>Prim算法（普里姆算法）</h4>
<h5>算法原理</h5>
<p>​	每次将离连通部分的最近的点和点对应的边加入的连通部分，连通部分逐渐扩大，最后将整个图连通起来，并且边长之和最小。</p>
<p>​	Prim 算法本质上采用的是一种贪心的策略。</p>
<h5>模板</h5>
<pre><code class="language-c++">ll g[2100][2100];//邻接矩阵存储图
ll dist[2100]; //存储最小生成树距离
bool v[2100];//访问标记
ll n, m;//n个点 m个边
ll ans = 0;//存储答案
void prim() {
    memset(v, false, sizeof(v)); //初始化最小生成树标记
    memset(dist, 0x3f, sizeof(dist));//初始化距离为最大
    for (int i = 0; i &lt; n; i++) {
        int fnow = -1;//初始化为没有找到的点
        for (int j = 1; j &lt;= n; j++) {
            if (!v[j] &amp;&amp; (fnow == -1 || dist[j] &lt; dist[fnow])) {
                fnow = j;
            }
        }
        if (i &amp;&amp; dist[fnow] == 1e18) {
            ans = 1e18;
            return; 
        }
        if (i)ans += dist[fnow];
        for (int j = 1; j &lt;= n; j++) {//更新当前最短边权点t到集合的距离
            dist[j] = min(dist[j], g[fnow][j]);
        }
        v[fnow] = true;
    }
    return;
}
void solve() { 
    cin &gt;&gt; n &gt;&gt; m;
    memset(g, 0x3f, sizeof(g));//将各点距离初始化为最远
    for (int i = 1; i &lt;= m; i++) {
        ll x, y, val; cin &gt;&gt; x &gt;&gt; y &gt;&gt; val;//无向图两点 和 权值
        g[x][y] = g[y][x] = min(val,g[x][y]);//鲁棒性 防止出现重边
    }
    prim();
    if (ans == 1e18)cout &lt;&lt; &quot;orz\\n&quot;;
    else cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h5>总结</h5>
<p>​	效率不高，存图费劲，用堆优化了也没啥区别，学学思想就OK了。</p>
<h4>Kruscal算法（克鲁斯卡尔算法）</h4>
<h5>算法原理</h5>
<p>​	首先我们把所有的边按照权值先从小到大排列，接着按照顺序选取每条边，如果这条边的两个端点不属于同一集合，那么就将它们合并，直到所有的点都属于同一个集合为止。</p>
<p>​	Kruscal算法本质上也采用的是一种贪心的策略。</p>
<h5>实现步骤</h5>
<ul>
<li>将所有边按照权值的大小进行升序排序，然后从小到大一一判断。</li>
<li>如果这个边与之前选择的所有边不会组成回路，就选择这条边分；反之，舍去。</li>
<li>直到具有 n 个顶点的连通网筛选出来 n-1 条边为止。</li>
<li>筛选出来的边和所有的顶点构成此连通网的最小生成树。</li>
</ul>
<h5>判断回路</h5>
<p>​	使用并查集。</p>
<h4>模板</h4>
<pre><code class="language-c++">ll n;//共有n个元素
ll m;//共有m条边
ll f[210000];//父节点数组
ll ans = 0;
struct edge {
    ll x, y, val;
}o[210000];
bool cmpval(edge a,edge b) {
    return a.val &lt; b.val;
}
void Init() { //初始化
    for (int i = 1; i &lt;= n; i++) {
        f[i] = i;
    }
}
int Find(int x) {//查询优化  路径压缩
    return f[x] == x ? f[x] : f[x] = Find(f[x]);//使元素直接指向树的根 
}
void Kruskal() {
    Init();
    sort(o + 1, o + 1 + m, cmpval);
    ll cnt = 0;//加入的边数
    for (int i =1; i &lt;= m; i++) {
        ll u = Find(o[i].x);
        ll v = Find(o[i].y);
        if (u != v) {
            f[u] = v;
            cnt++;
            ans += o[i].val;
        }
        if (cnt == n - 1)break;
    }
    if (cnt == n - 1)return;
    else {
        ans = 0x3f3f3f3f; return;
    }
}
void solve() { 
    cin &gt;&gt; n &gt;&gt; m;
    for (int i = 1; i &lt;= m; i++) {
        edge now; cin &gt;&gt; now.x &gt;&gt; now.y &gt;&gt; now.val;
        o[i] = now;
    }
    Kruskal();
    if (ans == 0x3f3f3f3f)cout &lt;&lt; &quot;orz\\n&quot;;
    else  cout &lt;&lt; ans &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h2>最短路径</h2>
<p>​	在网图和非网图中，最短路径的含义是不同的。</p>
<p>​	由于非网图它没有边上的权值，所谓的最短路径，其实就是指两顶点之间经过的边数最少的路径。</p>
<p>​	对于网图来说，最短路径，是指两顶点之间经过的边上权值之和最少的路径，并且我们称路径上的第一个顶点是源点，最后一个顶点是终点。</p>
<h4>Dijkstra算法（迪杰斯特拉）</h4>
<p>​	Dijkstra算法用于构建单源点的最短路径—，即图中某个点到任何其他点的距离都是最短的。</p>
<p>​	此算法使用类似广度优先搜索的方法解决了带权图的单源最短路径问题。它是一个贪心算法。</p>
<p>​	注意：Dijkstra算法不能用于带负权边。</p>
<h5>朴素Dijkstra</h5>
<p>​	进行n（n为n的个数）次迭代去确定每个点到起点的最小值，最后输出的终点的即为我们要找的最短路的距离。</p>
<p>​	在图为稠密图的时候效率更优。</p>
<h6>模板</h6>
<pre><code class="language-c++">struct edge {
    ll next;  //表示这条边指向的下一条相同起点的边的编号
    ll to;    //表示第i条边的终点
    ll val;   //边权值 
}edge[1000000];
ll head[20000] = { -1 }; //head的下标表示节点的标号 存的以该节点为起点添加进来的最后一条边
ll cnt = 0; //边的编号
void add(ll x, ll y, ll val) {
    cnt++;
    edge[cnt].next = head[x];
    edge[cnt].to = y;
    edge[cnt].val = val;
    head[x] = cnt;
}
ll dist[20000]; //用于存储每个点到起点的最短距离
bool v[20000] = { false };   //是否作为过起点
ll n, m;         //n个点m个边
ll be; //开始点
void Dijkstra() {
    for (int i = 1; i &lt;= n; i++)dist[i] = pow(2, 31) - 1;
    dist[be] = 0;
    while (!v[be]) {
        v[be] = true;
        for (int i = head[be]; i != 0; i = edge[i].next)//链式前向星搜边
        {
            if (!v[edge[i].to] &amp;&amp; dist[edge[i].to] &gt; dist[be] + edge[i].val)
                dist[edge[i].to] = dist[be] + edge[i].val;//更新操作
        }
        ll mn = 0x3f3f3f;
        for (int i = 1; i &lt;= n; i++)
        {
            if (!v[i] &amp;&amp; mn &gt; dist[i])//取新的最小值
            {
                mn = dist[i];
                be = i;
            }
        }
    }
}
void solve() {
    cin &gt;&gt; n &gt;&gt; m &gt;&gt; be;
    for (int i = 1; i &lt;= m; i++) {
        ll x, y, val; cin &gt;&gt; x &gt;&gt; y &gt;&gt; val; //一条有向边
        add(x, y, val);
    }
    Dijkstra();
    for (int i = 1; i &lt;= n; i++)cout &lt;&lt; dist[i] &lt;&lt; &quot; &quot;;
    cout &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h5>堆优化版Dijkstra</h5>
<p>​	当是稀疏图（n和m是同一级别）时，可能堆优化版的Dijkstra会好一些。</p>
<h6>模板</h6>
<pre><code class="language-c++">struct edge {
    ll next;  //表示这条边指向的下一条相同起点的边的编号
    ll to;    //表示第i条边的终点
    ll val;   //边权值 
}edge[1000000];
ll head[200010] = { -1 }; //head的下标表示节点的标号 存的以该节点为起点添加进来的最后一条边
ll cnt = 0; //边的编号
void add(ll x, ll y, ll val) {
    cnt++;
    edge[cnt].next = head[x];
    edge[cnt].to = y;
    edge[cnt].val = val;
    head[x] = cnt;
}
ll dist[200010]; //用于存储每个点到起点的最短距离
bool v[200010] = { false };   //是否作为过起点
ll n, m;         //n个点m个边
ll be; //开始点
struct node {
    ll dis;
    ll pos;
    bool operator&lt;(const node&amp; x)const {
        return x.dis &lt; dis;
    }
};
priority_queue&lt;node&gt;p;
void Dijkstra() {
    for (int i = 1; i &lt;= n; i++)dist[i] = pow(2, 31) - 1;
    dist[be] = 0;
    p.push(node{ 0,be });
    while (p.size()) {
        node now = p.top();
        p.pop();
        ll x = now.pos;
        if (v[x])continue;
        v[x] = true;
        for (int i = head[x]; i; i = edge[i].next)//链式前向星搜边
        {
            if (dist[edge[i].to] &gt; dist[x] + edge[i].val) {
                dist[edge[i].to] = dist[x] + edge[i].val;//更新操作
                if (!v[edge[i].to])p.push(node{ dist[edge[i].to] ,edge[i].to });
            }
        }
    }
}
void solve() {
    cin &gt;&gt; n &gt;&gt; m &gt;&gt; be;
    for (int i = 1; i &lt;= m; i++) {
        ll x, y, val; cin &gt;&gt; x &gt;&gt; y &gt;&gt; val; //一条有向边
        add(x, y, val);
    }
    Dijkstra();
    for (int i = 1; i &lt;= n; i++)cout &lt;&lt; dist[i] &lt;&lt; &quot; &quot;;
    cout &lt;&lt; &quot;\\n&quot;;
}
</code></pre>
<h4>Floyd算法</h4>
<p>​	Floyd 属于多源最短路径算法，能够求出任意2个顶点之间的最短路径，支持负权边。</p>
<h5>原理</h5>
<p>​	从任意顶点 i 到任意顶点 j 的最短路径不外乎两种可能：1.直接从 i 到 j    2.从 i 经过若干个顶点到 j</p>
<h5>模板</h5>
<pre><code class="language-c++">ll dist[5100][5100];
ll n, m;//n个点m条边
void Floyd() {
    for (int k = 1; k &lt;= n; k++)
        for (int i = 1; i &lt;= n; i++)
            for (int j = 1; j &lt;= n; j++)
               dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]);
}
void solve() {
    cin &gt;&gt; n &gt;&gt; m;
    for (int i = 1; i &lt;= n; i++) {
        for (int j = 1; j &lt;= n; j++) {
            if (i == j)dist[i][j] = 0;
            else dist[i][j] = 0x7fffffff;
        }
    }
    for (int i = 1; i &lt;= m; i++) {
        ll x, y, val; cin &gt;&gt; x &gt;&gt; y &gt;&gt; val;
        dist[x][y] = dist[y][x] = min(val, dist[x][y]);
    }
    Floyd();
    for (int i = 1; i &lt;= n; i++) {
        for (int j = 1; j &lt;= n; j++) {
            cout &lt;&lt; dist[i][j] &lt;&lt; &quot; &quot;;
        }
        cout &lt;&lt; &quot;\\n&quot;;
    }
}
</code></pre>
<h2>拓扑排序</h2>
<p>​	在一个表示工程的有向图中，用顶点表示活动，用弧表示活动之间的优先关系，这样的有向图为顶点表示活动的网，我们称为AOV网( Activity On VertexNetwork)。</p>
<p>​	AOV网（Activity On Vertex Network），AOV是一个有向无环图（Directed acyclic graph），简称DAG。</p>
<p>​	AOV网的顶点表示一个事件。</p>
<p>​	AOV网的有向边表示终点的事件必须先于起点。</p>
<p>​	这样的一个AOV网有助于我们分析一件大事所分成的小事的完成先后。</p>
<p>​	 有了AOV网，我们就可以借助拓扑排序算法，来给小事分个先后。</p>
<h4>拓扑排序的步骤</h4>
<p>​	1.按照一定的顺序进行构造有向图，记录后个节点的入度；</p>
<p>​	2.从图中选择一个入度为0的顶点,输出该顶点;</p>
<p>​	3.从图中删除该顶点及所有与该顶点相连的边</p>
<p>​	4.重复上述两步，直至所有顶点输出。</p>
<p>​	5.或者当前图中不存在入度为0的顶点为止。此时可说明图中有环。</p>
<p>​	6.因此，也可以通过拓扑排序来判断一个图是否有环。</p>
<h4>模板</h4>
<pre><code class="language-c++">ll n;//n个点
ll ru[2100];//入度数组
vector&lt;ll&gt;o[2100];
queue&lt;ll&gt;p; //拓扑排序
queue&lt;ll&gt;ans;//排序结果
void toposort() {
    while (!p.empty()) {
        auto t = p.front();
        p.pop();
        ans.push(t);
        for (auto x : o[t]) {
            ru[x]--;
            if (ru[x] == 0) {
                p.push(x);
            }
        }
    }
    return;
}
void solve() {
    cin &gt;&gt; n;
    for (int i = 1; i &lt;= n; i++) {
        ll x;
        while (cin &gt;&gt; x &amp;&amp; x) {
            o[i].push_back(x);
            ru[x]++;
        }
    }
    for (int i = 1; i &lt;= n; i++) {
        if (ru[i] == 0) {
            p.push(i);
        }
    }
    toposort();
    while (ans.size())cout &lt;&lt; ans.front() &lt;&lt; &quot; &quot;, ans.pop();
}
</code></pre>
<h2>关键路径</h2>
<p>​	从源点到汇点的有向路径可能有多条，所有路径中，具有最大路径长度的路径称为关键路径，而把关键路径上的活动称为关键活动。</p>
<p>​    完成整个工程的最短时间就是关键路径的长度，若关键活动不能按时完成，则整个工程的完成时间就会延长。</p>
<h4>步骤</h4>
<p>（1）求所有事件的最早发生时间ve()；</p>
<p>（2）求所有事件的最迟发生时间vl()；</p>
<p>（3）求所有活动的最早发生事件e()；</p>
<p>（4）求所有活动的最迟发生时间l()；</p>
<p>（5）求所有活动的时间余量d()；</p>
<p>（6）d(i)=0的就是关键活动，所有关键活动组成的路径即为关键路径。</p>
`;export{n as attributes,t as html};
